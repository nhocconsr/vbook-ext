function execute(url) {
let id = url.replace(".html","").replace("https://www.250sy.net/","").split("/")
// console.log(id[1])
// console.log(id[2])
// console.log(id[3])
//https://www.250sy.net/t/t1.php?id=/0&did=2&bid=4502519&page=0
let url2 = 'https://www.250sy.net/t/t1.php?id=/' + id[1] + '&did=' + id[2] + '&bid=' + id[3]
// console.log(url2)

let response = fetch(url2);
    if (response.ok) {
        let doc = response.html();
        doc.select('font').remove();
        doc.select('center').remove();
        doc.select('script').remove();
        doc.select("#guild").remove();
        doc.select("#shop").remove();
        let htm = doc.select("body").html();
        htm = htm.replace(/\<\a(.*?)<\/a>/g, '').replace(/&(nbsp|amp|quot|lt|gt);/g, "").replace(/(<br\s*\/?>){2,}/g, '<br>').replace(/ ?\n/g, "<br>").replace(/<a[^>]*>([^<]+)<\/a>/g, '');
        return Response.success(htm.replace(/<br\s*\/?>|\n/g, "<br><br>"));
    }
    return null;
}