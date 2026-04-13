// server/api/hello.ts
export default defineEventHandler((event) => {
  // 这里就是后端逻辑了！你可以查询数据库、调用其他接口等
  return {
    message: '你好！这是从 Nuxt 后端服务器返回的数据',
    time: new Date().toLocaleTimeString(),
    status: 'success'
  }
})