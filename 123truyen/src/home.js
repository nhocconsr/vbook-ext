function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "https://123truyen.com/danh-sach/truyen-moi", script: "gen.js"},
        {title: "Truyện Full", input: "https://123truyen.com/danh-sach/truyen-full", script: "gen.js"},
        {title: "Truyện HOT", input: "https://123truyen.com/danh-sach/truyen-hot", script: "gen.js"},
    ]);
}