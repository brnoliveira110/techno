<template>
  <div id="app">
    <Header />
    <router-view class="container"></router-view>
  </div>
</template>

<style>
body {
  margin: 0px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

.logo a {
  font-size: 1.2rem;
  color: white !important;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
