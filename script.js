const input = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

checkButton.addEventListener('click', () => {
    if (input.value === "") {
        alert('Please provide a phone number');
        return
    }
    
    checkNumber(input.value);
})

clearButton.addEventListener('click', () => {
    results.textContent = '';
    input.value = '';
});

const checkNumber = (str) => { 
    const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    return results.textContent = regex.test(str) 
        ? `Valid US number: ${str}`
        : `Invalid US number: ${str}`;
}