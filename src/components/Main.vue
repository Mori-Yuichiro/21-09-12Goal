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
        <v-btn class="mx-4 my-1" color="success" @click="addTodo">登録</v-btn>
      </v-row>
      
      <ul v-for="(todo, index) in todoList" :key="index+1">
        <li>{{ todo }}</li>
        <v-btn @click="remove(index)">削除</v-btn>
      </ul>
    </div>
  </v-container>
</template>

<script lang="ts" src="./Main.ts" />

<style>
  .v-image {
    height: 200px;
  }
</style>