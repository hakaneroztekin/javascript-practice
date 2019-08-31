let clickCounter = 1;

function changeText(id) {
    document.getElementById(id).innerText = printText();
    clickCounter++;
}

function printText() {
    switch(clickCounter) {
        case 1:
            return "Hello there!";
        case 2:
            return "The taverna is about to be closed.";
        case 3:
            return "See you!";
        case 4:
            clickCounter = 0;
            return "Start again?";
    }

}