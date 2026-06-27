const scenarios = {
  ransomware: {
    label: "Ransomware Disruption",
    openings: [
      "A department file share becomes unavailable shortly after users report ransom notes on shared workstations. The help desk is receiving calls from staff who cannot access forms, case files, and shared templates.",
      "A business unit reports that shared files now show unfamiliar extensions and several mapped drives are unavailable.",
      "Overnight monitoring shows unusual file modification volume on a shared repository; staff arrive to missing templates and locked documents.",
      "A remote office reports that mapped drives disappeared after several users opened documents from a shared project folder.",
      "Help desk tickets spike after staff see lock-screen messages and cannot open routine business documents.",
      "A system owner reports that a shared application is online, but its attached document repository appears corrupted or inaccessible."
    ],
    opening:
      "A department file share becomes unavailable shortly after users report ransom notes on shared workstations. The help desk is receiving calls from staff who cannot access forms, case files, and shared templates.",
    variables: {
      detectionSource: ["help desk ticket spike", "endpoint alert", "file-share monitoring alert", "user screenshot", "backup job anomaly", "business owner escalation"],
      affectedAsset: ["department file share", "shared workstation group", "line-of-business file repository", "administrative support server", "remote office file cache", "shared document repository"],
      businessImpact: ["deadline-critical processing is delayed", "staff cannot access shared templates", "customer-facing work is slowed", "manual workarounds are being requested", "a public-facing service depends on affected data", "leadership needs a continuity estimate"],
      recoveryConstraint: ["backup integrity is not confirmed", "the last known-good restore point is unclear", "system owners disagree on recovery priority", "affected hosts may still need evidence preservation", "restore testing requires a clean target environment", "remote access scope is not yet understood"]
    },
    objectives: [
      "Validate the first-hour escalation path for suspected ransomware.",
      "Test containment decisions when business operations are already degraded.",
      "Confirm who can approve communications, outage notices, and recovery priorities."
    ],
    injects: [
      "A user forwards a screenshot showing a ransom note that claims backups were deleted.",
      "Endpoint alerts show suspicious PowerShell activity from a service account.",
      "A department leader asks whether staff should keep working from personal devices.",
      "The backup administrator reports that the most recent backup job failed overnight.",
      "A local reporter emails the public inbox asking whether services are offline because of a cyberattack.",
      "An administrator reports that a domain account used for maintenance is locked out after repeated failed logins.",
      "The incident channel fills with duplicate status requests from teams that are not part of the response group.",
      "Backup staff report that restore points exist, but no one has validated whether they are clean.",
      "A remote office still has active VPN sessions into the affected shared environment.",
      "A business owner asks to restore a service before containment assumptions are confirmed.",
      "Communications asks for a holding statement that separates confirmed facts from working assumptions."
    ],
    decisions: [
      "When should the organization declare this an incident rather than a help desk outage?",
      "Which systems should be isolated first, and who has authority to approve that action?",
      "What is the minimum evidence needed before initiating recovery from backups?",
      "Who decides whether to notify external stakeholders before the technical scope is complete?",
      "Which business service should recover first if only one can be restored quickly?",
      "What criteria define safe enough to restore a system into production?",
      "Who owns staff guidance that prevents unsafe workarounds without overstating facts?"
    ],
    messages: [
      "From Help Desk: We have 22 tickets now. Staff are asking if they should reboot, disconnect, or wait.",
      "From Department Lead: We have a deadline today. Can we use personal email to keep the work moving?",
      "From Communications: We need approved language if this becomes visible to the public.",
      "From Backup Admin: I can start a test restore, but I need an approved target and a business priority.",
      "From Legal or Policy Advisor: Preserve the timeline of who approved containment and recovery decisions.",
      "From Executive Sponsor: I need a plain-language impact summary and the next decision you need from leadership."
    ]
  },
  phishing: {
    label: "Credential Phishing",
    openings: [
      "Several employees report receiving a realistic login prompt after clicking a message that appeared to come from a shared document service. One user says they entered credentials before realizing the page looked wrong.",
      "Multiple users report a convincing document-sharing email that led to a login prompt; at least one user entered credentials.",
      "Security receives reports of a login-themed message spreading across departments during a busy business cycle.",
      "A manager forwards a suspected phish after a staff member notices unexpected mailbox activity.",
      "Help desk receives calls from users who clicked a benefits-themed message and are unsure whether changing passwords is enough.",
      "An executive assistant reports a suspicious sign-in prompt after opening a shared agenda link on a mobile device."
    ],
    opening:
      "Several employees report receiving a realistic login prompt after clicking a message that appeared to come from a shared document service. One user says they entered credentials before realizing the page looked wrong.",
    variables: {
      detectionSource: ["user report", "email security alert", "manager escalation", "identity sign-in anomaly", "help desk call pattern", "mailbox rule alert"],
      affectedAsset: ["cloud mailbox", "document-sharing account", "executive assistant account", "department distribution group", "shared calendar account", "privileged business user account"],
      businessImpact: ["staff are unsure which messages are safe", "help desk call volume is rising", "shared documents may have been accessible", "leadership accounts may need careful handling", "users are forwarding the lure to coworkers", "a business process depends on the affected mailbox"],
      recoveryConstraint: ["recipient scope is unknown", "the affected user deleted the message", "session revocation needs approval", "mailbox rule review is not complete", "VIP availability complicates reset timing", "message removal may not cover forwarded copies"]
    },
    objectives: [
      "Confirm phishing triage, reporting, and credential reset responsibilities.",
      "Test how quickly the team can identify affected users and related mailbox rules.",
      "Review internal messaging that reduces panic without minimizing the incident."
    ],
    injects: [
      "Security receives a copy of the phishing email with a spoofed display name.",
      "Cloud login logs show successful access from an unusual geography.",
      "The affected user's mailbox contains a new forwarding rule.",
      "A manager asks whether the entire organization needs a password reset.",
      "The same lure is now being reported by another department.",
      "A user deleted the message and cannot provide headers or a screenshot.",
      "An executive reports receiving the same message and asks whether leadership accounts are being targeted.",
      "Identity staff can revoke active sessions, but need approval to apply that action broadly.",
      "Help desk needs different guidance for users who only received the email, clicked the link, or entered credentials.",
      "An analyst finds a suspicious consent prompt associated with the affected account.",
      "Staff begin forwarding screenshots of the lure to large internal lists."
    ],
    decisions: [
      "What evidence confirms this is a credential compromise rather than only attempted phishing?",
      "Who can force password resets or revoke sessions after hours?",
      "When should the team search for mailbox rules, delegated access, or suspicious OAuth grants?",
      "What message should go to staff, and who approves it?",
      "How should recipients be separated into received, clicked, submitted, and confirmed misuse categories?",
      "What extra handling is appropriate for executive or high-risk accounts without bypassing evidence capture?",
      "When is message removal enough, and when does monitoring need to continue?"
    ],
    messages: [
      "From Affected User: I clicked it on my phone. I changed my password right away. Is that enough?",
      "From Manager: If one person clicked, should we assume everyone is compromised?",
      "From Executive Assistant: The executive is traveling and cannot be locked out without warning.",
      "From Help Desk: Users are asking whether to report the email, delete it, or forward it to security.",
      "From Identity Admin: Session revocation is ready, but I need a clear approval path for broad action.",
      "From Communications: We need one staff notice before unofficial advice spreads."
    ]
  },
  insider: {
    label: "Insider Data Exposure",
    openings: [
      "A supervisor reports that a departing employee may have downloaded sensitive records to removable media before their final day. The employee's access is still active in one business application.",
      "A manager reports unusual download activity by an employee whose role recently changed.",
      "A peer reports that a staff member used a personal cloud storage page while working with sensitive records.",
      "A data owner notices a large export from a case-management system shortly after an employee is reassigned.",
      "HR asks security to quietly review access activity for an employee who is about to receive a sensitive personnel decision.",
      "A supervisor reports that a contractor copied shared-folder contents shortly before their project access was scheduled to end."
    ],
    opening:
      "A supervisor reports that a departing employee may have downloaded sensitive records to removable media before their final day. The employee's access is still active in one business application.",
    variables: {
      detectionSource: ["supervisor report", "file access review", "peer concern", "HR escalation", "data owner question", "contractor offboarding review"],
      affectedAsset: ["shared records folder", "business application export", "employee laptop", "sensitive case files", "department cloud folder", "contractor account"],
      businessImpact: ["leadership needs a discreet assessment", "HR action may be pending", "legal review may be required", "the team must avoid broad disclosure", "a business handoff is in progress", "data owners need a sensitivity determination"],
      recoveryConstraint: ["export logging is incomplete", "device collection timing is sensitive", "access changes could alert the employee", "evidence preservation must come first", "HR timing may limit direct outreach", "shared-folder ownership is unclear"]
    },
    objectives: [
      "Validate coordination between IT, HR, legal, and leadership.",
      "Test evidence preservation steps before access or devices are altered.",
      "Discuss decision points for notification, discipline, and containment."
    ],
    injects: [
      "File access logs show large downloads outside normal working hours.",
      "HR confirms the employee had performance concerns and gave short notice.",
      "A peer reports seeing the employee use a personal cloud storage page.",
      "Legal asks whether the data included regulated or contractual information.",
      "The employee's manager wants immediate access to the laptop to keep work moving.",
      "A system owner says the business application does not log export activity in detail.",
      "The departing employee is scheduled for an exit interview in two hours.",
      "The data owner says some exported records may include information from multiple business units.",
      "HR asks whether account changes can wait until after a planned meeting.",
      "A contractor sponsor says disabling access immediately may interrupt a critical handoff.",
      "Audit asks whether the organization can prove who accessed the shared folder during the concern window."
    ],
    decisions: [
      "Who decides whether this is handled as an HR matter, security incident, or both?",
      "What evidence must be preserved before disabling accounts or collecting equipment?",
      "Who determines whether affected data triggers notification obligations?",
      "How should need-to-know be enforced while still briefing leadership?",
      "Who can approve quiet monitoring, account changes, or device collection when HR timing is sensitive?",
      "What is the threshold for involving data owners before the scope is fully known?",
      "How should the team document facts without speculating about motive?"
    ],
    messages: [
      "From HR: Please do not contact the employee until we coordinate our approach.",
      "From Legal: Preserve logs and do not make accusations in writing without review.",
      "From Manager: I need the laptop today or our team cannot finish the handoff.",
      "From Data Owner: I need to know which records were involved before I can judge sensitivity.",
      "From Audit: Please preserve access logs and any approval trail for account changes.",
      "From Contractor Sponsor: If this account is disabled now, the project handoff may stop."
    ]
  },
  ddos: {
    label: "Public Service Outage",
    openings: [
      "The public website and several customer-facing portals are intermittently unreachable. Monitoring shows a sharp increase in inbound traffic, and social media posts say the organization is down.",
      "Users report that public services are timing out while internal systems appear normal.",
      "Monitoring shows an unusual traffic surge against internet-facing services during a high-visibility business period.",
      "A call center reports a wave of complaints that an online form fails during a public deadline window.",
      "A hosting provider sends an alert that public services are receiving abnormal request volume.",
      "A public status page remains online, but the main service portal is intermittently unavailable."
    ],
    opening:
      "The public website and several customer-facing portals are intermittently unreachable. Monitoring shows a sharp increase in inbound traffic, and social media posts say the organization is down.",
    variables: {
      detectionSource: ["public monitoring alert", "call center reports", "hosting provider notification", "social media complaint", "status page discrepancy", "partner availability report"],
      affectedAsset: ["public website", "customer portal", "online form service", "public status page", "authentication gateway", "public API endpoint"],
      businessImpact: ["call volume is rising", "public trust is affected", "business owners need a workaround", "partners are asking whether to disconnect", "a public deadline may be missed", "support staff need a script"],
      recoveryConstraint: ["provider filtering may block legitimate users", "the team has not ruled out a second incident", "service priority is disputed", "status messaging needs approval", "alternate processes need business approval", "provider changes require a named approver"]
    },
    objectives: [
      "Exercise outage triage across IT, communications, and business owners.",
      "Review when to engage hosting, internet service, or DDoS protection providers.",
      "Practice public messaging during a service availability incident."
    ],
    injects: [
      "Monitoring shows traffic spikes from multiple regions.",
      "The call center reports a surge in complaints about unavailable services.",
      "A business owner asks to post a workaround on social media immediately.",
      "The hosting provider requests approval to apply stricter traffic filtering.",
      "An executive asks whether this is a distraction from another attack.",
      "The website comes back briefly, then fails again under renewed traffic.",
      "A partner organization asks whether its connection to your system should be disabled.",
      "A business owner asks whether the public deadline can be extended or handled manually.",
      "The status page is reachable, but users say its message is too vague to be useful.",
      "The provider asks for a decision on emergency filtering that could block some legitimate users.",
      "Support staff report that callers are receiving different explanations from different teams."
    ],
    decisions: [
      "Who owns the decision to change traffic filtering or rate limits?",
      "What business services must be prioritized if not everything can stay online?",
      "When should public status messaging begin?",
      "What indicators would make the team look for a second, hidden incident?",
      "Who approves manual workarounds or deadline changes during the outage?",
      "What evidence is needed to show that provider actions helped or harmed availability?",
      "How will the team decide the service is stable enough to stop emergency messaging?"
    ],
    messages: [
      "From Call Center: We need a script. Call volume is now triple normal.",
      "From Hosting Provider: We can apply emergency filtering, but some legitimate users may be blocked.",
      "From Communications: The public is already discussing the outage. Silence is becoming its own message.",
      "From Business Owner: If the portal stays down, we need an approved alternate intake process.",
      "From Partner: Our integration is timing out. Should we pause automated retries?",
      "From Executive Sponsor: Tell me what is affected, what is still working, and what decision you need."
    ]
  },
  supplyChain: {
    label: "Vendor Compromise",
    openings: [
      "A trusted vendor notifies the organization that their remote support platform may have been compromised. The vendor previously had access to internal systems during maintenance windows.",
      "A vendor sends a vague security notice about possible unauthorized access to its support environment.",
      "A system owner forwards a vendor advisory that may affect a tool used for remote maintenance.",
      "Procurement receives a vendor notice that mentions a security event but does not say whether this organization is affected.",
      "A system owner reports that a vendor support account authenticated outside the normal maintenance window.",
      "A third-party service provider asks for emergency access while also acknowledging an unresolved security review."
    ],
    opening:
      "A trusted vendor notifies the organization that their remote support platform may have been compromised. The vendor previously had access to internal systems during maintenance windows.",
    variables: {
      detectionSource: ["vendor notice", "system owner escalation", "third-party advisory", "remote access log review", "procurement inquiry", "support account alert"],
      affectedAsset: ["vendor remote access account", "managed business application", "support portal", "maintenance jump host", "shared support mailbox", "vendor integration account"],
      businessImpact: ["support may be interrupted", "procurement needs contract guidance", "system owners disagree on access suspension", "leadership wants an exposure summary", "maintenance work may need to pause", "vendor dependency is not centrally documented"],
      recoveryConstraint: ["vendor impact is unconfirmed", "logs must be collected quickly", "disablement may break support", "contractual reporting questions need review", "system owners use different vendor access paths", "vendor statements need legal or procurement review"]
    },
    objectives: [
      "Validate third-party incident intake and vendor-risk escalation.",
      "Identify what access the vendor had and how quickly it can be limited.",
      "Discuss contractual, legal, and communication obligations."
    ],
    injects: [
      "The vendor's notice is vague and does not list affected customers.",
      "A remote access account used by the vendor authenticated last night.",
      "System owners disagree about whether disabling vendor access will break operations.",
      "Procurement asks whether payments or renewals should be paused.",
      "Leadership wants a summary of exposure before the vendor has completed their investigation.",
      "The vendor asks for logs from your environment to support its investigation.",
      "A second vendor sends a security advisory mentioning the same compromised tool.",
      "A system owner reports that a vendor integration account is shared across several services.",
      "Legal asks whether the vendor notice triggers contract review before any external statement.",
      "The vendor requests temporary restoration of access for urgent support work.",
      "Procurement cannot find a current list of all systems covered by the vendor agreement."
    ],
    decisions: [
      "Who is responsible for third-party incident intake and tracking?",
      "Which vendor access paths should be disabled immediately, and what breaks if they are?",
      "What contractual or regulatory reporting questions need legal review?",
      "How much vendor-provided information is enough to brief leadership?",
      "Who owns the inventory of vendor accounts, integrations, and support paths?",
      "What evidence is required before restoring vendor access for urgent work?",
      "How should vendor statements be documented without treating them as confirmed internal facts?"
    ],
    messages: [
      "From Vendor: We cannot confirm impact yet, but recommend reviewing remote access logs.",
      "From Procurement: Do we need to suspend the contract or notify the contracting officer?",
      "From System Owner: If vendor access is disabled, patching and support will stop for a critical service.",
      "From Legal: Keep the vendor notice, contract terms, and our internal findings clearly separated.",
      "From Vendor Manager: I do not have a complete list of every system this vendor supports.",
      "From Operations: We have an urgent support ticket and need to know whether temporary access is allowed."
    ]
  }
};

const phaseInjectPools = {
  ransomware: {
    Detect: [
      "A department reports many files changed within the same 20-minute window.",
      "Endpoint alerts identify several hosts with suspicious encryption-like file activity.",
      "A user forwards a screenshot showing a ransom note on a shared workstation.",
      "Help desk queue volume doubles after users report lock-screen messages and missing shared files.",
      "Backup monitoring shows an unusual failure shortly before users report unavailable documents.",
      "A remote office reports that local cached files are unavailable at the same time as headquarters reports share issues."
    ],
    Triage: [
      "An administrator reports that a maintenance account is locked out after repeated failed logins.",
      "The team cannot yet identify whether the activity started from a workstation, server, or remote access path.",
      "Two teams provide conflicting timelines for when the first symptoms appeared.",
      "Backup staff say restore points exist, but no one has validated whether they are clean.",
      "Identity logs show unusual administrative activity, but ownership of the account is unclear.",
      "A business owner reports that a critical process depends on a share not included in the first scope estimate."
    ],
    Contain: [
      "A system owner warns that disconnecting a server will interrupt a deadline-critical workflow.",
      "The network team asks whether to block a remote access path used by administrators.",
      "A department leader asks whether staff should keep working from personal devices.",
      "A remote office still has active VPN sessions to the affected shared environment.",
      "A technical lead recommends isolating a server before the business owner has approved downtime.",
      "A team member suggests disabling a maintenance account that may also be needed for recovery."
    ],
    Communicate: [
      "Staff are sharing screenshots in chat and asking whether they should unplug, reboot, or keep waiting.",
      "A partner asks whether connected services should be paused.",
      "A local reporter emails the public inbox asking whether services are offline because of a cyberattack.",
      "Communications asks for a holding statement that separates confirmed facts from assumptions.",
      "A department head wants to send their own workaround guidance before the response team approves language.",
      "Leadership asks whether to brief external stakeholders before the technical scope is complete."
    ],
    Recover: [
      "Backup staff can restore one system quickly, but the last known-good point is unclear.",
      "The backup administrator reports that the most recent backup job failed overnight.",
      "A business owner requests temporary manual processing before systems are restored.",
      "A test restore succeeds technically, but the business owner says the data may be too old.",
      "The team needs a monitoring plan before reconnecting a restored service to the normal network.",
      "A system owner asks whether evidence collection is complete enough to rebuild an affected host."
    ]
  },
  phishing: {
    Detect: [
      "A user reports that a login page looked normal but the URL seemed unusual.",
      "Email security shows similar messages delivered to several departments.",
      "A manager forwards a suspected phish after a staff member notices unexpected mailbox activity.",
      "Help desk sees a burst of calls from users asking whether a shared document email is legitimate.",
      "Identity monitoring flags sign-in behavior that does not match a user's normal pattern.",
      "A user reports approving a sign-in prompt shortly after opening the message on a phone."
    ],
    Triage: [
      "The affected user confirms they entered credentials from a mobile device.",
      "Identity logs show a successful login that does not match the user's normal pattern.",
      "The user deleted the email, so headers must be obtained another way.",
      "The team needs to separate users who received the lure from users who clicked or entered credentials.",
      "An analyst finds that the same lure reached a shared mailbox monitored by several staff members.",
      "A supervisor asks whether an unusual sign-in is enough to declare account compromise."
    ],
    Contain: [
      "Help desk asks whether to reset only confirmed users or all recipients.",
      "An analyst finds a new inbox rule moving messages to an archive folder.",
      "An identity administrator can revoke sessions, but needs approval for broad action.",
      "A mailbox review finds delegated access that was not expected by the account owner.",
      "Email administrators can quarantine the original message, but forwarded copies may remain.",
      "A high-risk user is in a live meeting and cannot immediately complete reset steps."
    ],
    Communicate: [
      "Staff begin forwarding copies of the lure to large internal lists.",
      "Communications asks for one approved staff notice instead of several competing versions.",
      "An executive assistant says locking a leadership account will disrupt active meetings.",
      "Help desk asks for separate scripts for users who received, clicked, or entered credentials.",
      "A manager wants to warn their department immediately, but the message has not been approved.",
      "An executive asks whether leadership accounts should receive different instructions."
    ],
    Recover: [
      "Security needs criteria for when to close the incident and continue monitoring.",
      "Help desk asks what script to use for users who clicked versus users who only received the message.",
      "A department head says sensitive documents were accessible from the affected account.",
      "The team needs a monitoring period for unusual mailbox, identity, or document access after reset.",
      "A business owner asks whether to review shared documents that were accessible from the account.",
      "Security asks who will verify mailbox rules, forwarding, delegated access, and app consent are clean."
    ]
  },
  insider: {
    Detect: [
      "A file access review shows export volume higher than normal for the employee's role.",
      "A peer reports unusual file handling involving sensitive records.",
      "A supervisor reports concern shortly before a scheduled exit interview.",
      "HR asks security to review recent activity without alerting the employee.",
      "A data owner notices an export that includes records from outside the employee's normal work queue.",
      "A contractor account remains active after the project sponsor thought access had ended."
    ],
    Triage: [
      "The team needs to classify the data before determining potential impact.",
      "A system owner says one business application does not log export activity in detail.",
      "HR confirms employment status is changing but asks security to coordinate before outreach.",
      "The manager can explain business need for some downloads, but not the full volume.",
      "Access logs show activity from two locations, and the team must determine whether that is expected.",
      "Data owners disagree about whether the exported records include sensitive categories."
    ],
    Contain: [
      "A manager wants immediate access to the laptop to keep work moving.",
      "Business owners ask whether access should be suspended before more evidence is preserved.",
      "IT can disable accounts quickly, but doing so may alert the employee before HR is ready.",
      "HR asks whether device collection can occur during a scheduled meeting.",
      "A system owner says disabling one account will not remove access from a shared group.",
      "Legal asks the team to preserve evidence before changing permissions or contacting witnesses."
    ],
    Communicate: [
      "Legal asks for confirmed facts, open questions, and a preserved timeline before any conclusions are written.",
      "Leadership asks whether notification may be needed.",
      "HR asks who should be included on a need-to-know basis.",
      "A manager wants to warn the team, but HR asks that details stay limited.",
      "A data owner asks for a sensitivity summary before leadership is briefed.",
      "Audit asks for a written record of who approved access changes."
    ],
    Recover: [
      "The team needs a continuity plan for the employee's active work.",
      "Data owners must confirm whether copied records require additional review.",
      "Audit asks for account disablement timestamps and evidence custody notes.",
      "The manager needs a process for transferring work without using the original device too soon.",
      "The team must decide how long to retain logs, exports, and custody notes.",
      "HR asks what follow-up control improvement should be assigned after the exercise."
    ]
  },
  ddos: {
    Detect: [
      "Monitoring alerts on rising error rates for public-facing services.",
      "The call center sees a surge in service availability complaints.",
      "Public posts report the portal is unavailable during peak use.",
      "A hosting provider reports abnormal request volume against an internet-facing service.",
      "A partner reports that automated connections to a public API are timing out.",
      "The status page remains reachable while the main portal fails intermittently."
    ],
    Triage: [
      "The team has not confirmed whether legitimate traffic is mixed with unwanted traffic.",
      "Staff cannot reach an administrative console needed to review service health.",
      "An executive asks whether the outage could be masking another incident.",
      "The provider asks for a priority list because not all services can be protected equally.",
      "Business owners provide different estimates of public impact.",
      "Monitoring shows improvement in one region while user complaints continue elsewhere."
    ],
    Contain: [
      "The hosting provider offers emergency filtering that may block some legitimate users.",
      "A business owner requests approval to publish an alternate process.",
      "A partner asks whether its connection to your system should be disabled.",
      "The network team asks who can approve emergency rate-limit changes.",
      "A business owner wants to pause a public form before the response team understands the impact.",
      "The provider can redirect traffic, but the change may affect reporting and monitoring."
    ],
    Communicate: [
      "Call center supervisors ask for a plain-language status script.",
      "Communications says silence is being interpreted publicly.",
      "A business owner wants to post a workaround on social media immediately.",
      "The public status page needs an update that avoids unconfirmed cause statements.",
      "A partner asks for a direct notice before changing its own connection behavior.",
      "Support teams are giving inconsistent explanations to callers."
    ],
    Recover: [
      "The website comes back briefly, then fails again under renewed traffic.",
      "Business owners disagree about which public service should recover first.",
      "Provider changes have stabilized traffic, but user reports continue.",
      "The team needs criteria for returning from emergency filtering to normal operations.",
      "A public deadline is approaching, and business owners need a decision on alternate intake.",
      "Monitoring is stable, but the call center continues to receive delayed complaints."
    ]
  },
  supplyChain: {
    Detect: [
      "A vendor notice lacks scope and does not list affected customers.",
      "A third-party advisory mentions a tool used in your environment.",
      "A system owner forwards a vendor security notice with no customer-specific detail.",
      "Procurement receives a vendor security notice before IT receives any technical details.",
      "Remote access logs show a vendor account used outside the expected support window.",
      "A system owner reports that a vendor support portal is unavailable during a planned maintenance window."
    ],
    Triage: [
      "A remote access account used by the vendor authenticated last night.",
      "The team needs to identify all vendor access paths across systems.",
      "System owners disagree about which services depend on the vendor.",
      "Procurement cannot confirm whether the current contract lists all supported systems.",
      "The vendor gives a broad advisory but no customer-specific impact statement.",
      "The team finds a shared support mailbox used by multiple vendor contacts."
    ],
    Contain: [
      "Disabling vendor access may disrupt support for a critical service.",
      "The vendor asks for logs from your environment to support its investigation.",
      "Procurement asks whether renewals, payments, or work orders should pause.",
      "A system owner requests an exception to keep vendor access active for urgent support.",
      "Identity staff can disable a remote access path, but another integration account may remain active.",
      "Legal asks whether logs can be shared with the vendor before review."
    ],
    Communicate: [
      "Leadership asks for an exposure summary before the vendor completes its investigation.",
      "Legal asks for contract and data-access terms before external statements are made.",
      "A second vendor sends a security advisory mentioning the same compromised tool.",
      "Procurement asks what can be said to the contracting office or vendor manager.",
      "System owners want a single decision on whether support work should pause.",
      "Communications asks whether this should be described as a vendor issue or an internal incident."
    ],
    Recover: [
      "The team needs criteria for restoring vendor access after review.",
      "System owners request a temporary support process if vendor access remains disabled.",
      "Procurement asks what evidence should be attached to the vendor-risk record.",
      "The vendor provides a remediation statement, but the team needs internal validation before restoring access.",
      "A business owner asks how long emergency support limitations can remain in place.",
      "The team must decide what vendor-risk follow-up should be tracked after the exercise."
    ]
  }
};

const initialConditionPools = {
  ransomware: [
    "The exact entry point is unknown.",
    "At least one shared service is unavailable to normal users.",
    "The team has not confirmed whether backups are usable.",
    "Some staff are still using affected devices.",
    "Business owners are asking for a recovery estimate.",
    "Remote access paths have not been ruled in or out.",
    "The organization has not agreed on which business service should recover first."
  ],
  phishing: [
    "The number of users who clicked the message is unknown.",
    "At least one user entered credentials.",
    "The team has not confirmed whether mailbox rules or session tokens were abused.",
    "The phishing message may still be in user inboxes.",
    "Managers are asking whether a broad password reset is required.",
    "Some users are forwarding the lure instead of using the reporting process.",
    "Executive or high-risk accounts may require careful scheduling without skipping evidence capture."
  ],
  insider: [
    "The employee's intent is not confirmed.",
    "Some access logs are available, but not all business applications have detailed export logs.",
    "HR, legal, and security all need to coordinate before contacting the employee.",
    "The team needs to preserve evidence before changing devices or accounts.",
    "Leadership wants to know whether notification obligations may apply.",
    "The employee's business need for the accessed data is unclear.",
    "Data owners have not confirmed sensitivity, record count, or business unit scope.",
    "Routine device reuse or log retention windows may affect evidence availability."
  ],
  ddos: [
    "The outage is visible to external users.",
    "The team has not confirmed whether the traffic surge is the only issue.",
    "Business owners disagree about which services are most critical.",
    "A provider may need approval before emergency filtering is applied.",
    "Communications staff need accurate status language.",
    "External users are affected, but internal health checks are mixed.",
    "The team has not confirmed whether the traffic surge is cause, symptom, or coincidence.",
    "Support teams are collecting user-impact reports without a confirmed root cause."
  ],
  supplyChain: [
    "The vendor notice does not yet confirm whether this organization is affected.",
    "The team needs to identify all vendor accounts and access paths.",
    "Some system owners depend on the vendor for support.",
    "Procurement and legal may need to review contract language.",
    "Leadership wants an exposure summary before the vendor completes its investigation.",
    "Vendor access may exist through more than one account, portal, mailbox, or integration.",
    "The vendor incident record has not yet been assigned a single owner.",
    "System owners need to identify business impact before access changes are made."
  ]
};

const assumptionPools = {
  ransomware: [
    "The team can identify the earliest known affected system.",
    "Backups exist and can be tested before restoration decisions.",
    "Business owners can rank critical services quickly.",
    "Containment actions can be approved during business hours.",
    "Staff will follow guidance to stop unsafe workarounds.",
    "The team can preserve enough evidence before rebuilding affected systems.",
    "Restored systems can be monitored before full return to service."
  ],
  phishing: [
    "The team can identify recipients without forwarding the lure broadly.",
    "Identity logs are available quickly enough to support decisions.",
    "Help desk can distinguish users who received, clicked, and entered credentials.",
    "Session revocation and password reset authority is clear.",
    "Staff will follow one approved phishing guidance message.",
    "Mailbox rules, forwarding, delegated access, and app consent can be reviewed consistently.",
    "High-risk account handling will not bypass normal evidence and approval records."
  ],
  insider: [
    "Relevant logs can be preserved before access or devices are changed.",
    "HR, legal, and security agree on who contacts the employee.",
    "Data owners can classify the information at issue.",
    "Need-to-know briefings can be enforced.",
    "The team can separate confirmed facts from motive or intent.",
    "The team can preserve logs before routine retention windows or device reuse.",
    "Managers can keep the review need-to-know without blocking required business decisions."
  ],
  ddos: [
    "The provider can support emergency filtering if approved.",
    "The team can distinguish service outage response from deeper incident investigation.",
    "Business owners can prioritize public services under pressure.",
    "Communications has an approved status-update path.",
    "Call center or support teams can report user impact quickly.",
    "Provider changes can be documented with approver, time, expected effect, and rollback contact.",
    "Support teams can gather user-impact reports without promising a root cause."
  ],
  supplyChain: [
    "The organization can identify all vendor access paths.",
    "The vendor can provide enough detail to support internal decisions.",
    "System owners can explain operational impact before access is disabled.",
    "Procurement and legal can review contract terms quickly.",
    "Vendor communications will be preserved in the incident record.",
    "The team can preserve vendor notices and internal decisions in one record.",
    "Temporary vendor-access exceptions can be approved, scoped, logged, and reviewed."
  ]
};

const groundRules = [
  "This is a no-fault discussion exercise, not a performance test.",
  "Do not assume perfect information; document what is known, unknown, and needed next.",
  "Use current policies and playbooks where they exist, and capture gaps where they do not.",
  "Assign an owner for every follow-up item before the exercise ends.",
  "Avoid entering real secrets, customer data, credentials, or sensitive system details into the generator."
];

const scenarioEvidenceNeeds = {
  ransomware: [
    "Initial report time, reporter, affected business function, and ticket numbers",
    "List of affected systems, users, shares, and observed symptoms",
    "Screenshots or copies of ransom notes without engaging the actor",
    "Endpoint, identity, backup, remote access, and administrative activity logs",
    "Timeline of containment actions and approval decisions",
    "Backup job status, restore test results, and restoration decision notes"
  ],
  phishing: [
    "Original message sample, headers, sender details, subject, timestamps, and recipient scope",
    "User report details: click, credential entry, MFA prompt, device used, and time",
    "Identity sign-in logs, session revocation records, and password reset timestamps",
    "Mailbox rules, forwarding, delegated access, and suspicious app consent findings",
    "List of affected accounts by confidence level: received, clicked, submitted, confirmed misuse",
    "Actions taken to remove or quarantine messages from mailboxes"
  ],
  insider: [
    "Access logs and file transfer or export records",
    "Device custody notes and account disablement timestamps",
    "HR status or employment context needed for coordinated handling",
    "Data owner classification notes and possible sensitivity review",
    "Approved communication record and need-to-know briefing list",
    "Preserved timeline of facts, assumptions, and open questions",
    "User role, access rights, group memberships, and recent role-change records",
    "Record count, business-unit scope, and data-owner sensitivity determination"
  ],
  ddos: [
    "Monitoring graphs and availability/error-rate timeline",
    "Provider tickets, recommendations, and emergency filtering approvals",
    "Call center or user-impact reports",
    "Public/status messages sent with approver and timestamp",
    "Business prioritization decisions and workaround approvals",
    "Notes on whether a parallel investigation was opened for other activity",
    "Provider change log with approver, implementation time, expected effect, and rollback contact",
    "Post-stabilization reports showing remaining affected users, regions, or business processes"
  ],
  supplyChain: [
    "Vendor notice, advisory, and follow-up communications",
    "Contract, security addendum, and relevant data-access terms",
    "List of vendor accounts, access paths, and maintenance windows",
    "Authentication logs and remote access activity",
    "System owner dependency notes and access disablement decisions",
    "Leadership briefings, procurement decisions, and legal review notes",
    "Inventory of vendor integrations, support portals, shared mailboxes, and account owners",
    "Vendor-risk record showing temporary exceptions, restoration criteria, and follow-up owners"
  ]
};

const discussionPromptBank = {
  escalation: [
    "Who has authority to declare an incident, and what facts are required first?",
    "What is the fastest way to brief leadership without overstating the known facts?"
  ],
  containment: [
    "Which action reduces risk fastest, and what business process could it disrupt?",
    "What evidence must be preserved before accounts, devices, or connections are changed?"
  ],
  communications: [
    "What can be safely communicated now, and what should wait for confirmation?",
    "Who approves internal, external, customer, partner, or public messaging?"
  ],
  recovery: [
    "What recovery option is available first, and what dependency could block it?",
    "How will the team decide when a service is safe enough to restore?"
  ],
  evidence: [
    "Which logs, screenshots, tickets, approvals, and timelines should be saved?",
    "Who owns the after-action report and the follow-up tracker?"
  ]
};

const profiles = {
  publicSector: {
    label: "Public sector office",
    summary: "a public sector office with high visibility, limited staffing, and formal reporting expectations",
    roleAdd: "Public affairs or external communications representative",
    concern: "public trust, continuity of services, and documented escalation"
  },
  healthcare: {
    label: "Healthcare support team",
    summary: "a healthcare support team balancing patient services, privacy expectations, and operational continuity",
    roleAdd: "Privacy officer or records owner",
    concern: "patient impact, privacy review, and service continuity"
  },
  finance: {
    label: "Finance or payroll team",
    summary: "a finance or payroll team responsible for sensitive records, payments, and business deadlines",
    roleAdd: "Finance process owner",
    concern: "payment integrity, sensitive records, and business deadlines"
  },
  education: {
    label: "School or university",
    summary: "an education environment with students, staff, shared devices, and uneven security maturity",
    roleAdd: "Student services or campus communications lead",
    concern: "student services, staff coordination, and broad user communication"
  },
  smallBusiness: {
    label: "Small business IT team",
    summary: "a small business IT team where one or two people handle most technical response work",
    roleAdd: "Business owner or operations manager",
    concern: "clear ownership, vendor support, and keeping essential work moving"
  }
};

const focusAdds = {
  balanced: {
    label: "Balanced readiness",
    objective: "Balance containment, communication, recovery, evidence, and leadership decision-making.",
    facilitatorNote: "Keep the discussion balanced. If one team dominates, ask what another role needs before it can act.",
    decision: "What is the next decision that cannot wait, and who owns it?"
  },
  operations: {
    label: "Containment and recovery",
    objective: "Stress the handoff between triage, containment, recovery, and business continuity.",
    facilitatorNote: "Push participants to name the exact system, owner, access path, and recovery dependency behind each action.",
    decision: "Which containment step reduces risk fastest without destroying evidence or making recovery harder?"
  },
  communications: {
    label: "Communications pressure",
    objective: "Practice internal, executive, customer, partner, and public messaging under uncertainty.",
    facilitatorNote: "Pause for message approval. Ask what can be said now, what must wait, and who signs off.",
    decision: "What message should be approved before the full technical scope is known?"
  },
  governance: {
    label: "Policy and evidence",
    objective: "Identify policy gaps, evidence needs, reporting triggers, and after-action ownership.",
    facilitatorNote: "Capture every unclear policy handoff as a finding with an owner and follow-up date.",
    decision: "What record would prove later that the team made a reasonable decision with the facts available?"
  }
};

const audienceNotes = {
  mixed: [
    "Pause after each inject and ask both technical and non-technical participants what they need from each other.",
    "Track decisions, assumptions, owners, and unanswered questions in separate columns."
  ],
  technical: [
    "Ask responders to name the exact logs, tools, and systems they would check first.",
    "Separate containment actions from evidence preservation actions before discussing recovery."
  ],
  leadership: [
    "Keep technical detail brief and focus on risk acceptance, public messaging, legal exposure, and recovery priorities.",
    "Ask leaders what information they need before authorizing major business decisions."
  ],
  compliance: [
    "Capture policy gaps, reporting triggers, evidence needs, and ownership questions as exercise findings.",
    "Avoid treating the exercise as a pass/fail audit; focus on repeatable improvement."
  ]
};

const difficultyAdds = {
  intro: {
    summary: "Introductory pace with clear clues and moderate pressure.",
    extraObjective: "Introduce core tabletop expectations for participants who may be new to incident exercises.",
    inject: "A participant asks who has authority to declare an incident."
  },
  standard: {
    summary: "Standard pace with realistic ambiguity and cross-team decisions.",
    extraObjective: "Identify unclear handoffs between technical response, business owners, and communications.",
    inject: "Two teams provide conflicting timelines for when the issue first began."
  },
  stress: {
    summary: "Stress-test pace with incomplete information, executive pressure, and public visibility.",
    extraObjective: "Test decision-making when leaders must act before every technical fact is confirmed.",
    inject: "An executive requests a go/no-go recommendation within ten minutes."
  }
};

const roleSets = {
  mixed: [
    "Facilitator: keeps time, delivers injects, and records unresolved questions.",
    "Technical responder: explains triage, containment, evidence, and recovery actions.",
    "Business owner: explains mission impact and recovery priorities.",
    "Leadership representative: approves risk decisions and major communications."
  ],
  technical: [
    "Incident commander or technical lead: coordinates response actions.",
    "Security analyst: reviews alerts, logs, suspicious accounts, and indicators.",
    "System owner: explains service dependencies and recovery options.",
    "Scribe: records evidence needs, timestamps, and task owners."
  ],
  leadership: [
    "Executive sponsor: makes risk and priority decisions.",
    "Incident lead: summarizes facts, unknowns, and recommended next actions.",
    "Communications lead: drafts internal and external messages.",
    "Legal or policy advisor: flags reporting, privacy, and contractual considerations."
  ],
  compliance: [
    "Policy owner: checks whether procedures match actual decisions.",
    "Evidence owner: records artifacts needed after the exercise.",
    "Technical representative: explains what can be verified from logs and systems.",
    "Action tracker: assigns findings to owners with target dates."
  ]
};

const aarPrompts = [
  "What decision was hardest to make with the information available?",
  "Which escalation path worked as expected, and which one was unclear?",
  "What evidence would be needed for leadership, legal, insurance, or audit review?",
  "What single improvement should be assigned an owner before the next exercise?"
];

const evidenceItems = [
  "Exercise date, duration, facilitator, and participant list",
  "Scenario type and exercise objectives",
  "Timeline of injects delivered during the meeting",
  "Major decisions and assumptions recorded during discussion",
  "Identified gaps, owners, and target follow-up dates",
  "After-action summary saved with the incident response program records",
  "Updated playbook or policy references if gaps were found"
];

const communicationsItems = [
  "Confirm who approves internal updates before they are sent.",
  "Prepare a short staff-facing status message that separates known facts from assumptions.",
  "Identify whether external partners, customers, regulators, or vendors may need updates.",
  "Decide who will monitor public inboxes, call center feedback, or social media for incident-related questions.",
  "Record the time, approver, audience, and wording of any message sent during the incident."
];

function buildRemoteFacilitationItems(groups) {
  return [
    "Use the meeting platform or shared screen for briefing, injects, and decisions; use chat for clarifying questions and links.",
    `Pause after each inject and call on ${groups.join(", ")} before moving to the next phase.`,
    "Ask each group to identify one spokesperson and one backup before the scenario starts.",
    "Keep a shared scribe view for facts, assumptions, decisions, open questions, and action items.",
    "Separate group-level impact from organization-wide decisions when participants report status."
  ];
}

function getGroupLabels() {
  const defaults = ["Group 1", "Group 2", "Group 3"];
  return [controls.groupOneInput, controls.groupTwoInput, controls.groupThreeInput].map((control, index) => {
    const value = control.value.trim();
    return value || defaults[index];
  });
}

function buildScribeCaptureItems() {
  return [
    "Facts: What is confirmed, who confirmed it, and when?",
    "Assumptions: What is being treated as true until verified?",
    "Decisions: What changed because of this inject, and who approved it?",
    "Questions: What must be answered before the next inject?",
    "Scribe: assign one owner for every open question or follow-up."
  ];
}

const scenarioFacilitatorGuidance = {
  ransomware: {
    expectedDiscussionAreas: [
      "Declare or escalate the event based on symptoms, business impact, and uncertainty.",
      "Identify containment actions, approval authority, and evidence preservation concerns before restoration.",
      "Verify backup confidence, restore testing, business-service priority, and safe return-to-service criteria.",
      "Coordinate staff guidance, executive updates, partner messaging, and public-facing language.",
      "Assign owners for business continuity, evidence capture, recovery validation, and after-action follow-up."
    ],
    watchForGaps: [
      "The team restores before naming containment assumptions and residual risk.",
      "Backups are assumed usable without a test restore or last-known-good discussion.",
      "No one owns business-service prioritization when recovery choices conflict.",
      "Staff guidance ignores unsafe workarounds such as personal devices or unapproved email.",
      "Communications language gets ahead of confirmed facts.",
      "Evidence ownership is assigned after systems are rebuilt or accounts are changed."
    ],
    evidencePrompts: [
      "What artifact would confirm the earliest known affected system, account, or share?",
      "What record shows who approved isolation, shutdown, or restoration decisions?",
      "What evidence supports confidence that a restore point is usable and safe enough to test?",
      "What timeline would leadership, legal, audit, or insurance expect after the exercise?"
    ]
  },
  phishing: {
    expectedDiscussionAreas: [
      "Define the threshold between attempted phishing, credential submission, and confirmed account compromise.",
      "Scope recipients, clicked users, credential submissions, suspicious sign-ins, and high-risk accounts.",
      "Decide when to reset passwords, revoke sessions, remove messages, and review mailbox artifacts.",
      "Coordinate help desk scripts and staff notices without spreading the lure or creating panic.",
      "Plan follow-up monitoring for identity, mailbox, delegated access, document access, and app consent activity."
    ],
    watchForGaps: [
      "All recipients are treated as equally compromised instead of tiered by evidence.",
      "Password reset is discussed, but active session revocation is missed.",
      "Mailbox rules, forwarding, delegation, or app consent review is skipped.",
      "Original message evidence is lost through forwarding, deletion, or screenshots alone.",
      "Help desk messaging creates inconsistent user advice.",
      "VIP handling bypasses normal evidence capture, approvals, or monitoring."
    ],
    evidencePrompts: [
      "What evidence separates received, clicked, submitted credentials, and confirmed misuse?",
      "What logs show whether a password reset and session revocation actually occurred?",
      "What mailbox artifacts would show forwarding, rules, delegation, or suspicious consent?",
      "What record proves staff were given a single approved reporting instruction?"
    ]
  },
  insider: {
    expectedDiscussionAreas: [
      "Coordinate HR, legal, security, and leadership before contacting the employee or changing access.",
      "Preserve logs, device custody records, and access evidence before normal business handoff actions.",
      "Classify affected data with data owners before discussing notification or disciplinary assumptions.",
      "Limit briefings to need-to-know participants while still giving leadership enough facts to decide.",
      "Assign follow-up owners for access review, policy gaps, and evidence retention.",
      "Separate policy, employment, and security questions while keeping one shared fact timeline."
    ],
    watchForGaps: [
      "The discussion jumps to motive before facts are established.",
      "Accounts or devices are changed before evidence preservation is assigned.",
      "HR, legal, and security operate from different timelines.",
      "Need-to-know controls are discussed but not owned.",
      "Data sensitivity is assumed without data owner confirmation.",
      "Participants treat suspicious timing as proof of intent.",
      "Routine business handoff needs override custody or evidence handling."
    ],
    evidencePrompts: [
      "What access or export logs prove what happened without relying on intent?",
      "What custody record is needed before a device is reused or examined?",
      "Who can classify the data involved, and where will that decision be recorded?",
      "What note distinguishes confirmed facts from employment or motive assumptions?",
      "What artifact shows the user's role, access rights, export activity, and timing?"
    ]
  },
  ddos: {
    expectedDiscussionAreas: [
      "Separate public-service outage handling from investigation of possible related activity.",
      "Decide who can approve provider filtering, rate limiting, failover, or workarounds.",
      "Prioritize public services if not everything can stay available.",
      "Coordinate call center, status page, partner, and public communications.",
      "Define stabilization and monitoring criteria before declaring recovery.",
      "Balance availability restoration, public messaging, provider coordination, and continued investigation."
    ],
    watchForGaps: [
      "Traffic filtering is approved without understanding legitimate-user impact.",
      "Public messaging begins without a single approver.",
      "The team forgets to check for a second issue hidden by the outage.",
      "Business owners disagree on service priority without an escalation path.",
      "Provider actions are not captured in the incident timeline.",
      "Participants call it a DDoS before validating application, provider, and dependency health.",
      "Workaround language is posted before ownership and support capacity are confirmed."
    ],
    evidencePrompts: [
      "What monitoring artifact shows the outage start, peak, and stabilization?",
      "What provider ticket records emergency changes and approvals?",
      "What evidence shows whether legitimate users were blocked by filtering?",
      "What record confirms who approved status messages and workarounds?",
      "What records show provider changes, approval path, user impact, and stabilization?"
    ]
  },
  supplyChain: {
    expectedDiscussionAreas: [
      "Intake vendor notices and determine who owns third-party incident tracking.",
      "Identify vendor accounts, remote access paths, systems, contracts, and business dependencies.",
      "Decide whether to limit access before the vendor confirms customer-specific impact.",
      "Coordinate procurement, legal, leadership, system owners, and vendor management.",
      "Define criteria for restoring vendor access and closing the vendor-risk record.",
      "Inventory access, decide temporary restrictions, coordinate vendor/legal/procurement, and define restoration criteria."
    ],
    watchForGaps: [
      "The team waits for perfect vendor information before taking any internal inventory.",
      "Vendor access paths are discussed only system by system, with no central owner.",
      "Operational dependency is used to avoid all containment decisions.",
      "Procurement or legal review starts after technical changes are already made.",
      "Vendor-provided statements are repeated as confirmed internal facts.",
      "The team cannot connect vendor access paths to system owners and contract records.",
      "Temporary restoration is approved without scope, expiration, monitoring, or follow-up."
    ],
    evidencePrompts: [
      "What record shows every known vendor access path and account owner?",
      "What logs would confirm whether the vendor account was used during the concern window?",
      "What contract or security addendum language should be attached to the incident record?",
      "What evidence supports restoring vendor access after review?",
      "What record connects vendor access paths, system owners, recent activity, contract terms, and access decisions?"
    ]
  }
};

const timelinePhases = ["Detect", "Triage", "Contain", "Communicate", "Recover"];

const phaseObjectives = {
  Detect: "Recognize the first report, alert, or external signal and decide whether it should enter the incident process.",
  Triage: "Separate confirmed facts from assumptions, identify affected assets, and decide who must be pulled into the response.",
  Contain: "Choose actions that reduce risk while preserving evidence and understanding business impact.",
  Communicate: "Prepare accurate internal and external messages with clear approval paths.",
  Recover: "Discuss restoration, monitoring, follow-up ownership, and evidence needed for after-action review."
};

const controls = {
  incidentType: document.querySelector("#incidentType"),
  orgProfile: document.querySelector("#orgProfile"),
  audience: document.querySelector("#audience"),
  exerciseFocus: document.querySelector("#exerciseFocus"),
  duration: document.querySelector("#duration"),
  difficulty: document.querySelector("#difficulty"),
  groupOneInput: document.querySelector("#groupOneInput"),
  groupTwoInput: document.querySelector("#groupTwoInput"),
  groupThreeInput: document.querySelector("#groupThreeInput"),
  seedInput: document.querySelector("#seedInput")
};

const output = {
  packetTitle: document.querySelector("#packetTitle"),
  packetSummary: document.querySelector("#packetSummary"),
  slideDeck: document.querySelector("#slideDeck"),
  exerciseProfile: document.querySelector("#exerciseProfile"),
  scenarioVariables: document.querySelector("#scenarioVariables"),
  scenarioBrief: document.querySelector("#scenarioBrief"),
  initialConditions: document.querySelector("#initialConditions"),
  groundRules: document.querySelector("#groundRules"),
  assumptions: document.querySelector("#assumptions"),
  objectives: document.querySelector("#objectives"),
  meetingAgenda: document.querySelector("#meetingAgenda"),
  participantRoles: document.querySelector("#participantRoles"),
  phaseObjectives: document.querySelector("#phaseObjectives"),
  timeline: document.querySelector("#timeline"),
  discussionPrompts: document.querySelector("#discussionPrompts"),
  expectedDiscussionAreas: document.querySelector("#expectedDiscussionAreas"),
  exerciseWorksheet: document.querySelector("#exerciseWorksheet"),
  decisionPoints: document.querySelector("#decisionPoints"),
  stakeholderMessages: document.querySelector("#stakeholderMessages"),
  communicationsChecklist: document.querySelector("#communicationsChecklist"),
  watchForGaps: document.querySelector("#watchForGaps"),
  facilitatorNotes: document.querySelector("#facilitatorNotes"),
  aarPrompts: document.querySelector("#aarPrompts"),
  evidencePrompts: document.querySelector("#evidencePrompts"),
  evidenceChecklist: document.querySelector("#evidenceChecklist"),
  actionTracker: document.querySelector("#actionTracker")
};

function makeSeed() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function makeDailySeed() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function seededRandom(seed) {
  let value = Number(seed) || 1;
  return function random() {
    value |= 0;
    value = (value + 0x6d2b79f5) | 0;
    let next = Math.imul(value ^ (value >>> 15), 1 | value);
    next ^= next + Math.imul(next ^ (next >>> 7), 61 | next);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(items, random) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function renderList(element, items) {
  element.replaceChildren(
    ...items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    })
  );
}

function renderProfile(items) {
  output.exerciseProfile.replaceChildren(
    ...items.flatMap(([term, detail]) => {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = term;
      dd.textContent = detail;
      return [dt, dd];
    })
  );
}

function pickFromPool(pool, random) {
  return pool[Math.floor(random() * pool.length)];
}

function renderActionTracker(items) {
  output.actionTracker.replaceChildren(
    ...items.map((item) => {
      const tr = document.createElement("tr");
      ["item", "owner", "due", "status"].forEach((key) => {
        const td = document.createElement("td");
        td.textContent = item[key];
        tr.append(td);
      });
      return tr;
    })
  );
}

function buildAgenda(duration) {
  const minutes = Number(duration);
  if (minutes === 30) {
    return [
      "5 min - Read scenario and confirm exercise ground rules.",
      "15 min - Deliver injects and discuss decisions.",
      "5 min - Identify gaps, owners, and evidence needs.",
      "5 min - Confirm after-action follow-up."
    ];
  }

  if (minutes === 90) {
    return [
      "10 min - Introductions, scope, assumptions, and exercise rules.",
      "15 min - Initial detection and escalation discussion.",
      "35 min - Timed injects, role discussion, and decision capture.",
      "15 min - Recovery, communications, and evidence review.",
      "15 min - After-action findings, owners, and target dates."
    ];
  }

  return [
    "5 min - Introductions, scenario setup, and exercise rules.",
    "10 min - Initial triage and escalation discussion.",
    "30 min - Timed injects and facilitated decision discussion.",
    "10 min - Evidence, communications, and recovery review.",
    "5 min - After-action findings and owner assignment."
  ];
}

function buildDiscussionPrompts(focus) {
  return [
    ...discussionPromptBank.escalation,
    discussionPromptBank.containment[0],
    discussionPromptBank.communications[0],
    discussionPromptBank.recovery[0],
    discussionPromptBank.evidence[0],
    focus.decision
  ];
}

function buildActionTracker(scenario, focus) {
  return [
    {
      item: "Confirm incident declaration and escalation criteria",
      owner: "Incident lead",
      due: "Before next exercise",
      status: "Open"
    },
    {
      item: `Review ${scenario.label.toLowerCase()} playbook gaps found during discussion`,
      owner: "Security owner",
      due: "30 days",
      status: "Open"
    },
    {
      item: `Update evidence checklist for ${focus.label.toLowerCase()} scenarios`,
      owner: "Compliance or scribe",
      due: "30 days",
      status: "Open"
    },
    {
      item: "Schedule follow-up review with assigned owners",
      owner: "Facilitator",
      due: "14 days",
      status: "Open"
    }
  ];
}

function buildExerciseWorksheet(facts, assumptions, decisions, guidance) {
  const openQuestions = [
    guidance.evidencePrompts[0],
    guidance.evidencePrompts[1],
    "What information is needed before the next major decision?",
    "Who owns the next update to leadership, business owners, or support teams?"
  ];

  return [0, 1, 2, 3].map((index) => ({
    fact: facts[index] || "Record new confirmed fact.",
    assumption: assumptions[index] || "Record assumption to validate.",
    decision: decisions[index] || "Record decision and approver.",
    question: openQuestions[index] || "Record open question and owner."
  }));
}

function buildScenarioVariables(scenario, random) {
  return [
    ["Detection source", pickFromPool(scenario.variables.detectionSource, random)],
    ["Affected asset", pickFromPool(scenario.variables.affectedAsset, random)],
    ["Business impact", pickFromPool(scenario.variables.businessImpact, random)],
    ["Recovery constraint", pickFromPool(scenario.variables.recoveryConstraint, random)]
  ];
}

function buildTimeline(scenario, difficulty, duration, random) {
  const minutes = Number(duration);
  const interval = minutes === 30 ? 6 : minutes === 60 ? 10 : 15;
  const pools = phaseInjectPools[controls.incidentType.value];
  const selectedInjects = timelinePhases.map((phase) => {
    const phasePool = pools?.[phase] || scenario.injects;
    return pickFromPool(phasePool, random);
  });

  if (difficulty === "stress") {
    selectedInjects[3] = difficultyAdds[difficulty].inject;
  } else if (difficulty === "intro") {
    selectedInjects[1] = difficultyAdds[difficulty].inject;
  }

  return selectedInjects.map((inject, index) => ({
    phase: timelinePhases[index] || "Review",
    time: `T+${String((index + 1) * interval).padStart(2, "0")} min`,
    text: inject
  }));
}

function renderExerciseWorksheet(rows) {
  output.exerciseWorksheet.replaceChildren(
    ...rows.map((row) => {
      const tr = document.createElement("tr");
      ["fact", "assumption", "decision", "question"].forEach((key) => {
        const td = document.createElement("td");
        td.textContent = row[key];
        tr.append(td);
      });
      return tr;
    })
  );
}

function renderTimeline(items) {
  output.timeline.replaceChildren(
    ...items.map((item) => {
      const li = document.createElement("li");
      const meta = document.createElement("div");
      const phase = document.createElement("strong");
      const time = document.createElement("em");
      const text = document.createElement("span");
      meta.className = "timeline-meta";
      phase.textContent = item.phase;
      time.textContent = item.time;
      text.textContent = item.text;
      meta.append(phase, time);
      li.append(meta, text);
      return li;
    })
  );
}

function listText(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function tableText(rows) {
  return rows
    .map((item) => `- ${item.item}\n  Owner: ${item.owner}\n  Due: ${item.due}\n  Status / Notes: ${item.status}`)
    .join("\n");
}

function worksheetText() {
  return [...output.exerciseWorksheet.querySelectorAll("tr")]
    .map((row, index) => {
      const [fact, assumption, decision, question] = [...row.querySelectorAll("td")].map((cell) => cell.textContent);
      return [
        `### Row ${index + 1}`,
        `- Known fact: ${fact}`,
        `- Assumption: ${assumption}`,
        `- Decision: ${decision}`,
        `- Open question: ${question}`
      ].join("\n");
    })
    .join("\n\n");
}

function makeSlide(eyebrow, title, body = [], items = []) {
  const section = document.createElement("section");
  const label = document.createElement("p");
  const heading = document.createElement("h2");
  section.className = "slide";
  label.className = "slide-kicker";
  label.textContent = eyebrow;
  heading.textContent = title;
  section.append(label, heading);

  body.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    section.append(paragraph);
  });

  if (items.length > 0) {
    const list = document.createElement("ul");
    items.forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      list.append(item);
    });
    section.append(list);
  }

  return section;
}

function buildSlideData(timeline, decisions) {
  const groups = getGroupLabels();
  const profileLines = [...output.exerciseProfile.querySelectorAll("dt")].map((term) => {
    const detail = term.nextElementSibling?.textContent || "";
    return `${term.textContent}: ${detail}`;
  });
  const factItems = getListItems(output.initialConditions);
  const objectiveItems = getListItems(output.objectives);

  return [
    {
      eyebrow: "Exercise deck",
      title: output.packetTitle.textContent,
      body: [output.packetSummary.textContent],
      items: profileLines.slice(0, 8)
    },
    {
      eyebrow: "Remote / hybrid facilitation",
      title: "Remote Facilitation Ground Rules",
      body: ["Use this deck to pace the exercise when participants are not all in the same room."],
      items: buildRemoteFacilitationItems(groups)
    },
    {
      eyebrow: "Remote / hybrid facilitation",
      title: "Group Check-In",
      body: ["Confirm each group is ready before revealing the scenario."],
      items: [
        ...groups.map((group) => `${group}: spokesperson, backup, and local notes owner confirmed.`),
        "Facilitator: confirm recording, chat use, and shared notes expectations."
      ]
    },
    {
      eyebrow: "Participant briefing",
      title: "Scenario Brief",
      body: [output.scenarioBrief.textContent],
      items: []
    },
    {
      eyebrow: "Participant briefing",
      title: "Initial Conditions",
      body: [],
      items: factItems
    },
    {
      eyebrow: "Participant briefing",
      title: "Objectives",
      body: [],
      items: objectiveItems
    },
    {
      eyebrow: "Exercise flow",
      title: "Inject Timeline Overview",
      body: [],
      items: timeline.map((item) => `${item.time} - ${item.phase}: ${item.text}`)
    },
    ...timeline.map((item) => ({
      eyebrow: `${item.time} / ${item.phase}`,
      title: `${item.phase} Inject`,
      body: [item.text],
      items: [
        ...groups.map((group) => `${group}: What do you know, need, or recommend?`),
        "Scribe: capture facts, assumptions, decisions, and open questions."
      ]
    })),
    {
      eyebrow: "Facilitated discussion",
      title: "Key Decisions",
      body: [],
      items: decisions
    },
    {
      eyebrow: "Scribe capture",
      title: "Facts, Assumptions, Decisions, Questions",
      body: ["Pause here to normalize the shared notes before the next decision point."],
      items: buildScribeCaptureItems()
    },
    {
      eyebrow: "Closeout",
      title: "Group Lessons Learned",
      body: ["Capture one practical improvement from each group before ending the exercise."],
      items: [
        ...groups.map((group) => `${group}: strongest response step, biggest gap, assigned follow-up.`),
        "Facilitator: confirm owners, due dates, and where the after-action notes will live."
      ]
    }
  ];
}

function renderSlideDeck(timeline, decisions) {
  const slides = buildSlideData(timeline, decisions);
  output.slideDeck.replaceChildren(
    ...slides.map((slide) => makeSlide(slide.eyebrow, slide.title, slide.body, slide.items))
  );
}

function getRenderedTimelineItems() {
  return [...output.timeline.querySelectorAll("li")].map((li) => ({
    phase: li.querySelector("strong").textContent,
    time: li.querySelector("em").textContent,
    text: li.querySelector("span").textContent
  }));
}

function slideOutlineText() {
  return buildSlideData(getRenderedTimelineItems(), getListItems(output.decisionPoints))
    .map((slide, index) => {
      const body = slide.body.length ? `\n\n${slide.body.join("\n\n")}` : "";
      const items = slide.items.length ? `\n\n${listText(slide.items)}` : "";
      return `## Slide ${index + 1}: ${slide.title}\n${slide.eyebrow}${body}${items}`;
    })
    .join("\n\n")
    .trim();
}

function getListItems(element) {
  return [...element.querySelectorAll("li")].map((li) => li.textContent);
}

function getTimelineText() {
  return [...output.timeline.querySelectorAll("li")]
    .map((li) => {
      const phase = li.querySelector("strong").textContent;
      const time = li.querySelector("em").textContent;
      return `- ${time} (${phase}): ${li.querySelector("span").textContent}`;
    })
    .join("\n");
}

function getState() {
  return {
    type: controls.incidentType.value,
    org: controls.orgProfile.value,
    audience: controls.audience.value,
    focus: controls.exerciseFocus.value,
    duration: controls.duration.value,
    difficulty: controls.difficulty.value,
    g1: controls.groupOneInput.value.trim() || "Group 1",
    g2: controls.groupTwoInput.value.trim() || "Group 2",
    g3: controls.groupThreeInput.value.trim() || "Group 3",
    seed: controls.seedInput.value
  };
}

function applyStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const mappings = {
    type: controls.incidentType,
    org: controls.orgProfile,
    audience: controls.audience,
    focus: controls.exerciseFocus,
    duration: controls.duration,
    difficulty: controls.difficulty
  };

  Object.entries(mappings).forEach(([key, control]) => {
    const value = params.get(key);
    if (value && [...control.options].some((option) => option.value === value)) {
      control.value = value;
    }
  });

  controls.seedInput.value = params.get("seed") || makeSeed();
  controls.groupOneInput.value = params.get("g1") || "Group 1";
  controls.groupTwoInput.value = params.get("g2") || "Group 2";
  controls.groupThreeInput.value = params.get("g3") || "Group 3";

  clearPrintMode();
  if (params.get("printView") === "participant") {
    document.body.classList.add("print-participant-only");
  } else if (params.get("printView") === "facilitator") {
    document.body.classList.add("print-facilitator-only");
  } else if (params.get("printView") === "slides") {
    document.body.classList.add("print-slide-deck");
  }
}

function updateUrlState() {
  const state = getState();
  const params = new URLSearchParams(state);
  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, "", nextUrl);
}

function generatePacket() {
  const scenario = scenarios[controls.incidentType.value];
  const profile = profiles[controls.orgProfile.value];
  const focus = focusAdds[controls.exerciseFocus.value];
  const difficulty = controls.difficulty.value;
  const random = seededRandom(controls.seedInput.value);
  const opening = pickFromPool(scenario.openings || [scenario.opening], random);
  const scenarioVariables = buildScenarioVariables(scenario, random);
  const guidance = scenarioFacilitatorGuidance[controls.incidentType.value];
  const timeline = buildTimeline(scenario, difficulty, controls.duration.value, random);
  const durationText = `${controls.duration.value}-minute`;
  const selectedDecisions = shuffle([...scenario.decisions, focus.decision], random).slice(0, 4);
  const selectedMessages = shuffle(scenario.messages, random).slice(0, 3);
  const selectedFacts = shuffle(initialConditionPools[controls.incidentType.value], random).slice(0, 4);
  const selectedAssumptions = shuffle(assumptionPools[controls.incidentType.value], random).slice(0, 4);
  const generatedDate = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  output.packetTitle.textContent = `${scenario.label} Tabletop`;
  output.packetSummary.textContent = `${durationText} ${difficultyAdds[difficulty].summary} Focus: ${focus.label}. Designed for ${profile.summary}.`;
  output.scenarioBrief.textContent = `${opening} The exercise is intended for ${profile.summary}. Participants should discuss what they would do, who owns each decision, what evidence they need, and when the situation should be escalated. Pay special attention to ${profile.concern}.`;

  renderProfile([
    ["Incident type", scenario.label],
    ["Organization profile", profile.label],
    ["Audience", controls.audience.options[controls.audience.selectedIndex].text],
    ["Exercise focus", focus.label],
    ["Duration", `${controls.duration.value} minutes`],
    ["Difficulty", controls.difficulty.options[controls.difficulty.selectedIndex].text],
    ["Seed", controls.seedInput.value],
    ["Generated", generatedDate],
    ["Facilitator", "To be assigned"],
    ["Scribe", "To be assigned"]
  ]);
  renderProfileForElement(output.scenarioVariables, scenarioVariables);
  renderList(output.initialConditions, selectedFacts);
  renderList(output.groundRules, groundRules);
  renderList(output.assumptions, selectedAssumptions);
  renderList(output.objectives, [
    ...scenario.objectives,
    difficultyAdds[difficulty].extraObjective,
    focus.objective
  ]);
  renderList(output.meetingAgenda, buildAgenda(controls.duration.value));
  renderList(output.participantRoles, [...roleSets[controls.audience.value], profile.roleAdd]);
  renderList(
    output.phaseObjectives,
    timelinePhases.map((phase) => `${phase}: ${phaseObjectives[phase]}`)
  );
  renderTimeline(timeline);
  renderList(output.discussionPrompts, buildDiscussionPrompts(focus));
  renderList(output.expectedDiscussionAreas, guidance.expectedDiscussionAreas);
  renderExerciseWorksheet(buildExerciseWorksheet(selectedFacts, selectedAssumptions, selectedDecisions, guidance));
  renderList(output.decisionPoints, selectedDecisions);
  renderList(output.stakeholderMessages, selectedMessages);
  renderList(output.communicationsChecklist, communicationsItems);
  renderList(output.watchForGaps, guidance.watchForGaps);
  renderList(output.facilitatorNotes, [...audienceNotes[controls.audience.value], focus.facilitatorNote]);
  renderList(output.aarPrompts, aarPrompts);
  renderList(output.evidencePrompts, guidance.evidencePrompts);
  renderList(output.evidenceChecklist, [...scenarioEvidenceNeeds[controls.incidentType.value], ...evidenceItems.slice(0, 4)]);
  renderActionTracker(buildActionTracker(scenario, focus));
  renderSlideDeck(timeline, selectedDecisions);
  updateUrlState();
}

function renderProfileForElement(element, items) {
  element.replaceChildren(
    ...items.flatMap(([term, detail]) => {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = term;
      dd.textContent = detail;
      return [dt, dd];
    })
  );
}

function useNoteText() {
  return "This packet is for educational tabletop exercise planning. Customize it to local policies, systems, roles, and reporting requirements before use. It is not legal, compliance, or incident response advice.";
}

function participantHandoutText() {
  const profile = profiles[controls.orgProfile.value];
  const sections = [
    `# ${output.packetTitle.textContent} - Participant Handout`,
    output.packetSummary.textContent,
    "## Exercise Profile",
    output.exerciseProfile.innerText,
    "## Use Note",
    useNoteText(),
    "## Scenario Brief",
    output.scenarioBrief.textContent,
    "## Initial Conditions",
    listText(getListItems(output.initialConditions)),
    "## Ground Rules",
    listText(getListItems(output.groundRules)),
    "## Assumptions to Validate",
    listText(getListItems(output.assumptions)),
    "## Exercise Objectives",
    listText(getListItems(output.objectives)),
    "## Meeting Agenda",
    listText(getListItems(output.meetingAgenda)),
    "## Participant Roles",
    listText(getListItems(output.participantRoles)),
    `\nGenerated by IR Tabletop Generator prototype for ${profile.label}.`
  ];

  return sections.join("\n\n").replace(/\n{3,}/g, "\n\n").trim();
}

function facilitatorGuideText() {
  const scenario = scenarios[controls.incidentType.value];
  const focus = focusAdds[controls.exerciseFocus.value];
  const profile = profiles[controls.orgProfile.value];
  const actionItems = buildActionTracker(scenario, focus);
  const sections = [
    `# ${output.packetTitle.textContent} - Facilitator Guide`,
    output.packetSummary.textContent,
    "## Exercise Profile",
    output.exerciseProfile.innerText,
    "## Use Note",
    useNoteText(),
    "## Participant Handout Reference",
    "Use this snapshot to keep the facilitator guide readable on its own. The participant handout should still receive the clean participant-only version.",
    "### Scenario Brief",
    output.scenarioBrief.textContent,
    "### Initial Conditions",
    listText(getListItems(output.initialConditions)),
    "### Exercise Objectives",
    listText(getListItems(output.objectives)),
    "### Participant Roles",
    listText(getListItems(output.participantRoles)),
    "## Scenario Variables",
    output.scenarioVariables.innerText,
    "## Phase Objectives",
    listText(getListItems(output.phaseObjectives)),
    "## Inject Timeline",
    getTimelineText(),
    "## Discussion Prompts",
    listText(getListItems(output.discussionPrompts)),
    "## Expected Discussion Areas",
    listText(getListItems(output.expectedDiscussionAreas)),
    "## Facts, Assumptions, Decisions, Questions",
    worksheetText(),
    "## Key Decision Points",
    listText(getListItems(output.decisionPoints)),
    "## Stakeholder Messages",
    listText(getListItems(output.stakeholderMessages)),
    "## Communications Checklist",
    listText(getListItems(output.communicationsChecklist)),
    "## Watch For Gaps",
    listText(getListItems(output.watchForGaps)),
    "## Facilitator Notes",
    listText(getListItems(output.facilitatorNotes)),
    "## After-Action Prompts",
    listText(getListItems(output.aarPrompts)),
    "## Evidence Prompts",
    listText(getListItems(output.evidencePrompts)),
    "## Evidence Checklist",
    listText(getListItems(output.evidenceChecklist)),
    "## Decision and Action Tracker",
    tableText(actionItems),
    `\nGenerated by IR Tabletop Generator prototype for ${profile.label}.`
  ];

  return sections.join("\n\n").replace(/\n{3,}/g, "\n\n").trim();
}

function packetText() {
  return [
    participantHandoutText(),
    "\n---\n",
    facilitatorGuideText()
  ].join("\n\n").replace(/\n{3,}/g, "\n\n").trim();
}

async function copyText(text, button, resetText) {
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = resetText;
    }, 1400);
  } catch {
    window.alert("Copy failed. You can select the generated text or URL manually.");
  }
}

function copyPacket() {
  copyText(packetText(), document.querySelector("#copyBtn"), "Copy packet");
}

function copyScenarioLink() {
  updateUrlState();
  copyText(window.location.href, document.querySelector("#copyLinkBtn"), "Copy scenario link");
}

function copySlideOutline() {
  copyText(slideOutlineText(), document.querySelector("#copySlidesBtn"), "Copy slide outline");
}

function safeFilename(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function downloadMarkdown(filename, text) {
  const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadPacket() {
  const scenario = scenarios[controls.incidentType.value];
  const filename = `${safeFilename(scenario.label)}-${controls.seedInput.value}.md`;
  downloadMarkdown(filename, packetText());
}

function downloadParticipantHandout() {
  const scenario = scenarios[controls.incidentType.value];
  const filename = `${safeFilename(scenario.label)}-participant-handout-${controls.seedInput.value}.md`;
  downloadMarkdown(filename, participantHandoutText());
}

function downloadFacilitatorGuide() {
  const scenario = scenarios[controls.incidentType.value];
  const filename = `${safeFilename(scenario.label)}-facilitator-guide-${controls.seedInput.value}.md`;
  downloadMarkdown(filename, facilitatorGuideText());
}

function clearPrintMode() {
  document.body.classList.remove("print-participant-only", "print-facilitator-only", "print-slide-deck");
}

function printMode(mode) {
  clearPrintMode();
  if (mode === "participant") {
    document.body.classList.add("print-participant-only");
  } else if (mode === "facilitator") {
    document.body.classList.add("print-facilitator-only");
  } else if (mode === "slides") {
    document.body.classList.add("print-slide-deck");
  }
  window.print();
  window.setTimeout(clearPrintMode, 800);
}

document.querySelector("#generateBtn").addEventListener("click", generatePacket);
document.querySelector("#seedBtn").addEventListener("click", () => {
  controls.seedInput.value = makeSeed();
  generatePacket();
});
document.querySelector("#dailyBtn").addEventListener("click", () => {
  controls.seedInput.value = makeDailySeed();
  generatePacket();
  document.querySelector("#packet").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#printBtn").addEventListener("click", () => printMode("full"));
document.querySelector("#printParticipantBtn").addEventListener("click", () => printMode("participant"));
document.querySelector("#printFacilitatorBtn").addEventListener("click", () => printMode("facilitator"));
document.querySelector("#printSlidesBtn").addEventListener("click", () => printMode("slides"));
document.querySelector("#copyBtn").addEventListener("click", copyPacket);
document.querySelector("#copySlidesBtn").addEventListener("click", copySlideOutline);
document.querySelector("#copyLinkBtn").addEventListener("click", copyScenarioLink);
document.querySelector("#downloadBtn").addEventListener("click", downloadPacket);
document.querySelector("#downloadParticipantBtn").addEventListener("click", downloadParticipantHandout);
document.querySelector("#downloadFacilitatorBtn").addEventListener("click", downloadFacilitatorGuide);
document.querySelector("#viewPacketBtn").addEventListener("click", () => {
  document.querySelector("#packet").scrollIntoView({ behavior: "smooth", block: "start" });
});

Object.values(controls).forEach((control) => {
  control.addEventListener("change", generatePacket);
});

window.addEventListener("afterprint", clearPrintMode);

applyStateFromUrl();
generatePacket();
