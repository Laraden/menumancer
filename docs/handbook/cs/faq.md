# Bezpečnost a otázky

## Můžu za to dostat ban?

Upřímně: nikdo vám nemůže slíbit, že ne. Tohle víme.

- Menumancer je kosmetický mod. Přidá do složky hry jeden soubor se vzhledem hlavního menu. Soubory Valve nepřepisuje, na proces hry nesahá, nečte jeho paměť a v zápase nedává žádnou výhodu.
- [Smlouva o předplatitelských službách Steam](https://store.steampowered.com/subscriber_agreement/) (odd. 2.G) úpravy herních souborů nedovoluje. O banech za takové kosmetické úpravy menu nevíme, ale není to záruka.
- Když Valve něco změní, obvykle mod prostě přestane fungovat, nepřichází ban. **Odebrat z Doty** a **Ověřit integritu herních souborů** ve Steamu vždy vrátí původní menu.

**Aplikaci používáte na vlastní riziko.** Menumancer je neoficiální fanouškovský nástroj, není spojen s Valve ani jí schválen.

## Co přesně mění?

Jen hlavní menu: video na pozadí, hudbu menu a pokud používáte **Úpravu menu**, vzhled některých prvků menu. V zápase se nic nemění. Co prodává Valve, se nikdy neskrývá ani nenahrazuje: nasazený hudební balíček hraje, Dota Plus, střepy i obchod zůstávají. Okno přijetí zápasu aplikace nikdy nemění.

## Uvidí moje pozadí ostatní hráči?

Ne. Je jen na vašem PC.

## Antivirus nebo Windows varuje před exe

Windows SmartScreen varuje před každou aplikací bez placeného certifikátu vydavatele a ten Menumancer zatím nemá. Ke každému vydání patří soubor `SHA256SUMS`, podle kterého ověříte, že je váš exe originál. Stahujte jen z [GitHub Releases](https://github.com/Laraden/menumancer/releases/latest).

## Je to opravdu zdarma? Proč je kód uzavřený?

Zdarma, bez reklam a bez placených funkcí. Kód je uzavřený, protože je to projekt jednoho člověka. Pokud se vám aplikace líbí, tlačítko **Podpořit** v aplikaci ukáže, jak vývoj podpořit.

## Posílá nějaká data?

Žádná telemetrie ani účet. Na internet aplikace chodí, aby:

- zkontrolovala aktualizace na GitHubu (vypnout to jde v **O aplikaci**);
- nainstalovala FFmpeg přes winget, když kliknete na **Nainstalovat**;
- jednou stáhla neuronovou síť pro hloubku, když poprvé zapnete **Hloubka** ve **Scénách**;
- otevřela odkazy, na které kliknete sami (stránky Steamu, GitHub, podpora).

## Jak fungují aktualizace?

Aplikace hledá novou verzi na GitHubu a nainstaluje ji jen po kliknutí na **Aktualizovat**. Každá aktualizace je podepsaná: aplikace ověří podpis a kontrolní součet, než cokoli nahradí. **Testovací verze** v **O aplikaci** nabízejí verze, které se ještě testují.

## Mac, Linux, Steam Deck?

Zatím jen Windows 10 a 11.

## Jaké jazyky?

Aplikace: čeština, angličtina a ruština. Jazyk rozhraní Doty nehraje roli, jazyk dabingu ano, viz [První spuštění](getting-started.md#6-otázka-na-dabing).

## Můžu použít jakékoli video?

Pro sebe ano. Předat samotné video dál je jiná věc, viz [Sdílení](sharing.md).

## Jak všechno odstranit?

**Nastavení → Odebrat mod z Doty**, zavřete aplikaci, smažte exe a složky `Dokumenty\Menumancer`, `%APPDATA%\Menumancer` a `%LOCALAPPDATA%\Menumancer`.

---

[Všechny návody](README.md) · [Stáhnout Menumancer](https://github.com/Laraden/menumancer/releases/latest)
