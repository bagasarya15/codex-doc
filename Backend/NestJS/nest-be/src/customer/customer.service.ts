import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
    getCustomer():string{
        try {
            return 'Hello Customer'
        } catch (error) {
            return `${error.message}`
        }
    }
}
