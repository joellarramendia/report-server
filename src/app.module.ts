import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { BasicReportModule } from './basic-report/basic-report.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    
    PrismaModule,
    
    BasicReportModule
  ],
})
export class AppModule {}
