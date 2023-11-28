export default function Shimmer() {
  return (
    <div className="absolute top-0 left-0 w-full h-full animate-skeleton">
      <div className="w-1/2 h-full bg-[rgba(255,255,255,0.4)] skew-x-[-20deg] shadow-[0_0_30px_30px_rgba(255,255,255,0.05)]" />
    </div>
  );
}
