"use strict";
{
    class Mail {
        constructor(email) {
            this.email = email;
        }
        send() {
            console.log(`Sent email to ${this.email}`);
            return true;
        }
        queue() {
            console.log(`Queue an email to ${this.email}`);
            return true;
        }
    }
    class MailFuture extends Mail {
        later(after) {
            console.log(`Send email to ${this.email} in ${after} ms`);
            return true;
        }
    }
    // const mail = new Mail('bagas@gmail.com');
    // console.log(mail.send());
    // console.log(mail.queue());
    const email2 = new MailFuture('bagas@gmail.com');
    console.log(email2.later(25));
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
