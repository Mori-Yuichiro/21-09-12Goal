<template>
    <v-container>
        <v-row>
            <v-text-field
             outlined
             v-model="password"></v-text-field>
             <v-btn class="ml-4 my-1" @click="setPassword">登録</v-btn>
        </v-row>
    </v-container>
</template>

<script lang="ts" src="./Register.ts" />