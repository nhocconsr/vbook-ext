function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://hocvientruyentranh.net/index.php/truyen/all?filter_type=latest-chapter", script: "gen.js"},
        {title: "Hoàn thành", input: "https://hocvientruyentranh.net/index.php/truyen/all?status=2", script: "gen.js"},
    ]);
}