'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { blur } from '@/lib/image';
import { cn } from '@/lib/utils';

/**
 * Image with a subtle scroll-driven parallax. The image is slightly oversized
 * and shifts vertically as the element passes through the viewport.
 * Parallax is disabled under reduced motion.
 */
export default function ParallaxImage({
  src,
  alt,
  sizes,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div className="absolute inset-0 scale-[1.16]" style={{ y: reduce ? 0 : y }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          blurDataURL={blur()}
          className={cn('object-cover', imgClassName)}
        />
      </motion.div>
    </div>
  );
}
