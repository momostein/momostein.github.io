// This script changes the age counter in the biography page to my current age


// Self execution funciton for namespace protection
(function () {
	// My birth date
	const birthDate = new Date(1999, 2, 11);


	// Function that calculates my age from my birth date
	// It isn't super precise but it does the job
	// Source: https://stackoverflow.com/a/21984136/9664330
	function calculateAge(birthday) { // birthday is a Date()
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	// Set age counter to my current age, calculated from my birth date
	document.getElementById("age-counter").textContent = calculateAge(birthDate);

	// Enable tooltip
	const tooltip = document.getElementById("age-tooltip");
	tooltip.className = "tooltip-text";
	tooltip.textContent = "This counter is updated dynamically.";
})();
