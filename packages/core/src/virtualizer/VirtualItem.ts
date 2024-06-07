import { type ItemMeasurement } from './ItemMeasurement';

export interface VirtualItem extends ItemMeasurement {
    measureRef: (ele: HTMLElement) => void;
}
