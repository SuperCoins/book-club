<template lang="pug">
  div#app
    b-container#main-container
      b-row#main-row(no-gutters)
        b-col(cols="1")
          sidebar
        b-col(align-self="center")
          router-view
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    sidebar: Sidebar
  },
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
:root {
  --primary: #ccaaee;
  --primary2: #ccbbee;
  --secondary: #ccccee;
  --secondary2: #ccddee;
  --accent: #ccffee;
  --accent2: #cceeee;
  --purp: #b48fd0;
}

body,
html,
#app,
#main-container,
#main-row {
  height: 100%;
}

body.outrun {
  background-image: url("./assets/background.jpg");
}
body {
  font-family: "Roboto", sans-serif;
  color: #ffffffc9;
  background: -webkit-linear-gradient(
    -45deg,
    rgba(215, 230, 255, 1) 0%,
    rgba(243, 219, 246, 1) 50%,
    rgba(240, 220, 247, 1) 55%,
    rgba(217, 227, 255, 1) 100%
  );
}

#main-container {
  max-width: 1440px !important;
}

.soft-shadow {
  box-shadow: 0px 16px 25px 0px rgba(118, 88, 198, 0.1);
}

.blue-to-purp-background {
  background: linear-gradient(to bottom right, #89fffd94, #ef32d950);
}

a {
  color: var(--primary);
}
</style>
