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
</p>

<p align="center">
<img src="https://img.shields.io/badge/🌏%20Click%20a%20flag%20to%20switch%20language-darkblue?style=for-the-badge" alt="Language switch hint"><br>
  <a href="docs/pl.md"><img src="assets/flags/pl_icon.svg" width="70" alt="Polski"></a>
     
  <a href="README.md"><img src="assets/flags/en_icon.svg" width="70" alt="English"></a>
     
  <a href="docs/ua.md"><img src="assets/flags/ua_icon.svg" width="70" alt="Українська"></a>

</p>

## 📌 **About**

**UAFM-AGC** is a compact JavaScript-based toolset for automatically calculating **average**, **minimum**, and **maximum** grades on the official platforms of [**UAFM**](https://uafm.edu.pl/):

- <img src="assets/uafm_icons/dziekanat.svg" width="20" alt="e-University icon"> [**e-University**](https://dziekanat.uafm.edu.pl) **— via [`dagc.bookmarklet.txt`](dagc.bookmarklet.txt) or [`dagc.user.js`](js/dagc.user.js)**
- <img src="assets/uafm_icons/platforma.svg" width="20" alt="e-Learning icon"> [**e-Learning**](https://platforma.uafm.edu.pl) **— via [`pagc.bookmarklet.txt`](pagc.bookmarklet.txt) or [`pagc.user.js`](js/pagc.user.js)**

**These scripts enhance the platforms by automatically detecting grades and displaying statistics in a clean, color-coded format.**

## **✨ Features**

- **Automatic calculation** of average, min, and max grades
- **Color-coded grade indicators** based on performance
- **Optional inclusion of ungraded tasks** (for e-Learning)
- **Seamless integration** into the university systems
- **Two methods of use**: [Bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) or [Userscript](https://en.wikipedia.org/wiki/Wikipedia:User_scripts)

## **🔖 How to Use – Method 1: [Bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet)**

**No extensions or userscript managers needed.**

1. **Open the appropriate platform:**
   - <img src="assets/uafm_icons/dziekanat.svg" width="20" alt="e-University"> [**e-University**](https://dziekanat.uafm.edu.pl)
   - <img src="assets/uafm_icons/platforma.svg" width="20" alt="e-Learning"> [**e-Learning**](https://platforma.uafm.edu.pl)
2. **Copy the contents of one of the following files:**
   - [**`dagc.bookmarklet.txt`**](dagc.bookmarklet.txt)
   - [**`pagc.bookmarklet.txt`**](pagc.bookmarklet.txt)
3. **Create a new bookmark in your browser and paste the code into the URL field.**
4. **While you're on the relevant page, click the bookmark to inject the script.**

#### 🔖 **How to create and use the bookmarklet (see [YouTube](https://www.youtube.com/watch?v=UeEU_9R_Jg0) if the GIF isn't clear enough)**

![bookmarklet](assets/gifs/bookmarklet.gif)

## **🧠 How to Use – Method 2: [Userscript](https://en.wikipedia.org/wiki/Wikipedia:User_scripts)**

**Use [Tampermonkey](https://www.tampermonkey.net/) or a similar userscript manager and install:**

- **[`dagc.user.js`](js/dagc.user.js) — for <img src="assets/uafm_icons/dziekanat.svg" width="20" alt="e-University"> [e-University](https://dziekanat.uafm.edu.pl)**
- **[`pagc.user.js`](js/pagc.user.js) — for <img src="assets/uafm_icons/platforma.svg" width="20" alt="e-Learning"> [e-Learning](https://platforma.uafm.edu.pl)**

**Once installed, the script will automatically enhance grade pages when visited.**

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

## **🖼️ Preview**

<div align="center">

### <img src="assets/uafm_icons/dziekanat.svg" width="20" alt="e-University"> [**e-University**](https://dziekanat.uafm.edu.pl)

![e-University gif](assets/gifs/dagc.gif)
![e-University png](assets/script_preview/dziekanat.png)

### <img src="assets/uafm_icons/platforma.svg" width="20" alt="e-Learning"> [**e-Learning**](https://platforma.uafm.edu.pl)

![**e-Learning**](assets/gifs/pagc.gif)

## 🎓 **Grade Display Examples: See Your Progress in Action!** 📊

|                    ![Grade 5](assets/script_preview/platfotma/ocena_5.png)                    |                                          ![No graded tasks](assets/script_preview/platfotma/ignore_0.png)                                           |
| :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Grade 5** — maximum score, all tasks graded; “Ignore ungraded assignments” button is hidden | **No graded tasks** — after pressing “Ignore ungraded assignments”, the table disappears and only the “Include ungraded assignments” button remains |

|     ![Grade 3.5](assets/script_preview/platfotma/ocena_3.5-4.png)      | ![Grade 2](assets/script_preview/platfotma/ocena_2.png) |
| :--------------------------------------------------------------------: | :-----------------------------------------------------: |
| **Grade 3.5** — current average is 3.5; a 5% boost would raise it to 4 |         **Grade 2** — not enough points to pass         |

</div>

## **📝 License**

**Licensed under GNU General Public License v3 - see the [**LICENSE**](LICENSE) file for details.**
