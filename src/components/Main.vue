<template>
  <v-container>
    <div>
      <v-img src="../assets/073Kazuki17103_TP_V.png" alt="星空"></v-img>
    </div>
    <div class="mb-6">Todoリスト Vue+TypeScript</div>

    <div class="app">
      <v-row>
        <v-text-field
          outlined
          v-model="todo"
        ></v-text-field>
        <v-btn class="mx-4 my-1" color="success" @click="openDialog">登録</v-btn>
      </v-row>
      <!-- Modal -->
      <div id="overlay" v-if="modal">
        <div id="content">
          <h1>リストに追加しても良いですか</h1>
          <v-btn @click="closeDialog">OK</v-btn>
        </div>
      </div>
      
      <ul v-for="(todo, index) in todoList" :key="index+1">
        <li>{{ todo }}</li>
        <v-btn @click="remove(index)">削除</v-btn>
      </ul>
    </div>
  </v-container>
</template>

<script lang="ts" src="./Main.ts" />

<style src="../style/Main.css"></style>