export default{
data() {
    return {
      apiFetch: null,
    };
  },
  methods: {
    fetchData(url) {
        this.loading = true;
        this.apiFetch = null;
      fetch(`http://localhost:3000${url}`)
        .then((r) => r.json())
        .then((r) => {
            setTimeout(() =>{
                this.apiFetch = r;
                this.loading = false;
            }, 1000)

        });
    },
  },
}