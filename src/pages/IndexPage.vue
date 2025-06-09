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
        <q-card flat bordered class="q-pa-lg" style="border-radius: 12px; min-height: 500px; background-color: #d1e7dc; display: flex; flex-direction: column;">

          <!-- Título Próximos ônibus -->
          <div class="text-h4 text-center font-bold q-mb-lg" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            PRÓXIMOS ÔNIBUS
          </div>

          <!-- Próximos ônibus (tabela) -->
          <q-table
            flat
            dense
            :rows="onibusProximos"
            :columns="colunas"
            row-key="linha"
            hide-bottom
            class="text-body2"
            style="background-color: #f0f6f4; font-size: 1.1rem; flex-grow: 1;"
            :pagination="{ rowsPerPage: 10 }"
            :rows-per-page-options="[10]"
            row-class="custom-row"
          >
            <template v-slot:body-cell-lotacao="props">
              <q-badge
                :color="corLotacao(props.row.lotacao)"
                rounded
                style="min-width: 45px; text-align: center; font-size: 1rem;"
              >
                {{ props.row.lotacao }}%
              </q-badge>
            </template>
          </q-table>

          <!-- Botão pesquisar linha no espaço sobrando -->
          <div class="q-mt-md" style="text-align: center;">
            <q-btn
              label="PESQUISAR LINHA"
              color="green"
              rounded
              size="sm"
              style="min-width: 140px;"
              @click="abrirBusca"
            />
          </div>

        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const onibusProximos = ref([
  { linha: 'T6', destino: 'Baltazar', tempo: '10 min', lotacao: 70 },
  { linha: 'T829', destino: 'Bom Jesus', tempo: '20 min', lotacao: 40 },
  { linha: '104', destino: 'Vila Nova', tempo: '15 min', lotacao: 55 },
  { linha: '220', destino: 'São José', tempo: '8 min', lotacao: 85 },
  { linha: '350', destino: 'Centro Histórico', tempo: '12 min', lotacao: 30 },
  { linha: '470', destino: 'Zona Sul', tempo: '18 min', lotacao: 60 },
  { linha: '580', destino: 'Cidade Baixa', tempo: '7 min', lotacao: 45 },
  { linha: '610', destino: 'Partenon', tempo: '9 min', lotacao: 65 },
  { linha: '720', destino: 'Cavalhada', tempo: '11 min', lotacao: 50 },
  { linha: '830', destino: 'Sarandi', tempo: '14 min', lotacao: 35 }
])

const colunas = [
  { name: 'linha', label: 'Linha', field: 'linha', align: 'left' },
  { name: 'destino', label: 'Destino', field: 'destino', align: 'left' },
  { name: 'tempo', label: 'Tempo', field: 'tempo', align: 'center' },
  { name: 'lotacao', label: 'Lotação', field: 'lotacao', align: 'center' }
]

function corLotacao(lotacao) {
  if (lotacao <= 50) return 'green'
  if (lotacao <= 80) return 'orange'
  return 'red'
}

function abrirBusca() {
  // Aqui você pode implementar a ação ao clicar no botão,
  // como abrir um modal, campo de busca, etc.
  alert('Abrir busca ainda não implementado')
}
</script>

<style scoped>
.custom-row {
  height: 50px;
}
</style>
