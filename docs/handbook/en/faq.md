# Safety and FAQ

## Can I get banned for this?

Honest answer: nobody can promise you won't. Here is what we know.

- Menumancer is a cosmetic mod. It adds one file with the main menu's look to the game folder. It doesn't overwrite Valve's files, doesn't touch the game process, doesn't read its memory and gives no advantage in a match.
- The [Steam Subscriber Agreement](https://store.steampowered.com/subscriber_agreement/) (section 2.G) does not allow modifying game files. We know of no bans for cosmetic menu changes like this, but that is not a guarantee.
- If Valve changes something, the usual result is that a mod stops working, not a ban. **Remove from Dota** and Steam's **Verify integrity of game files** always bring back the stock menu.

**Use the app at your own risk.** Menumancer is an unofficial fan tool, not affiliated with or endorsed by Valve.

## What exactly does it change?

Only the main menu: the background video, the menu music and, if you use **Menu customization**, the look of some menu elements. Nothing changes in a match. Things Valve sells are never hidden or replaced: an equipped music pack plays, Dota Plus, shards and the shop stay as they are. The accept-match window is never touched.

## Will other players see my background?

No. It's only on your PC.

## My antivirus or Windows warns about the exe

Windows SmartScreen warns about any app without a paid publisher certificate, which Menumancer doesn't have yet. Each release comes with a `SHA256SUMS` file, so you can check that your exe is the original. Only download from [GitHub Releases](https://github.com/Laraden/menumancer/releases/latest).

## Is it really free? Why closed source?

It's free, with no ads and no paid features. The source is closed because it's a one-person project. If you like it, the **Support** button in the app shows how to support development.

## Does it send any data?

There's no telemetry or account. The app goes online for:

- update checks on GitHub (you can turn them off in **About**);
- installing FFmpeg through winget, when you click **Install**;
- downloading the depth network once, when you first use **Depth** in **Scenes**;
- links you open yourself (Steam pages, GitHub, support).

## How do updates work?

The app checks GitHub for a new version and installs it only when you click **Update**. Every update is signed: the app verifies the signature and checksum before replacing anything. **Pre-release versions** in **About** offers versions that are still being tested.

## Mac, Linux, Steam Deck?

Windows 10 and 11 only for now.

## Which languages?

The app: English, Russian and Czech. Dota's own language doesn't matter, but its voice language does; see [Getting started](getting-started.md#6-the-voice-language-question).

## Can I use any video?

For yourself, yes. Passing the video on is another matter; see [Sharing](sharing.md).

## How do I remove everything?

**Settings → Remove all mod files**, close the app, delete the exe and the folders `Documents\Menumancer`, `%APPDATA%\Menumancer` and `%LOCALAPPDATA%\Menumancer`.

---

[All guides](README.md) · [Download Menumancer](https://github.com/Laraden/menumancer/releases/latest)
