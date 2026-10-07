import { TextEncoder, TextDecoder } from 'util';

globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder;
