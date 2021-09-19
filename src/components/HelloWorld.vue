<template>
  <v-container>
    <div>
      <v-img src="../assets/073Kazuki17103_TP_V.png" alt="星空"></v-img>
    </div>
    <div class="mb-6">Todoリスト Vue+TypeScript</div>

    <div>
      <v-row>
        <v-text-field
          outlined
          v-model="todo"
        ></v-text-field>
        <v-btn class="mx-4 my-1" @click="addTodo">登録</v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts" src="./HelloWorld.ts" />

<style>
  .v-image {
    height: 200px;
  }
</style>