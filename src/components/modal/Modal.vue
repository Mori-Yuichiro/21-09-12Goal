<template>
  <v-container>
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

<script lang="ts" src="./Modal.ts" />

<style src="../../style/Modal.css"></style>