# The scene format

A Menumancer scene is data, not code: a `scene.json` file next to an `assets/` folder. The engine turns the file, a
time and the scene's seed into a frame, so the same scene always gives the same frames, and the last frame of the loop
flows into the first. This guide describes the file for people who write scenes by hand or write tools that make them.

Every example named here is a complete scene in [examples/](examples/). A test
(`engine/tests/Menumancer.Engine.Runtime.Tests/Docs/FormatGuideTests.cs`) loads each one, checks it against the
schema, runs the scene check on it and builds a frame, and it fails when a JSON snippet in this guide is not part of an
example, so the guide cannot drift from the format. The full list of fields with their types and defaults is the
schema, [`engine/schema/scene.schema.json`](../schema/scene.schema.json).

- [The file](#the-file)
- [Space, time and depth](#space-time-and-depth)
- [Layers](#layers)
- [Animated values](#animated-values)
- [Params](#params)
- [Effects](#effects)
- [Sliders for the user](#sliders-for-the-user)
- [Scene settings](#scene-settings)
- [Assets and licences](#assets-and-licences)
- [Frame quality and light](#frame-quality-and-light)
- [Live wallpapers](#live-wallpapers)
- [Versions and migrations](#versions-and-migrations)
- [Unknown fields](#unknown-fields)
- [The schema in an editor](#the-schema-in-an-editor)
- [Checking a scene](#checking-a-scene)
- [Adding a layer type](#adding-a-layer-type)

## The file

The smallest scene, [examples/minimal.json](examples/minimal.json):

```json
{
  "$schema": "https://raw.githubusercontent.com/Laraden/menumancer/main/schema/scene.schema.json",
  "format": "menumancer.scene",
  "version": 3,
  "loop": { "seconds": 10, "fps": 30 },
  "layers": [
    { "id": "bg", "type": "color", "color": "#14213d" }
  ]
}
```

| Field | Required | What |
|---|---|---|
| `$schema` | | The schema for editors (see [The schema in an editor](#the-schema-in-an-editor)). The engine ignores it and writes it back as read. |
| `format` | yes | Always `"menumancer.scene"`: marks the file as a scene. |
| `version` | yes | Format version, today `3`. See [Versions and migrations](#versions-and-migrations). |
| `title` | | Title in the scene gallery: `{ "ru": …, "en": …, "cs": … }`, any of the three. |
| `loop` | yes | `seconds` (loop length) and `fps` (frames per second); `story` (seconds) when the scene has a start part, see [Puppets](#puppets). |
| `seed` | | Seed of the scene's randomness (particles, noise), default `0`. |
| `camera` | | `type` (`ortho` or `perspective`), `drift` (`x`, `y`), `zoom`, `fov`. |
| `layers` | yes | Layers bottom to top: the first is drawn first. |
| `effects` | | Effects on the finished frame over all layers, in order. |
| `exposed` | | Sliders for the user of the scene. |
| `settings` | | Settings the user of the scene changes (colour, number, switch, choice, text), each driving values of the scene. |
| `assets` | | Files of the scene with the source and licence of each. |
| `render` | | Frame quality: antialiasing, HDR, tonemapping, bloom, atmosphere, motion blur, depth of field. |
| `lighting` | | Scene lights for 3D models and lit pictures. |
| `live` | | What the scene reacts to as a live wallpaper (`audio`, `mouse`). |

A field left out takes its default, and the engine does not write defaults when it saves a scene, so a saved file holds
only what differs. Names are camelCase; enum values are camelCase strings (`"softLight"`, `"easeOut"`).

## Space, time and depth

- **Units.** The frame is 1 unit high, the origin is its centre and y points down. Width depends on the screen: a 16:9
  frame is about 1.78 units wide (x from −0.89 to 0.89), a 21:9 one wider. Offsets, sizes and radii are in these units,
  so a scene looks the same on any screen height. Angles are degrees, clockwise.
- **Time.** Values are functions of the time inside the loop (`0` to `loop.seconds`). The loop closes when every
  animated value comes back to where it started: a wave or keyframes with a `period` that divides the loop length do.
  The scene check warns about a value that leaves a seam.
- **Depth.** Every layer has a `depth`: `0` for the far background, more for nearer layers. When the camera drifts,
  deeper layers move more (parallax); atmosphere and depth of field read the same depth.

## Layers

Every layer has these fields; each kind adds its own.

| Field | Default | What |
|---|---|---|
| `id` | required | Layer name, unique in the whole scene (groups included): Latin letters, digits, `-` and `_`. Value paths and sliders use it. |
| `type` | required | The kind: one of the sections below, or a kind a host registered. |
| `depth` | `0` | Depth for parallax, atmosphere and depth of field. |
| `blend` | `normal` | How the layer blends with what is below it: `normal`, `add`, `screen`, `multiply`, `overlay`, `softLight` and the other Photoshop modes (the schema lists all 29). |
| `opacity` | `1` | Opacity 0..1, animatable. |
| `visible` | `true` | A hidden layer is kept in the file but not drawn. |
| `desktopOnly` | `false` | Drawn only by the live wallpaper; the Dota video and previews without live data skip it. |
| `sceneEffect` | `false` | The layer belongs to the editor's "Scene effects" strip (snow, embers, rays) rather than the layer list. |
| `transform` | none | `offset` `[x, y]`, `scale`, `rotation`, each animatable. |
| `attach` | none | Pins the layer to an attachment point of a puppet: `layer` (the puppet layer's id) and `point` (a point name in its puppet file). The layer moves with the point's bone, its `transform` on top. See [Puppets](#puppets). |
| `effects` | `[]` | Effects of the layer, in order (see [Effects](#effects)). |
| `params` | `{}` | Params read by the layer's shader, particle preset or node (see [Params](#params)). |

### `color`

A colour over the whole frame. `color` is required and animatable. [examples/layer-color.json](examples/layer-color.json)

```json
{ "id": "bg", "type": "color", "color": "#0b1030" }
```

Colours are `"#rrggbb"`, `"#rrggbbaa"` or `[r, g, b]` / `[r, g, b, a]` with each part in 0..1.

### `gradient`

A gradient over the whole frame: `kind` `linear` (default) or `radial`, `angle` for a linear one (0 left to right, 90
top to bottom), and at least two `stops`, each `{ "at": 0..1, "color": … }` in increasing order. Stop colours are
animatable. A radial gradient is a circle around the layer's point; scale and move it with `transform`.
[examples/layer-gradient.json](examples/layer-gradient.json)

```json
{ "id": "sun", "type": "gradient", "kind": "radial", "blend": "screen", "depth": 0.3,
      "transform": { "offset": [0.35, 0.18], "scale": 0.35 },
      "stops": [
        { "at": 0, "color": "#fff1c4" },
        { "at": 1, "color": "#ff7a3000" }
      ] }
```

### `image`

A picture from the scene folder. `asset` is its path (required, and listed in `assets`). `fit` places it like CSS
`object-fit`: `cover` (default, fills the frame and crops), `contain` or `stretch`; with `size` `[w, h]` in scene
units the picture is an object of that size instead. More fields:

- `color` multiplies the picture's pixels (animatable).
- `depthMap` gives each pixel its own depth from a grey picture (white near, black far): `asset`, `amount`, `focus`,
  `zoom` (a push-in of the near plan), `background` (a second picture with the background painted in behind near
  objects, made by `menumancer-scene photo`). Camera drift then gives real parallax inside one picture.
- `warp` bends the picture on a grid: `pins` (`at`, animated `offset`) and `waves` (a flag or cloak waving away from
  `from`–`to`).
- `motion` moves the picture inside its layer: `scroll` `[x, y]` pictures per loop with `repeat`, or `frames` of a
  sprite sheet (`columns`, `rows`, `count`).
- `lit` lights the picture with the scene's lights (`normalMap`, `relief`, `shadows`, `specular`, `shininess`).
- `puppet` stretches the picture over a puppet mesh with bones and plays its `animations` (see [Puppets](#puppets)).
- `material` draws the picture with the scene's own shader (see [Scene shaders](#scene-shaders)).
- `video` plays a video file on the picture: `file` (`.webm`, `.mp4`, `.mkv` or `.mov`, listed in `assets`), `fps`
  (default: the file's own) and `offset` (seconds into the video at the loop's start, counted at the file's own rate).
  At loop time `t` the picture shows frame `offset × own fps + t × fps`, from the first frame again after the last, so
  a video that should close the loop plays a whole number of times in it (`fps` = frames × plays / loop seconds).
  `asset` stays as the still picture: the first frame (it may be the video file itself), shown wherever the video
  cannot play, with a `render.video-off` warning. Everything else on the layer (size, colour, effects) works on the
  video frame. [examples/video-texture.json](examples/video-texture.json)

  ```json
  "video": { "file": "assets/pond.webm", "fps": 10, "offset": 0.5 } }
  ```

[examples/layer-image.json](examples/layer-image.json)

```json
{ "id": "valley", "type": "image", "asset": "assets/valley.png", "fit": "cover",
      "depthMap": { "asset": "assets/valley.depth.png", "amount": 0.6, "focus": 0.5,
        "zoom": { "wave": "sine", "period": 10, "amp": 0.02 } } }
```

#### Puppets

A puppet is a picture stretched over a mesh of triangles with bones, like a Wallpaper Engine puppet: the parts of a
character can lie anywhere in the picture, as in an atlas, and the mesh puts them in place. The mesh, the bones and
their clips are in a puppet file next to the picture (`*.puppet.json`, listed in `assets`); `puppet.asset` names it and
`puppet.animations` says which clips play, as WE `animationlayers` do.

[examples/puppet.json](examples/puppet.json)

```json
"puppet": { "asset": "assets/stalk.puppet.json", "animations": [
        { "animation": 1, "rate": { "keys": [{ "t": 0, "v": 0 }, { "t": 4, "v": 1 }] }, "blendIn": 0.5 },
        { "animation": 2, "additive": true, "blend": 0.6,
          "visible": { "keys": [{ "t": 0, "v": 0, "ease": "hold" }, { "t": 2, "v": 1, "ease": "hold" }] }, "blendTime": 0.25 }
      ] }
```

| Animation layer field | Default | What |
|---|---|---|
| `animation` | required | The clip's `id` in the puppet file. |
| `rate` | `1` | Speed: `1` as in the file, `0.5` half as fast. A number or keys (not a wave or a formula): the clip advances by the rate summed over time, so a rate that rises from 0 starts the clip late. |
| `blend` | `1` | Weight 0..1: a normal layer's share in the mix with the rest pose and the other layers, an additive layer's strength. A number or keys. |
| `additive` | `false` | The layer adds its clip's motion from its first frame on top of the other layers. |
| `visible` | `true` | `true` or `false`, or keys of `1` (on) and `0` (off) with `"ease": "hold"`: the layer switches at a key. |
| `blendIn`, `blendOut` | `0` | Seconds over which the layer fades in when its `visible` keys turn it on and out when they turn it off; `0` takes `blendTime`. Keyed `blend` is not faded. |
| `blendTime` | `0` | The fade where `blendIn` or `blendOut` is `0`; `0` switches at once. |
| `phase` | `0` | Where in its round the clip is when the story starts, in fractions of a round. |

Keys of `rate`, `blend` and `visible` without a `period` that run past the loop are a **start part**, and so is a
`single` clip: the live wallpaper plays `loop.story` seconds once and then repeats its last `loop.seconds`, so the loop
is the end of the story and the start part runs into it. The Dota video is that loop. Puppet times count from the story
start, and a clip advances by its rate summed over time: a rate keyed up from 0 starts it late. A looping clip that does
not fit the loop cross-fades over the loop's last second (at most a quarter of it) into its pose a loop earlier. Another layer
follows a point of the puppet with `attach`:

```json
{ "id": "lantern", "type": "image", "asset": "assets/valley.png", "size": [0.08, 0.045],
      "attach": { "layer": "stalk", "point": "tip" } }
```

The puppet file is JSON with `"format": "menumancer.puppet"` and its own `version` (today `2`). The canvas is `width` ×
`height` pixels from its centre, y up, and lies over the layer's rectangle. Its fields:

| Field | What |
|---|---|
| `positions`, `uvs`, `triangles` | Vertex places in canvas pixels (pairs), their points in the picture in fractions (pairs) and vertex numbers by threes; triangles draw in order. |
| `bones` | The skeleton at rest: `name`, `parent` (−1 for a root), `x`, `y`, `angle` (radians, counter-clockwise), `scaleX`, `scaleY`, relative to the parent. |
| `joints`, `weights` | Four bones and four weights per vertex. |
| `animations` | Clips: `id`, `name`, `playback` (`loop`, `single`, `mirror`), `fps`, `frames`, `tracks` (per bone, `frames` + 1 keys of x, y, angle, scaleX, scaleY) and `opacity` (per bone, `frames` + 1 values 0..1; bones without a track stay opaque). |
| `parts` | Runs of triangles, each on one bone: `bone`, `first` (first triangle), `count`. |
| `clipGroups` | Clipping masks: the parts in `clipped` are drawn only where the parts in `by` cover (part numbers in `parts`). Cover is what the `by` parts draw of the picture, soft edges included; a part in several groups shows where any of their `by` parts cover. Other parts draw in triangle order as before. |
| `points` | Attachment points: `name`, `bone`, and `x`, `y`, `angle` relative to the bone. |

Menumancer writes puppet files when it imports a Wallpaper Engine scene; the scene check makes sure that `attach`
names a puppet layer and a point its file has, and that pins do not go round in a circle.

### `procedural`

A layer drawn entirely by a built-in shader, named by `shader`; its settings go in `params`. Most look best with `add` or
`screen` blending over a sky. [examples/layer-procedural.json](examples/layer-procedural.json)

```json
{ "id": "stars", "type": "procedural", "shader": "stars", "blend": "add", "params": { "density": 0.3, "twinkle": 0.6 } }
```

| Shader | What |
|---|---|
| `aurora` | Slowly swaying curtains of light with rays. |
| `clouds` | Drifting clouds, fog banks or rising smoke. |
| `lightRays` | A slowly breathing fan of light shafts. |
| `mountains` | A silhouette of mountains, hills or a tree line; several at different depths give volume. |
| `nebula` | Slowly flowing coloured gas clouds with dark dust lanes. |
| `stars` | A twinkling starry sky. |

Each shader's params, with their defaults and ranges, are in its manifest:
`engine/src/Menumancer.Engine.Rendering/Procedural/Builtin/<name>.json`.

### `particles`

Particles computed from their age, so they close any loop. Either a built-in `preset` with `params` (such as `count`), or
an own `system` (count, spawn area, life, speed, direction, spread, size, colour over life and more; the schema's
`ParticleSystem` lists every field). Exactly one of the two. [examples/layer-particles.json](examples/layer-particles.json)

```json
{ "id": "embers", "type": "particles", "preset": "embers", "depth": 0.8, "params": { "count": 60 } }
```

Presets: `embers` (glowing dots rise, sway and fade), `sparks` (fast bright streaks fly up and fall in an arc), `dust`
(rare warm motes float slowly over the frame), `snow` (falling flakes). A preset brings its own blend mode when the layer keeps `normal`.

An own `system` can also move its particles with forces, give them depth and give birth to other particles.
`sizeExponent` shapes how sizes spread between `size.min` and `size.max` (above `1` most particles are small).
[examples/particle-motion.json](examples/particle-motion.json)

- `operators` act on every particle each moment, in order: `turbulence` (`strength`, `scale`, `cycles` per loop),
  `vortex` (spin around `center`: `speedInner` at `inner`, `speedOuter` at `outer`), `attract` (pull towards the
  control point `point` with `strength` inside `radius`; a negative strength pushes away) and `speedCap` (`max`).
  A system with operators is moved step by step from each particle's birth (1/120 s); the forces repeat with the
  loop, so the loop still closes. A system without them keeps the exact formula of age.

  ```json
  { "type": "turbulence", "strength": 0.2, "scale": 0.15, "cycles": 2 },
  ```

- `controlPoints` are named points forces aim at: `id`, `at` (layer units) and `cursor` (follows the mouse on the
  desktop and stays at `at` in a video).

  ```json
  "controlPoints": [ { "id": "hand", "at": [0.3, -0.1], "cursor": true } ],
  ```

- `depth` gives particles a distance behind the layer: `z` and `speedZ` ranges at birth (in view heights, positive is
  farther), and `perspective` to draw them through the scene camera's `fov` with any camera `type`: the eye sits where
  the layer's plane keeps its size, a particle at depth `z` is scaled by `eye / (eye + z)` towards the middle of the
  view, trails are projected end to end, and one nearer the eye than 5 % of its distance is not drawn. Without
  `perspective` the depth changes nothing.

  ```json
  "depth": { "z": { "min": 0, "max": 2 }, "speedZ": { "min": -0.1, "max": 0.1 }, "perspective": true },
  ```

- `children` give birth to particles of another particles layer with its own `system`: `on` (`follow` along the
  path, `spawn` at birth or `death` where a particle dies), `layer` and `count`. A layer cannot be its own child, and
  children cannot loop back to their parent.

  ```json
  "children": [ { "on": "death", "layer": "ash", "count": 3 } ]
  ```

### `group`

Layers drawn as one: the group's `layers` are composited first, then the group's own effects, blending and opacity apply
to the result. With a `canvas` `[w, h]` (the size the content was made for) the group scales to cover any frame shape,
as `fit: cover` does for a picture. Layer ids are unique across the whole scene, so value paths do not mention groups.
[examples/layer-group.json](examples/layer-group.json)

```json
{ "id": "poster", "type": "group", "canvas": [1.7777, 1], "opacity": 0.9,
      "effects": [ { "id": "soft", "effect": "blur", "params": { "radius": 0.004 } } ],
```

### `model`

A 3D model: a glTF file (`asset`, `.glb` or `.gltf`) or a built-in `primitive` (`sphere`, `cube`, `torus`, `cylinder`,
`cone`, `plane`, `crystal`, `knot`), exactly one of the two. `size` is the diameter of the sphere the model fits in,
`rotation` (`x`, `y`, `z` degrees, animatable), `spin` (whole turns per loop around each axis, which always closes the
loop) and `material` (`color`, `metallic`, `roughness`, `emissive`, `glow`) over the file's materials. With a
`perspective` camera, camera drift shows the model slightly from the side. Light comes from `lighting`, or a soft
studio light without it. [examples/layer-model.json](examples/layer-model.json)

```json
{ "id": "crystal", "type": "model", "primitive": "crystal", "depth": 0.5, "size": 0.4,
      "rotation": { "x": 15 }, "spin": { "y": 1 },
      "material": { "color": "#8f6bff", "roughness": 0.15, "emissive": "#5a2dff", "glow": 0.6 } }
```

### `backdrop`

The frame under the layer: no picture of its own, it shows what is already drawn below it inside its rectangle (`size`
`[w, h]`, required), optionally mirrored with `flipX` / `flipY`. Its effects act on that piece of the frame: a puddle
that ripples and reflects the sky. Inside a group it sees what is below it in that group.
[examples/layer-backdrop.json](examples/layer-backdrop.json)

```json
{ "id": "water", "type": "backdrop", "size": [1.7777, 0.5], "flipY": true, "opacity": 0.8,
```

### `audio`

Spectrum bars of the sound playing on the computer, lows on the left. Live wallpaper only: the Dota video has no sound
and skips the layer. `shape` (`bottom`, `top`, `center`, `circle`, `arc`, `line`), `bars` (up to 96), `width`,
`height`, `radius` and `sweep` for round shapes, `gap`, `minHeight`, `fromHz`/`toHz`, `color` or `colorFromCover`,
`rounding`, `mirror` (lows in the middle, left and right channels apart), `thickness` (for `line`), `fadeAfter`
(seconds of silence before the bars fade out; `0` never). [examples/layer-audio.json](examples/layer-audio.json)

```json
{ "id": "ring", "type": "audio", "shape": "circle", "bars": 64, "radius": 0.15, "height": 0.1, "mirror": true, "fadeAfter": 5 }
```

### `text`

One line of text: own `text`, or the `time`, `date` or the playing `track` (`source`). Time, date and track live only
on the desktop, since a video would freeze them. Fields: `hours24`, `seconds`, `dateFormat` (.NET style: `dddd, d MMMM`),
`language` for day and month names, `track` (`artistTitle`, `title`, `artist`, `album`), `font` (a Windows font or a
family in `fontFile`, a `.ttf`/`.otf` in the scene folder), `weight`, `size` (line height in scene units), `color` or
`colorFromCover`, `align` (`left`, `center`, `right`: which end of the line sits on the layer's point).
[examples/layer-text.json](examples/layer-text.json)

```json
{ "id": "caption", "type": "text", "text": "Good evening", "size": 0.04, "align": "left",
      "transform": { "offset": [-0.85, 0.42] } }
```

### `cover`

The cover of the playing track: a square of side `size` around the layer's point, with `rounding`. No cover, no layer.
Live wallpaper only. [examples/layer-cover.json](examples/layer-cover.json)

```json
{ "id": "cover", "type": "cover", "size": 0.16, "rounding": 0.1, "transform": { "offset": [-0.6, 0.3] } }
```

## Animated values

Every value the schema marks as animatable (opacity, transform, colours, camera, many params) takes one of five forms.
[examples/animated-values.json](examples/animated-values.json) has all four.

1. **Constant**: the plain value, `0.5`, `[0.1, 0]` or `"#ffd166"`.
2. **Wave**: `base + amp · shape(t / period + phase)` with `wave` `sine`, `triangle` or `saw`. `phase` is a share of
   the period (`0.25` starts a sine at its top). For colours and vectors `amp` and `base` are colours and vectors.

   ```json
   "opacity": { "wave": "sine", "period": 4, "amp": 0.2, "base": 0.6, "phase": 0.25 },
   ```

3. **Keyframes**: `keys`, each `{ "t": seconds, "v": value, "ease": … }`, where `ease` (`linear`, `hold`, `smooth`,
   `easeIn`, `easeOut`) is how the value goes from this key to the next. With a `period` (every key before it) the keys
   repeat and the last one flows into the first of the next repeat; without one the value holds before the first key and after the last.

   ```json
   "scale": { "keys": [ { "t": 0, "v": 0.2 }, { "t": 3, "v": 0.35, "ease": "easeOut" } ], "period": 6 } },
   ```

4. **Formula**: `expr`, one formula per component (one for a number, two for a vector, three or four for a colour in
   0..1), with an optional `period` and `base`.

   ```json
   "offset": { "expr": ["0.5 + 0.1 * sin(tau * p)", "0.15 * cos(tau * p)"], "period": 12 },
   ```

   Formulas know `+ - * / % ^`, brackets and numbers; the variables `t` (seconds, inside the period when there is
   one), `p` (share of the period, 0..1), `base` (the middle a slider moves), `pi`, `tau`, `e`; the functions `sin cos
   tan asin acos atan atan2 sqrt abs sign floor ceil round fract exp log pow mod min max clamp lerp mix step
   smoothstep`, the waves `sine tri saw` and the noises `noise(x)` and `pnoise(x, n)` (repeats every `n`, so
   `pnoise(p * 8, 8)` closes the loop). On the desktop formulas also read live inputs: `audio bass mid treble mousex
   mousey`, `hour minute second`, `playing progress silence`; in a rendered video these are zeros (`silence` is long).
   There is no randomness: a formula gives the same number at the same moment.

5. **Script**: a small JavaScript function, inline as `script` or in a `.js` file of the scene as `scriptFile`
   (listed in `assets`), with a `start` value and the `inputs` it reads: the live groups `mouse`, `audio`, `clock`,
   `media`, a scene setting as `settings.<id>`, or the path of another value. A script that cannot run keeps its
   `start` value. What a script sees is in [Scripts](#scripts). [examples/script-values.json](examples/script-values.json)

   ```json
   "color": { "scriptFile": "assets/daylight.js", "start": "#2b4a7a", "inputs": ["clock"] } },
   ```

### Scripts

A script is the body of a function the engine calls once per frame, from format version `3`. It returns the value: a
number, a vector `[x, y]` (or `{ x, y }`) or a colour `[r, g, b, a]` in 0..1 (or `{ r, g, b, a }`, or `"#rrggbb"`).
A script may instead be a program that declares `function update(value)` at its top level (and maybe
`function init(value)`): its top level and `init` run once after each reset, its top-level variables live until the
next reset, and `update` runs every frame with the value it returned last (the `start`, or what `init` returned, on the
first frame). It sees:

- `value`: the `start` value, in the same shape (a slider bound to the script moves it);
- `state`: an object of its own that it may keep things in between frames, and `shared`: one object for all scripts of
  the scene;
- `time`: seconds into the loop, like every other value; `frameTime`: seconds since the script's previous frame (0 on
  the first); `story`: seconds into the story when the loop has one (`loop.story`); `loop.seconds`, `loop.fps`;
- the inputs it lists: another value by its path, as an object path (`sky.color[1]`) and by the whole path in `values`
  or `read` (`values["sky.color"]`, `read("sky.color")`; a path that starts with one of the names here is only there);
  a setting as `settings.<id>` (number, colour, `true`/`false` or text);
- the live groups, on the desktop: `mouse.x`, `mouse.y` (−1..1, 0 in the centre, `y` down); `audio.level`, `audio.bass`,
  `audio.mid`, `audio.treble` (0..1) and `audio.silence` (seconds); `clock.year … clock.second`, `clock.weekday`,
  `clock.dayProgress` (0..1 over the day), and `Date`, which tells the same time; `media.playing`, `media.progress`,
  `media.position`, `media.duration`, `media.title`, `media.artist`, `media.album`. List the groups a script reads in
  its `inputs`: the wallpaper collects only what some formula or script lists;
- helpers: `vec2(x, y)`, `rgb(r, g, b, a)`, `hsv(h, s, v, a)`, `hex("#rrggbb")`, `add`, `sub`, `scale`, `mix(a, b, t)`,
  `clamp(x, lo, hi)` and `length`, for numbers and arrays alike, and `read(path)`; and plain JavaScript (`Math`,
  arrays, `JSON`).

In a rendered video, as in the Dota menu, the mouse is in the centre, the sound is silent and the clock shows midnight
(or the time the host that renders passes). The same scene, inputs and time always give the same value: `Math.random`
is seeded from the scene's `seed`, and `state`, `shared`, a program's top level and the random numbers start again
whenever time goes back by a frame or more, at the loop's seam too. So a value closes the loop when it depends on `time` (and `state` built from
`frameTime`); a counter that only grows does not, and the check warns (`script.loop-seam`).

Scripts run sandboxed in strict mode: no files, network, timers, modules, `eval` or .NET, and limits on statements,
memory and call depth per run, plus a time budget per frame. A script that throws or hits a limit keeps its `start` value and is not
run again; the scene still draws, and the problem is one warning (`script.error`, `script.limit`, `script.missing`,
`script.result` for a value of the wrong shape, `script.cycle` when two scripts read each other, `script.budget`).

## Params

`params` is a map from a name to a value the layer's shader, preset or effect reads: a number, a vector `[x, y]`, a
colour (each of the three animatable), a string or `true`/`false`. Which names a shader or effect knows, with defaults
and ranges, is in its manifest; a param left out takes the manifest's default.

```json
"params": { "color": "#070a14", "horizon": 0.35, "height": 0.3 } }
```

## Effects

A layer's `effects` apply to the layer's own pixels, in order, before it blends with the layers below; the scene's
`effects` apply to the finished frame. Each effect is `{ "id", "effect", "enabled", "params", "mask", "textures" }`:
`id` is unique on its layer, `effect` names a built-in effect, `params` set its manifest params. On a picture layer a
`mask` (a grey picture of the same frame: white takes the effect, black keeps the layer as it was) limits where the
effect acts, and `textures` hands it extra pictures (`texture1`, `texture2` in the manifest). Masks and textures are
scene assets. [examples/effects.json](examples/effects.json)

```json
{ "id": "wind", "effect": "sway", "mask": "assets/valley.mask.png", "params": { "strength": 0.004, "cycles": 3 } },
```

```json
"effects": [
    { "id": "mist", "effect": "fog", "params": { "density": 0.3, "height": 0.5 } },
```

| Effect | What |
|---|---|
| `blend` | Lays a second picture (a texture) over the layer with a blend mode. |
| `blendGradient` | A second picture shows through along a transition map, dark parts first. |
| `blur` | Softly blurs the layer. |
| `colorGrade` | Exposure, contrast, saturation, temperature, tint, hue, gamma. |
| `filmGrain` | Fine film grain; keep it light, grain is hard to compress. |
| `fire` | Tongues of colour flow along the arrows of a flow map. |
| `flow` | Water, clouds and smoke flow along a flow map. |
| `fog` | Drifting fog over the layer. |
| `gaze` | The part under the mask (an iris) looks around in glances; `shift` can follow the cursor. |
| `glow` | Bright parts glow and light up their surroundings. |
| `godRays` | Bright parts cast rays from a point or in one direction. |
| `heatHaze` | The air shimmers as above a fire. |
| `lightShafts` | Shimmering bands of light in a beam. |
| `localContrast` | Brings out detail: each spot moves away from its blurred surroundings. |
| `mirror` | A flipped copy of the layer goes over it, as in a puddle or a lake. |
| `opacity` | The layer shows where the mask is white. |
| `perspective` | Pins an area of the frame to four corners, as on a wall or a screen. |
| `ripple` | Rings on water or running waves distort the layer. |
| `shine` | Bright parts shine as a slowly turning star of rays. |
| `sway` | Leaves, hair and cloth sway in the wind. |
| `tint` | Recolours the layer with one colour and a blend mode. |
| `vhs` | An old video tape: tear band, colour split, row jumps, grain, dropouts. |
| `vignette` | Darkens the frame edges. |
| `wisps` | Thin glowing wisps of smoke or energy flow over the layer. |

Each effect's params are in its manifest, `engine/src/Menumancer.Engine.Rendering/Effects/Builtin/<name>.json`, with
labels in Russian, English and Czech, defaults, ranges and hints. Speeds are counted in `cycles` per loop: whole numbers
close the loop.

### Scene shaders

A scene can bring its own HLSL shader: as an effect named `shader` with a `shader` object, or as the `material` of a
picture layer. The object has `file` (a `.hlsl` file of the scene, listed in `assets`), `textures` (up to 8: scene
pictures, `"$layer"` for the layer's own pixels or `"$under"` for the frame under the layer) and `fallback`, what
happens where the shader cannot be compiled: `skip` (default, draw as if it were not there) or `hide` (hide the
layer). The effect's `params` are the shader's named inputs. [examples/shader-effect.json](examples/shader-effect.json)

```json
"material": { "file": "assets/shimmer.hlsl", "textures": ["$layer"] } },
```

```json
"shader": { "file": "assets/shimmer.hlsl", "textures": ["$under", "assets/valley.mask.png"], "fallback": "hide" } }
```

The file is HLSL (Shader Model 5) with one function, `float4 Shade(float2 uv)`: `uv` is 0..1 over the frame (the
layer's pixels are already at their place), the result is a colour with premultiplied alpha. Besides its params,
which it reads like a built-in effect (`EffectParams e = LoadParams();` then `e.speed`; numbers are `float`, vectors
`float2`, colours `float4`, switches `bool`; at most 10, no text), a scene shader reads these names:

| Name | What |
|---|---|
| `Texture0` … `Texture7` | the `textures` in order, with the samplers `LinearClamp`, `PointClamp`, `LinearWrap` and `PointWrap` (wrap repeats the picture past 0..1); an empty or missing slot is white |
| `TextureSize(t)`, `TexelSize` | a texture's size in pixels; one pixel of the frame in `uv` |
| `Time`, `Phase`, `LoopSeconds`, `Seed` | seconds into the loop, the share of the loop 0..1 (a function of it closes the loop), the loop length, the scene's seed |
| `TargetSize` | the frame size in pixels |
| `Cursor` | the cursor in `uv` (0.5, 0.5 in the middle) |
| `Audio`, `AudioBand(i)` | sound: bass, mid, treble and level 0..1; the spectrum in 16 bands, low to high |

Pictures and `"$layer"` are laid over the layer's own pixels, as an effect mask is (on a layer without a picture of its
own a picture is stretched over the frame). A `material` runs first, before the layer's effects, and draws only over
the picture's place. The cursor and sound are live on the desktop when the scene's `live` block turns them on;
in the Dota video the cursor is in the middle and there is silence.

What happens where the shader cannot run is a report row and `fallback`: a missing file (`render.shader-missing`),
params the shader cannot read (`render.shader-params`), a compile error (`render.shader-compile`, with the file's
line). When the graphics card is lost while a scene shader runs, the wallpaper reopens the scene with its shaders off
(`render.shader-off`).

## Sliders for the user

`exposed` turns values into sliders the user of the scene gets (Wallpaper Engine calls them user properties). Each
slider has an `id` (Latin letters, digits, `-`, `_`), a `label` and a `bind`: the path of an animated value, with
optional `min`, `max` and `step` for numbers. [examples/exposed-sliders.json](examples/exposed-sliders.json)

```json
{ "id": "starGlow", "label": { "en": "Star glow" }, "bind": "stars.effects.soft.params.intensity", "min": 0, "max": 2 },
```

Paths start at a layer id or a scene block:

- `<layer>.opacity`, `<layer>.transform.offset|scale|rotation`, `<layer>.color`, `<layer>.params.<name>`,
  `<layer>.effects.<effect id>.params.<name>`
- gradients: `<layer>.angle`, `<layer>.stops.<n>.color`; pictures: `<layer>.depthMap.amount|focus|zoom`,
  `<layer>.warp.pins.<n>.offset`, `<layer>.warp.waves.<n>.amp`, `<layer>.lit.shadows|specular`; models: `<layer>.size`,
  `<layer>.rotation.x|y|z`, `<layer>.material.<field>`
- `camera.zoom`, `camera.drift.x|y`, `camera.fov`, `camera.effects.<effect id>.params.<name>` (scene effects)
- `render.exposure`, `render.bloom.strength`, `render.atmosphere.color|density`, `render.depthOfField.focus`
- `lighting.ambient`, `lighting.lights.<light id>.color|intensity|position|height|radius|angle|elevation`

A slider moves a constant, or the `base` of a wave or formula. A value given as keyframes has no single middle to move,
and the check warns about such a bind.

## Scene settings

`settings` are what the user of the scene changes in the app, each of one `kind`: `color`, `number` (with `min`, `max`,
`step`), `switch`, `choice` (with `options`, each a `value` and a `label`) or `text`. A setting has an `id`, a `label`
and its `value`, and `drives` lists the paths it sets, with the same paths as [sliders](#sliders-for-the-user) plus
`<layer>.visible`. With `when` a target is on only while the setting has that value: a choice turns layers on and off.
A setting that drives nothing must be an input of a script. [examples/settings.json](examples/settings.json)

```json
{ "id": "skyColor", "label": { "en": "Sky colour" }, "kind": "color", "value": "#1d2b53",
      "drives": [ { "path": "sky.color" } ] },
```

```json
"drives": [ { "path": "snow.visible", "when": "snow" }, { "path": "embers.visible", "when": "fire" } ] }
```

## Assets and licences

Every file a scene uses (pictures, depth maps, masks, fonts, models, puppets, videos, shaders, scripts) sits inside the
scene folder and is listed in `assets` with where it comes from, so a scene can be shared without breaking anyone's licence:

| `source` | Meaning |
|---|---|
| `own` | Made by the scene's author, shared with the scene. |
| `user` | The user's own picture: stays on their computer, never packed for sharing. |
| `library` | From an open library (CC0 and similar): shared with its `license` (required). |
| `link` | Only a link: the receiver downloads the file from `url` (required) themselves. |

```json
{ "path": "assets/valley.png", "source": "own", "license": "CC0-1.0", "author": "Menumancer" },
```

Paths are relative to the scene folder with `/` and may not leave it. The check reports a used file that is not
listed, a listed file nobody uses and a library file without a licence. Content of Wallpaper Engine wallpapers is never shared
or shipped with a scene: an imported scene uses the files of the user's own install.

## Frame quality and light

Without a `render` block a scene is drawn with 8 bits per channel and no antialiasing; `"render": {}` turns on
the defaults. [examples/render-quality.json](examples/render-quality.json)

```json
"render": {
    "antialias": 2,
    "hdr": true,
    "tonemap": "aces",
```

- `antialias` (`1` to `4`, default `2`), `hdr` (16-bit blending, bright above white), `tonemap` (`none`, `soft`,
  `reinhard`, `aces`), `exposure` in stops, `dither`, `mipmaps`.
- `bloom` (`strength`, `threshold`, `radius`), `atmosphere` (haze by depth: `color`, `density`, `near`, `far`),
  `motionBlur` (`shutter`, `samples`), `depthOfField` (`focus`, `range`, `blur`). A block left out is off.
- `lighting` has an `ambient` colour and up to six `lights`: `point` (`position`, `height`, `radius`, `depth`) or
  `directional` (`angle`, `elevation`), each with `color` and `intensity`. Models and pictures with `lit` take it.

## Live wallpapers

The same scene renders to the Dota menu video and runs as a live desktop wallpaper. `live` says what the wallpaper
should react to by default (`audio`, `mouse`); the user can still switch both. `audio`, `cover` and the live sources of
`text` are drawn only on the desktop, and `desktopOnly: true` does the same for any other layer. Formulas read live
inputs only on the desktop (see [Animated values](#animated-values)), and so do scripts ([Scripts](#scripts)).

## Versions and migrations

`version` is the format version the file was written in. The engine upgrades older files step by step when it loads
them (`SceneMigrator`), so old scenes always open. A file with a newer version than the build knows fails to load with a
"newer Menumancer needed" message rather than drawing something different. Every new field that changes the picture
raises the version, even when the migration step is empty, for the same reason. Version `2` added the puppet fields:
`rate`, `blend` and `visible` of animation layers as keys, `blendIn`, `blendOut`, `blendTime`, `attach` and
`loop.story`. A version `1` file reads unchanged (a number is a constant value, `true` and `false` a constant switch), and
its migration step only moves the version. Version `3` added script values, scene `settings`, scene shaders (the
`shader` effect and picture `material`), picture `video`, and particle `operators`, `controlPoints`, `depth` and
`children`. A version `2` file reads unchanged, and its migration step only moves the version.

## Unknown fields

A field the build does not know (from a newer build, another tool or a typo) is kept as read and written back on save,
on every object of the file, so a round trip through an older editor loses nothing. The engine never reads such fields,
and the scene check warns about each one (`format.unknown-field`, with its path), which catches typos such as
`"opactiy"`. The schema allows them too (`additionalProperties: true`); an editor marks only real mistakes. An unknown
layer `type`, by contrast, fails to load: the engine would not know how to draw it.

## The schema in an editor

The schema is generated from the engine's model (`SceneSchema.Generate`, committed as `engine/schema/scene.schema.json`
and checked by `SceneSchemaTests`; `menumancer-scene schema --out file` writes it too). It is published with the
releases in the public repository at `schema/scene.schema.json`. Point a scene at it and VS Code (or any editor with
JSON Schema support) completes field names, shows each field's description and default, and underlines wrong values:

```json
"$schema": "https://raw.githubusercontent.com/Laraden/menumancer/main/schema/scene.schema.json",
```

To use a local copy for every scene instead, add to VS Code's `settings.json`:

```jsonc
"json.schemas": [
  { "fileMatch": ["**/scene.json"], "url": "./engine/schema/scene.schema.json" }
]
```

The schema covers the shape of the file. Rules that need more than one field (unique ids, a bind that leads to a
value, a loop that closes, assets that exist) belong to the scene check.

## Checking a scene

One check holds every rule (`SceneCheck` in `Menumancer.Engine`). It runs in two stages: the **format** stage needs
only the file (names, assets and licences, values and ranges, sliders, the loop, unknown fields, each kind's own
format rules), and the **runtime** stage needs the scene's files loaded and the engine's catalogs (pictures exist and
decode, effects, shaders and particle presets are known, each kind's runtime rules). Every host goes the same way:
read the file, run the format stage, load the files, run the runtime stage when frames are prepared.

`menumancer-scene check <scene.json>` runs both stages and prints the loop and the warnings, or the errors. Each finding
has a severity (`Error`: the scene cannot be rendered; `Warning`: it renders, but maybe not as meant), the path of
the value (`sun.opacity`, `assets[1]`) and a stable code such as `asset.unused` or `exposed.bind`; the list of codes
with a sample of each is `engine/tests/Menumancer.Engine.Tests/Snapshots/diagnostics.txt`. The app's Scenes editor
shows the same findings.

## Adding a layer type

A host can add a kind without changing the engine. The whole kind fits in one file; the example is
`engine/tests/Menumancer.Engine.Runtime.Tests/Layers/StripesLayerType.cs` (stripes of two colours that slide), drawn
on a golden frame by `StripesGoldenTests`. It takes three parts:

1. **The model record**, what the JSON holds: a record deriving from `Menumancer.Engine.Model.Layer` with the kind's
   own fields (`[DefaultValue]` on each so defaults are not written), implementing `ILayerFormat` for rules that need
   only the model (`Check`), the value walk that sliders and the loop check use (`MapValues`) and its files (`Assets`).
2. **The render record**, what the renderer draws: a record deriving from `Menumancer.Engine.Rendering.Layers.Layer`
   that implements `IDrawnLayer.Draw`, here a full-frame shader fill (`LayerDrawContext.Fill` with a `ShaderSource`
   whose `float4 Shade(float2 p)` reads `Params`).
3. **The layer type**, behaviour: a `LayerType<TModel, TRecord>` with the JSON discriminator (`Type`), `Evaluate`
   (the model at a time becomes the render record), an optional runtime `Check` (assets loaded, thresholds that depend
   on the frame) and `Editor` (icon key, inspector fields, how the editor creates a new layer).

One call registers all three, for loading, the schema, checks, frames and editors:

```csharp
LayerTypeRegistry.Register(new StripesLayerType());
```

Common fields (depth, blend, opacity, visibility, transform, effects, params) are handled for every kind; a kind handles
only its own fields and draws only its own pixels. A registered kind appears in `SceneSchema.Generate()` with its fields;
the committed schema lists only the built-in kinds. `engine/README.md` §Layer types has the contract in full and the
rules the built-in kinds follow.
