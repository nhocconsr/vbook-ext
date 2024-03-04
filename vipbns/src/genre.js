load("config.js");

function execute() {
    let response = fetch(BASE_URL + "/api/categories-sorted-by-alphabet?per_page=200");
    if (response.ok) {
        let genres = [];
        response.json().data.forEach(item => {
            genres.push({
                title: item.name,
                input: BASE_URL + "/api/category/" + item.id + "/story?per_page=10",
                script: 'source.js'
            });
        });
        return Response.success(genres);
    }
    return null;
}
