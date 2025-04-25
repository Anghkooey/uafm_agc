// ==UserScript==
// @name         P-AGC (Platform Average Grade Calculator)
// @namespace    https://github.com/Anghkooey/uafm_agc
// @version      2.3
// @author       https://github.com/Anghkooey/
// @match        https://platforma.uafm.edu.pl/platform/groupdetails/*
// @description  Calculates and displays average grade based on scored tasks, with optional inclusion of unscored tasks.
// @grant        none
// @run-at       document-end
// ==/UserScript==

(() => {
  let includeUnscoredTasks = false;
  // TODO: When the table disappears, the button should retain the previous width.
  // Returns grade and associated color based on percentage value
  // Uses Polish university grading thresholds
  const getGradeInfo = percent => {
    if (percent >= 90) return ["5", "darkgreen"];
    if (percent >= 80) return ["4.5", "green"];
    if (percent >= 70) return ["4", "#66cc66"];
    if (percent >= 60) return ["3.5", "#FF8C00"];
    if (percent >= 50) return ["3", "orange"];
    return ["2", "red"];
  };

  // Gathers task data from DOM, calculates average score,
  // updates or creates result and toggle tables accordingly
  const updateTable = () => {
    let totalPoints = 0;
    let maxPoints = 0;
    let totalPercentage = 0;
    let taskCount = 0;
    let hasUnscoredTasks = false;

    // Collect and process task score data
    document.querySelectorAll("li.kraken3-task").forEach(el => {
      const m = el.querySelector(".kraken3-task__status_path .currentStatus")?.textContent.match(/(\d+)\s*\/\s*(\d+)\s*pts/);

      if (m) {
        const [e, p] = [+m[1], +m[2]];
        if (e === 0) hasUnscoredTasks = true;
        if (includeUnscoredTasks && e === 0) return;

        totalPoints += e;
        maxPoints += p;
        totalPercentage += Math.floor(e / p * 100);
        taskCount++;
      }
    });

    // Final average percentage
    const avg = taskCount
      ? Math.round(totalPercentage / taskCount * 100) / 100
      : 0;

    // Determine primary and possible alternative grade (within +5%)
    const [grade, color] = getGradeInfo(avg);
    const [altGrade, altColor] = getGradeInfo(avg + 5);
    const two = grade !== altGrade;

    // Dynamically render grade block (single or double)
    let gradeDisplay = two
      ? `<span style="color:${color};display:inline-block;width:45%;text-align:center">${grade}</span><span style="color:gray;display:inline-block;width:10%;text-align:center">/</span><span style="color:${altColor};display:inline-block;width:45%;text-align:center">${altGrade}</span>`
      : `<span style="color:${color};display:inline-block;width:100%;text-align:center">${grade}</span>`;

    // Create or reuse grade summary table
    let tbl = document.getElementById("zgm");
    if (!tbl) {
      tbl = document.createElement("table");
      tbl.id = "zgm";
      const firstTask = document.querySelector(".kraken3-task");
      if (firstTask?.parentNode) {
        firstTask.parentNode.insertBefore(tbl, firstTask);
      }
    }

    // Apply general table styles
    tbl.style.cssText = "margin:20px auto;border-collapse:collapse;font:18px 'Roboto',sans-serif;white-space:nowrap;text-align:center";

    // Render table HTML based on task data
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

    // Hide table if no data
    tbl.style.display = taskCount ? "table" : "none";

    // Adjust width dynamically after rendering
    tbl.style.width = "auto";
    const w = tbl.offsetWidth + "px";
    tbl.style.width = w;

    // Create or update toggle button for unscored task inclusion
    let toggle = document.getElementById("qop");
    if (hasUnscoredTasks || includeUnscoredTasks) {
      if (!toggle) {
        toggle = document.createElement("table");
        toggle.id = "qop";
        toggle.style.cssText = "margin:-20px auto 20px auto;border-collapse:collapse;font:18px 'Roboto',sans-serif";
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

      // Update toggle button text and width
      toggle.querySelector("td").innerHTML = includeUnscoredTasks
        ? "Uwzględnij nieocenione zadania"
        : "Ignoruj nieocenione zadania";
      toggle.style.display = "table";
      toggle.style.width = w;
    } else if (toggle) {
      toggle.remove();
    }
  };

  // Initial execution
  updateTable();
})();
