let quote = document.getElementById('quote');
let author = document.getElementById('author');

console.log(quote);
console.log(author);
console.log(btn);

async function getQuote() {
    try {
        let result = await fetch('https://dummyjson.com/quotes/random')

        let data = await result.json();

        console.log(data);
        
        quote.innerHTML = data.quote;
        author.innerHTML = data.author;
        
    } catch (error) {
        console.log("Error : " + error);
        
    }
}

getQuote(); 