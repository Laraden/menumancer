# Scenes

Live backgrounds drawn by the app itself: northern lights, deep space, embers or your own picture with depth. Dota gets an ordinary video that loops without a seam.

![Scenes](images/scenes.png)

## 1. Templates

The app's own scenes. There isn't a single picture by anyone else in them: everything is drawn by shaders, so you can show and share the background freely. A tile opens the scene, and “← All scenes” above the preview brings you back here.

## 2. Your own picture

Drop a picture onto the screen or click the frame, and it becomes a live background: the camera moves in a slow circle. With “Depth” above the preview, a neural network works out what is near and what is far, and near things move more than far ones. The network downloads once.

## 3. My scenes

Scenes you built in the editor or brought over from Wallpaper Engine. Under “Advanced” at the bottom, “Empty scene” starts from a clear sky and “Open folder…” opens any folder with a scene.json.

## 4. Wallpaper Engine scenes

Scenes from your Workshop subscriptions. The badge says whether the app's engine takes a scene fully, partly or not yet; the “Supported” filter hides the last ones. A tile brings the scene into “My scenes” with the settings you picked for it in WE itself; WE files are only read. The app can't draw 3D scenes yet and says so. After an app update a tile brings the scene over again, and the earlier copy stays in “My scenes”.

## 5. Preview

The scene plays live, just like in the Dota menu. The loop is closed: the end flows into the start without a seam. “Pause” freezes the frame.

## 6. Scene settings

Colors, brightness, the amount of snow or embers: every template has its own. The preview changes right away, “Reset” brings everything back.

## 7. Install into Dota

“Install into Dota” in the bar above the preview renders the scene to a video for your monitor, builds the background and installs it into Dota; progress shows right on the button, and you can leave the page. The ▾ next to it opens the background name and frame rate: 30 is optimal and recommended, 60 is for good PCs. Quality and “Library only” are under “Advanced”.

## 8. Editor

“Editor” shows what the scene is made of: layers on the left, the preview in the middle, the settings of the selected layer on the right. The simple mode sliders stay, and their values move into the scene.

## 9. Layers

The top layer is closest to the viewer. “+ Layer” adds a shader, particles, your own picture, a 3D model (.glb), a gradient or a group; the arrows change the order, the eye hides a layer. “↶” undoes any change.

## 10. Layer settings

The main settings are visible right away, rare ones are under “Advanced”. “∿” makes a value swing in a wave, with the period picked so the loop stays seamless. “◉” puts a field among the simple mode sliders. “Save scene” puts it into “My scenes”.

---

[All guides](README.md) · [Download Menumancer](https://github.com/Laraden/menumancer/releases/latest)
