import type { LegalSection } from "./tos";

export interface AppLegal {
  slug: string;
  name: string;
  tos: LegalSection[];
  privacy: LegalSection[];
  tosLastUpdated: string;
  privacyLastUpdated: string;
}

export const apps: AppLegal[] = [
  {
    slug: "abdulazizwb",
    name: "AbdulazizWB",
    tosLastUpdated: "2026-05-15",
    privacyLastUpdated: "2026-05-15",
    tos: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          'Welcome to AbdulazizWB ("Company," "we," "our," or "us"). By accessing or using any of our websites, applications, APIs, or services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Services.',
          "These Terms constitute a legally binding agreement between you and AbdulazizWB Please read them carefully before using the Services. We reserve the right to update these Terms at any time, and your continued use of the Services after any changes constitutes acceptance of the revised Terms.",
        ],
      },
      {
        id: "eligibility",
        title: "Eligibility",
        content: [
          "You must be at least 18 years of age, or the age of legal majority in your jurisdiction, to use the Services. By using the Services, you represent and warrant that you meet these requirements and that you have the legal capacity to enter into a binding contract.",
          'If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms. In such cases, "you" refers to both the individual user and the organization.',
        ],
      },
      {
        id: "accounts",
        title: "User Accounts",
        content: [
          "To access certain features of the Services, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary.",
          "You must notify us immediately of any unauthorized use of your account or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your account credentials. We reserve the right to suspend or terminate your account at our sole discretion if we suspect unauthorized or fraudulent activity.",
        ],
      },
      {
        id: "acceptable-use",
        title: "Acceptable Use",
        content: [
          "You agree to use the Services only for lawful purposes and in accordance with these Terms. You may not use the Services in any manner that violates applicable local, state, national, or international law or regulation.",
          "Prohibited activities include, but are not limited to: (a) uploading, transmitting, or distributing any material that is unlawful, defamatory, harassing, abusive, fraudulent, obscene, or otherwise objectionable; (b) attempting to interfere with, compromise, or disrupt the integrity or performance of the Services; (c) reverse engineering, decompiling, or disassembling any portion of the Services; (d) using any automated means (including bots, scrapers, or spiders) to access or collect data from the Services without our prior written permission; (e) impersonating any person or entity or misrepresenting your affiliation with any person or entity.",
          "We reserve the right to investigate and take appropriate legal action against anyone who violates these provisions, including reporting such violations to law enforcement authorities.",
        ],
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property",
        content: [
          "The Services and all content, features, and functionality thereof — including but not limited to text, graphics, logos, icons, images, audio clips, video, data compilations, software, and the design and arrangement thereof — are owned by AbdulazizWB, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.",
          "You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your personal or internal business purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material from the Services without our express prior written consent.",
          "All trademarks, service marks, trade names, logos, and trade dress displayed on the Services are the property of AbdulazizWB or their respective owners. Nothing in these Terms grants you any right to use any trademark without the prior written permission of the owner.",
        ],
      },
      {
        id: "user-content",
        title: "User-Generated Content",
        content: [
          'The Services may allow you to submit, upload, publish, or otherwise transmit content ("User Content"). You retain ownership of your User Content. By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with providing and promoting the Services.',
          "You represent and warrant that you own or have the necessary rights to your User Content and that it does not infringe the rights of any third party. We are not responsible for any User Content, and we reserve the right to remove any User Content at our sole discretion without prior notice.",
        ],
      },
      {
        id: "third-party",
        title: "Third-Party Services",
        content: [
          "The Services may contain links to third-party websites, applications, or services that are not owned or controlled by AbdulazizWB We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party services.",
          "You acknowledge and agree that AbdulazizWB shall not be liable for any damage or loss caused or alleged to be caused by or in connection with your use of or reliance on any third-party content, goods, or services. We encourage you to review the terms and privacy policies of any third-party services you access.",
        ],
      },
      {
        id: "disclaimers",
        title: "Disclaimers & Limitations of Liability",
        content: [
          'THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.',
          "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ABDULAZIZWB, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES.",
          "In no event shall our total liability to you for all claims arising out of or relating to these Terms or the Services exceed the greater of: (a) the amount you paid to us in the twelve (12) months preceding the claim, or (b) one hundred U.S. dollars ($100.00).",
        ],
      },
      {
        id: "indemnification",
        title: "Indemnification",
        content: [
          "You agree to defend, indemnify, and hold harmless AbdulazizWB, its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from: (a) your use of the Services; (b) your violation of these Terms; (c) your User Content; or (d) your infringement of any third-party rights.",
          "We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which case you agree to cooperate fully with us in asserting any available defenses.",
        ],
      },
      {
        id: "termination",
        title: "Termination",
        content: [
          "These Terms remain in effect until terminated by either party. You may terminate these Terms at any time by discontinuing use of the Services and deleting your account. We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.",
          "Upon termination, your right to use the Services will immediately cease. All provisions of these Terms that by their nature should survive termination — including ownership provisions, warranty disclaimers, indemnification, and limitations of liability — shall survive termination.",
        ],
      },
      {
        id: "governing-law",
        title: "Governing Law & Dispute Resolution",
        content: [
          "These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the Services shall be resolved exclusively in the state or federal courts located in Delaware.",
          "Before initiating formal legal proceedings, you agree to first contact us and attempt to resolve the dispute informally. If the dispute cannot be resolved within sixty (60) days, either party may proceed with formal legal action.",
          "You agree to resolve any disputes on an individual basis only, and waive any right to participate in a class action, class arbitration, or representative proceeding of any kind.",
        ],
      },
      {
        id: "changes",
        title: "Changes to These Terms",
        content: [
          "We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will make reasonable efforts to provide at least thirty (30) days' notice before the new terms take effect. What constitutes a material change will be determined at our sole discretion.",
          "By continuing to access or use the Services after those revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, you must discontinue using the Services.",
        ],
      },
      {
        id: "contact",
        title: "Contact Us",
        content: [
          "If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us at:",
        ],
      },
    ],
    privacy: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          "At AbdulazizWB, we take your privacy seriously. This Privacy Policy describes how we collect, use, store, share, and protect your personal information when you access or use our websites, applications, APIs, and services (collectively, the \"Services\"). It also explains the choices you have regarding your information.",
          "By using the Services, you consent to the collection and use of information in accordance with this policy. If you do not agree with any part of this policy, please discontinue use of the Services immediately.",
        ],
      },
      {
        id: "information-we-collect",
        title: "Information We Collect",
        content: [
          "We collect several categories of information to provide, maintain, and improve the Services:",
          "Account Information: When you create an account, we collect your name, email address, username, password, and any optional profile details you choose to provide. We may also collect billing information, such as your postal address and payment card details, processed securely through our third-party payment processors.",
          "Usage Data: We automatically collect certain information about how you interact with the Services, including your IP address, browser type and version, device type and operating system, referring URLs, pages visited, time spent on pages, links clicked, and other diagnostic data.",
          "Cookies & Similar Technologies: We use cookies, pixel tags, local storage, and similar tracking technologies to recognize your browser, remember your preferences, analyze usage patterns, and deliver relevant content. You can control cookie preferences through your browser settings.",
          "Communication Data: If you contact us directly — via email, contact forms, support tickets, or social media — we collect the content of your message and any attachments, along with your contact details.",
          "Third-Party Data: We may receive information about you from third-party services — such as authentication providers if you choose to sign in with Google or GitHub — in accordance with their respective privacy policies.",
        ],
      },
      {
        id: "how-we-use",
        title: "How We Use Your Information",
        content: [
          "We use the information we collect for the following purposes:",
          "To provide, operate, and maintain the Services — including user authentication, processing transactions, and delivering requested features and functionality.",
          "To improve, personalize, and expand the Services — by analyzing usage patterns, identifying bugs, testing new features, and optimizing performance and user experience.",
          "To communicate with you — sending service-related notifications, updates, security alerts, and support messages. We may also send marketing communications where permitted by law, with the option to opt out at any time.",
          "To ensure security and prevent fraud — monitoring for suspicious activity, enforcing our Terms of Service, protecting against unauthorized access, and maintaining the integrity of the Services.",
          "To comply with legal obligations — responding to lawful requests from public authorities, enforcing our legal rights, and meeting regulatory requirements.",
        ],
      },
      {
        id: "data-sharing",
        title: "Data Sharing & Disclosure",
        content: [
          "We do not sell your personal information. We may share your information only in the following limited circumstances:",
          "Service Providers: We engage trusted third-party companies and individuals to perform services on our behalf — such as payment processing, data hosting, analytics, email delivery, and customer support.",
          "Business Transfers: If AbdulazizWB is involved in a merger, acquisition, asset sale, financing, or bankruptcy proceeding, your information may be transferred as part of that transaction.",
          "Legal Compliance: We may disclose your information where required to do so by law, subpoena, court order, or other legal process.",
          "With Your Consent: We may share your information for any other purpose with your explicit consent.",
        ],
      },
      {
        id: "data-retention",
        title: "Data Retention",
        content: [
          "We retain your personal information for as long as your account is active or as needed to provide you with the Services. We also retain and use your information as necessary to comply with our legal obligations, resolve disputes, enforce our agreements, and pursue legitimate business purposes.",
          "When we no longer have a legitimate business need to process your information, we will either delete or anonymize it.",
        ],
      },
      {
        id: "data-security",
        title: "Data Security",
        content: [
          "We implement and maintain reasonable technical, administrative, and physical security measures designed to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include encryption of data in transit and at rest, access controls, regular security assessments, and personnel training.",
          "However, no method of electronic storage or transmission over the Internet is 100% secure. While we strive to protect your personal information using commercially acceptable means, we cannot guarantee its absolute security.",
          "In the event of a data breach that compromises your personal information, we will notify you and relevant authorities as required by applicable law.",
        ],
      },
      {
        id: "your-rights",
        title: "Your Rights & Choices",
        content: [
          "Depending on your jurisdiction, you may have certain rights regarding your personal information, including:",
          "Access: You have the right to request a copy of the personal information we hold about you, along with details about how we process it.",
          "Rectification: You may request that we correct, amend, or update any incomplete, inaccurate, or outdated personal information.",
          "Erasure: You may request that we delete your personal information, subject to certain legal exceptions.",
          "Portability: You have the right to receive your personal information in a structured, commonly used, and machine-readable format.",
          "Objection & Restriction: You may object to or request restriction of processing of your personal information under certain circumstances.",
          "To exercise any of these rights, please contact us using the details provided at the end of this policy.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies & Tracking Technologies",
        content: [
          "We use cookies and similar tracking technologies to recognize you when you visit the Services, remember your preferences, understand how you interact with the Services, and provide a more personalized experience.",
          "Essential Cookies: These are necessary for the operation of the Services and cannot be disabled. They include session management, authentication, and security features.",
          "Analytics Cookies: These help us understand how visitors engage with the Services by collecting and reporting information anonymously.",
          "Functional Cookies: These enable enhanced functionality and personalization, such as remembering your language preferences or region.",
          "You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete specific cookies, or set preferences for certain websites.",
        ],
      },
      {
        id: "children",
        title: "Children's Privacy",
        content: [
          "The Services are not intended for use by children under the age of 16 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect, use, or disclose personal information from children.",
          "If you are a parent or guardian and believe your child has provided us with personal information without your consent, please contact us immediately.",
        ],
      },
      {
        id: "international",
        title: "International Data Transfers",
        content: [
          "Your information may be transferred to, stored, and processed in countries other than the one in which you reside. These countries may have data protection laws that differ from those in your jurisdiction.",
          "Where required by applicable law, we implement appropriate safeguards — such as Standard Contractual Clauses approved by the European Commission — to ensure your personal information remains protected when transferred across borders.",
        ],
      },
      {
        id: "changes",
        title: "Changes to This Privacy Policy",
        content: [
          "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or for other operational reasons. When we make changes, we will revise the \"Last Updated\" date at the top of this policy.",
          "For material changes, we will provide additional notice — such as a prominent notification on the Services or an email to the address associated with your account — at least thirty (30) days before the change becomes effective.",
          "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
        ],
      },
      {
        id: "contact",
        title: "Contact Us",
        content: [
          "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, you can reach us through any of the following channels:",
        ],
      },
    ],
  },
  {
    slug: "beta",
    name: "Beta Analytics",
    tosLastUpdated: "2026-04-28",
    privacyLastUpdated: "2026-04-28",
    tos: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          'Beta Analytics ("Beta," "we," "our," or "us") provides a data analytics and business intelligence platform (the "Service"). By creating an account or using the Service, you agree to these Terms of Service. If you do not agree, do not use the Service.',
          "These Terms form a binding contract. We may modify them periodically; continued use after changes means you accept the updated Terms.",
        ],
      },
      {
        id: "eligibility",
        title: "Eligibility & Registration",
        content: [
          "You must be at least 18 years old and capable of forming a binding contract. By registering, you warrant that all information you provide is accurate and complete.",
          "Organizations must designate an authorized representative to create and manage the account. That individual represents they have the authority to bind the organization.",
        ],
      },
      {
        id: "accounts",
        title: "Accounts & Access Credentials",
        content: [
          "You are responsible for safeguarding your login credentials and for all activity under your account. Notify us immediately of any unauthorized access. Each account is for a single organization; sharing credentials across organizations is prohibited.",
          "We offer tiered plans with different feature sets and usage limits. You agree to use the Service within the limits of your chosen plan. Exceeding limits may result in overage charges or service throttling.",
        ],
      },
      {
        id: "data-processing",
        title: "Data Processing & Your Data",
        content: [
          "You retain all rights to the data you upload, connect, or generate through the Service (\"Your Data\"). You grant Beta a limited, non-exclusive license to process Your Data solely to provide and improve the Service.",
          "You represent that you have all necessary rights and consents to upload Your Data to the Service and that Your Data does not violate any applicable laws or third-party rights.",
          "We implement industry-standard security measures to protect Your Data. However, you acknowledge that no cloud-based system is immune from security incidents.",
        ],
      },
      {
        id: "acceptable-use",
        title: "Acceptable Use",
        content: [
          "You may not: (a) use the Service to process illegal, fraudulent, or harmful data; (b) attempt to probe, scan, or test the vulnerability of the Service; (c) use the Service to build a competing product; (d) resell or redistribute the Service without our written permission; (e) exceed rate limits or use unauthorized automation.",
          "We may suspend or terminate accounts that violate these provisions without prior notice.",
        ],
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property",
        content: [
          "Beta owns all rights, title, and interest in the Service, including its software, algorithms, dashboards, documentation, and branding. Your use of the Service does not grant you any ownership rights.",
          "We may use aggregated, anonymized data derived from customer usage to improve the Service, develop benchmarks, and publish industry reports. This data cannot be used to identify you or your organization.",
        ],
      },
      {
        id: "fees",
        title: "Fees & Payment",
        content: [
          "Fees are based on your selected plan and are billed monthly or annually as chosen during signup. All fees are non-refundable except as required by law or explicitly stated otherwise.",
          "We may change pricing with thirty (30) days' notice. Price changes apply to the next billing cycle. If you do not agree to the new pricing, you may cancel before the change takes effect.",
        ],
      },
      {
        id: "disclaimers",
        title: "Disclaimers & Limitation of Liability",
        content: [
          'THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. BETA DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
          "BETA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.",
          "Our total aggregate liability is limited to the fees you paid in the twelve (12) months preceding the claim.",
        ],
      },
      {
        id: "termination",
        title: "Termination",
        content: [
          "Either party may terminate at any time. Upon termination, we will delete Your Data within sixty (60) days. You may export Your Data before the deletion window closes.",
          "Sections that by their nature should survive — including IP, disclaimers, liability limits, and indemnification — survive termination.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        content: [
          "For questions about these Terms, contact us at:",
        ],
      },
    ],
    privacy: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          "Beta Analytics respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you use our analytics platform.",
          "By using Beta Analytics, you agree to the practices described here. If you disagree, please stop using the Service.",
        ],
      },
      {
        id: "information-we-collect",
        title: "Information We Collect",
        content: [
          "Account Data: When you register, we collect your name, company name, email, and billing details. Payment information is processed securely by our payment partners and never stored on our servers.",
          "Usage Analytics: We collect metadata about how you use the platform — which features you access, query types, dashboard interactions, and session duration. This helps us improve the product.",
          "Connected Data Sources: If you connect external data sources (databases, APIs, file storage), we access only the data necessary to provide analytics services. We do not scrape or retain source data beyond what is needed for your queries.",
          "Cookies: We use essential cookies for session management and optional analytics cookies to understand aggregate usage patterns.",
        ],
      },
      {
        id: "how-we-use",
        title: "How We Use Information",
        content: [
          "We use your information to: provide and maintain the analytics Service, process your queries and generate reports, send account-related communications, improve our algorithms and user experience, detect and prevent fraud or abuse, and comply with legal obligations.",
          "We do not sell your personal information or Your Data to third parties.",
        ],
      },
      {
        id: "data-sharing",
        title: "Data Sharing",
        content: [
          "We share information only with: (a) service providers who help us operate the platform (hosting, email, monitoring); (b) legal authorities when required by valid legal process; (c) successors in the event of a merger or acquisition.",
          "We may publish aggregate, de-identified analytics trends and benchmarks. No individual customer data is identifiable in such publications.",
        ],
      },
      {
        id: "data-security",
        title: "Data Security",
        content: [
          "Your Data is encrypted in transit (TLS 1.3) and at rest (AES-256). We maintain SOC 2 Type II certification and conduct regular penetration testing.",
          "You control access to your account. Use strong passwords, enable two-factor authentication, and promptly revoke access for departed team members.",
        ],
      },
      {
        id: "data-retention",
        title: "Data Retention & Deletion",
        content: [
          "We retain Your Data as long as your account is active. Upon account deletion, we purge Your Data from our active systems within thirty (30) days. Backups may retain data for up to ninety (90) additional days.",
          "You can export Your Data at any time in standard formats (CSV, JSON, Parquet).",
        ],
      },
      {
        id: "your-rights",
        title: "Your Rights",
        content: [
          "Depending on your jurisdiction, you may have rights to access, correct, delete, or port your personal data. To exercise these rights, contact our privacy team.",
          "If you are a European resident, Beta is the data processor for Your Data and the data controller for account information. Our lawful basis for processing is contract performance and legitimate interests.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        content: [
          "Privacy inquiries:",
        ],
      },
    ],
  },
  {
    slug: "devtool",
    name: "DevTool API",
    tosLastUpdated: "2026-05-01",
    privacyLastUpdated: "2026-05-01",
    tos: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          'DevTool API ("DevTool," "we," "us") provides application programming interfaces (APIs), software development kits (SDKs), and related developer tools (collectively, the "APIs"). By accessing or using the APIs, you agree to these Terms of Service.',
          "If you are using the APIs on behalf of an organization, you represent you have authority to bind that organization. These Terms govern your use of all API versions, including beta and deprecated endpoints.",
        ],
      },
      {
        id: "api-keys",
        title: "API Keys & Authentication",
        content: [
          "Access to the APIs requires valid API credentials (keys, tokens, or certificates). You are responsible for securing your credentials. Do not embed API keys in client-side code, public repositories, or share them with unauthorized parties.",
          "You must use the authentication mechanism specified for each API endpoint. We may rotate or revoke compromised credentials at our discretion. You will be notified if action is required on your part.",
        ],
      },
      {
        id: "rate-limits",
        title: "Rate Limits & Quotas",
        content: [
          "All API access is subject to rate limits, which vary by endpoint and your subscription tier. Rate limits are documented in the API reference. Exceeding rate limits will return HTTP 429 responses.",
          "You must implement exponential backoff and respect Retry-After headers. Circumventing rate limits — including using multiple API keys to aggregate quota — is grounds for immediate suspension.",
          "We may adjust rate limits with reasonable notice. Enterprise customers may negotiate custom limits under a separate agreement.",
        ],
      },
      {
        id: "acceptable-use",
        title: "Acceptable Use",
        content: [
          "You may not: (a) use the APIs for illegal purposes or in violation of applicable regulations; (b) distribute, resell, or sublicense the APIs as a standalone service; (c) use the APIs to build a competing product; (d) reverse engineer, decompile, or extract source code from the APIs or SDKs; (e) use the APIs to transmit malware, spam, or fraudulent content.",
          "We monitor API usage for abuse and reserve the right to rate-limit, suspend, or terminate access for violations.",
        ],
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property",
        content: [
          "DevTool owns all rights to the APIs, SDKs, documentation, sample code, and associated materials. Your use is licensed, not sold. You may use our SDKs and sample code as specified in their respective licenses (typically MIT or Apache 2.0).",
          "Feedback, suggestions, and bug reports you provide become our property, and we may use them without restriction or compensation.",
        ],
      },
      {
        id: "sla",
        title: "Service Level & Availability",
        content: [
          "We target 99.9% uptime for production APIs, measured monthly. If we fall below this threshold, you may be eligible for service credits as detailed in your subscription agreement.",
          "We reserve the right to deprecate API versions with ninety (90) days' notice. Critical security patches may be applied without notice. Scheduled maintenance is announced at least forty-eight (48) hours in advance.",
          "Beta and preview APIs are provided without SLA commitments and may change or be discontinued without notice.",
        ],
      },
      {
        id: "disclaimers",
        title: "Disclaimers & Limitation of Liability",
        content: [
          'THE APIS ARE PROVIDED "AS IS" AND "AS AVAILABLE." DEVTOOL DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.',
          "DEVTOOL IS NOT LIABLE FOR INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS OR DATA, EVEN IF ADVISED OF THE POSSIBILITY.",
          "Our total liability is capped at the amount you paid us in the six (6) months before the claim, or $500, whichever is greater.",
        ],
      },
      {
        id: "termination",
        title: "Termination",
        content: [
          "You may stop using the APIs at any time. We may terminate access for breach of these Terms with thirty (30) days' notice and an opportunity to cure, except for abuse or security violations which warrant immediate termination.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        content: [
          "Developer support and legal inquiries:",
        ],
      },
    ],
    privacy: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          "DevTool API is committed to protecting the privacy of developers and end users who interact with our APIs and services. This policy explains what data we collect and how we handle it.",
        ],
      },
      {
        id: "what-we-collect",
        title: "What We Collect",
        content: [
          "Developer Account Information: Name, email, company name, and payment details when you register for an API key.",
          "API Usage Logs: We log every API request — including endpoint, method, timestamp, response status, latency, and originating IP. These logs are essential for debugging, rate limiting, and security monitoring.",
          "Request & Response Metadata: We may inspect request headers and response payloads for abuse detection and performance optimization. We do not persistently store your API payloads unless required for debugging a specific issue you report.",
          "SDK Telemetry: Our official SDKs may collect anonymous usage statistics (SDK version, operating system, runtime version) unless you opt out. No personal data or request content is included in telemetry.",
        ],
      },
      {
        id: "how-we-use",
        title: "How We Use Data",
        content: [
          "API logs are used for: monitoring service health and performance, enforcing rate limits and detecting abuse, debugging customer-reported issues, generating aggregate usage analytics, and billing metering.",
          "We do not sell API logs or developer data. Aggregate, de-identified usage statistics may be published (e.g., \"50 billion API calls processed this month\").",
        ],
      },
      {
        id: "data-retention",
        title: "Data Retention",
        content: [
          "API request logs are retained for thirty (30) days for debugging and monitoring, then aggregated and anonymized. Billing records are retained as required by financial regulations (typically seven years).",
          "Developer account data is retained while your account is active and deleted within sixty (60) days of account closure.",
        ],
      },
      {
        id: "subprocessors",
        title: "Subprocessors",
        content: [
          "We use the following third-party subprocessors to operate the API infrastructure: cloud hosting provider (AWS, US regions), monitoring and observability (Datadog), customer support platform (Intercom), and payment processing (Stripe).",
          "All subprocessors are contractually bound to equivalent data protection standards. We maintain a current list of subprocessors at docs.devtool.example.com/subprocessors.",
        ],
      },
      {
        id: "security",
        title: "Security",
        content: [
          "All API traffic is encrypted via TLS 1.3. We support mutual TLS for enterprise customers. API keys are hashed at rest using bcrypt.",
          "We maintain SOC 2 Type II and ISO 27001 certifications. Penetration tests are conducted quarterly by independent firms. Report security vulnerabilities to security@devtool.example.com.",
        ],
      },
      {
        id: "gdpr",
        title: "GDPR & International Compliance",
        content: [
          "For EU developers: we act as a data controller for account information and as a data processor for data processed through the APIs. We have executed Standard Contractual Clauses for international data transfers.",
          "API data is processed in US data centers. Enterprise customers may request data residency in specific regions under a separate agreement.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        content: [
          "Privacy and security inquiries:",
        ],
      },
    ],
  },
];

export function getApp(slug: string | null): AppLegal {
  return apps.find((a) => a.slug === slug) ?? apps[0];
}

export const defaultApp = apps[0];
