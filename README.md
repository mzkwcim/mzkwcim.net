# mzkwcim.net — oprogramowanie i wiedza dla klubów sportowych

Publiczna witryna PL/EN, hostowana w Cloudflare Pages z automatycznym wdrożeniem z gałęzi `master`.

## Zakres serwisu

- Oprogramowanie dla klubów: Swimtopia, Club Dues i rekordy klubowe.
- Usługi: raporty MCS, przypomnienia o badaniach i automatyzacja pracy klubu.
- `/blog/`: praktyczne artykuły o pływaniu, danych sportowych i automatyzacji procesów klubowych.
- Kontakt, informacje o autorze i polityka prywatności.

## Publikacja treści

Nowy artykuł powstaje dopiero po akceptacji użytkownika. Po publikacji uzupełnij `blog/index.html`, `sitemap.xml` i właściwe linkowanie wewnętrzne. Nigdy nie wymyślaj funkcji produktów ani nie publikuj danych klubowych lub zawodników bez właściwej podstawy.

## AdSense

Domena pozostaje w procesie przeglądu Google AdSense. Google Privacy & messaging jest docelowym CMP. **Reklamy są dopuszczone wyłącznie na publicznych artykułach `/blog/`, nie na portfolio, kontakcie ani aplikacjach na subdomenach.** Sam metatag wydawcy i `ads.txt` nie uruchamiają reklam. Szczegóły i warunki kontroli: `ADSENSE_ROLLOUT.md`.

## Deployment

Cloudflare Pages: projekt `mzkwcim-net`, branch `master`, statyczne strony HTML/CSS/JS (plus Pages Functions). Przy każdej zmianie sprawdź stan produkcyjnego deploymentu, działanie linków i odpowiedzi HTTP.

Treści zawodowe i ogólnoinżynierskie nie należą obecnie do publicznego zakresu tej witryny.
