import Card from "./components/Card/index.js";
var element;
function runOnLoad()
{
    
    
    // create a container for the cards to go in
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);

    var cards = [
        {
            title:'NPM',
            question:'What is the command to install a npm package?',
            answer:'npm i PACKAGENAME'
        },
        {
            title:'Javascript',
            question:'What is x = 1 + "2"?',
            answer:'x = "12"'
        },
        {
            title:'NPM',
            question:'What command compiles to the dist folder?',
            answer:'npm run build'
        },
        {
            title:'Javascript',
            question:'Should you use single quotes (\') or double quotes (")?',
            answer:'Either! They both work.'
        },
        {
            title:'Python',
            question:'What command runs code as a local server?',
            answer:'python -m http.server 8000 --bind 0.0.0.0'
        },
        {
            title:'Javascript',
            question:'How do you write to the console?',
            answer:'console.log("your string");'
        }
    ]

    for (var i = 0; i < cards.length; i++) {
        let card = new Card(cards[i]);
        element.append(card.render());
    }
}

function onClick() {
    console.log("clicked!");
    var newTask = new Task({content:input.value,done:false});
    element.appendChild(newTask.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);