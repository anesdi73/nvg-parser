import { HttpsTideActNatoIntSchemas200910NvgJsJsonSchema } from './nvg.data.1.5 ';
import createDomParser from '../createDomParser.node';
export default class NvgParser {
    private parseXML(xmlDoc: string) {
        const domParser: DOMParser = createDomParser();

        const xml = domParser.parseFromString(xmlDoc, 'text/xml');
        if (xml && (xml.firstElementChild.nodeName == 'nvg' || xml.firstElementChild.nodeName.split(':')[1] == 'nvg')) {
            const root: HttpsTideActNatoIntSchemas200910NvgJsJsonSchema = {
                version: "1.5.0",
                document: "nvg",
                items: []
            };

            return root;
        }
        throw new Error('NvgParser:parseXml received non xml nvg input');
    }
    parse(nvgDocument: string): HttpsTideActNatoIntSchemas200910NvgJsJsonSchema {
        try {
            return JSON.parse(nvgDocument);
        } catch (e) {
            //So parse as JSON failed, try to parse it as xml
            return this.parseXML(nvgDocument);
        }
    }
}