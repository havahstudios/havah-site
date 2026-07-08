"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-8 md:px-16 lg:px-24 py-24 md:py-32 bg-[#C24A1F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: headline */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 block mb-8">
              05 — Get In Touch
            </span>
            <h2
              className="font-black uppercase leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              Let&apos;s Build
              <br />
              Something.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-white/70 max-w-sm">
              Tell us about your project. We read every message and reply within
              one business day.
            </p>
            <a
              href="mailto:havahstudios@gmail.com"
              className="mt-8 inline-flex items-center gap-2 text-white font-semibold text-sm border-b border-white/40 pb-0.5 hover:border-white transition-colors"
            >
              havahstudios@gmail.com →
            </a>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col justify-center py-16">
                <p className="font-black uppercase text-white text-4xl tracking-tight">
                  Message sent.
                </p>
                <p className="mt-4 text-white/70 text-sm">
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Your name", type: "text", placeholder: "Jane Smith" },
                  { id: "email", label: "Email address", type: "email", placeholder: "jane@company.com" },
                  { id: "company", label: "Company / project", type: "text", placeholder: "Acme Inc." },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/60 transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-2"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="We're looking to redesign our site and build a brand identity..."
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-white text-[#C24A1F] font-black uppercase tracking-wide py-4 text-sm hover:bg-[#111111] hover:text-white transition-colors duration-200"
                >
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
