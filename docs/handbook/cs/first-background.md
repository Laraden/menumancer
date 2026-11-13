# První pozadí

**Vytvořit** udělá z videa pozadí menu Doty ve čtyřech krocích: **Zdroj**, **Smyčka a obraz**, **Hudba**, **Sestavení**. Na krok, který už máte za sebou, můžete kliknout a vrátit se k němu.

![Vytvořit](../../guide/cs/images/create.png)

## Jaké video vybrat

Dota přehrává pozadí jako krátké video, které se pořád opakuje. Nejlépe fungují videa, která:

- se pohybují pomalu a rovnoměrně: mlha, déšť, oheň, voda, mraky, klidná postava;
- nemají střih v úseku, který chcete opakovat;
- jsou klidná uprostřed a vlevo, protože okraje zakryje tlačítko Hrát, chat a panely událostí.

Délka je libovolná: dobrou smyčku aplikace najde sama. Používejte vlastní videa, videa pod svobodnou licencí nebo ta, která používat smíte; proč na tom záleží, viz [Sdílení](sharing.md).

## 1. Zdroj

Nahoře jsou tři dlaždice: **Video**, **Wallpaper Engine** a **Scéna**. Pod dlaždicí **Video** přetáhněte video do okna nebo klikněte na **Vybrat soubor**. Fungují MP4, WebM, MKV i MOV. Když aplikace napíše **Video načteno, můžete pokračovat**, klikněte na **Další: smyčka a obraz**.

Dlaždice **Wallpaper Engine** ukáže vaše video tapety, pokud Wallpaper Engine máte. Ta, která je právě na ploše, má štítek. Scény jsou pod filtrem **Scény** (beta), viz [Wallpaper Engine](wallpaper-engine.md).

**Scéna** vás vezme do sekce **Scény**: tam jsou živá pozadí ze šablony nebo obrázku.

**Sestavit hned.** Když je video načtené, vedle **Další** je tlačítko **Sestavit hned**. Aplikace najde nejlepší úsek, vezme hodnoty z **Nastavení**, hudbu Doty a název podle videa a hned začne sestavovat. Hledání můžete zrušit. Pokud ve videu plynulá smyčka není, aplikace to řekne a otevře **Smyčka a obraz**, abyste úsek vybrali sami.

## 2. Smyčka a obraz

Tady pozadí opravdu vzniká.

**Vyberte úsek.** V části **Navrženo** aplikace ukáže úseky videa, které se nejlépe opakují: krátké, vyvážené a dlouhé. Procento říká, jak nenápadný je spoj: od 90 % ho obvykle není vidět. Upozornění řeknou, co čekat:

- **střih uvnitř**: v úseku je střih;
- **škubnutí na spoji**: obraz sedí, ale pohyb ne, prolínání to schová;
- **skoro bez pohybu**: uvnitř se skoro nic nehýbe.

**Celý klip** použije celé video. Konce úseku můžete posouvat na časové ose i sami. **Doladit spoj** posune konec až o sekundu na snímek s nejlepším spojem.

**Vyzkoušejte to.** Pusťte náhled. **Menu Doty** přes něj položí náhled menu, takže vidíte, co zakryjí tlačítka. **Spoj** zvýrazní spoj na časové ose a tlačítko vedle na něj přetočí.

**Spoj smyčky.**

- **Prolínání**: konec plynule přejde do začátku. **Délka přechodu** určuje jak dlouho; většině videí sedí 1–1,5 s.
- **Ping-pong**: dopředu, pak pozpátku. Hodí se na pomalý pohyb kamery, jen pro krátké úseky.
- **Žádné**: klip prostě začne znovu. Když je hodnocení spoje už velmi vysoké.

**Formát obrazovky:** běžný monitor (16:9), širokoúhlý (21:9) nebo superširokoúhlý (32:9).

**Co je vidět v menu:** **S událostmi** nechá menu jako v Dotě. **Bez událostí** nechá všechno, ale uvolní pravou stranu od panelů událostí, takže je vidět víc pozadí. **Kino** nechá jen pozadí, horní lištu a spodní panely; přátelé a události se otevírají tlačítky. Hodnoty v tomto kroku jsou z **Nastavení → Nová pozadí** a tady se mění jen pro toto pozadí.

V **Pokročilých** je rozlišení, ořez a umístění (vyplnit obrazovku, rozmazané okraje, roztáhnout nebo černé pruhy) a snímky za sekundu.

**Vzhled** je druhá záložka pravého sloupce. Vyberte hotový vzhled (Klidný, Kino, Noir, Teplý, Studený, Starý film, Sen): každý je ukázaný na snímku z vašeho videa a jeho sílu můžete ubrat. Nebo posouvejte jezdce sami: **Ztmavení** zlepší čitelnost menu, **Viněta** ztmaví okraje, **Ostrost** pomůže po kompresi a k tomu jas, kontrast, barva, rozostření, zrno a filmové pruhy. Podržte **Porovnat** a uvidíte video bez vzhledu. Náhled ukazuje, jak bude pozadí vypadat v hotovém souboru.

## 3. Hudba

Vyberte, co hraje v menu a v dalších chvílích: při spuštění, při výběru hrdiny, při výhře a prohře.

- **bez hudby**: zůstane hudba samotné Doty;
- **zvuk z videa**;
- **jedna skladba**, **náhodná skladba** nebo **mix** z playlistu. Playlisty najdete v sekci **Hudba** a jeden playlist může používat víc pozadí. Když playlist po sestavení upravíte, tlačítko **Znovu sestavit pozadí** na téže stránce aktualizuje hudbu ve všech pozadích s ním, video se přitom nepřekódovává.

Pokud máte v Dotě nasazený placený hudební balíček, hraje on. Aplikace nikdy nenahrazuje nic, co prodává Valve.

## 4. Sestavení

Pojmenujte pozadí. Nové video dostane nový název podle souboru; když už takový název v knihovně je, aplikace nabídne „Název 2“ a pod obsazeným názvem, který napíšete sami, se objeví jen tichá poznámka. Nechte zaškrtnuté **Hned nainstalovat do Doty**, pokud ho chcete ve hře, jakmile bude hotové. Klikněte na **Sestavit**.

Dota přijme video menu nejvýš 19,2 MB. Aplikace ladí kvalitu při kódování tak, aby se soubor vešel; souhrn ukáže, kolik zbylo rezervy. Sestavení běží ve **Frontě** (vlevo dole), takže můžete aplikaci dál používat. Pokud sestavení selže nebo ho zrušíte, **Sestavit znovu** ho spustí znovu se stejným nastavením.

## 5. Ve hře

Před instalací Dotu zavřete a pak ji spusťte. Pokud byla Dota během instalace otevřená, restartujte ji. Pozadí je teď v **Knihovně**, kde můžete nainstalovat jiné, odebrat ho tlačítkem **Odebrat z Doty** nebo kliknutím na jeho kartu otevřít nastavení a změnit hudbu a to, co je vidět v menu, bez nového sestavení.

Nezobrazuje se? Viz [Řešení potíží](troubleshooting.md).

## Tipy

- **30 snímků za sekundu** je výchozí a doporučená hodnota. 60 vypadá plynuleji, ale dokud je menu otevřené, zatěžuje PC dvakrát víc; nastavíte to v **Nastavení → Nová pozadí**, pokud máte výkonné PC.
- **Hromadné sestavení…** v nabídce Knihovny udělá pozadí z každého videa ve složce, s výchozím nastavením a bez hudby.
- Nemáte vhodné video? Ve **Scénách** jsou živá pozadí, která kreslí sama aplikace. Viz [Živé scény](live-scenes.md).

---

[Všechny návody](README.md) · [Stáhnout Menumancer](https://github.com/Laraden/menumancer/releases/latest)
