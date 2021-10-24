<template>
  <v-app>
    <Header />
    <v-main>
      <template>
        <v-container>
          <div>
            <v-img src="./assets/073Kazuki17103_TP_V.png" alt="星空"></v-img>
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
            <Main v-if="modal" :todo="todo" @close="closeDialog()" @add="addTodo()"/>
            
            <v-row>
              <ul class="todo-list my-3 mx-8" v-for="(todo, index) in todoList" :key="index+1">
                  <v-col cols="10">
                    <v-card>
                      <li>
                        <p class="todo">{{ todo }}</p>
                      </li>
                      <v-card-actions>
                        <v-btn @click="remove(index)">削除</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </ul>
            </v-row>
          </div>
        </v-container>
      </template>
    </v-main>
  </v-app> 
</template>

<script lang="ts" src="./App.ts"></script>

<style src="./style/App.css"></style>
