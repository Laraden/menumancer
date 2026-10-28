<p align="center"><img src="docs/icon.png" width="96" alt=""></p>

<h1 align="center">Menumancer</h1>

<p align="center">
Your own animated background and music in the Dota 2 main menu.<br>
<a href="https://github.com/Laraden/menumancer/releases/latest"><b>Download the latest version</b></a> · <a href="docs/handbook/en/README.md">Handbook</a><br>
<b>English</b> · <a href="README.ru.md">Русский</a> · <a href="README.cs.md">Čeština</a>
</p>

> Unofficial fan tool. Not affiliated with or endorsed by Valve Corporation.

![Scenes: live backgrounds drawn by the app](docs/guide/en/images/scenes.png)

## What it does

- **Any video becomes a menu background.** MP4, WebM, MKV or MOV, any length. The app finds the part that loops best and shows a mock of the Dota menu on top, so you see what the buttons will cover.
- **Live scenes (beta)** drawn by the app's own engine: northern lights, deep space, embers, rays in the mist, a moonlit night, or your own picture with depth. A layer editor with effects and 3D is there for those who want more. Dota gets an ordinary video with a seamless loop.
- **Wallpaper Engine:** video wallpapers and scenes from your own subscriptions, read from your PC.
- **Your music** in the menu, at startup, in hero pick, on victory and defeat: one track, a random one or a mix from a playlist.
- **Menu customization:** the Play button colour, the match search panel, the top bar and more (some parts in beta).
- **16:9, 21:9 and 32:9** screens.
- **One click** to install a background and one click to remove it.
- **Share with friends** as a preset: settings without the video, and your friend's app builds the same background from the source.
- English, Russian and Czech.

![Create: a new background in four steps](docs/guide/en/images/create.png)

## Getting started

1. Download `Menumancer-<version>-win-x64.exe` from [Releases](https://github.com/Laraden/menumancer/releases/latest). There's nothing to install: it's one file.
2. Run it. Windows SmartScreen may say the app is unrecognised, because it has no paid publisher certificate yet: click **More info → Run anyway**.
3. Pick your language. If FFmpeg is missing, the app offers to install it with one button (through winget).
4. **Create** → pick a video → pick the loop → music → **Build**. With **Install into Dota right away** ticked, the background goes into the game when it's ready. Or open **Scenes** and install a template: no video needed.
5. Start Dota. Close it before installing or removing a background.

**English voice in Dota?** Nothing to do. Dota reads the background from the folder of its voice language, and English has no folder of its own. So the app puts the background into a voice folder that has no voice files (with Steam in English, usually the Russian one) and sets Dota's voice to it. There are no voice files there, so heroes still speak English, and the UI language stays the same. If you change the voice in Dota settings later, install the background again. Up to 1.3.1 the app used the `-lv` launch option, but Dota no longer reads that folder, so you can remove `-lv`.

## Guides

- **[Video guide](https://www.youtube.com/watch?v=7PoN7bGu5Gs)** (in Russian, with YouTube's auto-translated subtitles): from a video to a background in the Dota menu.
- **[Handbook](docs/handbook/en/README.md):** getting started, your first background, live scenes, Wallpaper Engine, sharing, troubleshooting, safety and FAQ.
- **[Section guides](docs/guide/en/README.md):** a short guide to every screen. The same guides open in the app with the “?” button next to a section title.
- **[Scene format](docs/scene-format.md):** for people who want to write scenes by hand.

## Requirements

- Windows 10 or 11, 64-bit.
- Dota 2 on Steam.
- FFmpeg (the app installs it or finds the one you have).
- Wallpaper Engine is optional, for its video wallpapers and scenes.

## Other people's videos

- Videos, wallpapers and music belong to their authors. Menumancer contains and distributes none of them: it builds a background on your PC from what you already have, which is fine for your own use.
- Pass the video itself on only if it's yours, under a free license, or the author allowed it. Otherwise share a preset, and your friend gets the video from the source.
- Workshop wallpapers are always shared as a preset. Menumancer is not affiliated with Wallpaper Engine.

## Is it safe?

- The app adds one file with the main menu's look to the game's language folder. It never overwrites Valve's files.
- It doesn't touch or read the game process and gives no gameplay advantage. Nothing changes in a match.
- It never replaces content sold in the game: an equipped music pack keeps playing, Dota Plus and shards stay as they are.
- Modifying game files is not permitted by the [Steam Subscriber Agreement](https://store.steampowered.com/subscriber_agreement/) (section 2.G). We know of no bans for cosmetic changes like this, but nobody can guarantee it. **Use at your own risk.**
- A Dota update sometimes breaks the background. If the game says “Locally modified game files detected” or won't let you search for a match, press **Remove from Dota** on the background's card or **Remove all mod files** in Settings. If that doesn't help: Steam → Dota 2 → Properties → Installed Files → **Verify integrity of game files**.

More in [Safety and FAQ](docs/handbook/en/faq.md).

## Updates

The app checks for a new version at every start and every hour while it's open (you can turn this off in **About**), and installs it only when you click **Update**. Every update is signed: the app checks the signature and the checksum before replacing anything.

## Where the files are

- Your backgrounds: `Documents\Menumancer`.
- Settings: `%APPDATA%\Menumancer`.
- Logs and temporary files: `%LOCALAPPDATA%\Menumancer`.

To remove the app completely: **Remove all mod files** in Settings, then delete the exe and these three folders.

**Portable mode.** Create an empty `Menumancer-data` folder next to the exe. The app then keeps everything in it (settings, backgrounds, logs) and writes nothing to Documents or AppData, so you can carry it on a USB stick together with your backgrounds.

## Found a bug?

Open an [issue](https://github.com/Laraden/menumancer/issues/new/choose) and describe what you did and what happened. The version from **About** and the log from `%LOCALAPPDATA%\Menumancer\logs` help a lot. See also [Troubleshooting](docs/handbook/en/troubleshooting.md).

## Support

The app is free and has no ads. If you like it, you can support development on [DonationAlerts](https://www.donationalerts.com/r/dverse) (the button is also in the app).

---

Menumancer is free, the source code is closed, terms in [LICENSE.md](LICENSE.md). Dota and Dota 2 are trademarks of Valve Corporation. Third-party licenses come with every release (`THIRD-PARTY-NOTICES.txt`). [Version history](CHANGELOG.md).
