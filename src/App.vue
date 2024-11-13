<script>
import footerComponent from './components/footerComponent.vue'
import firstNav from './components/headerComponent.vue'
import SectionContentWrapper from './components/sectionsComponent.vue'
export default {
  name: 'App',
  components: {
    firstNav,
    SectionContentWrapper,
    footerComponent
  }
}
</script>
<template>
  <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'>
  <firstNav />
  <SectionContentWrapper />
  <footerComponent />
</template>
<style>
html {
  scroll-behavior: smooth;
}
body {
  background-color: rgba(245, 222, 157, 0.347);
  font-family: 'Rubik';
  font-size: 15px
}
div label span {
  border: 0px;
  margin: 0px;
  padding: 0px;
  vertical-align: baseline;
}
section {
  display: block;
}
*, *:before, *:after {
  box-sizing: border-box;
}
footer {
  background: #3C3B39;
  margin-top: 70px;
  text-align: center;
}
.responsive {
  width: 100%;
  height: auto;
}
</style>
