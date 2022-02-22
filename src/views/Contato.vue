<template>
  <div class="contato">
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if="apiFetch">
        <h1>{{ apiFetch.titulo }}</h1>
        <p>{{ apiFetch.descricao }}</p>
        <ul>
          <li>
            <b>Email: </b>
            {{ apiFetch.contato.email }}
          </li>
          <li>
            <b>Telefone: </b>
            {{ apiFetch.contato.telefone }}
          </li>
          <li>
            <b>Endereço: </b>
            {{ apiFetch.contato.endereco }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Contato",
  components: {},
  mixins: [fetchData],

  created() {
    this.fetchData("/contato");
  },
};
</script>
