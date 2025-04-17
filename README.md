# **UAFM-AGC** — **Average Grade Calculator for the [Andrzej Frycz Modrzewski University](https://uafm.edu.pl/)**

<p align="center">
  <a href="docs/pl.md"><img src="assets/pl_icon.svg" width="70" alt="Polski"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="README.md"><img src="assets/en_icon.svg" width="70" alt="English"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="docs/ua.md"><img src="assets/ua_icon.svg" width="70" alt="Українська"></a>
</p>

---

## 📌 **About**

**UAFM-AGC** is a compact JavaScript-based toolset for automatically calculating **average**, **minimum**, and **maximum** grades on the official platforms of [**UAFM**](https://uafm.edu.pl/):

- <img src="assets/dziekanat.svg" width="20" alt="e-University icon"> [**e-University**](https://dziekanat.uafm.edu.pl) **— via [`dagc.bookmarklet.txt`](dagc.bookmarklet.txt) or [`dagc.user.js`](js/dagc.user.js)**  
- <img src="assets/platforma.svg" width="20" alt="e-Learning icon"> [**e-Learning**](https://platforma.uafm.edu.pl) **— via [`pagc.bookmarklet.txt`](pagc.bookmarklet.txt) or [`pagc.user.js`](js/pagc.user.js)**

**These scripts enhance the platforms by automatically detecting grades and displaying statistics in a clean, color-coded format.**

## **✨ Features**

- **Automatic calculation** of average, min, and max grades
- **Color-coded grade indicators** based on performance
- **Optional inclusion of ungraded tasks** (for e-Learning)
- **Seamless integration** into the university systems
- **Two methods of use**: Bookmarklet or Userscript

## **🔖 How to Use – Method 1: Bookmarklet**

**No extensions or userscript managers needed.**

1. **Open the appropriate platform:**
   - <img src="assets/dziekanat.svg" width="20" alt="e-University"> [**e-University**](https://dziekanat.uafm.edu.pl)
   - <img src="assets/platforma.svg" width="20" alt="e-Learning"> [**e-Learning**](https://platforma.uafm.edu.pl)
2. **Copy the contents of one of the following files:**
   - [**`dagc.bookmarklet.txt`**](dagc.bookmarklet.txt)
   - [**`pagc.bookmarklet.txt`**](pagc.bookmarklet.txt)
3. **Create a new bookmark in your browser and paste the code into the URL field.**
4. **While you're on the relevant page, click the bookmark to inject the script.**

![bookmarklet](assets/bookmarklet.gif)

## **🧠 How to Use – Method 2: Userscript**

**Use [Tampermonkey](https://www.tampermonkey.net/) or a similar userscript manager and install:**

- **[`dagc.user.js`](js/dagc.user.js) — for <img src="assets/dziekanat.svg" width="20" alt="e-University"> [e-University](https://dziekanat.uafm.edu.pl)**
- **[`pagc.user.js`](js/pagc.user.js) — for <img src="assets/platforma.svg" width="20" alt="e-Learning"> [e-Learning](https://platforma.uafm.edu.pl)**

**Once installed, the script will automatically enhance grade pages when visited.**

<table align="center" style="font-size: 16px; border-spacing: 15px 8px;">
  <thead>
    <tr>
      <th>Grade</th>
      <th>Percentage</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span style="color:darkgreen"><strong>5.0</strong></span></td>
      <td><span style="color:darkgreen"><strong>≥ 90%</strong></span></td>
      <td><span style="color:darkgreen"><strong>Dark Green</strong></span></td>
    </tr>
    <tr>
      <td><span style="color:green"><strong>4.5</strong></span></td>
      <td><span style="color:green"><strong>≥ 80%</strong></span></td>
      <td><span style="color:green"><strong>Green</strong></span></td>
    </tr>
    <tr>
      <td><span style="color:#66cc66"><strong>4.0</strong></span></td>
      <td><span style="color:#66cc66"><strong>≥ 70%</strong></span></td>
      <td><span style="color:#66cc66"><strong>Light Green</strong></span></td>
    </tr>
    <tr>
      <td><span style="color:#FF8C00"><strong>3.5</strong></span></td>
      <td><span style="color:#FF8C00"><strong>≥ 60%</strong></span></td>
      <td><span style="color:#FF8C00"><strong>Dark Orange</strong></span></td>
    </tr>
    <tr>
      <td><span style="color:orange"><strong>3.0</strong></span></td>
      <td><span style="color:orange"><strong>≥ 50%</strong></span></td>
      <td><span style="color:orange"><strong>Orange</strong></span></td>
    </tr>
    <tr>
      <td><span style="color:red"><strong>2.0</strong></span></td>
      <td><span style="color:red"><strong>&lt; 50%</strong></span></td>
      <td><span style="color:red"><strong>Red</strong></span></td>
    </tr>
  </tbody>
</table>

## **🖼️ Preview**

<div align="center">

### <img src="assets/dziekanat.svg" width="20" alt="e-University"> [**e-University**](https://dziekanat.uafm.edu.pl)

![**e-University**](assets/dagc.gif)

### <img src="assets/platforma.svg" width="20" alt="e-Learning"> [**e-Learning**](https://platforma.uafm.edu.pl)

![**e-Learning**](assets/pagc.gif)

</div>

## **📝 License**

**Licensed under GNU General Public License v3 - see the [**LICENSE**](LICENSE) file for details.**
