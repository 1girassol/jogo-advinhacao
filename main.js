const screen1 = document.querySelector (".screen1")
const screen2 = document.querySelector (".screen2")
const numberRandom = Math.round(Math.random() * 10)
let xAttempts = 1;

function handleClick(event){
    event.preventDefault () //inibe o padrão do element/node que em button é recarregar a página

    const inputNumber = document.querySelector ("#inputNumber") //pega o id através do seletor CSS

    if (Number(inputNumber.value == numberRandom)) {
        screen1.classList.add ("hide") //adicionou a classe hide que "desliga" o display
        screen2.classList.remove ("hide") //removeu a classe hide que "desliga" o display

        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas` 
    }

    inputNumber.value = "" //re atribuindo o valor para vazio
    xAttempts++

}

let btnTry = document.querySelector ("#btnTry").addEventListener ('click', handleClick) //adiciona uma reação ao evento, aqui ao clicar executa a função handlecli que já estava declarada

let btnReset = document.querySelector ("#btnReset").addEventListener('click', function(){
    screen1.classList.remove ("hide") 
        screen2.classList.add ("hide") 

})


