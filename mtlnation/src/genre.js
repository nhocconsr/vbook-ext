function execute() {
    let response = fetch('https://api.mtlnation.com/api/v2/tags');
    if (response.ok){
        let allCate = response.json().data;
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