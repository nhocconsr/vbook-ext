function execute() {
    const doc = Http.get('https://k.2kxs.org')
    return Response.success([
        { title: "玄幻 ", input: "https://k.2kxs.org/list/1-1.html", script: "gen.js" },
        { title: "仙侠 ", input: "https://k.2kxs.org/list/2-1.html", script: "gen.js" },
        { title: "言情 ", input: "https://k.2kxs.org/list/3-1.html", script: "gen.js" },
        { title: "历史 ", input: "https://k.2kxs.org/list/4-1.html", script: "gen.js" },
        { title: "网游 ", input: "https://k.2kxs.org/list/5-1.html", script: "gen.js" },
        { title: "科幻  ", input: "https://k.2kxs.org/list/6-1.html", script: "gen.js" },
        { title: "恐怖  ", input: "https://k.2kxs.org/list/7-1.html", script: "gen.js" },
        { title: "其他  ", input: "https://k.2kxs.org/list/8-1.html", script: "gen.js" },

    ]);
}