let packet = {};

packet.createPacket = function(ENet, data, length) {
	return ENet.enet_packet_create(data, length, ENet.ENET_PACKET_FLAG_RELIABLE);
}

packet.sendPacket = function(ENet, peer, channel, packet) {
	return ENet.enet_peer_send(peer, channel, packet);
}

module.exports = packet;
