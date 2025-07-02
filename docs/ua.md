# **UAFM-AGC** — **Калькулятор Середнього Балу для [Університету Анджея Фрича Моджевського](https://uafm.edu.pl/)**

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
<img src="https://img.shields.io/badge/🌏%20Оберіть%20мову%2C%20натиснувши%20на%20прапор-darkblue?style=for-the-badge" alt="Зміна мови"><br>
  <a href="pl.md"><img src="../assets/flags/pl_icon.svg" width="70" alt="Polski"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="../README.md"><img src="../assets/flags/en_icon.svg" width="70" alt="English"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="ua.md"><img src="../assets/flags/ua_icon.svg" width="70" alt="Українська"></a>
</p>

## 📌 **Про проєкт**

**UAFM-AGC** — це легкий набір JavaScript-інструментів, що автоматично обчислює **середню**, **мінімальну** та **максимальну** оцінку на офіційних платформах **[UAFM](https://uafm.edu.pl/) — Університету Анджея Фрича Моджевського:**

- <img src="../assets/uafm_icons/dziekanat.svg" width="20" alt="Віртуальний Деканат"> [**Віртуальний Деканат**](https://dziekanat.uafm.edu.pl)  
  — через [**`dagc.bookmarklet.txt`**](../txt/dagc.bookmarklet.txt) або [**`dagc.user.js`**](../js/dagc.user.js)
- <img src="../assets/uafm_icons/platforma.svg" width="20" alt="E-learning Платформа"> [**E-learning Платформа UAFM**](https://platforma.uafm.edu.pl)  
  — через [**`pagc.bookmarklet.txt`**](../txt/pagc.bookmarklet.txt) або [**`pagc.user.js`**](../js/pagc.user.js)

Скрипти додають візуальні підказки до сторінок з оцінками та автоматично виводять статистику у вигляді кольорових індикаторів.

---

## ✨ Можливості

- Автоматичне обчислення середньої, мінімальної та максимальної оцінки
- Кольорове маркування результатів
- Можливість враховувати / не враховувати завдання без оцінки (на платформі)
- Працює прямо в браузері, без серверної частини
- Два способи інтеграції: Bookmarklet або Userscript

---

## 🖼️ Приклад вигляду

<div align="center">

### <img src="../assets/uafm_icons/dziekanat.svg" width="20" alt="Віртуальний Деканат"> [**Віртуальний Деканат**](https://dziekanat.uafm.edu.pl)

![Віртуальний Деканат gif](../assets/gifs/dagc.gif)  
![Віртуальний Деканат png](../assets/script_preview/dziekanat.png)

### <img src="../assets/uafm_icons/platforma.svg" width="20" alt="Платформа"> [**E-learning Платформа**](https://platforma.uafm.edu.pl)

![Platforma E-learningowa](../assets/gifs/pagc.gif)

### 🎓 **Приклади оцінювання: подивіться свій прогрес!** 📊

| ![Оцінка 5](../assets/script_preview/platfotma/ocena_5.png) | ![Без оцінених завдань](../assets/script_preview/platfotma/ignore_0.png) |
| :------------------------------------------------------: | :-------------------------------------------------------------------: |
| **Оцінка 5** — усі завдання оцінено, відмінний результат | **Без оцінок** — таблиця прихована після фільтрації неоцінених        |

| ![Оцінка 3.5](../assets/script_preview/platfotma/ocena_3.5-4.png) | ![Оцінка 2](../assets/script_preview/platfotma/ocena_2.png) |
| :------------------------------------------------------------: | :------------------------------------------------------: |
| **Середній бал 3.5** — потрібно ще 5% до 4.0                  | **2.0** — недостатньо балів для проходження              |

</div>

---

## 📊 Шкала оцінювання

<div align="center">

| **Оцінка** | **Відсоток** | **Колір**              |
| :--------: | :----------: | :--------------------- |
| **5.0** 🍏 |  **≥ 90%**   | **Темно-зелений**      |
| **4.5** 💚 |  **≥ 80%**   | **Зелений**            |
| **4.0** 💚 |  **≥ 70%**   | **Світло-зелений**     |
| **3.5** 🧡 |  **≥ 60%**   | **Помаранчевий**       |
| **3.0** 🧡 |  **≥ 50%**   | **Темно-помаранчевий** |
| **2.0** ❤️ |  **< 50%**   | **Червоний**           |

</div>

---

## ⚙️ Установка та використання

### 📌 Спосіб 1: [Bookmarklet](https://uk.wikipedia.org/wiki/%D0%91%D1%83%D0%BA%D0%BC%D0%B0%D1%80%D0%BA%D0%BB%D0%B5%D1%82)

1. **Відкрий відповідну платформу:**
   - <img src="../assets/uafm_icons/dziekanat.svg" width="20"> [**Віртуальний Деканат**](https://dziekanat.uafm.edu.pl)
   - <img src="../assets/uafm_icons/platforma.svg" width="20"> [**E-learning Платформа**](https://platforma.uafm.edu.pl)
2. **Скопіюй вміст одного з файлів:**
   - [**`dagc.bookmarklet.txt`**](../txt/dagc.bookmarklet.txt)
   - [**`pagc.bookmarklet.txt`**](../txt/pagc.bookmarklet.txt)
3. **Створи закладку у браузері** та встав скопійований код у поле URL.
4. **Коли перебуваєш на сторінці з оцінками**, натисни закладку для запуску скрипта.

#### 🎬 GIF: Bookmarklet в дії

![bookmarklet](../assets/gifs/bookmarklet.gif)

### 📁 Необов’язково: Імпорт закладок

Щоб зекономити час, імпортуй файл [`bookmarks.html`](../bookmarks.html) через функцію імпорту закладок у браузері.

---

### 🧩 Спосіб 2: [Userscript](https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BA%D1%96%D0%BF%D0%B5%D0%B4%D1%96%D1%8F:%D0%9A%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%86%D1%8C%D0%BA%D1%96_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B8)

Встанови [Tampermonkey](https://www.tampermonkey.net/) або інший менеджер скриптів. Потім додай:

- [**`dagc.user.js`**](../https://github.com/Anghkooey/uafm_agc/raw/refs/heads/main/js/dagc.user.js) — для [**Віртуального Деканату**](https://dziekanat.uafm.edu.pl)
- [**`pagc.user.js`**](../https://github.com/Anghkooey/uafm_agc/raw/refs/heads/main/js/pagc.user.js) — для [**E-learning Платформи**](https://platforma.uafm.edu.pl)

Скрипти автоматично працюватимуть на сторінках з оцінками.

---

## 📝 Ліцензія

Проєкт ліцензовано за умовами **GNU GPL v3** — дивись файл [LICENSE](../LICENSE).
