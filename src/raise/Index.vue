<template>
  <div>
    <Heador></Heador>
    <Mslider></Mslider>
    <Daily></Daily>
    <In></In>
    <More></More>
    <NavBar></NavBar>
    <Footer cname="mfooter"></Footer>
  </div>
</template>

<script>
import Heador from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Mslider from "./Rslider";
import Daily from "./Daily";
import In from "./In";
import More from "./More";
export default {
  components: {
    Heador,
    NavBar,
    Footer,
    Mslider,
    Daily,
    In,
    More,
  },
};
</script>
<style lang="scss">
.mfooter {
  margin-top: 0 !important;
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>