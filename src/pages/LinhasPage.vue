<template>
    <q-card flat bordered class="bg-grey-1 q-pa-md" style="border-radius: 12px; min-height: 500px; height: 92vh;">

          <!-- Pesquisar linha -->
          <q-btn
            label="🔍 Pesquisar linha"
            color="primary"
            class="full-width q-mb-md"
            @click="mostrarBusca = !mostrarBusca"
          />
          <q-form id="buscar" class="row" style=" top: 5px">
            <q-input
              v-if="mostrarBusca"
              v-model="busca"
              for="linha"
              outlined
              label="Digite o número ou nome da linha"
              dense
              class="q-mb-md"
              style="width: 95vw;"
            />
            <q-btn v-if="mostrarBusca" class="q-ml-sm" flat round style="font-size: 20px; top: -10px" icon="search" @click="getValue()"></q-btn>
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
import db from "../db.json"
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
  
  resultArray = []
  sortOnibusTempo().forEach(element => {
    if (element.linha.includes(buscaTexto.linha)){
      resultArray.push(element);
    }else{
      if (element.destino.includes(buscaTexto.linha)){
      resultArray.push(element)
      }
    }
  })
  arr.value = resultArray
  console.log(resultArray);
}
</script>