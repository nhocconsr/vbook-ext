function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.text()
        //let server = doc.match('mainServer = "(.+)"')[1].replace('//','https://');
        let allImg = doc.match("chapImages =.'(.+)'")[1].split(',');
        // let data = [];
        // allImg.forEach(item => data.push(server+item))
        return Response.success(allImg);
    }
    return null;
}