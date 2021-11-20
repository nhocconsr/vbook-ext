function execute(url) {
    const base = 'https://static.youmadcdn.xyz/manga/';
    var doc = Http.get(url).string();
    var allImg = doc.match("chapImages =.'(.+)'")[1].split(',');
    var data = [];
    allImg.forEach(item => data.push(base+item))
    return Response.success(data);
}