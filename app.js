
let quotes=["To condense fact from the vapor of nuance","The brightest light casts the darkest shadow",
"It has no eyes. Zack, why doesn’t it have any eyes?",
"Beef had hit $300 a kilo. Not that he could recall the last time he’d tasted real beef"]


let generateBtn=document.querySelector(".generate-button")//document.getElementsByClassName("generate-button")


function generateQuote(){
    var quoteGeneree = quotes[Math.floor(Math.random() * quotes.length)];
    const quote=document.querySelector(".quote") 
    quote.innerHTML=`<p> ${quoteGeneree}</p>`

    
}

generateBtn.addEventListener("click", generateQuote);