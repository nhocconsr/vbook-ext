const device = 'web_desktop';
function getUuid(){
    let uuid = localStorage.getItem('uuid');
    if (!uuid){
        let response = fetch(`https://api.creative-comic.tw/guest`, {
            method: "GET", // GET, POST, PUT, DELETE, PATCH
            headers: {
                device : device,
            },
        }).json()
        localStorage.setItem('uuid', response.data);
    }  
    return localStorage.getItem('uuid')
}

let BASE_URL = "https://www.creative-comic.tw";
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}