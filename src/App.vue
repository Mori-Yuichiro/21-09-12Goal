<template>
  <v-app>
    <Header @logout="Logout" :selectedPage="selectedPage" />
    <v-main>
      <Register @changePage='showPageNumber' v-if="selectedPage === 'Register'" />
      <Login @changePage='showPageNumber' v-if="selectedPage === 'Login'" />
      <Home v-if="selectedPage === 'Home'" />
    </v-main>
  </v-app> 
</template>

<script lang="ts" src="./App.ts"></script>

<style src="./style/App.css"></style>
