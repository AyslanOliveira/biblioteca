const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const bookValue = book.value.trim()
    const autorValue = autor.value.trim()
    const editdValue = edit.value.trim()
    const explValue = expl.value.trim()

    if(bookValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(book, 'Esqueceu o nome do Livro.')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(book)
    }

    if(autorValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(autor, 'Esqueceu o nome do Autor')
    
        setErrorFor(autor, 'Esqueceu o nome do Autor.')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(autor)
    }
   
    if(editdValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(edit, 'Preencha esse campo')
    
        setErrorFor(edit, 'Esquceu o nome da Editora')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(edit)
    }

    if(explValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(expl, 'Preencha esse campo')
    
        setErrorFor(expl, 'Equeceu o número de Exemplares.')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(expl)
    }
    

    

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

