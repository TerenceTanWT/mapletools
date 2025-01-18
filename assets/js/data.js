/* Star Force Stats and WA */

var starforceStats = [];
starforceStats[130] =  [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 47, 54, 61, 68, 75, 75, 75, 75, 75, 75];
starforceStats[140] =  [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 49, 58, 67, 76, 85, 94, 103, 103, 103, 103];
starforceStats[150] =  [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 51, 62, 73, 84, 95, 106, 117, 117, 117, 117];
starforceStats[160] =  [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 53, 66, 79, 92, 105, 118, 131, 131, 131, 131];
starforceStats[200] =  [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 55, 70, 85, 100, 115, 130, 145, 145, 145, 145];
starforceStats[250] =  [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 57, 74, 91, 108, 125, 142, 159, 182, 207, 234];

var starforceWA = [];
starforceWA[130] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 15, 24, 34, 45, 45, 45, 45, 45, 45];
starforceWA[140] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 17, 27, 38, 50, 63, 78, 95, 114, 135];
starforceWA[150] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 19, 30, 42, 55, 69, 85, 103, 123, 145];
starforceWA[160] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 21, 33, 46, 60, 75, 92, 111, 132, 155];
starforceWA[200] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 25, 39, 54, 70, 87, 106, 127, 150, 175];
starforceWA[250] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 29, 45, 62, 80, 99, 120, 143, 168, 195];

var starforceWAWeapon = [];
starforceWAWeapon[130] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 13, 20, 28, 37, 37, 37, 37, 37, 37];
starforceWAWeapon[140] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 15, 23, 32, 42, 53, 65, 95, 126, 158];
starforceWAWeapon[150] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 17, 26, 36, 47, 59, 72, 103, 135, 168];
starforceWAWeapon[160] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 18, 28, 39, 51, 64, 78, 110, 143, 177];
starforceWAWeapon[200] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 26, 40, 54, 69, 85, 102, 136, 171, 207];
starforceWAWeapon[250] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 26, 40, 54, 69, 85, 102, 136, 171, 207];

var starforceWAGlove = [];
starforceWAGlove[130] = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 14, 22, 31, 41, 52, 52, 52, 52, 52, 52];
starforceWAGlove[140] = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 15, 24, 34, 45, 57, 70, 85, 102, 121, 142];
starforceWAGlove[150] = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 16, 26, 37, 49, 62, 76, 92, 110, 130, 152];
starforceWAGlove[160] = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 17, 28, 40, 53, 67, 82, 99, 118, 139, 162];
starforceWAGlove[200] = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 19, 32, 46, 61, 77, 94, 113, 134, 157, 182];
starforceWAGlove[250] = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 21, 36, 52, 69, 87, 106, 127, 150, 175, 202];


/* Set Effects */

// Stats, WA, HP/MP%, Boss Damage, IED (multiples of 5%), IED (multiples of 10%), IED (multiples of 15%), IED (multiples of 20%)
var fafnirSetEffect = [];
fafnirSetEffect[0] = [0, 0, 0, 0, 0, 0, 0, 0];
fafnirSetEffect[1] = [0, 0, 0, 0, 0, 0, 0, 0];
fafnirSetEffect[2] = [20, 0, 0, 0, 0, 0, 0, 0];
fafnirSetEffect[3] = [20, 50, 10, 0, 0, 0, 0, 0];
fafnirSetEffect[4] = [20, 50, 10, 30, 0, 0, 0, 0];

var absoSetEffect = [];
absoSetEffect[0] = [0, 0, 0, 0, 0, 0, 0, 0];
absoSetEffect[1] = [0, 0, 0, 0, 0, 0, 0, 0];
absoSetEffect[2] = [0, 0, 20, 0, 0, 0, 0, 0];
absoSetEffect[3] = [30, 45, 0, 0, 0, 0, 0, 0];
absoSetEffect[4] = [30, 75, 0, 0, 0, 1, 0, 0];
absoSetEffect[5] = [30, 95, 0, 30, 0, 1, 0, 0];
absoSetEffect[6] = [30, 115, 20, 30, 0, 1, 0, 0];
absoSetEffect[7] = [30, 135, 20, 30, 0, 2, 0, 0];

var acsSetEffect = [];
acsSetEffect[0] = [0, 0, 0, 0, 0, 0, 0, 0];
acsSetEffect[1] = [0, 0, 0, 0, 0, 0, 0, 0];
acsSetEffect[2] = [0, 0, 30, 0, 0, 0, 0, 0];
acsSetEffect[3] = [50, 65, 0, 0, 0, 0, 0, 0];
acsSetEffect[4] = [50, 105, 0, 0, 0, 1, 0, 0];
acsSetEffect[5] = [50, 135, 0, 30, 0, 1, 0, 0];
acsSetEffect[6] = [50, 165, 30, 30, 0, 1, 0, 0];
acsSetEffect[7] = [50, 195, 30, 30, 0, 2, 0, 0];



/* Total Stats of Clean Equipments */

// Stats, WA, HP/MP%, Boss Damage, IED (multiples of 5%), IED (multiples of 10%), IED (multiples of 15%), IED (multiples of 20%)
hatCleanStats = [];
hatCleanStats[140] = [23, 1, 0, 0, 0, 0, 0, 0];		// cvel hat
hatCleanStats[150] = [40, 2, 0, 0, 0, 1, 0, 0];		// fafnir hat
hatCleanStats[160] = [45, 3, 0, 0, 0, 1, 0, 0];		// abso hat
hatCleanStats[200] = [65, 7, 0, 0, 0, 0, 1, 0];		// acs hat

// Other = Glove + Shoe + Cape + Shoulder combined
otherCleanStats = [];
otherCleanStats[160] = [69, 22, 0, 0, 0, 0, 0, 0];	// abso glove + cape + shoe + shoulder
otherCleanStats[200] = [150, 44, 0, 0, 0, 0, 0, 0];	// acs glove + cape + shoe + shoulder

weaponCleanStats = [];
weaponCleanStats[150] = [40, 0, 0, 30, 0, 1, 0, 0];		// fafnir weapon (WA is excluded)
weaponCleanStats[160] = [60, 0, 0, 30, 0, 1, 0, 0];		// abso weapon (WA is excluded)
weaponCleanStats[200] = [100, 0, 0, 30, 0, 0, 0, 1];	// acs weapon (WA is excluded)



/* Good Flame Values */
goodFlameEq = [];
goodFlameEq[140] = 30;		// cvel hat
goodFlameEq[150] = 100;		// fafnir
goodFlameEq[160] = 120;		// absolabs
goodFlameEq[200] = 150;		// arcaneshade



/* Function to calculate total weapon WA after Star Force (up to 15 stars only) */	
function compound(baseWA, stars) {
	var totalWA = baseWA;
	if(stars >= 15) {stars = 15;};
	for (i = 0; i < stars; i++) {
		var incrementWA = 0;
		// incrementWA = Math.ceil(totalWA * 0.02);		// 303 WA gives 418 in Maple instead of 417. Suspected instead of rounding, they remove decimals and +1
		incrementWA = Math.trunc(totalWA * 0.02) + 1;
		totalWA += incrementWA;
	}
	return totalWA;
}
