<template lang="pug">
  aside.container-fluid
    b-row#nav-brand(no-gutters)
      router-link#title(:to="{ name: 'HomePage'}")
        b(@click="switchTheme") Book Club.
    b-row#nav(align-v="center" no-gutters)
      b-col
        b-nav(vertical)
          b-nav-item(:to="{ name: 'HomePage'}" exact) Home
          b-nav-item(:to="{ name: 'Books'}") Books
          b-nav-item(:to="{ name: 'Members'}") Members
          b-nav-item(:to="{ name: 'About'}") About
          //- b-nav-item(:to="{ name: 'Test'}") Test
</template>

<script>
export default {
  methods: {
    switchTheme() {
      let body = $(document.body);
      if (!body.hasClass("outrun")) {
        body.addClass("outrun");
      } else {
        body.removeClass("outrun");
      }
    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Comfortaa");
#title {
  top: 0px;
  left: -50px;
  font-family: "Comfortaa", cursive;
  font-size: 18px;
  padding: 25px;
  color: rgb(255, 255, 255);
  position: absolute;
  width: 200px;
}

#nav-brand {
  position: absolute;
}

#nav {
  height: 100%;
}

#nav a.active {
  border-left: 3px solid var(--accent);
}

a {
  padding: 0px;
  padding-left: 10px;
  margin: 10px;
}

#nav-brand a:hover {
  text-decoration: none;
}

aside {
  height: 100%;
  border-right: 1px solid #cbc9f6;
}
</style>
