// Position of the price in array
const PriceKey = 1; 


var result = document.getElementById("result");
var information = document.getElementById("information");
var gif = document.getElementById("gif");
(async ()=>{
    let data = await getBTCData();
    if (data){
        let difference = calculateDifference(data.chart[0][PriceKey], data.chart[data.chart.length-1][PriceKey]);
        
        if (difference < 0){
            result.innerText = "Yes you can";
            information.innerText = `They lose ${Math.abs(difference)}% of their money this month`;
        }else{
            result.innerText = "No yet";
            information.innerText = `They win ${Math.abs(difference)}% of their money this month`;
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