<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <!-- Simulação do Mapa + Paradas Frequentes -->
      <div class="col-12 col-md-8">
        <!-- Mapa -->
        <div
          class="bg-grey-3 flex flex-center"
          style="height: 500px; border-radius: 8px;"
        >
          <div class="text-grey">[ MAPA AQUI ]</div>
        </div>

        <!-- Próximas Paradas Frequentes -->
        <q-card
          flat
          bordered
          class="q-pa-md q-mt-md"
          style="border-radius: 12px; background-color: #f0f6f4;"
        >
          <div
            class="text-h5 text-primary text-center q-mb-md"
            style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
          >
            PRÓXIMAS PARADAS FREQUENTES
          </div>

          <q-list separator>
            <q-item v-for="(parada, index) in proximasParadas" :key="index">
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
          style="border-radius: 12px; min-height: 500px; background-color: #d1e7dc; display: flex; flex-direction: column;"
        >
          <!-- Título Próximos ônibus -->
          <div
            class="text-h4 text-center font-bold q-mb-lg"
            style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
          >
            PRÓXIMOS ÔNIBUS
          </div>

          <!-- Tabela de ônibus -->
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

          <!-- Botão de pesquisa -->
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

        <!-- Card do ônibus mais próximo -->
        <q-card
          flat
          bordered
          class="q-pa-md q-mt-md"
          :style="`border-radius: 12px; background-color: ${corFundoLotacao(onibusMaisProximo.lotacao)};`"
        >
          <div
            class="text-h4 text-center font-bold q-mb-md"
            style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
          >
            ÔNIBUS MAIS PRÓXIMO
          </div>
          <div class="text-subtitle1 q-mb-sm">
            Linha: {{ onibusMaisProximo.linha }} - {{ onibusMaisProximo.destino }}
          </div>
          <div class="q-mb-sm">
            Chega em: <strong>{{ onibusMaisProximo.tempo }}</strong>
          </div>
          <div>
            Lotação:
            <q-badge
              :color="corLotacao(onibusMaisProximo.lotacao)"
              rounded
              style="min-width: 45px; text-align: center; font-size: 1rem;"
            >
              {{ onibusMaisProximo.lotacao }}%
            </q-badge>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Dados dos ônibus
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

// Ônibus mais próximo (dados estáticos)
const onibusMaisProximo = ref({
  linha: 'T27',
  destino: 'Assis Brasil',
  tempo: '1 min',
  lotacao: 95,
})

// Paradas frequentes simuladas
const proximasParadas = ref([
  { nome: "Av. Assis Brasil - Estação FAPA", distancia: "300m" },
  { nome: "Shopping Iguatemi", distancia: "500m" },
  { nome: "Terminal Triângulo", distancia: "650m" },
  { nome: "Rua Dona Adda Mascarenhas", distancia: "800m" },
  { nome: "Rua Teixeira Mendes", distancia: "950m" }
])

// Colunas da tabela
const colunas = [
  { name: 'linha', label: 'Linha', field: 'linha', align: 'left' },
  { name: 'destino', label: 'Destino', field: 'destino', align: 'left' },
  { name: 'tempo', label: 'Tempo', field: 'tempo', align: 'center' },
  { name: 'lotacao', label: 'Lotação', field: 'lotacao', align: 'center' },
]

// Função para determinar a cor do badge
function corLotacao(lotacao) {
  if (lotacao <= 50) return 'positive'  // Verde
  if (lotacao <= 80) return 'warning'  // Amarelo/Laranja
  return 'negative'                    // Vermelho
}

// Função para determinar a cor de fundo do card
function corFundoLotacao(lotacao) {
  if (lotacao <= 50) return '#d1e7dd'  // Verde claro
  if (lotacao <= 80) return '#fff3cd'  // Amarelo claro
  return '#f8d7da'                     // Vermelho claro
}

// Função para abrir busca (simulada)
function abrirBusca() {
  alert('Funcionalidade de busca será implementada aqui')
}
</script>

<style scoped>
.custom-row {
  height: 50px;
}
</style>
