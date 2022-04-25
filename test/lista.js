const lista = {
  animales: [],
  perros: function () {
    return this.animales.filter((animal) => animal.tipo === "perro");
  },
  gatos: function () {
    return this.animales.filter((animal) => animal.tipo === "gato");
  },
  otros: function () {
    return this.animales.filter((animal) => animal.tipo !== "perro" && animal.tipo !== "gato");
  },
};

module.exports = lista;
