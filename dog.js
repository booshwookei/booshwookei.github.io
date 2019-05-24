class Dog {
	constructor(obj) {
		this.title = obj.title;
		this.description = obj.description;
		this.cost = obj.cost;
		this.costStr = obj.costStr;
		this.effect = obj.effect;
		this.id = obj.id
		this.amount = obj.amount;
	}
	setup() {
		this.$elem = $("<span>");
		this.$elem.html(`
			<div id="dogs${this.id}" class="panel panel-default">
				<div id="heading${this.id}" class="panel-heading">
					<div class="row">
						<div class="col-sm-6">
							<h4 class="text-important">${this.title}</h4>
						</div>
						<div class="col-sm-6">
							<h4 id="cost${this.id}" class="text-muted" style="text-align: right">${this.cost} barks</h4>
						</div>
					</div>	
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-sm-6">
							<h4 class="text-muted">${this.description}</h4>
						</div>
						<div class="col-sm-6">
							<h4 id="amount${this.id}" class="text-muted" style="text-align: right">${this.amount} owned</h4>
						</div>
					</div>	
					
				</div>
			</div>
			`);
		this.$elem.click(() => {
			console.log("clicked")
			if (gameData.barks >= this.cost) {
				this.effect();
				gameData.barks -= this.cost;
				this.amount += 1;
				this.cost += 2;
				this.updateHTML();
			}
		});
		$("#dogs").append(this.$elem);
		console.log(this.title + " initialized");
	}
	hide(){
		this.$elem.hide();
	}
	show(){
		this.$elem.show();
	}
	updateHTML(){
		$("#cost" + this.id).html(this.cost + " barks");
		$("#amount" + this.id).html(this.amount + " owned");
	}
	buyable(){
		$("#heading" + this.id).css("background", "rgba(149, 255, 192, 1)");
	}	
	cantBuy(){
		$("#heading" + this.id).css("background", "rgba(226, 226, 226, 1");
	}
}



var dog_chihuahua = new Dog({
	title: "Chihuahua",
	description: "Small dog that packs a small bark<br>(Generates 1 Bark per Second)",
	cost: 10,
	amount: 0,
	bps: 1,
	id: "dogChihuahua",
	effect: () => {
		gameData.barks_per_second += 1;
	}
});

var dog_retriever = new Dog({
	title: "Golden Retriever",
	description: "Reliable doggo that packs a large bark<br>(Generates 10 Barks per Second)",
	cost: 350,
	amount: 0,
	bps: 10,
	id: "dogRetriever",
	effect: () => {
		gameData.barks_per_second += 10;
	}
});

var dog_berner = new Dog({
	title: "Bernese Mountain Dog",
	description: "Top tier dog, huge barks<br>(Generates 1000 Barks per Second)",
	cost: 15000,
	amount: 0,
	bps: 1000,
	id: "dogBerner",
	effect: () => {
		gameData.barks_per_second += 1000;
	}
});
var arr_dogs = new Array(
	dog_chihuahua,
	dog_retriever,
	dog_berner
	);
