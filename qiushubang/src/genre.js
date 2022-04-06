function execute() {
    const response = fetch("http://www.qiushubang.me/all/");
    if (response.ok){
        let doc = response.html('gbk');
        let el = doc.select(".listLeft ul li a");
        let data = [];
        for (let i = 1; i < el.size() - 9; i++) {
            let e = el.get(i);
            data.push({
                title: e.text(),
                input: e.attr('href').split(/[\/_]/)[4],
                script: 'gen.js'
            });
        }
        return Response.success(data);
    }
    return null;
}