function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}
function main() {
    const paragraph = document.createElement("p");
    const text = document.createTextNode("Welcome Holberton!");
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    const spookyButton = document.createElement("button");
    const spookyText = document.createTextNode("Spooky");
    spookyButton.appendChild(spookyText);
    document.body.appendChild(spookyButton);

    const darkButton = document.createElement("button");
    const darkText = document.createTextNode("Dark mode");
    darkButton.appendChild(darkText);
    document.body.appendChild(darkButton);

    const screamButton = document.createElement("button");
    const screamText = document.createTextNode("Scream mode");
    screamButton.appendChild(screamText);
    document.body.appendChild(screamButton);

    spookyButton.addEventListener("click", changeMode(9, "bold", "uppercase", "pink", "green"));
    darkButton.addEventListener("click", changeMode(12, "bold", "capitalize", "black", "white"));
    screamButton.addEventListener("click", changeMode(12, "normal", "lowercase", "white", "black"));
}
main();