<template>
  <div>
    <header style="padding: 1rem; background-color: #00DC82; color: white;">
      <nav>
        <NuxtLink to="/" style="margin-right: 1rem; color: white; text-decoration: none; font-weight: bold;">首页</NuxtLink>
        <NuxtLink to="/about" style="color: white; text-decoration: none; font-weight: bold;">关于</NuxtLink>
      </nav>
    </header>
    
    <main style="padding: 2rem; max-width: 800px; margin: 0 auto;">
      <slot />
    </main>
  </div>
</template>