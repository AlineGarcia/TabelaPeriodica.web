const btn = document.querySelector('#btn-html')
const titulo = document.querySelector('#titulo')
const col = document.querySelector('#btn-col')


btn.addEventListener('click', e => {
    console.log("gui", btn.textContent)
    titulo.innerHTML = 'html'
})

col.addEventListener('click', e => {
    console.log("gui", btn.textContent)
    titulo.innerHTML = 'col'
})