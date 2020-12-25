function execute() {
    return Response.success([
        {title: "Mới nhất", input: "https://truyendich.org/secure/items?category=&status=P&suggestion=&order=", script: "gen.js"},
        {title: "Hoàn thành", input: "https://truyendich.org/secure/items?category=&status=C&suggestion=&order=", script: "gen.js"},
        {title: "Đề cử", input: "https://truyendich.org/secure/items?category=&status=&suggestion=true&order=", script: "gen.js"}
    ]);
}