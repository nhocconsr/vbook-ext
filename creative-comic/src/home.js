function execute() {
    return Response.success([{
            title: "All Comics",
            input: "updated_at",
            script: "gen.js"
        }
    ]);
}