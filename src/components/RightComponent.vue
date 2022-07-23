<script setup>
import {Icon} from '@iconify/vue';
import {todoListShop} from '../store/shop/todoListShop';
import {computed} from "vue";
const todoList=todoListShop();
const showList = computed({
  get(){
    const filter = todoList.data.filter(item=>item.title===todoList.choose);
    if (filter.length>0){
      if (todoList.checked==="未完成"){
        return filter[0].incompleteList;
      }else{
        return filter[0].completeList;
      }
    }
  }
});
const complete=(item)=>{
  const filter = todoList.data.filter(item=>item.title===todoList.choose);
  if (filter.length>0){
    const index = filter[0].incompleteList.indexOf(item);
    if (index>-1){
      filter[0].incompleteList.splice(index,1);
      filter[0].completeList.push(item);
    }
  }
};
const deleteItem=(item)=>{
  const filter = todoList.data.filter(item=>item.title===todoList.choose);
  if (filter.length>0){
    if (todoList.checked==="未完成"){
      const index = filter[0].incompleteList.indexOf(item);
      if (index>-1){
        filter[0].incompleteList.splice(index,1);
      }
    }else{
      const index = filter[0].completeList.indexOf(item);
      if (index>-1){
        filter[0].completeList.splice(index,1);
      }
    }
  }
};
</script>
<template>
    <div class="">
      <div class="text-2xl font-bold mb-2">
        {{todoList.choose}}({{todoList.checked}})
      </div>
      <ul id="showItem" class=" h-[400px] overflow-y-scroll">
        <li class="w-[700px] border p-4 shadow-lg mb-2 text-sm flex justify-between bg-white " v-for="item in showList">
              <span>
                {{item}}
              </span>
          <div class="flex space-x-3 text-cyan-500 text-2xl ">
            <button class="duration-300 hover:text-green-500" @click="complete(item)">
              <Icon icon="el:ok-circle"/>
            </button>
            <button class="duration-300 hover:text-red-500" @click="deleteItem(item)">
              <Icon icon="ep:delete-filled"/>
            </button>
          </div>
        </li>
      </ul>
    </div>
</template>



<style scoped>
#showItem::-webkit-scrollbar{
  width: 4px;
  height: 4px;
}
#showItem::-webkit-scrollbar-thumb{
  @apply bg-amber-500
}
#showItem::-webkit-scrollbar-track{
  background-color:none;
}

</style>