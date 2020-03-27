const OS = process.platform;
const yaml = require("yaml");
const { readFileSync } = require("fs");

let enet;

if (OS === "linux")
	enet = require("./Linux/enet");
else if (OS === "win32")
	enet = require("./Windows/enet")

const config = yaml.parse(readFileSync(`${__dirname}/config.yml`, "utf-8"));
const Packet = require("./src/helpers/Packet");

// Custom console.log overwrite
const console = {
	log: function (x) {
		process.stdout.write(`[${Date().split(" ")[4]}] ${x}\n`);
	}
};

// If the value of the "autoStart" property is true, it means that we would automatically start the webserver in the same process.
if (config.web.autoStart)	
	require("./web").exec();
else
	console.log("Webserver was not automatically started. Make sure you start it.")

// Initialize enet.
enet.enet_initialize();

// Create an enet address, and set the host.
const address = new enet.ENetAddress();
enet.enet_address_set_host(address, config.host);

// Set the address port to the one in the config.
address.port = config.port;

// Create the server with the address and the server config.
const server = enet.enet_host_create(address,
	config.server.peer,
	config.server.channelLimit,
	config.server.incomingBandwidth,
	config.server.outgoingBandwidth);

// Enable CRC32
enet.enableCRC(server);

// Enable range compression
enet.enet_host_compress_with_range_coder(server);

// Check if the server is created
if (server === null)
	throw new Error("Server failed to create.");
else
    console.log(`Server successfully created. Now listening on ${config.host}:${config.port}`);

function HandleServer() {
	// Create a new enetEvent
	const enetEvent = new enet.ENetEvent();
	
	// Waits for events on the host
	const events = enet.enet_host_service(server, enetEvent, 1000);

	if (events == 1) {
		// If the type of the event is a connection
		if (enetEvent.type === 1) {
			console.log("A new client connected.");

			// Create a hello packet buffer.
			let buffer = Buffer.from([0x01, 0x00, 0x00, 0x00, 0x00]);

			// Send & create the Hello packet.
			let packet = Packet.createPacket(enet, buffer.toString(), buffer.length);
			Packet.sendPacket(enet, enetEvent.peer, 0, packet);

			// Sends any queued packets on the host specified to it's designated peers. 
			enet.enet_host_flush(server);

		} else if (enetEvent.type === 3) {
			// Allocate 32 bytes on the buffer
			let buffer = Buffer.alloc(32);

			// write an unsafe integer to the buffer where the integer is the dataLength of the packet
			buffer.writeUInt32BE(enetEvent.packet.dataLength, 0);

			// write to the buffer the converted string of the packet data
			buffer.write(enet.ConvertToString(enetEvent.packet.data));
            
			// log the received packet by converting the buffer to hex form.
			console.log(`Received packet: ${buffer.toString("hex")}`)
		}
	}
}

setInterval(() => {
	HandleServer();
}, 10);