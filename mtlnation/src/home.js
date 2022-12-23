function execute() {
    return Response.success([
        { title: "Lastest Update", input: "chapter_new", script: "gen.js" },
        { title: "New Novel", input: "novel_new", script: "gen.js" },
        { title: "Monthly Ranking", input: "views_month", script: "gen.js" },
    ]);
}