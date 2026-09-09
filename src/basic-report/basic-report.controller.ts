import { Controller, Get } from '@nestjs/common';
import { BasicReportService } from './basic-report.service';

@Controller('basic-report')
export class BasicReportController {
  constructor(private readonly basicReportService: BasicReportService) {}

  @Get()
  async hello() {
    return await this.basicReportService.hello()
  }
}
