import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const url = process.env.NEXT_PUBLIC_wc_url;
const consumerKey = process.env.NEXT_PUBLIC_wc_consumer_key;
const consumerSecret = process.env.NEXT_PUBLIC_wc_consumer_secret;

//check if url,consumerKey and consumerSecret has value 
if(!url || !consumerKey || !consumerSecret){
    console.error("Value for wc_url or wc_consumer_key or wc_consumer_secret missen in .env.local")
}

const api = new WooCommerceRestApi({
    url: url,
    consumerKey: consumerKey,
    consumerSecret: consumerSecret,
    version: "wc/v3"
  });



export default api;