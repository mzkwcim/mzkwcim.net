# Dane kontaktowe do weryfikacji

Obecna wersja nie publikuje żadnych domyślonych danych kontaktowych, bo nie mogłem potwierdzić ich poprawności.

Przed wdrożeniem otwórz:
- `contact/index.html`
- `en/contact/index.html`

i zastąp ramki z informacją o uzupełnieniu zweryfikowanym adresem e-mail / LinkedIn / GitHub.
Przykład bezpiecznego, statycznego odnośnika:

```html
<a class="btn primary" href="mailto:twoj-adres@example.com">E-mail ↗</a>
```

`site.config.json` jest jedynie notatką konfiguracyjną, **nie jest** wczytywany automatycznie przez statyczne strony.
