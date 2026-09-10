import { Module } from '@nestjs/common';
import { StoreReportsService } from './store-reports.service';
import { StoreReportsController } from './store-reports.controller';
import { PrinterModule } from 'src/printer/printer.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [StoreReportsController],
  providers: [StoreReportsService],
  imports: [PrinterModule, PrismaModule]
})
export class StoreReportsModule {}
