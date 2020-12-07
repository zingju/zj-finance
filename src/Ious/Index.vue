<template>
  <div>
    <Heador></Heador>
    <Mslider></Mslider>
    <Welfare></Welfare>
    <Service></Service>
    <NavBar></NavBar>
    <Footer></Footer>
  </div>
</template>

<script>
import Heador from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Mslider from "./ISlider";
import Welfare from "./Welfare";
import Service from "./Service";
export default {
  components: {
    Heador,
    NavBar,
    Footer,
    Mslider,
    Welfare,
    Service,
  },
};
</script>