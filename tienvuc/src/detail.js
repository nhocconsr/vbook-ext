function execute(url) {
    let slug = url.split('/').pop();
    let reponse = fetch('https://truyentienvuc.com/api/reading/'+slug);
    if (reponse.ok){
        let detail = reponse.json();
        if(detail.status === "D") var ongoing = false;
        else var ongoing = true;
        return Response.success({
            name: detail.name,
            cover: detail.cover.domain+'/'+detail.cover.url,
            author: detail.author.name,
            description: detail.intro,
            detail: detail.updatedAt+'<br>Tác giả : '+detail.author.name,
            ongoing : ongoing,
            host: "https://truyentienvuc.com"
        });
    }
    return null;
}