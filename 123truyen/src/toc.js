load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok){
        let doc = response.html();
        let lastc = doc.select(".l-chapters .chapter-text").get(0).text().split(' ')[1];
        let list = [];
        for (var i = 1; i <= lastc; i++) {
            list.push({
                name: "Chương " + i,
                url: url+'/chuong-'+i,
                host: BASE_URL
            })
        }
        return Response.success(list);
    }
    return null;
}