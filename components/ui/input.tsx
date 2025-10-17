import { cn } from '@/lib/utils';

import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';

// Assuming you have a cn utility function

const inputVariants = cva(
    'w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/20',
    {
        variants: {
            variant: {
                default:
                    'bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/40 hover:border-white/[0.15] focus:border-white/30 backdrop-blur-sm',
                error: 'bg-red-500/10 border border-red-500/20 text-red-400'
            },
            size: {
                default: 'px-4 py-3',
                sm: 'px-3 py-2 text-sm',
                lg: 'px-5 py-4'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

const labelVariants = cva('block text-sm font-medium mb-2', {
    variants: {
        variant: {
            default: 'text-white/80',
            error: 'text-red-400'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
        VariantProps<typeof inputVariants> {
    label?: string;
    error?: string;
    required?: boolean;
    containerClassName?: string;
}

export interface TextareaProps
    extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
        VariantProps<typeof inputVariants> {
    label?: string;
    error?: string;
    required?: boolean;
    containerClassName?: string;
}

export interface SelectProps
    extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
        VariantProps<typeof inputVariants> {
    label?: string;
    error?: string;
    required?: boolean;
    containerClassName?: string;
    options: { value: string; label: string }[];
    placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, size, label, error, required, containerClassName, ...props }, ref) => {
        const hasError = !!error;
        const inputVariant = hasError ? 'error' : variant;
        const labelVariant = hasError ? 'error' : 'default';

        return (
            <div className={cn(containerClassName)}>
                {label && (
                    <label htmlFor={props.id} className={cn(labelVariants({ variant: labelVariant }))}>
                        {label}
                        {required && ' *'}
                    </label>
                )}
                <input className={cn(inputVariants({ variant: inputVariant, size, className }))} ref={ref} {...props} />
                {error && <p className='mt-1 text-sm text-red-400'>{error}</p>}
            </div>
        );
    }
);

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, variant, size, label, error, required, containerClassName, ...props }, ref) => {
        const hasError = !!error;
        const inputVariant = hasError ? 'error' : variant;
        const labelVariant = hasError ? 'error' : 'default';

        return (
            <div className={cn(containerClassName)}>
                {label && (
                    <label htmlFor={props.id} className={cn(labelVariants({ variant: labelVariant }))}>
                        {label}
                        {required && ' *'}
                    </label>
                )}
                <textarea
                    className={cn(inputVariants({ variant: inputVariant, size, className }), 'resize-vertical')}
                    ref={ref}
                    {...props}
                />
                {error && <p className='mt-1 text-sm text-red-400'>{error}</p>}
            </div>
        );
    }
);

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, variant, size, label, error, required, containerClassName, options, placeholder, ...props }, ref) => {
        const hasError = !!error;
        const inputVariant = hasError ? 'error' : variant;
        const labelVariant = hasError ? 'error' : 'default';

        return (
            <div className={cn(containerClassName)}>
                {label && (
                    <label htmlFor={props.id} className={cn(labelVariants({ variant: labelVariant }))}>
                        {label}
                        {required && ' *'}
                    </label>
                )}
                <select 
                    className={cn(
                        inputVariants({ variant: inputVariant, size, className }),
                        'h-12.5 cursor-pointer [&>option]:bg-black [&>option]:text-white [&>option]:py-3 [&>option:hover]:bg-white/10'
                    )} 
                    ref={ref} 
                    {...props}
                >
                    {placeholder && (
                        <option value='' className='text-white/40'>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className='bg-black text-white py-2'>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <p className='mt-1 text-sm text-red-400'>{error}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';
Textarea.displayName = 'Textarea';
Select.displayName = 'Select';

export { Input, Textarea, Select, inputVariants };