// src/components/sections/Contact.jsx
import React, { useMemo, useState } from "react";
import Section from "../Section";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaEnvelope, FaCheck } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { contactData } from "../data/ContactData";

export const Contact = () => {
    const email = "janev.martin123@gmail.com";
    const [copied, setCopied] = useState(false);
    const [note, setNote] = useState("");

    const mailtoHref = useMemo(() => {
        const subject = encodeURIComponent("Portfolio inquiry");
        const body = encodeURIComponent(note ? note : "Hi Martin, …");
        return `mailto:${email}?subject=${subject}&body=${body}`;
    }, [email, note]);

    async function handleCopy(text) {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch { }
    }

    return (
        <Section id="contact" title="Let's Work Together">
            <RevealOnScroll>
                <div className="relative max-w-3xl mx-auto px-4"> {/* + px-4 for mobile gutter */}
                    <div className="group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-lg ring-1 ring-white/10 transition md:hover:-translate-y-1 md:hover:ring-green-400/40">
                        <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-green-500/20 to-purple-500/20 blur opacity-0 md:group-hover:opacity-60 transition" />

                        <div className="relative">
                            {/* TEXT: center on mobile, left on sm+ */}
                            <p className="text-gray-300 leading-relaxed text-base sm:text-lg text-center sm:text-left">
                                Open to internships, part-time roles, and collaborations with anything you want to know.
                                If you have an idea or a role in mind, I’d love to hear from you.
                                <br />
                                Or just say hi! It's always great to connect with fellow students, programmers, and tech enthusiasts.
                            </p>

                            {/* CHIPS: center on mobile */}
                            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                                {["Skopje or Shtip, MK", "Remote", "Always open for help"].map((t) => (
                                    <span
                                        key={t}
                                        className="inline-flex items-center gap-1 rounded-full bg-green-500/10 text-green-300 text-xs font-medium px-3 py-1"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* CONTACT ROWS */}
                            <div className="mt-6 space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                    {/* email + icon centered on mobile */}
                                    <div className="flex items-center justify-center sm:justify-start gap-2 min-w-0">
                                        <FaEnvelope className="text-green-400 shrink-0" />
                                        <code className="text-sm text-gray-200 truncate">{email}</code>
                                    </div>

                                    {/* actions centered on mobile; full-width buttons on xs */}
                                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                        <a
                                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-4 rounded-lg transition-colors w-full sm:w-auto justify-center"
                                        >
                                            <FaEnvelope /> Email me
                                        </a>
                                        <button
                                            onClick={() => handleCopy(email)}
                                            className="inline-flex items-center gap-2 border border-white/15 hover:border-green-400/50 text-white py-2 px-4 rounded-lg transition w-full sm:w-auto justify-center"
                                            aria-live="polite"
                                        >
                                            {copied ? (
                                                <>
                                                    <FaCheck className="text-green-400" />
                                                    Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <FaEnvelope />
                                                    Copy email
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* NOTE AREA: center label; textarea full-width; button full-width on xs */}
                            <div className="mt-6">
                                <label
                                    htmlFor="note"
                                    className="block text-sm text-gray-400 mb-2 text-center sm:text-left"
                                >
                                    Drop a quick note (no backend—opens your email client)
                                </label>
                                <textarea
                                    id="note"
                                    rows={3}
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    placeholder="Hi Martin, we'd love to chat about…"
                                    className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-green-400 outline-none text-gray-100 placeholder:text-gray-500 p-3 transition"
                                />
                                <div className="mt-3 flex flex-wrap gap-3 justify-center sm:justify-start">
                                    <a
                                        href={mailtoHref}
                                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-medium py-2.5 px-5 rounded-lg transition-colors w-full sm:w-auto justify-center"
                                    >
                                        <FaNoteSticky /> Send Note
                                    </a>
                                </div>
                            </div>

                            {/* SOCIALS: already centered */}
                            <div className="mt-6 flex items-center gap-6 justify-center">
                                {contactData
                                    .filter(
                                        ({ label }) =>
                                            !["Instagram", "Facebook", "Linkedin", "GitHub"].includes(label)
                                    )
                                    .map(({ label, href, icon: Icon }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-green-300 transition"
                                            aria-label={label}
                                            title={label}
                                        >
                                            {Icon ? <Icon size={22} /> : <span className="text-sm">{label}</span>}
                                        </a>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </Section>
    );
};
