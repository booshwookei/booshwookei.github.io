class Upgrade {
	constructor(obj) {
		this.title = obj.title;
		this.description = obj.description;
		this.cost = obj.cost;
		this.costStr = obj.costStr;
		this.effect = obj.effect;
		this.availible = false;
		this.active = false;
		this.id = obj.id;
		this.bps = obj.bps;
	}
	setup() {
		this.$elem = $("<span>");
		this.$elem.html(`
			<div id="upgrades${this.id}" class="panel panel-default fade in">
				<div id="heading${this.id}" class="panel-heading">
					<div class="row">
						<div class="col-sm-6">
							<h4 class="text-important">${this.title}</h4>
						</div>
						<div class="col-sm-6">
							<h4 class="text-muted" style="text-align: right">${this.costStr}</h4>
						</div>
					</div>	
				</div>
				<div class="panel-body">
					<p class='text-muted'>${this.description}</p>
				</div>
			</div>
			`);
		this.$elem.click(() => {
			if (gameData.barks >= this.cost) {
				this.effect();
				gameData.barks -= this.cost;
				this.$elem.remove();
				console.log("purchased " + this.title)
			} 
		});
		$("#upgrades").append(this.$elem);
		console.log("Upgrade " + this.title + " initialized");
	}
	hide(){
		this.$elem.hide();
	}
	show(){
		this.$elem.show();
	}
	remove() {
		this.$elem.remove();
	}
	buyable(){
		$("#heading" + this.id).css("background", "rgba(149, 255, 192, 1)");
	}	
	cantBuy(){
		$("#heading" + this.id).css("background", "rgba(226, 226, 226, 1");
	}
}

var organicKibble = new Upgrade({
	title: "Organic Kibble",
	costStr: "150 Barks",
	description: "Your barks have annoyed the humans enough to buy better kibble <br>(2x barks per click)",
	cost: 150,
	id: "organicKibble",
	effect: () => {
		gameData.barks_per_click *= 2;
	}

});

var spikeCollar = new Upgrade({
	title: "Spike Collar",
	costStr: "500 Barks",
	description: "Your human thought you would look bad-ass with a spike collar <br> (1.5x barks per click)",
	cost: 500,
	id: "spikeCollar",
	effect: () => {
		gameData.barks_per_click *= 1.5;
	}
});

var loudBarks = new Upgrade({
	title: "Louder Barks",
	costStr: "1000 Barks",
	description: "Your barks are loud enough to cause more dogs to bark <br> (+50% barks per second)",
	cost: 1000,
	id: "spikeCollar",
	effect: () => {
		gameData.bps_modifier += 1.5;
	}
});
var arr_upgrades = new Array(
	organicKibble,
	spikeCollar,
	loudBarks
	);