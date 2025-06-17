<template>
    <q-card flat bordered class="bg-grey-1 q-pa-md" style="border-radius: 12px; min-height: 500px; height: 92vh;">

          <!-- Pesquisar linha -->
          <q-btn
            label="🔍 Pesquisar linha"
            color="primary"
            class="full-width q-mb-md"
            @click="mostrarBusca = !mostrarBusca"
          />
          <q-form onSubmit="error" id="buscar" class="row" style=" top: 5px">
            <q-input
              v-on:keydown.enter="getValue()"
              clearable
              clear-icon="close"
              v-if="mostrarBusca"
              v-model="busca"
              for="linha"
              outlined
              label="Digite o número ou nome da linha"
              dense
              class="q-mb-md"
              style="width: 100vw;"
            >
            <template v-slot:after>
              <q-btn v-if="mostrarBusca" class="q-ml-xs" flat round icon="search" @click="getValue()"></q-btn>
            </template>
            </q-input>
            
          </q-form>

          <!-- Lista de linhas -->
          <div class="q-mb-md">
              <LinhasComponent :data-source='arr' ></LinhasComponent>
          </div>

        </q-card>
</template>
<style>
</style>
<script setup>
import LinhasComponent from 'src/components/LinhasComponent.vue';
import db from "../db.js"
import {ref} from 'vue'

let mostrarBusca = ref(false)
const busca = ref('')
let resultArray = new Array
resultArray = sortOnibusTempo()
let arr = ref(resultArray)

function sortOnibusTempo() {
  const tempArray = db.linhas
  let sortedArray = []
  sortedArray = tempArray.sort((a, b) => a.tempo - b.tempo)
  return sortedArray
}

function getValue() {
  var formData = new FormData(document.getElementById("buscar"));
  let buscaTexto = Object.fromEntries(formData)
  
  arr.value = sortOnibusTempo().filter((element) => element.linha.toLowerCase().includes(buscaTexto.linha.toLowerCase()) || element.destino.toLowerCase().includes(buscaTexto.linha.toLowerCase()))
  console.log(arr.value);  
}
</script>