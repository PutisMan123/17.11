class Student {
	constructor(){
		this.name = "";
		this.surn = "";
	}
	show() {
       console.log(this.name);
	   console.log(this.surn);
	}
	cape(){
		this.name = this.name[0].toUpperCase() + this.name.slice(1);
		this.surn = this.surn[0].toUpperCase() + this.surn.slice(1);
		this.show();
		console.log(this.name[0]);
		console.log(this.surn[0]);
	}
}

let user1 = new Student();
user1.name = 'den';
user1.surn = 'bred'
user1.cape();

