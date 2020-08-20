<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Raleway";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  scroll-behavior: smooth;
}
input[type="text"]{
	border:none;
}
input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus {
  border: 1px solid #2a4365;
  transition: border 1s;
  border-radius: 5px;
}
textarea:focus {
  border: 1px solid #2a4365;
  transition: border 1s;
  border-radius: 5px;
}
</style>
