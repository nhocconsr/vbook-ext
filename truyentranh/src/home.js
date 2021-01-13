function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "https://truyentranh.net/comic", script: "gen.js"},
        {title: "Truyện Mới", input: "https://truyentranh.net/comic-latest", script: "gen.js"},
    ]);
}