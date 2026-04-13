const resultElement = document.getElementById("result");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const statusMessage = document.getElementById("status-message");

let count = 0;

function updateDisplay() {
    resultElement.textContent = String(count);
    resultElement.classList.remove(
        "result--positive",
        "result--negative",
        "result--zero"
    );

    if (count > 0) {
        resultElement.classList.add("result--positive");
    } else if (count < 0) {
        resultElement.classList.add("result--negative");
    } else {
        resultElement.classList.add("result--zero");
    }

    incrementButton.disabled = count >= 10;
    decrementButton.disabled = count <= -10;

    if (count === 10 || count === -10) {
        statusMessage.textContent = "Вы достигли экстремального значения";
    } else {
        statusMessage.textContent = "";
    }
}

incrementButton.addEventListener("click", () => {
    if (count < 10) {
        count += 1;
        updateDisplay();
    }
});

decrementButton.addEventListener("click", () => {
    if (count > -10) {
        count -= 1;
        updateDisplay();
    }
});

updateDisplay();
