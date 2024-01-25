export function latLngEquals(
  a: google.maps.LatLngLiteral | google.maps.LatLng | undefined | null,
  b: google.maps.LatLngLiteral | google.maps.LatLng | undefined | null
): boolean {
  if (!a || !b) return false;
  const A = toLatLngLiteral(a);
  const B = toLatLngLiteral(b);
  if (A.lat !== B.lat || A.lng !== B.lng) return false;
  return true;
}

export function toLatLngLiteral(
  obj: google.maps.LatLngLiteral | google.maps.LatLng
): google.maps.LatLngLiteral {
  return {
    lat: typeof obj.lat === 'function' ? obj.lat() : obj.lat,
    lng: typeof obj.lng === 'function' ? obj.lng() : obj.lng
  };
}
