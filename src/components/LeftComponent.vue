<script setup>
import {todoListShop} from '../store/shop/todoListShop';
import {computed, ref} from "vue";
import {Icon} from '@iconify/vue';
const todoList = todoListShop();
const newCategory = ref('');
const addCategory = () => {
  if (newCategory.value.trim() === '') {
    return;
  }
  todoList.data.push({
    title: newCategory.value,
    completeList: [],
    incompleteList: []
  });
  newCategory.value = '';
};
const comppleteNum = computed({
  get() {
    const filter = todoList.data.filter(item => item.title === todoList.choose);
    if (filter.length > 0) {
      return filter[0].completeList.length;
    }
  }
});
const incompleteNum = computed({
  get() {
    const filter = todoList.data.filter(item => item.title === todoList.choose);
    if (filter.length > 0) {
      return filter[0].incompleteList.length;
    }
  }
});
const deleteCategory = (item) => {
  const filter = todoList.data.filter(item => item.title === todoList.choose);
  if (filter.length > 0) {
    const index = todoList.data.indexOf(item);
    if (index > -1) {
      todoList.data.splice(index, 1);
      if (todoList.choose === item.title) {
        todoList.choose = '';
      }
    }
  }
};
</script>
<template>
  <div class="space-y-6">
    <div class="flex flex-row-reverse px-4">
      <div class="flex flex-col ">
        <button class="px-8 py-2 bg-green-500 text-sm text-white drop-shadow hover:drop-shadow-lg"
                @click="todoList.checked='已完成'">
          已完成({{ comppleteNum }})
        </button>
        <button class="px-8 py-2 bg-blue-500 text-sm text-white mt-2 drop-shadow hover:drop-shadow-lg"
                @click="todoList.checked='未完成'">
          待完成({{ incompleteNum }})
        </button>
      </div>
    </div>
    <div class="w-96">
      <ul class="border px-4 bg-white drop-shadow">
        <li class="border-b-2 py-2 text-cyan-400 text-sm flex justify-between" v-for="(item,index) in todoList.data">
                  <span>
                    {{ item.title }}
                  </span>
          <div class="flex space-x-3">
            <button class="duration-300 text-orange-500 hover:text-red-500" @click="deleteCategory(item)">
              <Icon icon="ep:delete-filled"/>
            </button>
                  <div>
                    {{ item.incompleteList.length+item.completeList.length }}
                  </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <div class="flex flex-col">
        <input
            v-model="newCategory"
            class="text-sm  placeholder-stone-500 px-2 placeholder:px-2 duration-300 w-[380px] h-10  focus:border-b-green-500 outline-none"
            type="text" placeholder="添加一个分类"/>
        <div class="flex flex-row-reverse">
          <button class="px-8 py-2 bg-blue-500 text-sm text-white mt-2 drop-shadow hover:drop-shadow-lg"
                  @click="addCategory">
            确认添加
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>