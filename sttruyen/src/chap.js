function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.html();
        let csrf = doc.select('meta[name=csrf-token]').attr('content')
        let rest = doc.select('div[wire:id]').attr('wire:initial-data');
        let data1 = JSON.parse(rest)
        var finger = data1.fingerprint
        var serverMemo = data1.serverMemo
        let res2 = fetch("https://sttruyen.com/livewire/message/reading", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrf,
            },
            "body": "{\"fingerprint\":"+JSON.stringify(finger)+",\"serverMemo\":"+JSON.stringify(serverMemo)+",\"updates\":[{\"type\":\"callMethod\",\"payload\":{\"id\":\"4aqu\",\"method\":\"loadContent\",\"params\":[]}}]}"
        });
        let data = res2.json();
        let content = data.effects.emits[0].params[0]
            .replace(/\r\n/g, "")
            .replace(/(<br ?\/?>\s*){2,}/gm, '<br>');
        return Response.success(content);

    }
    return null;
}