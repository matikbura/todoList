<script setup>
import {todoListShop} from '../store/shop/todoListShop';
import {ref} from "vue";

const todoList=todoListShop();
const newTodo = ref('');
const addTodo = () => {
  if (newTodo.value.trim() === '') {
    return;
  }
  const filter = todoList.data.filter(item=>item.title===todoList.choose);
  if (filter.length>0){
    filter[0].incompleteList.push(newTodo.value);
  }
  newTodo.value = '';
};
const changeSelect=(select)=>{
  console.log("触发");
  todoList.choose=select;
}
</script>
<template>
  <div class="space-y-3">
    <div class="flex  space-x-5 ">
      <div class="nav">
        <div class="nav_header">{{todoList.choose}}</div>
        <ul class="nav_select">
          <li v-for="(item,index) in todoList.data"><a href="javascript:;" @click="changeSelect(item.title)">{{item.title}}</a></li>
        </ul>
      </div>
      <div>
        <input
            v-model="newTodo"
            class="text-sm  placeholder-stone-500 px-2 placeholder:px-2 duration-300 w-[680px] h-10  focus:border-b-green-500 outline-none"
            type="text" placeholder="为分类新增一个任务吧 。。。"/>
      </div>
    </div>
    <div class="flex flex-row-reverse">
      <button class="px-8 py-2 bg-green-500 text-sm text-white duration-300 drop-shadow hover:drop-shadow-lg" @click="addTodo">新增 +</button>
    </div>
  </div>
</template>


<style scoped>
a {
  text-decoration: none;
  color: #000;
}

.nav {
  position: relative;
  line-height: 40px;
  width: 400px;
  text-align: center;
}

.nav_header,
.nav_select li {
  width: 400px;
  height: 40px;
  background-color: #fff;
  @apply text-sm flex justify-center items-center;
  text-align: center;

}

.nav_select {
  position: absolute;
  top: 40px;
  height: 0;
  overflow: hidden;
  transition: all .5s;
}

.nav_select li {
  @apply border-t-2 text-sm flex justify-center duration-300 items-center hover:bg-blue-500;

}

.nav_header:hover {

}

.nav_header:hover + .nav_select,
.nav_select:hover {
  height: auto;
  z-index: 200;
}
</style>