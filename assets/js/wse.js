// Add IED and calculate new IED
function calculateIED(currentIED, addIED) {
		var newIED = (addIED * (1 - currentIED)) + currentIED;
		return newIED;
	}

// Remove IED and calculate new IED
function reverseIED(currentIED, addIED) {
		var newIED = currentIED - (((1 - currentIED) / (1 - addIED)) * addIED);
		return newIED;
	}

// Calculate final IED value from a string consisting of + and -
// Value e.g. 80+20+10-15. Returns 83.06.
function stringToIED(elementId, formValue) {

	// Remove all spaces from string
	var cleanString = formValue.replace(/\s/g, "");
	
	// Split string into array based on + and -
	var iedArray = cleanString.split(/(?=\+)|(?=\-)/g);
	
	console.log(iedArray);
	
	// If field is blank
	if (iedArray[0] == ""){
		return 0;
	}
	
	// If first number is negative, error
	if (iedArray[0] <= 0){
		document.getElementById(elementId).value = "Invalid First Digit";
		return "Invalid First Number";
	}
	
	// Set current IED to first number in array. Replace function to remove any + or - sign
	var currentIED = parseFloat(iedArray[0].replace(/\+|\-/g, ''))/100;
	
	for (let i=1; i<iedArray.length; i++) {

		// Do this if next number is positive
		if (iedArray[i] > 0) {
			currentIED = calculateIED(currentIED, parseFloat(iedArray[i].replace(/\+|\-/g, ''))/100);
		}
		// Do this if next number is negative
		else if (iedArray[i] < 0) {
			currentIED = reverseIED(currentIED, parseFloat(iedArray[i].replace(/\+|\-/g, ''))/100);
		}
		// Do this if number is zero
		else {
			continue;
		}	
	}
	
	document.getElementById(elementId).value = (currentIED*100).toFixed(2);
	return (currentIED*100).toFixed(2);
}
	
// Adds blue stats block onto the website and update skill number
function addStatsBlock(name, ied, ratio, count) {
		if(name && ied && !isNaN(ratio) && count) { 
			
			if (ratio > Number(document.getElementById("remainingRatio").value)) {
				alert("Total Damage Ratio cannot exceed 100%! Remaining ratio is " + Number(document.getElementById("remainingRatio").value) + "%.");
				return;
			}
			
			// Calculate IED
			var currentIED = 0;
			var iedArray = ied.split("+");
			for (let i=0; i<iedArray.length; i++) {
				if (!isNaN(iedArray[i])) {
					currentIED = calculateIED(currentIED, iedArray[i]/100);
				}
				else {
					alert("IED Values Invalid! Ensure IED only contains numerical values and '+' sign.");
					return;
				}
				
			}
			console.log("Total IED of skill " + name + "  is: " + currentIED);
			
			var displayIED = parseFloat((currentIED*100).toFixed(2));
			document.getElementById("skillNumber").value = Number(count) + 1;
			document.getElementById("remainingRatio").value = (Number(document.getElementById("remainingRatio").value) - Number(ratio)).toFixed(2);
						
			document.getElementById("skillBlocks").innerHTML += "<div class='row'> <div class='col'> <div class='alert alert-primary pt-1 pb-1 mb-1' role='alert' align='center' onclick='removeSkillBlock(this,"+count+")' style='cursor: pointer;'> <div style='padding-right:10px; position:absolute; top:0; right:0;'>x</div> <b id='blockName"+count+"'> "+name+" </b><br><b>IED: </b><text id='blockIEDDisplay"+count+"'> "+displayIED+"% </text><br><b>Ratio: </b><text id='blockRatio"+count+"'> "+ratio+"% </text><div style='display:none'><b>Real IED: </b><text id='blockIED"+count+"'> "+currentIED+" </text></div><div style='display:none'><b>Number: </b><text id='blockNumber"+count+"'> "+count+" </text></div></div></div></div>";
			
		}
		
	}

// Job Preset
function jobPreset(job) {
	if (job == "none") {
		document.getElementById("remainingRatio").value = 100;
		document.getElementById("skillNumber").value = 1;
		document.getElementById('skillBlocks').innerHTML = "";
	}
	if (job == "dualblade") {
		//addStatsBlock("Storm Tornado Asura", "100", "47.28", "1");
		//addStatsBlock("Phantom Blow", "30+20+20", "31.69", "2");
		//addStatsBlock("Karmic Fury", "30", "16", "3");
		addStatsBlock("Storm Tornado Asura", "100", "37", "1");
		addStatsBlock("Phantom Blow", "40+20+20", "22", "2");
		addStatsBlock("Karma Blade", "50", "9", "3");
		addStatsBlock("Karmic Fury Haunted Edge", "30", "17", "4");
	}
};

// Deletes blue stats block from the website
function removeSkillBlock(block, id) {
		//block.remove();
		document.getElementById("remainingRatio").value = Number(document.getElementById("remainingRatio").value) + Number((document.getElementById("blockRatio"+id)).innerHTML.replace(/[^\d.]/g, ''));
		block.parentNode.parentNode.parentNode.removeChild(block.parentNode.parentNode);
	}
	
function startCompare() {
	// Reset some variables
	document.getElementById("tempFinalDamage").innerHTML = 0;
	document.getElementById("finalDamage").innerHTML = "0%";
	document.getElementById("finalDamage").style.color = "black";
	
	// Delete all previous calculation blocks
	document.getElementById("showCalculations").innerHTML = "";
	
	// Set boss PDR
	const bossIED = Number(document.getElementById("bossPDR").value);
	
	// Add Others skill block
	var otherSkillNumber = document.getElementById("skillNumber").value;
	addStatsBlock("Others", "0", document.getElementById("remainingRatio").value, document.getElementById("skillNumber").value);
	
	// Get all skills block number
	var tmpSkillNumber = document.querySelectorAll('*[id^=\"blockNumber\"]');
	var skillNumber = [];
	for (let i=0; i<tmpSkillNumber.length; i++) {
		skillNumber[i] = Number(tmpSkillNumber[i].firstChild.nodeValue);
	}
	
	for (let k=0; k<skillNumber.length; k++) {
		var beforeDmg = Number(document.getElementById("beforeDmg").value);
		var beforeIED = Number(document.getElementById("beforeIED").value)/100;
		var beforeAtt = Number(document.getElementById("beforeAtt").value);
		var afterDmg = Number(document.getElementById("afterDmg").value);
		var afterIED = Number(document.getElementById("afterIED").value)/100;
		var afterAtt = Number(document.getElementById("afterAtt").value);
		
		var name = document.getElementById("blockName"+skillNumber[k]).innerHTML;
		var ratio = Number(document.getElementById("blockRatio"+skillNumber[k]).innerHTML.replace(/[^\d.]/g, ''))/100;
		var ied = Number(document.getElementById("blockIED"+skillNumber[k]).innerHTML.replace(/[^\d.]/g, ''));
		
		var iedOld = calculateIED(ied, beforeIED);
		var iedNew = calculateIED(ied, afterIED);
		var iedDiff = iedNew - iedOld;
		var iedFD = ( (iedDiff * (bossIED/100)) / (100 - (bossIED - (bossIED * iedOld))) ) * 100;
		var iedFDAvg = iedFD * ratio * 100;
		
		var attFD = ( (afterAtt - beforeAtt) / (100 + beforeAtt) ) * 100;
		var attFDAvg = attFD * ratio;
		var dmgFD = ( (afterDmg - beforeDmg) / (100 + beforeDmg) ) * 100;
		var dmgFDAvg = dmgFD * ratio;
		
		var overallFD = (((1 + (iedFDAvg/100)) * (1 + (attFDAvg/100)) * (1 + (dmgFDAvg/100))) - 1) * 100;
		
		//console.log("iedFDAvg - " + iedFDAvg);
		//console.log("attFDAvg - " + attFDAvg);
		//console.log("dmgFDAvg - " + dmgFDAvg);
		
		// Add overallFD into Final Damage Box temp value
		document.getElementById("tempFinalDamage").innerHTML = Number(document.getElementById("tempFinalDamage").innerHTML) + overallFD;
		
		// Create calculation blocks
		document.getElementById("showCalculations").innerHTML += "<div id='calculationBlocks' class='row'> <div class='alert alert-secondary pt-1 pb-1 mb-1 col col-11 mx-auto' role='alert' align='center'> <b id='calName1'> "+name+" </b> <br> <b>Ratio: </b><text id='calRatio"+skillNumber[k]+"'> "+(ratio*100)+"% </text> <br><br> <b>IED Old: </b><text id='calIEDOld"+skillNumber[k]+"'> "+(iedOld*100).toFixed(2)+"% </text> <br> <b>IED New: </b><text id='calIEDNew"+skillNumber[k]+"'> "+(iedNew*100).toFixed(2)+"% </text> <br> <b>IED Diff: </b><text id='calIEDDiff"+skillNumber[k]+"'> "+((iedDiff*100)<=0?"":"+")+(iedDiff*100).toFixed(2)+"% </text> <br> <b>IED FD: </b><text id='calIEDFD"+skillNumber[k]+"'> "+((iedFD*100)<=0?"":"+")+(iedFD*100).toFixed(2)+"% </text> <br> <b>IED FD Avg: </b><text id='calIEDFDAvg"+skillNumber[k]+"'> "+((iedFDAvg)<=0?"":"+")+(iedFDAvg).toFixed(2)+"% </text> <br><br> <b>Att FD: </b><text id='calAttFD"+skillNumber[k]+"'> "+(attFD).toFixed(2)+"% </text> <br> <b>Att FD Avg: </b><text id='calAttFDAvg"+skillNumber[k]+"'> "+(attFDAvg).toFixed(2)+"% </text> <br><br> <b>Dmg FD: </b><text id='calDmgFD"+skillNumber[k]+"'> "+(dmgFD).toFixed(2)+"% </text> <br> <b>Dmg FD Avg: </b><text id='calDmgFDAvg"+skillNumber[k]+"'> "+(dmgFDAvg).toFixed(2)+"% </text> <br><br> <b>Overall FD: </b><text id='OverallFD"+skillNumber[k]+"'> "+(overallFD).toFixed(2)+"% </text> <div style='display:none'><b>Number: </b><text id='calBlockNumber"+skillNumber[k]+"'> "+skillNumber[k]+" </text></div> </div> </div>";

	}
	
	// Remove Others skill block
	document.getElementById("blockNumber"+otherSkillNumber).click();
	
	
	
	// Update Final Damage Box
	var finalDamage = Number(document.getElementById("tempFinalDamage").innerHTML);
	if (Math.sign(finalDamage) > 0) {
		document.getElementById("finalDamage").style.color = "green";
		document.getElementById("finalDamage").innerHTML = "+" + finalDamage.toFixed(2) + "%";
	}
	else if (Math.sign(finalDamage) < 0) {
		document.getElementById("finalDamage").style.color = "red";
		document.getElementById("finalDamage").innerHTML = finalDamage.toFixed(2) + "%";
	}
	else {
		document.getElementById("finalDamage").style.color = "black";
	}
	
}




//Calculation blocks
// This is to add a plus sign in front of positive numbers only -> (n<=0?"":"+")+n 
/*
<div id='calculationBlocks' class='row'>
	<div class='alert alert-secondary pt-1 pb-1 mb-1 col col-11 mx-auto' role='alert' align='center'> 
		<b id='calName1'> "+name+" </b> 
		<br>
		<b>Ratio: </b><text id='calRatio"+skillNumber[k]+"'> "+(ratio*100)+"% </text>
		<br><br>
		<b>IED Old: </b><text id='calIEDOld"+skillNumber[k]+"'> "+(iedOld*100).toFixed(2)+"% </text>
		<br>
		<b>IED New: </b><text id='calIEDNew"+skillNumber[k]+"'> "+(iedNew*100).toFixed(2)+"% </text>
		<br>
		<b>IED Diff: </b><text id='calIEDDiff"+skillNumber[k]+"'> "+((iedDiff*100)<=0?"":"+")+(iedDiff*100).toFixed(2)+"% </text>
		<br>
		<b>IED FD: </b><text id='calIEDFD"+skillNumber[k]+"'> "+((iedFD*100)<=0?"":"+")+(iedFD*100).toFixed(2)+"% </text>
		<br>
		<b>IED FD Avg: </b><text id='calIEDFDAvg"+skillNumber[k]+"'> "+((iedFDAvg)<=0?"":"+")+(iedFDAvg).toFixed(2)+"% </text>
		<br><br>
		<b>Att FD: </b><text id='calAttFD"+skillNumber[k]+"'> "+(attFD).toFixed(2)+"% </text>
		<br>
		<b>Att FD Avg: </b><text id='calAttFDAvg"+skillNumber[k]+"'> "+(attFDAvg).toFixed(2)+"% </text>
		<br><br>
		<b>Dmg FD: </b><text id='calDmgFD"+skillNumber[k]+"'> "+(dmgFD).toFixed(2)+"% </text>
		<br>
		<b>Dmg FD Avg: </b><text id='calDmgFDAvg"+skillNumber[k]+"'> "+(dmgFDAvg).toFixed(2)+"% </text>
		<br><br>
		<b>Overall FD: </b><text id='OverallFD"+skillNumber[k]+"'> "+(overallFD).toFixed(2)+"% </text>
		<div style='display:none'><b>Number: </b><text id='calBlockNumber"+skillNumber[k]+"'> "+skillNumber[k]+" </text></div>
	</div>
</div>
*/

// ((iedFDAvg*100)<=0?"":"+")+n