function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://mangatoon.mobi/vi/genre/comic?type=1", script: "gen.js"},
        {title: "Hoàn thành", input: "http://mangatoon.mobi/vi/genre/hot?type=1", script: "gen.js"},
    ]);
}