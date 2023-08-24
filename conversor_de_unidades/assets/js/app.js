/* select the elements */
const elementInput = document.querySelector('#input');
const elementFrom = document.querySelector('#from');
const elementTo = document.querySelector('#to');
const elementOutput = document.querySelector('#output');
const elementConvertButton = document.querySelector('#convert_btn');
const elementMessage = document.querySelector('#message');

/* function to convert units */
function convert() {
    const fromValue = elementFrom.value;
    const toValue = elementTo.value;

    if (fromValue === toValue) {
        elementOutput.value = elementInput.value;
        elementMessage.textContent = '';
        return;
    }

    // convert input to meters
    let meters;

    switch (fromValue) {
        case 'm':
            meters = elementInput.value;
            break;

        case 'km':
            meters = elementInput.value * 1000;
            break;

        case 'cm':
            meters = elementInput.value / 100;
            break;

        case 'mm':
            meters = elementInput.value / 1000;
            break;
    };

    // convert meters to output unit
    let result;

    switch (toValue) {
        case 'm':
            result = meters;
            break;

        case 'km':
            result = meters / 1000;
            break;

        case 'cm':
            result = meters * 100;
            break;

        case 'mm':
            result = meters * 1000;
            break;
    };

    // display result on input
    elementOutput.value = result;

    // display result in message
    const fromLabel = elementFrom.options[elementFrom.selectedIndex].text;
    const toLabel = elementTo.options[elementTo.selectedIndex].text;
    const message = `${elementInput.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
    elementMessage.textContent = message;

    return;
};

/* events */
elementConvertButton.addEventListener('click', convert);