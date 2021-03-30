<template>
<div id="page-container"></div>
  <h1>Code Executor</h1>
  <CodeSection/>
  <a-button type="primary">Button</a-button>
</template>

<script>
import CodeSection from "./components/CodeSection"

export default {
  name: 'App',
  components: {
    CodeSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#page-container{
  max-width: 1440px;
}
</style>
