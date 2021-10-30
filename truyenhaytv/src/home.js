function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "/truyen-moi-cap-nhat.html", script: "gen.js"},
        {title: "Top Tuần", input: "/top-tuan.html", script: "gen.js"},
        {title: "Truyện Mới", input: "/truyen-tranh-moi.html", script: "gen.js"},
    ]);
}