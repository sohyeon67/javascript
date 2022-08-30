const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author: "Lilly Pulitzer"
    },
    {
        quote: "To love and win is the best thing. To love and lose, is the next best thing.",
        author: "William Thackeray"
    },
    {
        quote: "If you would be loved, love and be lovable.",
        author: "Benjamin Franklin"
    },
    {
        quote: "The way to love anything is to realize that it might be lost.",
        author: "G.K. Chesterton"
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder"
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Thomas Edison"
    },
    {
        quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
        author: "Reid Hoffman"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];  //quotes.length대신 10쓰면 하드코딩..

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} - `;