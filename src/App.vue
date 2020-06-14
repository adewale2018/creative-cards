<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWasChanged="currentPage=$event"></nav-header>
        <transition name="fade-enter">
          <keep-alive>
            <component :is="currentPage"></component>
          </keep-alive>
        </transition>
        <cc-footer>
          <p class="text-center" slot="app-name">&copy; {{ appName }}</p>
          <nav>
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Contact Us</a>
              </li>
            </ul>
          </nav>
        </cc-footer>
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
import Footer from "./components/Footer";

export default {
  data: function() {
    return {
      currentPage: "cardFront",
      appName: "Creative Cards..."
    };
  },
  components: {
    navHeader: Header,
    cardFront: CardFront,
    CardInsideLeft: CardInsideLeft,
    CardInsideRight: CardInsideRight,
    CardBack: CardBack,
    ccFooter: Footer
  }
};
</script>

<style>
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #333;
}
a {
  cursor: pointer;
}
h1 {
  margin-top: 10px;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>
