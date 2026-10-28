# Troubleshooting

## The background doesn't show in Dota

Check these in order:

1. **Was Dota open during the install?** Restart the game. Dota reads the menu files only at startup.
2. **Is the voice folder right?** Dota reads the background from the folder of its voice language. Compare **Steam → Dota 2 → Properties → Language** with **Settings → Dota 2 → Voice folder for the background**.
3. **English voices: was Dota's voice changed?** With English the app sets Dota's voice to a folder with no voice files. If you changed the voice in Dota settings after that, install the background again. `-lv` is no longer needed.
4. **Is the background installed?** In **Library** the background in the game has a gold frame and the **Installed** badge. If none has, click **Install** on the one you want.

## “Locally modified game files detected”, or matchmaking is blocked

This can happen after a Dota update.

1. Close Dota.
2. Click **Remove from Dota** on the background's card, or **Remove all mod files** in **Settings**.
3. If the message stays: **Steam → Dota 2 → Properties → Installed Files → Verify integrity of game files**.

Then [tell us](https://github.com/Laraden/menumancer/issues/new/choose) which Dota update it was. The app never overwrites Valve's files, so removing its own file always brings the stock menu back.

## The background disappeared after a Dota update

Steam updates sometimes clean the game folders. Open **Library** and click **Install** on your background again. Nothing needs rebuilding.

## “Dota is running”

The app can't change game files while the game is open. Close Dota and try again.

## FFmpeg is missing or won't install

**Settings → Install** runs `winget`. If winget isn't available (older Windows 10 builds), install “App Installer” from the Microsoft Store, or download FFmpeg yourself and put `ffmpeg.exe` and `ffprobe.exe` next to `Menumancer.exe`.

## The menu lags or the PC gets loud

- Use **30 fps** (the default). 60 fps doubles the decoding load. Set it in **Settings → Video** for new backgrounds, or under **▾** when installing a scene.
- Turn the quality down a step in **Settings → Video**.
- If the menu still lags, try the background with **Remove from Dota** to see whether it's the cause, and [tell us](https://github.com/Laraden/menumancer/issues/new/choose) your PC's graphics card and CPU.

## The loop has a visible jump

- In **Loop and frame**, try another segment from **Suggested**, ideally one with a higher percentage.
- Switch **Loop blend** to **Crossfade** and make **Transition length** a little longer.
- **Fine-tune seam** looks for a better end frame within a second.
- Videos where the camera moves have no clean loop: use crossfade or ping-pong.

## A Wallpaper Engine scene looks wrong or is “Not supported”

3D, web and application wallpapers aren't supported yet. Other scenes may look slightly different from Wallpaper Engine, since the engine is still growing. A [bug report](https://github.com/Laraden/menumancer/issues/new/choose) with the Workshop ID helps a lot.

## Windows says the app is unrecognised

That's SmartScreen: the app has no paid publisher certificate yet. Click **More info → Run anyway**. Only download the app from [GitHub Releases](https://github.com/Laraden/menumancer/releases/latest).

## Still stuck

[Open an issue](https://github.com/Laraden/menumancer/issues/new/choose) and add:

- the version from **About**;
- what you did and what happened;
- the newest log from `%LOCALAPPDATA%\Menumancer\logs`.

---

[All guides](README.md) · [Download Menumancer](https://github.com/Laraden/menumancer/releases/latest)
