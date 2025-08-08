import { useEffect, useState } from "react";

export default function useScrollSpy(ids, rootMargin = "0px 0px -50% 0px") {
    const [active, setActive] = useState(ids[0] || null);

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { root: null, rootMargin, threshold: 0 }
        );

        sections.forEach((s) => obs.observe(s));
        return () => sections.forEach((s) => obs.unobserve(s));
    }, [ids, rootMargin]);

    return active;
}
