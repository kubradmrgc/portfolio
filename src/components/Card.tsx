import type { ReactNode } from 'react'

type CardProps = {
  title?: string
  children: ReactNode
  image?: string
  imageAlt?: string
  footer?: ReactNode
  variant?: 'elevated' | 'outlined' | 'filled'
  className?: string
}

export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = 'outlined',
  className = '',
}: CardProps) {
  const variants = {
    elevated:
      'bg-white/70 dark:bg-night-card shadow-[0_18px_40px_-28px_rgba(28,25,21,0.45)]',
    outlined:
      'bg-white/50 dark:bg-night-card border border-line dark:border-night-line',
    filled: 'bg-white/80 dark:bg-night-card',
  }

  return (
    <article
      className={`rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${variants[variant]} ${className}`}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt || ''}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-lg font-semibold tracking-tight text-ink dark:text-night-text mb-3">
            {title}
          </h3>
        )}
        <div className="text-[0.95rem] text-muted dark:text-night-muted leading-relaxed">
          {children}
        </div>
      </div>
      {footer && (
        <div className="px-6 py-3 border-t border-line dark:border-night-line text-sm">
          {footer}
        </div>
      )}
    </article>
  )
}
