class Disciplina {
    constructor(  nome, codigo){
        this._codigo = codigo;
        this._nome = nome;
        this._aluno = [];
    }

    get codigo() {
        return this._codigo;
    }
   
    get aluno() {
        return this._aluno;
    }

    set aluno(aluno) {
        this._aluno = aluno;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    // não é necessário inserir o set código - pois é um atributo que não pode ser alterado

}