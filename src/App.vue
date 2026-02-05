<template>
  <div>
    <Header title="Jobs List" />
    <TheResources />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import TheResources from './components/resources/TheResources.vue';

export default {
  components: {
    Header,
    TheResources,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
