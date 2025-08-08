export default function Section({ id, title, children }) {
    return (
        <section id={id} className="scroll-mt-28 py-30 flex justify-center">
            <div className="w-full max-w-5xl px-4">
                {title && (
                    <h2 className="text-center text-5xl font-bold mb-10 bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
}
