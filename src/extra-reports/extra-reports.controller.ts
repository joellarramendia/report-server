import { Controller, Get, Res } from '@nestjs/common';
import { ExtraReportsService } from './extra-reports.service';
import type { Response } from 'express';

@Controller('extra-reports')
export class ExtraReportsController {
  constructor(private readonly extraReportsService: ExtraReportsService) { }

  @Get('html-report')
  async getHtmlReport(@Res() response: Response) {
    const pdfDoc = this.extraReportsService.getHtmlReport()
    response.setHeader('Content-Type', 'application/pdf')
    pdfDoc.info.Title = 'Html-report.pdf'
    pdfDoc.pipe(response)
    pdfDoc.end()
  }


  @Get('my-report')
  async getMyReport(@Res() response: Response) {
    const pdfDoc = this.extraReportsService.getMy()
    response.setHeader('Content-Type', 'application/pdf')
    pdfDoc.info.Title = 'Billing-Report.pdf'
    pdfDoc.pipe(response)
    pdfDoc.end()
  }



  @Get('custom-size')
  async getCustomSize(@Res() response: Response) {
    const pdfDoc = this.extraReportsService.getCustomSize()
    response.setHeader('Content-Type', 'application/pdf')
    pdfDoc.info.Title = 'Billing-Report.pdf'
    pdfDoc.pipe(response)
    pdfDoc.end()
  }

}
