class Aluno {
    constructor(nome, matricula) {
        this._nome = nome;
        this._matricula = matricula;
    }

    get nome() {
        return this._nome;
    }


    set nome(novoNome) {
        this._nome = novoNome;
    }

    get matricula() {
        return this._matricula;
    }


}
