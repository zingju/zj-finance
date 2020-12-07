<template>
  <div>
    <Heador></Heador>
    <Hslider></Hslider>
    <Novice></Novice>
    <Loan></Loan>
    <Money></Money>
    <Product></Product>
    <Left></Left>
    <Footer></Footer>
    <NavBar></NavBar>
  </div>
</template>

<script>
import Heador from "./Header";
import Hslider from "./Hslider";
import Novice from "./Novice";
import Loan from "./Loan";
import Money from "./Money";
import Product from "./Product";
import Left from "./Left";
import Footer from "./Footer";
import NavBar from "./Navbar";
export default {
  components: {
    Heador,
    Hslider,
    Novice,
    Loan,
    Money,
    Product,
    Left,
    Footer,
    NavBar,
  },
};
</script>