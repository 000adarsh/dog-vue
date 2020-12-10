<template>
  <div class="align-center">
    <v-list>
      <v-list-item
        v-for="(item, index) in $store.getters.getDogList"
        :key="index"
      >
        <v-list-item-title>{{ index + 1 }}. {{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  methods: {
    dogfetch() {
      if (!this.$store.getters.getDogList) {
        this.$store.dispatch("dogFetchAction");
      }
    }
  },
  mounted() {
    this.dogfetch();
  }
};
</script>
