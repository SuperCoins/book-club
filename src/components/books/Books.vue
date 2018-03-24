<template lang="pug">
  b-container
    b-row
      b-col(v-for="book in books" v-bind:key="book.ISBN")
        router-link(:to="`/books/${book.ISBN}`")
          book-card(:book="book")
</template>

<script>
import BookStore from "@/modules/BookStore.js";
import BookCard from "@/components/books/BookCard.vue";
export default {
  components: {
    "book-card": BookCard
  },
  data() {
    return {
      books: []
    };
  },
  created() {
    this.books = BookStore.getAllBooks();
  }
};
</script>
