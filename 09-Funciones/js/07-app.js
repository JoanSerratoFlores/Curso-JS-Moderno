IniciarApp();

function IniciarApp(){
    console.log('Iniciando app...');
    SegundaFuncion();
}

function SegundaFuncion(){
    console.log('Segunda funcion...');
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario){
    console.log('Usuario autenticando');
    console.log(`Usuario Autenticado Exitosamente:${usuario}`);
}