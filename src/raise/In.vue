<template>
  <Panel title="In货推荐" :class="$style.panel">
    <section class="$style.content">
      <div :class="$style.item">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200"
          alt=""
        />
        <section :class="$style.list">
          <div :class="$style.product">
            <img
              src="https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg"
              alt=""
            />
            <p>双响炮蓝牙音箱</p>
            <p><em>29.00</em>起</p>
            <article class="">
              <div class="wrapper">
                <div class="inner"></div>
              </div>
              <p>172%</p>
            </article>
          </div>
          <div :class="$style.product"></div>
        </section>
      </div>
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
.panel {
  @include panel;
  .content {
    @include flex;
    .item {
      .list {
        @include flex(row);
      }
    }
  }
}
</style>