# mzkwcim.net · Dark Engineering Portfolio

Gotowa statyczna strona PL/EN w HTML + CSS + JS, bez npm i bez builda.

## Wdrożenie przez GitHub → Cloudflare Pages

1. Rozpakuj ZIP. W katalogu `mzkwcim-portfolio/` znajdziesz `index.html`, `assets/`, `projects/`, `en/` itd.
2. Utwórz nowe repozytorium GitHub i wrzuć **zawartość katalogu** lub użyj całego katalogu jako root repozytorium.
3. W Cloudflare → Workers & Pages → Create → Pages → Connect to Git wybierz repozytorium.
4. Framework preset: **None**. Build command: **puste**. Build output directory: **/** (root repozytorium; w konfiguratorze zwykle wpisz `.`).
5. Włącz Git integration, sprawdź podgląd na `*.pages.dev`. Dopiero po weryfikacji podepnij domenę `mzkwcim.net` do nowego projektu / zaktualizuj obecny projekt.
6. Po publikacji sprawdź `/`, `/en/`, `/projects/swimtopia/`, `/projects/knowledge-graph/`, `/robots.txt`, `/sitemap.xml` i przekierowania blogowe.

**UWAGA:** To kompletna nowa witryna, a nie patch do nieudostępnionego oryginalnego repozytorium. Nie nadpisuj oryginału bez kopii zapasowej.

## Edycja

- Strony HTML znajdują się w katalogach jako `index.html`.
- Wspólne style: `assets/site.css`.
- JavaScript dla menu mobilnego i przycisku kopiowania: `assets/site.js`.
- Ikona: `assets/favicon.svg`.
- Dane kontaktowe: patrz `CONTACT.md`; obecnie **nie ma zmyślonego e-maila ani linku do profili**.
- Plik `site.config.json` to szablon danych do utrzymania adresów; strona nie pobiera go automatycznie w runtime.
- Wszystkie 26 stron są statyczne, bez backendu. Edycja opisów wymaga zmiany PL i EN osobno.

## Przekierowania i SEO

`_redirects` przekierowuje znane stare adresy bloga do powiązanych projektów oraz dawne podstrony kontaktu i prywatności. `sitemap.xml`, canonical, hreflang i meta description są dołączone.

## Checklist przed publikacją

- [ ] Uzupełnij i zweryfikuj kontakt (`CONTACT.md`).
- [ ] Przeczytaj i zaakceptuj treści projektów firmowych (polityka pracodawcy/NDA).
- [ ] Sprawdź aktualność opisów Swimtopii i Knowledge Graph.
- [ ] Zweryfikuj treść polityki prywatności z rzeczywistą konfiguracją Cloudflare i narzędzi analytics.
- [ ] Sprawdź stary ruch SEO i ewentualne dodatkowe adresy `/blog/*`, które nie znalazły się na liście przekierowań.
- [ ] Jeżeli używasz innej domeny niż `mzkwcim.net`, zaktualizuj canonical, hreflang, sitemap, robots.
- [ ] Jeśli bazowe repo zawiera dodatkowe funkcje, przejrzyj je przed zastąpieniem całości.

## Wariant manualny bez integracji Git

Możesz również użyć `wrangler pages deploy . --project-name <nazwa>`, ale docelowym sposobem jest Git integration.
