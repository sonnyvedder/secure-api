import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Global .env loader
    ConfigModule.forRoot({ isGlobal: true }),

    // Rate limiter
    ThrottlerModule.forRoot([{
      ttl: 60,
      limit: 20,
    }]),

    // PostgreSQL connection
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // 🚨 only for dev
    }),
  ],
  providers: [
      {
            provide: APP_GUARD,
            useClass: ThrottlerGuard
      },
  ],
})
export class AppModule {}
