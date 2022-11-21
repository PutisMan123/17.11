class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
		
	}
	show(){
		return this.name + ' Продал унитаз за ' + (this.salary + this.salary/10);
	}
}

let user = new Employee('john', 100);
console.log(user.show());
