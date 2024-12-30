<template>
  <div>
    <div class="outer">
      <Demo2 />
      <Demo3 />
    </div>
    <div class="outer">
      <Setup />
    </div>
    <div class="outer">
      <Ref />
      <Reactive />
    </div>
    <div class="outer">
      <Computed />
      <Watch1 />
      <Watch2 />
      <Watch3 />
    </div>
    <div class="outer">
      <Interfaces />
      <SelfDefinedHooks />
      <SelfDefinedHooksUsage />
    </div>
    <div>
      <Router />
    </div>
  </div>
</template>

<script setup lang="ts">
import Demo2 from "./components/vue2/Demo.vue";
import Demo3 from "./components/vue3/Demo.vue";
import Setup from "./components/vue3/setup/Setup.vue";
import Ref from "./components/vue3/responsive/Ref.vue";
import Reactive from "./components/vue3/responsive/Reactive.vue";
import Computed from "./components/vue3/computed/Computed.vue";
import Watch1 from "./components/vue3/watch/Watch1.vue";
import Watch2 from "./components/vue3/watch/Watch2.vue";
import Watch3 from "./components/vue3/watch/Watch3.vue";
import Interfaces from "./components/typescript/Interfaces.vue";
import SelfDefinedHooks from "./components/vue3/lifecycle/SelfDefinedHooks.vue";
import SelfDefinedHooksUsage from "./components/vue3/lifecycle/SelfDefinedHooksUsage.vue";
import Router from "./components/vue3/route/Router.vue";

</script>

<style scoped>
.outer {
  background-color: skyblue;
  display: flex;
}

div {
  background-color: greenyellow;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
