<template>
  <div class="home">
    <h1 @click="fetchData">Home</h1>
    {{ apiFetch }}
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      apiFetch: null,
    };
  },
  methods: {
    fetchData() {
      fetch(
        "https://github.com/brnoliveira110/techno/blob/develop/api/api.json"
      )
        .then((r) => r.json())
        .then((r) => {
          this.apiFetch = r;
        });
    },
  },
};
</script>
