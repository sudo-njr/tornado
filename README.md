## Tornado
> [!WARNING]
> This package is not published because the npm name dispute is still in review.

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
