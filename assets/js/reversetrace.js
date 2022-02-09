// Created by AppleFlash @TerenceTanWT
// Usage: reverseTraceWeapon(level, baseStats, baseWA, increasedStats, increasedWA, slots, stars)
// Base = numbers in white, increased = numbers in blue with plus sign
//
// Example Usage:
// reverseTraceWeapon(200, 100, 276, 185, 327, 10, 22);
// reverseTraceArmor(150, 30, 2, 173, 86, 8, 22);
// reverseTraceGlove(160, 20, 5, 131, 123, 8, 22);
	
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


function reverseCompound(totalWA, stars) {
	var baseWA = Math.ceil( (totalWA) / (1.02 ** stars) );	// 1.02^stars
	if(stars <= 15) {
		for (k = 0; k < (stars*2); k++) {
			if (compound(baseWA, stars) == totalWA) {
				return baseWA;
			}
			baseWA--;
		}
	} else {
		return -1;
	}
	
	return 0;
}


function reverseTraceWeapon(level, baseStats, baseWA, increasedStats, increasedWA, slots, stars) {
	var traceWA = [3, 5, 7, 9]; // index 0 = 100%, 1 = 70%, 2 = 30%, 3 = 15%
	var traceStats = [1, 2, 3, 4]; // index 0 = 100%, 1 = 70%, 2 = 30%, 3 = 15%
	var traceIndex = 0;
	var calculatedincreasedStats = 0;
	var calculatedincreasedWA = 0;
	
	while(traceIndex < 4) {
		calculatedincreasedStats = starforceStats[level][stars] + (slots * traceStats[traceIndex]);
		calculatedincreasedWA = compound(baseWA + (slots * traceWA[traceIndex]), stars) + starforceWAWeapon[level][stars] - baseWA;
		if(calculatedincreasedStats == increasedStats && calculatedincreasedWA == increasedWA) {
			if(traceIndex == 0) {return "100";}
			if(traceIndex == 1) {return "70";}
			if(traceIndex == 2) {return "30";}
			if(traceIndex == 3) {return "15";}
		}
		traceIndex++;
	}
	
	return 0;
}

function reverseTraceArmor(level, baseStats, baseWA, increasedStats, increasedWA, slots, stars, glove) {
	var traceStats = [3, 4, 7]; // index 0 = 100%, 1 = 70%, 2 = 30%
	var traceIndex = 0;
	var calculatedincreasedStats = 0;
	var calculatedincreasedWA = 0;
	var fourthSuccess = 0;
	if(slots >= 4) {fourthSuccess = 1;}
	
	while(traceIndex < 3) {
		calculatedincreasedStats = starforceStats[level][stars] + (slots * traceStats[traceIndex]);
		calculatedincreasedWA = starforceWA[level][stars] + fourthSuccess;
		if(calculatedincreasedStats == increasedStats && calculatedincreasedWA == increasedWA) {
			if(traceIndex == 0) {return "100";}
			if(traceIndex == 1) {return "70";}
			if(traceIndex == 2) {return "30";}
		}
		traceIndex++;
	}
	
	return 0;
}

function reverseTraceAccessory(level, baseStats, baseWA, increasedStats, increasedWA, slots, stars, glove) {
	var traceStats = [2, 3, 5]; // index 0 = 100%, 1 = 70%, 2 = 30%
	var traceIndex = 0;
	var calculatedincreasedStats = 0;
	var calculatedincreasedWA = 0;
	
	while(traceIndex < 3) {
		calculatedincreasedStats = starforceStats[level][stars] + (slots * traceStats[traceIndex]);
		calculatedincreasedWA = starforceWA[level][stars];
		if(calculatedincreasedStats == increasedStats && calculatedincreasedWA == increasedWA) {
			if(traceIndex == 0) {return "100";}
			if(traceIndex == 1) {return "70";}
			if(traceIndex == 2) {return "30";}
		}
		traceIndex++;
	}
	
	return 0;
}

function reverseTraceGlove(level, baseStats, baseWA, increasedStats, increasedWA, slots, stars) {
	var traceWA = [1, 2, 3]; // index 0 = 100%, 1 = 70%, 2 = 30%
	var traceIndex = 0;
	var calculatedincreasedStats = 0;
	var calculatedincreasedWA = 0;
	var fourthSuccess = 0;
	if(slots >= 4) {fourthSuccess = 1;}
	
	while(traceIndex < 3) {
		calculatedincreasedStats = starforceStats[level][stars];
		calculatedincreasedWA = starforceWAGlove[level][stars] + (slots * traceWA[traceIndex]);
		if(calculatedincreasedStats == increasedStats && calculatedincreasedWA == increasedWA) {
			if(traceIndex == 0) {return "100";}
			if(traceIndex == 1) {return "70";}
			if(traceIndex == 2) {return "30";}
		}
		traceIndex++;
	}
	
	return 0;
}

console.log("// Created by AppleFlash @TerenceTanWT \n// Usage: reverseTraceWeapon(level, baseStats, baseWA, increasedStats, increasedWA, slots, stars) \n// Base = numbers in white, increased = numbers in blue with plus sign \n// \n// Example Usage:\n// reverseTraceWeapon(200, 100, 276, 185, 327, 10, 22);\n// reverseTraceArmor(150, 30, 2, 173, 86, 8, 22);\n// reverseTraceGlove(160, 20, 5, 131, 123, 8, 22);");