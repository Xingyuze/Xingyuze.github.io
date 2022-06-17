function appendOperation(operation) {
    let container = document.getElementById("resultArea");
    container.innerHTML += operation;
}

function calculateResult() {
    let container = document.getElementById("resultArea");
    let result = eval(container.innerHTML);
    container.innerHTML = result;
}

function deleteLast() {
    let container = document.getElementById("resultArea");
    if (container.innerHTML.endsWith(" ")) {
        container.innerHTML = container.innerHTML.slice(0, -3);

    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);

    }
}

function clearAll() {
    let container = document.getElementById("resultArea");
    container.innerHTML = "";
}