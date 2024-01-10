load("config.js");
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url + "&page=" + page);
    if (response.ok) {
        let json = response.json();
        let currentPage = parseInt(page);
        let lastPage = json.last_page;

        let books = [];
        json.data.forEach(item => {
            let story = item.story;
            books.push({
                name: story.name,
                link: BASE_HOST + '/truyen/' + story.slug + '/' + story.id + '.html',
                cover: story.cover,
                description: item.chapter.name,
            });
        });
        if (currentPage < lastPage) {
            return Response.success(books, (currentPage + 1) + "");
        }

        return Response.success(books);
    }
    return null;
}
