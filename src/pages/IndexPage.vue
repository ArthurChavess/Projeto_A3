<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <!-- Simulação do Mapa + Paradas Frequentes -->
      <div class="col-12 col-md-8">
        <!-- Mapa -->
        <div class="bg-grey-3" style="height: 500px; border-radius: 8px; width: 100%">
          <l-map ref="map" v-model:zoom="zoom" :center="[-30.0277, -51.2287]">
            <l-tile-layer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              layer-type="base"
              name="OpenStreetMap"
            ></l-tile-layer>
            <l-marker :lat-lng="[-30.0329994, -51.1229711]" />
          </l-map>
        </div>

        <!-- Próximas Paradas Frequentes -->
        <q-card
          flat
          bordered
          class="q-pa-md q-mt-md"
          style="border-radius: 12px; background-color: #f0f6f4"
        >
          <div
            class="text-h5 text-primary text-center q-mb-md"
            style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          >
            PRÓXIMAS PARADAS FREQUENTES
          </div>

          <q-list separator>
            <q-item v-for="(parada, index) in db.paradas" :key="index">
              <q-item-section>
                <q-item-label class="text-subtitle1">
                  {{ parada.nome }}
                </q-item-label>
                <q-item-label caption>
                  {{ parada.distancia }}
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="place" color="green" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <!-- Barra lateral -->
      <div class="col-12 col-md-4">
        <q-card
          flat
          bordered
          class="q-pa-lg"
          style="
            border-radius: 12px;
            min-height: 500px;
            background-color: #d1e7dc;
            display: flex;
            flex-direction: column;
          "
        >
          <!-- Título Próximos ônibus -->
          <div
            class="text-h4 text-center font-bold q-mb-lg"
            style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          >
            PRÓXIMOS ÔNIBUS
          </div>

          <!-- Tabela de ônibus -->
          <q-table
            flat
            dense
            :rows="db.linhas"
            :columns="[{ name: 'linha', label: 'Linha', field: 'linha', align: 'left' },
                      { name: 'destino', label: 'Destino', field: 'destino', align: 'left' },
                      { name: 'tempo', label: 'Tempo', field: 'tempo', align: 'center' },
                      { name: 'lotacao', label: 'Lotação', field: 'lotacao', align: 'center' }]"
            row-key="linha"
            hide-bottom
            class="text-body2"
            style="background-color: #f0f6f4; font-size: 1.1rem; flex-grow: 1"
            :pagination="{ rowsPerPage: 10 }"
            :rows-per-page-options="[10]"
            row-class="custom-row"
          >
            <template v-slot:body-cell-tempo="props">
              <td style=" text-align: center">{{ addLeftZero(props.row.tempo) }} min</td>
            </template>
            <template v-slot:body-cell-lotacao="props">
              <td style="width: 1px">
              <q-badge
                :color="corLotacao(props.row.lotacao)"
                rounded
                style="min-width: 45px; text-align: center; font-size: 1rem"
              >
                {{ props.row.lotacao }}%
              </q-badge>
              </td>
            </template>
          </q-table>

          <!-- Botão de pesquisa -->
          <div class="q-mt-md" style="text-align: center">
            <a href="/#/linhas"><q-btn
              label="PESQUISAR LINHA"
              color="green"
              rounded
              size="sm"
              style="min-width: 140px"
            /></a>
          </div>
        </q-card>

        <!-- Card do ônibus mais próximo -->
        <q-card
          flat
          bordered
          class="q-pa-md q-mt-md"
          :style="`border-radius: 12px; background-color: ${corFundoLotacao(getOnibusMaisProximo().lotacao)};`"
        >
          <div
            class="text-h4 text-center font-bold q-mb-md"
            style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          >
            ÔNIBUS MAIS PRÓXIMO
          </div>
          <div class="text-subtitle1 q-mb-sm">
            Linha: {{ getOnibusMaisProximo().linha }} - {{ getOnibusMaisProximo().destino }}
          </div>
          <div class="q-mb-sm">
            Chega em: <strong>{{ getOnibusMaisProximo().tempo }} min</strong>
          </div>
          <div>
            Lotação:
            <q-badge
              :color="corLotacao(getOnibusMaisProximo().lotacao)"
              rounded
              style="min-width: 45px; text-align: center; font-size: 1rem"
            >
              {{ getOnibusMaisProximo().lotacao }}%
            </q-badge>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import * as L from 'leaflet'
window.L = L
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import { ref } from 'vue'
import db from 'src/db.json'

const zoom = ref(13) // Defina o zoom inicial desejado

// Ônibus mais próximo 
function getOnibusMaisProximo() {
  const tempArray = db.linhas
  let sortedArray = tempArray.sort((a, b) => a.tempo - b.tempo)
  return sortedArray[0]
}

// Função para determinar a cor do badge
function corLotacao(lotacao) {
  if (lotacao <= 50) return 'positive' // Verde
  if (lotacao <= 80) return 'warning' // Amarelo/Laranja
  return 'negative' // Vermelho
}

// Função para determinar a cor de fundo do card
function corFundoLotacao(lotacao) {
  if (lotacao <= 50) return '#d1e7dd' // Verde claro
  if (lotacao <= 80) return '#fff3cd' // Amarelo claro
  return '#f8d7da' // Vermelho claro
}

function addLeftZero(number) {
  return String(number).padStart(2, '0');
}
</script>

<style scoped>
.custom-row {
  height: 50px;
}
</style>
