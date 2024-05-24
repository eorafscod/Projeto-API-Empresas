const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/CargoController')
const DepartamentoController = require('../controllers/DepartamentoController')
const FuncionarioController = require('../controllers/FuncionarioController')
// const ProjectControlle = require('../controllers/ProjectController')
const TarefaController  = require('../controllers/TarefaController')

// validators
const { validarID } = require('../validators/IdValidator')
const { validarCargo } = require('../validators/CargoValidator')
const { validarDepartamento } = require('../validators/DepartamentoValidator')
const { validarFuncionario } = require('../validators/FuncionarioValidator')
// const { validarprojeto }  = require('../validators/ProjectValidator')
const { validartarefa } = require('../validators/TarefaValidator') 

// Cargo
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', validarID, CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarID, validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', validarID, CargoController.excluir)

// Departamentos
router.get('/departamentos', DepartamentoController.buscarTodos)
router.get('/departamentos/:id', validarID, DepartamentoController.buscarPorID)
router.post('/departamentos', validarDepartamento, DepartamentoController.criar)
router.put('/departamentos/:id', validarID, validarDepartamento, DepartamentoController.atualizar)
router.delete('/departamentos/:id', validarID, DepartamentoController.excluir)

// Funcionarios
router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', validarID, FuncionarioController.buscarPorID)
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar)
router.put('/funcionarios/:id', validarID, validarFuncionario, FuncionarioController.atualizar)
router.delete('/funcionarios/:id', validarID, FuncionarioController.excluir)

// // Project
// router.get('/Project', ProjectController.buscarTodos)
// router.get('/Project/:id', validarID, ProjectController.buscarPorID)
// router.post('/Project', validarFuncionario, projectController.criar)
// router.put('/Project/:id', validarID, validarFuncionario, projectController.atualizar)
// router.delete('/Project/:id', validarID, ProjectController.excluir)

// Tarefa
router.get('/tarefas', TarefaController.buscarTodos);
router.get('/tarefas/:id', TarefaController.buscarPorID);
router.post('/tarefas', TarefaController.criar);
router.put('/tarefas/:id', TarefaController.atualizar);
router.delete('/tarefas/:id', TarefaController.excluir);

module.exports = router