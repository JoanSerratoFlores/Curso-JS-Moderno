const cliente = {
    nombre: 'Juan Pablo',
    balance: 500
};

describe('Testing al Cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Juan Pablo', () => {
        expect(cliente.nombre).toBe('Juan Pablo');
    });

    test('No e tro cliente',() => {
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(300);
    })
})