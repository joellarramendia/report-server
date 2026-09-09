import { TDocumentDefinitions } from "pdfmake/interfaces"


export const getHelloWorldReport = () => {
    const docDefenition: TDocumentDefinitions = {
        content: ['Hola mundo']
    }

    return docDefenition
}