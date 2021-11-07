<template>
    <v-container>
        <v-row>
            <v-text-field
             outlined
             v-model="password"
             placeholder="パスワード"></v-text-field>
             <v-btn class="ml-4 my-1" @click="Login">ログイン</v-btn>
        </v-row>
    </v-container>
</template>

<script lang="ts" src="./Login.ts" />