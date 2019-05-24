var gameData = {
	total_barks: 0,
	barks: 0,
	clicks: 0,
	barks_per_click: 1,
	barks_per_second: 0,
	bps_multiplier: 1
}

var update = window.setInterval(function() {
	$("#bark_counter").html(gameData.barks.toFixed(2) + " barks");
	$("#barks_per_second").html((gameData.barks_per_second * gameData.bps_multiplier)+ " barks per second");
	
 // DOG UNLOCKS

	// Chihuahua cases
	if (gameData.barks >= 50) {
		dog_chihuahua.show();
	}
	if (gameData.barks >= dog_chihuahua.cost) {
		dog_chihuahua.buyable();
	} else {
		dog_chihuahua.cantBuy();
	}

	// Retriever cases
	if (gameData.total_barks >= 800) {
		dog_retriever.show();
	}
	if (gameData.barks >= dog_retriever.cost) {
		dog_retriever.buyable();
	} else {
		dog_retriever.cantBuy();
	}

	if (gameData.total_barks >= 40000) {
		dog_berner.show();
	}
	if (gameData.barks >= dog_berner.cost) {
		dog_berner.buyable();
	} else {
		dog_berner.cantBuy();
	}
 // UPGRADE UNLOCKS 

	// Organic kibble cases
	if (gameData.total_barks >= 100) {
		organicKibble.show();
	}
	if (gameData.barks >= organicKibble.cost) {
		organicKibble.buyable();
	} else {
		organicKibble.cantBuy();
	}

	// Spike Collar cases
	if (gameData.total_barks >= 375) {
		spikeCollar.show();
	}
	if (gameData.barks >= spikeCollar.cost) {
		spikeCollar.buyable();
	} else {
		spikeCollar.cantBuy();
	}

	// Load Barks cases
	if (gameData.total_barks >= 900) {
		loudBarks.show();
	}
	if (gameData.barks >= loudBarks.cost) {
		loudBarks.buyable();
	} else {
		loudBarks.cantBuy();
	}


}, 1);

var bps = window.setInterval(function() {
	gameData.barks += ((gameData.barks_per_second * gameData.bps_multiplier) / 4);
	gameData.total_barks += ((gameData.barks_per_second * gameData.bps_multiplier) / 4);
}, 250);

$(document).ready(function() {
	$("#bark").click(function(){
		incrementBarks();
	})
	for (i = 0; i < arr_dogs.length; i++) {
		arr_dogs[i].setup();
		arr_dogs[i].hide();
	}
	for (i = 0; i < arr_upgrades.length; i++) {
		arr_upgrades[i].setup();
		arr_upgrades[i].hide();
	}
});

function incrementBarks(){
	gameData.barks += gameData.barks_per_click;
	gameData.total_barks += gameData.barks_per_click;
}