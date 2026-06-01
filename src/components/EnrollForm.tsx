import { useState } from "react";
import { z } from "zod";
import { COLLEGE } from "@/lib/college";

const ALL_COURSES = [...COLLEGE.intermediate, ...COLLEGE.degree];

const schema = z.object({
  studentName: z.string().trim().min(2, "Enter student name").max(100),
  parentName: z.string().trim().min(2, "Enter parent name").max(100),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile"),
  course: z.string().min(1, "Select a course"),
  previousMarks: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

export function EnrollForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const text = [
      `*New Enrollment Enquiry — Geethanjali College*`,
      ``,
      `*Student:* ${d.studentName}`,
      `*Parent / Guardian:* ${d.parentName}`,
      `*Mobile:* ${d.phone}`,
      `*Course:* ${d.course}`,
      d.previousMarks ? `*10th / Previous Marks:* ${d.previousMarks}` : "",
      d.message ? `*Message:* ${d.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${COLLEGE.principalWhatsApp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  const fieldCls =
    "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium">Student name</span>
          <input name="studentName" className={fieldCls} placeholder="Full name" />
          {errors.studentName && <span className="mt-1 block text-xs text-destructive">{errors.studentName}</span>}
        </label>
        <label className="block text-sm">
          <span className="font-medium">Parent / Guardian name</span>
          <input name="parentName" className={fieldCls} placeholder="Parent name" />
          {errors.parentName && <span className="mt-1 block text-xs text-destructive">{errors.parentName}</span>}
        </label>
        <label className="block text-sm">
          <span className="font-medium">Mobile number</span>
          <input name="phone" inputMode="numeric" maxLength={10} className={fieldCls} placeholder="10-digit mobile" />
          {errors.phone && <span className="mt-1 block text-xs text-destructive">{errors.phone}</span>}
        </label>
        <label className="block text-sm">
          <span className="font-medium">Course of interest</span>
          <select name="course" className={fieldCls} defaultValue="">
            <option value="" disabled>Select a course</option>
            <optgroup label="Intermediate">
              {COLLEGE.intermediate.map((c) => <option key={c}>{c}</option>)}
            </optgroup>
            <optgroup label="Degree (B.Sc Honours)">
              {COLLEGE.degree.map((c) => <option key={c}>{c}</option>)}
            </optgroup>
          </select>
          {errors.course && <span className="mt-1 block text-xs text-destructive">{errors.course}</span>}
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium">10th / Previous marks <span className="text-muted-foreground">(optional)</span></span>
          <input name="previousMarks" className={fieldCls} placeholder="e.g. 520 / 600 or 87%" />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium">Message <span className="text-muted-foreground">(optional)</span></span>
          <textarea name="message" rows={3} maxLength={500} className={fieldCls} placeholder="Any questions for the principal?" />
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.81 11.81 0 018.413 3.488 11.82 11.82 0 013.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
        Send to Principal via WhatsApp
      </button>

      {sent && (
        <p className="rounded-md bg-accent/30 px-4 py-3 text-sm text-foreground">
          WhatsApp opened in a new tab — please press <strong>Send</strong> there to deliver your enquiry to the Principal.
        </p>
      )}
      <p className="text-xs text-muted-foreground">
        Submitting opens WhatsApp pre-filled with your details to the Principal: <strong>+91 98663 22804</strong>.
      </p>
    </form>
  );
}
