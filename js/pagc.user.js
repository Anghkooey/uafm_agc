// ==UserScript==
// @name         P-AGC (Platform Average Grade Calculator)
// @namespace    https://github.com/Anghkooey/uafm_agc
// @version      2.4
// @author       https://github.com/Anghkooey/
// @match        https://platforma.uafm.edu.pl/platform/groupdetails/*
// @description  Calculates and displays average grade based on scored tasks, with optional inclusion of unscored tasks.
//               Handles visibility toggling of tasks and preserves button layout even when table disappears.
// @grant        none
// @run-at       document-end
// ==/UserScript==

(() => {
  // Toggle for including unscored (0 pts) tasks in average calculation
  let includeUnscoredTasks = false;

  // Stores last known table width to keep toggle button size consistent
  let lastWidth = "0px";

  // Returns grade and color based on percentage thresholds (Polish grading scale)
  const getGradeInfo = (percent) => {
    if (percent >= 90) return ["5", "darkgreen"];
    if (percent >= 80) return ["4.5", "green"];
    if (percent >= 70) return ["4", "#66cc66"];
    if (percent >= 60) return ["3.5", "#FF8C00"];
    if (percent >= 50) return ["3", "orange"];
    return ["2", "red"];
  };

  // Collects task scores, calculates averages, updates or creates tables and toggle button
  const updateTable = () => {
    let totalPoints = 0,
      maxPoints = 0,
      totalPercentage = 0,
      taskCount = 0,
      hasUnscoredTasks = false;

    // Iterate through tasks, parse scored points and detect unscored tasks
    document.querySelectorAll("li.kraken3-task").forEach((el) => {
      const m = el
        .querySelector(".kraken3-task__status_path .currentStatus")
        ?.textContent.match(/(\d+)\s*\/\s*(\d+)\s*pts/);
      if (m) {
        const [earned, possible] = [+m[1], +m[2]];
        if (earned === 0) hasUnscoredTasks = true;
        if (includeUnscoredTasks && earned === 0) return; // Skip unscored if ignoring
        totalPoints += earned;
        maxPoints += possible;
        totalPercentage += Math.floor((earned / possible) * 100);
        taskCount++;
      }
    });

    // Calculate average percentage or 0 if no tasks
    const avg = taskCount
      ? Math.round((totalPercentage / taskCount) * 100) / 100
      : 0;

    // Determine current grade and possible +5% grade (for display)
    const [grade, color] = getGradeInfo(avg);
    const [altGrade, altColor] = getGradeInfo(avg + 5);
    const showAlt = grade !== altGrade;

    // Construct grade display (single or split)
    const gradeDisplay = showAlt
      ? `<span style="color:${color};display:inline-block;width:45%;text-align:center">${grade}</span>
         <span style="color:gray;display:inline-block;width:10%;text-align:center">/</span>
         <span style="color:${altColor};display:inline-block;width:45%;text-align:center">${altGrade}</span>`
      : `<span style="color:${color};display:inline-block;width:100%;text-align:center">${grade}</span>`;

    // Create or reuse the summary table element
    let tbl = document.getElementById("zgm");
    if (!tbl) {
      tbl = document.createElement("table");
      tbl.id = "zgm";
      const firstTask = document.querySelector(".kraken3-task");
      if (firstTask?.parentNode) {
        firstTask.parentNode.insertBefore(tbl, firstTask);
      }
    }

    // Set common table styles
    tbl.style.cssText =
      "margin:20px auto;border-collapse:collapse;font:18px 'Roboto',sans-serif;white-space:nowrap;text-align:center";

    // Populate table rows if tasks exist, otherwise empty content
    tbl.innerHTML = taskCount
      ? `
        <thead>
          <tr style="background:#f1f1f1;color:gray">
            <th style="font-weight:bold">Stat</th>
            <th style="font-weight:bold">Uzyskano</th>
            <th style="font-weight:bold">Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight:bold">Ocena</td>
            <td style="font-weight:bold">${gradeDisplay}</td>
            <td style="font-weight:bold;color:black">5</td>
          </tr>
          <tr>
            <td style="font-weight:bold">pts</td>
            <td style="font-weight:bold;color:${color}">${totalPoints}</td>
            <td style="font-weight:bold;color:black">${maxPoints}</td>
          </tr>
          <tr>
            <td style="font-weight:bold">%</td>
            <td style="font-weight:bold;color:${color}">${avg}%</td>
            <td style="font-weight:bold;color:black">100%</td>
          </tr>
        </tbody>`
      : "";

    // Show table only if tasks exist, else hide it
    tbl.style.display = taskCount ? "table" : "none";

    // Save last width for consistent toggle button size
    if (taskCount) {
      tbl.style.width = "auto";
      lastWidth = tbl.offsetWidth + "px";
      tbl.style.width = lastWidth;
    }

    // Create or update toggle button to include/exclude unscored tasks
    let toggle = document.getElementById("qop");
    if (hasUnscoredTasks || includeUnscoredTasks) {
      if (!toggle) {
        toggle = document.createElement("table");
        toggle.id = "qop";
        toggle.style.cssText =
          "margin:-20px auto 20px auto;border-collapse:collapse;font:18px 'Roboto',sans-serif";
        toggle.innerHTML = `
          <tr>
            <td style="background:#f1f1f1;text-align:center;padding:10px;cursor:pointer;font-weight:bold;color:gray"></td>
          </tr>`;
        toggle.querySelector("td").onclick = () => {
          includeUnscoredTasks = !includeUnscoredTasks;
          updateTable();
        };
        tbl.parentNode.insertBefore(toggle, tbl.nextSibling);
      }
      // Update toggle button label and preserve width from table
      toggle.querySelector("td").innerHTML = includeUnscoredTasks
        ? "Uwzględnij nieocenione zadania"
        : "Ignoruj nieocenione zadania";
      toggle.style.display = "table";
      toggle.style.width = lastWidth;
    } else if (toggle) {
      // Remove toggle if no unscored tasks present
      toggle.remove();
    }
  };

  // Run once on script load to initialize UI
  updateTable();
})();
