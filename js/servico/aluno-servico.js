class AlunoServico {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome, matricula) {
        const aluno = new Aluno(nome, matricula);
        if (aluno.matricula >0) {
            return this.repositorio.inserir(aluno);
        }
        // é menor de idade. Deveria devolver erro
        return undefined;
    }

    remover(nome) {
        this.repositorio.remover(nome);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorNome(nome) {
        return this.repositorio.buscarPorNome(nome);
    }
}
