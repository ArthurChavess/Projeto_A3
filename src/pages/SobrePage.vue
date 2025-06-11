<template>
  <q-page class="q-pa-md flex flex-center" style="max-width: 50vw; left: 25vw">
    <q-card bordered class="q-pa-lg">
      <q-card-section>
        <div class="text-h5 text-primary">Sobre o Projeto</div>
      </q-card-section>

      <q-card-section class="text-body1">
        <p>
          Este projeto foi desenvolvido como parte de uma iniciativa acadêmica com o objetivo de melhorar a experiência dos usuários do transporte público urbano. A proposta é oferecer uma plataforma web intuitiva e acessível que forneça informações em tempo real sobre horários de ônibus, localização dos veículos e estimativas de lotação.
        </p>

        <p>
          Por meio da integração de tecnologias como geolocalização, análise de dados e feedback colaborativo, o aplicativo permite que os passageiros tomem decisões mais conscientes e estratégicas em seus deslocamentos diários. Isso resulta em mais conforto, menos tempo de espera e uma melhor distribuição dos usuários ao longo das linhas disponíveis.
        </p>

        <p>
          O projeto representa o compromisso com uma mobilidade urbana mais inteligente, eficiente e centrada nas necessidades da população.
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'SobrePage'
}
</script>

<style>
.q-card {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}
</style>