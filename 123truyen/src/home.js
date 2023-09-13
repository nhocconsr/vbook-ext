load('config.js');
function execute() {
    return Response.success([
        {title: "Cập Nhật", input: BASE_URL + "/danh-sach/truyen-moi", script: "gen.js"},
        {title: "Truyện Full", input: BASE_URL + "/danh-sach/truyen-full", script: "gen.js"},
        {title: "Truyện HOT", input: BASE_URL + "/danh-sach/truyen-hot", script: "gen.js"},
    ]);
}