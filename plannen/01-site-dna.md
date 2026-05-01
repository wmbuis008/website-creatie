# Site DNA — webnode.com/nl

ANALYSE_MODUS: standaard

---

## Stap 1 — Pagina-architectuur (top → bottom)

| # | Sectie | Geschatte hoogte | Achtergrond | Breedte |
|---|--------|-----------------|-------------|---------|
| 1 | Navigatiebalk | 70–80px sticky | Wit, lichte schaduw bij scroll | Full-width, content ~1280px |
| 2 | Hero | 100vh | Wit met subtiele lichte achtergrond | Full-width, content gecentreerd ~700px |
| 3 | Testimonial-balk (Trustpilot) | 60–80px | Lichtgrijs (#f5f5f5 of gelijkwaardig) | Full-width |
| 4 | Use-case secties (3x afwisselend) | 500–600px per blok | Wit / Lichtgrijs afwisselend | Full-width, content ~1200px 2-kolom |
| 5 | Statistieken | 300–400px | Donkerblauw/teal achtergrondafbeelding | Full-width |
| 6 | Feature-rij (3 kolommen) | 400–500px | Wit | Content ~1200px, 3-kolom grid |
| 7 | Stap-voor-stap gids (3 stappen) | 400–500px | Lichtgrijs | Content ~1000px |
| 8 | Testimonial slider/kaart | 300–400px | Wit | Content ~800px gecentreerd |
| 9 | FAQ Accordion | 500–600px | Wit | Content ~800px gecentreerd |
| 10 | CTA-banner (afsluiting) | 200–300px | Teal/groen gradient of vlakkleur | Full-width gecentreerd |
| 11 | Footer | 400–500px | Donkergrijs of donkerblauw | Full-width, 4–5 kolommen |

---

## Stap 2 — Design Tokens

### Kleurensysteem
| Naam | Kleur | Gebruik |
|------|-------|---------|
| Primair / Brand Teal | ~#00a86b of groen-teal | CTA-knoppen, actieve states, iconen |
| Donker Accent | #2e5b65 | SVG iconen, dark achtergronden |
| Achtergrond Licht | #ffffff | Secties hoofdachtergrond |
| Achtergrond Grijs | #f5f7f8 | Afwisselende secties, Trustpilot balk |
| Tekst Primair | #1a1a2e of #222 | Koppen, body |
| Tekst Secundair | #666 of #777 | Subtitels, body ondersteunend |
| Wit | #ffffff | Knoptekst, inversie-elementen |

### Typografie
| Rol | Font | Grootte | Gewicht | Regelhoogte |
|-----|------|---------|---------|-------------|
| H1 Hero | Sans-serif (Inter/Poppins) | ~52–64px | 700–800 | 1.1 |
| H2 Sectie | Sans-serif | ~36–44px | 700 | 1.2 |
| H3 Sub | Sans-serif | ~20–24px | 600 | 1.3 |
| Body | Sans-serif | 16–18px | 400 | 1.6 |
| Knop | Sans-serif | 16px | 600 | — |
| Label/badge | Sans-serif | 12–14px | 500 | — |

### Witruimte Systeem
- Sectie padding: 80–120px top/bottom
- Container max-breedte: 1200–1280px
- Grid gap: 32–48px
- Component intern: 16–24px

### Afrondingsschaal
- Knoppen: 8px (licht afgerond, niet pill)
- Kaarten: 12–16px
- Iconen/badges: 8px

### Schaduwsysteem
- Kaarten: `box-shadow: 0 4px 20px rgba(0,0,0,0.08)`
- Nav (gescrolled): `box-shadow: 0 2px 10px rgba(0,0,0,0.06)`

---

## Stap 3 — Sectie Blauwdrukken

### Navigatiebalk
- **Layout**: `flexbox`, space-between, height 70px
- **Links**: Logo (SVG/tekst) links
- **Midden**: Horizontale nav-links: Functies | Sjablonen | Prijslijst | Help | Blog
- **Rechts**: CTA-knop "Nieuwe website creëren" (teal/groen, afgerond)
- **Sticky**: Ja, plakt na scroll met zachte schaduw

### Hero Sectie
- **Layout**: Gecentreerd, max-width 700–900px, kolom (tekst boven, visueel onder of naast)
- **Elements**:
  - Koptekst H1: "Maak **je** eigen **website** gratis" (vet op sleutelwoorden)
  - Subkop: Beschrijving over AI-websitebouwer, ~2 regels
  - CTA-knop primair: "Maak mijn website" (groot, teal/groen)
  - Vertrouwelement: Trustpilot score "4.5 ⭐ Uitstekend | 1093 reviews"
  - Visueel: Video-posterafbeelding of mockup van product interface

### Testimonial-balk (smal)
- Achtergrond lichtgrijs
- Horizontale rij: ster-iconen + "4,5 Uitstekend | 1093 beoordelingen — Trustpilot" + logo

### Use-case Blokken (3x, afwisselend links/rechts)
**Per blok:**
- 2-kolom: tekst (50%) + afbeelding (50%)
- Tekst: H2, body-paragraaf, CTA-knop secundair
- Voorbeelden: Bedrijfswebsite (timmerwerk) / Persoonlijke website / Online winkel

### Statistieken Sectie
- Achtergrond: donker (teal/blauw) met overlay-afbeelding
- 4 stats in rij: "50M+ websites" | "15+ jaar" | "82% dag-1 launch"
- Tekst wit, grote getallen, kleine labels

### Feature Rij (3 kolommen)
- Grid: 3 gelijke kolommen
- Per kolom: icoon bovenaan + H3 + body tekst
- Features: AI-assistent, domein, mailboxen

### Stap-voor-stap (3 stappen)
- Genummerd: 1, 2, 3
- Horizontale rij of verticaal afwisselend
- Elke stap: icoon/nummer + H3 + body

### Testimonial Kaart
- Gecentreerd, max ~600px
- Profielfoto + naam + bedrijf + website-URL
- Citaat tekst (groot, italic)
- Trustpilot rating

### FAQ Accordion
- 6 items, accordion (klik = uitklappen)
- Vraag in H3, antwoord in body tekst
- Chevron icoon rechts, roteert bij open

### CTA-banner (Afsluiting)
- Gecentreerde H2 + subkop + grote CTA-knop
- Contrasterende achtergrondkleur (teal of groen)
- Tekst wit

### Footer
- **Kolommen** (4–5): Webnode-links | Producten | Ondersteuning | Taal-kiezer
- Sociale media iconen
- Copyright + meertalige selector

---

## Stap 4 — Scroll- en Entree-animaties

| Element | Trigger | Animatie | Timing |
|---------|---------|----------|--------|
| Sectie-koppen | scroll-in-view | fade-up (Y: +30px → 0) | 400–600ms ease-out |
| Feature-kaarten | scroll-in-view | fade-in gestaffeld | 200ms delay per kaart |
| Statistieken nummers | scroll-in-view | count-up animatie | 1000ms |
| Hero CTA-knop | page-load | fade-in na kop | 300ms delay |
| Nav schaduw | scroll > 50px | opacity 0→1 schaduw | instant CSS transition |

---

## Stap 5 — Micro-interacties

| Element | Standaard | Hover | Transitie |
|---------|-----------|-------|-----------|
| Primaire knop | Teal achtergrond, wit tekst | Iets donkerder teal, lichte schaal | 150ms ease |
| Secundaire knop | Outline/ghost | Gevuld teal | 150ms ease |
| Nav-links | Grijs tekst | Teal/groen tekst, geen underline | 150ms |
| FAQ-item | Gesloten, chevron rechts | Achtergrond lichtgrijs | 200ms |
| Kaarten | Standaard schaduw | Verhoogde schaduw, lichte Y-translate | 200ms ease |

---

## Stap 6 — Component Gedrag

**FAQ Accordion**:
- States: gesloten (default), open
- Trigger: klik op vraag-rij
- Transitie: max-height 0 → auto, 300ms ease
- max 1 of meerdere tegelijk open (vermoedelijk meerdere)

**Navigatiebalk**:
- States: transparant/wit (top), scrolled (schaduw)
- Trigger: window scroll > ~50px
- Mobiel: hamburger menu → slide-in overlay

---

## Stap 7 — Scroll Choreografie

- 0–50px: nav wordt sticky met schaduw
- Per sectie op 80% viewport: fade-up animatie triggert
- Statistieken sectie: count-up triggert bij 80% viewport
- Geen zware parallax gedetecteerd

---

## Stap 8 — Technische Stack Detectie

| Aspect | Detectie |
|--------|---------|
| Framework | Vermoedelijk vanilla JS of lichte framework |
| Animaties | CSS transitions + licht JS (Intersection Observer) |
| Scroll | Native Intersection Observer |
| CSS | Custom CSS, geen Tailwind zichtbaar |
| Fonts | Waarschijnlijk Google Fonts (Inter/Poppins) |
| Iconen | SVG inline of icoonset |

---

## Stap 9 — Bewegingsfilosofie + Tekststijl

**Bewegingsfilosofie:** Rustig en functioneel — animaties ondersteunen de content zonder af te leiden. Subtiele fade-ups bij scroll, trage count-ups voor cijfers. Het gevoel is "betrouwbaar en professioneel" — geen show-off motion design, wel genoeg beweging om de pagina levend te laten voelen.

**Tekststijl patroon:**
- Koppen: direct, actiegericht, kort ("Maak je eigen website gratis")
- Subkoppen: uitleggen het voordeel in 1–2 zinnen, inclusive toon
- CTA's: eerste persoon ("Maak **mijn** website"), lage drempel
- Patroon: **Belofte → Bewijs → Actie** per sectie

---

## Site Snapshot — Top 5 Designkeuzes

1. **Teal/groen als enige merkkleur** — alles draait om één krachtig actie-kleur op witte basis
2. **Eerste persoon CTA's** — "Maak mijn website" i.p.v. "Maak een website" = psychologisch eigenaarschap
3. **Bewijs overal** — Trustpilot score zit in hero, statistieken in eigen sectie, testimonial kaart apart
4. **Afwisselende 2-kolom blokken** — tekst-links/afbeelding-rechts patroon geeft ritme zonder saai te worden
5. **Minimalisme met witruimte** — grote padding, geen clutter, content ademt — vertrouwen door rustgevend design
