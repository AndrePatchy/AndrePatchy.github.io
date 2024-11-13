<template>
  <div class="headerDivision">
    <header>
      <img src="../assets/p.png" class="responsive1">
      <p>
      Developer / Data Engineer
      <br>
      <br>
      <strong>Around Portugal, Portugal</strong>
      <br>
      <br>
      <br>
      <br>
      <br>
      <img src="../assets/dre1.png" class="responsive2">
      </p>
      <nav>
        <h2>Sections:</h2>
        <a href="#about-me">About Myself</a> |
        <a href="#projects"> Projects</a>
        <h2>External Links:</h2>
        <a href="https://www.github.com/AndrePatchy" target="_blank">GitHub</a> |
        <a href="https://www.linkedin.com/in/andrepsoliveira/" target="_blank">LinkedIn</a>
      </nav>
  </header>
</div>
</template>
<script>
export default {
  name: 'firstNav'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headerDivision {
  text-align: center;
  margin-top: 100px;
}
.responsive1 {
  width: 100%;
  height: auto;
  width: 50%;
  margin-top: -50px;
}
.responsive2 {
  width: 100%;
  height: auto;
  width: 60%;
}
a:link,
a:visited,
a:hover,
a:active {
  color:black;
}
</style>
