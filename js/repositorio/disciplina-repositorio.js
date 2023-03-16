class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(codigo) {
        const indxRemocao = this._disciplinas.findIndex(
            disciplina =>
                disciplina.codigo === codigo);

        this._disciplinas.splice(indxRemocao, 1);
    }

    listar() {
        return this._disciplinas;
    }

    buscarPorCodigo(codigo) {
        return this._disciplinas.find(disciplina => disciplina.codigo === codigo);
    }

    inserirAlunoNaDisciplina(aluno, disciplina){
        const listaAluno = disciplina.aluno;
        listaAluno.push(aluno);
        disciplina.aluno = listaAluno;
        // utilizar no conosle para inserir o aluno na disciplina

    }

}
