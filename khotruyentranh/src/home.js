function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://khotruyentranhonline.com/danh-sach-truyen/", script: "gen.js"},
        {title: "Ngôn tình", input: "https://khotruyentranhonline.com/the-loai/ngon-tinh", script: "cat.js"},
        {title: "Đam mỹ", input: "https://khotruyentranhonline.com/the-loai/dam-my", script: "cat.js"},
        {title: "Manhwa", input: "https://khotruyentranhonline.com/the-loai/manhwa", script: "cat.js"},
    ]);
}