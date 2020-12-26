function execute(url) {
    var slug = url.split('/')[5];
    const json = Http.get('https://readmanhwa.com/api/comics/'+slug).string()

    var data = JSON.parse(json);
    var detail = data[0];
    return Response.success({
        name: data['title'],
        cover: data['thumb_url'],
        author: data.authors['name'],
        description: data['description'],
        detail: 'Status : '+ data['status']+'<br>Upload : '+ data['uploaded_at']+'<br>Tags : '+data.tags[0]['name'],
        host: "https://readmanhwa.com",
    });
}
