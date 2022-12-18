function execute(url) {
    const nUrl = url.replace('api.','').replace('api/v2/chapters','novel')
    var browser = Engine.newBrowser();
    browser.setUserAgent(UserAgent.android());
    browser.launch(nUrl, 5000);
    browser.callJs("var authorization = window.localStorage.getItem('mtlnation.frontend'); var auth = document.createElement('auth'); auth.innerHTML = authorization; document.body.appendChild(auth);", 100);
    let auth = browser.html().select("auth").text();
    browser.close();
    if(auth){
        let token = JSON.parse(auth.split('|')[1]).token
        let response = fetch(url,{
            method: 'GET',
            headers : {
                authorization: "JWT "+ token 
            }
        });
        if (response.ok) {
            let json = response.json();
            let content = json.data.content;  
            return Response.success(content);
        }
    }else{
        let response = fetch(url);
        if (response.ok) {
            let json = response.json();
            let content = json.data.content;  
            return Response.success(content);
        }
    }
    return null;
}