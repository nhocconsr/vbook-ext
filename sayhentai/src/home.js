function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "https://sayhentai.tv", script: "gen.js" },
        { title: "Manhwa", input: "https://sayhentai.tv/genre/manhwa", script: "gen.js" },
        { title: "Manga", input: "https://sayhentai.tv/genre/manga", script: "gen.js" },
        { title: "Manhua", input: "https://sayhentai.tv/genre/manhua", script: "gen.js" },
    ]);
}