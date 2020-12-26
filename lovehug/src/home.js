function execute() {
    return Response.success([
        {title: "Lastest", input: "https://lovehug.net/manga-list.html?sort=last_update", script: "gen.js"},
        {title: "Most views", input: "https://lovehug.net/manga-list.html?sort=views", script: "gen.js"},
    ]);
}