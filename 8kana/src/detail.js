function execute() {

    var doc = Http.get("https://novelfull.com/").html();

    var genre = [];
    if (doc) {
        var el = doc.select("#hot-genre-select.form-control option").text().split(' ')
        //Console.log(el)
        for (var i = 0; i < el.length; i++) {
            Console.log(el[i])
            genre.push({
                title : el[i]
            })
        }       
        return Response.success(genre);
    }
    return null;
}