<template lang="pug">
  b-container
    b-row.members-row(v-for="i in Math.ceil(members.length / 4)" v-bind:key="i")
      b-col(v-for="member in members.slice((i - 1) * 4, i * 4)" v-bind:key="member.Username")
        member-card(:member="member")
</template>

<script>
import MemberStore from "@/modules/MemberStore.js";
import MemberCard from "@/components/members/MemberCard.vue";
export default {
  components: {
    "member-card": MemberCard
  },
  data() {
    return {
      members: []
    };
  },
  created() {
    this.members = MemberStore.getAllMembers();
  }
};
</script>


<style scoped>
.members-row {
  margin-bottom: 20px;
}
</style>
