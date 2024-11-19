let counterValue = 0;

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');


function updateCounter() {

    counterDisplay.textContent = counterValue;

}

incrementButton.addEventListener("click", () => {
    counterValue++;
    updateCounter();
});

decrementButton.addEventListener("click", () => {
    counterValue--;
    updateCounter();
});

