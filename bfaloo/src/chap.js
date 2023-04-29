function execute(url) {
    let nurl = url.replace('https://b.faloo.com/','')
    let $ = fetch(`https://client4xcx.faloo.com/V4.1/Xml4Android_ContentPage.aspx`,{
        method : "POST",
        body:`${nurl}`
    }).json()
    if($.code == 200) return Response.success($.data.content.trim().replace(/\r\n/g,'<br>'))
    if($.code == 316) return Response.success($.msg)
    if($.msg == "VIP章节请先登录。") {
        let res = fetch(`https://wap.faloo.com/${url.replace('https://b.faloo.com/','').replace("id=","").replace("&n=","_")}.html`).text()
        let $1 = Html.parse(res)
        if ($1.select('div.nodeContent').text() == "您还没有登录 请登录后在继续阅读本部小说！ 立即登录 注册账号"||$1.select('div.nodeContent').text() == "您还没有订阅本章节（VIP章节） 体验懒人阅读模式 我要体验 解读：随看随订，省去反复订阅的烦恼，感受极佳阅读体验。 设置自动订阅最新章节(免费) 马上设置 解读：系统将第一时间为您订阅最新发布的章节 请订阅 订阅本章"||$1.select('div.nodeContent').text() == "非VIP会员,不能阅读作者最新更新的VIP章节。"||$1.select('div.nodeContent').text() == "您的账户余额不足 请充值！ 立即充值") return Response.error(
        `Đây là chương VIP hoặc Bạn chưa đăng nhập hoặc mua chương <br> Link báo lỗi : https://wap.faloo.com/${url.replace("id=","").replace("&n=","_")}.html`
        )
        let code = res.match(/image_do3\(.+?\)/)[0]
        let imageurl = eval(code)
        return Response.success(`<img src="${imageurl}" />`)
    }     
    return Response.success($)
}