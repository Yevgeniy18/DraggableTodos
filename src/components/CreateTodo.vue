<script setup lang="ts">
import { TodoStatus, type Todo } from '@/types'
import { reactive, ref } from 'vue'
import useTodo from "@/store/useTodos"

export interface Props {
  status: TodoStatus
}

const {addNewTodo} = useTodo()

const props = defineProps<Props>()
const displayFrom = ref(false)
const newTodo = reactive<Omit<Todo, 'id'>>({
  title: '',
  description: '',
  status: props.status
})

const handleSumbit = () => {

    addNewTodo({
        id:Math.random() *1000000000,
        ...newTodo
    })
    resetForm()
}

const resetForm = () => {
  displayFrom.value = false
  newTodo.title = ''
  newTodo.description = ''
}
</script>

<template>
  <form @submit.prevent="handleSumbit">
    <h3 v-if="!displayFrom" @click="displayFrom = !displayFrom">Add new</h3>
    <template v-else>
      <div>
        <input type="text" placeholder="Title" v-model="newTodo.title" />
      </div>
      <div>
        <textarea type="text" placeholder="Description" v-model="newTodo.description" />
      </div>

      <button type="submit">Submit</button>

      <button type="button" @click="resetForm">Cancel</button>
    </template>
  </form>
</template>
