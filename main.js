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
        
        if (difference < 0){
            result.innerText = "Yes you can";
            information.innerText = `Bitcoin has lost ${Math.abs(difference)}% of its value this month`;
            gif.src = getRandomGif("happy");
        }else{
            result.innerText = "Not now";
            information.innerText = `Bitcoin has gained ${Math.abs(difference)}% of its value this month`;
            gif.src = getRandomGif("sad");
        }
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