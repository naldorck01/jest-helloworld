import { fruit, colors } from '../array'

describe('Comprobaremos que existe un elemento', () => {

    test('¿Tiene una banana?', () => {
        expect(fruit()).toContain('banana')
    })

    test('No contiene un platano', () => {
        expect(fruit()).not.toContain('Platano')
    })

    test('Comprobar el tamaño de un arreglo', () => {
        expect(fruit()).toHaveLength(6)
    })

})