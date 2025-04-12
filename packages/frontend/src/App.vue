<script setup>
import User from '@/views/user/index.vue'
import { sayHello } from '@lx-crm/shared/utils'
sayHello()
</script>

<template>
  <div class="page">
    <User></User>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  height: 100%;
}
</style>
