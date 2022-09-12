const registerServiceWorker = async()=>{
    //check if browser supports service workers
    if('serviceWorker' in navigator){
       try {
        //register service worker
        const registeration = await navigator.serviceWorker.register('./sw.js')
        
        // log when service worker is installed
        if(registeration.installing){
           //console.log('service worker is installing');
        } 
        //log when service worker is waiting
        //waiting to be activated and replace any old service worker
        else if(registeration.waiting){
            //console.log('service worker is waiting');
        }
        // log when service worker is active
        // has replaced old service worker is there is any
        else if(registeration.active){
            //console.log('service worker is active')
        }
    } catch (error) {
        console.log(`Service worker failed with error: ${error}`)
       }
    }
}




registerServiceWorker();