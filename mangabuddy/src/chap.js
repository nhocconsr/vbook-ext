function execute(url) {
    const base = 'https://static.youmadcdn.xyz/manga/';
    let response = fetch(url);
    if(response.ok){
        let doc = response.text()
        let allImg = doc.match("chapImages =.'(.+)'")[1].split(',');
        let data = [];
        allImg.forEach(item => data.push(base+item))
        return Response.success(data);
    }
    return null;
}