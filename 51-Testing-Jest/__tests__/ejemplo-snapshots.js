const cliente = {
    nombre: ' Juan 2',
    balances: 500,
    tipo : ' Premium'
};

describe('Testng al cliente', () => {
    test('Es Juan pablo', () => {
        expect(cliente.nombre).toMatchSnapshot();
    });
});