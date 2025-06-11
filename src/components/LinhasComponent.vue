<script setup>
import {ref} from 'vue'

const proximoTempo = ref(5)

</script>

<template>
    <q-card flat bordered class="q-pa-sm q-mb-sm" v-for="item in dataSource" :key="item.id" :class="[(item.tempo <= proximoTempo) ? 'big' + [(item.lotacao <= 40) ? ' green' : ([item.lotacao <= 70 ?  ' orange' : ' red'])] : '', '']">
        <div class="row items-center justify-between">
            <div>
                <div :class="[(item.tempo <= proximoTempo) ? 'text-subtitle1' : 'text-subtitle2', 'text-subtitle1']">LINHA {{ item.linha }} - {{ item.destino }}</div>
                <div :class="[(item.tempo <= proximoTempo) ? 'q-mt-xs' : 'text-caption', 'q-mt-xs']">Chega em {{ item.tempo }} minuto{{ item.tempo == 1 ? "" : "s" }}</div>
                <div class="q-mt-x" v-if="(item.tempo <= proximoTempo)">Lotação: <strong>{{ item.lotacao }}%</strong></div>
            </div>
            <div class="text-right" v-if="!(item.tempo <= proximoTempo)"> 
                <q-badge :class="[(item.lotacao <= 40) ? 'green' : ([item.lotacao <= 70 ?  'orange' : 'red']), 'black']">Lotação: {{ item.lotacao }}%</q-badge>
                <a href="/"><q-btn dense flat size="sm" icon="map" label="Ver" color="primary" /></a>
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
    name: "LinhaComponent",
    props:['dataSource']
})
</script>