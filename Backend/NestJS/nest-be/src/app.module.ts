import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategoryModule } from './product_category/product_category.module';
import { ProdCatDtoModule } from './prod-cat-dto/prod-cat-dto.module';
import { UsersModule } from './users/users.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { AuthModule } from './auth/auth.module';

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
    ProductCategoryModule, 
    ProdCatDtoModule,
    UsersModule,
    CustomerModule,
    ProductModule,
    OrdersModule,
    OrderDetailModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users')

    
    // .exclude('auth/ (.*)')
    // .forRoutes('*')
  }
}
