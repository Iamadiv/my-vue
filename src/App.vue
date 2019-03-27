<template>
  <div id="app">
    <home>dsgfsdg</home>
  </div>
</template>

<script>
import home from "./components/homePage/home";
export default {
  name: "App",
  components: {
    home
  }
};
</script>

<style >
html,
body {
  height: 100%;
}
body {
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #fff;
  height: 100%;
  min-width: 1100px;
}
</style>
