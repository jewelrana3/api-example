

const loadQuote =()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => loadQuote2(data))
}

const loadQuote2 = name =>{
    const block = document.getElementById('quote');
    console.log(name)
    block.innerHTML = name.quote;
}

loadQuote()
