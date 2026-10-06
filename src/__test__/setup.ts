// @ts-nocheck — Jest setup file; runs in Node, not in the browser app
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextEncoder, TextDecoder });
