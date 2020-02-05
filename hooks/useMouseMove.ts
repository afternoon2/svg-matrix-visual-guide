import React from 'react';

export default (
  onUpdate: (newValue: number) => void,
  currentValue: number,
) => {
  const startY = React.useRef(0);
  const handleMouseUp = (event: MouseEvent) => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('touchmove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    event.preventDefault();
    return false;
  };

  const handleMouseMove = React.useCallback((event: MouseEvent | TouchEvent) => {
    const clientY: number = event.type === 'touchmove'
      ? (event as TouchEvent).touches[0].clientY
      : (event as MouseEvent).clientY;
    onUpdate(
      clientY > startY.current
        ? Math.round(currentValue - (clientY - startY.current) / 10)
        : Math.round(currentValue + (startY.current - clientY) / 10),
    );
    event.preventDefault();
    return false;
  }, [startY, currentValue, onUpdate]);

  const onMouseDown = (event: React.MouseEvent) => {
    startY.current = event.clientY;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    event.preventDefault();
    return false;
  };

  const onTouchStart = (event: React.MouseEvent) => {
    startY.current = event.clientY;
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);
    event.preventDefault();
    return false;
  }

  return [
    onMouseDown,
    onTouchStart,
  ]
};
