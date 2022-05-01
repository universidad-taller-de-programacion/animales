const assert = require("assert");
const chai = require("chai");
const spies = require("chai-spies");
const { expect } = chai;

chai.use(spies);

// describe("Array", () => {
//   describe("#toString node", () => {
//     it("Returns the string representation including brackets", () => {
//       const arrayToTest = [1, 2];

//       assert.equal(arrayToTest.toString(), "1,2");
//     });
//   });
//   describe("#toString chai", () => {
//     it("Returns the string representation including brackets", () => {
//       const arrayToTest = [1, 2];

//       expect(arrayToTest.toString()).to.equal("1,2");
//     });

//     it("is called once", () => {
//       const arrayToTest = [1, 2];
//       chai.spy.on(arrayToTest, "toString");
//       // Esta linea de abajo es la que el spy va a identificar que se uso
//       const result = arrayToTest.toString();
//       expect(arrayToTest.toString).to.have.been.called();
//     });
//   });
// });

// function arrayAMinusculas (arr){
//     const str = arr.toString();
//     return str.toLowerCase();
// }

// describe("arrayAMinusculas", () => {
//     it("Returns representation in lowercase", () => {
//         const result = arrayAMinusculas(["Uno", "Dos"])
//         expect(result).to.equal("uno,dos")
//     })
//     it("Uses array\'s toString", () => {
//         const arr = ["Uno", "Dos"]
//         chai.spy.on(arr, "toString")

//         const result = arrayAMinusculas(arr)
//         expect(arr.toString).to.have.been.called()
//     })
// })
