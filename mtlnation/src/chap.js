function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let json = response.json();
        let content = json.data.content;  
        return Response.success(content);
    }
    return null;
}