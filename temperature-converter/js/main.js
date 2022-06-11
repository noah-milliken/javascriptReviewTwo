//Write your pseduo code first! 
document.querySelector('h1').addEventListener('click',cToF)

function cToF(params) {
    let temp = (document.querySelector('input').value)

    temp = temp * 1.8 + 32

    document.querySelector('h2').innerText = temp
}