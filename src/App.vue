<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWasChanged="currentPage=$event"></nav-header>
        <keep-alive>
          <component :is="currentPage"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import CardFront from "./components/card/cardFront";
import CardInsideLeft from "./components/card/cardInsideLeft";
import CardInsideRight from "./components/card/cardInsideRight";
import CardBack from "./components/card/cardBack";

export default {
  data: function() {
    return {
      currentPage: "cardFront"
    };
  },
  components: {
    navHeader: Header,
    cardFront: CardFront,
    CardInsideLeft: CardInsideLeft,
    CardInsideRight: CardInsideRight,
    CardBack: CardBack
  }
};
</script>

<style>
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #333;
}
h1 {
  margin-top: 10px;
}
</style>
