const cors = require('cors')

const express = require ('express');
const morgan = require('morgan');
const {create} = require('express-handlebars');
const path = require('path');
const flash = require ('connect-flash')
const session = require ('express-session')

const app = express()
app.use(cors())

/**Configuraciones */
const hbs = create ({
  extname: '.hbs'
})

app.set ('port', process.env.PORT || 3001);
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, 'views'));

app.use(flash())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/doctores')));
app.get('/doctores', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/doctores', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/doctores/doctor')));
app.get('/doctores/doctor/:doctor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/doctores/doctor', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/doctores/nuevo')));
app.get('/doctores/nuevo', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/doctores/nuevo', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/doctores/agenda')));
app.get('/doctores/agenda', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/doctores/agenda', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/citas')));
app.get('/citas', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/citas', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/tareas')));
app.get('/tareas', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/tareas', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/pacientes')));
app.get('/pacientes', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pacientes', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/pacientes/paciente')));
app.get('/pacientes/paciente/:paciente', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pacientes/paciente', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/pacientes/nuevo')));
app.get('/pacientes/nuevo', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pacientes/nuevo', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/pacientes/facturas-pendientes')));
app.get('/pacientes/facturas-pendientes', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pacientes/facturas-pendientes', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/especialidades')));
app.get('/especialidades', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/especialidades', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/cuartos-asignados')));
app.get('/cuartos-asignados', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/cuartos-asignados', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/cuartos-asignados/asignar')));
app.get('/cuartos-asignados/asignar', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/cuartos-asignados/asignar', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/pagos')));
app.get('/pagos', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pagos', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/pagos/agregar-pago')));
app.get('/pagos/agregar-pago', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pagos/agregar-pago', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/pagos/factura')));
app.get('/pagos/factura', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pagos/factura', 'index'));
});



//Iniciar el servidor
app.listen (app.get('port'), () => {
    console.log ('Server en puerto ', app.get ('port'))
})
