import { TestScheduler } from "jest";

function soma(num1, num2){
    return num1+num2;
}

function subtracao(num1, num2){
    return num1-num2;
}

function multiplicao(num1, num2) {
    return num1*num2;
}

describe ('Testes da função soma', () => {
    it('Soma com positivos', () => {
        expect(soma(5,3)).toBe(8);
    })

    it('Soma com Negativos', () => {
        expect(soma(-1,-2)).toBe(-3);
    })

})

describe('Testes da função subtração', () => {
    it('Subtração com Positivos', () => {
        expect(subtracao(21,21)).toBe(0)
    })
    it('Subtração com Negativos', () => {
        expect(subtracao(-5,-2)).toBe(-3)
    })
    
})

describe('Testes da função multiplicação', () => {
    it('Multiplicação com Positivos', () => {
        expect(multiplicao(2,3)).toBe(6)
    })
})

 /*test('Teste de Soma com Positivos:', () => {
     expect(soma(21,21)).toBe(42);
 });

 test('Soma com Negativos', () => {
     expect(soma(-1,-2)).toBe(-3);
 }); */
