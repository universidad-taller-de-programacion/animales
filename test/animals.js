const assert = require("assert");
const chai = require("chai");
const spies = require("chai-spies");
const { expect } = chai;
const lista = require("./lista");

chai.use(spies);


const animalesZoo = [
  {
    tipo: "perro",
    nombre: "Tito",
  },
  {
    tipo: "gato",
    nombre: "Michi",
  },
  {
    tipo: "Sapo",
    nombre: "Pepe",
  },
  {
    tipo: "loro",
    nombre: "Paco",
  },
];

lista.animales = [...animalesZoo];

describe("Lista de animales", () => {
  it("es un objeto", () => {
    expect(lista).to.be.a("Object");
  });

  describe("#perros", () => {
    it("devuelve los animales que son perros", () => {
      const perros = animalesZoo.filter(animal => animal.tipo === "perro");
      expect(lista.perros()).to.eql(perros);
    });
  });

  describe("#gatos", () => {
    it("devuelve los animales que son gatos", () => {
      const gatos = animalesZoo.filter(animal => animal.tipo === "gato");
      expect(lista.gatos()).to.eql(gatos);
    });
  });

  describe("#otros", () => {
    it("devuelve los animales que no son perros ni gatos", () => {
      const otros = animalesZoo.filter(animal => animal.tipo !== "perro" && animal.tipo != "gato");
      expect(lista.otros()).to.eql(otros);
    });

    it("determina los resultados utilizando Array.filter", () => {
      expect(animales.filter).to.have.been.called();
    });
  });
});

