function execute() {
    let response = fetch('https://api.viptruyenfull.com/api/v1/category?limit=99');
    if (response.ok){
        let allCate = response.json().data.list;
        const data = [];
        allCate.forEach(item => {
            data.push({
                title: item.name,
                input: item.id,
                script: 'cate.js'
            });
        });
        return Response.success(data);
    }
    return null;
}