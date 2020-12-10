<template>
  <v-card class="mx-auto my-4" max-width="400">
    <v-img
      class="white--text align-end"
      height="max"
      weight="max"
      contain
      :src="$store.getters.getDogImage"
    >
    </v-img>
    <div class="apple">
      <v-card-text>
        <v-select
          v-model="breed"
          :items="dogProp"
          label="Dog Variety"
          outlined
        ></v-select>
      </v-card-text>
    </div>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="imageFetch" color="primary">
        Search
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      breed: "affenpinscher",
    };
  },
  props: {
    dogProp: Array,
  },
  methods: {
    imageFetch() {
      this.$store.dispatch("dogImageFetch", this.breed);
    },
  },
  computed: {
    dogListLen() {
      return this.$store.getters.getDogList.length;
    },
  },
  watch: {
    dogListLen() {
      if (this.dogListLen != 0) {
        this.breed = this.$store.getters.getDogList[
          parseInt(Math.random() * this.$store.getters.getDogList.length)
        ];
      }
      this.imageFetch();
    },
  },
};
</script>

<style scoped>
.apple {
  margin-bottom: -7%;
}
</style>
