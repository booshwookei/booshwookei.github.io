class Upgrade {
	constructor(obj) {
		this.title = obj.title;
		this.description = obj.description;
		this.cost = obj.cost;
		this.costStr = obj.costStr;
		this.effect = obj.effect;
		this.availible = false;
		this.active = false;
		this.id = obj.id
	}
	setup() {
		this.$elem = $("<span>");
		this.$elem.html(`
			<div id="upgrades${this.id}" class="panel panel-default">
				<div class="panel-heading">
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
			this.$elem.remove();
		});
		$("#upgrades").append(this.$elem);
	}
	hide(){
		this.$elem.hide();
	}
	show(){
		this.$elem.show();
	}

}

var organicKibble = new Upgrade({
	title: "Organic Kibble",
	costStr: "150 Barks",
	description: "Your barks have annoyed the humans enough to buy better kibble <br>(2x barks per click)",
	cost: 150,
	effect: () => {
	},
	id: "organicKibble"

});

var spikeCollar = new Upgrade({
	title: "Spike Collar",
	costStr: "375 bars",
	description: "Your human thought you would look bad-ass with a spike collar <br> (1.5x barks per click)",
	cost: 375,
	id: "spikeCollar"
})