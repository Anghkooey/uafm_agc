// ==UserScript==
// @name         P-AGC (Platform Average Grade Calculator)
// @namespace    https://github.com/Anghkooey/uafm_agc
// @version      1.9
// @author       https://github.com/Anghkooey/
// @match        https://platforma.uafm.edu.pl/platform/groupdetails/*
// @description  Calculates and displays average grade based on scored tasks, with optional inclusion of unscored tasks.
// @grant        none
// @run-at       document-end
// ==/UserScript==

(() => {
  // Global aggregation variables used across the grade calculation lifecycle
  let totalPoints = 0,             // Sum of all points earned from scored tasks
      maxPoints = 0,               // Sum of all maximum points possible from scored tasks
      totalPercentage = 0,         // Sum of each task's individual percentage (used to compute average)
      taskCount = 0,               // Number of scored tasks considered in the calculation
      includeUnscoredTasks = false,// User-controlled flag to include or exclude unscored (0 pt) tasks
      tableWidth = 0;              // Cached width of grade table for layout consistency

  /**
   * Core function that:
   * - Parses all visible tasks on the page
   * - Extracts points earned and total available for each task
   * - Aggregates data for computing average percentage and grade
   * - Dynamically updates or creates grade and toggle tables in the DOM
   */
  const updateTable = () => {
    // Reset aggregates for recalculation
    totalPoints = maxPoints = totalPercentage = taskCount = 0;
    let hasUnscoredTasks = false;

    // Iterate over each task and extract grade data
    document.querySelectorAll("li.kraken3-task").forEach(taskElement => {
      const taskData = taskElement.querySelector(".kraken3-task__status_path .currentStatus")?.textContent.match(/(\d+)\s*\/\s*(\d+)\s*pts/);
      if (taskData) {
        const [earnedPoints, possiblePoints] = [+taskData[1], +taskData[2]];
        if (earnedPoints === 0) hasUnscoredTasks = true;
        if (includeUnscoredTasks && earnedPoints === 0) return;

        // Update aggregates
        totalPoints += earnedPoints;
        maxPoints += possiblePoints;
        totalPercentage += Math.floor(earnedPoints / possiblePoints * 100);
        taskCount++;
      }
    });

    // Prepare and round average percentage
    let gradeTable = document.getElementById("zgm");
    const averagePercentage = Math.round(totalPercentage / taskCount * 100) / 100;

    // Determine final grade and color based on percentage thresholds
    const gradeClass = averagePercentage >= 90 ? ["5", "darkgreen"]
      : averagePercentage >= 80 ? ["4.5", "green"]
        : averagePercentage >= 70 ? ["4", "#66cc66"]
          : averagePercentage >= 60 ? ["3.5", "#FF8C00"]
            : averagePercentage >= 50 ? ["3", "orange"] : ["2", "red"];

    // Calculate what the grade would be with a hypothetical +5% boost
    let gradeDisplay = gradeClass[0] === (averagePercentage + 5 >= 90 ? "5" : averagePercentage + 5 >= 80 ? "4.5" : averagePercentage + 5 >= 70 ? "4" : averagePercentage + 5 >= 60 ? "3.5" : averagePercentage + 5 >= 50 ? "3" : "2")
      ? `<span style="color:${gradeClass[1]};text-align:center;display:block">${gradeClass[0]}</span>`
      : `<span style="color:${gradeClass[1]};text-align:left;display:inline-block;width:45%">${gradeClass[0]}</span>
         <span style="color:gray;text-align:center;display:inline-block;width:10%">/</span>
         <span style="color:gray;text-align:right;display:inline-block;width:45%">${averagePercentage + 5 >= 90 ? "5" : averagePercentage + 5 >= 80 ? "4.5" : averagePercentage + 5 >= 70 ? "4" : averagePercentage + 5 >= 60 ? "3.5" : averagePercentage + 5 >= 50 ? "3" : "2"}</span>`;

    // If grade table doesn't exist yet, create and insert it
    if (!gradeTable) {
      gradeTable = document.createElement("table");
      gradeTable.id = "zgm";
      gradeTable.style = "margin:20px auto;border-collapse:collapse;width:auto;font:18px 'Roboto',sans-serif";
      document.querySelector(".kraken3-task")?.parentNode.insertBefore(gradeTable, document.querySelector(".kraken3-task"));
    }

    // Update table contents with the current stats
    gradeTable.innerHTML = taskCount ? `
      <thead>
        <tr style="background:#f1f1f1;color:gray;text-align:center">
          <th style="font-weight:bold">Stat</th>
          <th style="font-weight:bold">Uzyskano</th>
          <th style="font-weight:bold">Max</th>
        </tr>
      </thead>
      <tbody>
        <tr style="text-align:center">
          <td style="font-weight:bold">Ocena</td>
          <td style="font-weight:bold">${gradeDisplay}</td>
          <td style="font-weight:bold;color:black">5</td>
        </tr>
        <tr style="text-align:center">
          <td style="font-weight:bold">pts</td>
          <td style="font-weight:bold;color:${gradeClass[1]}">${totalPoints}</td>
          <td style="font-weight:bold;color:black">${maxPoints}</td>
        </tr>
        <tr style="text-align:center">
          <td style="font-weight:bold">%</td>
          <td style="font-weight:bold;color:${gradeClass[1]}">${averagePercentage}%</td>
          <td style="font-weight:bold;color:black">100%</td>
        </tr>
      </tbody>` : "";

    // Show/hide the grade table depending on toggle state
    gradeTable.style.display = taskCount && !includeUnscoredTasks ? "table" : "none";
    if (taskCount && !includeUnscoredTasks) tableWidth = gradeTable.offsetWidth;

    // Handle UI toggle to include/exclude unscored tasks in calculations
    let toggleTable = document.getElementById("qop");
    if (hasUnscoredTasks || includeUnscoredTasks) {
      if (!toggleTable) {
        toggleTable = document.createElement("table");
        toggleTable.id = "qop";
        toggleTable.style = "margin:-20px auto 20px auto;border-collapse:collapse;width:auto;font:18px 'Roboto',sans-serif";
        toggleTable.innerHTML = `<tr id="xnc"><td colspan="3" style="background:#f1f1f1;text-align:center;padding:10px;cursor:pointer;font-weight:bold;color:gray"></td></tr>`;
        toggleTable.querySelector("tr").onclick = () => { includeUnscoredTasks = !includeUnscoredTasks; updateTable(); };
        gradeTable?.parentNode.insertBefore(toggleTable, gradeTable.nextSibling);
      }
      toggleTable.querySelector("td").innerHTML = includeUnscoredTasks ? "Uwzględnij nieocenione zadania" : "Ignoruj nieocenione zadania";
      toggleTable.style.display = "table";
      toggleTable.style.width = `${tableWidth}px`;
    } else if (toggleTable) {
      toggleTable.remove();
    }
  };

  // Initial rendering and execution on page load
  updateTable();
})();
