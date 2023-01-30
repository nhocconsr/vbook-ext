function execute(url) {
    let cid = url.split('/').pop();
    let response = fetch('https://hentaibackend.vercel.app/api/v1/chapters/'+cid);
    if (response.ok){
        let imgs =  response.json().chapter.images
        return Response.success(imgs);
    }
}