function execute(url) {
    var doc = Http.get(url).html();
    if (doc) {
        doc.select(".title-chap").remove();
        var htm = doc.select(".reading").html();
        if (htm.length < 100) {
            var password = doc.select("#password").attr("value");
            var postId = doc.select("#data").attr("data-id");
            if (password) {
                htm = Http.post("https://truyenwki.com/wp-admin/admin-ajax.php")
                    .params({
                        'action': "user_pass_chap",
                        'post_id': postId,
                        'password': password
                    }).string()
                    .replace(/<[a-z]+>[a-z]+<\/[a-z]+>/g, '')
                    .replace(/<style>[a-z]+{font-size: 0px}<\/style>/g, '')
                    .replace(/<span style=\"color:#FFFFFF;font-size:6px\">[a-z]<\/span>/g, '')
                    .replace(/<[a-z]+>(.*?)<\/[a-z]+>/g, '$1')
                    .replace(/<img .*?>/g,"");
            }
        }
        return Response.success(htm);
    }
    return null;
}