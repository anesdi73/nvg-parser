
/**
 * This file was copied from the 2.0 schema and manually tunned to adapt to 1.5
 */

/**
 * Exclusion areas
 */
export type Exclusion = [Linearring, Arcbandring, Rectangularring, Ellipticring, Circularring];
export type Legtype = "rhumb-line" | "great-circle";
/**
 * [x, y]
 */
export type LonLat = number[];
/**
 * A array of geo locations [(x, y), ...]
 */
export type Points = LonLat[];

/**
 * JSON encoding of the NATO Vector Graphics (NVG) latest v1.5.x data format.
 */
export interface HttpsTideActNatoIntSchemas200910NvgJsJsonSchema {
  document: "nvg";
  extendeddata?: Extendeddata;
  metadata?: any[];
  items: (
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
  classification?: string
  schema?: Schema[];
  version: "1.5.0";
  id?: string;
  [k: string]: any;
}
export interface Extendeddata {
  schemaRef?: string;
  simpledata?: Simpledata[];
  section?: Section[];
  [k: string]: any;
}
export interface Simpledata {
  key: string;
  value?: string;
  [k: string]: any;
}
export interface Section {
  label: string;
  schemaRef?: string;
  simpledata?: Simpledata[];
  [k: string]: any;
}
export interface Arc {
  /**
   * Range for longitudes: in decimal degrees using WGS-84 datum, closed interval [-180.0 to 180.0].
   */
  cx: number;
  /**
   * Range for latitudes:: in decimal degrees using WGS-84 datum, closed interval [-90.0 to 90.0].
   */
  cy: number;
  drawable: "arc";
  /**
   * All angles are expressed in degrees with a range of [0.0 to 360.0] progressing from 0.0 to 360.0 in the clockwise direction. When the angle indicates direction 0.0 indicates North. If a value is not specified a value of 0.0 is implied.
   */
  endangle: number;
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  modifiers?: Modifiers;
  /**
   * Rotation of the symbol in degrees (0 = north). Counterclockwise
   */
  rotation?: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  rx: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  ry: number;
  /**
   * All angles are expressed in degrees with a range of [0.0 to 360.0] progressing from 0.0 to 360.0 in the clockwise direction. When the angle indicates direction 0.0 indicates North. If a value is not specified a value of 0.0 is implied.
   */
  startangle: number;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  [k: string]: any;
}
/**
 * Symbol modifiers
 */
export interface Modifiers {
  [k: string]: any;
}
export interface Style {
  /**
   * the color to fill an area with expressed as an hexadecimal RGB value. If the area should not be filled, the value is none, which is the default value.
   */
  fill?: string;
  /**
   * the opacity of an area that is filled expressed as a decimal value between 0 (completely transparent) and 1 (opaque). The default value is 1, opaque.
   */
  "fill-opacity"?: number;
  /**
   * a pattern to fill the area with using the color defined by "fill". Valid values are: Dotted, MediumDotted, VerticalLine, HorizontalLine, DiagonalUpwardLine, DiagonalDownwardLine, DottedGrid, Grid, OutlinedDiamond, SolidDiamond, DiagonalBrick.
   */
  "fill-pattern"?: string;
  /**
   * the color to render the text in expressed as an hexadecimal RGB value. The default value is #000000 (black).
   */
  "font-color"?: string;
  /**
   * the name of the font to use. The default font-family is system specific, use this attribute if you require a specific font. Keep in mind that the font may not exist in the system rendering the document.
   */
  "font-family"?: string;
  /**
   * height[unit] defaulted to px or specified physical units for scale-driven text size. Possible values are: px (pixels, default), m (meters), km (kilometers), nm (nautical miles). example: font-size:16px or font-size:12km
   */
  "font-size"?: string;
  /**
   * the style of the font with the following possible values: normal (default), italic
   */
  "font-style"?: string;
  /**
   * the weight of the font with the following possible values: normal (default), bold
   */
  "font-weight"?: string;
  /**
   * (first point): Line pattern valid values are: None, Arrow, OpenArrow, StealthArrow, DiamondArrow, OvalArrow
   */
  "line-pattern-begin"?: string;
  /**
   * a value from 1 to 3. Line pattern size default '2' to 3x stroke size. Other scaling for value '1' (2x of stroke size) and value '3' (5x of stroke size).
   */
  "line-pattern-begin-size"?: number;
  /**
   * (last point): Line pattern valid values are: None, Arrow, OpenArrow, StealthArrow, DiamondArrow, OvalArrow
   */
  "line-pattern-end"?: string;
  /**
   * a value from 1 to 3, Line pattern size default '2' to 3x stroke size. Other scaling for value '1' (2x of stroke size) and value '3' (5x of stroke size).
   */
  "line-pattern-end-size"?: number;
  /**
   * the color of a line expressed as an hexadecimal RGB value. Default value is #000000 (black).
   */
  stroke?: string;
  /**
   *  the dashed representation of the line with the following valid values: none - (default) Indicates that no dashing is used (a solid line), <dasharray> - A list of comma-separated <length>'s specified in pixels. All <length>'s must positive values greater than zero. For example: stroke-dash='5,3,2'
   */
  "stroke-dash"?: string;
  /**
   * the opacity of a line expressed as a decimal value between 0 (completely transparent) and 1 (opaque). Default value is 1.0 (opaque).
   */
  "stroke-opacity"?: number;
  /**
   * the width of a line expressed in number of pixels. Default value is 1.
   */
  "stroke-width"?: number;
  /**
   * Specifies the alignment of the text with respect to the reference point (x, y) prior to rotation. Valid values are: left, right, center (default).
   */
  "text-align"?: string;
  /**
   * Specifies the vertical alignment of the text with respect to the reference point (x, y) prior to rotation. Valid values are: top, middle (default), bottom.
   */
  "vertical-align"?: string;
  [k: string]: any;
}
/**
 * A pair of items (<begin> and <end>, each one is optional) to define a show/hide period (based on strict DTG) for the shape as defined by KML TimeSpan. Timezone information is required.
 */
export interface Timespan {
  begin?: string;
  end?: string;
  [k: string]: any;
}
export interface Arcband {
  /**
   * Range for longitudes: in decimal degrees using WGS-84 datum, closed interval [-180.0 to 180.0].
   */
  cx: number;
  /**
   * Range for latitudes:: in decimal degrees using WGS-84 datum, closed interval [-90.0 to 90.0].
   */
  cy: number;
  drawable: "arcband";
  /**
   * All angles are expressed in degrees with a range of [0.0 to 360.0] progressing from 0.0 to 360.0 in the clockwise direction. When the angle indicates direction 0.0 indicates North. If a value is not specified a value of 0.0 is implied.
   */
  endangle: number;
  exclusion?: Exclusion;
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  maxaltitude?: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  maxr: number;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  minaltitude?: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  minr: number;
  modifiers?: Modifiers;
  /**
   * All angles are expressed in degrees with a range of [0.0 to 360.0] progressing from 0.0 to 360.0 in the clockwise direction. When the angle indicates direction 0.0 indicates North. If a value is not specified a value of 0.0 is implied.
   */
  startangle: number;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  [k: string]: any;
}
export interface Linearring {
  "leg-type"?: Legtype;
  points: Points;
  ring: "linearring";
  [k: string]: any;
}
export interface Arcbandring {
  /**
   * Range for longitudes: in decimal degrees using WGS-84 datum, closed interval [-180.0 to 180.0].
   */
  cx: number;
  /**
   * Range for latitudes:: in decimal degrees using WGS-84 datum, closed interval [-90.0 to 90.0].
   */
  cy: number;
  /**
   * All angles are expressed in degrees with a range of [0.0 to 360.0] progressing from 0.0 to 360.0 in the clockwise direction. When the angle indicates direction 0.0 indicates North. If a value is not specified a value of 0.0 is implied.
   */
  endangle: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  maxr: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  minr: number;
  ring: "arcbandring";
  /**
   * All angles are expressed in degrees with a range of [0.0 to 360.0] progressing from 0.0 to 360.0 in the clockwise direction. When the angle indicates direction 0.0 indicates North. If a value is not specified a value of 0.0 is implied.
   */
  startangle: number;
  [k: string]: any;
}
export interface Rectangularring {
  /**
   * Range for longitudes: in decimal degrees using WGS-84 datum, closed interval [-180.0 to 180.0].
   */
  cx: number;
  /**
   * Range for latitudes:: in decimal degrees using WGS-84 datum, closed interval [-90.0 to 90.0].
   */
  cy: number;
  ring: "rectangularring";
  /**
   * Rotation of the symbol in degrees (0 = north). Counterclockwise
   */
  rotation?: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  rx: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  ry: number;
  [k: string]: any;
}
export interface Ellipticring {
  /**
   * Range for longitudes: in decimal degrees using WGS-84 datum, closed interval [-180.0 to 180.0].
   */
  cx: number;
  /**
   * Range for latitudes:: in decimal degrees using WGS-84 datum, closed interval [-90.0 to 90.0].
   */
  cy: number;
  /**
   * Rotation of the symbol in degrees (0 = north). Counterclockwise
   */
  rotation?: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  rx: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  ry: number;
  ring: "ellipticring";
  [k: string]: any;
}
export interface Circularring {
  /**
   * Range for longitudes: in decimal degrees using WGS-84 datum, closed interval [-180.0 to 180.0].
   */
  cx: number;
  /**
   * Range for latitudes:: in decimal degrees using WGS-84 datum, closed interval [-90.0 to 90.0].
   */
  cy: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  r: number;
  ring: "circularring";
  [k: string]: any;
}
export interface Arrow {
  drawable: "arrow";
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  "leg-type"?: Legtype;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  modifiers?: Modifiers;
  points: Points;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  /**
   * Width expressed in meters
   */
  width: number;
  [k: string]: any;
}
export interface Circle {
  /**
   * Range for longitudes: in decimal degrees using WGS-84 datum, closed interval [-180.0 to 180.0].
   */
  cx: number;
  /**
   * Range for latitudes:: in decimal degrees using WGS-84 datum, closed interval [-90.0 to 90.0].
   */
  cy: number;
  drawable: "circle";
  exclusion?: Exclusion;
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  maxaltitude?: number;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  minaltitude?: number;
  modifiers?: Modifiers;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  r: number;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  [k: string]: any;
}
export interface ContentUnbreakableCompositionMadeOfBasicShapesNoRecursion {
  drawable: "composite";
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  items?: (
    | Arc
    | Arcband
    | Arrow
    | Circle
    | Corridor
    | Ellipse
    | Multipoint
    | Orbit
    | Point
    | Polygon
    | Polyline
    | RectangleWithTrueGroundMeasurementIdenticalGroundDistanceForOppositeSidesOfTheRectangle
    | Text
  )[];
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  modifiers?: Modifiers;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  [k: string]: any;
}
export interface Corridor {
  drawable: "corridor";
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  "leg-type"?: Legtype;
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  maxaltitude?: number;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  minaltitude?: number;
  modifiers?: Modifiers;
  points: Points;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  /**
   * Width expressed in meters
   */
  width: number;
  [k: string]: any;
}
export interface Ellipse {
  /**
   * Range for longitudes: in decimal degrees using WGS-84 datum, closed interval [-180.0 to 180.0].
   */
  cx: number;
  /**
   * Range for latitudes:: in decimal degrees using WGS-84 datum, closed interval [-90.0 to 90.0].
   */
  cy: number;
  drawable: "ellipse";
  exclusion?: Exclusion;
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  maxaltitude?: number;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  minaltitude?: number;
  modifiers?: Modifiers;
  /**
   * Rotation of the symbol in degrees (0 = north). Counterclockwise
   */
  rotation?: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  rx: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  ry: number;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  [k: string]: any;
}
export interface Multipoint {
  drawable: "multipoint";
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  modifiers?: Modifiers;
  points: Points;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  [k: string]: any;
}
export interface Orbit {
  drawable: "orbit";
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  maxaltitude?: number;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  minaltitude?: number;
  modifiers?: Modifiers;
  points: Points;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  /**
   * Width expressed in meters
   */
  width: number;
  [k: string]: any;
}
export interface Point {
  /**
   * Course in degrees (0 = north). Clockwise
   */
  course?: number;
  drawable: "point";
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  modifiers?: Modifiers;
  /**
   * Rotation of the symbol in degrees (0 = north). Counterclockwise
   */
  rotation?: number;
  /**
   * Speed in kilometers per hour (>= 0)
   */
  speed?: number;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  /**
   * Range for longitudes: in decimal degrees using WGS-84 datum, closed interval [-180.0 to 180.0].
   */
  x: number;
  /**
   * Range for latitudes:: in decimal degrees using WGS-84 datum, closed interval [-90.0 to 90.0].
   */
  y: number;
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  z?: number;
  [k: string]: any;
}
export interface Polygon {
  drawable: "polygon";
  exclusion?: Exclusion;
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  "leg-type"?: Legtype;
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  maxaltitude?: number;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  minaltitude?: number;
  modifiers?: Modifiers;
  points: Points;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  [k: string]: any;
}
export interface Polyline {
  drawable: "polyline";
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  "leg-type"?: Legtype;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  modifiers?: Modifiers;
  points: Points;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  [k: string]: any;
}
export interface RectangleWithTrueGroundMeasurementIdenticalGroundDistanceForOppositeSidesOfTheRectangle {
  /**
   * Range for longitudes: in decimal degrees using WGS-84 datum, closed interval [-180.0 to 180.0].
   */
  cx: number;
  /**
   * Range for latitudes:: in decimal degrees using WGS-84 datum, closed interval [-90.0 to 90.0].
   */
  cy: number;
  drawable: "rect";
  exclusion?: Exclusion;
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  maxaltitude?: number;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  /**
   * Elevation in meters, 0 indicating WGS-84 geoid surface. Positive values indicate an altitude above the surface, negative values indicate a depth below the surface.
   */
  minaltitude?: number;
  modifiers?: Modifiers;
  /**
   * Rotation of the symbol in degrees (0 = north). Counterclockwise
   */
  rotation?: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  rx: number;
  /**
   * The radius or length expressed in meters. This number should be positive.
   */
  ry: number;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  [k: string]: any;
}
export interface Text {
  content: string;
  drawable: "text";
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  /**
   * Rotation of the symbol in degrees (0 = north). Counterclockwise
   */
  rotation?: number;
  style?: Style;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  /**
   * Range for longitudes: in decimal degrees using WGS-84 datum, closed interval [-180.0 to 180.0].
   */
  x: number;
  /**
   * Range for latitudes:: in decimal degrees using WGS-84 datum, closed interval [-90.0 to 90.0].
   */
  y: number;
  [k: string]: any;
}
export interface ContentGrouping {
  drawable: "g";
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  items?: (
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
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  style?: Style;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  [k: string]: any;
}
export interface SymbolizedContentIncludingUnknownDefaultRendering {
  drawable: "content-item";
  extendeddata?: Extendeddata;
  /**
   * Extension point for structured community of interest specific content.
   */
  extension?: any[];
  href?: string;
  /**
   * A short text label describing the content.
   */
  label?: string;
  /**
   * named container for NDMS / Dublin Core defined metadata
   */
  metadata?: {
    [k: string]: any;
  };
  modifiers?: Modifiers;
  style?: Style;
  /**
   * Any valid symbol code Type in the scheme "chars+number" : any valid characters. Format: (symbol scheme):(symbol code) Example: app6b:G*C*MGPI--*****
   */
  symbol?: string;
  /**
   * Additional human readlable text in addition to @label. Long text content should be placed here.
   */
  textinfo?: string;
  timespan?: Timespan;
  /**
   * comparable point in time (DTG) to represent the last state change of this element
   */
  timestamp?: string;
  uri: string;
  [k: string]: any;
}
export interface Schema {
  schemaId?: string;
  simplefield?: Simplefield[];
  [k: string]: any;
}
export interface Simplefield {
  description?: string;
  id: string;
  label?: string;
  type: string;
  unit?: string;
  [k: string]: any;
}
