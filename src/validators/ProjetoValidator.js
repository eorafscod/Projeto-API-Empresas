const yup = require('yup');

const schema = yup.object().shape({
    nome: yup.string().required("Campo nome é obrigatório"),
    descricao: yup.string().required("Campo descrição é obrigatório"),
    data_inicio: yup.date().required("Campo data de início é obrigatório"),
    data_fim: yup.date().required("Campo data de fim é obrigatório"),
});

function validarProjeto(req, res, next) {
    schema.validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: "Erro na validação dos campos!",
            erro: err.errors
        }));
}

module.exports = {
    validarProjeto
};
