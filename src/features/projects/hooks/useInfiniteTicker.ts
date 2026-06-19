"use client";
import { useCallback, useEffect, useRef } from "react";

export function useInfiniteTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const translateX = useRef(0);
  const rafId = useRef(0);
  const paused = useRef(false);
  const dragStartX = useRef(0);
  const dragStartTranslate = useRef(0);

  const wrapTranslate = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    const isRtl = document.documentElement.dir === "rtl";
    if (isRtl) {
      while (translateX.current < 0) translateX.current += half;
      while (translateX.current >= half) translateX.current -= half;
    } else {
      while (translateX.current > 0) translateX.current -= half;
      while (translateX.current <= -half) translateX.current += half;
    }
  }, []);

  useEffect(() => {
    const speed = 0.7;
    function tick() {
      if (!paused.current) {
        const dir = document.documentElement.dir === "rtl" ? 1 : -1;
        translateX.current += dir * speed;
        wrapTranslate();
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${translateX.current}px)`;
        }
      }
      rafId.current = requestAnimationFrame(tick);
    }
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [wrapTranslate]);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    paused.current = true;
    dragStartX.current = e.clientX;
    dragStartTranslate.current = translateX.current;
    const el = trackRef.current;
    if (el) el.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!paused.current) return;
    const delta = e.clientX - dragStartX.current;
    translateX.current = dragStartTranslate.current + delta;
    wrapTranslate();
    const el = trackRef.current;
    if (el) el.style.transform = `translateX(${translateX.current}px)`;
  }, [wrapTranslate]);

  const handlePointerUp = useCallback(() => {
    paused.current = false;
  }, []);

  return {
    trackRef,
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
    },
  };
}
