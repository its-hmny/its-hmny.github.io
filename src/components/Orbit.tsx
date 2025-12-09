'use client';
import React, { useEffect, useRef } from 'react';

export interface OrbitItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
  startAngle?: number;
}

export function Item({
  className,
  children,
  reverse,
  duration = 20,
  delay = 0,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  startAngle = 0,
  ...props
}: OrbitItemProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;

    let currentAngle = startAngle;
    const degreesPerSecond = 360 / duration;
    const degreesPerFrame = degreesPerSecond / 60; // Assuming 60fps
    const step = (reverse ? -degreesPerFrame : degreesPerFrame) * speed;

    const animate = () => {
      if (!divRef.current) return;
      currentAngle += step;

      // Use proper circular positioning instead of translateY
      const radians = (currentAngle * Math.PI) / 180;
      const x = Math.cos(radians) * radius;
      const y = Math.sin(radians) * radius;

      divRef.current.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [startAngle, radius, reverse, duration, speed]);

  return (
    <>
      {path && (
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          className='pointer-events-none absolute inset-0 size-full'
        >
          <circle className='stroke-black/10 stroke-1 dark:stroke-white/10' cx='50%' cy='50%' r={radius} fill='none' />
        </svg>
      )}
      <div
        ref={divRef}
        className='absolute flex transform-gpu items-center justify-center rounded-full'
        style={{ width: `${iconSize}px`, height: `${iconSize}px` } as React.CSSProperties}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-background relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg'>
      <div className='relative flex h-full w-full items-center justify-center'>{children}</div>
    </div>
  );
}
