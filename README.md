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

| Grade | Percentage | Description |
|:-----:|:----------:|:-----------:|
| <font color="darkgreen">5.0</font>  | <font color="darkgreen">≥ 90%</font> | <font color="darkgreen">Dark Green</font> |
| <font color="green">4.5</font>     | <font color="green">≥ 80%</font>  | <font color="green">Green</font> |
| <font color="#66cc66">**4.0**</font>   | <font color="#66cc66">≥ 70%</font> | <font color="#66cc66">Light Green</font> |
| <font color="#FF8C00">3.5</font>   | <font color="#FF8C00">≥ 60%</font> | <font color="#FF8C00">Dark Orange</font> |
| <font color="orange">3.0</font>    | <font color="orange">≥ 50%</font>  | <font color="orange">Orange</font> |
| <font color="red">2.0</font>       | <font color="red">< 50%</font>     | <font color="red">Red</font> |

## **🖼️ Preview**

<div align="center">

### <img src="assets/dziekanat.svg" width="20" alt="e-University"> [**e-University**](https://dziekanat.uafm.edu.pl)

![**e-University**](assets/dagc.gif)

### <img src="assets/platforma.svg" width="20" alt="e-Learning"> [**e-Learning**](https://platforma.uafm.edu.pl)

![**e-Learning**](assets/pagc.gif)

</div>

## **📝 License**

**Licensed under GNU General Public License v3 - see the [**LICENSE**](LICENSE) file for details.**
