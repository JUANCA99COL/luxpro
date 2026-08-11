import React, { useRef, useState, useEffect } from 'react';
import { useInView, animate } from 'framer-motion';

// Animates a stat like "500+", "98%", "4.9/5" or "24/7" by counting up the
// leading numeric portion when it scrolls into view, keeping any suffix static.
export const CountUpStat = ({ value, duration = 1.6 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(null);

  const match = String(value).match(/^([\d,.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1].replace(/,/g, '')) : null;
  const suffix = match ? match[2] : '';
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0;

  useEffect(() => {
    if (!isInView || numeric === null) return;
    const controls = animate(0, numeric, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplay(decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toLocaleString());
      },
    });
    return () => controls.stop();
  }, [isInView, numeric, duration, decimals]);

  if (numeric === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display !== null ? display : (decimals > 0 ? (0).toFixed(decimals) : '0')}
      {suffix}
    </span>
  );
};
