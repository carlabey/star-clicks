// ==UserScript==
// @name         star-clicks ad process
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       carl abey
// @match        https://www.star-clicks.com/portal/ads
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//This is used to process ads in the platform
//1)Get First Ad
//2)Click Ad
//3)Go to opened tab
//3.1)Stay untill page loading
//3.2)Close the page
//4)Focus Ad page
//5)Check Ads
//5.1)If have ads, go to step 2
//5.2)If no ads, finish the process.
    let adSelector = document.querySelectorAll("#BasicModulem9_11 > div.panel-body > a");

    function processAds(adSelector){
        console.log("Ads processing started");
        console.log(adSelector);
        let adsCount = adSelector.length;
        adSelector[0].click();
        console.log("Ads count is ",adsCount);
        setTimeout(function(){
            let newAdsCount = adSelector.length;
            if(adsCount === newAdsCount && newAdsCount === 0){
                console.log("Ads count didnt changed, reload page.");
                location.reload();
            }else if(newAdsCount === 0){
                console.log("All ads viewed.");
                return;
            }else{
                console.log("There are more ads to click");
                processAds(adSelector);
            }
        },5000);
        //sometimes ad would not load. when this happen add count would not go down even if we click the ad panel.
        //then we should  reload the page.
        //using recursion to process the ads.
    };

    setTimeout(processAds(adSelector),5000);
    
})();
