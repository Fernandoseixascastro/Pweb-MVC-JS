class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nome").value;
        const codigo = Number(document.querySelector("#codigo").value);
        const disciplina = this.disciplinaServico.inserir(nomeDisciplina, codigo);
        if (disciplina) {
            this.mostrarDisciplinaNoHTML(nomeDisciplina, codigo);
            alert('Disciplina inserida com sucesso!');
        } else {
            alert('Disciplina não inserida - reveja as obrigatoriedades!');
        }
    }

    mostrarDisciplinaNoHTML(nome, codigo) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${codigo}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDiscipliniaDaLista(codigo);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDiscipliniaDaLista(codigo) {
        this.disciplinaServico.remover(codigo);
    }

    inserirAlunoNaDisciplina(nome, idade, codigo){
        const aluno = new Aluno(nome, idade);
        this.disciplinaServico.inserirAlunoNaDisciplina(aluno, codigo);
        if(aluno){
           alert('Aluno inserido com sucesso!');
        }
        else{
           alert('Aluno não inserido - reveja as obrigatoriedades!');
        }
     }
     //No console -> disciplinaControlador.inserirAlunoNaDisciplina("João", 20, 1);
}