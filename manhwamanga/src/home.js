function execute() {
    return Response.success([
        { title: "Lastest", input: "https://manhwamanga.net/latest-updates", script: "gen.js" },
        { title: "New manga", input: "https://manhwamanga.net/new", script: "gen.js" },
        { title: "Completed", input: "https://manhwamanga.net/completed", script: "gen.js" },
    ]);
}