function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "https://truyencool.net/", script: "gen.js" },
        { title: "Action", input: "https://truyencool.net/truyen-genre/action/", script: "cat.js" },
        { title: "Fantasy", input: "https://truyencool.net/truyen-genre/fantasy/", script: "cat.js" },
    ]);
}