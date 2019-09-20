/**
 * Precision constants
 */
export declare const FLOAT_COMPRESSION_PRECISION = 1000;
export declare const DATE_LOW_PRECISION = 100000;
/**
 * Floating point delimiters
 */
export declare const FLOAT_FULL_PRECISION_DELIMITER = ",";
export declare const FLOAT_REDUCED_PRECISION_DELIMITER = ".";
/**
 * Data type tokens
 */
export declare const INTEGER_TOKEN = "\u00A2";
export declare const FLOAT_TOKEN = "\u00A3";
export declare const STRING_TOKEN = "\u00A8";
export declare const DATE_TOKEN = "\u00F8";
export declare const LP_DATE_TOKEN = "\u00B1";
export declare const UNREFERENCED_INTEGER_TOKEN = "\u00A4";
export declare const UNREFERENCED_FLOAT_TOKEN = "\u00A5";
export declare const UNREFERENCED_STRING_TOKEN = "\u00B4";
export declare const UNREFERENCED_DATE_TOKEN = "\u00BF";
export declare const UNREFERENCED_LP_DATE_TOKEN = "\u00FF";
export declare const REF_INTEGER_TOKEN = "\u00BA";
export declare const REF_FLOAT_TOKEN = "\u00DD";
export declare const REF_STRING_TOKEN = "\u00DF";
export declare const REF_DATE_TOKEN = "\u00D7";
export declare const REF_LP_DATE_TOKEN = "\u00FC";
export declare const NULL_TOKEN = "\u00A7";
export declare const UNDEFINED_TOKEN = "\u00B5";
export declare const BOOLEAN_TRUE_TOKEN = "\u00BB";
export declare const BOOLEAN_FALSE_TOKEN = "\u00AB";
/**
 * String escape tokens
 */
export declare const ESCAPE_CHARACTER = "\\";
export declare const ESCAPED_STRING_TOKEN: string;
export declare const ESCAPED_UNREFERENCED_STRING_TOKEN: string;
/**
 * Regex lookups
 */
export declare const REGEX_ESCAPE_CHARACTER: RegExp;
export declare const REGEX_ESCAPED_ESCAPE_CHARACTER: RegExp;
export declare const REGEX_STRING_TOKEN: RegExp;
export declare const REGEX_ESCAPED_STRING_TOKEN: RegExp;
export declare const REGEX_UNREFERENCED_STRING_TOKEN: RegExp;
export declare const REGEX_UNREFERENCED_ESCAPED_STRING_TOKEN: RegExp;
export declare const DATE_REGEX: RegExp;
/**
 * Structural tokens
 */
export declare const OBJECT_START_TOKEN = "{";
export declare const OBJECT_END_TOKEN = "}";
export declare const TEMPLATE_OBJECT_START = "\u00A6";
export declare const TEMPLATE_OBJECT_END = "\u2021";
export declare const TEMPLATE_OBJECT_FINAL = "\u2014";
export declare const ARRAY_START_TOKEN = "|";
export declare const ARRAY_END_TOKEN = "\u00F7";
export declare const ARRAY_REPEAT_TOKEN = "\u00FE";
export declare const ARRAY_REPEAT_MANY_TOKEN = "^";
export declare const ARRAY_REPEAT_COUNT_THRESHOLD = 4;
/**
 * General tokenization constants
 */
export declare const REFERENCE_HEADER_LENGTH = 1;
export declare const DELIMITING_TOKENS_THRESHOLD = 122;
export declare const STRING_IDENT_PREFIX = "$";
/**
 * Small integer tokens
 */
export declare const INTEGER_SMALL_EXCLUSIVE_BOUND_LOWER = -10;
export declare const INTEGER_SMALL_EXCLUSIVE_BOUND_UPPER = 10;
export declare const INTEGER_SMALL_TOKEN_EXCLUSIVE_BOUND_LOWER = 191;
export declare const INTEGER_SMALL_TOKEN_EXCLUSIVE_BOUND_UPPER = 211;
export declare const INTEGER_SMALL_TOKEN_OFFSET = -201;
export declare const INTEGER_SMALL_TOKEN_ELEMENT_OFFSET = 9;
export declare const INTEGER_SMALL_TOKENS: string[];