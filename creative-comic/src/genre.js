function execute() {
    localStorage.clear()
    let uuid = localStorage.getItem('uuid');
    if (!uuid){
        const device = 'web_desktop';
        let response = fetch(`https://api.creative-comic.tw/guest`, {
            method: "GET", // GET, POST, PUT, DELETE, PATCH
            headers: {
                device : device,
            },
        }).json()
        localStorage.setItem('uuid', response.data);
    }  
    return Response.success(localStorage.getItem('uuid'))
}