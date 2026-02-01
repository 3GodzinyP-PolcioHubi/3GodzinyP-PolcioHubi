# 🎬 Nazwa Projektu

> Krótki opis projektu - co robi i dla kogo jest.

## 📋 Spis treści

- [Szybki start](#-szybki-start)
- [Wymagania](#-wymagania)
- [Instalacja](#-instalacja)
- [Struktura projektu](#-struktura-projektu)
- [Praca w zespole](#-praca-w-zespole)
- [Przydatne komendy](#-przydatne-komendy)

## 🚀 Szybki start

```bash
# Klonuj repo
git clone git@github.com:TWOJ-USERNAME/NAZWA-REPO.git
cd NAZWA-REPO

# Przełącz na branch dev
git checkout dev

# Zainstaluj zależności
npm install

# Uruchom projekt
npm run dev
```

## 📦 Wymagania

- **Node.js** >= 20 (użyj `nvm use` - wczyta z `.nvmrc`)
- **Git** >= 2.30
- **Git LFS** (dla dużych plików video)

### Instalacja Git LFS

```bash
# Windows (po instalacji Git for Windows)
git lfs install

# macOS
brew install git-lfs && git lfs install

# Linux
sudo apt install git-lfs && git lfs install
```

## 🛠️ Instalacja

### 1. Sklonuj repozytorium

```bash
git clone git@github.com:TWOJ-USERNAME/NAZWA-REPO.git
cd NAZWA-REPO
```

### 2. Zainstaluj zależności

```bash
npm install
```

### 3. Skonfiguruj Git hooks (Husky)

```bash
npm run prepare
```

### 4. Sprawdź czy wszystko działa

```bash
npm run lint    # Powinno przejść bez błędów
npm run test    # Powinno przejść
```

## 📁 Struktura projektu

```
.
├── .github/                  # GitHub Actions, templates
│   ├── workflows/           # CI/CD pipelines
│   ├── ISSUE_TEMPLATE/      # Szablony issues
│   └── PULL_REQUEST_TEMPLATE.md
├── .husky/                   # Git hooks
├── .vscode/                  # Wspólne ustawienia VS Code
├── src/                      # Kod źródłowy
├── assets/                   # Pliki statyczne (obrazy, video)
│   └── videos/              # Pliki video (Git LFS)
├── .editorconfig            # Konfiguracja edytora
├── .eslintrc.js             # Reguły ESLint
├── .gitattributes           # Git LFS config
├── .gitignore               # Ignorowane pliki
├── .nvmrc                   # Wersja Node.js
├── .prettierrc              # Konfiguracja Prettier
├── package.json             # Zależności i skrypty
└── README.md                # Ten plik
```

## 👥 Praca w zespole

### Struktura branchy

```
main        ← Produkcja (chroniony)
  ↑
dev         ← Integracja (chroniony)
  ↑
feature/*   ← Twoja praca
```

### Workflow (krok po kroku)

#### 1. Zacznij nową pracę

```bash
git checkout dev
git pull origin dev
git checkout -b feature/moja-funkcja
```

#### 2. Pracuj i commituj

```bash
git add .
git commit -m "feat: dodać nową funkcję"
```

**Format commitów** (Conventional Commits):
- `feat:` - nowa funkcjonalność
- `fix:` - naprawa błędu
- `chore:` - zadania pomocnicze
- `docs:` - dokumentacja
- `style:` - formatowanie
- `refactor:` - refaktoryzacja

#### 3. Push i Pull Request

```bash
git push -u origin feature/moja-funkcja
```

Potem na GitHub utwórz PR z `feature/moja-funkcja` → `dev`

#### 4. Przed merge - zsynchronizuj z dev

```bash
git fetch origin
git rebase origin/dev
# Rozwiąż konflikty jeśli są
git push --force-with-lease
```

### Rozwiązywanie konfliktów

```bash
# Podczas rebase, jeśli są konflikty:
# 1. Otwórz plik z konfliktem
# 2. Wybierz właściwe zmiany (usuń markery <<<<< ===== >>>>>)
# 3. Zapisz i:
git add plik-z-konfliktem
git rebase --continue
git push --force-with-lease
```

## 🔧 Przydatne komendy

| Komenda | Opis |
|---------|------|
| `npm run dev` | Uruchom w trybie development |
| `npm run build` | Zbuduj produkcję |
| `npm run lint` | Sprawdź kod (ESLint) |
| `npm run lint:fix` | Napraw automatycznie co się da |
| `npm run format` | Sformatuj kod (Prettier) |
| `npm run format:check` | Sprawdź formatowanie |
| `npm run test` | Uruchom testy |

## 📝 Konwencje

- **Nazwy branchy**: `feature/opis`, `fix/opis`, `chore/opis`
- **Commity**: Conventional Commits (wymuszane przez commitlint)
- **Formatowanie**: Prettier (automatyczne przy save)
- **Linting**: ESLint (automatyczne przy save)

## 🎬 Pliki Video

Duże pliki video są przechowywane przez **Git LFS**.

Po sklonowaniu repo, pobierz je:

```bash
git lfs pull
```

**Limity:**
- Pliki > 50 MB → Git LFS (automatyczne dla .mp4, .mov, etc.)
- Surowe materiały → zewnętrzny storage (Google Drive / S3)

## 📞 Kontakt

- **Dev 1**: @username1
- **Dev 2**: @username2

---

Made with ❤️ by Video Coders Team
