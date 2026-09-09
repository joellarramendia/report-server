import { Controller, Get, Param, Res } from '@nestjs/common';
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


  @Get('employment-letter')
  async employmentLetter(@Res() response: Response) {
    const pdfDoc = this.basicReportService.employmentLetter()
    
    response.setHeader('Content-Type', 'application/pdf')
    pdfDoc.info.Title = 'Employment-Letter.pdf'
    pdfDoc.pipe(response)
    pdfDoc.end()
  }



  @Get('employment-letter/:employeeId')
  async employmentLetterById(@Res() response: Response, @Param('employeeId') employeeId: string) {
    const pdfDoc = await this.basicReportService.employmentLetterById(+employeeId)
    
    response.setHeader('Content-Type', 'application/pdf')
    pdfDoc.info.Title = 'Employment-Letter.pdf'
    pdfDoc.pipe(response)
    pdfDoc.end()
  }


  @Get('countries')
  async getCountriesReport(@Res() response: Response) {

    const pdfDoc = await this.basicReportService.getCountries()
    response.setHeader('Content-Type', 'application/pdf')
    pdfDoc.info.Title = 'Countries-report.pdf'
    pdfDoc.pipe(response)
    pdfDoc.end()
  }
}
