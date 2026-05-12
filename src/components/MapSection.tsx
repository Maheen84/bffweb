import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const SHOP_POSITION = { lat: 41.9192, lng: -87.6775 }; // Approximate for 2056 N Damen Ave

export default function MapSection() {
  if (!hasValidKey) {
    return (
      <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center p-8 text-center border-4 border-dashed border-slate-200">
        <h4 className="text-slate-900 font-bold mb-2">Google Maps Key Missing</h4>
        <p className="text-slate-500 text-sm max-w-xs">
          Please add <code>GOOGLE_MAPS_PLATFORM_KEY</code> to secrets to enable the interactive map.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={API_KEY} version="weekly">
      <Map
        defaultCenter={SHOP_POSITION}
        defaultZoom={15}
        mapId="BFF_BIKES_MAP"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{ width: '100%', height: '100%' }}
        disableDefaultUI={true}
      >
        <AdvancedMarker position={SHOP_POSITION} title="BFF Bikes">
          <Pin background="#0d9488" glyphColor="#fff" borderColor="#0f766e" />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
}
