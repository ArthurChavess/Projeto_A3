<script setup>
import db from "../db.json" with { type: "json" }

function sortOnibusTempo() {
  const tempArray = db.linhas
  let sortedArray = tempArray.sort((a, b) => a.tempo - b.tempo)
  return sortedArray
}

</script>

<template >
    <q-card flat bordered class="q-pa-sm q-mb-sm" v-for="item in sortOnibusTempo()" :key="item.id" :class="[(item.tempo <= 5) ? 'big' + [(item.lotacao <= 40) ? ' green' : ([item.lotacao <= 70 ?  ' orange' : ' red'])] : '', '']">
        <div class="row items-center justify-between">
            <div>
                <div :class="[(item.tempo <= 5) ? 'text-subtitle1' : 'text-subtitle2', 'text-subtitle1']">LINHA {{ item.linha }} - {{ item.destino }}</div>
                <div :class="[(item.tempo <= 5) ? 'q-mt-xs' : 'text-caption', 'q-mt-xs']">Chega em {{ item.tempo }} minuto{{ item.tempo == 1 ? "" : "s" }}</div>
                <div class="q-mt-x" v-if="(item.tempo <= 5)">Lotação: <strong>{{ item.lotacao }}%</strong></div>
            </div>
            <div class="text-right" v-if="!(item.tempo <= 5)"> 
                <q-badge :class="[(item.lotacao <= 40) ? 'green' : ([item.lotacao <= 70 ?  'orange' : 'red']), 'black']">Lotação: {{ item.lotacao }}%</q-badge>
                <q-btn dense flat size="sm" icon="map" label="Ver" color="primary" />
            </div>
        </div>
    </q-card>
</template>

<style>
.big{
    border-radius: 12px;
    padding: 16px 16px;
    margin-top: 16px;
    color:white;
}
.black{
    background: black;
}
.red{
    background: #ef5350 !important;
}
.orange{
    background: orange !important;
}
.green{
    background: rgb(108, 179, 1) !important;
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LinhaComponent"
})
</script>