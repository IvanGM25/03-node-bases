const argv = require('yargs')

.option('b',{
    alias: 'base',
    tipo: 'number',
    demandOption: true,
    describe:'Es la base de la tabla de multiplicar'
})
.option('l',{
    alias: 'limite',
    tipo: 'number',
    demandOption: false,
    default: 10,
    describe:'Es el limite de la tabla de multiplicar'
})
.option('v',{
    alias: 'visualizar',
    tipo: 'boolean',
    demandOption: false,
    default: false,
    describe:'EMuestra tabla en consola'
})
.check((argv,options)=>{

    if(isNaN(argv.b)){
        throw new Error('La base tiene que ser un numero');
    }
    return true


})
.help()
.version()

.argv;

const {multiplicar} = require('./multiplicador');

multiplicar(argv.b,argv.l, argv.v);
