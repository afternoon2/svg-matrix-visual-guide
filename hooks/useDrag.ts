import React from 'react';
import { Vec2 } from '../context/points/types';

type UseDragHook = [
  (event: React.MouseEvent<SVGElement, MouseEvent>) => void,
  (event: React.TouchEvent<SVGElement>) => void,
];

export default (
  onUpdate: (newValue: Vec2) => void,
  onDown: (event: React.MouseEvent<SVGElement, MouseEvent> | React.TouchEvent<SVGElement>) => void,
): UseDragHook => {
  const handleMouseUp = (event: MouseEvent) => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('touchmove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    event.preventDefault();
    return false;
  };

  const handleMouseMove = React.useCallback((event: MouseEvent | TouchEvent) => {
    const x: number = event.type === 'touchmove'
      ? (event as TouchEvent).touches[0].clientX
      : (event as MouseEvent).clientX;
    const y: number = event.type === 'touchmove'
      ? (event as TouchEvent).touches[0].clientY
      : (event as MouseEvent).clientY;
      onUpdate({ x, y });
  }, [onUpdate]);

  const onMouseDown = React.useCallback((event: React.MouseEvent<SVGElement, MouseEvent>): boolean => {
    onDown(event);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    event.preventDefault();
    return false;
  }, [onDown]);

  const onTouchStart = React.useCallback((event: React.TouchEvent<SVGElement>): boolean => {
    onDown(event);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);
    event.preventDefault();
    return false;
  }, [onDown]);

  return [
    onMouseDown,
    onTouchStart,
  ];
};
