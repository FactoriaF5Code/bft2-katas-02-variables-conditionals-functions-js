const chai = window.chai;
const expect = chai.expect;

describe("Colecciones en JS: arrays", () => {
    it("pueden estar vacías" , () => {
        
        expect(things).to.be.an("array").that.is.empty;
    })

    it("pueden contener diferentes elementos" , () => {

        expect(animals).to.be.an("array")
            .that.includes("vaca").and.includes("pollo");
    })   

    it("tienen una longitud", () => {
        const productos = ["agua", "pan", "leche", "huevos", "arroz"]

        expect(longitud).to.equal(5)
    })

    it ("permiten acceder a un elemento utilizando su posición", () => {
        const productos = ["agua", "pan", "leche", "huevos", "arroz"]

        

        expect(producto).to.equal("leche")
    })

    it ("permiten añadir un elemento", () => {
        const productos = ["agua", "pan", "leche", "huevos", "arroz"]


        expect(productos).to.include("yogur")
    })

    

})

describe("Operaciones sobre colecciones", () => {

    // map

    // filter

    // any

    // all 
})