function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://khotruyentranhonline.net/danh-sach-truyen/", script: "gen.js"},
        {title: "Ngôn tình", input: "https://khotruyentranhonline.net/the-loai/ngon-tinh", script: "cat.js"},
        {title: "Đam mỹ", input: "https://khotruyentranhonline.net/the-loai/dam-my", script: "cat.js"},
        {title: "Manhwa", input: "https://khotruyentranhonline.net/the-loai/manhwa", script: "cat.js"},
    ]);
}