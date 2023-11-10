import { TodoStatus, type Todo } from '@/types'
import { computed } from '@vue/reactivity'
import { reactive } from 'vue'

export interface TodoStore {
  [TodoStatus.Pending]: Todo[]
  [TodoStatus.inProgress]: Todo[]
  [TodoStatus.Completed]: Todo[]
}

const defaultVal = {
  [TodoStatus.Pending]: [
    {
      id: 1,
      title: 'Learn Vue',
      description: 'Watch videos',
      status: TodoStatus.Pending
    }
  ],
  [TodoStatus.inProgress]: [],
  [TodoStatus.Completed]: []
}

const todoStore = reactive<TodoStore>(defaultVal)

export default () => {
  const getTodosByStatus = (todoStatus: TodoStatus) => {
    return computed(() => todoStore[todoStatus])
  }

  const addNewTodo = (todo: Todo) => {
    todoStore[todo.status].push(todo)
  }

  const updateTodo = (todo: Todo, newStatus: TodoStatus) => {
    todo.status = newStatus
  }

  const removeTodo = (todo: Todo) => {
    todoStore[todo.status] = todoStore[todo.status].filter((todo) => todo.id !== todo.id)
  }

  return { getTodosByStatus, addNewTodo, removeTodo, updateTodo }
}
