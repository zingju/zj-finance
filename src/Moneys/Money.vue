<template>
  <div>
    <Heador></Heador>
    <Mslider></Mslider>
    <Ada></Ada>
    <Mon></Mon>
    <Adb></Adb>
    <Finance></Finance>
    <Adc></Adc>
    <NavBar></NavBar>
    <Footer cname="mfooter"></Footer>
  </div>
</template>

<script>
import Heador from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Mslider from "./Mslider";
import Ada from "./Ada";
import Mon from "./Mon";
import Adb from "./Adb";
import Finance from "./Finance";
import Adc from "./Adc";
export default {
  components: {
    Heador,
    NavBar,
    Footer,
    Mslider,
    Ada,
    Mon,
    Adb,
    Finance,
    Adc,
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