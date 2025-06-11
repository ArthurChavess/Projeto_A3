<template>
  <q-page class="q-pa-md flex flex-center">
    <q-card class="q-pa-lg" style="width: 100%; max-width: 600px;">
      <q-card-section>
        <div class="text-h5 text-center">Entre em Contato</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="enviarFormulario" class="q-gutter-md">
          <q-input v-model="form.nome" label="Nome" outlined required />
          <q-input v-model="form.email" label="Email" type="email" outlined required />
          <q-input v-model="form.assunto" label="Assunto" outlined required />
          <q-input v-model="form.mensagem" label="Mensagem" type="textarea" autogrow outlined required />

          <div class="row justify-center">
            <q-btn label="Enviar" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'ContatoForm',
  data() {
    return {
      form: {
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      }
    }
  },
  methods: {
    enviarFormulario() {
      // Simulação de envio
      this.$q.notify({
        type: 'positive',
        message: 'Mensagem enviada com sucesso!'
      });

      // Resetar o formulário
      this.form = {
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      };
    }
  }
}
</script>

<style scoped>
.q-card {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
</style>