const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];


const VELOCITY = 10;

const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;
const screen_width = window.innerWidth;
const screen_height = window.innerHeight;

let xPosition = 500;
let yPosition = 300;

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

window.addEventListener("keydown", (event) => {
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })


    if(key === "ArrowUp" && yPosition > (screen_height - screen_height)){
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown" && yPosition < (screen_height - (containerCharacter.clientHeight))){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft" && xPosition > (screen_width - SCREEN_WIDTH)){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight" && xPosition < (screen_width - character.clientWidth)){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
