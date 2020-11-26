<template>
  <div>
    <Heador></Heador>
    <Hslider></Hslider>
    <Novice></Novice>
    <Loan></Loan>
    <Money></Money>
  </div>
</template>

<script>
import Heador from "./Header";
import Hslider from "./Hslider";
import Novice from "./Novice";
import Loan from "./Loan";
import Money from "./Money";
export default {
  components: {
    Heador,
    Hslider,
    Novice,
    Loan,
    Money,
  },
};
</script>