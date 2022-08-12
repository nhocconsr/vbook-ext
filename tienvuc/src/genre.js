function execute() {
    let response = fetch('https://api.tienvuc.vip/categories/all');
    if (response.ok){
        let allCate = response.json();
        const data = [];
        allCate.forEach(item => {
            data.push({
                title: item.name,
                input: item.slug,
                script: 'cate.js'
            });
        });
        return Response.success(data);
    }
    return null;
}