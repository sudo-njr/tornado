## Tornado
> [!WARNING]
> This original package was renamed to [runtime](https://www.npmjs.com/package/runtime) by [@stringparser](https://github.com/stringparser)

```bash
npm install tornado
```

### Usage
```typescript
import { tornado, presets, style } from "tornado";

const spinner = new tornado({
  // frames?: string[], * presets.arc
  // To change the style -- ??.map((frame) => style.blue(frame)),
  // speed?: number, * 75
  // text: string,
});

setTimeout(() => {
  // Also fail & warn
  spinner.succeed({
    // text: string
    // symbol?: string
  });
}, 500);
```
