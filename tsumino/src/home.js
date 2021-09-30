function execute() {
    return Response.success([
        { title: "Last Update", input: "book", script: "gen.js" },
    ]);
}