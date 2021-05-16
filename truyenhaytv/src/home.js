function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "cap-nhap-moi-ngay", script: "gen.js"},
        {title: "Hot Nhất", input: "hot-nhat", script: "gen.js"},
        {title: "Tất Cả", input: "all", script: "gen.js"},
    ]);
}