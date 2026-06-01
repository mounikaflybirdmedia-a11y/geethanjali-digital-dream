import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-campus.jpg";
import { COLLEGE } from "@/lib/college";
import { SiteHeader } from "@/components/SiteHeader";
import { EnrollForm } from "@/components/EnrollForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Geethanjali Educational Institutions — Yelamanchili | Junior & Degree College" },
      { name: "description", content: "Geethanjali Junior & Degree College, Yelamanchili. Junior College established in 2002, Degree College in 2005. Intermediate (MPC, BiPC, MEC, CEC, HEC) and B.Sc Honours programs. Admissions open." },
      { property: "og:title", content: "Geethanjali Educational Institutions — Yelamanchili" },
      { property: "og:description", content: "Intermediate and B.Sc Honours college in Yelamanchili. Junior College established in 2002, Degree College in 2005. Admissions open." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          name: COLLEGE.name,
          alternateName: COLLEGE.shortName,
          foundingDate: "2002",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Railway Station Road, Gandhinagar",
            addressLocality: "Yelamanchili",
            addressRegion: "Andhra Pradesh",
            postalCode: "531055",
            addressCountry: "IN",
          },
          telephone: COLLEGE.phones[0],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Students learning at Geethanjali College Yelamanchili"
          width={1600}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(15,20,35,0.85) 0%, rgba(15,20,35,0.55) 55%, rgba(15,20,35,0.15) 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: "linear-gradient(to top, rgba(15,20,35,0.6), transparent)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-24 md:py-32 lg:grid-cols-2">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/95 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              Junior College Est. 2002 · Degree College Est. 2005
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              It's time for a <span className="text-accent">better tomorrow.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/90">
              Geethanjali Junior &amp; Degree College, Yelamanchili — guiding students to their goals through
              quality teaching, strong infrastructure and competitive-exam mentoring. Junior College established in 2002, Degree College in 2005.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enroll" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition hover:opacity-90">
                Apply for Admission
              </a>
              <a href="#courses" className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                View Courses
              </a>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/20 pt-6 text-primary-foreground">
              <div><dt className="text-3xl font-bold text-accent">24+</dt><dd className="text-xs uppercase tracking-wider opacity-80">Years</dd></div>
              <div><dt className="text-3xl font-bold text-accent">9</dt><dd className="text-xs uppercase tracking-wider opacity-80">Programs</dd></div>
              <div><dt className="text-3xl font-bold text-accent">978</dt><dd className="text-xs uppercase tracking-wider opacity-80">Top Score 2026</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {COLLEGE.highlights.map((h) => (
            <div key={h} className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
              <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">★</div>
              <p className="font-semibold">{h}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About the College</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">A Tradition of Success</h2>
            <p className="mt-6 text-muted-foreground">
              For more than two decades, Geethanjali Educational Institutions has been the trusted name in
              Yelamanchili and surrounding mandals. Under the same dedicated management, we have steadily nurtured
              students to compete with confidence in the wider world.
            </p>
            <p className="mt-4 text-muted-foreground">
              Good education is the gift of a good future. Choose Geethanjali — choose a brand built on results,
              discipline and care.
            </p>
            <div className="mt-8 rounded-2xl border border-accent/40 bg-accent/15 p-6">
              <p className="font-display text-xl font-bold text-primary">80% Fee Concession</p>
              <p className="mt-2 text-sm text-foreground/80">
                For students who have shown merit in Class 10, we offer up to <strong>80% fee concession</strong>.
                Speak to our admissions team to know more.
              </p>
            </div>
          </div>
          <div className="grid grid-rows-[1fr_1fr] gap-6">
            <div className="flex flex-col justify-center rounded-2xl bg-primary p-8 text-primary-foreground shadow-[var(--shadow-elegant)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Founder &amp; Chairman</p>
              <h3 className="mt-2 font-display text-3xl font-bold leading-tight">{COLLEGE.founders[0].name}</h3>
              <p className="mt-1 text-sm opacity-80">{COLLEGE.founders[0].qualification}</p>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
                "Our mission is simple — walk every student to their goal, and win at everything we do."
              </p>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Founder &amp; Director</p>
              <h3 className="mt-2 font-display text-3xl font-bold leading-tight">{COLLEGE.founders[1].name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{COLLEGE.founders[1].qualification}</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                Driving academic excellence and discipline across every program at Geethanjali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Courses Offered</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Programs that build careers</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">Intermediate</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">Junior College</h3>
              <ul className="mt-5 space-y-3">
                {COLLEGE.intermediate.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">Degree</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">B.Sc Honours</h3>
              <ul className="mt-5 space-y-3">
                {COLLEGE.degree.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TOPPERS */}
      <section id="toppers" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Hall of Fame</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Our Top Performers — 2026</h2>
          <p className="mt-3 text-muted-foreground">Intermediate Public Examinations</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {COLLEGE.toppers.map((t, i) => (
            <div key={t.name} className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                Rank {i + 1}
              </div>
              <div className="mx-auto mt-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-2xl font-bold text-primary-foreground shadow-lg">
                {t.score.split(" ")[0]}
              </div>
              <p className="mt-4 font-display text-xl font-bold">{t.name}</p>
              <p className="text-sm text-muted-foreground">Score: {t.score}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Core Team</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Teachers who care</h2>
            <p className="mt-3 text-muted-foreground">
              A group of dynamic teachers with a passion for teaching and a commitment to helping students reach their fullest potential.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {COLLEGE.team.map((m) => (
              <div key={m.name} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-display text-2xl font-bold text-primary">
                  {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <p className="mt-4 font-display text-lg font-bold">{m.name}</p>
                <p className="text-xs uppercase tracking-widest text-primary">{m.qualification}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLL + CONTACT */}
      <section id="enroll" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Admissions Open 2026</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Enroll today</h2>
            <p className="mt-4 text-muted-foreground">
              Fill the form and your enquiry goes straight to the Principal's WhatsApp. We'll reach out to schedule
              a campus visit and complete admission.
            </p>

            <div id="contact" className="mt-8 space-y-5 rounded-2xl border border-border bg-card p-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">Address</p>
                <p className="mt-1 font-medium">{COLLEGE.address}</p>
                <a href={COLLEGE.mapsUrl} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-semibold text-primary hover:underline">
                  Get directions →
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">Phone</p>
                {COLLEGE.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="mt-1 block font-medium hover:text-primary">{p}</a>
                ))}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">WhatsApp Principal</p>
                <a
                  href={`https://wa.me/${COLLEGE.principalWhatsApp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-2 font-medium text-foreground hover:text-primary"
                >
                  +91 98663 22804
                </a>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Geethanjali College Location"
                src="https://www.google.com/maps?q=Yelamanchili+Railway+Station&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <EnrollForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold">{COLLEGE.name}</p>
            <p className="mt-2 text-sm opacity-80">{COLLEGE.established} · Yelamanchili</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold uppercase tracking-widest text-accent">Contact</p>
            <p className="mt-2 opacity-90">{COLLEGE.phones.join(" · ")}</p>
            <p className="mt-1 opacity-90">{COLLEGE.address}</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold uppercase tracking-widest text-accent">Quick Links</p>
            <ul className="mt-2 space-y-1 opacity-90">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#courses" className="hover:underline">Courses</a></li>
              <li><a href="#enroll" className="hover:underline">Enroll</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/15">
          <p className="mx-auto max-w-7xl px-4 py-4 text-center text-xs opacity-80">
            © {new Date().getFullYear()} Geethanjali Educational Institutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
