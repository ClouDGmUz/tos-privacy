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
          'MobileERP is a suite of Android applications designed for specific business roles — including Agent App, Warehouser App, and Finance App — that connect to the BlinkERP platform (collectively, the "Apps"). By installing or using any MobileERP application, you agree to these Terms of Service.',
          "MobileERP is developed and operated by AbdulazizWB. These Terms supplement the BlinkERP Terms of Service. Where terms conflict, the MobileERP Terms govern for MobileERP-specific usage.",
        ],
      },
      {
        id: "apps",
        title: "Application Descriptions",
        content: [
          "MobileERP includes the following role-specific applications:",
          "Agent App: For field sales agents and representatives — order taking, client visit tracking, route management, and sales reporting. May include location tracking during work hours for route optimization.",
          "Warehouser App: For warehouse and inventory personnel — stock receiving, picking, packing, shipment processing, inventory counts, and barcode/QR scanning.",
          "Finance App: For finance and accounting personnel — expense approval, invoice review, payment processing, and financial report access.",
          "Each app provides role-specific functionality and is distributed separately through authorized channels.",
        ],
      },
      {
        id: "accounts",
        title: "Accounts & Authentication",
        content: [
          "MobileERP apps authenticate through your BlinkERP account credentials. Separate registration is not required. Your organization administrator controls which apps and features are available to your account based on your assigned role.",
          "You are responsible for securing your device and preventing unauthorized access to the apps. Enable device screen lock and do not share your login credentials.",
        ],
      },
      {
        id: "device-data",
        title: "Device Permissions & Data",
        content: [
          "MobileERP apps require certain device permissions to function:",
          "Location (GPS): Required for Agent App for route tracking and client visit verification. Optional for Warehouser App (used only for shipment delivery verification). Not required for Finance App.",
          "Camera: Required for Warehouser App for barcode/QR scanning. Optional for Agent App (document scanning).",
          "Storage: Required for offline data caching to ensure functionality without internet connectivity.",
          "Network: Required for data synchronization with the BlinkERP server.",
          "You can manage these permissions through your device settings at any time. Note that disabling certain permissions may limit app functionality.",
        ],
      },
      {
        id: "offline",
        title: "Offline Operation & Data Sync",
        content: [
          "MobileERP apps are designed to function offline. Data entered while offline is stored locally on the device and automatically synchronized with the BlinkERP server when connectivity is restored.",
          "You are responsible for ensuring timely synchronization of offline data. Data stored locally on the device that has not been synced may be lost if the app is uninstalled, the device is reset, or the local storage is cleared.",
        ],
      },
      {
        id: "acceptable-use",
        title: "Acceptable Use",
        content: [
          "You may not: (a) modify, decompile, or reverse engineer the Apps; (b) distribute the Apps outside authorized channels; (c) use the Apps for any unlawful purpose; (d) use location tracking features to track individuals without their knowledge and consent.",
        ],
      },
      {
        id: "updates",
        title: "Updates & Compatibility",
        content: [
          "We regularly update MobileERP apps to add features, fix bugs, and maintain security. Updates are distributed through authorized channels. You are encouraged to install updates promptly to ensure security and compatibility.",
          "We support Android devices running Android 8.0 (API level 26) and above. Older OS versions may not be supported.",
        ],
      },
      {
        id: "disclaimers",
        title: "Disclaimers & Liability",
        content: [
          'THE APPS ARE PROVIDED "AS IS." WE DISCLAIM ALL WARRANTIES. WE ARE NOT LIABLE FOR INDIRECT OR CONSEQUENTIAL DAMAGES. OUR TOTAL LIABILITY IS LIMITED TO FEES PAID IN THE PRECEDING TWELVE (12) MONTHS.',
          "We are not responsible for data loss caused by device failure, uninstallation, or failure to sync offline data.",
        ],
      },
      {
        id: "governing-law",
        title: "Governing Law",
        content: [
          "These Terms are governed by the laws of the Republic of Uzbekistan. Disputes shall be resolved in the competent courts of Uzbekistan.",
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
          "This Privacy Policy covers the MobileERP suite of Android applications: Agent App, Warehouser App, and Finance App (collectively, the \"Apps\"). It explains what device data and personal information the Apps access and how that data is handled.",
          "The Apps are part of the BlinkERP ecosystem. This policy should be read together with the BlinkERP Privacy Policy.",
        ],
      },
      {
        id: "data-collected",
        title: "Data Collected by the Apps",
        content: [
          "Account Data: Login credentials (processed locally, not stored on device), user role, and permissions as configured in BlinkERP.",
          "Location Data (Agent App): GPS location during active work sessions for route tracking and client visit logging. Location is transmitted to the BlinkERP server at configurable intervals. Location collection stops when the user clocks out or closes the app.",
          "Location Data (Warehouser App): Optional GPS location, used only when processing shipment deliveries to capture delivery location proof.",
          "Camera Data (Warehouser App): Camera access for barcode and QR code scanning of products, shipments, and inventory items. No images are stored on the device — scanned data is transmitted directly as text.",
          "Device Information: Device name, model, Android version, and app version — collected for compatibility tracking and crash diagnostics.",
          "Offline Data: Business data entered while offline (orders, inventory counts, expense reports) is stored temporarily in the app's local database and synced to the server when connectivity is available.",
          "Finance App does not access location, camera, or any sensitive device sensors. It operates with minimal permissions: network access and local storage only.",
        ],
      },
      {
        id: "data-usage",
        title: "How Data Is Used",
        content: [
          "Location data from Agent App is used for: route optimization, client visit verification, and field team management reporting.",
          "Camera/scanner data is used solely for inventory and shipment processing. Images are not stored or transmitted — only the scanned barcode/QR text data is processed.",
          "Device information is used for compatibility analysis, crash reporting, and app improvement.",
          "All business data entered through the Apps is stored in the BlinkERP server under the same data protection and retention policies as the main platform.",
        ],
      },
      {
        id: "local-storage",
        title: "Local Storage & Data Security",
        content: [
          "The Apps store data locally in an encrypted SQLite database within the app's private storage directory. Other apps on the device cannot access this data.",
          "Authentication tokens are stored using Android Keystore where available (Android 6.0+).",
          "Data in transit is encrypted via TLS 1.3. The Apps use certificate pinning to prevent man-in-the-middle attacks.",
          "If a device is lost or stolen, the organization administrator can remotely revoke the device's access through the BlinkERP dashboard.",
        ],
      },
      {
        id: "permissions",
        title: "Managing Permissions",
        content: [
          "Android permissions for each app are requested at runtime when the feature is first used. You can review and modify permissions at any time through: Settings > Apps > [App Name] > Permissions.",
          "Disabling permissions may affect functionality: disabling location in Agent App will prevent route tracking and client visit logging; disabling camera in Warehouser App will prevent barcode scanning.",
          "Permissions not required for core functionality (such as location in Finance App) are never requested.",
        ],
      },
      {
        id: "third-party",
        title: "Third-Party Services",
        content: [
          "The Apps use no third-party analytics SDKs, advertising SDKs, or tracking frameworks. All data processing is done through our own servers.",
          "Cloud synchronization uses the BlinkERP API. Crash reporting is handled through our own infrastructure.",
        ],
      },
      {
        id: "children",
        title: "Children's Privacy",
        content: [
          "The Apps are business tools designed for employees and authorized personnel. They are not intended for children under the age of 18.",
        ],
      },
      {
        id: "changes",
        title: "Changes to This Policy",
        content: [
          "We may update this policy. App updates that include material privacy changes will display an in-app notice. Continued use after updates constitutes acceptance.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        content: [
          "For privacy questions related to MobileERP apps:",
        ],
      },
    ],
  },
];

export function getApp(slug: string | null): AppLegal {
  return apps.find((a) => a.slug === slug) ?? apps[0];
}

export const defaultApp = apps[0];
