import { Battery } from './battery';
import { Ram } from './ram';
import { Processor } from './processor';
export interface Phone {
  id: number;
  brand: string;
  model: string;
  processor: Processor;
  ram: Ram;
  screen: Screen;
  battery: Battery;
  antutu: number;
  price: number;
  valoration: number;
}
