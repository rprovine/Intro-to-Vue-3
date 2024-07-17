const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "A pair of warm, fuzzy socks",
      image: "/assets/images/socks_green.jpg",
      url: "https://www.google.com",
    };
  },
});

app.mount("#app");
