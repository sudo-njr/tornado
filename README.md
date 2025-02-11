## Tornado

```bash
npm install tornado
```

### Usage

```typescript
import { tornado, presets, style } from "tornado";

const spinner = new tornado({
  // frames?: string[], * defaults to presets.arc,
  // speed?: number, *75
  // text: string,
});

setTimeout(() => {
  // Also, .fail() & .warn()
  spinner.succeed({
    // text: string,
    // symbol?: string
  });
}, 500);
```

### Applying style

```typescript
import { tornado, presets, style } from "tornado";

const spinner = new tornado({
  frames: presets.arc.map((frame) => style.blue(frame)),
  text: string,
});
```
