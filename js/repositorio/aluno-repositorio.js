class AlunoRepositorio {
    constructor() {
        this._alunos = [];
    }

    inserir(aluno) {
        this._alunos.push(aluno);
        return aluno;
    }

    remover(nome) {
        const indxRemocao = this._alunos.indexOf(aluno => aluno.nome === nome);
        this._alunos.splice(indxRemocao, 1);
    }

    buscarPorNome(matricula) {
        return this._alunos.filter(aluno => aluno.matricula === matricula);
    }
}
