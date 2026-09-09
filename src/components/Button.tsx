import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-accent text-paper hover:bg-accent-soft dark:bg-night-accent dark:text-night dark:hover:bg-night-text',
    secondary:
      'bg-transparent text-ink border border-line hover:border-ink dark:text-night-text dark:border-night-line dark:hover:border-night-text',
    danger: 'bg-red-700 text-white hover:bg-red-800',
    ghost:
      'bg-transparent text-muted hover:text-ink dark:text-night-muted dark:hover:text-night-text',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-[0.95rem]',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
