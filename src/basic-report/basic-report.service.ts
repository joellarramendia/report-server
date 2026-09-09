import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BasicReportService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async hello() {
        return this.prisma.employees.findFirst()
    }
}
