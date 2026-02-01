module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Typy commitów
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nowa funkcja
        'fix', // Naprawa buga
        'docs', // Dokumentacja
        'style', // Formatowanie (nie CSS!)
        'refactor', // Refaktoryzacja
        'test', // Testy
        'chore', // Zadania pomocnicze
        'perf', // Optymalizacja wydajności
        'ci', // CI/CD
        'build', // Build system
        'revert', // Cofnięcie zmian
      ],
    ],
    // Maksymalna długość tytułu
    'header-max-length': [2, 'always', 100],
    // Typ musi być lower-case
    'type-case': [2, 'always', 'lower-case'],
    // Opis nie może być pusty
    'subject-empty': [2, 'never'],
    // Typ nie może być pusty
    'type-empty': [2, 'never'],
  },
};
