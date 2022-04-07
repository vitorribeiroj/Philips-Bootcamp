let alunos = [{nome:'Vitor',nota:84}, {nome:'Mariana',nota:89}, {nome:'Sara',nota:92}, {nome:'Jonas',nota:65}]

function aprovados(alunos, mediaFinal){
    let alunosAprovados = []
    for(aluno of alunos){
        if(aluno.nota >= mediaFinal){
            alunosAprovados.push(aluno)
        }
    }
    
    for(alunoIndex in alunosAprovados){
        console.log(`${Number(alunoIndex)+1}. Nome: ${alunosAprovados[alunoIndex].nome}\nNota: ${alunosAprovados[alunoIndex].nota}\n`)
    }
    console.log(alunosAprovados)
}

aprovados(alunos,84)