function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://truyenz.info", script: "top.js"},
        {title: "Manga", input: "https://truyenz.info/manga-genre/manga", script: "gen.js"},
        {title: "Manhwa", input: "https://truyenz.info/manga-genre/manhwa", script: "gen.js"},
        {title: "Manhua", input: "https://truyenz.info/manga-genre/manhua", script: "gen.js"}
    ]);
}