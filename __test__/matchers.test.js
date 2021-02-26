describe('Comparadores comunes', () => {
    const user = {
        name: 'Naldo',
        lastname: 'fs'
    }

    const user2 = {
        name: 'Naldo',
        lastname: 'fs'
    }

    const user3 = {
        name: 'naldo',
        lastname: 'fs'
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2)
    })

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user3)
    })

})