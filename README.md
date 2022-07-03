# v-prd-off

适用于 vue 的指令，用于解决浏览器密码框默认记住密码的问题。

## Install

```bash
npm install v-prd-off
```

## Usage

全局注册指令

```js
import prdOff from "v-prd-off";

Vue.use(prdOff);
```

或者局部组件中引用:

```js
import { prdOff } from "v-prd-off";

export default {
  directives: {
    prdOff
  },
};
```

然后再模板(template)中使用:

```vue
<template>
  <input type="password" v-prd-off />
  或者在父容器中使用，默认会选择第一个input元素进行操作。跟指令加在input上是一致的
  <div v-prd-off>
    <input type="password" />
  </div>
</template>
```

## License

MIT &copy;
