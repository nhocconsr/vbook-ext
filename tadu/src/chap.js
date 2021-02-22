function execute(url) {
    var adoc = Http.get(url).html();
    var aurl = adoc.select("input[id=bookPartResourceUrl]").first().attr("value")
    var doc = Http.get(aurl).string();
    const regex = /'[\s\S]+'/g;
    var content = regex.exec(doc)[0];
    content = content.replace("'",'');
    return Response.success(content);
}