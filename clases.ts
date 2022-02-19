
//clases

class User 
{
    private name: string;
    public email: string;
    protected age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register() {
        console.log(`${this.name} is registered`)
    }

    showMeAge() {
        return this.age;
    }

    private ageInYears() {
        return this.age + ' years';
    }

    payInvoice() {
        console.log(`${this.name} paid invoice`);
    }
}


class Member extends User 
{
    id: number;

    constructor(id, name, email, age) {
       super(name, email, age);
       this.id = id;
    }

    payInvoice2() {
        super.payInvoice()
    }
}
var person = new User("luis", "lepfsd@live.com", 32);
var person2 = new Member(1, "luis", "lepfsd@live.com", 32);
person2.payInvoice2();



document.write()
