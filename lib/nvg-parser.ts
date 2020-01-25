import {
	Arc,
	Arcband,
	Arrow,
	Circle,
	ContentUnbreakableCompositionMadeOfBasicShapesNoRecursion,
	Corridor,
	Ellipse,
	ContentGrouping,
	Multipoint,
	Orbit,
	Point,
	Polygon,
	Polyline,
	RectangleWithTrueGroundMeasurementIdenticalGroundDistanceForOppositeSidesOfTheRectangle,
	SymbolizedContentIncludingUnknownDefaultRendering,
	HttpsTideActNatoIntSchemas201210NvgJsJsonSchema
} from './nvg.data.2.0';
import { isBrowser, isNode } from 'browser-or-node';
import jsDom from 'jsdom';
const { JSDOM } = jsDom;
const ElementNodeType = 1;
const nvgSchemaVersion = '2.0.3';
export type nvgItemsType = (
	| Arc
	| Arcband
	| Arrow
	| Circle
	| ContentUnbreakableCompositionMadeOfBasicShapesNoRecursion
	| Corridor
	| Ellipse
	| ContentGrouping
	| Multipoint
	| Orbit
	| Point
	| Polygon
	| Polyline
	| RectangleWithTrueGroundMeasurementIdenticalGroundDistanceForOppositeSidesOfTheRectangle
	| SymbolizedContentIncludingUnknownDefaultRendering
	| Text
)[];
export default class NvgParser {
	private parseXML(xmlDoc: string) {
		let domParser: DOMParser;
		if (isBrowser) {
			domParser = new DOMParser();
		} else {
			const temp = new JSDOM().window.DOMParser;
			domParser = new temp();
		}
		const xml = domParser.parseFromString(xmlDoc, 'text/xml');
		if (xml && (xml.firstElementChild.nodeName == 'nvg' || xml.firstElementChild.nodeName.split(':')[1] == 'nvg')) {
			//check that we actually are parsing NVG but ignore namespace
			const version = xml.firstElementChild.getAttribute('version');
			const nodes = xml.firstChild.childNodes;
			const root: HttpsTideActNatoIntSchemas201210NvgJsJsonSchema = {
				version: nvgSchemaVersion,
				document: 'nvg',
				items: []
			};
			this.parseSubNodes(nodes, root);

			//Hack to assign the real version. The json schema has the version fixed;
			const rootTemp: any = root;
			rootTemp.version = version;

			return root;
		}
		throw new Error('NvgParser:parseXml received non xml nvg input');
	}
	nodeAttibutes(node, current) {
		Array.prototype.slice.call(node.attributes).forEach(attr => {
			if (attr.name == 'modifiers' || attr.name == 'style') {
				current[attr.name] = {};
				var attr_list = attr.value.trim().split(';');
				for (var j = 0; j < attr_list.length; j++) {
					if (attr_list[j]) {
						var s = attr_list[j].split(':');
						if (s[0] && s[1]) current[attr.name][s[0].trim()] = isNaN(Number(s[1].trim())) ? s[1].trim() : Number(s[1].trim());
					}
				}
				return;
			}
			if (attr.name == 'points') {
				current[attr.name] = [];
				var attr_list = attr.value.trim().split(' ');
				for (var j = 0; j < attr_list.length; j++) {
					if (attr_list[j]) {
						var s = attr_list[j].split(',');
						if (s[0] && s[1]) current[attr.name].push([Number(s[0]), Number(s[1])]);
					}
				}
				return;
			}
			current[attr.name] = isNaN(Number(attr.value)) ? attr.value : Number(attr.value);
		});
	}
	parseSubNodes(nodes: NodeListOf<Node & ChildNode>, current) {
		const nonDrawablesNodes = ['extendeddata', 'extension', 'metadata', 'schema', 'section', 'simpledata', 'simplefield'];
		for (let i = 0; i < nodes.length; i++) {
			const node = nodes[i];

			if (node.nodeType == ElementNodeType) {
				let nodeName = node.nodeName.split(':')[1] || node.nodeName;
				nodeName = nodeName.toLowerCase();
				const item: any = {};
				if (nonDrawablesNodes.indexOf(nodeName) >= 0) {
					switch (nodeName) {
						case 'extendeddata':
							current[nodeName] = item;
							this.nodeAttibutes(node, item);
							this.tagAttributes(node.childNodes, item);
							break;
						case 'extension':
							console.log('TODO parsesubnodes: ' + nodeName);
							// TODO How to handle extended data
							current[nodeName] = []; //this is for root level
							break;
						case 'metadata':
							console.log('TODO parsesubnodes: ' + nodeName);
							// TODO How to handle metadata data
							current[nodeName] = item;
							break;
						case 'schema':
							if (!current.hasOwnProperty(nodeName)) {
								current[nodeName] = [];
							}
							current[nodeName].push(item);
							this.nodeAttibutes(node, item);
							this.tagAttributes(node.childNodes, item);
							break;
						case 'section':
							if (!current.hasOwnProperty('simpledatasection')) {
								current.simpledatasection = [];
							}
							current.simpledatasection.push(item);
							this.nodeAttibutes(node, item);
							item['simpledata'] = [];
							this.parseSubNodes(node.childNodes, item);
							break;
						case 'simpledata':
							this.nodeAttibutes(node, item);
							item['value'] = node.textContent;
							current.simpledata.push(item);
							this.tagAttributes(node.childNodes, item);
							break;
						case 'simplefield':
							current[nodeName] = item;
							this.nodeAttibutes(node, item);
							this.tagAttributes(node.childNodes, item);
							break;
						default:
							console.log('TODO parsesubnodes default: ' + nodeName);
					}
				} else {
					this.nodeAttibutes(node, item);
					item.drawable = nodeName;

					if (node.childNodes.length) {
						this.tagAttributes(node.childNodes, item);
					}
					if (item.drawable == 'text') {
						//This is for handling the text element
						const textElement = node as Element;
						item['content'] = textElement.firstElementChild.textContent;
					}
					if (item.drawable == 'g' || item.drawable == 'composite') {
						item.items = [];
						this.parseSubNodes(node.childNodes, item);
					}
					if (item.drawable == 'a') {
						//This is for handling the old A element
						this.parseSubNodes(node.childNodes, current);
					} else {
						// otherwise just add featuers
						current.items.push(item);
					}
				}
			}
		}
	}
	tagAttributes(nodes, current) {
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			var nodeName = node.nodeName.split(':');
			if (nodeName[0] == 'dc' || nodeName[0] == 'dcterms') {
				nodeName = nodeName[0];
			} else {
				nodeName = nodeName[1];
			}
			if (node.nodeType == 1 && nodeName) {
				nodeName = nodeName.toLowerCase();
				switch (nodeName) {
					case 'begin':
						current[nodeName] = node.textContent;
						break;
					case 'end':
						current[nodeName] = node.textContent;
						break;
					case 'dc':
					case 'dcterms':
						current[node.nodeName] = node.textContent;
						break;
					case 'content':
						current[nodeName] = node.textContent;
						break;
					case 'exclude':
						if (!current.hasOwnProperty(nodeName)) {
							current.exclusion = [];
						}
						this.tagAttributes(node.childNodes, current.exclusion);
						break;
					case 'extendeddata':
						if (!current.hasOwnProperty(nodeName)) {
							current[nodeName] = {};
							current[nodeName].simpledata = [];
						}
						this.nodeAttibutes(node, current[nodeName]);
						this.parseSubNodes(node.childNodes, current[nodeName]);
						break;
					case 'extension':
						console.log('TODO tagAttributes: ' + nodeName);
						// TODO How to handle extended data
						current[nodeName] = []; //this is for node
						break;
					case 'metadata':
						current[nodeName] = {};
						this.tagAttributes(node.childNodes, current[nodeName]);
						break;
					case 'textinfo':
						current[nodeName] = node.textContent;
						break;
					case 'timespan':
						current[nodeName] = {};
						this.tagAttributes(node.childNodes, current[nodeName]);
						break;
					case 'timestamp':
						current[nodeName] = node.textContent;
						break;
					case 'simplefield':
						if (!current.hasOwnProperty(nodeName)) {
							current[nodeName] = [];
						}
						var field = {};
						this.nodeAttibutes(node, field);
						current[nodeName].push(field);
						break;
					case 'arcband-ring':
					case 'circular-ring':
					case 'elliptic-ring':
					case 'linear-ring':
					case 'rect-ring':
						var exclude = {};
						exclude['ring'] = nodeName.replace('-', '');
						this.nodeAttibutes(node, exclude);
						current.push(exclude);
						break;
					default:
						//Debug logging, remove later
						if (
							[
								'arc',
								'arcband',
								'arrow',
								'circle',
								'composite',
								'content-item',
								'corridor',
								'ellipse',
								'g',
								'multipoint',
								'orbit',
								'point',
								'polygon',
								'polyline',
								'rect',
								'text'
							].lastIndexOf(nodeName) == -1
						) {
							console.log('TODO tagAttributes default: ' + nodeName);
						}
				}
			}
		}
	}
	parse(nvgDocument: string): HttpsTideActNatoIntSchemas201210NvgJsJsonSchema {
		try {
			return JSON.parse(nvgDocument);
		} catch (e) {
			//So parse as JSON failed, try to parse it as xml
			return this.parseXML(nvgDocument);
		}
	}
}
