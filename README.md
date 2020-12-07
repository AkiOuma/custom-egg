# 路由装饰器 Qkouter

## 使用
```typescript
\\ router.ts
import { Application } from 'egg';
import { Qkouter } from './decorator';

export default (app: Application) => {
  Qkouter(app);
};
```