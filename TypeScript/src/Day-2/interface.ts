{
    // interface Person {
    //     firstName: string;
    //     lastName: string;
    // }
    
    // let nama:Person={
    //     firstName: 'John',
    //     lastName:'Doe'
    // }
    
    // //Array 
    
    // let namaArray:Person[]=[{
    //     firstName: 'John',
    //     lastName:'Doe'
    // }]
    
    // // console.log(getFullName);
    
    // interface Car{
    
    // }
    
    // let car:Car[]
    // car=[{
    
    // }]
    

    interface Mailable{
        send(): any
        queue(): any
    }
    
    interface FutureMailable extends Mailable{
        later( after: number): any
    }

    class Mail implements Mailable{
        constructor(public email:string) {
            
        }
        send() : any{
            console.log(`Sent email to ${this.email}`);
            return true;
        }
        queue(): any {
            console.log(`Queue an email to ${this.email}`);
            return true;
        }
    }

    class MailFuture extends Mail implements FutureMailable {
        later(after: number): any {
            console.log(`Send email to ${this.email} in ${after} ms`);
            return true;
        }

        // send() : any{
        //     console.log(`Sent email to ${this.email}`);
        //     return true;
        // }
        // queue(): any {
        //     console.log(`Queue an email to ${this.email}`);
        //     return true;
        // }
    }

    // const mail = new Mail('bagas@gmail.com');
    // console.log(mail.send());
    // console.log(mail.queue());
    const email2 = new MailFuture('bagas@gmail.com',)
    console.log(email2.later(25))
/*
    interface A{
        a():void
    }
    interface B{
        b():void
    }
    interface C{
        c():void
    }
    interface D extends B, C { // ketika implement interface D maka memiliki semua method a, b, c
        d():void
    }
*/
}