<template>
  <div id="app">
    <Header/>
    <div class="main">
      <Postlist/>
    </div>
  </div>
</template>

<script>
 import Header from './components/Header'
 import Postlist from './components/Postlist'
export default {
  name: 'App',
  components:{
    Header,
    Postlist
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.main{
  width: 80%;
  margin: 0 auto;
}
</style>
