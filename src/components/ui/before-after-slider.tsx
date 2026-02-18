import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import { cn } from '@/lib/utils';
interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  className?: string;
  beforeLabel?: string;
  afterLabel?: string;
}
export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  alt,
  className,
  beforeLabel = "Avant",
  afterLabel = "Après"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);
  const handleMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    // Prevent default to stop text selection or scrolling while dragging
    // e.preventDefault(); 
  }, []);
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);
  // Global event listeners for dragging outside the component
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };
    if (isDragging) {
      window.addEventListener('mouseup', handleGlobalMouseUp);
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('touchend', handleGlobalMouseUp);
      window.addEventListener('touchmove', handleGlobalTouchMove);
    }
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchend', handleGlobalMouseUp);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
    };
  }, [isDragging, handleMove]);
  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(prev => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(prev => Math.min(100, prev + 5));
    }
  };
  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden select-none group cursor-ew-resize touch-none", 
        className
      )}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      role="slider"
      aria-label="Comparaison avant après"
      aria-valuenow={sliderPosition}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* After Image (Background) */}
      <div className="w-full h-full">
        <img 
          src={afterImage} 
          alt={`Après: ${alt}`} 
          className="w-full h-full object-cover pointer-events-none select-none"
          draggable={false}
        />
        <span className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 text-xs font-bold rounded backdrop-blur-sm z-10">
          {afterLabel}
        </span>
      </div>
      {/* Before Image (Foreground - Clipped) */}
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt={`Avant: ${alt}`} 
          className="w-full h-full object-cover pointer-events-none select-none"
          draggable={false}
        />
        <span className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 text-xs font-bold rounded backdrop-blur-sm z-10">
          {beforeLabel}
        </span>
      </div>
      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-600">
          <ChevronsLeftRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}