let qouteNode = document.getElementById('qouteNode');
let authorNode = document.getElementById('authorNode');

document.getElementById('generatorButton').addEventListener('click', (e) => {
    e.preventDefault();

    //Clear the current text in the dom.
    qouteNode.innerText = ``;
    authorNode.innerText = ``;

    //Generate and extract the random qoute from data.
    let { quote, author } = pickFromArray(quotes);

    //Display the random qoute in the dom.
    qouteNode.innerText = `${quote}`;
    authorNode.innerText = `- ${author}`;
})