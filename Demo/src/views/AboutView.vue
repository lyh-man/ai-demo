<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="testAI()">test</button>
  </div>
</template>

<script>
import http from '@/api/http'
export default {
  methods: {
    async testAI() {
      const res = await http.qianfan.conversation()
      console.log(res.code)
      console.log(res.data)
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
