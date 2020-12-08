<template>
  <Panel title="下载APP" :class="$style.panel">
    <section :class="$style.content">
      <div>下载APP</div>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/Panel";
export default {
  components: {
    Panel,
  },
};
</script>

<style lang="scss" module>
@import "../css/element.scss";
html,
body {
  background: #fff;
}
.panel {
  @include panel;
  margin: 0 !important;
  h4 {
    display: none;
  }
}
</style>