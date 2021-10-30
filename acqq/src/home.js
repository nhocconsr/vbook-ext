function execute() {
    return Response.success([
        {title: "飙升榜", input: "rise", script: "rank.js"},
        {title: "畅销榜", input: "pay", script: "rank.js"},
        {title: "真香榜", input: "hot", script: "rank.js"},
    ]);
}