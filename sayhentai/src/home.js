function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "https://sayhentai.net", script: "gen.js" },
        { title: "Manhwa", input: "https://sayhentai.net/genre/manhwa", script: "gen.js" },
        { title: "Manga", input: "https://sayhentai.net/genre/manga", script: "gen.js" },
        { title: "Manhua", input: "https://sayhentai.net/genre/manhua", script: "gen.js" },
    ]);
}