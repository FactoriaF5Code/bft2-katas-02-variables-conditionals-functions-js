const chai = window.chai;
const expect = chai.expect;

describe("Variables en JS", () => {
    it("Completa todas las constantes que faltan", () => {

        const a = 10;

        expect(a).to.equal(10);
        expect(b).to.equal(1.34);
        expect(c).to.equal(true);
        expect(d).to.equal("Buenos días");
        expect(e).to.equal("Pepe");
        expect(f).to.equal("Buenos días, pepe");
    })

    it("Completa todas las variables que faltan para que las operaciones resulten correctamente", () => {

        let a = 11;

        expect(a + b).to.equal(11.34);
        expect(a * c).to.equal(110);
        expect(d - e).to.equal(-340);
        // investiga para qué sirven los operadores ** y %
        expect(f ** g).to.equal(1000);
        expect(x % 2).to.equal(0);
        expect(y % 2).to.equal(1);
    })

    it("Completa todas las variables que faltan para que se cumplan las condiciones", () => {

        let a = 10;

        expect(a > 9).to.be.true;
        expect(a < 11).to.be.true;
        expect(b === 100).to.be.true;
        expect(c === undefined).to.be.true;
        expect(d !== "Hello").to.be.true;
        expect(n.startsWith('A')).to.be.false;
    })
})

describe("condicionales en javascript", () => {
    it("completa el valor del resultado esperado (expected)", () => {

        let name = "Pepe";

        let result = "KO";

        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length
        if (name.length === 6) {
            result = "OK"
        }

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result === "???").to.be.true;
    })

    it("comparando cadenas (strings)", () => {

        let a = 'a';
        let b = 'b';
        let result;

        if (a < b) {
            result = 'pikachu';
        } else {
            result = 'charmander';
        }

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result === "???").to.be.true;
    })

    it("Interpolación de cadenas (strings) (1)", () => {
        let n = "Piña";
        let m = "Pepperoni";
        let q = 14;
        let result;

        // https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math#operadores_aritm%C3%A9ticos
        if (q % 5 === 0) {
            result = "Pizza con " + n;
        } else {
            result = "Pizza con " + m;
        }

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result === "???").to.be.true;
    })

    it("Interpolación de cadenas (strings) (2)", () => {
        let n = "Piña";
        let m = "Pepperoni";
        let q = 14;
        let result;

        // https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math#operadores_aritm%C3%A9ticos
        if (q % 7 === 0) {
            result = `Pizza con ${n}`;
        } else {
            result = `Pizza con ${m}`;
        }

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result === "???").to.be.true;
    })
})

describe("Funciones en JS", () => {

    function f(a, b, c) {
        return b - a + 4 * c;
    }

    function g(n, m) {
        return `Son ${m} y ${n}`;
    }

    function h(name) {
        
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length
        if (name.length <= 4) {
            return "too short";
        } else if (name.length < 7) {
            return "adecquate";
        } else if (name.length < 12) {
            return "long";
        } else {
            return "very long";
        }
    }

    it("Cuál es el resultado de invocar la función? (1)", () => {

        let result = f(10, 30, 2);


        // substituye "???" por el valor que tiene la variable "result"        
        expect(result === "???").to.be.true;
    })

    it("Cuál es el resultado de invocar la función? (2)", () => {

        let result = g("Cerebro", "Pinky");


        // substituye "???" por el valor que tiene la variable "result"        
        expect(result === "???").to.be.true;
    })

    it("Cuál es el resultado de invocar la función? (3)", () => {

        // substituye "???" por el resultado en cada caso
        expect(h("khaleesi mother of dragons breaker of chains") === "???").to.be.true;
        expect(h("sarah") === "???").to.be.true;
        expect(h("bob") === "???").to.be.true;
        expect(h("robertson") === "???").to.be.true;
    })

})

