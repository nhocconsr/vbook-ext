function execute() {
    return Response.success([
        {title: "Mới nhất", input: "https://sangtacviet.com/?find=&minc=0&sort=update&tag=", script: "gen.js"},
        {title: "Nhiều like", input: "http://sangtacviet.com/?find=&minc=0&sort=upvote&tag=", script: "gen.js"},
        {title: "Xem nhiều", input: "https://sangtacviet.com/?find=&minc=0&sort=view&tag=", script: "gen.js"}
    ]);
}