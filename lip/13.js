class Employee {
	#name;
	#age;
	#salary;
	
	constructor(name, age, salary) {
		this.#name = name;
		this.#age = age;
		this.#salary = salary;
		
	}
	show(){
		return this.#name + ', ' + this.#age + ' года' + ' Продал унитаз за ' + (this.#salary + this.#salary/10);
	}
}

let user = new Employee('john', 22, 100);
console.log(user.show());
