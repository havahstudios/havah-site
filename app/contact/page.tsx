"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const mono = { fontFamily: "var(--font-mono)" } as React.CSSProperties;
const display = { fontFamily: "var(--font-display)" } as React.CSSProperties;

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #DDE1E8",
  borderRadius: "8px",
  fontSize: "15px",
  color: "#15171A",
  background: "#FFFFFF",
  outline: "none",
  fontFamily: "var(--font-display)",
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function submit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string)?.trim();
    const email = (fd.get("email") as string)?.trim();
    const company = (fd.get("company") as string)?.trim();
    const brief = (fd.get("brief") as string)?.trim();
    if (!name || !email || !brief) { setErr("Please fill in your name, email and a short brief."); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr("That email does not look right."); return; }
    setLoading(true);
    setErr("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, brief }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setErr("Something went wrong. Email us directly at havahstudios@gmail.com");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "62px" }}>
        <section
          className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-start"
          style={{ padding: "clamp(40px,6vw,88px) clamp(20px,5vw,64px) clamp(64px,9vw,120px)", gap: "clamp(32px,5vw,56px)" }}
        >
          {/* Left */}
          <div>
            <span className="flex items-center gap-[0.55em]" style={{ ...mono, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7280" }}>
              <span className="w-[6px] h-[6px] rounded-full" style={{ background: "#B5642E" }} />
              Contact
            </span>
            <h1 className="m-0 mt-4" style={{ ...display, fontWeight: 900, fontSize: "clamp(40px,5.5vw,76px)", lineHeight: "0.92", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#15171A" }}>
              Tell us what<br />you are building.
            </h1>
            <p className="mt-6 mb-0" style={{ fontSize: "clamp(16px,1.3vw,18px)", lineHeight: "1.55", color: "#5A6070", maxWidth: "380px" }}>
              We read every message and get back within a day. No intake forms, no sales calls. Just a real conversation.
            </p>
            <div className="flex flex-col gap-4 mt-10 pt-6" style={{ borderTop: "1px solid #DDE1E8" }}>
              {[
                { label: "Email", value: "havahstudios@gmail.com" },
                { label: "Based in", value: "Los Angeles, CA" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-[14px]">
                  <span style={{ ...mono, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", width: "70px", flexShrink: 0 }}>{label}</span>
                  <span style={{ fontSize: "15px", color: "#15171A" }}>{value}</span>
                </div>
              ))}
              <div className="flex items-center gap-[14px]">
                <span style={{ ...mono, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", width: "70px", flexShrink: 0 }}>Status</span>
                <span className="flex items-center gap-[7px]">
                  <span className="w-[7px] h-[7px] rounded-full" style={{ background: "#18A05A" }} />
                  <span style={{ ...mono, fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#18A05A" }}>Taking on projects</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl p-6 sm:p-8 border" style={{ background: "#FFFFFF", borderColor: "#DDE1E8" }}>
            {sent ? (
              <div className="text-center py-8 flex flex-col items-center gap-3">
                <div style={{ fontSize: "44px", color: "#B5642E" }}>✳</div>
                <h2 className="m-0" style={{ ...display, fontWeight: 800, fontSize: "28px", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#15171A" }}>
                  Got it. We will be in touch.
                </h2>
                <p className="m-0" style={{ color: "#6B7280", maxWidth: "320px" }}>
                  Usually within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-[18px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Name", name: "name", type: "text", placeholder: "Jane Mercer" },
                    { label: "Email", name: "email", type: "email", placeholder: "you@company.com" },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-[9px]">
                      <label style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280" }}>{f.label}</label>
                      <input type={f.type} name={f.name} placeholder={f.placeholder} required style={inputStyle} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-[9px]">
                  <label style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280" }}>Company</label>
                  <input type="text" name="company" placeholder="Your company or brand" style={inputStyle} />
                </div>
                <div className="flex flex-col gap-[9px]">
                  <label style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280" }}>Tell us about the project</label>
                  <textarea
                    name="brief"
                    required
                    placeholder="What are you building, and what does a win look like for you?"
                    rows={6}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
                {err && <span style={{ fontSize: "13px", color: "#E5484D" }}>{err}</span>}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
                  disabled={loading}
                  style={{ background: "#B5642E", fontSize: "14px", padding: "16px", width: "100%", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, ...display }}
                >
                  {loading ? "Sending…" : <><span>Send message</span><span>↗</span></>}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
