<template>
  <div class="app bg-grey">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: { Header, Body, Footer }
}
</script>

<style lang="scss">
.app {
  background-image: url(assets/image/background.png);
}
</style>
