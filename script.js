const btn = document.querySelector("button");
let numbersRandom = [];
btn.addEventListener("click", function(ev) {
    ev.preventDefault()
    const numbers = document.getElementsByClassName("number")
    for(let i = 0; i < numbers.length; i++) {
        let randomNumber
            do {
                randomNumber = (Math.floor(Math.random() * 60) + 1);
            } while (numbersRandom.includes(randomNumber)); 
        numbersRandom[i] = randomNumber;
        let menor = (randomNumber < 10) ? numbers[i].innerText =  "0"+randomNumber: numbers[i].innerText = randomNumber
        // numbers[i].innerText =  "0"+randomNumber ;
    }
})

