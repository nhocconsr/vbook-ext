function execute() {
    return Response.success([
        { title: "Lastest", input: "newest", script: "gen.js" },
        { title: "Hot", input: "topview", script: "gen.js" },
    ]);
}