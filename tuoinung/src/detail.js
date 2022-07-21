function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select(".trangcon h1").first().text(),
        cover: null,
        author: null,
        description: null,
        host: "https://tuoinung.com"
    });
}
