function execute(url) {
    let slug = url.split('/').pop();
    //https://api.mtlnation.com/api/v2/novels/attack-on-titan-slash-everything
    let sid = fetch('https://api.mtlnation.com/api/v2/novels/'+slug).json().data.id;
    let reponse = fetch('https://api.mtlnation.com/api/v2/novels/'+sid+'/chapters/');
    if (reponse.ok){
        let json = reponse.json();
        let allChap = json.data;
        let list = [];
        allChap.forEach(chap => {
            list.push({
                name: chap.title,
                url: 'https://api.mtlnation.com/api/v2/chapters/'+slug+'/'+chap.slug,
                host: "https://mtlnation.com"
            })
        });
        return Response.success(list);
    }
    return null;
}