import './Logo.css'; 

const Logo = () => {
  return (
    <div className="relative text-4xl font-bold text-white glitch-effect">
      <span className="relative z-10">Sleeve</span>
      <span className="absolute top-0 left-0 glitch glitch-1">Sleeve</span>
      <span className="absolute top-0 left-0 glitch glitch-2">Sleeve</span>
    </div>
  );
};

export default Logo;
