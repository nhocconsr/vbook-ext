function execute(url) {
    let nUrl = url.split('|');
    let response = fetch(nUrl[1]);
    let chapters = [];
    if(response.ok){
        let data = response.json();
        data.data.forEach(chapter => {
                chapters.push({
                    name: chapter.name,
                    url: "https://sttruyen.com/render/"+nUrl[0]+'/'+chapter.alias,
                    host: 'https://sttruyen.com'
                })
            })
        return Response.success(chapters);
    }
    return null;
}