<script setup>
import Login from '@/views/login/index.vue'
import { sayHello } from '@lx-crm/shared/utils'
sayHello()
</script>

<template>
  <div class="page">
    <Login></Login>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  height: 100%;
}
</style>
