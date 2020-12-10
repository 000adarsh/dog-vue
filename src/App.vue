<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon dark @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title>DOGPHOTOS</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="theme" class="mr-2" icon>
        <v-icon>invert_colors</v-icon>
      </v-btn>
      <router-link to="/" icon>
        <v-icon class="mr-4">home</v-icon>
      </router-link>
      <router-link to="/about" icon>
        <v-icon>info</v-icon>
      </router-link>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      dark
      app
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    >
      <v-list>
        <v-list-item class="mt-10" link>
          <v-list-item-icon>
            <v-icon> home </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{
              this.$vuetify.breakpoint.name
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    theme(data) {
      if (this.$vuetify.theme.isDark == false) {
        this.$vuetify.theme.isDark = true;
        return;
      }
      if (this.$vuetify.theme.isDark == true) {
        this.$vuetify.theme.isDark = false;
      }
      console.log(data);
    }
  }
};
</script>
