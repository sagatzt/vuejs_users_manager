const fizzbuzz=require('./fizzbuzz')

describe('test para función fizzbuzz',()=>{
    test('Si n es múltiplo 3 devuelve fizz',()=>{
        expect(fizzbuzz(9)).toBe('fizz')
    })
    test('Si n es múltiplo 5 devuelve buzz',()=>{
        expect(fizzbuzz(10)).toBe('buzz')
    })
    test('Si n es múltiplo 5 y 3 devuelve fizzbuzz',()=>{
        expect(fizzbuzz(15)).toBe('fizzbuzz')
    })
    test('Si n no es múltiplo 5 ni 3 devuelve n',()=>{
        let n=17
        expect(fizzbuzz(n)).toBe(n)
    })
})