// Created by AppleFlash @TerenceTanWT
// Please include data.js when using this script standalone
//
// Usage: equipStats(hat, other, weapon, hatStar, otherStar, weaponStar, fafnirTopBottomStar, weaponBaseWA, verbose)
// 
// Hat, Other (cape, glove, shoe, shoulder), Weapon : 140 = chaos vellum hat, 150 = fafnir, 160 = absolabs, 200 = arcaneshade
//
// Example Usage:
// equipStats(140, 160, 150, 22, 22, 22, 22, 160, false);
//
// Return Result:
// Stats , WA/MA , HP/MP%, Boss Damage , IED (multiples of 5%), IED (multiples of 10%), IED (multiples of 15%), IED (multiples of 20%)
// 
// Assumptions Made:
// No spell trace, cvel hat flame 30 stats, fafnir top/bottom flame 100 stats, absolabs flames 120 stats, arcaneshade flames 150, weapon flame T6 WA and T6 boss damage


function equipStats(hat, other, weapon, hatStar, otherStar, weaponStar, fafnirTopBottomStar, weaponBaseWA, verbose) {
	verbose = Boolean(verbose);
	
	// Initialise stats - Stats, WA, HP/MP%, Boss Damage, IED (multiples of 5%), IED (multiples of 10%), IED (multiples of 15%), IED (multiples of 20%)
	var totalStats = [0, 0, 0, 0, 0, 0, 0, 0]
	var fafnirTopBottom = [60, 4, 0, 0, 2, 0, 0, 0]
	var weapFlameBoss = 12;
	var stats = 0; var WA = 0; var HP = 0; var boss = 0; var IED5 = 0; var IED10 = 0; var IED15 = 0; var IED20 = 0;
	
	// Equipment Set Number
	var luckySet = 0; var fafnirSet = 2; var absoSet = 0; var acsSet = 0; 
	
	// prevent other and weapon from being made to level 140
	if (other == 140 || other == 150 || weapon == 140) { return "ERROR" }
	
	// Set weapon tier 6 flame multiplier
	if (weapon === 150) { var flameMultiplier = 0.31944 }
	else if (weapon === 160) { var flameMultiplier = 0.3993 }
	else if (weapon === 200) { var flameMultiplier = 0.47916 }
	
	// Calculate number of items in each equipment set
	if (hat == 140) { luckySet += 1; }
		else if (hat == 150) { fafnirSet += 1; }
		else if (hat == 160) { absoSet += 1; }
		else if (hat == 200) { acsSet += 1; }
	if (other == 160) { absoSet += 4; }
		else if (other == 200) { acsSet += 4; }
	if (weapon == 150) { fafnirSet += 1; }
		else if (weapon == 160) { absoSet += 1; }
		else if (weapon == 200) { acsSet += 1; }
	if (luckySet == 1) {
		if (fafnirSet >= 3) { fafnirSet += 1; }
		if (absoSet >= 3) { absoSet += 1; }
		if (acsSet >= 3) { acsSet += 1; }
	}
	
	// Calculate total stats
	stats = fafnirTopBottom[0] + hatCleanStats[hat][0] + otherCleanStats[other][0] + weaponCleanStats[weapon][0] + (2 * starforceStats[150][fafnirTopBottomStar]) + starforceStats[hat][hatStar] + (4 * starforceStats[other][otherStar]) + starforceStats[weapon][weaponStar] + goodFlameEq[hat] + (2 * goodFlameEq[150]) + (4 * goodFlameEq[other]) + fafnirSetEffect[fafnirSet][0] + absoSetEffect[absoSet][0] + acsSetEffect[acsSet][0];
	
	WA = fafnirTopBottom[1] + hatCleanStats[hat][1] + otherCleanStats[other][1] + starforceWA[hat][hatStar] + (2 * starforceWA[150][fafnirTopBottomStar]) + (3 * starforceWA[other][otherStar]) + starforceWAGlove[other][otherStar] + compound(weaponBaseWA+81, weaponStar) + starforceWAWeapon[weapon][weaponStar] + Math.ceil(weaponBaseWA * flameMultiplier) + fafnirSetEffect[fafnirSet][1] + absoSetEffect[absoSet][1] + acsSetEffect[acsSet][1];
	
	HP = fafnirTopBottom[2] + hatCleanStats[hat][2] + otherCleanStats[other][2] + weaponCleanStats[weapon][2] + fafnirSetEffect[fafnirSet][2] + absoSetEffect[absoSet][2] + acsSetEffect[acsSet][2];
	boss = fafnirTopBottom[3] + hatCleanStats[hat][3] + otherCleanStats[other][3] + weaponCleanStats[weapon][3] + fafnirSetEffect[fafnirSet][3] + absoSetEffect[absoSet][3] + acsSetEffect[acsSet][3] + weapFlameBoss;
	IED5 = fafnirTopBottom[4] + hatCleanStats[hat][4] + otherCleanStats[other][4] + weaponCleanStats[weapon][4] + fafnirSetEffect[fafnirSet][4] + absoSetEffect[absoSet][4] + acsSetEffect[acsSet][4];
	IED10 = fafnirTopBottom[5] + hatCleanStats[hat][5] + otherCleanStats[other][5] + weaponCleanStats[weapon][5] + fafnirSetEffect[fafnirSet][5] + absoSetEffect[absoSet][5] + acsSetEffect[acsSet][5];
	IED15 = fafnirTopBottom[6] + hatCleanStats[hat][6] + otherCleanStats[other][6] + weaponCleanStats[weapon][6] + fafnirSetEffect[fafnirSet][6] + absoSetEffect[absoSet][6] + acsSetEffect[acsSet][6];
	IED20 = fafnirTopBottom[7] + hatCleanStats[hat][7] + otherCleanStats[other][7] + weaponCleanStats[weapon][7] + fafnirSetEffect[fafnirSet][7] + absoSetEffect[absoSet][7] + acsSetEffect[acsSet][7];
	
	totalStats = [stats, WA, HP, boss, IED5, IED10, IED15, IED20]
	
	if (verbose) {
		console.log(totalStats + 
			"\n\n" + "fafnirSet: " + fafnirSet + " | absoSet: " + absoSet + " | acsSet: " + acsSet + 
			"\n\n==========\nHat\n==========" +
			"\nClean Stat: " + hatCleanStats[hat][0] + 
			"\nStar Force Stat: " + starforceStats[hat][hatStar] +
			"\nFlame Stat: " + goodFlameEq[hat] +
			"\n" +
			"\nClean WA: " + hatCleanStats[hat][1] + 
			"\nStar Force WA: " + starforceWA[hat][hatStar] +
			"\n" +
			"\nTotal Stat: " + (hatCleanStats[hat][0] + starforceStats[hat][hatStar] + goodFlameEq[hat]) +
			"\nTotal WA: " + (hatCleanStats[hat][1] + starforceWA[hat][hatStar])
		);
	} else {
		return totalStats;
	}
}


console.log("// Created by AppleFlash @TerenceTanWT \n// Usage: equipStats(hat, other, weapon, hatStar, otherStar, weaponStar, fafnirTopBottomStar, weaponBaseWA, verbose) \n// Hat, Other (cape, glove, shoe, shoulder), Weapon : 140 = chaos vellum hat, 150 = fafnir, 160 = absolabs, 200 = arcaneshade \n// \n// Example Usage:\n// 22* Cvel Hat + 22* Abso Glove Shoulder Cape Shoe + 22* Fafnir Weapon (base WA 160) + 22* Fafnir Top & Bottom \n// equipStats(140, 160, 150, 22, 22, 22, 22, 160, false);\n// \n// Return Result: \n// Stats , WA/MA , HP/MP%, Boss Damage , IED (multiples of 5%), IED (multiples of 10%), IED (multiples of 15%), IED (multiples of 20%) \n// \n// Assumptions Made: \n// No spell trace, cvel hat flame 30 stats, fafnir top/bottom flame 100 stats, absolabs flames 120 stats, arcaneshade flames 150, weapon flame T6 WA and T6 boss damage");