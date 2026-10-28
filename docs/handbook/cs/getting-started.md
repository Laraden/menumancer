# První spuštění

Od stažení po pozadí v menu Doty to trvá asi deset minut a většinu z toho zabere první sestavení.

## Co budete potřebovat

- Windows 10 nebo 11, 64 bit.
- Dotu 2 nainstalovanou přes Steam.
- FFmpeg, bezplatný nástroj na video. Aplikace ho nainstaluje sama jedním tlačítkem.
- Wallpaper Engine, jen pokud chcete používat jeho tapety. Je volitelný.

## 1. Stažení

Otevřete [Releases](https://github.com/Laraden/menumancer/releases/latest) a stáhněte `Menumancer-<verze>-win-x64.exe`. To je celá aplikace: jeden soubor, bez instalátoru. Dejte ho, kam chcete, třeba do vlastní složky v Dokumentech.

Tato stránka na GitHubu je jediné oficiální místo ke stažení. Nespouštějte kopie z jiných webů.

## 2. První start a varování Windows

Windows může ukázat „Systém Windows ochránil váš počítač“. Aplikace zatím nemá placený certifikát vydavatele, a tak ji SmartScreen nezná. Klikněte na **Další informace** a pak na **Přesto spustit**. Stačí to jednou pro každou verzi.

## 3. Jazyk a smlouva

První obrazovka se zeptá na jazyk: čeština, angličtina nebo ruština. Později ho změníte v **Nastavení → Knihovna a aplikace → Jazyk aplikace**. Potom si přečtěte a přijměte licenční smlouvu. Následuje krátká prohlídka obrazovek; znovu ji spustíte v **O aplikaci → Spustit prohlídku znovu**.

## 4. FFmpeg

Aplikace potřebuje FFmpeg ke čtení a kódování videa. Pokud ho v PC nemáte, **Nastavení** to ukáže v prvním bloku a nabídnou **Nainstalovat**. Aplikace spustí `winget` (správce balíčků přímo ve Windows), který stáhne FFmpeg v buildu od gyan.dev. Restart není potřeba. Pokud už FFmpeg máte v `PATH` nebo vedle exe, aplikace ho najde.

## 5. Dota

Aplikace najde složku hry sama: stavový řádek dole ukáže **Dota nalezena**. Pokud ne, otevřete **Nastavení → Dota 2** a vyberte složku `dota 2 beta` ručně (obvykle `C:\Program Files (x86)\Steam\steamapps\common\dota 2 beta`).

## 6. Otázka na dabing

Před první instalací se aplikace zeptá, jaký dabing Dota používá. Dota čte pozadí menu ze složky svého dabingu, takže se to musí shodovat. Dabing se volí ve Steamu: **Dota 2 → Vlastnosti → Jazyk**. Aplikace ho zjistí sama: zkontrolujte ho a pokračujte.

- **Ruský, korejský nebo čínský dabing:** nic dalšího není potřeba.
- **Anglický dabing:** ani tady není nic potřeba. Angličtina nemá v Dotě vlastní složku, a tak aplikace dá pozadí do složky dabingu bez hlasů a nastaví Dotě tento dabing. Hrdinové dál mluví anglicky a jazyk rozhraní se nemění. Pokud později změníte dabing v nastavení Doty, nainstalujte pozadí znovu. Parametr spuštění `-lv`, který chtěly starší verze, už není potřeba: můžete ho odebrat.

Později to změníte v **Nastavení → Dota 2 → Složka dabingu pro pozadí**.

## 7. První pozadí

Pokračujte na [První pozadí](first-background.md). Nebo otevřete **Scény** a nainstalujte některou z vestavěných šablon: k tomu není potřeba žádné video.

## Kde aplikace ukládá soubory

- Vaše pozadí: `Dokumenty\Menumancer`.
- Nastavení: `%APPDATA%\Menumancer`.
- Logy a dočasné soubory: `%LOCALAPPDATA%\Menumancer`.

**Přenosný režim:** vytvořte vedle exe prázdnou složku `Menumancer-data`. Aplikace pak ukládá všechno do ní a nic nezapisuje do Dokumentů ani AppData, takže ji můžete nosit na flashce.

**Odinstalace:** klikněte na **Odebrat mod z Doty** v **Nastavení**, zavřete aplikaci a smažte exe a tři složky výše.

---

[Všechny návody](README.md) · [Stáhnout Menumancer](https://github.com/Laraden/menumancer/releases/latest)
