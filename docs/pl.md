# **UAFM-AGC** — **Kalkulator Średniej Oceny dla [Uniwersytetu Andrzeja Frycza Modrzewskiego](https://uafm.edu.pl/)**

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
  <a href="pl.md"><img src="../assets/flags/pl_icon.svg" width="70" alt="Polski"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="../README.md"><img src="../assets/flags/en_icon.svg" width="70" alt="English"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="ua.md"><img src="../assets/flags/ua_icon.svg" width="70" alt="Українська"></a>
</p>

## 📌 **O Projekcie**

**UAFM-AGC** to lekki zestaw narzędzi JavaScript, który automatycznie oblicza **średnią**, **minimalną** i **maksymalną** ocenę na oficjalnych platformach [**UAFM**](https://uafm.edu.pl/) — _Uniwersytetu Andrzeja Frycza Modrzewskiego_:

- <img src="../assets/uafm_icons/dziekanat.svg" width="20" alt="Wirtualny Dziekanat"> [**Wirtualny Dziekanat**](https://dziekanat.uafm.edu.pl)  
  **— przez [`../dagc.bookmarklet.txt`](../dagc.bookmarklet.txt) lub [`../js/dagc.user.js`](../js/dagc.user.js)**
- <img src="../assets/uafm_icons/platforma.svg" width="20" alt="Platforma E-learningowa"> [**Platforma E-learningowa**](https://platforma.uafm.edu.pl)  
  **— przez [`../pagc.bookmarklet.txt`](../pagc.bookmarklet.txt) lub [`../js/pagc.user.js`](../js/pagc.user.js)**

**Skrypty te rozszerzają funkcjonalność platform, automatycznie wykrywając oceny i wyświetlając przejrzyste statystyki w formie kolorystycznej.**

## ✨ **Funkcje**

- **Automatyczne obliczanie** średniej, minimalnej i maksymalnej oceny
- **Kolorystyczne oznaczenia ocen** w zależności od wyniku
- **Możliwość uwzględnienia zadań bez ocen** (na platformie e-learningowej)
- **Pełna integracja** z systemami uczelni
- **Dwie formy uruchamiania**: zakładka ([Bookmarklet](https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka)) lub [Userscript](https://en.wikipedia.org/wiki/Wikipedia:User_scripts)

## 🔖 **Jak używać – Metoda 1: Zakładka ([Bookmarklet](https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka))**

**Nie wymaga rozszerzeń ani menedżerów skryptów.**

1. **Otwórz odpowiednią platformę:**
   - <img src="../assets/uafm_icons/dziekanat.svg" width="20" alt="Wirtualny Dziekanat"> [**Wirtualny Dziekanat**](https://dziekanat.uafm.edu.pl)
   - <img src="../assets/uafm_icons/platforma.svg" width="20" alt="Platforma E-learningowa"> [**Platforma E-learningowa**](https://platforma.uafm.edu.pl)
2. **Skopiuj zawartość jednego z plików:**
   - [**`../dagc.bookmarklet.txt`**](../dagc.bookmarklet.txt)
   - [**`../pagc.bookmarklet.txt`**](../pagc.bookmarklet.txt)
3. **Utwórz nową zakładkę w przeglądarce i wklej kod do pola adresu URL.**
4. **Będąc na stronie platformy, kliknij zakładkę, aby uruchomić skrypt.**

#### 🔖 **Jak utworzyć i używać bookmarklet (jeśli GIF nie wystarcza, zobacz [YouTube](https://www.youtube.com/watch?v=UeEU_9R_Jg0))**

![bookmarklet](../assets/gifs/bookmarklet.gif)

## 🧠 **Jak używać – Metoda 2: [Userscript](https://en.wikipedia.org/wiki/Wikipedia:User_scripts)**

**Zainstaluj [Tampermonkey](https://www.tampermonkey.net/) lub podobny menedżer skryptów i zainstaluj:**

- **[`../js/dagc.user.js`](../js/dagc.user.js) — dla <img src="../assets/uafm_icons/dziekanat.svg" width="20" alt="Dziekanat"> [Wirtualnego Dziekanatu](https://dziekanat.uafm.edu.pl)**
- **[`../js/pagc.user.js`](../js/pagc.user.js) — dla <img src="../assets/uafm_icons/platforma.svg" width="20" alt="Platforma"> [Platformy E-learningowej](https://platforma.uafm.edu.pl)**

**Po zainstalowaniu skrypt automatycznie rozszerzy strony z ocenami.**

<div align="center">

|                Ocena                 |                   Procent                    | Opis                                              |
| :----------------------------------: | :------------------------------------------: | :------------------------------------------------ |
| $${\color{darkgreen} \mathbf{5.0}}$$ | $${\color{darkgreen} \boldsymbol{≥\ 90\%}}$$ | $${\color{darkgreen} \textbf{Ciemnozielony}}$$    |
|   $${\color{green} \mathbf{4.5}}$$   |   $${\color{green} \boldsymbol{≥\ 80\%}}$$   | $${\color{green} \textbf{Zielony}}$$              |
|  $${\color{#66cc66} \mathbf{4.0}}$$  |  $${\color{#66cc66} \boldsymbol{≥\ 70\%}}$$  | $${\color{#66cc66} \textbf{Jasnozielony}}$$       |
|  $${\color{orange} \mathbf{3.5}}$$   |  $${\color{orange} \boldsymbol{≥\ 60\%}}$$   | $${\color{orange} \textbf{Pomarańczowy}}$$        |
|  $${\color{#FF8C00} \mathbf{3.0}}$$  |  $${\color{#FF8C00} \boldsymbol{≥\ 50\%}}$$  | $${\color{#FF8C00} \textbf{Ciemnopomarańczowy}}$$ |
|    $${\color{red} \mathbf{2.0}}$$    |    $${\color{red} \boldsymbol{<\ 50\%}}$$    | $${\color{red} \textbf{Czerwony}}$$               |

</div>

## 🖼️ **Podgląd**

<div align="center">

### <img src="../assets/uafm_icons/dziekanat.svg" width="20" alt="Wirtualny Dziekanat"> [**Wirtualny Dziekanat**](https://dziekanat.uafm.edu.pl)

![Wirtualny Dziekanat gif](../assets/gifs/dagc.gif)
![Wirtualny Dziekanat png](../assets/script_preview/dziekanat.png)

### <img src="../assets/uafm_icons/platforma.svg" width="20" alt="Platforma E-learningowa"> [**Platforma E-learningowa**](https://platforma.uafm.edu.pl)

![Platforma E-learningowa](../assets/gifs/pagc.gif)

**Przykłady wyświetlania oceny w zależności od wyników:**

|                               ![Ocena 5](../assets/script_preview/platfotma/ocena_5.png)                                |   ![Ocena 4](../assets/script_preview/platfotma/ocena_4.png)    |
| :---------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------: |
| **Ocena 5** — maksymalna liczba punktów, wszystkie zadania ocenione; przycisk „Ignoruj nieocenione zadania” jest ukryty | **Ocena 4** — wynik zaliczający na podstawie uzyskanych punktów |

| ![Ocena 2](../assets/script_preview/platfotma/ocena_2.png) |                                  ![Ignorowanie nieocenionych](../assets/script_preview/platfotma/ignore_0.png)                                  |
| :--------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
|       **Ocena 2** — zbyt mało punktów do zaliczenia        | **Brak ocenionych zadań** — po kliknięciu „Ignoruj nieocenione zadania” tabela znika, pozostaje tylko przycisk „Uwzględnij nieocenione zadania” |

</div>

## 📝 **Licencja**

**Licencjonowane na zasadach GNU General Public License v3 — zobacz plik [**LICENSE**](../LICENSE).**
