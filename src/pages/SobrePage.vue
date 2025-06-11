<template>
    <div class="pagina-sobre">
        <h1 class="titulo">Sobre o Aplicativo</h1>

        <q-card class="card-sobre">
            <q-card-section>
                <p class="descricao">
                    O aplicativo foi desenvolvido com o obejtivo de transformar a experiência de quem utiliza o
                    transporte público. Focando na <b>comodidade, eficiência e inteligência urbana</b>, buscamos fornecer
                    informações precisas e em tempo real sobre horários, localização e estimativas de lotação dos
                    ônibus.
                </p>

                <p class="descricao">
                    A proposta é bem simples: permitir que os passageiros tomem decisões mais conscientes sobre seus
                    deslocamentos, <b>reduzindo o tempo de espera, evitando ônibus lotados</b> e tornando o transporte
                    público mais previsível e confortável.
                </p>

                <p class="descricao">
                    Um dos diferenciais do aplicativo é o envio colaborativo de dados: os próprios usuários podem
                    compartilhar a situação de lotação dos ônibus que estão utilizando. Essas informações são então
                    consolidadas para gerar um panorama mais preciso e atualizado, <b>beneficiando toda a comunidade e
                        contribuindo para uma mobilidade urbana mais inteligente</b>.
                </p>

                <p class="descricao">
                    Ao unir tecnologia, colaboração e foco no bem-estar coletivo, acreditamos que é possível melhorar
                    significativamente o transporte público e tornar as cidades mais conectadas e eficientes.
                </p>
            </q-card-section>
        </q-card>
    </div>
</template>

<script setup>
</script>

<style scoped>
.pagina-sobre {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 24px;
    color: darkgreen;
    text-align: center;
}

.card-sobre {
    max-width: 1000px;
    padding: 20px;
}

.descricao {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 16px;
    color: #444;
    text-align: justify;
}
</style>