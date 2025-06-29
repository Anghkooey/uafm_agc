// ==UserScript==
// @name         D-AGC (Dziekanat Average Grade Calculator)
// @namespace    https://github.com/Anghkooey/student
// @version      2.1
// @author       https://github.com/Anghkooey/
// @match        https://dziekanat.uafm.edu.pl/TokStudiow/StudentPrzedmiotyIOceny/Oceny
// @grant        none
// @description  A userscript to calculate and display the average, minimum, and maximum grades for courses from the Dziekanat platform, with color-coded grade representation.
// ==/UserScript==

(() => {
    // Parses a string representing a number with a comma as a decimal separator into a float.
    const parseGrade = s => parseFloat(s.replace(",", "."));

    // Formats a grade string by removing unnecessary zeros (e.g., 4,00 → 4).
    const formatGrade = s => s.endsWith(",00") ? s.replace(",00", "") : s.endsWith("0") ? s.slice(0, -1) : s;

    // Determines the color for the grade based on its value.
    const determineGradeColor = grade => {
        const value = parseGrade(grade);
        return value >= 4.8 ? "darkgreen" :
               value >= 4.5 ? "green" :
               value >= 4   ? "#66cc66" :
               value >= 3.5 ? "orange" :
               value >= 3   ? "#FF8C00" :
                              "red";
    };

    // Creates a table cell element with the provided value and optional color.
    const createTableCell = (value, colorFlag = false) => {
        const td = document.createElement("td");
        td.textContent = value;
        td.style.cssText = "font-weight:bold;text-align:center;";
        if (colorFlag) td.style.setProperty("color", determineGradeColor(value), "important");
        return td;
    };

    // Creates a row element with the provided values. Optionally, can be a header row.
    const createTableRow = (values, header = false) => {
        const tr = document.createElement("tr");
        tr.classList.add("agc-stats");
        values.forEach((value, i) => {
            if (header) {
                const th = document.createElement("th");
                th.textContent = value;
                th.style.background = "#f0f0f0";
                tr.appendChild(th);
            } else {
                tr.appendChild(createTableCell(formatGrade(value), i > 0));
            }
        });
        return tr;
    };

    // Extracts grade and ECTS data from the tables on the page and appends calculated statistics.
    const extractGradeData = () => {
        document.querySelectorAll(".card-body table").forEach(table => {
            // Remove previous statistics rows if they exist
            table.querySelectorAll("tr.agc-stats").forEach(row => row.remove());

            const headerCells = table.querySelectorAll("thead th");
            const rows = table.querySelectorAll("tbody tr");
            let indexECTS = -1, indexGrade = -1;

            // Identify column indices for "Punkty ECTS" and "Ocena"
            headerCells.forEach((cell, index) => {
                const text = cell.textContent.trim();
                if (text === "Punkty ECTS") indexECTS = index;
                if (text === "Ocena") indexGrade = index;
            });

            // Abort if required columns are not found
            if (indexECTS === -1 || indexGrade === -1) return;

            const allGrades = [], gradesWithECTS = [];

            // Collect grades and filter ECTS-valid entries
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

            // Skip if no grades are present
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

    // Checks if the URL includes the specific query parameter that indicates the target page.
    const isTargetPage = url => url?.includes("&PokazujOceneItermin=True");

    // Hooks into the XMLHttpRequest API to monitor requests and trigger data extraction when appropriate.
    const hookXMLHttpRequest = () => {
        const originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(_, url) {
            this._url = url;
            return originalOpen.apply(this, arguments);
        };

        const originalSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function() {
            this.addEventListener("load", () => {
                if (isTargetPage(this._url)) extractGradeData();
            });
            return originalSend.apply(this, arguments);
        };
    };

    // Hooks into the Fetch API to monitor fetch requests and trigger data extraction when appropriate.
    const hookFetch = () => {
        const originalFetch = window.fetch;
        window.fetch = (...args) => {
            const url = args[0] instanceof Request ? args[0].url : args[0];
            if (isTargetPage(url)) extractGradeData();
            return originalFetch(...args);
        };
    };

    // Run grade extraction immediately on page load (to handle initial static content)
    extractGradeData();

    // Initialize XMLHttpRequest and Fetch hooks
    hookXMLHttpRequest();
    hookFetch();
})();
