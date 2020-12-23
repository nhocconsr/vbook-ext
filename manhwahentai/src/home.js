function execute() {
    return Response.success([
        {title: "Home", input: "https://manhwahentai.me/page", script: "gen.js"},
        {title: "Adult", input: "https://manhwahentai.me/webtoon-genre/adult/page", script: "gen.js"},
        {title: "Webtoons", input: "https://manhwahentai.me/webtoon-genre/webtoons/page", script: "gen.js"},
    ]);
}