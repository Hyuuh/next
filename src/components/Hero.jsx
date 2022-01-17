function Hero({
  title,
  color = "bg-gradient-to-r from-green-400 to-blue-500",
  content = false,
}) {
  return (
    <div
      className={`w-full ${color} h-40 flex flex-col items-center justify-center`}
    >
      {/* title */}
      <p className="text-white font-bold text-3xl">{title}</p>
      {/* content */}
      {content && <p className="text-white font-sm">{content}</p>}
    </div>
  );
}

export default Hero;
