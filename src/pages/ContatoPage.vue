<template>
    <div class="pagina-contato">
        <h1 class="titulo">Entre em Contato</h1>

        <q-card class="card-contato">
            <q-card-section>
                <div class="conteudo">
                    <div class="formulario">
                        <q-input v-model="nome" outlined label="Nome Completo" />
                        <q-input v-model="email" outlined label="E-mail" class="q-mt-md" />
                        <q-input v-model="mensagem" outlined type="textarea" label="Mensagem" class="q-mt-md" />
                        <q-btn label="Enviar" color="primary" class="q-mt-md" />
                    </div>
                    <div class="info-contato">
                        <h3 class="subtitulo">Email para contato</h3>
                        <p class="email-contato">animabus.contato@animabus.com</p>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script >

</script>

<style scoped>
.pagina-contato {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 24px;
    text-align: center;
    color: darkgreen;
}

.card-contato {
    width: 900px;
    padding: 20px;
}

.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
}

.formulario {
    width: 60%;
    display: flex;
    flex-direction: column;
}

.info-contato {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
}

.subtitulo {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    color: darkgreen;
}

.email-contato {
    font-size: 16px;
}
</style>