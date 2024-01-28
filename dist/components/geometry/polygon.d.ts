/// <reference types="google.maps" />
import type { Ref } from 'react';
type PolygonEventProps = {
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onDrag?: (e: google.maps.MapMouseEvent) => void;
    onDragStart?: (e: google.maps.MapMouseEvent) => void;
    onDragEnd?: (e: google.maps.MapMouseEvent) => void;
    onMouseOver?: (e: google.maps.MapMouseEvent) => void;
    onMouseOut?: (e: google.maps.MapMouseEvent) => void;
};
type PolygonCustomProps = {
    /**
     * this is an encoded string for the path, will  be decoded and used as a path
     */
    encodedPaths?: string[];
};
export type PolygonProps = google.maps.PolygonOptions & PolygonEventProps & PolygonCustomProps;
export type PolygonRef = Ref<google.maps.Polygon | null>;
/**
 * Component to render a Google Maps polygon on a map
 */
export declare const Polygon: import("react").ForwardRefExoticComponent<google.maps.PolygonOptions & PolygonEventProps & PolygonCustomProps & import("react").RefAttributes<google.maps.Polygon>>;
export {};
