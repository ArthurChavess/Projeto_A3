<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Novo Cabeçalho -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="justify-between">

        <!-- Logo / Título -->
        <div class="text-h6 q-ml-md">
          ÂnimaBus
        </div>

        <!-- Links principais -->
        <div class="row items-center q-gutter-sm">
          <q-btn flat dense label="Início" to="/" />
          <q-btn flat dense label="Linhas" to="/linhas" />
          <q-btn flat dense label="Sobre" to="/sobre" />
          <q-btn flat dense label="Contato" to="/contato" />
        </div>

        <!-- Autenticação -->
        <div class="row items-center q-gutter-sm q-mr-md">
          <!-- <q-btn outline color="white" label="Entrar" to="/login" />
          <q-btn color="secondary" label="Cadastrar" to="/cadastro" /> -->
        </div>

      </q-toolbar>
    </q-header>

    <!-- Container principal -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// Drawer e EssentialLinks removidos porque não estão mais sendo usados
</script>
