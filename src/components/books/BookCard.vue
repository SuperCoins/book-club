<template lang="pug">
  b-img.soft-shadow(v-if="book" v-bind:src="book.Cover" fluid center)
</template>

<script>
export default {
  props: ["book"]
};
</script>

<style scoped>
img {
  max-width: 150px;
}
</style>
