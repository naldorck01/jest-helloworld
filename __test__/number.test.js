import { sumar } from '../math'

describe('Comparación de numeros', () => {

    test('Mayor que', () => {
        expect(sumar(1, 9)).toBeGreaterThan(9)
    })

    test('Mayor que o igual', () => {
        expect(sumar(1, 9)).toBeGreaterThanOrEqual(10)
    })

    test('Menor que', () => {
        expect(sumar(1, 9)).toBeLessThan(11)
    })

    test('Mejor que o igual', () => {
        expect(sumar(1, 9)).toBeLessThanOrEqual(11)
    })

    test('Número flotantes', () => {
        expect(sumar(0.2, 0.2)).toBeCloseTo(0.4)
    });

})