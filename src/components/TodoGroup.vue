<script setup lang="ts">
import Draggable from 'vuedraggable'
import CreateTodo from './CreateTodo.vue'
import { TodoStatus, type Todo } from '@/types'
import useTodos from '@/store/useTodos'

export interface Props {
  status: TodoStatus
}

const props = defineProps<Props>()

const { getTodosByStatus, removeTodo, updateTodo } = useTodos()
const todoList = getTodosByStatus(props.status)

const groupLabel = {
  [TodoStatus.Pending]: 'Pending',
  [TodoStatus.inProgress]: 'In Progress',
  [TodoStatus.Completed]: 'Completed'
}

const onDragChange = (payload: any) => {
  if (payload?.added?.element) {
    updateTodo(payload?.added?.element, props.status)
  }
}
</script>

<template>
  <div class="todo__item">
    <h3>{{ groupLabel[props.status] }}</h3>

    <Draggable class="draggable" :list="todoList" group="todos" itemKey="id" @change="onDragChange">
      <template #item="{ element: todo }">
        <li>
          {{ todo.title }}
          {{ todo.status }}

          <div>
            <span class="todo__description">
              {{ todo.description }}
            </span>
          </div>
          <span class="remove__todo" @click="removeTodo(todo)">x</span>
        </li>
      </template>
    </Draggable>

    <CreateTodo :status="props.status" />
  </div>
</template>

<style scoped>
.todo__item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 3rem;
  background-color: rgb(56, 80, 103);
  padding: 15px;
  border-radius: 4px;
  width: 300px;
}

.todo__item ul {
  padding: 0px;
  margin-top: 1rem;
}

.todo__item li {
  list-style: none;
  background-color: white;
  color: rgb(56, 80, 103);
  padding: 5px 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  position: relative;
}

.remove__todo {
  position: absolute;
  right: 10px;
  top: 2px;
  padding: 5px;
  cursor: pointer;
}
.draggable {
  min-height: 200px;
}
</style>
