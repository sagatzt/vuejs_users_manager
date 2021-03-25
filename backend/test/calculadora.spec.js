const calc=require('./calculadora')

describe('Test unitarios del objeto calculadora, función sumar',()=>{
    test('sumar 1 + 2 debe dar 3',()=>{ 
        let a=1
        let b=2
        expect(calc.sumar(a,b)).toBe(3)
    })
    
    test('Sumar negativos -1 + -5 debe dar -6',()=>{
        expect(calc.sumar(-1,-5)).toBe(-6)
    })
    
    test('Sumar cifras no numéricas, 5 + "a" debe dar error',()=>{
        expect(calc.sumar(5,'a')).toBe(NaN)
    })
})

describe('Test unitarios del objeto calculadora, función restar',()=>{
    test('restar 1 - 2 debe dar -1',()=>{ 
        let a=1
        let b=2
        expect(calc.restar(a,b)).toBe(-1)
    })
    
    test('Restar negativos -1 - -5 debe dar 4',()=>{
        expect(calc.restar(-1,-5)).toBe(4)
    })
    
    test('Restar cifras no numéricas, 5 - "a" debe dar error',()=>{
        expect(calc.restar(5,'a')).toBe(NaN)
    })
})