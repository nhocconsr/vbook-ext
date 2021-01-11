function execute() {
    return Response.success([
        { title: "Cập nhật", input: "http://truyentop1.com/danhsach", script: "gen.js" },
        { title: "Hoàn thành", input: "http://truyentop1.com/danhsach", script: "com.js" },

    ]);
}