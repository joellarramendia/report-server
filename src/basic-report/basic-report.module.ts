import { Module } from '@nestjs/common';
import { BasicReportService } from './basic-report.service';
import { BasicReportController } from './basic-report.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrinterModule } from 'src/printer/printer.module';

@Module({
  controllers: [BasicReportController],
  providers: [BasicReportService],
  imports: [PrismaModule, PrinterModule]
})
export class BasicReportModule {}
