function execute() {
    return Response.success([
        { title: "Lastest", input: "latest", script: "gen.js" },
    ]);
}