const { expect } = require("chai")

describe('Lista de animales', () => {
  it('es un objeto', () => {
    expect(lista).to.be.a('Object')
  })

  describe('#perros', () => {
    it('devuelve los animales que son perros', () => {
      expect(lista.perros()).to.equal(perros)
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      expect(lista.gatos()).to.equal(gatos)
    })
  })

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      expect(lista.otros()).to.equal(otros)
    })

    it('determina los resultados utilizando Array.filter', () => {
      expect(animales.filter).to.have.been.called()
    })
  })
})