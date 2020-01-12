const buttons = document.getElementsByTagName('button');
const container = document.getElementById('container');

const getDataText = element => element.dataset.text;

[...buttons].forEach(button => {
    button.addEventListener('click', event => {
        const dataText = getDataText(button);
        container.innerText = dataText;
    });
});

