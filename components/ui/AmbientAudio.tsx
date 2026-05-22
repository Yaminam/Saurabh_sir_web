'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Footer easter egg: clicking the copyright reveals a tiny audio toggle that
 * plays an ambient pad. Off by default, never autoplays. The pad is synthesised
 * with the Web Audio API — no audio asset, no network.
 */
export default function AmbientAudio({ label }: { label: string }) {
  const [revealed, setRevealed] = useState(false);
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const start = () => {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 1.6);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 520;
    filter.Q.value = 0.6;

    // Two detuned sine voices a fifth apart — a quiet, slow pad.
    [110, 164.81].forEach((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = f;
      osc.detune.value = i === 0 ? -4 : 5;
      osc.connect(filter);
      osc.start();
    });

    // Slow filter movement so it never sits still.
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.07;
    lfoGain.gain.value = 180;
    lfo.connect(lfoGain).connect(filter.frequency);
    lfo.start();

    filter.connect(master).connect(ctx.destination);
    ctxRef.current = ctx;
    gainRef.current = master;
  };

  const stop = () => {
    const ctx = ctxRef.current;
    const g = gainRef.current;
    if (!ctx || !g) return;
    g.gain.cancelScheduledValues(ctx.currentTime);
    g.gain.setValueAtTime(g.gain.value, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.9);
    setTimeout(() => {
      ctx.close().catch(() => {});
      ctxRef.current = null;
      gainRef.current = null;
    }, 1000);
  };

  const toggle = () => {
    if (on) {
      stop();
      setOn(false);
    } else {
      start();
      setOn(true);
    }
  };

  useEffect(() => () => void ctxRef.current?.close().catch(() => {}), []);

  return (
    <span className="inline-flex items-center gap-4">
      <button
        type="button"
        onClick={() => setRevealed((v) => !v)}
        className="link-underline font-mono text-meta uppercase tracking-meta text-muted"
        aria-expanded={revealed}
        aria-label={`${label} — reveal ambient sound`}
      >
        {label}
      </button>

      <AnimatePresence>
        {revealed && (
          <motion.button
            type="button"
            onClick={toggle}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 overflow-hidden whitespace-nowrap font-mono text-meta uppercase tracking-meta text-paper"
            aria-pressed={on}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: on ? '#FF3B1F' : '#6E6A63' }}
              aria-hidden
            />
            Sound {on ? 'On' : 'Off'}
          </motion.button>
        )}
      </AnimatePresence>
    </span>
  );
}
