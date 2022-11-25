function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "https://sayhentai.me", script: "gen.js" },
        { title: "Manhwa", input: "https://sayhentai.me/genre/manhwa", script: "gen.js" },
        { title: "Manga", input: "https://sayhentai.me/genre/manga", script: "gen.js" },
        { title: "Manhua", input: "https://sayhentai.me/genre/manhua", script: "gen.js" },
    ]);
}