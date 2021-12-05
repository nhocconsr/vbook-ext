function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "http://truyentop1.com/danhsach", script: "gen.js" },
        { title: "Hoàn Thành", input: "http://truyentop1.com/danhsach", script: "com.js" },
    ]);
}