<template lang="pug">
  b-container.member-card.soft-shadow.blue-to-purp-background(no-gutters)
    b-row.member-card-row(align-v="center")
      b-col.member-card-face-col(cols="4")
        b-img(v-bind:src="member.Face" width="50px" height="50px" rounded="circle" blank-color="red" center)
      b-col
        b-row.member-name {{ member.FirstName + ' '  + member.LastName }}
        b-row.member-username {{  member.Username }}
</template>

<script>
export default {
  props: ["member"]
};
</script>

<style scoped>
div.member-card {
  border-radius: 10px;
  min-height: 100px;
  height: 100px;
}

.member-name {
  color: white;
  text-shadow: 2px 2px 5px rgba(150, 150, 150, 0.5);
}

body.outrun .member-username {
  color: var(--secondary2);
}
.member-username {
  color: var(--purp);
  text-shadow: 2px 2px 5px rgba(150, 150, 150, 0.5);
  font-size: 13px;
}

.member-card-row {
  height: 100%;
}

img {
  object-fit: cover;
  border: 1px solid var(--primary2);
  opacity: 0.9;
}
</style>
