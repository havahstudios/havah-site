export default function HeroImage() {
  return (
    <div
      className="max-w-[1180px] mx-auto"
      style={{
        marginTop: "clamp(36px,5vw,64px)",
        padding: "0 clamp(20px,5vw,64px)",
      }}
    >
      <div
        className="rounded-xl overflow-hidden bg-[#DDE1E8]"
        style={{ aspectRatio: "16/7" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1600&q=72"
          alt="HAVAH studio workspace"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(0.25) contrast(1.05)" }}
        />
      </div>
    </div>
  );
}
