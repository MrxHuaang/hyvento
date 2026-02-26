"use client";

import { useLanguage } from "@/i18n/context";
import { ChangeEvent } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea" | "select";
  error?: string;
  options?: SelectOption[];
  inputProps?: {
    value?: string;
    onChange?: (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => void;
    placeholder?: string;
    required?: boolean;
    type?: string;
  };
}

const fieldClasses =
  "w-full bg-transparent border-b border-white/[0.08] py-3 text-base text-white font-body placeholder-grey/40 focus:outline-none focus:border-accent transition-colors duration-200";

export default function FormField({
  label,
  name,
  type = "text",
  error,
  options = [],
  inputProps = {},
}: FormFieldProps) {
  const { t } = useLanguage();
  const id = `field-${name}`;
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm text-grey font-body font-medium uppercase tracking-[0.1em]"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          className={`${fieldClasses} resize-none`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...inputProps}
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          className={`${fieldClasses} appearance-none`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...inputProps}
        >
          <option value="">{t.contact.form.selectOption}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          className={fieldClasses}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...inputProps}
        />
      )}
      {error && (
        <p id={errorId} className="text-xs text-red-400 font-body" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
