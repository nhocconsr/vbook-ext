function execute() {
    return Response.success([
        {title: "Truyện mới", input: "https://lxhentai.com/story/index.php", script: "gen.js"},
        {title: "Truyện hot", input: "https://lxhentai.com/story/index.php", script: "hot.js"},
    ]);
}