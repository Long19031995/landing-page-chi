<template>
  <div class="app">
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