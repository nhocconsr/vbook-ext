function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://khotruyentranhhot.com/danh-sach-truyen/", script: "gen.js"},
        {title: "Ngôn tình", input: "https://khotruyentranhhot.com/the-loai/ngon-tinh", script: "cat.js"},
        {title: "Đam mỹ", input: "https://khotruyentranhhot.com/the-loai/dam-my", script: "cat.js"},
        {title: "Manhwa", input: "https://khotruyentranhhot.com/the-loai/manhwa", script: "cat.js"},
    ]);
}