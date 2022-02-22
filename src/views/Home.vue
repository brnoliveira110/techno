<template>
  <div class="home">
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if="apiFetch" class="conteudo">
        <div>
          <h1>Sobre a {{ apiFetch.titulo }}</h1>
          <p>{{ apiFetch.descricao }}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos"
            >cursos</router-link
          >
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li
                v-for="avaliacao in apiFetch.avaliacoes"
                :key="avaliacao.nome"
              >
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/learning.jpg" alt="Criando site" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  },
};
</script>

<style >
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 40px;
  font-size: 1rem;
  margin-bottom: 40px;
  margin-top: 10px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
