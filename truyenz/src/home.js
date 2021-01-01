function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://truyenz.info", script: "top.js"},
        {title: "Manga", input: "https://truyenz.info/manga-genre/manga", script: "gen.js"}
    ]);
}