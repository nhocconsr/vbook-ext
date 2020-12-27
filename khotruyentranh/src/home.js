function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://khotruyentranh.com/danh-sach-truyen/", script: "gen.js"},
        {title: "Ngôn tình", input: "https://khotruyentranh.com/the-loai/ngon-tinh", script: "cat.js"},
        {title: "Đam mỹ", input: "https://khotruyentranh.com/the-loai/dam-my", script: "cat.js"},
        {title: "Manhwa", input: "https://khotruyentranh.com/the-loai/manhwa", script: "cat.js"},
    ]);
}