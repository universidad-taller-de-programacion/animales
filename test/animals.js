const chai = require('chai')
const spies = require('chai-spies')
const { expect } = chai

chai.use(spies)

const lista = {

  animales: [
    {
      nombre: 'pepe',
      tipo: 'Perro'
    },
    {
      nombre: 'roco',
      tipo: 'Perro'
    },
    {
      nombre: 'Mini',
      tipo: 'Perro'
    },
    {
      nombre: 'Bruno',
      tipo: 'Perro'
    },
    {
      nombre: 'michi',
      tipo: 'Gato'
    },
    {
      nombre: 'Tomi',
      tipo: 'Gato'
    },
  ],

  perros: function () { return lista.animales.filter(animal => animal.tipo === 'Perro') },

  gatos: function () { return lista.animales.filter(animal => animal.tipo === 'Gato') },

  otros: function () { return lista.animales.filter(animal => animal.tipo != 'Perro' && animal.tipo != 'Gato') },

}


describe('Lista de animales', () => {
  it('es un objeto', () => {
    expect(lista).to.be.a('Object')
  })

  describe('#perros', () => {
    it('devuelve los animales que son perros', () => {
      const perros = lista.perros()

      expect(lista.perros()).to.eql(perros) // equal apunta al mismo lugar de memoria & eql compara valores 1 a 1.
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      const gatos = lista.gatos()

      expect(lista.gatos()).to.eql(gatos)
    })
  })

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      const otros = lista.otros()

      expect(lista.otros()).to.eql(otros)
    })

    it('determina los resultados utilizando Array.filter', () => {
      chai.spy.on(lista.animales, 'filter'),

      lista.perros()

        expect(lista.animales.filter).to.have.been.called()
    })
  })
})