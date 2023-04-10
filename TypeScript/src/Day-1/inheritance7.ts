{
    class PersonInherit {
        constructor(private firstName: string, private lastName:string)
        {

        }
        protected getFullName(): string{
            return `${this.firstName} ${this.lastName}`;
        }
        describe(): string {
            return `This is ${this.firstName} ${this,this.lastName}`
        }
    }

    class Employee extends PersonInherit {
        constructor(
            firstName: string,
            lastName: string,
            private jobTitle: string
        ){
            super(firstName, lastName)
        }
        getFullNameEmployee():string{
            return super.getFullName() //super untuk memanggil property / method dr class parent
        }
        describe(): string { //Penggunaan Overide paramater sama isinya beda
            return super.describe() +  ` Iam ${this.jobTitle}`
        }
    }

    //Instansiasi
    let employe = new Employee('Bagas', 'Arya', 'FullStack Developer')
    console.log(employe.describe());
    console.log(employe.getFullNameEmployee());
}