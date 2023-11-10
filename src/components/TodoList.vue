<script setup lang="ts">
import TodoGroup from "./TodoGroup.vue"
import { TodoStatus } from "@/types";
</script>

<template>
    <div class="todo__container">
        <TodoGroup :status="TodoStatus.Pending"/>
        <TodoGroup :status="TodoStatus.inProgress"/>
        <TodoGroup :status="TodoStatus.Completed"/>
    </div>
</template>

<style scoped>

.todo__container{
    display: flex;
}
</style>