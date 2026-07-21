"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet default icons
const DefaultIcon = L.icon({
  iconUrl: icon.src,
  iconRetinaUrl: iconRetina.src,
  shadowUrl: shadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;


interface LocationCardProps {
  form: ReturnType<typeof usePropertyForm>;
}

export function LocationCard({ form }: LocationCardProps) {
  const { register, setValue, watch, formState: { errors } } = form;
  const address = watch("address");
  const latitude = watch("latitude");
  const longitude = watch("longitude");

  const [mapPosition, setMapPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (latitude != null && longitude != null) {
      setMapPosition([latitude, longitude]);
    } else if (address) {
      // Geocode address if provided and map position is not set
      // This is a placeholder for actual geocoding service integration
      console.log("Geocoding address:", address);
      // In a real app, use a geocoding API (e.g., OpenStreetMap Nominatim)
      // For now, we'll set a default position if address is present but coords are not
      if (latitude == null && longitude == null) {
        setMapPosition([40.7128, -74.0060]); // Default to New York City if no coords
      }
    }
  }, [address, latitude, longitude]);

  const handleMapClick = (e: L.LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setValue("latitude", lat);
    setValue("longitude", lng);
    setMapPosition([lat, lng]);
    // Optionally, reverse geocode to update address field here
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Location</CardTitle>
        <CardDescription>Enter the property's address and pinpoint its location on the map.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            {...register("address")}
            placeholder="e.g., 123 Main Street, Anytown, USA"
            className="mt-1"
            aria-invalid={errors.address ? "true" : "false"}
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
        </div>

        {/* Map Component */}
        <div className="h-[300px] w-full rounded-lg overflow-hidden">
          <MapContainer
            center={mapPosition || [40.7128, -74.0060]} // Default to NYC if no position
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full z-0"
            onClick={handleMapClick}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapPosition && (
              <Marker position={mapPosition}>
                <Popup>
                  A pretty CSS3 view of the map. <br /> Easily customizable.
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
        {/* Hidden inputs for latitude and longitude for form submission */}
        <input type="hidden" {...register("latitude", { valueAsNumber: true })} />
        <input type="hidden" {...register("longitude", { valueAsNumber: true })} />
      </CardContent>
    </Card>
  );
}
