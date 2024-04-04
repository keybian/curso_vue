<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="My Movies Rantings"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Rate Movie"></v-list-item>
        <v-list-item title="Add Movie"></v-list-item>
        <v-list-item title="Edit Movie"></v-list-item>
        <v-list-item title="Delete Movie"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>
<script setup>
  //
</script>
