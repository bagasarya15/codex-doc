{
    class PersonClass
    {
        name: string = ''
        age: number = 0
        static alamat: string = ''
    }

    class Motor
    {
        make: string = ''
        model: string = ''
        color: string = ''
    }

    const person1 = new PersonClass()
    person1.age

    class Person {
        // ssn : string ;
        // protected firstName: string ;
        // protected lastName: string;
        
        constructor(public ssn:string, public firstName:string, public lastName:string)
        {
            // this.ssn=ssn
            // this.firstName=firstName
            // this.lastName=lastName
        }

        // setFirstName(sn:string){
        //     this.firstName=sn
        // }

        // setLastName(ln:string){
        //     this.lastName=ln
        // }

        getFullName(){
            return `${this.firstName} ${this.lastName}`
        }
    }

    let personObj = new Person('171-28-0926', 'Bagas', 'Arya');

    // personObj.ssn = '171-28-0926'
    // personObj.setFirstName('Bagas');
    // personObj.setLastName('Arya');
    console.log(personObj.getFullName());
}