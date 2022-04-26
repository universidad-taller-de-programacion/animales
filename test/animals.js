const assert  = require('assert')
const chai  = require('chai')
const spies = require('chai-spies')
chai.use(spies);
const { expect } = chai

const gatoMock = [{ 
  nombre: 'Cercie',
  tipo: 'gato'}]


const perroMock = [{ 
  nombre: 'Galo',
  tipo: 'perro'}]

  const otrosMock = [{ 
    nombre: 'Ramon',
    tipo: 'chancho'}]
  
  
  
const lista = {
   animales: [
    {
      nombre: 'Galo',
      tipo: 'perro'
    },
    {
      nombre: 'Cercie',
      tipo: 'gato'
    },
    {
      nombre: 'Ramon',
      tipo: 'chancho'
    },
  ],
  perros: () => this.animales.filter(animal => animal.tipo == 'perro'),
  gatos: () => this.animales.filter(animal => animal.tipo == 'gato'),
  otros: ()=> this.animales.filter(animal => (animal.tipo != 'perro' && animal.tipo != 'gato'))
}



describe('Lista de animales', () => {
  it('es un objeto', () => {
    expect(lista).to.be.a('Object')
  })


  it('determina los resultados utilizando Array.filter', () => {
    chai.spy.on(lista.animales, 'filter')
   lista.animales.filter(x => x.nombre==='Galo')

   expect(lista.animales.filter).to.have.been.called()
  })

  describe('#perros', () => {
    it('devuelve los animales que son perros', () => {
       chai.spy.on(lista, 'perros', () => perroMock);
      expect(lista.perros()).to.eql(perroMock)
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      chai.spy.on(lista, 'gatos', () => gatoMock);
      expect(lista.gatos()).to.eql(gatoMock)
    })
  })

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      chai.spy.on(lista, 'otros', () => otrosMock);
      expect(lista.otros()).to.eql(otrosMock)
    })
  })

})