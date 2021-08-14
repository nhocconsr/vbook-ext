function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://truyen88.pro/danh-sach/truyen-moi", script: "gen.js"},
        {title: "Truyện hot", input: "https://truyen88.pro/danh-sach/truyen-hot", script: "gen.js"},
        {title: "Truyện full", input: "https://truyen88.pro/danh-sach/truyen-full", script: "gen.js"},
    ]);
}