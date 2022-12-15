function execute(url) {
    let slug = url.split('/').pop();
    //https://api.mtlnation.com/api/v2/novels/attack-on-titan-slash-everything
    let reponse = fetch('https://api.mtlnation.com/api/v2/novels/'+slug);
    if (reponse.ok){
        let detail = reponse.json().data;
        if(detail.status === 1) var ongoing = true;
        else var ongoing = false;
        return Response.success({
            name: detail.title,
            cover: 'https://api.mtlnation.com/media/'+detail.cover,
            author: detail.author,
            description: detail.synopsis,
            detail: detail.alt_title+'<br>Tác giả : '+detail.author,
            ongoing : ongoing,
            host: "https://mtlnation.com"
        });
    }
    return null;
}