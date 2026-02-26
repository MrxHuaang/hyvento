"use client";

import { useState } from "react";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { FormData } from "@/types";
import { useLanguage } from "@/i18n/context";

type FormStep = 1 | 2 | 3;
type FormStatus = "idle" | "submitting" | "success";

export default function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [step, setStep] = useState<FormStep>(1);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    scale: "",
    budget: "",
    description: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
        <div className="w-12 h-12 border-2 border-accent rounded-full flex items-center justify-center mb-6">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-accent"
          >
            <path
              d="M5 10l3 3 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-display font-semibold text-xl text-white mb-3 uppercase">
          {f.successTitle}
        </h3>
        <p className="text-sm text-muted max-w-[300px] font-body">
          {f.successDescription}
        </p>
      </div>
    );
  }

  return (
    <div className="border border-white/[0.06] bg-dark-secondary/50">
      <div className="flex border-b border-white/[0.06]">
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            className={`flex-1 py-4 text-xs font-body font-medium tracking-[0.15em] uppercase text-center transition-colors duration-200 ${
              step === s
                ? "text-accent border-b-2 border-accent"
                : s < step
                  ? "text-muted"
                  : "text-grey/30"
            }`}
            onClick={() => s < step && setStep(s as FormStep)}
            disabled={s > step}
          >
            {s === 1 ? f.details : s === 2 ? f.project : f.review}
          </button>
        ))}
      </div>

      <div className="p-6 lg:p-10">
        {step === 1 && (
          <div className="flex flex-col gap-6">
            <FormField
              label={f.name}
              name="name"
              inputProps={{
                value: data.name,
                onChange: (e) =>
                  updateField("name", (e.target as HTMLInputElement).value),
                placeholder: f.namePlaceholder,
                required: true,
              }}
            />
            <FormField
              label={f.emailLabel}
              name="email"
              inputProps={{
                type: "email",
                value: data.email,
                onChange: (e) =>
                  updateField("email", (e.target as HTMLInputElement).value),
                placeholder: f.emailPlaceholder,
                required: true,
              }}
            />
            <FormField
              label={f.company}
              name="company"
              inputProps={{
                value: data.company,
                onChange: (e) =>
                  updateField("company", (e.target as HTMLInputElement).value),
                placeholder: f.companyPlaceholder,
              }}
            />
            <div className="mt-6 flex justify-end">
              <Button
                variant="outline"
                size="md"
                onClick={() => setStep(2)}
                disabled={!data.name || !data.email}
              >
                {f.continue}
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-6">
            <FormField
              label={f.service}
              name="service"
              type="select"
              options={t.contact.serviceOptions}
              inputProps={{
                value: data.service,
                onChange: (e) =>
                  updateField("service", (e.target as HTMLSelectElement).value),
              }}
            />
            <FormField
              label={f.scale}
              name="scale"
              type="select"
              options={t.contact.scaleOptions}
              inputProps={{
                value: data.scale,
                onChange: (e) =>
                  updateField("scale", (e.target as HTMLSelectElement).value),
              }}
            />
            <FormField
              label={f.budget}
              name="budget"
              type="select"
              options={t.contact.budgetOptions}
              inputProps={{
                value: data.budget,
                onChange: (e) =>
                  updateField("budget", (e.target as HTMLSelectElement).value),
              }}
            />
            <div className="mt-6 flex justify-between">
              <Button variant="ghost" size="md" onClick={() => setStep(1)}>
                {f.back}
              </Button>
              <Button variant="outline" size="md" onClick={() => setStep(3)}>
                {f.continue}
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-6">
            <FormField
              label={f.descriptionLabel}
              name="description"
              type="textarea"
              inputProps={{
                value: data.description,
                onChange: (e) =>
                  updateField(
                    "description",
                    (e.target as HTMLTextAreaElement).value,
                  ),
                placeholder: f.descriptionPlaceholder,
              }}
            />
            <div className="mt-2 p-5 border border-white/[0.06] bg-black/30">
              <p className="text-xs text-grey uppercase tracking-[0.15em] mb-4 font-body">
                {f.summary}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-grey/60 block font-body mb-1">
                    {f.name}
                  </span>
                  <span className="text-grey-light font-body">{data.name}</span>
                </div>
                <div>
                  <span className="text-grey/60 block font-body mb-1">
                    {f.company}
                  </span>
                  <span className="text-grey-light font-body">
                    {data.company || "—"}
                  </span>
                </div>
                <div>
                  <span className="text-grey/60 block font-body mb-1">
                    {f.service}
                  </span>
                  <span className="text-grey-light font-body">
                    {data.service || "—"}
                  </span>
                </div>
                <div>
                  <span className="text-grey/60 block font-body mb-1">
                    {f.budget}
                  </span>
                  <span className="text-grey-light font-body">
                    {data.budget || "—"}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <Button variant="ghost" size="md" onClick={() => setStep(2)}>
                {f.back}
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleSubmit}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    {f.sending}
                  </span>
                ) : (
                  f.submit
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
