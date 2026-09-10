import { Injectable, NotFoundException } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { orderByIdReport } from 'src/reports';

@Injectable()
export class StoreReportsService {
    constructor(
        private readonly printerService: PrinterService,
        private readonly prisma: PrismaService
    ) { }

    async getOrderByIdReport(orderId: number) {
        const order = await this.prisma.orders.findUnique({
            where: {
                order_id: orderId,
            },
            include: {
                customers: true,
                order_details: {
                    include: {
                        products: true
                    }
                }
            }
        })

        if(!order) throw new NotFoundException(`Order with id ${orderId} not found`)
        // console.log(JSON.stringify(order, null, 2))

        const docDefenition = orderByIdReport({
            data: order as any
        })

        const doc = this.printerService.createPdf(docDefenition)

        return doc
    }
}
