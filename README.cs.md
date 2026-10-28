<p align="center"><img src="docs/icon.png" width="96" alt=""></p>

<h1 align="center">Menumancer</h1>

<p align="center">
Vlastní živé pozadí a hudba v hlavním menu Dota 2.<br>
<a href="https://github.com/Laraden/menumancer/releases/latest"><b>Stáhnout nejnovější verzi</b></a> · <a href="docs/handbook/cs/README.md">Příručka</a><br>
<a href="README.md">English</a> · <a href="README.ru.md">Русский</a> · <b>Čeština</b>
</p>

> Neoficiální fanouškovský nástroj. Není spojen se společností Valve Corporation ani jí schválen.

![Scény: živá pozadí, která kreslí aplikace](docs/guide/cs/images/scenes.png)

## Co umí

- **Z jakéhokoli videa udělá pozadí menu.** MP4, WebM, MKV nebo MOV libovolné délky. Aplikace sama najde úsek, který se nejlépe opakuje, a ukáže přes něj náhled menu Doty, abyste viděli, co zakryjí tlačítka.
- **Živé scény (beta)** z vlastního enginu aplikace: polární záře, hluboký vesmír, žhavé uhlíky, paprsky v mlze, měsíční noc nebo váš vlastní obrázek s hloubkou. Kdo chce víc, má editor vrstev s efekty a 3D. Do Doty jde obyčejné video s plynulou smyčkou.
- **Wallpaper Engine:** video tapety a scény z vašich odběrů, čtené z vašeho PC.
- **Vlastní hudba** v menu, při spuštění, při výběru hrdiny, při výhře a prohře: jedna skladba, náhodná nebo mix z playlistu.
- **Úprava menu:** barva tlačítka Hrát, panel hledání zápasu, horní lišta a další (část je v betě).
- **Monitory 16:9, 21:9 a 32:9.**
- **Jedním kliknutím** pozadí nainstalujete a jedním odeberete.
- **Sdílení s přáteli** přes preset: nastavení bez videa, aplikace kamaráda sestaví stejné pozadí ze zdroje.
- Čeština, angličtina a ruština.

![Vytvořit: nové pozadí ve čtyřech krocích](docs/guide/cs/images/create.png)

## Jak začít

1. Stáhněte `Menumancer-<verze>-win-x64.exe` ze stránky [Releases](https://github.com/Laraden/menumancer/releases/latest). Nic se neinstaluje, je to jeden soubor.
2. Spusťte ho. Windows SmartScreen může hlásit, že aplikaci nezná, protože zatím nemá placený certifikát vydavatele: klikněte na **Další informace → Přesto spustit**.
3. Vyberte jazyk. Pokud chybí FFmpeg, aplikace ho nabídne nainstalovat jedním tlačítkem (přes winget).
4. **Vytvořit** → vyberte video → smyčku → hudbu → **Sestavit**. Se zaškrtnutým **Hned nainstalovat do Doty** jde pozadí do hry, jakmile je hotové. Nebo otevřete **Scény** a nainstalujte šablonu: video není potřeba.
5. Spusťte Dotu. Před instalací a odebráním pozadí musí být Dota zavřená.

**Máte v Dotě anglický dabing?** Nic dělat nemusíte. Dota čte pozadí ze složky svého dabingu a angličtina vlastní složku nemá. Aplikace proto dá pozadí do složky dabingu, ve které nejsou hlasy (se Steamem v angličtině obvykle do ruské), a nastaví Dotě tento dabing. Hlasy tam nejsou, takže hrdinové dál mluví anglicky a jazyk rozhraní se nemění. Pokud později změníte dabing v nastavení Doty, nainstalujte pozadí znovu. Do verze 1.3.1 aplikace chtěla parametr spuštění `-lv`, ale tuto složku už Dota nečte, takže `-lv` můžete odebrat.

## Návody

- **[Videonávod](https://www.youtube.com/watch?v=7PoN7bGu5Gs)** (rusky, s automatickými titulky YouTube): od videa k pozadí v menu Doty.
- **[Příručka](docs/handbook/cs/README.md):** první spuštění, první pozadí, živé scény, Wallpaper Engine, sdílení, řešení potíží, bezpečnost a otázky.
- **[Návody k sekcím](docs/guide/cs/README.md):** krátce o každé obrazovce. Stejné návody otevře v aplikaci tlačítko „?“ vedle názvu sekce.
- **[Formát scén](docs/scene-format.md)** (anglicky): pro ty, kdo chtějí psát scény ručně.

## Požadavky

- Windows 10 nebo 11, 64 bit.
- Dota 2 ve Steamu.
- FFmpeg (aplikace ho nainstaluje sama nebo najde ten, který máte).
- Wallpaper Engine je volitelný, pro jeho video tapety a scény.

## Cizí videa a tapety

- Videa, tapety a hudba patří jejich autorům. Menumancer žádná neobsahuje ani nešíří: pozadí sestaví na vašem PC z toho, co už máte, a pro vlastní potřebu je to v pořádku.
- Samotné video předávejte dál, jen pokud je vaše, pod svobodnou licencí, nebo to autor dovolil. Jinak sdílejte preset a kamarád si video vezme ze zdroje sám.
- Tapety ze Steam Workshopu se sdílejí vždy jen jako preset. Menumancer není spojen s Wallpaper Engine.

## Je to bezpečné?

- Aplikace přidá do jazykové složky hry jeden soubor se vzhledem hlavního menu. Soubory Valve nikdy nepřepisuje.
- Nesahá na proces hry, nečte jeho paměť a nedává žádnou herní výhodu. V zápase se nic nemění.
- Nenahrazuje nic, co se ve hře prodává: nasazený hudební balíček dál hraje, Dota Plus a střepy zůstávají.
- Úpravy herních souborů [Smlouva o předplatitelských službách Steam](https://store.steampowered.com/subscriber_agreement/) (odd. 2.G) nedovoluje. O banech za takové kosmetické úpravy nevíme, ale nikdo to nemůže zaručit. **Používáte na vlastní riziko.**
- Aktualizace Doty někdy pozadí rozbije. Pokud hra hlásí „Locally modified game files detected“ nebo nepustí do hledání zápasu, klikněte na **Odebrat z Doty** na kartě pozadí nebo na **Odebrat mod z Doty** v Nastavení. Když to nepomůže: Steam → Dota 2 → Vlastnosti → Nainstalované soubory → **Ověřit integritu herních souborů**.

Víc v části [Bezpečnost a otázky](docs/handbook/cs/faq.md).

## Aktualizace

Aplikace hledá novou verzi při každém spuštění a každou hodinu, dokud je otevřená (vypnout to jde v **O aplikaci**), a nainstaluje ji jen po kliknutí na **Aktualizovat**. Každá aktualizace je podepsaná: aplikace ověří podpis a kontrolní součet, než cokoli nahradí.

## Kde jsou soubory

- Vaše pozadí: `Dokumenty\Menumancer`.
- Nastavení: `%APPDATA%\Menumancer`.
- Logy a dočasné soubory: `%LOCALAPPDATA%\Menumancer`.

Úplné odstranění: **Odebrat mod z Doty** v Nastavení, pak smažte exe a tyto tři složky.

**Přenosný režim.** Vytvořte vedle exe prázdnou složku `Menumancer-data`. Aplikace pak ukládá všechno do ní (nastavení, pozadí, logy) a nic nezapisuje do Dokumentů ani AppData, takže ji můžete nosit na flashce i s pozadími.

## Našli jste chybu?

Založte [issue](https://github.com/Laraden/menumancer/issues/new/choose) a popište, co jste dělali a co se stalo. Hodně pomůže verze z **O aplikaci** a log z `%LOCALAPPDATA%\Menumancer\logs`. Viz také [Řešení potíží](docs/handbook/cs/troubleshooting.md).

## Podpora

Aplikace je zdarma a bez reklam. Pokud se vám líbí, můžete vývoj podpořit na [DonationAlerts](https://www.donationalerts.com/r/dverse) (tlačítko je i v aplikaci).

---

Menumancer je zdarma, zdrojový kód je uzavřený, podmínky v [LICENSE.md](LICENSE.md). Dota a Dota 2 jsou ochranné známky společnosti Valve Corporation. Licence komponent třetích stran jsou v každém vydání (`THIRD-PARTY-NOTICES.txt`). [Historie verzí](CHANGELOG.md) (anglicky).
