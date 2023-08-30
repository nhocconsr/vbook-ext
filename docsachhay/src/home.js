function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "all", script: "gen.js"},
        {title: "Nên đọc", input: "https://docsachhay.net/cat/tam-ly-ky-nang-song/xem-nhieu-nhat-thang", script: "top.js"},
    ]);
}