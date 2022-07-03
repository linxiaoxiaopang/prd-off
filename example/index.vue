<template>
  <div id="app">
    <input type="text" />
    <input type="password" v-prd-off />
    <div v-prd-off>
      <input type="password" />
    </div>
  </div>
</template>

<script>
import { prdOff } from "../directive";
export default {
  name: "App",
  directives: {
    prdOff1: prdOff,
  },
};
</script>

