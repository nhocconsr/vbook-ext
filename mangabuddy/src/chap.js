function execute(url) {
    const base = 'https://s1.mbcdnv1.xyz/file/img-mbuddy/manga/';
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