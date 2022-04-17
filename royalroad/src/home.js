function execute() {
    return Response.success([
        {title: "Latest updates", input: "https://www.royalroad.com/fictions/latest-updates", script: "gen.js"},
        {title: "Rising stars", input: "https://www.royalroad.com/fictions/rising-stars", script: "gen.js"},
        {title: "Best completed", input: "https://www.royalroad.com/fictions/complete", script: "gen.js"},
        {title: "Best ongoing", input: "https://www.royalroad.com/fictions/active-popular", script: "gen.js"}
        
    ])
}