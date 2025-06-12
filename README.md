# **UAFM-AGC** — **Average Grade Calculator for the [Andrzej Frycz Modrzewski University](https://uafm.edu.pl/)**

<p align="center">
  <a href="https://github.com/Anghkooey/uafm_agc/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Anghkooey/uafm_agc?style=for-the-badge" alt="License Badge">
  </a>
  <a href="https://www.python.org/">
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python Badge">
  </a>
  <a href="https://github.com/Anghkooey/uafm_agc/commits/main">
    <img src="https://img.shields.io/github/last-commit/Anghkooey/uafm_agc?style=for-the-badge" alt="Last Commit Badge">
  </a>
  <a href="https://github.com/Anghkooey/uafm_agc/releases">
    <img src="https://img.shields.io/github/release/Anghkooey/uafm_agc?style=for-the-badge" alt="Latest Release Badge">
  </a>
</p>

<p align="center">
<img src="https://img.shields.io/badge/🌏%20Click%20a%20flag%20to%20switch%20language-darkblue?style=for-the-badge" alt="Language switch hint"><br>
  <a href="docs/pl.md"><img src="assets/flags/pl_icon.svg" width="70" alt="Polski"></a>
     
  <a href="README.md"><img src="assets/flags/en_icon.svg" width="70" alt="English"></a>
     
  <a href="docs/ua.md"><img src="assets/flags/ua_icon.svg" width="70" alt="Українська"></a>
</p>

## 📌 About

**UAFM-AGC** is a compact JavaScript-based toolset for automatically calculating **average**, **minimum**, and **maximum** grades on the official platforms of [**UAFM**](https://uafm.edu.pl/):

- <img src="assets/uafm_icons/dziekanat.svg" width="20"> [**e-University**](https://dziekanat.uafm.edu.pl)  
  — via [**`dagc.bookmarklet.txt`**](txt/dagc.bookmarklet.txt) or [**`dagc.bookmarklet.txt`**](js/dagc.user.js)
- <img src="assets/uafm_icons/platforma.svg" width="20"> [**e-Learning**](https://platforma.uafm.edu.pl)  
  — via [**`pagc.bookmarklet.txt`**](txt/pagc.bookmarklet.txt) or [**`pagc.bookmarklet.txt`**](js/pagc.user.js)

These scripts enhance the platforms by automatically detecting grades and displaying statistics in a clean, color-coded format.

---

## ✨ Features

- Automatic average, min, and max grade calculation
- Color-coded indicators based on grade performance
- Option to include/exclude ungraded items (e-Learning)
- Works directly in the browser (no backend/server)
- Two integration options: Bookmarklet or Userscript

---

## 🖼️ Preview

<div align="center">

### <img src="assets/uafm_icons/dziekanat.svg" width="20" alt="e-University"> [**e-University**](https://dziekanat.uafm.edu.pl)

![e-University gif](assets/gifs/dagc.gif)  
![e-University png](assets/script_preview/dziekanat.png)

### <img src="assets/uafm_icons/platforma.svg" width="20" alt="e-Learning"> [**e-Learning**](https://platforma.uafm.edu.pl)

![e-Learning](assets/gifs/pagc.gif)

### 🎓 **Grade Display Examples: See Your Progress in Action!** 📊

| ![Grade 5](assets/script_preview/platfotma/ocena_5.png) | ![No graded tasks](assets/script_preview/platfotma/ignore_0.png) |
| :-----------------------------------------------------: | :--------------------------------------------------------------: |
| **Grade 5** — all tasks graded, perfect score           | **No graded tasks** — empty grade table after filtering          |

| ![Grade 3.5](assets/script_preview/platfotma/ocena_3.5-4.png) | ![Grade 2](assets/script_preview/platfotma/ocena_2.png) |
| :------------------------------------------------------------: | :-----------------------------------------------------: |
| **3.5 avg** — 5% boost needed to reach 4.0                    | **2.0 avg** — insufficient points to pass               |

</div>

---

## 📊 Grade Scale Reference

<div align="center">

| **Grade**  | **Percentage** | **Description** |
| :--------: | :------------: | :-------------- |
| **5.0** 🍏 |   **≥ 90%**    | **Dark Green**  |
| **4.5** 💚 |   **≥ 80%**    | **Green**       |
| **4.0** 💚 |   **≥ 70%**    | **Light Green** |
| **3.5** 🧡 |   **≥ 60%**    | **Orange**      |
| **3.0** 🧡 |   **≥ 50%**    | **Dark Orange** |
| **2.0** ❤️ |   **< 50%**    | **Red**         |

</div>

---

## ⚙️ Installation & Usage

### 📌 Method 1: [Bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet)

1. **Open the appropriate platform:**
   - <img src="assets/uafm_icons/dziekanat.svg" width="20"> [**e-University**](https://dziekanat.uafm.edu.pl)
   - <img src="assets/uafm_icons/platforma.svg" width="20"> [**e-Learning**](https://platforma.uafm.edu.pl)
2. **Copy the contents of:**
   - [**`dagc.bookmarklet.txt`**](txt/dagc.bookmarklet.txt)
   - [**`pagc.bookmarklet.txt`**](txt/pagc.bookmarklet.txt)
3. **Create a new browser bookmark** and paste the code into the URL field.
4. **Click the bookmark while on the platform page** to activate the script.

#### 🎬 GIF Demo: Bookmarklet in Action

![bookmarklet](assets/gifs/bookmarklet.gif)

### 📁 Optional: Import Bookmark File

To save time, use the pre-made [`bookmarks.html`](bookmarks.html) file and import it through your browser's **Import Bookmarks** feature.

---

### 🧩 Method 2: [Userscript](https://en.wikipedia.org/wiki/Wikipedia:User_scripts)

Use [Tampermonkey](https://www.tampermonkey.net/) or a similar userscript manager. Then install:

- [**`dagc.bookmarklet.txt`**](js/dagc.user.js) — for [**e-University**](https://dziekanat.uafm.edu.pl)
- [**`pagc.bookmarklet.txt`**](js/pagc.user.js) — for [**e-Learning**](https://platforma.uafm.edu.pl)

Scripts will run automatically on grade-related pages.

---

## 📝 License

Licensed under **GNU GPL v3** — see the [LICENSE](LICENSE) file for full terms.
