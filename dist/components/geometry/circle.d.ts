/// <reference types="google.maps" />
import type { Ref } from 'react';
type CircleEventProps = {
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onDrag?: (e: google.maps.MapMouseEvent) => void;
    onDragStart?: (e: google.maps.MapMouseEvent) => void;
    onDragEnd?: (e: google.maps.MapMouseEvent) => void;
    onMouseOver?: (e: google.maps.MapMouseEvent) => void;
    onMouseOut?: (e: google.maps.MapMouseEvent) => void;
    onRadiusChanged?: (r: ReturnType<google.maps.Circle['getRadius']>) => void;
    onCenterChanged?: (p: ReturnType<google.maps.Circle['getCenter']>) => void;
};
export type CircleProps = google.maps.CircleOptions & CircleEventProps;
export type CircleRef = Ref<google.maps.Circle | null>;
/**
 * Component to render a Google Maps Circle on a map
 */
export declare const Circle: import("react").ForwardRefExoticComponent<google.maps.CircleOptions & CircleEventProps & import("react").RefAttributes<google.maps.Circle>>;
export {};
