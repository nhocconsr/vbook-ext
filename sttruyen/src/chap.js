function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.html();
        let csrf = doc.select('meta[name=csrf-token]').attr('content')
        let rest = doc.select('div[wire:id]').attr('wire:initial-data');
        let data1 = JSON.parse(rest)
        var fid = data1.fingerprint.id
        var path = data1.fingerprint.path
        var s_alias = data1.serverMemo.data.s_alias
        var sid = data1.serverMemo.data.sid
        var c_alias = data1.serverMemo.data.c_alias
        var cid = data1.serverMemo.data.cid
        var chid = data1.serverMemo.children.sDltJ1n.id
        var htmlHash = data1.serverMemo.htmlHash
        var checksum = data1.serverMemo.checksum
        let res2 = fetch("https://sttruyen.com/livewire/message/reading", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrf,
            },
            "body": "{\"fingerprint\":{\"id\":\""+fid+"\",\"name\":\"reading\",\"locale\":\"vi\",\"path\":\""+path+"\",\"method\":\"GET\"},\"serverMemo\":{\"children\":{\"sDltJ1n\":{\"id\":\""+chid+"\",\"tag\":\"div\"}},\"errors\":[],\"htmlHash\":\""+htmlHash+"\",\"data\":{\"s_alias\":\""+s_alias+"\",\"c_alias\":\""+c_alias+"\",\"load\":false,\"view\":false,\"sid\":"+sid+",\"cid\":"+cid+",\"isbuy\":false,\"font\":[{\"name\":\"Cabin Condensed\",\"value\":\"Cabin Condensed, sans-serif\"},{\"name\":\"Farsan\",\"value\":\"Farsan, cursive\"},{\"name\":\"Lora\",\"value\":\"Lora, serif\"},{\"name\":\"Noto Serif\",\"value\":\"Noto Serif, serif\"},{\"name\":\"Open Sans\",\"value\":\"Open Sans, sans-serif\"},{\"name\":\"Quicksand\",\"value\":\"Quicksand, sans-serif\"}],\"settings\":{\"fontSize\":20,\"lineHeight\":30,\"letterSpacing\":1,\"mode\":\"light\",\"fontFamily\":\"Lora, serif\",\"background\":8}},\"dataMeta\":[],\"checksum\":\""+checksum+"\"},\"updates\":[{\"type\":\"callMethod\",\"payload\":{\"id\":\"4aqu\",\"method\":\"loadContent\",\"params\":[]}}]}"
        });
        let data = res2.json();
        return Response.success(data.effects.emits[0].params[0]);

    }
    return null;
}