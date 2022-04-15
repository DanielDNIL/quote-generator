// Quotes Array
let quotes = [
     "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking. - Albert Einstein",
     "Whether you think you can, or you think you can't you're right. - Henry Ford",
     "Judge a man by his questions rather than by his answers. - Voltaire",
     "We are addicted to our thoughts. We cannot change anything if we cannot change our thinking. - Santosh Kalwar",
     "The mind is not a vessel to be filled, but a fire to be kindled. - Plutarch"
]

function new_quote() {
     let random_number = Math.floor(Math.random() * (quotes.length));
     document.getElementById("quote-display").innerHTML = quotes[random_number];
}