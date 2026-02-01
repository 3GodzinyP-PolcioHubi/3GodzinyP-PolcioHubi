# 🤝 Contributing Guide

Dziękujemy za chęć przyczynienia się do projektu! Przeczytaj ten dokument aby dowiedzieć się jak współpracujemy.

## 📋 Spis treści

- [Code of Conduct](#-code-of-conduct)
- [Jak zacząć](#-jak-zacząć)
- [Workflow Git](#-workflow-git)
- [Konwencje commitów](#-konwencje-commitów)
- [Pull Request](#-pull-request)
- [Code Review](#-code-review)

## 📜 Code of Conduct

- Szanuj innych współpracowników
- Konstruktywna krytyka > destrukcyjna
- Pytaj gdy czegoś nie wiesz
- Dziel się wiedzą

## 🚀 Jak zacząć

### 1. Skonfiguruj środowisko

```bash
# Sklonuj repo
git clone git@github.com:TWOJ-USERNAME/NAZWA-REPO.git
cd NAZWA-REPO

# Zainstaluj Node.js (z .nvmrc)
nvm use

# Zainstaluj zależności
npm install

# Skonfiguruj Git hooks
npm run prepare
```

### 2. Sprawdź czy wszystko działa

```bash
npm run lint
npm run test
```

### 3. Zainstaluj rekomendowane rozszerzenia VS Code

VS Code zapyta automatycznie o instalację rozszerzeń z `.vscode/extensions.json`.

## 🌿 Workflow Git

### Struktura branchy

| Branch      | Cel                        | Chroniony |
| ----------- | -------------------------- | --------- |
| `main`      | Produkcja, stabilne wersje | ✅        |
| `dev`       | Integracja, testy          | ✅        |
| `feature/*` | Nowe funkcje               | ❌        |
| `fix/*`     | Naprawy bugów              | ❌        |
| `chore/*`   | Zadania pomocnicze         | ❌        |

### Tworzenie nowego brancha

```bash
# Zawsze zaczynaj od aktualnego dev
git checkout dev
git pull origin dev

# Utwórz branch z odpowiednim prefixem
git checkout -b feature/nazwa-funkcji
# lub
git checkout -b fix/opis-buga
```

### Nazewnictwo branchy

✅ **Dobre:**

- `feature/user-login`
- `feature/video-uploader`
- `fix/button-color`
- `chore/update-deps`

❌ **Złe:**

- `moja-praca` (brak prefiksu)
- `Feature/Login` (wielkie litery)
- `feature/add_new_stuff` (underscore zamiast dash)

## 📝 Konwencje commitów

Używamy [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<typ>(<zakres>): <opis>

[opcjonalne ciało]

[opcjonalna stopka]
```

### Typy commitów

| Typ        | Kiedy używać            | Przykład                              |
| ---------- | ----------------------- | ------------------------------------- |
| `feat`     | Nowa funkcja            | `feat: dodać formularz logowania`     |
| `fix`      | Naprawa buga            | `fix: naprawić walidację emaila`      |
| `docs`     | Dokumentacja            | `docs: zaktualizować README`          |
| `style`    | Formatowanie (nie CSS!) | `style: dodać brakujące średniki`     |
| `refactor` | Refaktoryzacja          | `refactor: wydzielić helper do utils` |
| `test`     | Testy                   | `test: dodać testy dla AuthService`   |
| `chore`    | Zadania pomocnicze      | `chore: zaktualizować zależności`     |

### Przykłady

✅ **Dobre:**

```bash
git commit -m "feat: dodać upload plików video"
git commit -m "fix: naprawić crash przy pustym formularzu"
git commit -m "chore(deps): zaktualizować prettier do 3.0"
```

❌ **Złe:**

```bash
git commit -m "poprawki"           # Zbyt ogólne
git commit -m "WIP"                # Nie commituj WIP
git commit -m "Fix stuff"          # Po angielsku gdy reszta po polsku
```

## 🔄 Pull Request

### Przed utworzeniem PR

1. **Zsynchronizuj z dev:**

   ```bash
   git fetch origin
   git rebase origin/dev
   ```

2. **Upewnij się że lint przechodzi:**

   ```bash
   npm run lint
   ```

3. **Sprawdź formatowanie:**

   ```bash
   npm run format:check
   ```

4. **Uruchom testy:**
   ```bash
   npm run test
   ```

### Tworzenie PR

1. Push brancha:

   ```bash
   git push -u origin feature/moja-funkcja
   ```

2. Otwórz GitHub i utwórz PR do `dev`

3. Wypełnij szablon PR:
   - Opis zmian
   - Screenshoty (jeśli UI)
   - Checklist

4. Przypisz reviewera

### Po review

Jeśli są uwagi:

```bash
# Wprowadź zmiany
git add .
git commit -m "fix: zastosować uwagi z review"
git push
```

## 👀 Code Review

### Dla autora PR

- Odpowiadaj na komentarze
- Wprowadź sugerowane zmiany lub wyjaśnij dlaczego nie
- Nie bierz uwag osobiście - chodzi o kod, nie o Ciebie

### Dla reviewera

- Bądź konstruktywny
- Sugeruj rozwiązania, nie tylko krytykuj
- Chwal dobre rozwiązania
- Sprawdź:
  - Czy kod działa?
  - Czy jest czytelny?
  - Czy jest przetestowany?
  - Czy nie ma duplikacji?

### Merge

Po aprovacie:

1. Kliknij "Squash and merge" (dla czystej historii)
2. Upewnij się że tytuł merga jest sensowny
3. Usuń branch źródłowy (GitHub zrobi to automatycznie)

## ❓ Pytania?

Jeśli coś jest niejasne, otwórz Issue z pytaniem lub napisz na Discord/Slack.
