<template>
<footer>
  <div class="link-bar">
    <a href="https://www.github.com/AndrePatchy" title="github" target="_blank">
      <img src="../assets/github-65.svg" alt="GitHub Icon">
    </a>
    <a href="https://www.linkedin.com/in/andrepsoliveira/" title="linkedin" target="_blank">
      <img src="../assets/linkedin-124.svg">
    </a>
  </div>
  <div class="footer-content">
    <h2>oandrepedro@gmail.com</h2>
    <h1> 2024 </h1>
  </div>
</footer>
</template>
<script>
export default {
  name: 'footerComponent'
}
</script>
<style scoped lang="scss">
footer .link-bar {
  background: #54524F;
  padding: 8px;
  text-align: center;
}
footer .link-bar a {
  display: inline-block;
}
footer a {
  width: 54px;
  height: 54px;
  color: #C1C0B6;
}
a {
  background-color: transparent;
}
footer h1, footer h2 {
  width: 100%;
  margin: 0px;
  color: #C1C0B6;
}
footer h2 {
  padding: 55px 0px;
  font-size: 20px;
}
footer h1 {
  background: #252423;
  padding: 70px 0px;
  font-size: 41px;
}
</style>
