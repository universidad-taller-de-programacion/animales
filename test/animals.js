const chai = require("chai");
const spies = require("chai-spies");
const { expect } = chai;

chai.use(spies);

const lista = {
  animales: [
    {
      nombre: "Pitbull",
      tipo: "Perro",
    },
    {
      nombre: "Golden retriever",
      tipo: "Perro",
    },
    {
      nombre: "Bulldog",
      tipo: "Perro",
    },
    {
      nombre: "Siames",
      tipo: "Gato",
    },
    {
      nombre: "Persa",
      tipo: "Gato",
    },
    {
      nombre: "Esfinge",
      tipo: "Gato",
    },
  ],
  Perros: function () {
    return this.animales.filter((animal) => animal.tipo === "Perro");
  },
  Gatos: function () {
    return this.animales.filter((animal) => animal.tipo === "Gato");
  },
  Otros: function () {
    return this.animales.filter(
      (animal) => animal.tipo != "Perro" && animal.tipo != "Gato"
    );
  },
};

describe("Lista de animales", () => {
  it("es un objeto", () => {
    expect(lista).to.be.a("Object");
  });

  describe("#perros", () => {
    it("devuelve los animales que son perros", () => {
      const perros = lista.Perros();

      expect(lista.Perros()).to.eql(perros);
    });
  });

  describe("#gatos", () => {
    it("devuelve los animales que son gatos", () => {
      const gatos = lista.Gatos();

      expect(lista.Gatos()).to.eql(gatos);
    });
  });

  describe("#otros", () => {
    it("devuelve los animales que no son perros ni gatos", () => {
      const otros = lista.Otros();

      expect(lista.Otros()).to.eql(otros);
    });

    it("determina los resultados utilizando Array.filter", () => {
      chai.spy.on(lista.animales, "filter");

      const perros = lista.Perros();

      expect(lista.animales.filter).to.have.been.called();
    });
  });
});
