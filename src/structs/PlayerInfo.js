const PlayerInventory = require("./PlayerInventory");

module.exports = class {
	constructor() {
		this.isIn = false;
		this.netID = false;
		this.haveGrowId = false; // if user is a normal account and not a guest account
		this.tankIDName = "";
		this.tankIDPass = "";
		this.requestedName = "";
		this.rawName = "";
		this.displayName = "";
		this.country = "";
		this.adminLevel = 0;
		this.currentWold = "EXIT"; // EXIT is the world where you select worlds.
		this.radio = true;
		this.x = 0;
		this.y = 0;
		this.x1 = 0;
		this.y1 = 0;
		this.isRotatedLeft = false;
		this.charIP = "";
		this.isUpdating = false;
		this.joinClothesUpdated = false;

		this.taped = false;

		this.cloth_hair = 0 // 0
		this.cloth_shirt = 0; // 1
		this.cloth_panths = 0; // 2
		this.cloth_feet = 0; // 3
		this.cloth_face = 0; // 4 
		this.cloth_hand = 0; // 5
		this.cloth_back = 0; // 6
		this.cloth_mask = 0; // 7
		this.cloth_necklace = 0; // 8

		this.canWalkInBlocks = false; // 1
		this.canDoubleJump = false; // 2
		this.isInvisible = false; // 4
		this.noHands = false; // 8
		this.noEyes = false; // 16
		this.noBody = false; // 32
		this.devilHorns = false; // 64
		this.goldenHalo = false; // 128
		this.isFrozen = false; // 2048
		this.isCursed = false; // 4096
		this.isDuctaped = false; // 8192
		this.haveCigar = false; // 16384
		this.isShining = false; // 32768
		this.izZombie = false; // 65536
		this.isHitByLava = false; // 131072
		this.haveHauntedShadows = false; // 262144
		this.haveGeigerRadiation = false; // 524288
		this.haveReflector = false; // 1048576
		this.isEgged = false; // 2097152
		this.havePineappleFLoag = false; // 4194304
		this.haveFlyingPineapple = false; // 8388608
		this.haveSuperSupporterName = false; // 16777216
		this.haveSUperPineapple = false; // 33554432
		this.isGhost = false;

		this.skinColor = 0x8295C3FF; // normal skin color in gt

		this.inventory = new PlayerInventory();

		this.lastSB = 0;
	}
}