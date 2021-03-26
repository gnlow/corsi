import { serve } from "https://deno.land/std@0.90.0/http/server.ts"

const server = serve({ port: 8000 })
console.log("Corsi - port: 8000")

for await (const req of server) {
    const data = await fetch(req.url.substring(1)).then(res => res.arrayBuffer())
    const body = new Uint8Array(data)

    req.respond({
        status: 200,
        body,
        headers: new Headers({
            "Access-Control-Allow-Origin": "*"
        })
    })
}