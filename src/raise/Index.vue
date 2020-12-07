<template>
  <div>
    <Heador></Heador>
    <Mslider></Mslider>
    <Daily></Daily>
    <In></In>
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
export default {
  components: {
    Heador,
    NavBar,
    Footer,
    Mslider,
    Daily,
    In,
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