import { Injectable } from '@nestjs/common';
import { roles } from 'models';

@Injectable()
export class RolesService {
    async findAll() {
        try {
          const dataRole = await roles.findAll();
    
          let succes = {
            message: 'success',
            result: dataRole,
          };

          return succes;
        } catch (error) {
          return error.message;
        }
    }    
}

