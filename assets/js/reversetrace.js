// Created by AppleFlash @TerenceTanWT
// Usage: reverseTraceWeapon(level, baseStats, baseWA, increasedStats, increasedWA, slots, stars)
// Base = numbers in white, increased = numbers in blue with plus sign
//
// Example Usage:
// reverseTraceWeapon(200, 100, 276, 185, 327, 10, 22);
// reverseTraceArmor(150, 30, 2, 173, 86, 8, 22);
// reverseTraceGlove(160, 20, 5, 131, 123, 8, 22);

var starforceStats = [];
starforceStats[140] =  [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 49, 58, 67, 76, 85, 94, 103, 103, 103, 103];
starforceStats[150] =  [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 51, 62, 73, 84, 95, 106, 117, 117, 117, 117];
starforceStats[160] =  [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 53, 66, 79, 92, 105, 118, 131, 131, 131, 131];
starforceStats[200] =  [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 55, 70, 85, 100, 115, 130, 145, 145, 145, 145];

var starforceWA = [];
starforceWA[140] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 17, 27, 38, 50, 63, 78, 95, 114, 135];
starforceWA[150] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 19, 30, 42, 55, 69, 85, 103, 123, 145];
starforceWA[160] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 21, 33, 46, 60, 75, 92, 111, 132, 155];
starforceWA[200] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 25, 39, 54, 70, 87, 106, 127, 150, 175];

var starforceWAWeapon = [];
starforceWAWeapon[140] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 15, 23, 32, 42, 53, 65, 95, 126, 158];
starforceWAWeapon[150] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 17, 26, 36, 47, 59, 72, 103, 135, 168];
starforceWAWeapon[160] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 18, 28, 39, 51, 64, 78, 110, 143, 177];
starforceWAWeapon[200] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 26, 40, 54, 69, 85, 102, 136, 171, 207];

var starforceWAGlove = [];
starforceWAGlove[140] = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 15, 24, 34, 45, 57, 70, 85, 102, 121, 142];
starforceWAGlove[150] = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 16, 26, 37, 49, 62, 76, 92, 110, 130, 152];
starforceWAGlove[160] = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 17, 28, 40, 53, 67, 82, 99, 118, 139, 162];
starforceWAGlove[200] = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 19, 32, 46, 61, 77, 94, 113, 134, 157, 182];
	
function compound(baseWA, stars) {
	var totalWA = baseWA;
	if(stars >= 15) {stars = 15;};
	for (i = 0; i < stars; i++) {
		var incrementWA = 0;
		incrementWA = Math.ceil(totalWA * 0.02);
		totalWA += incrementWA;
	}
	return totalWA;
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