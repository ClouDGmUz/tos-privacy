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
    slug: "blinkerp",
    name: "BlinkERP",
    tosLastUpdated: "2026-05-20",
    privacyLastUpdated: "2026-05-20",
    tos: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          'Welcome to BlinkERP ("BlinkERP," "we," "our," or "us"). BlinkERP is a cloud-based enterprise resource planning platform that includes check-in systems, employee attendance tracking, inventory management, and financial modules (collectively, the "Services"). By accessing or using any of our websites, Android applications, or APIs, you agree to be bound by these Terms of Service ("Terms").',
          "These Terms constitute a legally binding agreement between you (either an individual or the organization you represent) and AbdulazizWB, the developer and operator of BlinkERP. If you do not agree to these Terms, you may not access or use the Services.",
        ],
      },
      {
        id: "eligibility",
        title: "Eligibility & Account Types",
        content: [
          "You must be at least 18 years of age to use the Services. By creating an account, you represent that you meet this requirement and that all registration information you provide is accurate and complete.",
          "BlinkERP supports multiple account types: (a) Administrator accounts for organization owners and managers; (b) Employee accounts for staff using check-in, attendance, and task features; (c) Role-specific accounts for agents, warehousers, and finance personnel. Each account type has specific permissions and access levels defined by the organization administrator.",
          "If you are registering on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.",
        ],
      },
      {
        id: "accounts",
        title: "Account Security & Responsibilities",
        content: [
          "You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use or security breach.",
          "Organization administrators are responsible for: (a) managing user accounts and access permissions within their organization; (b) ensuring that employee data collected through the Services (including attendance records and location data) is collected and used in compliance with applicable laws; (c) obtaining necessary consents from employees before enabling location-based or tracking features.",
          "We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent or unlawful activity.",
        ],
      },
      {
        id: "services-description",
        title: "Description of Services",
        content: [
          "BlinkERP provides the following core modules:",
          "ERP & Inventory Management: Tools for managing business operations, inventory tracking, procurement, and supply chain workflows.",
          "Check-In & Attendance System: Digital attendance tracking with timestamp verification, shift management, and absence reporting. The check-in system may collect device information and location data as configured by the organization administrator.",
          "Employee Tracking: Active location tracking for field personnel during work hours. This feature is opt-in and must be enabled by the organization administrator with proper employee notification and consent.",
          "Financial Modules: Invoicing, expense tracking, and financial reporting tools for business operations.",
          "We reserve the right to modify, update, or discontinue specific features with reasonable notice. New features are subject to these Terms.",
        ],
      },
      {
        id: "acceptable-use",
        title: "Acceptable Use",
        content: [
          "You agree to use the Services only for lawful business purposes. Prohibited activities include: (a) using the Services for any unlawful purpose or in violation of any applicable regulations; (b) uploading or transmitting malicious code, viruses, or harmful data; (c) attempting to gain unauthorized access to other users' accounts or data; (d) interfering with or disrupting the integrity or performance of the Services; (e) reverse engineering, decompiling, or extracting the source code of the Services; (f) using the Services to track, monitor, or collect data about individuals without their knowledge or consent.",
          "We reserve the right to investigate violations and take appropriate action, including account suspension, termination, and reporting to law enforcement authorities.",
        ],
      },
      {
        id: "data-ownership",
        title: "Data Ownership & License",
        content: [
          "You retain full ownership of all business data, employee records, inventory data, financial data, and other content you upload or generate through the Services (\"Your Data\").",
          "By using the Services, you grant BlinkERP a limited, non-exclusive license to access, process, and store Your Data solely for the purpose of providing and improving the Services. We do not sell, rent, or share Your Data with third parties except as necessary to provide the Services or as required by law.",
          "You represent that you have all necessary rights, consents, and legal basis to collect and process any personal data (including employee location and attendance data) that you input into the Services.",
        ],
      },
      {
        id: "location-data",
        title: "Location & Device Data",
        content: [
          "Certain features of BlinkERP — including check-in verification and active employee tracking — collect location data (GPS) and device information (device name, model, operating system version) from Android devices running our applications.",
          "Location tracking is only active when: (a) the organization administrator has enabled the feature for specific user accounts; (b) the employee is clocked in for an active work session; and (c) the employee has been notified that location tracking is in use.",
          "Organization administrators are solely responsible for: (a) informing employees about the nature and extent of location tracking; (b) obtaining appropriate consent; (c) complying with all applicable labor and privacy laws regarding employee monitoring.",
          "Employees may disable location tracking by logging out of the application or ending their active work session. Note that some features may not function without location data enabled.",
        ],
      },
      {
        id: "third-party",
        title: "Third-Party Services",
        content: [
          "The Services may integrate with or link to third-party services. We do not control and are not responsible for the content, privacy practices, or availability of third-party services.",
          "Your use of third-party integrations is at your own risk and subject to the terms and policies of those third parties.",
        ],
      },
      {
        id: "payment",
        title: "Fees & Payment",
        content: [
          "BlinkERP is offered under subscription plans with fees based on the number of users, modules enabled, and features selected. All fees are clearly communicated before purchase and are non-refundable unless otherwise stated.",
          "We may change pricing with thirty (30) days' notice. Price changes apply to your next billing cycle. Continued use after a price change constitutes acceptance.",
        ],
      },
      {
        id: "disclaimers",
        title: "Disclaimers & Limitation of Liability",
        content: [
          'THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. BLINKERP DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.',
          "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ABDULAZIZWB AND BLINKERP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, BUSINESS, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICES.",
          "Our total aggregate liability for any claims arising from these Terms or the Services is limited to the amount you paid us in the twelve (12) months preceding the claim.",
        ],
      },
      {
        id: "indemnification",
        title: "Indemnification",
        content: [
          "You agree to indemnify and hold harmless AbdulazizWB, its affiliates, and personnel from any claims, damages, losses, or expenses (including legal fees) arising from: (a) your violation of these Terms; (b) your use of the Services; (c) your failure to obtain proper employee consents for data collection or tracking; (d) your violation of applicable laws or third-party rights.",
        ],
      },
      {
        id: "termination",
        title: "Termination",
        content: [
          "These Terms remain effective until terminated. You may terminate by discontinuing use and deleting your account. We may suspend or terminate your access for breach of these Terms with notice where reasonably possible.",
          "Upon termination, you may request an export of Your Data within thirty (30) days. After that period, we will securely delete Your Data, subject to any legal retention obligations.",
        ],
      },
      {
        id: "governing-law",
        title: "Governing Law",
        content: [
          "These Terms are governed by the laws of the Republic of Uzbekistan. Any disputes arising from these Terms or the Services shall be submitted to the competent courts of Uzbekistan.",
          "Before initiating legal proceedings, you agree to contact us first and attempt to resolve the dispute amicably within sixty (60) days.",
        ],
      },
      {
        id: "changes",
        title: "Changes to These Terms",
        content: [
          "We may update these Terms from time to time. Material changes will be communicated through the Services or via email at least thirty (30) days before taking effect. Continued use after changes become effective constitutes acceptance of the updated Terms.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        content: [
          "For questions about these Terms of Service:",
        ],
      },
    ],
    privacy: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          "BlinkERP, operated by AbdulazizWB, is committed to protecting the privacy of organizations, employees, and all users who interact with our platform. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights regarding that data.",
          "This policy applies to all BlinkERP services: the web-based ERP platform, Android applications, check-in systems, employee tracking features, and any related APIs or services (collectively, the \"Services\").",
        ],
      },
      {
        id: "data-we-collect",
        title: "Data We Collect",
        content: [
          "We collect the following categories of data:",
          "Organization Account Data: Company name, industry, contact person name, email address, phone number, billing address, and payment information (processed securely by our payment partners and not stored in full on our servers).",
          "Employee User Data: Employee names, email addresses, phone numbers, job titles, department assignments, employee IDs, and work schedules as provided by the organization administrator.",
          "Attendance & Check-In Data: Clock-in/clock-out timestamps, check-in location (GPS coordinates), device name, device model, and operating system version. This data is collected when an employee uses the check-in feature on an Android device.",
          "Active Location Data: For field personnel using the employee tracking feature, real-time GPS location data is collected during active work sessions. Location collection stops when the employee clocks out or ends their session.",
          "ERP Operational Data: Inventory records, procurement data, sales orders, invoices, financial transactions, and other business operational data entered by users.",
          "Usage & Diagnostic Data: App crash logs, feature usage statistics, API request metadata (endpoint, timestamp, response status), and device OS version for compatibility and performance improvement.",
          "We do not collect: biometric data (fingerprints, facial recognition), health information, or sensitive personal identifiers beyond what is listed above.",
        ],
      },
      {
        id: "how-we-use-data",
        title: "How We Use Data",
        content: [
          "We use the collected data for the following purposes:",
          "Providing the Services: Processing check-ins, generating attendance reports, displaying employee locations on administrator dashboards, managing inventory, processing financial transactions, and delivering all features of the BlinkERP platform.",
          "Improving the Services: Analyzing aggregated, anonymized usage patterns to identify bugs, optimize performance, and develop new features.",
          "Communication: Sending service notifications, account alerts, security updates, and support responses. We do not send marketing communications to individual employees without their opt-in consent.",
          "Security & Compliance: Monitoring for unauthorized access, fraud detection, enforcing our Terms of Service, and complying with legal obligations.",
          "We do not sell personal data. We do not use employee personal data for purposes unrelated to providing the Services.",
        ],
      },
      {
        id: "location-privacy",
        title: "Location Data & Employee Privacy",
        content: [
          "Location data is among the most sensitive information we handle. Our practices:",
          "Location data is collected only when an employee is actively clocked in and the tracking feature is enabled by the organization.",
          "Location data is visible only to authorized administrators within the employee's organization.",
          "Location history is retained according to the organization's configured retention policy (default: 90 days for detailed location history, after which only summary attendance records are kept).",
          "Employees can see their own location history through their account settings.",
          "We do not share individual location data with third parties. Aggregated, anonymized location patterns may be used for service optimization.",
          "Organization administrators are required to: (a) clearly inform employees that location tracking is in use; (b) obtain appropriate consent; (c) provide a written policy explaining how location data is used within the organization.",
        ],
      },
      {
        id: "data-sharing",
        title: "Data Sharing & Disclosure",
        content: [
          "We share data only in these limited circumstances:",
          "Service Providers: Trusted third-party vendors who help us operate the platform — cloud hosting (server infrastructure), email delivery, and error monitoring. These providers are contractually bound to protect data and use it only for the specified purpose.",
          "Legal Compliance: When required by valid legal process (court order, subpoena, or applicable law), we may disclose relevant data. We will notify affected organizations before disclosure where legally permitted.",
          "Business Transfers: In the event of a merger, acquisition, or sale of assets, data may be transferred. Affected parties will be notified before any transfer occurs.",
          "With Consent: Data may be shared for other purposes with explicit consent from the data controller (the organization or individual, as applicable).",
          "We do not sell, trade, or rent personal data to third parties for marketing or any other purpose.",
        ],
      },
      {
        id: "data-security",
        title: "Data Security",
        content: [
          "We implement and maintain appropriate technical and organizational security measures:",
          "Encryption: All data transmitted between client applications and our servers is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.",
          "Access Controls: Role-based access control ensures users can only access data relevant to their role. Multi-factor authentication is available for administrator accounts.",
          "Monitoring: We maintain logs of administrative access and monitor for suspicious activity.",
          "No method of electronic storage or transmission is 100% secure. While we strive to protect data using industry-standard measures, absolute security cannot be guaranteed. Users are responsible for maintaining the security of their credentials.",
          "In the event of a data breach affecting personal data, we will notify affected organizations and relevant authorities as required by applicable law.",
        ],
      },
      {
        id: "data-retention",
        title: "Data Retention & Deletion",
        content: [
          "Data retention periods vary by type:",
          "Active Account Data: Retained as long as the organization account is active. Organizations can delete specific employee records at any time through the administrator dashboard.",
          "Attendance Records: Retained for the duration of the employment relationship plus any legally required retention period.",
          "Detailed Location History: Default retention of ninety (90) days, configurable by the organization administrator (subject to legal minimums and maximums).",
          "Usage Logs & Diagnostics: Retained for up to twelve (12) months in aggregated form.",
          "Upon account termination, organizations may request a full data export within thirty (30) days. After this period, all data is permanently deleted from active systems. Backups may retain data for up to ninety (90) additional days before being purged.",
        ],
      },
      {
        id: "your-rights",
        title: "Your Rights",
        content: [
          "Depending on your role and jurisdiction, you may have the following rights regarding personal data:",
          "Access: Request a copy of your personal data held by us.",
          "Rectification: Request correction of inaccurate or incomplete personal data.",
          "Erasure: Request deletion of personal data, subject to legal retention requirements.",
          "Portability: Request your data in a structured, machine-readable format.",
          "Objection: Object to processing of your personal data in certain circumstances.",
          "Employees should direct data rights requests to their organization administrator (the data controller). Organizations should contact us to exercise data rights on behalf of their employees.",
          "We will respond to data rights requests within thirty (30) days. We may need to verify your identity before processing requests.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies & Tracking Technologies",
        content: [
          "Our web-based platform uses essential cookies for session management, authentication, and security. These cookies are necessary for the platform to function and cannot be disabled.",
          "Our Android applications do not use cookies. They use local storage for session tokens and application preferences.",
          "We may use analytics cookies on our marketing website to understand visitor behavior. These are optional and can be managed through your browser settings.",
          "We do not use third-party advertising cookies or tracking pixels anywhere in the Services.",
        ],
      },
      {
        id: "children",
        title: "Children's Data",
        content: [
          "The Services are intended for business and employment purposes and are not designed for use by individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that a child's data has been collected, it will be promptly deleted.",
        ],
      },
      {
        id: "international",
        title: "International Data",
        content: [
          "BlinkERP servers are located in secure data centers. If you access the Services from outside the server location, your data may be transferred across international borders.",
          "Where required, we implement appropriate safeguards for cross-border data transfers in accordance with applicable data protection laws.",
        ],
      },
      {
        id: "changes",
        title: "Changes to This Privacy Policy",
        content: [
          "We may update this Privacy Policy to reflect changes in our practices, technology, or legal requirements. Material changes will be communicated through the Services or via email at least thirty (30) days before taking effect.",
          "We encourage periodic review of this policy. Continued use of the Services after changes take effect constitutes acceptance.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        content: [
          "For privacy inquiries, data rights requests, or security concerns:",
        ],
      },
    ],
  },
  {
    slug: "mobileerp",
    name: "MobileERP",
    tosLastUpdated: "2026-05-18",
    privacyLastUpdated: "2026-05-18",
    tos: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          'MobileERP is a standalone Android application for independent traveling sellers and distributors ("the App"). It helps mobile vendors manage their daily sales operations — including order taking, customer tracking, inventory management, and route planning — while moving from shop to shop. MobileERP is developed and operated by AbdulazizWB.',
          "By downloading, installing, or using MobileERP, you agree to these Terms of Service. If you do not agree, do not install or use the App.",
          "MobileERP is a standalone product. It is not part of any other AbdulazizWB service and operates independently.",
        ],
      },
      {
        id: "who-is-it-for",
        title: "Who This App Is For",
        content: [
          "MobileERP is designed for independent mobile sellers and distributors — individuals or small businesses who sell products directly to shops, kiosks, cafes, restaurants, and similar retail points. Examples include: ice cream distributors, snack and beverage suppliers, bakery product distributors, dairy and fresh produce sellers, and any traveling merchant who takes orders and delivers to commercial customers.",
          "You must be at least 18 years of age to use the App. By registering, you confirm that you meet this requirement and that the information you provide is accurate.",
        ],
      },
      {
        id: "accounts",
        title: "Account Registration & Security",
        content: [
          "You create your own independent account within the App. Each account belongs to a single seller or business. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.",
          "You must provide accurate business information during registration, including your business name, contact details, and product catalog information.",
          "Notify us immediately of any unauthorized use of your account. We are not liable for losses resulting from unauthorized access caused by your failure to secure your credentials.",
        ],
      },
      {
        id: "app-features",
        title: "App Features & Functionality",
        content: [
          "MobileERP provides the following core features for traveling sellers:",
          "Customer Management: Maintain a database of your shop customers with contact information, location, order history, and payment records.",
          "Order Taking: Create and manage orders on the go — product selection, quantities, pricing, and delivery scheduling.",
          "Route Planning: Plan and optimize your daily sales route across customer locations. The App may use GPS to assist with route navigation and track customer visits.",
          "Inventory & Stock Tracking: Track your mobile inventory — what you loaded, what you sold, and what remains. Manage returns and wastage.",
          "Sales & Payment Tracking: Record sales transactions, track payments received and outstanding balances per customer, and generate daily sales summaries.",
          "Offline Mode: The App works without internet connectivity. Data entered offline syncs automatically when you reconnect.",
        ],
      },
      {
        id: "device-permissions",
        title: "Device Permissions",
        content: [
          "To provide its features, MobileERP requires the following Android permissions:",
          "Location (GPS): Used for route planning, customer location mapping, and visit tracking. You control when location services are active. Location data belongs to you and is stored in your account.",
          "Storage: Used to store the local database for offline operation, product images, and sales records.",
          "Network: Used for data synchronization and account backup.",
          "Camera (optional): Used to scan product barcodes or capture receipt images. Only activated when you use these features.",
          "You can manage all permissions through your device settings. Disabling certain permissions may limit specific features.",
        ],
      },
      {
        id: "your-data",
        title: "Your Business Data",
        content: [
          "You retain full ownership of all business data you enter into MobileERP — including customer lists, order records, sales data, inventory data, route information, and location history.",
          "We do not sell, share, or use your business data for any purpose other than providing the App's functionality to you. Your customer lists and sales data are private to your account.",
          "You are responsible for the accuracy of data you enter and for maintaining your own backups. While we store your data securely, we recommend periodically exporting your data through the App's export feature.",
        ],
      },
      {
        id: "subscription",
        title: "Subscription & Fees",
        content: [
          "MobileERP is offered as a subscription-based service. Fees and billing terms are displayed within the App before purchase. All fees are non-refundable unless otherwise stated or required by law.",
          "We may change subscription pricing with thirty (30) days' notice. Continued use after a price change constitutes acceptance of the new pricing.",
        ],
      },
      {
        id: "acceptable-use",
        title: "Acceptable Use",
        content: [
          "You agree to use MobileERP only for lawful business purposes. You may not: (a) use the App for any illegal activity; (b) attempt to hack, modify, or reverse engineer the App; (c) distribute the App outside authorized channels; (d) use the App to track or monitor individuals without their consent.",
        ],
      },
      {
        id: "updates",
        title: "Updates & Compatibility",
        content: [
          "We regularly update MobileERP to improve functionality, fix bugs, and maintain security. Updates are distributed through authorized app stores. Install updates promptly for the best experience and security.",
          "MobileERP supports Android 8.0 (API level 26) and above. Functionality on older or modified devices is not guaranteed.",
        ],
      },
      {
        id: "disclaimers",
        title: "Disclaimers & Limitation of Liability",
        content: [
          'THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE UNINTERRUPTED OPERATION OR ERROR-FREE FUNCTIONALITY.',
          "TO THE MAXIMUM EXTENT PERMITTED BY LAW, ABDULAZIZWB SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF THE APP.",
          "Our total liability is limited to the subscription fees you paid in the twelve (12) months preceding any claim.",
          "We are not responsible for data loss due to device failure, uninstallation without backup, or failure to sync data.",
        ],
      },
      {
        id: "termination",
        title: "Termination",
        content: [
          "You may stop using MobileERP at any time. Upon account deletion, you can export your data before deletion. We retain deleted account data for thirty (30) days before permanent removal.",
        ],
      },
      {
        id: "governing-law",
        title: "Governing Law",
        content: [
          "These Terms are governed by the laws of the Republic of Uzbekistan. Disputes shall be resolved in the competent courts of Uzbekistan. Before legal action, you agree to contact us to attempt amicable resolution within sixty (60) days.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        content: [
          "For support or legal inquiries regarding MobileERP:",
        ],
      },
    ],
    privacy: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          "This Privacy Policy explains how MobileERP, a standalone Android app for independent traveling sellers, collects, uses, and protects your personal and business data. MobileERP is developed and operated by AbdulazizWB.",
          "MobileERP is an independent application. Your data is not shared with or linked to any other AbdulazizWB service unless you choose to use both services with the same account.",
        ],
      },
      {
        id: "data-we-collect",
        title: "Data We Collect",
        content: [
          "Account Information: When you register, we collect your name, business name, phone number, email address (optional), and account password. Passwords are hashed and never stored in plain text.",
          "Business Data You Enter: Customer lists (shop names, addresses, contact details), product catalog and pricing, order records and sales transactions, inventory and stock data, payment records and outstanding balances, and route planning data. This data belongs to you and is private to your account.",
          "Location Data: If you enable route planning and customer visit features, the App collects GPS location. Location is only collected while the App is in active use (foreground). You can disable location at any time. Location data is stored in your account and visible only to you.",
          "Device Information: Device model, Android version, and App version — collected for compatibility and crash diagnostics. This does not include personal identifiers.",
          "Usage Diagnostics: Anonymous crash reports and feature usage statistics to help us improve the App. No personal or business data is included.",
        ],
      },
      {
        id: "how-we-use-data",
        title: "How We Use Your Data",
        content: [
          "We use your data exclusively to provide and improve MobileERP:",
          "Account data is used for authentication, account recovery, and service communications.",
          "Your business data (customers, orders, sales, inventory) is processed to deliver the App's features — displaying your customer list, processing orders, generating reports, and syncing across your devices.",
          "Location data is used solely for your route planning and customer visit mapping features.",
          "Device and diagnostic data is used for bug fixing and performance improvement.",
          "We DO NOT: sell your data, share your customer lists with anyone, use your sales data for marketing or advertising, or access your data for any purpose other than providing the service.",
        ],
      },
      {
        id: "data-storage",
        title: "Data Storage & Security",
        content: [
          "Your data is stored on secure cloud servers and locally on your device in an encrypted database within the App's private storage. Other apps cannot access MobileERP data.",
          "Data transmission between the App and our servers is encrypted via TLS 1.3. Authentication tokens are secured using Android Keystore.",
          "While we implement strong security measures, no system is 100% secure. You are responsible for securing your device with a screen lock and keeping your account credentials private.",
        ],
      },
      {
        id: "data-retention",
        title: "Data Retention & Your Control",
        content: [
          "Your data is retained as long as your account is active. You can: export your data at any time through the App's data export feature, delete individual records (customers, orders, products) directly in the App, request full account deletion through the App settings or by contacting us.",
          "After account deletion, your data is permanently removed from our servers within thirty (30) days. Server backups may retain data for up to ninety (90) additional days.",
        ],
      },
      {
        id: "third-party",
        title: "Third-Party Services",
        content: [
          "MobileERP uses no third-party analytics SDKs, advertising networks, or tracking frameworks. Your data is processed exclusively through our own infrastructure.",
          "Our cloud infrastructure provider processes data solely for hosting and does not have access to your business data content.",
        ],
      },
      {
        id: "children",
        title: "Children's Privacy",
        content: [
          "MobileERP is a business tool for adult sellers and distributors. It is not intended for anyone under 18. We do not knowingly collect data from children.",
        ],
      },
      {
        id: "changes",
        title: "Changes to This Policy",
        content: [
          "We may update this Privacy Policy to reflect changes in our practices. Material changes will be communicated through an in-app notice or email. Continued use after changes take effect constitutes acceptance.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        content: [
          "For privacy questions, data requests, or security concerns:",
        ],
      },
    ],
  },
];

export function getApp(slug: string | null): AppLegal {
  return apps.find((a) => a.slug === slug) ?? apps[0];
}

export const defaultApp = apps[0];
