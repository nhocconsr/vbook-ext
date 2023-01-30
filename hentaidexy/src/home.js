function execute() {
    return Response.success([
        { title: "Lastest", input: "-updatedAt", script: "gen.js" },
        { title: "Most Popular", input: "-views", script: "gen.js" },
    ]);
}