import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
  {
    variants: {
      variant: {
        default: 'gradient-primary text-white shadow-md hover:shadow-lg hover:shadow-primary/30',
        destructive:
          'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:shadow-lg hover:shadow-red-500/30',
        outline:
          'border-2 border-border bg-white text-foreground hover:border-primary hover:bg-primary/5',
        secondary:
          'bg-gradient-to-r from-secondary to-blue-600 text-white shadow-md hover:shadow-lg hover:shadow-secondary/30',
        ghost:
          'text-foreground hover:bg-muted hover:text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-lg px-8 text-base',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8',
        'icon-lg': 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

/**
 * Button component with multiple variants and sizes
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 * @param {'default'|'destructive'|'outline'|'secondary'|'ghost'|'link'} props.variant - Button style variant
 * @param {'default'|'sm'|'lg'|'icon'|'icon-sm'|'icon-lg'} props.size - Button size
 * @param {boolean} props.asChild - Render as child component using Slot
 * @param {React.Ref} ref - Forwarded ref
 */
const Button = React.forwardRef(({
  className,
  variant,
  size,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button, buttonVariants }
