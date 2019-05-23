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
			<div id="upgrades${this.id}" class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-sm-6">
							<h4 class="text-important">${this.title}</h4>
						</div>
						<div class="col-sm-6">
							<h4 class="text-muted" style="text-align: right">${this.cost} barks</h4>
						</div>
					</div>	
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-sm-6">
							<h4 class="text-muted">${this.description}</h4>
						</div>
						<div class="col-sm-6">
							<h4 class="text-muted" style="text-align: right">${this.amount} owned</h4>
						</div>
					</div>	
					
				</div>
			</div>
			`);
		this.$elem.click(() => {
			this.$elem.remove();
		});
		$("#dogs").append(this.$elem);
	}
	hide(){
		this.$elem.hide();
	}
	show(){
		this.$elem.show();
	}
}



var dog_chihuahua = new Dog({
	title: "Chihuahua",
	description: "Small dog that packs a small bark<br>(Generates 1 Bark per Second)",
	cost: 10,
	amount: 0,
	id: "dogChihuahua"
});
