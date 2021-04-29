import * as Yup from 'yup'

const schema = Yup.object().shape({
    nome: Yup.string().required("O nome é obrigatório."),
    sexo: Yup.string().required("O e-sexo é obrigatório."),
    idade: Yup.string().required("A idade é obrigatório"),
    hobby: Yup.string().required("O hobby é obrigatório."),
    datanascimento: Yup.string().required("A data é obrigatória"),
});

export default schema