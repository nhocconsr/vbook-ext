function execute() {
    return Response.success([
        { title: "玄幻", input: "xuanhuanxiaoshuo/1_", script: "gen.js" },
        { title: "修真", input: "xiuzhenxiaoshuo/2_", script: "gen.js" },
        { title: "都市", input: "dushixiaoshuo/3_", script: "gen.js" },
        { title: "穿越", input: "chuanyuexiaoshuo/4_", script: "gen.js" },
        { title: "网游", input: "wangyouxiaoshuo/5_", script: "gen.js" },
    ]);
}