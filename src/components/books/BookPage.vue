<template lang="pug">
  b-container#book-info-container.soft-shadow.blue-to-purp-background
    b-row
      b-col(cols="3")
        b-container
          b-row
            b-col.book-image
              book-card(:book="book")


      b-col
        b-container
          b-row.book-title
            h4
              a(v-bind:href="book.GoodreadsLink") {{ book.Title }}
          b-row.book-author
            h6 {{ 'by ' + book.Author }}
          b-row {{ book.Description }}
          b-row Published {{ book.Published }}
          b-row {{ book.Pages}} pages
</template>

<script>
import BookService from "@/modules/BookStore.js";
import BookCard from "@/components/books/BookCard.vue";
export default {
  data() {
    return {
      book: null
    };
  },
  methods: {
    loadBook(isbn) {
      let book = BookService.getBook(isbn);
      if (book) this.book = book;
    }
  },
  components: {
    "book-card": BookCard
  },
  watch: {
    $route(to, from) {
      this.loadBook(this.$route.params.isbn);
    }
  },
  created() {
    this.loadBook(this.$route.params.isbn);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Comfortaa");
#book-info-container{
  border: 1px solid var(--primary);
  border-radius: 10px;
  padding: 20px;
}

.book-title {
  text-decoration: bold;
  text-shadow: 2px 2px 5px rgb(63, 63, 63);
}

.book-image {
  margin-bottom: 10px;
}
</style>
