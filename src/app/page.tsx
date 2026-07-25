export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-8 border-b border-light-dull-text/20">
        <p className="text-sm font-semibold uppercase tracking-widest text-light-dull-text">
          Examinr.ai / Landing Page (/)
        </p>
      </header>
      <main className="flex-1 p-8 flex flex-col gap-12">
        <section>
          <h1 className="font-display text-5xl mb-4">Hero Section</h1>
          <p className="text-light-dull-text max-w-xl">Public marketing hero. (Placeholder)</p>
        </section>
        
        <section>
          <h2 className="font-display text-4xl mb-4">About</h2>
          <p className="text-light-dull-text max-w-xl">Product overview. (Placeholder)</p>
        </section>

        <section>
          <h2 className="font-display text-4xl mb-4">Student Section</h2>
          <p className="text-light-dull-text max-w-xl">Student benefits. (Placeholder)</p>
        </section>

        <section>
          <h2 className="font-display text-4xl mb-4">Institution Section</h2>
          <p className="text-light-dull-text max-w-xl">Institution benefits. (Placeholder)</p>
        </section>

        <section>
          <h2 className="font-display text-4xl mb-4">Waitlist</h2>
          <p className="text-light-dull-text max-w-xl">Registration form. (Placeholder)</p>
        </section>
      </main>
      <footer className="p-8 border-t border-light-dull-text/20">
        <h3 className="font-display text-2xl mb-2">Footer</h3>
        <p className="text-light-dull-text text-sm">Footer content. (Placeholder)</p>
      </footer>
    </div>
  );
}
