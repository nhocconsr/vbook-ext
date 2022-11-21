function execute() {
    let repsonse = fetch('https://doctruyen3qme.com/tim-truyen', {
            headers: {
                'user-agent': UserAgent.android()
            }
    });

    if(repsonse.ok){
        let doc = repsonse.html();
        let el = doc.select(".categories-detail li a")
        let data = [];
        for (let i = 1; i < el.size(); i++) {
            let e = el.get(i);
            data.push({
                title: e.text(),
                input: e.attr('href'),
                script: 'gen.js'
            });
        }
        return Response.success(data);
    }
    return null;
}