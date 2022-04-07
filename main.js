// Position of the price in array
const PriceKey = 1; 
const GifCount = 7;

var result = document.getElementById("result");
var information = document.getElementById("information");
var gif = document.getElementById("gif");
(async ()=>{
    let data = await getBTCData();
    if (data){
        let difference = calculateDifference(data.chart[0][PriceKey], data.chart[data.chart.length-1][PriceKey]);
        let title, informationTemplate, tag;
        if (difference < 0){
            title = "Yes you can";
            informationTemplate = "Bitcoin has lost {number}% of its value this month";
            tag = "happy";
        }else{
            title = "Not now";
            informationTemplate = "Bitcoin hasn't lost any of its value this month";
            tag = "sad";
        }
        
        gif.src = getRandomGif(tag);
        result.innerText = title;
        createCounter(informationTemplate, Math.abs(difference), (counter) => information.innerText = counter)
        
    }else{
        console.error("Data is null");
    }
})()

function calculateDifference(before, after){
    let actualPercentage = after * 100 / before;
    let difference = actualPercentage - 100;
    return Math.round(difference * 100) / 100 ;
}


function getRandomGif(tag){
    let index = Math.floor(Math.random() * GifCount);
    return `./gifs/${tag}/${index}.gif`;
}

async function createCounter(stringTemplate, valueLimit, callback){
    for (let current = 0; current < valueLimit; current++) {
        let string = stringTemplate.replace("{number}", current);
        callback(string);
        await delay(50);
    }
    // last line for decimals
    let string = stringTemplate.replace("{number}", valueLimit);
    callback(string);
}

const delay = ms => new Promise(res => setTimeout(res, ms));