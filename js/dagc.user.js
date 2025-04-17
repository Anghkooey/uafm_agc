// ==UserScript==
// @name         D-AGC (Dziekanat Average Grade Calculator)
// @namespace    https://github.com/Anghkooey/student
// @version      2.0
// @author       https://github.com/Anghkooey/
// @match        https://dziekanat.uafm.edu.pl/TokStudiow/StudentPrzedmiotyIOceny/Oceny
// @grant        none
// @description  A userscript to calculate and display the average, minimum, and maximum grades for courses from the Dziekanat platform, with color-coded grade representation.
// ==/UserScript==

(() => {
    /**
     * Parses a string representing a number with a comma as a decimal separator into a float.
     * @param {string} s - The string to be parsed.
     * @returns {number} The parsed float value.
     */
    const parseGrade = s => parseFloat(s.replace(",", "."));
  
    /**
     * Formats a grade string by removing unnecessary zeros (e.g., 4,00 → 4).
     * @param {string} s - The grade string to be formatted.
     * @returns {string} The formatted grade string.
     */
    const formatGrade = s => s.endsWith(",00") ? s.replace(",00", "") : s.endsWith("0") ? s.slice(0, -1) : s;
  
    /**
     * Determines the color for the grade based on its value.
     * This function follows the color hierarchy of grade ranges:
     * - 4.8 and above -> dark green
     * - 4.5 and above -> green
     * - 4.0 and above -> light green
     * - 3.5 and above -> orange
     * - 3.0 and above -> red-orange
     * - below 3.0 -> red
     * @param {string} grade - The grade value as a string.
     * @returns {string} The CSS color corresponding to the grade.
     */
    const determineGradeColor = grade => {
      const value = parseGrade(grade);
      return value >= 4.8 ? "darkgreen" : value >= 4.5 ? "green" : value >= 4 ? "#66cc66" : value >= 3.5 ? "#FF8C00" : value >= 3 ? "orange" : "red";
    };
  
    /**
     * Creates a table cell element with the provided value and optional color.
     * @param {string} value - The value to be displayed in the cell.
     * @param {number} i - An optional index used to determine if color should be applied.
     * @returns {HTMLElement} The created table cell element.
     */
    const createTableCell = (value, i = 0) => {
      const td = document.createElement("td");
      td.textContent = value;
      td.style.cssText = "font-weight:bold;text-align:center;";
      if (i) td.style.setProperty("color", determineGradeColor(value), "important");
      return td;
    };
  
    /**
     * Creates a row element with the provided values. Optionally, can be a header row.
     * @param {Array<string>} values - The values to be displayed in the row cells.
     * @param {boolean} header - Whether the row is a header row (default is false).
     * @returns {HTMLElement} The created row element.
     */
    const createTableRow = (values, header = false) => {
      const tr = document.createElement("tr");
      if (header) tr.className = "agc-stats";
      values.forEach((value, i) => tr.appendChild(header ? Object.assign(document.createElement("th"), {textContent: value, style: "background:#f0f0f0"}) : createTableCell(formatGrade(value), i)));
      return tr;
    };
  
    /**
     * Extracts grade and ECTS data from the tables on the page and appends calculated statistics.
     * It calculates the average, minimum, and maximum grades for the courses with and without ECTS.
     */
    const extractGradeData = () => {
      document.querySelectorAll(".card-body table").forEach(table => {
        const headerCells = table.querySelectorAll("thead th");
        const rows = table.querySelectorAll("tbody tr");
        let indexECTS = -1, indexGrade = -1;
  
        // Identify column indices for "Punkty ECTS" and "Ocena"
        headerCells.forEach((cell, index) => {
          const text = cell.textContent.trim();
          if (text === "Punkty ECTS") indexECTS = index;
          if (text === "Ocena") indexGrade = index;
        });
  
        if (indexECTS === -1 || indexGrade === -1) return;
  
        const allGrades = [], gradesWithECTS = [];
        rows.forEach(row => {
          const cells = row.querySelectorAll("td");
          if (cells.length <= Math.max(indexECTS, indexGrade)) return;
  
          const grade = parseGrade(cells[indexGrade].textContent.trim().replace(",", "."));
          const ects = cells[indexECTS].textContent.trim();
          if (!isNaN(grade)) {
            allGrades.push(grade);
            if (ects) gradesWithECTS.push(grade);
          }
        });
  
        // Remove previous statistics row if exists
        const existingStatsRow = table.querySelector(".agc-stats");
        if (existingStatsRow) existingStatsRow.remove();
  
        if (!allGrades.length) return;
  
        // Helper functions to calculate statistics
        const calculateAverage = arr => (arr.reduce((sum, value) => sum + value, 0) / arr.length).toFixed(2).replace(".", ",");
        const calculateMin = arr => Math.min(...arr).toFixed(2).replace(".", ",");
        const calculateMax = arr => Math.max(...arr).toFixed(2).replace(".", ",");
  
        const tbody = table.querySelector("tbody");
  
        // Append the statistics row
        tbody.appendChild(createTableRow(["Statystyka", "Średnia ocena", "Najniższa ocena", "Najwyższa ocena"], true));
        tbody.appendChild(createTableRow(["ECTS", calculateAverage(gradesWithECTS), calculateMin(gradesWithECTS), calculateMax(gradesWithECTS)]));
        tbody.appendChild(createTableRow(["Ogółem", calculateAverage(allGrades), calculateMin(allGrades), calculateMax(allGrades)]));
      });
    };
  
    /**
     * Checks if the URL includes the specific query parameter that indicates the target page.
     * @param {string} url - The URL to check.
     * @returns {boolean} Whether the URL matches the target condition.
     */
    const isTargetPage = url => url?.includes("&PokazujOceneItermin=True");
  
    /**
     * Hooks into the XMLHttpRequest API to monitor requests and trigger data extraction when appropriate.
     */
    const hookXMLHttpRequest = () => {
      const originalOpen = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function(_, url) {
        this._url = url;
        return originalOpen.apply(this, arguments);
      };
      const originalSend = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.send = function() {
        this.addEventListener("load", () => isTargetPage(this._url) && extractGradeData());
        return originalSend.apply(this, arguments);
      };
    };
  
    /**
     * Hooks into the Fetch API to monitor fetch requests and trigger data extraction when appropriate.
     */
    const hookFetch = () => {
      const originalFetch = window.fetch;
      window.fetch = (...args) => originalFetch(...args).then(response => {
        const url = args[0] instanceof Request ? args[0].url : args[0];
        if (isTargetPage(url)) extractGradeData();
        return response;
      });
    };
  
    // Initialize XMLHttpRequest and Fetch hooks
    hookXMLHttpRequest();
    hookFetch();
  })();
  