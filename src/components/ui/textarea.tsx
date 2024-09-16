import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
  className={cn(
    "flex min-h-[80px] rounded-2xl border-none shadow  px-3 py-2 text-sm focus:outline-none focus:border-transparent", // Focus utilities
    className
  )}
  ref={ref}
  {...props}
/>

    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
