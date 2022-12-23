function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "story-newest", script: "gen.js"},
        {title: "Truyện Dịch", input: "1", script: "source.js"},
        {title: "Truyện Cvedit", input: "2", script: "source.js"},
        {title: "Truyện Sáng Tác", input: "3", script: "source.js"}
    ]);
}