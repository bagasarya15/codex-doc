{
    // function add(a:number, b:number): number;
    // function add (a:string, b:string): string;
    // function add (a: any, b: any): any {
    //     return a+b;
    // }


    // let result = add(10,20)
    // console.log(result);
    
    function sum():string;
    function sum(a:number):number;
    function sum(a:number, b:number):number;
    function sum(a:number, b:number, c:number):number;
    function sum(a?:number, b?:number, c?:number):any{
        if(a && b && c) return a + b + c;
        else if (a && b) return a + b;
        else if (a) return a;
        else return `Angka untuk dijumlahkan tidak ditemukan`
    }

//Method Overload
    class Counter {
        private current: number=0;
        count():number
        count(target: number): number[];
        count(target?:number): number | number[]{
            if(target){
                let values:number[]=[];
                for (let start = this.current; start <= target; start++){
                    values.push(start);
                }
                this.current = target;
                return values;
            }
            return ++this.current;
        }
    }

    let counter = new Counter();

    console.log(counter.count()); // return a number
    console.log(counter.count(20)); //return an array
}