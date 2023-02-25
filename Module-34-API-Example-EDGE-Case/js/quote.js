
const loadQuote = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = (quote) => {
    const quoteContainer = document.getElementById('quote')  
    // show one randomly
    quoteContainer.innerHTML = quote.quote

}
loadQuote()