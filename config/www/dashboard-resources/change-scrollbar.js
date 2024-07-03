// Define your CSS as a string
const css = `
html {
    scrollbar-color: #7080908E #FFFFFF00;
}
::-webkit-scrollbar-track {
    background: #FFFFFF00;
}
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-thumb {
    background: #7080908E;
    width: 5px;
}
`;

// Create a new style element
const style = document.createElement('style');

// Set the innerHTML of the style element to the CSS string
style.innerHTML = css;

// Append the style element to the parent node (head of the document in this case)
document.head.appendChild(style);
