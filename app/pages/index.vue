<script setup>
// useFetch 会自动请求我们刚才写的后端接口
const { data, pending, error } = await useFetch('/api/hello')
</script>

<template>
  <div>
    <div style="margin-top: 30px; padding: 20px; background-color: #f0fdf4; border: 2px dashed #00DC82; border-radius: 8px;">
      <h2 style="color: #00DC82; margin-top: 0;">🚀 全栈连通测试</h2>
      
      <div v-if="pending">正在请求后端接口...</div>
      <div v-else-if="error">接口请求失败: {{ error.message }}</div>
      
      <div v-else>
        <p><strong>状态:</strong> {{ data.status }}</p>
        <p><strong>来自后端的消息:</strong> {{ data.message }}</p>
        <p><strong>服务器时间:</strong> {{ data.time }}</p>
      </div>
    </div>
  </div>
</template>