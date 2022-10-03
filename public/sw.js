const  cacheName = `site-cache-v2`;



//listener when service worker is installing
self.addEventListener('install',(event)=>{
    event.waitUntil(
        console.log('installing for the third time')
    )
})
 
// listener when service worker is active
self.addEventListener('activate',(event)=>{

    //delete old cache
    event.waitUntil(
        event.waitUntil(deleteOldCaches())

    )
})

//listener when websites request any resource: html,css, js, api request...
self.addEventListener('fetch',(event)=>{
   event.respondWith(
    (async function(){
        //when there is web request 
        //open our cache with the name site-cache
        const cache = await caches.open(cacheName)

        // check if the requested resources are already cached in the cache above

        const cachedFiles = await cache.match(event.request);
         
        //if already cached return them to the user 
        if(cachedFiles){
            return cachedFiles;
        }else{
            //continue ahead and fetch them
            const response = await fetch(event.request)

            //update the cache with the newly fetched data
            //only clone GET requests 
            //also block request coming from chrome extension
            const requestUrl = getUrlBase(event.request.url)
            const protocol = requestUrl.protocol;
            const allowedRequest = ['http:','https:']
            
      
            if(event.request.method == "GET" && allowedRequest.includes(protocol)){
                await cache.put(event.request,response.clone())
            }
            

            // // return the original response for user to able to see

            return response;
        }
    }())
   )
})



const deleteCache = async (key) => {
    await caches.delete(key);
  };
  
  const deleteOldCaches = async () => {
    const cacheKeepList = [cacheName];
    const keyList = await caches.keys();
    const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
    await Promise.all(cachesToDelete.map(deleteCache));
  };



const getUrlBase = (url)=>{
    try{
       return  new URL(url)
    }catch(e){
        console.log(e)
    }
}