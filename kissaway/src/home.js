function execute() {
    return Response.success([
        {title: "Lastest", input: "https://klmanga.com/manga-list.html?sort=last_update", script: "gen.js"},
        {title: "Most views", input: "https://klmanga.com/manga-list.html?sort=views", script: "gen.js"},
    ]);
}