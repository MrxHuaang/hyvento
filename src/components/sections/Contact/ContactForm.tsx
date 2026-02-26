"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormField from "@/components/ui/FormField";
import { FormData } from "@/types";
import { useLanguage } from "@/i18n/context";

type FormStep = 1 | 2 | 3;
type FormStatus = "idle" | "submitting" | "success";

const tabVariants = {
  enter: { x: 30, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -30, opacity: 0 },
};

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
      <motion.div
        className="flex flex-col items-center justify-center min-h-[400px] text-center bg-dark-secondary border border-accent/20 p-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated checkmark */}
        <motion.div
          className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="text-accent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <motion.path
              d="M7 14l5 5 9-9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            />
          </motion.svg>
        </motion.div>
        <h3 className="font-display font-semibold text-2xl text-white mb-4 uppercase">
          {f.successTitle}
        </h3>
        <p className="text-sm text-muted max-w-[320px] font-body">
          {f.successDescription}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] border border-white/10">
      {/* Step indicators — prominent tabs */}
      <div className="flex border-b border-white/8">
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            className={`flex-1 py-5 text-xs font-body font-medium tracking-[0.15em] uppercase text-center transition-colors duration-200 relative ${
              step === s
                ? "text-white"
                : s < step
                  ? "text-white/40 hover:text-white/70"
                  : "text-white/20"
            }`}
            onClick={() => s < step && setStep(s as FormStep)}
            disabled={s > step}
          >
            {s === 1 ? f.details : s === 2 ? f.project : f.review}
            {step === s && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                layoutId="activeTab"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Form content with AnimatePresence */}
      <div className="p-8 lg:p-12 min-h-[360px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8"
            >
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
                    updateField(
                      "company",
                      (e.target as HTMLInputElement).value,
                    ),
                  placeholder: f.companyPlaceholder,
                }}
              />
              <div className="mt-8 flex justify-end">
                <button
                  className="w-full sm:w-auto bg-accent text-black font-body font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-white transition-colors duration-200 disabled:opacity-30 cursor-pointer"
                  onClick={() => setStep(2)}
                  disabled={!data.name || !data.email}
                >
                  {f.continue}
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8"
            >
              <FormField
                label={f.service}
                name="service"
                type="select"
                options={t.contact.serviceOptions}
                inputProps={{
                  value: data.service,
                  onChange: (e) =>
                    updateField(
                      "service",
                      (e.target as HTMLSelectElement).value,
                    ),
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
                    updateField(
                      "budget",
                      (e.target as HTMLSelectElement).value,
                    ),
                }}
              />
              <div className="mt-8 flex justify-between">
                <button
                  className="text-sm font-body text-white/40 hover:text-white uppercase tracking-wider transition-colors"
                  onClick={() => setStep(1)}
                >
                  {f.back}
                </button>
                <button
                  className="w-full sm:w-auto bg-accent text-black font-body font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-white transition-colors duration-200 cursor-pointer"
                  onClick={() => setStep(3)}
                >
                  {f.continue}
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8"
            >
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
              <div className="p-6 border border-white/6 bg-black/30">
                <p className="text-[10px] text-accent uppercase tracking-[0.2em] mb-4 font-body">
                  {f.summary}
                </p>
                <div className="grid grid-cols-2 gap-5 text-sm">
                  <div>
                    <span className="text-white/30 block font-body mb-1">
                      {f.name}
                    </span>
                    <span className="text-white font-body">{data.name}</span>
                  </div>
                  <div>
                    <span className="text-white/30 block font-body mb-1">
                      {f.company}
                    </span>
                    <span className="text-white font-body">
                      {data.company || "—"}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/30 block font-body mb-1">
                      {f.service}
                    </span>
                    <span className="text-white font-body">
                      {data.service || "—"}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/30 block font-body mb-1">
                      {f.budget}
                    </span>
                    <span className="text-white font-body">
                      {data.budget || "—"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  className="text-sm font-body text-white/40 hover:text-white uppercase tracking-wider transition-colors"
                  onClick={() => setStep(2)}
                >
                  {f.back}
                </button>
                <button
                  className="w-full sm:w-auto bg-accent text-black font-body font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-white transition-colors duration-200 disabled:opacity-30 cursor-pointer"
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
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
