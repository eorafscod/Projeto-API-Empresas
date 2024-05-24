const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projetoSchema = new Schema({
    nome: {
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
    }
});

const Projeto = mongoose.model('Projeto', projetoSchema);

module.exports = Projeto;
