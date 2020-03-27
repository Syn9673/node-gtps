## node-gtps
A Growtopia Private Server code in Node.js and ENet.

### Installing
##### Requirements:
- nvm installed (`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`)
- Linux Only (Windows Support SoonTM)

#### Installation
1. Install all packages with `npm install`
3. Use NVM to get node 10, run `nvm install 10`
2. Check if `autoStart` is `true` in config.yml. And if it is -><br>
You'll be running `node web.js` if it's true, and if it's not run<br>
`node gtps.js`. The web file is for a web server, and if you have one already (nginx / apache),<br>
you don't need to run it.<br>

### Notes
We don't support Windows as we can't build [node-enet](https://github.com/linluxiang/node-enet) on windows. We'll appreciate any help with building it!
And if you can build it, then please send us a message on [our discord](https://discord.gg/3NrVX8s)!