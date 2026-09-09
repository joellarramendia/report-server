import { Injectable, NotFoundException } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { getCountryReport, getEmploymentLetter, getEmploymentLetterByIdReport, getHelloWorldReport } from 'src/reports';



@Injectable()
export class BasicReportService {
    constructor(
        private readonly printerService: PrinterService,
        private readonly prisma: PrismaService
    ) { }

    hello() {

        const docDefenition = getHelloWorldReport()

        const doc = this.printerService.createPdf(docDefenition)

        return doc
    }


    employmentLetter() {
        const docDefenition = getEmploymentLetter()

        const doc = this.printerService.createPdf(docDefenition)

        return doc
    }


    async employmentLetterById(employeeId: number) {
        const employee = await this.prisma.employees.findUnique({
            where: {
                id: employeeId
            }
        })

        if (!employee) throw new NotFoundException(`Employee with id ${employeeId} not found`)

        const docDefenition = getEmploymentLetterByIdReport({
            employerName: 'Fulano Mengano',
            employerPosition: 'Software Enginner',
            employeeName: employee.name,
            employeePosition: employee.position,
            employeeStartDate: employee.start_date,
            employeeHours: employee.hours_per_day,
            employeeWorkSchedule: employee.work_schedule,
            employeeCompany: 'Tucan Code Corp'
        })

        const doc = this.printerService.createPdf(docDefenition)

        return doc
    }



    async getCountries() {
        const countries = await this.prisma.countries.findMany({
            where: {
                local_name: {
                    not: null
                }
            }
        })

        const docDefenition = getCountryReport({countries})

        const doc = this.printerService.createPdf(docDefenition)

        return doc
    }
}
