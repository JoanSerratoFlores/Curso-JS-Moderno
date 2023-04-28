import Citas from "../js/classes/Citas";

describe('Probar la clase de citas', () => {
    
    const citas = new Citas();
    
    const id = Date.now();
    
    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Juan',
            telefono: '812934567',
            fecha: '10-12-2020',
            hora:'10:30',
            sintomas: 'Solo Duerme'
        };

        citas.agregarCita(citaObj);

        //Prueba
        expect(citas).toMatchSnapshot();

    })

    test('actualizar cita', () => {
        const citaObjActual = {
            id,
            mascota: 'Nuevo Nombre',
            propietario: 'Juan',
            telefono: '812934567',
            fecha: '10-12-2020',
            hora:'10:30',
            sintomas: 'Solo Duerme'
        };

        citas.editarCita(citaObjActual)

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar cita', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    });

})