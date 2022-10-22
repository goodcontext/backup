const numberOfPeople = document.querySelector(".number-of-people");
const previousWord = document.querySelector(".previous-word");
const inputWord = document.querySelector("#input-word");
const submitButton = document.querySelector("#submit-button");

let number = parseInt(prompt("How many people are participating in the game?"));
let word;
let flag = true;
let flag2 = true;

(function() {
    while (flag) {
        flag = false;
        if(number) {
            numberOfPeople.textContent = number;
            
            const onClickSubmitButton = (e) => {
                e.preventDefault();
                word = inputWord.value;
                
                if (inputWord.value.length < 3) {
                    alert("Please enter 3 characters.")
                } else if ((previousWord.textContent === "") || (previousWord.textContent[previousWord.textContent.length - 1] === word[0])) {
                    previousWord.textContent = word;
                    inputWord.value = "";
                    inputWord.focus();
                    flag = true;
                } else {
                    alert("GAME_OVER");
                    inputWord.value = "";
                    previousWord.textContent = "";
                    numberOfPeople.textContent = "";
                    number = null;
                    submitButton.removeEventListener("click", onClickSubmitButton);
                    return;
                }
            }

            submitButton.addEventListener("click", onClickSubmitButton);
        } else {
            number = parseInt(prompt("Please enter a number."));
            if (number && flag2) {
                numberOfPeople.textContent = number;
                flag = true;
                flag2 = false;
            }
        }
    }
})()