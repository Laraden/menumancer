# Řešení potíží

## Pozadí v Dotě není vidět

Zkontrolujte postupně:

1. **Byla Dota během instalace otevřená?** Restartujte hru. Dota čte soubory menu jen při spuštění.
2. **Sedí složka dabingu?** Dota čte pozadí ze složky svého dabingu. Porovnejte **Steam → Dota 2 → Vlastnosti → Jazyk** s **Nastavení → Dota 2 → Složka dabingu pro pozadí**.
3. **Anglický dabing potřebuje `-lv`.** Přidejte ho v **Steam → Dota 2 → Vlastnosti → Parametry spuštění** a restartujte Dotu. Je to oficiální režim nízkého násilí od Valve, mění se jen krev.
4. **Je pozadí nainstalované?** V **Knihovně** má pozadí, které je právě ve hře, zlatý rámeček a štítek **Nainstalováno**. Pokud takové není, klikněte na **Nainstalovat** u toho, které chcete.

## „Locally modified game files detected“ nebo zablokované hledání zápasu

Může se to stát po aktualizaci Doty.

1. Zavřete Dotu.
2. Klikněte na **Odebrat z Doty** na kartě pozadí nebo na **Odebrat mod z Doty** v **Nastavení**.
3. Pokud hláška zůstane: **Steam → Dota 2 → Vlastnosti → Nainstalované soubory → Ověřit integritu herních souborů**.

Pak nám [napište](https://github.com/Laraden/menumancer/issues/new/choose), po které aktualizaci Doty se to stalo. Aplikace nikdy nepřepisuje soubory Valve, takže odebrání jejího souboru vždy vrátí původní menu.

## Pozadí zmizelo po aktualizaci Doty

Aktualizace Steamu občas vyčistí složky hry. Otevřete **Knihovnu** a u svého pozadí znovu klikněte na **Nainstalovat**. Nic se nemusí sestavovat znovu.

## „Dota je spuštěná“

Dokud je hra otevřená, aplikace nemůže měnit její soubory. Zavřete Dotu a zkuste to znovu.

## FFmpeg chybí nebo se nenainstaluje

**Nastavení → Nainstalovat** spouští `winget`. Pokud winget nemáte (starší verze Windows 10), nainstalujte „Instalační program aplikace“ (App Installer) z Microsoft Storu, nebo si FFmpeg stáhněte sami a dejte `ffmpeg.exe` a `ffprobe.exe` vedle `Menumancer.exe`.

## Menu se seká nebo je PC hlučné

- Používejte **30 snímků za sekundu** (výchozí). 60 zdvojnásobí zátěž při dekódování. Pro nová pozadí to nastavíte v **Nastavení → Video**, u scény přes **▾** při instalaci.
- Snižte kvalitu o stupeň v **Nastavení → Video**.
- Pokud se menu seká dál, odeberte pozadí přes **Odebrat z Doty**, abyste zjistili, jestli je příčinou, a [napište nám](https://github.com/Laraden/menumancer/issues/new/choose), jakou máte grafickou kartu a procesor.

## Na spoji smyčky je vidět skok

- Ve **Smyčka a obraz** zkuste jiný úsek z **Navrženo**, ideálně s vyšším procentem.
- Přepněte **Spoj** na **Prolínání** a trochu prodlužte **Délku přechodu**.
- **Doladit spoj** hledá lepší koncový snímek v rozmezí sekundy.
- Když se v ní kamera pohybuje, video nemá čistou smyčku: použijte prolínání nebo ping-pong.

## Scéna z Wallpaper Engine vypadá jinak nebo je „Nepodporováno“

3D, webové tapety a tapety-aplikace zatím podporované nejsou. Ostatní scény mohou vypadat trochu jinak než ve Wallpaper Engine, engine pořád roste. Hodně pomůže [hlášení chyby](https://github.com/Laraden/menumancer/issues/new/choose) s ID scény z Workshopu.

## Windows hlásí, že aplikaci nezná

To je SmartScreen: aplikace zatím nemá placený certifikát vydavatele. Klikněte na **Další informace → Přesto spustit**. Stahujte aplikaci jen z [GitHub Releases](https://github.com/Laraden/menumancer/releases/latest).

## Pořád to nejde

[Založte issue](https://github.com/Laraden/menumancer/issues/new/choose) a přidejte:

- verzi z **O aplikaci**;
- co jste dělali a co se stalo;
- nejnovější log z `%LOCALAPPDATA%\Menumancer\logs`.

---

[Všechny návody](README.md) · [Stáhnout Menumancer](https://github.com/Laraden/menumancer/releases/latest)
