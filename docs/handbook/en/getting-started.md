# Getting started

From the download to a background in the Dota menu takes about ten minutes, most of it the first build.

## What you need

- Windows 10 or 11, 64-bit.
- Dota 2 installed through Steam.
- FFmpeg, a free video tool. The app installs it for you with one button.
- Wallpaper Engine only if you want to use its wallpapers. It is optional.

## 1. Download

Open [Releases](https://github.com/Laraden/menumancer/releases/latest) and download `Menumancer-<version>-win-x64.exe`. That's the whole app: one file, no installer. Put it anywhere, for example in its own folder in Documents.

This GitHub page is the only official download. Don't run copies from other sites.

## 2. First launch and the Windows warning

Windows may show “Windows protected your PC”. The app doesn't have a paid publisher certificate yet, so SmartScreen doesn't recognise it. Click **More info**, then **Run anyway**. You only need to do this once per version.

## 3. Language and agreement

The first screen asks for your language: English, Russian or Czech. You can change it later in **Settings → Library and app → App language**. Then read and accept the license agreement. A short tour of the screens follows; you can open it again in **About → Show the tour again**.

## 4. FFmpeg

The app needs FFmpeg to read and encode video. If it isn't on your PC, **Settings** shows it in the first block and offers **Install**. The app runs `winget` (Windows' own package manager), which downloads the gyan.dev build of FFmpeg. No restart is needed. If you already have FFmpeg in `PATH` or next to the exe, the app finds it.

## 5. Dota

The app finds the game folder by itself: the status bar at the bottom says **Dota found**. If it doesn't, go to **Settings → Dota 2** and pick the `dota 2 beta` folder by hand (usually `C:\Program Files (x86)\Steam\steamapps\common\dota 2 beta`).

## 6. The voice language question

Before your first install, the app asks which voice language Dota uses. Dota reads the menu background from the folder of its voice language, so this has to match. The voice language is set in Steam: **Dota 2 → Properties → Language**. The app detects it; check it and continue.

- **Russian, Korean or Simplified Chinese voices:** nothing else to do.
- **English voices:** Dota has no separate folder for English, so the background goes into the low-violence folder. Add the launch option `-lv` in **Steam → Dota 2 → Properties → Launch Options**. It is Valve's official low-violence mode: blood in the game becomes milder, nothing else changes.

You can change this later in **Settings → Dota 2 → Voice folder for the background**.

## 7. Make your first background

Go on to [Your first background](first-background.md). Or open **Scenes** and install one of the built-in templates: that needs no video at all.

## Where the app keeps its files

- Your backgrounds: `Documents\Menumancer`.
- Settings: `%APPDATA%\Menumancer`.
- Logs and temporary files: `%LOCALAPPDATA%\Menumancer`.

**Portable mode:** create an empty folder `Menumancer-data` next to the exe. The app then keeps everything there and writes nothing to Documents or AppData, so you can carry it on a USB stick.

**Uninstall:** press **Remove all mod files** in **Settings**, close the app, then delete the exe and the three folders above.

---

[All guides](README.md) · [Download Menumancer](https://github.com/Laraden/menumancer/releases/latest)
