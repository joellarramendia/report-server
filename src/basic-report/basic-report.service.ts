import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { getHelloWorldReport } from 'src/reports';



@Injectable()
export class BasicReportService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly printerService: PrinterService
    ) {}

    hello() {

        const docDefenition = getHelloWorldReport()

        const doc = this.printerService.createPdf(docDefenition)

        return doc
    }
}
