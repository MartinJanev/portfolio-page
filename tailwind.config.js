export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: "#22c55e",
                    purple: "#8b5cf6",
                },
            },
            boxShadow: {
                card: "0 4px 16px rgba(59,130,246,0.20)",
            },
            keyframes: {
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            animation: {
                gradient: "gradient 6s ease infinite",
            },
        },
    },
    plugins: [],
};
