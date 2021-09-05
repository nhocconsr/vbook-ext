function execute() {
    return Response.success([
        { title: "Lastest", input: "latest", script: "gen.js" },
        { title: "Popular", input: "popular", script: "gen.js" },
        { title: "Top Today", input: "top/day", script: "gen.js" },
    ]);
}