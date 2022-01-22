function execute(key, page) {
//     if (!page) page = "1";
//     const doc = Http.get('https://m.truyencv.vn/search').params({q:key,page: page}).html();
//     const el = doc.select("div#e160ztl90")
//     const data = [];
//     for (var i = 0; i < el.size(); i++) {
//         var e = el.get(i);
//         data.push({
//             name: e.select("h3").first().text(),
//             link: e.select("a").first().attr("href"),
//             cover: e.select("img").first().attr("src"),
//             description: null , 
//             host: "https://m.truyencv.vn",
//         })
//     }

//     return Response.success(data)
}