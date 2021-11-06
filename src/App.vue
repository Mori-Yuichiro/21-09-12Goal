<template>
  <v-app>
    <Header />
    <v-main>
      <Register @changePage='showPageNumber' v-if="selectedPage === 'Register'" />
      <Home v-if="selectedPage === 'Home'" />
    </v-main>
  </v-app> 
</template>

<script lang="ts" src="./App.ts"></script>

<style src="./style/App.css"></style>
