const yup = require('yup');

const schema = yup.object().shape({
    titulo: yup
        .string("O campo título precisa ser um texto")
        .required("O campo título é obrigatório"),
    descricao: yup
        .string("O campo descrição precisa ser um texto")
        .required("O campo descrição é obrigatório"),
    data_inicio: yup
        .date("O campo data de início precisa ser uma data válida")
        .required("O campo data de início é obrigatório"),
    data_fim: yup
        .date("O campo data de fim precisa ser uma data válida")
        .required("O campo data de fim é obrigatório"),
    funcionario: yup
        .string("O campo funcionário precisa ser um ID válido")
        .required("O campo funcionário é obrigatório"),
    projeto: yup
        .string("O campo projeto precisa ser um ID válido")
        .required("O campo projeto é obrigatório")
});

function validarTarefa(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json(
            {
                mensagem: "Erro na validação dos campos!",
                erro: err.errors
            }
        ));
}

module.exports = {
    validarTarefa
};
