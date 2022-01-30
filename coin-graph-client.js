function getBTCData() {
    return new Promise((resolve, reject) =>{
        var req = new XMLHttpRequest();
        req.open('GET', 'https://api.coinstats.app/public/v1/charts?period=1m&coinId=bitcoin', true);
        req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if(req.status == 200)
                resolve(JSON.parse(req.responseText));
            else
                reject("Error loading page\n");
        }
        };
        req.send(null); 
    });
    
}