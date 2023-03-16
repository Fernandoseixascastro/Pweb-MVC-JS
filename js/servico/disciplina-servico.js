class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        
        if (codigo > 0) {
            const disciplina = new Disciplina(nome, codigo);
            return this.repositorio.inserir(disciplina);
        }
        else {
            return alert("Código inválido");
        }
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorCodigo(codigo) {
        return this.repositorio.buscarPorCodigo(codigo);
    }

    inserirAlunoNaDisciplina(aluno, codigo){
        
        const disciplina = this.repositorio.buscarPorCodigo(codigo);
        return this.repositorio.inserirAlunoNaDisciplina(aluno, disciplina);
    }

}
