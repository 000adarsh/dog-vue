<template>
  <div>
    <Card :dogProp="$store.getters.getDogList" />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card
  },
  methods: {
    dogListFetch() {
      if (!this.$store.getters.getDogList.length != 0) {
        this.$store.dispatch("dogFetchAction");
      }
    }
  },
  created() {
    this.dogListFetch();
  }
};
</script>
