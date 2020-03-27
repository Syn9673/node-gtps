const password = {};
const crypto = require('crypto');

password.hashPassword = function(password) {
	if (typeof password !== "string")	
		throw new Error("Invalid password type! Must be a string.");

	return crypto.createHash("sha256").update(password).digest("hex");
}

password.verifyPassword = function(password, hashedPassword) {
	if (typeof password !== "string" || typeof hashedPassword !== "string")
		throw new Error("Invalid password or hashedPassword type! Must be a string.");

	return crypto.createHash("sha256").update(password).digest("hex") === hashedPassword;
}

module.exports = password;