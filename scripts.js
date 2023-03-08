let alunos = []

let aluno = class{
    constructor(nome, email, telefone, cidade){
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.cidade = cidade;
    }
}

let Cleyson = new aluno("Cleyson", "cleyson@gmail.com", "(85) 9 1234-5678", "Eusébio")
let Gleidson = new aluno("Gleidson", "gleidson@gmail.com", "(85) 9 8782-6969", "Fortaleza")
let Natan = new aluno("Natan", "natan@gmail.com", "(85) 3774-5966", "Guajeru")



alunos.push(Cleyson, Gleidson, Natan)


function listarAluno(){
    let tabela = document.querySelector('#tabela')
    tabela.innerHTML = ''
    for(let i = 0; i < alunos.length; i++){
        tabela.innerHTML += `
                            <tr>
                                <th scope="row">${alunos[i].nome}</th>
                                <td>${alunos[i].email}</td>
                                <td>${alunos[i].telefone}</td>
                                <td>${alunos[i].cidade}</td>
                                <td><button class="btn btn-warning">Editar</button></td>
                                <td><button class="btn btn-danger">Deletar</button></td>
                            </tr>
        `
    }
} listarAluno()


function adicionarAluno(){
    event.preventDefault()
    let newAluno = new aluno(nome.value, email.value, telefone.value, cidade.value)
    alunos.push(newAluno)
    listarAluno()
}