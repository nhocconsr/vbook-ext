function execute() {
    return Response.success([
        {title: "Update", input: "-newest_chapter_created_at", script: "gen.js"},
    ]);
}