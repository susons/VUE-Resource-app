<template>
  <ul>
    <Resource
      v-for="{ id, title, description, link } in resources"
      :key="id"
      :title="title"
      :description="description"
      :link="link"
      :id="id"
    />
  </ul>
</template>

<script>
import Resource from './Resource.vue';

export default {
  inject: ['resources'],
  components: {
    Resource,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
