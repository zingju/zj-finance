<template>
  <div>
    <Panel title="极速借贷" :class="$style.panel"></Panel>
    <section :class="$style.content">
      <router-link :to="{ name: 'home1' }">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280 "
          alt="111"
        />
      </router-link>
    </section>
  </div>
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
.panel {
  @include panel;
  .content {
    padding-bottom: 40px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>