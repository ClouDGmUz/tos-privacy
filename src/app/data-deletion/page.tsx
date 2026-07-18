import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "How to request deletion of your data from AbdulazizWB apps, including data received through Meta (Facebook and Instagram) lead forms.",
};

const CONTACT_EMAIL = "info@abdulazizwb.uz";

const steps = [
  {
    title: "In-App Deletion",
    body: [
      "BlinkERP, MobileERP, and EasyPOS each provide account or record deletion controls inside the app where available. Organization administrators can delete employee records from the administrator dashboard; individual sellers can delete their account from app settings.",
    ],
  },
  {
    title: "Deletion by Email",
    body: [
      `Send a request to ${CONTACT_EMAIL} from the email address or phone number associated with your account. Include the app name (BlinkERP, MobileERP, or EasyPOS) and the account identifier you want removed.`,
      "We verify each request and complete the deletion within thirty (30) days. Backup copies are purged within a further ninety (90) days.",
    ],
  },
  {
    title: "Data Received Through Meta Lead Forms",
    body: [
      "If you submitted your contact details through a Facebook or Instagram lead form and want them removed from our CRM, you can either email us as described above, or use Facebook's own flow: Settings & Privacy → Settings → Apps and Websites → select the app → Remove. Meta then automatically notifies our data deletion endpoint and the associated lead record is erased.",
      "Deletion requests received from Meta are assigned a confirmation code, which you can use on this page to reference the status of your request.",
    ],
  },
  {
    title: "What Gets Deleted",
    body: [
      "All personal data linked to the identifier in the request: account profile, contact details, lead form submissions (name, phone number, email, and form answers), and any CRM records derived from them. Aggregated or anonymized statistics that no longer identify you may be retained.",
      "Some records may be retained where required by law (for example, financial transaction records subject to statutory retention periods). Such data is isolated and deleted once the retention obligation expires.",
    ],
  },
];

export default async function DataDeletionPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const code = typeof params.code === "string" ? params.code : null;

  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
      <main className="px-6 pt-24 pb-32 lg:pt-20 lg:px-16">
        <div className="max-w-[680px] mx-auto animate-fade-up">
          <header className="mb-8 lg:mb-16">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-3">
              AbdulazizWB
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">
              Data Deletion
            </h1>
            <p className="mt-4 text-sm text-muted">
              Applies to BlinkERP, MobileERP, and EasyPOS.
            </p>
            <div className="mt-5 flex gap-2">
              <Link
                href="/"
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted hover:text-foreground hover:border-muted/40 transition-all no-underline"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted hover:text-foreground hover:border-muted/40 transition-all no-underline"
              >
                Privacy Policy
              </Link>
            </div>
          </header>

          {code && (
            <div className="mb-12 rounded-lg border border-accent/40 bg-accent/10 px-5 py-4">
              <p className="text-sm font-medium text-accent">
                Deletion request received
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/85">
                Confirmation code:{" "}
                <code className="text-accent">{code}</code>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                Your request is being processed and will be completed within
                thirty (30) days. Keep this code if you want to follow up by
                email.
              </p>
            </div>
          )}

          <hr className="mb-16 border-border" />

          <div className="space-y-20">
            {steps.map((section, i) => (
              <section key={section.title}>
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-muted shrink-0 mt-[3px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-[1.75rem] font-medium leading-[1.3] tracking-[-0.01em] text-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.body.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-[0.95rem] leading-[1.75] text-foreground/85"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 space-y-1">
            <p className="text-[0.95rem] leading-[1.75] text-foreground/85">
              <strong className="font-medium text-foreground">Email: </strong>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent hover:text-accent-hover transition-colors no-underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="text-[0.95rem] leading-[1.75] text-foreground/85">
              <strong className="font-medium text-foreground">Address: </strong>
              Fergana, Uzbekistan
            </p>
          </div>

          <hr className="mt-24 mb-8 border-border" />
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} AbdulazizWB. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
