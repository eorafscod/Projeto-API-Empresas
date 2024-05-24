const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tarefaSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    data_inicio: {
        type: Date,
        required: true
    },
    data_fim: {
        type: Date,
        required: true
    },
    funcionario: {
        type: Schema.Types.ObjectId,
        ref: 'Funcionario',
        required: true
    },
    projeto: {
        type: Schema.Types.ObjectId,
        ref: 'Projeto',
        required: true
    }
});

const Tarefa = mongoose.model('Tarefa', tarefaSchema);

module.exports = Tarefa;
