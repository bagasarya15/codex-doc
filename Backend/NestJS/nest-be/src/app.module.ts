import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { customer } from 'models';
import { ProductCategoryModule } from './product_category/product_category.module';

@Module({
  imports: [SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        host: process.env.HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        models: [], 
        autoLoadModels: true,
      }),
    }),
    UserModule, 
    CustomerModule, 
    ProductCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
