<template>
  <v-container>
    <!-- <div>
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
      </v-row> -->
      <!-- Modal -->
      <!-- <ModalDialog v-if="modal" /> -->
      
      <!-- <ul v-for="(todo, index) in todoList" :key="index+1">
        <li>{{ todo }}</li>
        <v-btn @click="remove(index)">削除</v-btn>
      </ul>
    </div> -->

    <v-row>
      <div id="overlay">
        <div id="content">
          <h3>リストに追加しても良いですか</h3>
            <h2>登録内容 : {{ todo }}</h2>
            <v-col>
              <v-btn class="mx-3" color="red" @click="close">cancel</v-btn>
                <v-btn class="mx-3" color="success" @click="add">OK</v-btn>
            </v-col>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Main.ts" />

<style src="../style/Main.css"></style>