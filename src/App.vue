<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #d4ff00;
}

::-webkit-scrollbar {
  width: 20px;
  height: 20px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom,
      #fffb00,
      #FF3474);
  border-radius: 50px;
}

::-webkit-scrollbar-track {
  background: #424242;
}
</style>
