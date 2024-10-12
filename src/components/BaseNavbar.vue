<template>
  <v-navigation-drawer v-model="drawer">
    <v-list item-props :items="items" nav />

    <v-list v-model:opened="open">
      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account-outline" title="Users" />
        </template>
        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" independ="1" prepend-icon="mdi-wrench-outline" title="Actions" />
          </template>
          <v-list-item v-for="([title, icon], i) in cruds" :key="i" :prepend-icon="icon" :title="title"
            :value="title" />
        </v-list-group>
      </v-list-group>
    </v-list>

    <template #append>
      <v-list nav>
        <v-list-item class="ma-2" link nav to="/setting" prepend-icon="mdi-cog-outline" title="Settings" append />
      </v-list>
    </template>
  </v-navigation-drawer>

  <v-app-bar border="b" class="ps-4" flat>
    <v-app-bar-nav-icon v-if="$vuetify.display.mdAndDown" @click="drawer = !drawer" />

    <v-app-bar-title>Application</v-app-bar-title>

    <template #append>
      <v-btn class="text-none me-2" height="48" icon slim>
        <v-avatar color="surface-light" image="/avatar2.jpg" size="32" />

        <v-menu activator="parent">
          <v-list density="compact" nav>
            <v-list-item append-icon="mdi-cog-outline" link to="/setting" title="Settings" />
            <v-list-item append-icon="mdi-logout" link title="Logout" />
          </v-list>
        </v-menu>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(true)

const items = ref([
  { type: 'header', title: 'Home' },
  { type: 'divider' },
  {
    title: 'Dashboard',
    prependIcon: 'mdi-view-dashboard-outline',
    link: true,
    to: "dashboard",
  },
  {
    title: 'About',
    prependIcon: 'mdi-account-group',
    link: true,
    to: "about"
  },
  {
    title: 'Projects',
    prependIcon: 'mdi-briefcase-outline',
    link: true,
    to: "todo"
  },
  {
    title: 'Calendar',
    prependIcon: 'mdi-calendar',
    link: true,
    to: "calender"
  },
  {
    title: 'Reports',
    prependIcon: 'mdi-file-chart-outline',
    link: true,
    to: "reports"
  },
  {
    title: 'Settings',
    prependIcon: 'mdi-cog-outline',
    link: true,
    to: "setting"
  },
]);

const open = ref(["Users"])
const cruds = ref([
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete'],
]);
</script>

<style scoped lang="scss">
.v-list-group__items {
  .v-list-item {
    padding-left: 2rem !important;
  }
  .v-list-group__items .v-list-item {
    padding-left: 4rem !important;
  }
}
</style>