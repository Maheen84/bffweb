// MapSection showing OpenStreetMap iframe for BFF Bikes Chicago location.
export default function MapSection() {
  return (
    <div className="w-full h-full min-h-[400px] relative overflow-hidden rounded-2xl">
      <iframe
        title="OpenStreetMap"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://www.openstreetmap.org/export/embed.html?bbox=-87.685,41.915,-87.670,41.925&amp;layer=mapnik&amp;marker=41.9192,-87.6775"
        className="absolute inset-0"
        style={{ border: 0 }}
      />
      <div className="absolute inset-0 pointer-events-none border-1 border-slate-100 rounded-2xl" />
      <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-slate-500 font-medium z-10 pointer-events-none">
        © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer" className="hover:underline">OpenStreetMap</a> contributors
      </div>
    </div>
  );
}
