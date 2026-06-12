# zen.x

Phase 1 is a browser-first interactive loader built with React, Vite, Three.js, and React Three Fiber.

## What is included

- Low-poly floating cloth mesh
- Wind-like vertex animation
- Portrait texture sizing based on the uploaded artwork ratio: `1023 x 1261`
- Windows 95 style loading overlay
- Mobile-safe segment profile for older iPhones and mid-range devices

## Where to place the cloth image

Upload your image to this exact path:

```txt
src/assets/cloth-texture.jpg
```

The current code imports the texture from:

```js
import clothTextureUrl from "../assets/cloth-texture.jpg";
```

So the filename must be exactly:

```txt
cloth-texture.jpg
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Next phase

Phase 1.5 will add the cloth exit/disintegration transition before the project moves into the desk/laptop scene.
