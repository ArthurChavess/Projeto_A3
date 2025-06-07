<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">

      <!-- Simulação do Mapa -->
      <div class="col-12 col-md-8">
        <div
          class="bg-grey-3 flex flex-center"
          style="height: 500px; border-radius: 8px;"
        >
          <div class="text-grey">[ MAPA AQUI ]</div>
        </div>
      </div>

      <!-- Barra lateral -->
      <div class="col-12 col-md-4">
        <q-card flat bordered class="bg-grey-1 q-pa-md" style="border-radius: 12px; min-height: 500px;">

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
            <!-- Linha 1 -->
            <q-card flat bordered class="q-pa-sm q-mb-sm">
              <div class="row items-center justify-between">
                <div>
                  <div class="text-subtitle2">LINHA 300 - FARRAPOS</div>
                  <div class="text-caption">Chega em 10 minutos</div>
                </div>
                <div class="text-right">
                  <q-badge color="orange" class="q-mb-xs">Lotação: 70%</q-badge>
                  <q-btn dense flat size="sm" icon="map" label="Ver" color="primary" />
                </div>
              </div>
            </q-card>

            <!-- Linha 2 -->
            <q-card flat bordered class="q-pa-sm q-mb-sm">
              <div class="row items-center justify-between">
                <div>
                  <div class="text-subtitle2">LINHA 102 - CENTRO</div>
                  <div class="text-caption">Chega em 6 minutos</div>
                </div>
                <div class="text-right">
                  <q-badge color="green" class="q-mb-xs">Lotação: 40%</q-badge>
                  <q-btn dense flat size="sm" icon="map" label="Ver" color="primary" />
                </div>
              </div>
            </q-card>

            <!-- Linha 3 -->
            <q-card flat bordered class="q-pa-sm q-mb-sm">
              <div class="row items-center justify-between">
                <div>
                  <div class="text-subtitle2">LINHA 201 - CAMPUS</div>
                  <div class="text-caption">Chega em 12 minutos</div>
                </div>
                <div class="text-right">
                  <q-badge color="red" class="q-mb-xs">Lotação: 95%</q-badge>
                  <q-btn dense flat size="sm" icon="map" label="Ver" color="primary" />
                </div>
              </div>
            </q-card>
          </div>

          <!-- Ônibus mais perto -->
          <div :class="['q-pa-md q-mt-md text-white', corDoOnibusMaisPerto]" style="border-radius: 12px;">
            <div class="text-subtitle1">LINHA 752 - ASSIS BRASIL</div>
            <div class="q-mt-xs">Chega em: <strong>5 min</strong></div>
            <div class="q-mt-xs">Lotação: <strong>90%</strong></div>
          </div>

        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

const mostrarBusca = ref(false)
const termoBusca = ref('')

const lotacaoOnibusMaisPerto = 90

const corDoOnibusMaisPerto = computed(() => {
  if (lotacaoOnibusMaisPerto <= 50) return 'bg-green-5'
  if (lotacaoOnibusMaisPerto <= 80) return 'bg-orange-5'
  return 'bg-red-5'
})
</script>
