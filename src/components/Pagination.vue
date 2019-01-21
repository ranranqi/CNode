<template>
  <div class="pagination">
    <button @click="changeBtn">首页</button>
    <button @click="changeBtn">上一页</button>
    <button v-if="jduge">......</button>
    <button v-for="btn in pagebtn" :class="[{currentPage:btn == currentpage},'pagebtn']" @click="changeBtn(btn)">{{btn}}</button>
    <button @click="changeBtn">下一页</button>
  </div>
</template>

<script>
 import $ from 'jquery'
export default {
  name: "Pagination",
  data(){
      return {
          currentpage:1,
          pagebtn:[1,2,3,4,5,'......'],
          jduge:false
      }
  },
  methods:{
      changeBtn(page){
          if(typeof page != 'number'){
              switch(page.target.innerText){
                  case '上一页':
                    $('button.currentPage').prev().click();
                    break;
                  case '下一页':
                    $('button.currentPage').next().click();
                    break;
                  case '首页':
                    this.pagebtn = [1,2,3,4,5,'......']
                    this.changeBtn(1)
                    break;
                  default:
                    break;
              }
              return
          }
          this.currentpage = page

          if(page > 4){
              this.jduge = true
          }else{
              this.jduge = false
          }
          
          if(page == this.pagebtn[4]){
              this.pagebtn.shift()  //移除数组第一个元素
              this.pagebtn.splice(4,0,this.pagebtn[3]+1)  //往数组后添加一个数
          }else if(page == this.pagebtn[0] && page != 1){
              //现在的一个位置加一个数
              this.pagebtn.unshift(this.pagebtn[0]-1)
              //移除最后一个数字
              this.pagebtn.splice(5,1)
          }
      }
  }
};
</script>

<style scoped>
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  /*box-shadow: 0px 2px 9px #888888;*/
  border: 1px solid #888888;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
}

.pagebtn {
  position: relative;
  bottom: 1px;
  width: 40px;
  margin: 0 4px;
}

.currentPage {
  color: white;
  background-color: #1f1b1b;
}
</style>


