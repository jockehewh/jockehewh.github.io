self.addEventListener('fetch', e=>{
  console.log('fetching', e.request, e.request.url.includes('/api/'));
  if(e.request.url.includes('/api/')){
    let endPoint = e.request.url.split('/api/')[1];
    if(e.request.method == 'POST'){
      let myreader = e.request.body.getReader();
      myreader.read().then(function(result){
        console.log("result",result)
        if(result.value.length > 0){
          let text = ""
          result.value.forEach(el => {
            text += String.fromCharCode(el)
          });
          switch (endPoint) {
            case "text": 
              e.respondWith(new Response("Vous avez envoyé: "+text, {
                status: 200,
                headers: { "Content-Type": "text/plain" },
              }))
              break
            case "json":
              let res = Object.assign({}, JSON.parse(text));
              console.log("res", res)
              e.respondWith(new Response(JSON.stringify({...res, success: "Les données envoyés ont bien été reçues"}), {
                status: 200,
                headers: { "Content-Type": "application/json" },
              }))
              break
          }
        }else{
          e.respondWith(new Response(JSON.stringify({ error : "vous n'avez pas envoyé de valeur." }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }))
        }

      })
    }else{
      switch (endPoint){
        case "text": e.respondWith(new Response("Requête filtré avec succès", {
                      status: 200,
                      headers: { "Content-Type": "text/plain" },
                    }))
                  break
        case "json": e.respondWith(new Response(JSON.stringify({ success: "Voici le JSON que vous avez demandé." }), {
                      status: 200,
                      headers: { "Content-Type": "application/json" },
                    }))
                  break
      }
    }
    
  }
  
})