import { useEffect, useState } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{ position:'fixed', inset:0, backgroundColor:'#000', display:'flex', alignItems:'center', justifyContent:'center', zIndex:9999, animation:'loaderFadeOut 0.6s ease forwards 2s' }}>
      <div style={{ display:'flex', fontFamily:'Anton, sans-serif', fontSize:'8rem', fontWeight:700, letterSpacing:'2px', color:'white' }}>
        <span style={{ opacity:0, animation:'letterIn 0.5s ease forwards 0s' }}>D</span>
        <span style={{ opacity:0, animation:'letterIn 0.5s ease forwards 0.15s' }}>G</span>
        <span style={{ opacity:0, animation:'letterIn 0.5s ease forwards 0.3s', color:'#5A4BEB' }}>.</span>
      </div>
    </div>
  );
}





