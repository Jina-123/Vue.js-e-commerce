import Vue from "vue";
import Vuex from "vuex";
import produitService from "@/services/produitService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    errors: [],
    cart: []
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products;
    },
    CREATE_ERROR(state, error) {
      state.errors = [error, ...state.errors];
    },
    UPDATE_CART(state, cart) {
      state.cart = cart;
    },
    REMOVE_ONE_FROM_CART(state, cart) {
      state.cart = cart;
    }
  },
  actions: {
    getProducts({ commit }) { produitService.getProducts().then(res => {
          commit("GET_PRODUCTS", res.data);
        }).catch(err => {
          const error = {
            date: new Date(),
            message: `Failed to retrieve products: ${err.message}`
          };
          commit("CREATE_ERROR", error);
        });
    },
    updateCart({ commit }, product) {
      return produitService.addToCart(product).then(() => {
          console.log("cart", JSON.parse(localStorage.getItem("vue-commerce-cart"))
          );
          commit("UPDATE_CART", JSON.parse(localStorage.getItem("vue-commerce-cart"))
          );
        }).catch(err => console.error(err));
    },
    removeOneFromCart({ commit }, product) {
      return produitService.removeOneFromCart(product).then(() => {
          commit(
            "REMOVE_ONE_FROM_CART", JSON.parse(localStorage.getItem("vue-commerce-cart"))
          );
        }).catch(err => console.error(err));
    },
    getCartFromStorage({ commit }) {
      const cart = JSON.parse(localStorage.getItem("vue-commerce-cart"));
      if (!cart) return;
      commit(
        "UPDATE_CART", JSON.parse(localStorage.getItem("vue-commerce-cart"))
      );
    }
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    getNumberArticlesInCart(state) {
      if (!state.cart.products) return 0;
      const numberArticles = state.cart.products.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
      return numberArticles;
    }
  }
});