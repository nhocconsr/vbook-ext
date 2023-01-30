function execute(url) {
    let mid = url.split('/').pop();
    let response = fetch('https://hentaibackend.vercel.app/api/v1/mangas/'+mid)
    if (response.ok){
        let data = response.json().manga;
        return Response.success({
            name: data.title,
            cover: data.coverImage,
            author: data.authors[0],
            description: data.summary,
            detail: data.updatedAt,
            ongoing : data.status === 'OnGoing' ? true : false,
            host: "https://hentaidexy.net"
        });
    }
    return Response.error('message') // Trả về response thất bại với nội dung lỗi
}