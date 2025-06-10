<template>
    <q-card flat bordered class="bg-grey-1 q-pa-md" style="border-radius: 12px; min-height: 500px; height: 92vh;">

          <!-- Pesquisar linha -->
          <q-btn
            label="🔍 Pesquisar linha"
            color="primary"
            class="full-width q-mb-md"
            @click="mostrarBusca = !mostrarBusca"
          />
          <q-input
            v-if="mostrarBusca"
            v-model="termoBusca"
            outlined
            label="Digite o número ou nome da linha"
            dense
            class="q-mb-md"
          />

          <!-- Lista de linhas -->
          <div class="q-mb-md">
              <LinhasComponent/>
          </div>

        </q-card>
</template>
<style>
</style>
<script setup>
import LinhasComponent from 'src/components/LinhasComponent.vue';
</script>