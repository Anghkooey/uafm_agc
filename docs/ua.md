# **UAFM-AGC** — **Калькулятор Середнього Балу для [Університету Анджея Фрича Моджевського](https://uafm.edu.pl/)**

<p align="center">
  <a href="pl.md"><img src="../assets/pl_icon.svg" width="70" alt="Polski"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="../README.md"><img src="../assets/en_icon.svg" width="70" alt="English"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="ua.md"><img src="../assets/ua_icon.svg" width="70" alt="Українська"></a>
</p>

---

## 📌 **Про проєкт**

**UAFM-AGC** — це легкий набір JavaScript-інструментів, що автоматично обчислює **середню**, **мінімальну** та **максимальну** оцінку на офіційних платформах **[UAFM](https://uafm.edu.pl/) — Університету Анджея Фрича Моджевського:**

- <img src="../assets/dziekanat.svg" width="20" alt="Віртуальний Деканат"> [**Віртуальний Деканат**](https://dziekanat.uafm.edu.pl)  
  **— через [`../dagc.bookmarklet.txt`](../dagc.bookmarklet.txt) або [`../js/dagc.user.js`](../js/dagc.user.js)**
- <img src="../assets/platforma.svg" width="20" alt="E-learning Платформа"> [**E-learning Платформа UAFM**](https://platforma.uafm.edu.pl)  
  **— через [`../pagc.bookmarklet.txt`](../pagc.bookmarklet.txt) або [`../js/pagc.user.js`](../js/pagc.user.js)**

**Скрипти автоматично розпізнають оцінки на сторінці й додають наочну статистику у вигляді кольорового індикатора.**

## ✨ **Можливості**

- **Автоматичне обчислення** середньої, мінімальної та максимальної оцінки
- **Кольорове маркування** оцінок залежно від результату
- **Можливість врахування завдань без оцінки** (на e-learning платформі)
- **Повна інтеграція** з системами університету
- **Два варіанти запуску**: через закладку (bookmarklet) або userscript

## 🔖 **Як користуватись – Спосіб 1: Закладка (Bookmarklet)**

**Не потребує розширень чи менеджерів скриптів.**

1. **Відкрий відповідну платформу:**
   - <img src="../assets/dziekanat.svg" width="20" alt="Віртуальний Деканат"> [**Віртуальний Деканат**](https://dziekanat.uafm.edu.pl)
   - <img src="../assets/platforma.svg" width="20" alt="E-learning Платформа"> [**E-learning Платформа UAFM**](https://platforma.uafm.edu.pl)
2. **Скопіюй вміст одного з файлів:**
   - [**`../dagc.bookmarklet.txt`**](../dagc.bookmarklet.txt)
   - [**`../pagc.bookmarklet.txt`**](../pagc.bookmarklet.txt)
3. **Створи нову закладку у браузері та встав скопійований код у поле URL.**
4. **Перебуваючи на сторінці платформи, натисни закладку для запуску скрипта.**

![bookmarklet](../assets/bookmarklet.gif)

## 🧠 **Як користуватись – Спосіб 2: Userscript**

**Встанови [Tampermonkey](https://www.tampermonkey.net/) або подібний менеджер скриптів, а потім додай:**

- **[`../js/dagc.user.js`](../js/dagc.user.js) — для <img src="../assets/dziekanat.svg" width="20" alt="Деканат"> [Віртуального Деканату](https://dziekanat.uafm.edu.pl)**
- **[`../js/pagc.user.js`](../js/pagc.user.js) — для <img src="../assets/platforma.svg" width="20" alt="Платформа"> [E-learning Платформи UAFM](https://platforma.uafm.edu.pl)**

**Після встановлення скрипт автоматично розширить сторінку з оцінками.**

<div align="center">

|  Grade  | Percentage | Description              |
| :-----: | :--------: | :----------------------- |
| **5.0** | **≥ 90%**  | 🌲**Темно-зелений**      |
| **4.5** | **≥ 80%**  | 💚**Зелений**            |
| **4.0** | **≥ 70%**  | 🍏**Світло-зелений**     |
| **3.5** | **≥ 60%**  | 🧡**Темно-помаранчевий** |
| **3.0** | **≥ 50%**  | 🧡**Помаранчевий**       |
| **2.0** | **< 50%**  | ❤️**Червоний**           |

</div>

## 🖼️ **Приклад вигляду**

<div align="center">

### <img src="../assets/dziekanat.svg" width="20" alt="Віртуальний Деканат"> [**Віртуальний Деканат**](https://dziekanat.uafm.edu.pl)

![Wirtualny Dziekanat](../assets/dagc.gif)

### <img src="../assets/platforma.svg" width="20" alt="E-learning Платформа"> [**E-learning Платформа UAFM**](https://platforma.uafm.edu.pl)

![Platforma E-learningowa](../assets/pagc.gif)

</div>

## 📝 **Ліцензія**

**Проєкт ліцензовано за умовами GNU General Public License v3 — дивись файл [**LICENSE**](../LICENSE).**
