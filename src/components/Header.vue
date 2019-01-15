<template>
  <div class="header">
    <img src="../assets/cnodejs_light.svg" alt="#">
    <ul>
      <li><a href="">首页</a></li>
      <li><a href="">新手入门</a></li>
      <li><a href="">API</a></li>
      <li><a href="">关于</a></li>
      <li><a href="">注册</a></li>
      <li><a href="">登录</a></li>
    </ul>
  </div>  
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  background-color: #444;
  height: 50px;
}
img{
  max-width: 120px;
  margin-left: 70px;
  margin-top: 10px;
}
ul{
  list-style: none;
  float: right;
  margin-right: 92px;
}
li{
  display: inline-block;
  padding: 12px 12px;
}
a{
  text-decoration: none;
  color: #ccc;
  font-size: 13px;
}
</style>
