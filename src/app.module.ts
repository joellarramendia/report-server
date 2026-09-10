import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { BasicReportModule } from './basic-report/basic-report.module';
import { PrinterModule } from './printer/printer.module';
import { StoreReportsModule } from './store-reports/store-reports.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    
    PrismaModule,
    
    BasicReportModule,
    
    PrinterModule,
    
    StoreReportsModule
  ],
})
export class AppModule {}
