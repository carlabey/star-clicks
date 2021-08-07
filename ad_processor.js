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
  let adsCount = adSelector.length;
  adSelector[0].click();
  setTimeout(function(){
    let newAdsCount = adSelector.length;
    if(adsCount === newAdsCount){
      location.reload();
    }else if(newAdsCount === 0){
      console.log("All ads viewed.");
    }else{
      console.log("There are more ads to click");
      processAds(adSelector);
    }
  },5000);
  //sometimes ad would not load. when this happen add count would not go down even if we click the ad panel.
  //then we should  reload the page.
  //using recursion to process the ads.
}




