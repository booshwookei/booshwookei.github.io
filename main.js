var gameData = {
	total_barks: 0,
	barks: 0,
	clicks: 0,
	barks_per_click: 1

}

var update = window.setInterval(function() {
	$("#bark_counter").html(gameData.barks + " barks");

}, 1);

$(document).ready(function() {
	$("#bark").click(function(){
		incrementBarks();
		dog_chihuahua.show();
	})
	organicKibble.setup();
	organicKibble.hide();
	spikeCollar.setup();
	spikeCollar.hide();
	dog_chihuahua.setup();
	dog_chihuahua.hide();
});

function incrementBarks(){
	gameData.barks += gameData.barks_per_click;
}