import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

import { BasicReportService } from './basic-report.service';

@Controller('basic-report')
export class BasicReportController {
  constructor(private readonly basicReportService: BasicReportService) { }

  @Get()
  hello(@Res() response: Response) {

    const pdfDoc = this.basicReportService.hello()
    response.setHeader('Content-Type', 'application/pdf')
    pdfDoc.info.Title = 'Hola-Mundo.pdf'
    pdfDoc.pipe(response)
    pdfDoc.end()
  }
}
