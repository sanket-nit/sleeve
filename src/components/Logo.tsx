import './Logo.css'; 
import { useTheme } from './theme-provider';

const Logo = () => {
  const {theme} = useTheme()
  return (
    <div className="relative text-4xl font-bold text-white glitch-effect">
      <span className={`relative z-10 ${theme === 'light' ? 'text-black' : ''}`}>Sleeve</span>
      <span className="absolute top-0 left-0 glitch glitch-1">Sleeve</span>
      <span className="absolute top-0 left-0 glitch glitch-2">Sleeve</span>
    </div>
  );
};

export default Logo;
