<template>
  <v-container>
    <v-row class="mb-6">
      <v-col>
        <p>Header</p>
      </v-col>
      <v-col class="text-right" v-if="selectedPage === 'Home'">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Header.ts"></script>