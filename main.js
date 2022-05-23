//character e containerCharacter está pegando um elemento pelo nome da class e a sua devida posição na lista, caso tenha mais de um com mesmo nome.
const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];

//uma variável constante.
const VELOCITY = 10;

//SCREEN_WIDTH e SCREEN_HEIGHT estão recebendo como valor o width e height da janela.
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

//screen_width e screen_height estão recebendo o width e height que estão visíveis na tela.
const screen_width = window.innerWidth;
const screen_height = window.innerHeight;

//xPosition e yPosition são variáveis que estão representando a posição do character.
let xPosition = 500;
let yPosition = 300;

//Lista de teclas válidas.
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
//Lista de direções que o character pode  mudar.
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

//Função que recebe entrada do teclado
window.addEventListener("keydown", (event) => {
    //Variável que vai receber como valor uma tecla pressionada.
    const key  = event.key;

    //Uma variável que verifica se key é uma key válida, retornando true ou false.
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    //Se a variável keyPressedAvaible for false, ela entra na condição e faz um return para parar o código ali mesmo.
    if(!keyPressedAvaiable) return;

    //Verifica cada elemento de directions, e se entrar na condição do if, remove esse elemento da classList de character.
    directions.forEach((direction) => {
        //O if está verificando se character contém esse elemento na classList.
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    //verifica e key é igual a "ArrowUp" e se a variável yPosition é maior que o tamanho da altura menos ela mesma.
    if(key === "ArrowUp" && yPosition > (screen_height - screen_height)){
        //Adiciona na classList o novo elemento, que no caso é a nova direção
        character.classList.add("turnUp");
        //yPosition está diminuindo gradativamente o valor igual a VELOCITY.
        yPosition -= VELOCITY;
    }

    //verifica e key é igual a "ArrowDown" e se a variável yPosition é maior que o tamanho da altura menos a altura do elemento containerCharacter.
    if(key === "ArrowDown" && yPosition < (screen_height - (containerCharacter.clientHeight))){
        //Adiciona na classList o novo elemento, que no caso é a nova direção
        character.classList.add("turnDown");
        //yPosition está aumentando gradativamente o valor igual a VELOCITY.
        yPosition += VELOCITY;
    }

    //verifica e key é igual a "ArrowLeft" e se a variável xPosition é maior que o tamanho da largura menos ela mesma.
    if(key === "ArrowLeft" && xPosition > (screen_width - SCREEN_WIDTH)){
        //Adiciona na classList o novo elemento, que no caso é a nova direção
        character.classList.add("turnLeft");
        //xPosition está diminuindo gradativamente o valor igual a VELOCITY.
        xPosition -= VELOCITY;
    }

    //verifica e key é igual a "ArrowRight" e se a variável xPosition é maior que o tamanho da largura menos a largura do elemento containerCharacter.
    if(key === "ArrowRight" && xPosition < (screen_width - character.clientWidth)){
        //Adiciona na classList o novo elemento, que no caso é a nova direção
        character.classList.add("turnRight");
        //xPosition está aumentando gradativamente o valor igual a VELOCITY.
        xPosition += VELOCITY;
    }

    //muda os valores de top e left no css com yPosition e xPosition.
    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
