class Student{
	name = 'Den';
	surn = 'Bred';
	
	show() {
		return this.name;
		return this.surn;
	}
}

let user = new Student;
console.log(user.name);
console.log(user.surn);