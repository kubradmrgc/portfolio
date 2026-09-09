import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  helpText?: string
}

export default function Input({
  label,
  type = 'text',
  error,
  helpText,
  id,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-ink dark:text-night-text"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`w-full px-3.5 py-2.5 rounded-xl border bg-white/70 dark:bg-night-card dark:text-night-text transition-colors focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-line dark:border-night-line focus:ring-accent/40 focus:border-accent'
        } ${props.disabled ? 'bg-paper cursor-not-allowed' : ''} ${className}`}
        aria-describedby={
          error ? `${id}-error` : helpText ? `${id}-help` : undefined
        }
        {...props}
      />
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-sm text-red-700 dark:text-red-400"
        >
          {error}
        </p>
      )}
      {helpText && !error && (
        <p
          id={`${id}-help`}
          className="text-sm text-muted dark:text-night-muted"
        >
          {helpText}
        </p>
      )}
    </div>
  )
}
