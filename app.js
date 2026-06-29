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
      detectionSource: ["help desk ticket spike", "endpoint alert", "file-share monitoring alert", "user screenshot", "backup job anomaly", "department lead escalation"],
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
      "A service owner asks to restore a service before containment assumptions are confirmed.",
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
      businessImpact: ["call volume is rising", "public trust is affected", "service leads need a workaround", "partners are asking whether to disconnect", "a public deadline may be missed", "support staff need a script"],
      recoveryConstraint: ["provider filtering may block legitimate users", "the team has not ruled out a second incident", "service priority is disputed", "status messaging needs approval", "alternate processes need business approval", "provider changes require a named approver"]
    },
    objectives: [
      "Exercise outage triage across IT, communications, and service leads.",
      "Review when to engage hosting, internet service, or DDoS protection providers.",
      "Practice public messaging during a service availability incident."
    ],
    injects: [
      "Monitoring shows traffic spikes from multiple regions.",
      "The call center reports a surge in complaints about unavailable services.",
      "An operations lead asks to post a workaround on social media immediately.",
      "The hosting provider requests approval to apply stricter traffic filtering.",
      "An executive asks whether this is a distraction from another attack.",
      "The website comes back briefly, then fails again under renewed traffic.",
      "A partner organization asks whether its connection to your system should be disabled.",
      "A program lead asks whether the public deadline can be extended or handled manually.",
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
      "From Operations Lead: If the portal stays down, we need an approved alternate intake process.",
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
      "A department lead reports that a critical process depends on a share not included in the first scope estimate."
    ],
    Contain: [
      "A system owner warns that disconnecting a server will interrupt a deadline-critical workflow.",
      "The network team asks whether to block a remote access path used by administrators.",
      "A department leader asks whether staff should keep working from personal devices.",
      "A remote office still has active VPN sessions to the affected shared environment.",
      "A technical lead recommends isolating a server before the service owner has approved downtime.",
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
      "An operations lead requests temporary manual processing before systems are restored.",
      "A test restore succeeds technically, but the service owner says the data may be too old.",
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
      "A product lead asks whether to review shared documents that were accessible from the account.",
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
      "Department leads ask whether access should be suspended before more evidence is preserved.",
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
      "Service leads provide different estimates of public impact.",
      "Monitoring shows improvement in one region while user complaints continue elsewhere."
    ],
    Contain: [
      "The hosting provider offers emergency filtering that may block some legitimate users.",
      "An operations lead requests approval to publish an alternate process.",
      "A partner asks whether its connection to your system should be disabled.",
      "The network team asks who can approve emergency rate-limit changes.",
      "A service owner wants to pause a public form before the response team understands the impact.",
      "The provider can redirect traffic, but the change may affect reporting and monitoring."
    ],
    Communicate: [
      "Call center supervisors ask for a plain-language status script.",
      "Communications says silence is being interpreted publicly.",
      "An operations lead wants to post a workaround on social media immediately.",
      "The public status page needs an update that avoids unconfirmed cause statements.",
      "A partner asks for a direct notice before changing its own connection behavior.",
      "Support teams are giving inconsistent explanations to callers."
    ],
    Recover: [
      "The website comes back briefly, then fails again under renewed traffic.",
      "Service leads disagree about which public service should recover first.",
      "Provider changes have stabilized traffic, but user reports continue.",
      "The team needs criteria for returning from emergency filtering to normal operations.",
      "A public deadline is approaching, and service leads need a decision on alternate intake.",
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
      "A service owner asks how long emergency support limitations can remain in place.",
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
    "Department leads are asking for a recovery estimate.",
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
    "Service leads disagree about which services are most critical.",
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
    "Service leads can rank critical services quickly.",
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
    "Service leads can prioritize public services under pressure.",
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
    roleAdd: "Operations lead or service owner",
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
    extraObjective: "Identify unclear handoffs between technical response, service leads, and communications.",
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
    "Service owner: explains mission impact and recovery priorities.",
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
  if (groups.length === 1) {
    return [
      "Use the meeting platform or shared screen for briefing, injects, and decisions; use chat for clarifying questions and links.",
      `Pause after each inject and call on ${groups[0]} before moving to the next phase.`,
      "Identify one spokesperson, one backup, and one notes owner before the scenario starts.",
      "Keep a shared scribe view for facts, assumptions, decisions, open questions, and action items.",
      "Separate local impact from organization-wide decisions when participants report status."
    ];
  }

  return [
    "Use the meeting platform or shared screen for briefing, injects, and decisions; use chat for clarifying questions and links.",
    `Pause after each inject and call on ${groups.join(", ")} before moving to the next phase.`,
    "Ask each group or site to identify one spokesperson and one backup before the scenario starts.",
    "Keep a shared scribe view for facts, assumptions, decisions, open questions, and action items.",
    "Separate group-level impact from organization-wide decisions when participants report status."
  ];
}

function getGroupLabels() {
  const mode = controls.groupMode.value;
  const count = mode === "three" ? 3 : mode === "two" ? 2 : 1;
  const defaults = count === 1 ? ["Whole team"] : ["Group 1", "Group 2", "Group 3"];
  return [controls.groupOneInput, controls.groupTwoInput, controls.groupThreeInput]
    .slice(0, count)
    .map((control, index) => {
      const value = control.value.trim();
      return value || defaults[index];
    });
}

function updateGroupModeFields() {
  const mode = controls.groupMode.value;
  const count = mode === "three" ? 3 : mode === "two" ? 2 : 1;
  if (count === 1 && controls.groupOneInput.value.trim() === "Group 1") {
    controls.groupOneInput.value = "Whole team";
  } else if (count > 1 && controls.groupOneInput.value.trim() === "Whole team") {
    controls.groupOneInput.value = "Group 1";
  }

  [controls.groupOneInput, controls.groupTwoInput, controls.groupThreeInput].forEach((control, index) => {
    const isActive = index < count;
    control.hidden = !isActive;
    control.disabled = !isActive;
  });
  controls.groupOneInput.setAttribute("aria-label", count === 1 ? "Team label" : "Presentation group 1");
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
      "Service leads disagree on service priority without an escalation path.",
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
  groupMode: document.querySelector("#groupMode"),
  groupOneInput: document.querySelector("#groupOneInput"),
  groupTwoInput: document.querySelector("#groupTwoInput"),
  groupThreeInput: document.querySelector("#groupThreeInput"),
  seedInput: document.querySelector("#seedInput"),
  interactiveScenario: document.querySelector("#interactiveScenario")
};


const ui = {
  modeButtons: document.querySelectorAll("[data-mode-target]"),
  formatNeed: document.querySelector("#formatNeed"),
  recommendFormatBtn: document.querySelector("#recommendFormatBtn"),
  formatAdvice: document.querySelector("#formatAdvice"),
  demoRunBtn: document.querySelector("#demoRunBtn"),
  copyDemoBtn: document.querySelector("#copyDemoBtn"),
  copyRansomwareSampleBtn: document.querySelector("#copyRansomwareSampleBtn"),
  helpButtons: document.querySelectorAll(".help-button"),
  fieldHelp: document.querySelector("#fieldHelp"),
  fieldHelpTitle: document.querySelector("#fieldHelpTitle"),
  fieldHelpText: document.querySelector("#fieldHelpText"),
  fieldHelpClose: document.querySelector("#fieldHelpClose")
};

const output = {
  packetTitle: document.querySelector("#packetTitle"),
  packetSummary: document.querySelector("#packetSummary"),
  slideDeck: document.querySelector("#slideDeck"),
  blankWorksheet: document.querySelector("#blankWorksheet"),
  blankWorksheetTitle: document.querySelector("#blankWorksheetTitle"),
  blankWorksheetSummary: document.querySelector("#blankWorksheetSummary"),
  blankFadqRows: document.querySelector("#blankFadqRows"),
  blankActionRows: document.querySelector("#blankActionRows"),
  presentationStage: document.querySelector("#presentationStage"),
  presentationSlide: document.querySelector("#presentationSlide"),
  presentationCounter: document.querySelector("#presentationCounter"),
  presentationNotes: document.querySelector("#presentationNotes"),
  presentationNotesTitle: document.querySelector("#presentationNotesTitle"),
  presentationNotesList: document.querySelector("#presentationNotesList"),
  exerciseProfile: document.querySelector("#exerciseProfile"),
  interactiveMeters: document.querySelector("#interactiveMeters"),
  interactiveTitle: document.querySelector("#interactiveTitle"),
  interactivePhase: document.querySelector("#interactivePhase"),
  interactiveInjectTitle: document.querySelector("#interactiveInjectTitle"),
  interactiveInjectText: document.querySelector("#interactiveInjectText"),
  interactiveContext: document.querySelector("#interactiveContext"),
  interactiveScenarioSummary: document.querySelector("#interactiveScenarioSummary"),
  runbookStatus: document.querySelector("#runbookStatus"),
  runbookScenario: document.querySelector("#runbookScenario"),
  runbookPreBrief: document.querySelector("#runbookPreBrief"),
  runbookConsole: document.querySelector("#runbookConsole"),
  runbookAar: document.querySelector("#runbookAar"),
  interactiveChoices: document.querySelector("#interactiveChoices"),
  interactiveDebrief: document.querySelector("#interactiveDebrief"),
  interactiveDebriefTitle: document.querySelector("#interactiveDebriefTitle"),
  interactiveDebriefBody: document.querySelector("#interactiveDebriefBody"),
  copyInteractiveDebriefBtn: document.querySelector("#copyInteractiveDebriefBtn"),
  copyAarSummaryBtn: document.querySelector("#copyAarSummaryBtn"),
  interactiveTimer: document.querySelector("#interactiveTimer"),
  interactiveTimerStatus: document.querySelector("#interactiveTimerStatus"),
  interactiveFacilitatorNotes: document.querySelector("#interactiveFacilitatorNotes"),
  interactiveFacilitatorNotesList: document.querySelector("#interactiveFacilitatorNotesList"),
  toggleFacilitatorNotesBtn: document.querySelector("#toggleFacilitatorNotesBtn"),
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

let presentationIndex = 0;
let pendingPresentationIndex = null;
let presentationAudience = "facilitator";
let presentationNotesVisible = true;
let currentSlideData = [];
let interactiveTimerRemaining = 0;
let interactiveTimerRunning = false;
let interactiveTimerInterval = null;
let interactiveFacilitatorNotesVisible = false;

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


const interactiveMeters = {
  containment: { label: "Containment", value: 50 },
  evidence: { label: "Evidence quality", value: 50 },
  continuity: { label: "Business continuity", value: 50 },
  trust: { label: "Stakeholder trust", value: 50 },
  coordination: { label: "Team coordination", value: 50 }
};

const interactiveScenarios = {
  phishing: {
    title: "Microsoft 365 Phishing Decision Rehearsal",
    context:
      "Small hybrid software company, Microsoft 365 Commercial heavy, customer demos in motion, and a 60-minute tabletop window with President-led executive briefings.",
    meters: {
      containment: { label: "Account containment", value: 50 },
      evidence: { label: "Evidence quality", value: 50 },
      continuity: { label: "Demo continuity", value: 50 },
      trust: { label: "Stakeholder trust", value: 50 },
      coordination: { label: "Team coordination", value: 50 }
    },
    phases: [
      {
        phase: "Detect",
        title: "Risky sign-in follows a shared-document lure",
        inject:
          "A product lead preparing for a customer demo reports an unfamiliar Microsoft 365 sign-in alert. Identity logs show a risky sign-in for the account, and the user remembers opening a shared-document link from someone who looked like a known contact.",
        choices: [
          {
            label: "Declare a suspected account compromise, revoke sessions, reset credentials, and preserve sign-in and message evidence.",
            impact: { containment: 18, evidence: 16, continuity: -4, trust: 6, coordination: 10 },
            outcome: "The team contains the likely account exposure while preserving the artifacts needed to understand scope.",
            lesson: "A suspected account compromise can be contained quickly without losing the evidence needed for scoping."
          },
          {
            label: "Ask the user to change their password and keep preparing for the demo while IT watches for more alerts.",
            impact: { containment: -12, evidence: 2, continuity: 10, trust: -6, coordination: -4 },
            outcome: "The demo work continues, but active sessions, tokens, and mailbox access may remain exposed.",
            lesson: "Password change alone may not contain a Microsoft 365 compromise if sessions or app grants remain active."
          },
          {
            label: "Send a broad staff warning first, before confirming whether the account was actually used by an attacker.",
            impact: { containment: 2, evidence: -4, continuity: -6, trust: 8, coordination: -2 },
            outcome: "Awareness rises quickly, but responders receive a surge of questions before they have confirmed facts.",
            lesson: "Early warning is useful when paired with clear reporting instructions and a next update time."
          }
        ]
      },
      {
        phase: "Triage",
        title: "Mailbox, Teams, and SharePoint scope are uncertain",
        inject:
          "The account has recent mailbox activity, SharePoint access, and Teams messages tied to customer demo logistics. The President asks what they can tell the CEO now and whether tomorrow's customer meeting is at risk.",
        choices: [
          {
            label: "Create a shared fact board for sign-ins, mailbox rules, app consent, file access, and customer-demo dependencies.",
            impact: { containment: 10, evidence: 18, continuity: 4, trust: 8, coordination: 14 },
            outcome: "The room separates confirmed facts from assumptions and can brief leadership without slowing technical scoping.",
            lesson: "A shared fact board keeps identity, mailbox, collaboration, and business-impact threads aligned."
          },
          {
            label: "Treat the risky sign-in as the only confirmed issue and defer collaboration review until after the demo.",
            impact: { containment: 2, evidence: -12, continuity: 8, trust: -4, coordination: -4 },
            outcome: "The response feels fast, but possible SharePoint, Teams, or mailbox misuse remains unscoped.",
            lesson: "Account incidents often extend into collaboration data, not just the sign-in event."
          },
          {
            label: "Pull leadership, IT, security, operations, and product into one open-ended call to discuss every concern.",
            impact: { containment: -4, evidence: 2, continuity: -8, trust: 2, coordination: -10 },
            outcome: "Everyone hears the same concern, but owners and next actions are delayed by the size of the discussion.",
            lesson: "Broad alignment still needs a response lead, update cadence, and assigned workstreams."
          }
        ]
      },
      {
        phase: "Contain",
        title: "Demo access competes with account safety",
        inject:
          "The product lead needs Microsoft 365 access restored for tomorrow's demo. IT can re-enable access quickly, but mailbox rules, forwarding, OAuth app consent, and recent file-sharing activity are not fully reviewed.",
        choices: [
          {
            label: "Restore limited access with safeguards: fresh credentials, MFA verification, session revocation, app consent review, and monitoring.",
            impact: { containment: 14, evidence: 8, continuity: 10, trust: 8, coordination: 8 },
            outcome: "The demo remains possible while the team continues higher-risk account review under controlled conditions.",
            lesson: "Controlled restoration can protect business needs without pretending the account is fully cleared."
          },
          {
            label: "Keep the account blocked until every mailbox, file, and app-consent check is complete.",
            impact: { containment: 18, evidence: 12, continuity: -16, trust: -2, coordination: 2 },
            outcome: "Security confidence improves, but leadership now needs a customer-demo backup plan.",
            lesson: "Strong containment is valid, but it must be paired with a continuity decision."
          },
          {
            label: "Restore full access immediately and ask the user to report anything unusual after the demo.",
            impact: { containment: -16, evidence: -10, continuity: 16, trust: -8, coordination: -6 },
            outcome: "The demo prep recovers quickly, but the team cannot explain whether hidden persistence remains.",
            lesson: "Convenience without verification can turn a small account event into a recurring incident."
          }
        ]
      },
      {
        phase: "Communicate",
        title: "Notification thresholds are unclear",
        inject:
          "The President asks what should be briefed to the CEO and whether the customer needs notice. No confirmed data disclosure has been identified, but the account had access to demo materials and customer logistics.",
        choices: [
          {
            label: "Prepare a leadership brief with known facts, unknowns, notification criteria, and the next update time.",
            impact: { containment: 2, evidence: 8, continuity: 4, trust: 14, coordination: 12 },
            outcome: "Leadership has a calm, fact-bounded message and a decision point if scope changes.",
            lesson: "Decision criteria let leaders move quickly without overstating unconfirmed impact."
          },
          {
            label: "Notify the customer immediately that a Microsoft 365 account may have been compromised.",
            impact: { containment: 0, evidence: 2, continuity: -8, trust: 8, coordination: 2 },
            outcome: "The customer hears early, but follow-up questions arrive before the team can explain scope or impact.",
            lesson: "Early notice may be appropriate, but incomplete facts can create avoidable churn."
          },
          {
            label: "Keep the issue inside IT until there is confirmed data loss or customer impact.",
            impact: { containment: 4, evidence: 0, continuity: 6, trust: -14, coordination: -10 },
            outcome: "The response stays quiet, but leadership and operations are not ready if the scope expands.",
            lesson: "Waiting for certainty can leave stakeholders unprepared for time-sensitive decisions."
          }
        ]
      },
      {
        phase: "Recover",
        title: "Closeout must become real follow-up",
        inject:
          "The account appears contained. The team must decide what to document, what control gaps to fix before the next customer trip, and what the President should carry forward to leadership.",
        choices: [
          {
            label: "Capture the timeline, evidence sources, decisions, owners, due dates, and control gaps before closing.",
            impact: { containment: 4, evidence: 12, continuity: 4, trust: 8, coordination: 16 },
            outcome: "The exercise ends with a usable after-action record and owners for practical improvements.",
            lesson: "A tabletop becomes valuable when decisions turn into tracked work."
          },
          {
            label: "End once everyone agrees the scenario was realistic and ask for improvement ideas later by email.",
            impact: { containment: 0, evidence: -6, continuity: 2, trust: -2, coordination: -10 },
            outcome: "The room feels aligned, but lessons and owners fade after the meeting ends.",
            lesson: "Consensus is not the same as an after-action plan."
          },
          {
            label: "Spend the remaining time debating whether the user should have trusted the shared-document link.",
            impact: { containment: -2, evidence: -4, continuity: -4, trust: -10, coordination: -12 },
            outcome: "The closeout becomes blame-oriented and misses the process, control, and decision gaps.",
            lesson: "Useful exercises focus on response decisions and system improvements, not individual blame."
          }
        ]
      }
    ]
  },  ransomware: makeInteractiveScenario("Ransomware Disruption Decision Rehearsal", {
    containment: "Spread control",
    continuity: "Service continuity"
  }, [
    ["Detect", "Shared files begin changing at scale", "Help desk tickets spike after staff find shared files renamed with unfamiliar extensions. A department lead says a deadline-critical folder is unreadable, and backup alerts show unusual file modification volume overnight."],
    ["Triage", "Business impact and entry point are unclear", "A second team reports missing templates. IT is not sure whether the activity started from an endpoint, a mapped drive, or a privileged account. Leadership asks how bad this is and when operations can resume."],
    ["Contain", "Isolation could interrupt critical work", "IT can isolate file servers and disable suspect accounts, but a service owner warns that one server supports a deadline-critical workflow. Staff are asking whether they can copy files to personal storage."],
    ["Communicate", "Staff and executives need guidance", "The President asks what to tell the CEO. Department leads want staff instructions. No one has confirmed data theft, but the outage is becoming visible and rumors are spreading."],
    ["Recover", "Restore path must be chosen", "Backups exist, but no one has confirmed the clean restore point. An operations lead asks whether temporary manual processing can start before systems are restored."]
  ], [
    ["Declare a suspected incident, preserve early evidence, and assign parallel scope and leadership-briefing owners.", "The team starts with a clear incident posture while preserving first-known facts.", "Ransomware response starts stronger when declaration, evidence capture, and leadership rhythm happen together."],
    ["Build a fact board covering affected shares, first known time, suspected entry points, backup status, and business priorities.", "The room aligns on what is known, unknown, and needed before high-impact decisions.", "A shared fact board keeps ransomware triage from becoming a swirl of guesses."],
    ["Isolate highest-risk systems, block unsafe workarounds, and document any business exception for critical workflows.", "Risk drops while leadership owns the business tradeoff instead of leaving it implicit.", "Containment decisions are stronger when business exceptions are explicit and recorded."],
    ["Issue an internal update with confirmed facts, prohibited workarounds, next update time, and executive briefing path.", "Staff get practical guidance and leadership has a controlled update rhythm.", "Good ransomware communications separate facts, instructions, and next-update timing."],
    ["Validate a clean restore point, define post-restore monitoring, and approve temporary manual processing with limits.", "Recovery begins with evidence-backed confidence and a controlled business workaround.", "Recovery is a decision process, not just a technical restore task."]
  ], [
    [
      {
        label: "Tell staff to stop using the share and wait for IT to confirm whether this is ransomware.",
        impact: { containment: 4, evidence: 4, continuity: -4, trust: 0, coordination: -4 },
        outcome: "Some unsafe activity slows, but the response still lacks declaration, ownership, and a leadership briefing path.",
        lesson: "Cautionary guidance helps, but it does not replace incident ownership and evidence preservation."
      },
      {
        label: "Start restoring the deadline-critical folder first so the affected team can keep working.",
        impact: { containment: -12, evidence: -8, continuity: 10, trust: -4, coordination: -8 },
        outcome: "The team sees action quickly, but restoration starts before anyone knows whether the threat is still active.",
        lesson: "Early recovery pressure can increase ransomware damage when containment is not established."
      }
    ],
    [
      {
        label: "Ask each technical area to investigate separately and report back when they have something solid.",
        impact: { containment: 2, evidence: 6, continuity: 0, trust: -2, coordination: -10 },
        outcome: "Work begins in parallel, but the room gets duplicate questions and inconsistent timelines.",
        lesson: "Parallel triage still needs a shared fact board, update cadence, and owner for decisions."
      },
      {
        label: "Tell leadership there is no reliable estimate until forensic review is complete.",
        impact: { containment: 4, evidence: 8, continuity: -6, trust: -10, coordination: -4 },
        outcome: "The statement avoids guessing, but leaders have too little information to make continuity decisions.",
        lesson: "Ransomware leaders need bounded uncertainty: what is known, what is unknown, and the next decision point."
      }
    ],
    [
      {
        label: "Keep the server online until the service owner approves downtime for the deadline-critical workflow.",
        impact: { containment: -14, evidence: 2, continuity: 10, trust: -6, coordination: -4 },
        outcome: "The workflow continues briefly, but the suspected spread path remains open.",
        lesson: "Waiting for perfect business alignment can leave the environment exposed."
      },
      {
        label: "Disconnect every potentially affected server immediately and sort out operations after the shutdown.",
        impact: { containment: 18, evidence: 6, continuity: -16, trust: -2, coordination: 0 },
        outcome: "Spread risk drops quickly, but leadership now owns a major service disruption without a prepared continuity plan.",
        lesson: "Aggressive containment can be valid, but it must come with communications and continuity handling."
      }
    ],
    [
      {
        label: "Send a brief message that IT is investigating and avoid details until the team knows more.",
        impact: { containment: 0, evidence: 2, continuity: -2, trust: -8, coordination: -6 },
        outcome: "The message is cautious, but staff fill the gaps with rumors and unsafe workarounds.",
        lesson: "Under-communication can create operational risk during ransomware response."
      },
      {
        label: "Warn everyone that ransomware is underway and all shared systems may be unsafe.",
        impact: { containment: 6, evidence: 0, continuity: -12, trust: 2, coordination: -4 },
        outcome: "The warning gets attention, but vague alarm creates more questions than usable action.",
        lesson: "Urgency works best when paired with specific instructions and a next update time."
      }
    ],
    [
      {
        label: "Restore the newest available backup immediately to reduce downtime.",
        impact: { containment: -8, evidence: -8, continuity: 14, trust: -4, coordination: -2 },
        outcome: "Services may return faster, but the team cannot explain whether the restore point is safe or whether reinfection risk remains.",
        lesson: "Fast restore without validation can reintroduce the incident."
      },
      {
        label: "Delay all manual work and recovery until every affected system has been rebuilt.",
        impact: { containment: 10, evidence: 8, continuity: -14, trust: -6, coordination: 0 },
        outcome: "Technical risk is tightly controlled, but operational impact grows without a continuity bridge.",
        lesson: "Secure recovery still needs controlled business continuity options."
      }
    ]
  ]),
  insider: makeInteractiveScenario("Insider Data Exposure Decision Rehearsal", {
    containment: "Access control",
    evidence: "Evidence integrity",
    continuity: "Transition continuity",
    trust: "Fair process",
    coordination: "HR/legal coordination"
  }, [
    ["Detect", "Unusual download before departure", "A supervisor reports that an employee who recently gave notice downloaded a large set of project files after hours, including customer demo material and internal roadmaps. The employee still supports a release handoff, and HR has a planned exit discussion later today."],
    ["Triage", "Purpose and scope are disputed", "The supervisor says some files may be needed for transition work. IT sees personal cloud storage access around the same time, but there is no confirmed upload. A data owner asks whether controlled technical drawings or customer-sensitive records are included."],
    ["Contain", "Access changes may disrupt transition work", "The employee is still assigned to support a release handoff and answer product questions. Removing all access could delay the team, but leaving access unchanged may expose more files and weaken evidence preservation."],
    ["Communicate", "Need-to-know handling is unclear", "The President asks what can be briefed to the CEO. HR warns that the matter is sensitive, the supervisor wants guidance for the team, and legal asks that nobody write accusations before facts are reviewed."],
    ["Recover", "Closeout and access governance gaps", "The review finds excessive access to old project folders, unclear offboarding timing, and inconsistent export logging. The team must decide what to document, what to fix, and who owns follow-up." ]
  ], [
    ["Preserve logs, limit access quietly, and bring HR, legal, the supervisor, and the data owner into a need-to-know triage path.", "The team reduces risk while protecting evidence and avoiding premature accusations.", "Insider scenarios need both security control and procedural fairness."],
    ["Separate facts from assumptions and review access history, file sensitivity, transfer indicators, and authorized transition need.", "The response avoids jumping to conclusions while still identifying data and access risk quickly.", "Insider triage works best when intent is not assumed before evidence and business context are reviewed."],
    ["Move to least-privilege transition access, preserve account and device state, and route handoff work through a supervisor.", "The business keeps moving while riskier access paths are closed and evidence remains defensible.", "Containment can be targeted instead of all-or-nothing."],
    ["Use need-to-know language: transition coverage, confidentiality, approved points of contact, and the next leadership update time.", "The team gets enough direction to keep working without spreading sensitive claims or undermining HR/legal handling.", "Insider communications should protect privacy, evidence, and operations at the same time."],
    ["Document the decision trail, data-owner sensitivity review, access cleanup, offboarding trigger changes, evidence retention, and owners.", "The event becomes a practical improvement path instead of only a personnel concern.", "Insider exercises should end with access governance and evidence-handling improvements."]
  ], [
    [
      {
        label: "Ask the supervisor to question the employee directly before IT changes access.",
        impact: { containment: -10, evidence: -12, continuity: 2, trust: -14, coordination: -12 },
        outcome: "The conversation may surface context, but it risks alerting the employee, contaminating evidence, and creating employment-process problems.",
        lesson: "Direct questioning should be coordinated with HR/legal and evidence owners, not improvised by a supervisor."
      },
      {
        label: "Disable all access immediately and collect the laptop before HR or legal are consulted.",
        impact: { containment: 18, evidence: 4, continuity: -14, trust: -10, coordination: -8 },
        outcome: "Risk drops fast, but the action disrupts the handoff and may create avoidable procedural issues.",
        lesson: "Urgent access control still needs a defensible approval path and evidence plan."
      }
    ],
    [
      {
        label: "Assume the files were needed for transition work unless a confirmed upload appears.",
        impact: { containment: -12, evidence: -6, continuity: 10, trust: 2, coordination: -4 },
        outcome: "The handoff continues smoothly, but the team leaves sensitive-file scope and transfer indicators unresolved.",
        lesson: "Benign explanations are possible, but they do not replace evidence-based scoping."
      },
      {
        label: "Treat the activity as malicious and brief leadership before the data owner classifies the files.",
        impact: { containment: 6, evidence: -4, continuity: -4, trust: -14, coordination: -8 },
        outcome: "Leadership hears a clear concern, but the language gets ahead of facts and data sensitivity.",
        lesson: "Insider triage should distinguish suspicious activity from proven intent or confirmed exposure."
      }
    ],
    [
      {
        label: "Leave current access unchanged until the release handoff is complete.",
        impact: { containment: -16, evidence: -6, continuity: 14, trust: -6, coordination: -4 },
        outcome: "The transition work continues, but the same access paths remain open during the concern window.",
        lesson: "Business continuity pressure should shape targeted containment, not prevent it."
      },
      {
        label: "Lock every account and device immediately, then ask the team to recreate handoff knowledge later.",
        impact: { containment: 18, evidence: 10, continuity: -16, trust: -4, coordination: -2 },
        outcome: "The risk window closes, but the product team loses transition support without a continuity bridge.",
        lesson: "Aggressive containment needs an operations plan, especially in small teams."
      }
    ],
    [
      {
        label: "Tell the immediate team that the employee is under investigation so they stop sharing information.",
        impact: { containment: 4, evidence: -8, continuity: -8, trust: -18, coordination: -10 },
        outcome: "The team becomes cautious, but rumors spread and the organization may create unnecessary personnel risk.",
        lesson: "Need-to-know communications should avoid labels, accusations, and unnecessary personnel detail."
      },
      {
        label: "Keep the issue entirely inside IT until the review proves intentional misuse.",
        impact: { containment: 2, evidence: 4, continuity: 4, trust: -10, coordination: -12 },
        outcome: "The matter stays quiet, but HR, legal, leadership, and the supervisor are not ready for time-sensitive decisions.",
        lesson: "Confidential handling still needs the right decision-makers in the loop."
      }
    ],
    [
      {
        label: "Close the review once the employee leaves and revisit access cleanup during the next audit cycle.",
        impact: { containment: -6, evidence: -8, continuity: 4, trust: -6, coordination: -12 },
        outcome: "The immediate pressure ends, but access governance and evidence-retention gaps remain unowned.",
        lesson: "Offboarding incidents should produce near-term improvements, not vague future audit items."
      },
      {
        label: "Write a detailed narrative naming suspected motives and distribute it broadly for awareness.",
        impact: { containment: 0, evidence: -10, continuity: -6, trust: -18, coordination: -8 },
        outcome: "The story spreads quickly, but privacy, fairness, and evidence quality suffer.",
        lesson: "After-action records should document facts, decisions, owners, and gaps without speculative motive."
      }
    ]
  ]),  ddos: makeInteractiveScenario("Public Service Outage Decision Rehearsal", {
    containment: "Service stability",
    evidence: "Technical timeline",
    continuity: "Business continuity",
    trust: "Public confidence",
    coordination: "Provider coordination"
  }, [
    ["Detect", "Public service instability appears", "Monitoring shows intermittent failures for a public-facing web service during a customer deadline window. Support is receiving reports from several regions, but internal tools still appear normal and the team has not confirmed whether this is traffic, hosting, application, identity, or dependency related."],
    ["Triage", "Cause and impact are still ambiguous", "Recent deployment notes, cloud service health, authentication errors, CDN logs, database latency, and third-party dependency status all show possible signals. Service leads want an estimated restoration time, while leadership asks whether this should be treated as a cyber incident."],
    ["Contain", "Stabilization choices affect real users", "The provider can apply emergency filtering and rate limits, but that may block legitimate users. The product team can disable a non-critical feature to restore core access, but support will need a manual workaround script."],
    ["Communicate", "Status messaging needs precision", "Customers, partners, staff, and leadership are asking for updates. The President wants language that is honest about impact, does not overstate root cause, and gives the CEO a clear briefing path if public pressure increases."],
    ["Recover", "Service returns but resilience gaps remain", "Core service is stable again after changes by the provider and the product team. Logs show warning signs before the outage, status messaging lagged behind support calls, and no one is sure who owns follow-up reliability fixes."]
  ], [
    ["Open an incident bridge, assign technical, provider, support, and communications owners, and capture first known impact.", "The response starts organized while root cause is still unknown.", "Availability incidents need structure before diagnosis is complete."],
    ["Run parallel triage lanes for recent changes, dependencies, identity, infrastructure, and provider status while publishing a bounded update time.", "The team narrows causes without making unsupported promises.", "Parallel triage works when lanes, owners, and update times are explicit."],
    ["Approve targeted filtering plus partial restoration, publish service limitations, and monitor support load, error rates, and blocked legitimate users.", "Users regain core service while the team manages known side effects.", "Partial recovery is valuable when limitations and rollback criteria are clearly owned."],
    ["Publish a status update with impact, affected functions, workaround, next update time, and no unsupported root-cause claim.", "The message is useful without overcommitting or speculating.", "Outage communication should be specific about impact even when cause is unknown."],
    ["Run an after-action review covering timeline, detection gaps, provider actions, change controls, status messaging, owners, and validation criteria.", "The team turns service restoration into concrete resilience improvements.", "Outage exercises should end with operational reliability work, not just service recovery."]
  ], [
    [
      {
        label: "Wait for more reports before declaring an incident because internal systems still work.",
        impact: { containment: -12, evidence: -8, continuity: -10, trust: -12, coordination: -10 },
        outcome: "The team avoids premature escalation, but support calls and public complaints grow before ownership is clear.",
        lesson: "An outage can need incident structure before the cause is known."
      },
      {
        label: "Call it a DDoS publicly and ask the provider to block the suspicious traffic immediately.",
        impact: { containment: 6, evidence: -10, continuity: -6, trust: -14, coordination: -4 },
        outcome: "Some traffic is reduced, but the public statement and provider action get ahead of the facts.",
        lesson: "Early labels can narrow thinking and create communications risk."
      }
    ],
    [
      {
        label: "Focus only on the most recent deployment and pause provider engagement until the app team finishes review.",
        impact: { containment: -8, evidence: 4, continuity: -10, trust: -8, coordination: -12 },
        outcome: "The deployment review may find useful clues, but dependency and provider signals age while the outage continues.",
        lesson: "Outage triage should split work across likely causes instead of serializing every path."
      },
      {
        label: "Promise a restoration estimate to leadership based on the first likely cause.",
        impact: { containment: -4, evidence: -6, continuity: 2, trust: -16, coordination: -6 },
        outcome: "Leadership gets an answer quickly, but confidence drops if the first theory is wrong.",
        lesson: "Estimated restoration times need confidence levels and assumptions."
      }
    ],
    [
      {
        label: "Apply the strictest provider filtering immediately and accept that some legitimate users may be blocked.",
        impact: { containment: 18, evidence: 2, continuity: -12, trust: -8, coordination: 2 },
        outcome: "Traffic pressure drops, but legitimate access problems and support burden increase.",
        lesson: "Emergency filtering needs user-impact monitoring and rollback criteria."
      },
      {
        label: "Avoid temporary workarounds until the true root cause is proven.",
        impact: { containment: -10, evidence: 6, continuity: -14, trust: -10, coordination: -4 },
        outcome: "The technical investigation stays clean, but users remain blocked from core service longer than necessary.",
        lesson: "Root cause analysis and business continuity have to move together."
      }
    ],
    [
      {
        label: "Delay status messaging until the team can explain the cause with confidence.",
        impact: { containment: 0, evidence: 4, continuity: -4, trust: -18, coordination: -8 },
        outcome: "The team avoids speculation, but customers and support staff fill the silence with inconsistent explanations.",
        lesson: "A useful outage update can describe impact and next update time without claiming root cause."
      },
      {
        label: "Post that the issue is resolved as soon as the dashboard turns green once.",
        impact: { containment: -6, evidence: -4, continuity: 4, trust: -14, coordination: -6 },
        outcome: "The message is optimistic, but a recurrence would make the organization look unreliable.",
        lesson: "Recovery messages should wait for validation criteria, not a single good signal."
      }
    ],
    [
      {
        label: "Close the incident after service stabilizes and leave reliability improvements for normal backlog grooming.",
        impact: { containment: -6, evidence: -10, continuity: 4, trust: -8, coordination: -12 },
        outcome: "The team moves on quickly, but the same monitoring, ownership, and provider-coordination gaps may return.",
        lesson: "Restoration is not the same as resilience improvement."
      },
      {
        label: "Assign every follow-up to IT because the outage was technical.",
        impact: { containment: -4, evidence: -4, continuity: -8, trust: -6, coordination: -14 },
        outcome: "Technical tasks get owners, but status messaging, support scripts, product tradeoffs, and provider management remain under-owned.",
        lesson: "Availability follow-up usually crosses technical, product, support, communications, and vendor roles."
      }
    ]
  ]),  supplyChain: makeInteractiveScenario("Vendor Compromise Decision Rehearsal", {
    containment: "Third-party access",
    evidence: "Vendor evidence",
    continuity: "Support continuity",
    trust: "Customer confidence",
    coordination: "Partner coordination"
  }, [
    ["Detect", "Vendor support access looks unusual", "A vendor support account logs into an administrative console outside the normal maintenance window and touches a customer-facing service configuration. The vendor has not announced an incident, but your logs show the activity came through a support portal integration rather than a normal employee account."],
    ["Triage", "Access paths and obligations are unclear", "The vendor says they are investigating suspicious activity in their environment. Internal teams ask which systems the vendor can access, whether customer data or controlled technical information could be involved, and what the contract or security addendum requires for notices and cooperation."],
    ["Contain", "Support access is risky but operationally useful", "Limiting vendor access may delay a planned customer demo, production support fix, or web application rollout. The vendor requests temporary restored access to troubleshoot, while the product lead wants assurance that any access is monitored and approved."],
    ["Communicate", "Vendor statement is vague", "Leadership asks whether customers, partners, or the CEO need an update. The vendor's statement confirms an investigation but does not say whether your tenant, data, support portal, or credentials were affected."],
    ["Recover", "Normal access needs restoration criteria", "No malicious activity is confirmed in your tenant, but the vendor cannot fully explain the suspicious login. The team must decide what evidence, access changes, authentication requirements, and monitoring must be in place before normal support access returns."]
  ], [
    ["Preserve access logs, contact the vendor through an approved channel, temporarily limit the vendor account, and open an internal incident record.", "The team reduces third-party access risk while validating facts through defensible channels.", "Vendor incidents require both internal containment and external confirmation."],
    ["Build a vendor access map, identify service owners, review notice terms, and track confirmed facts separately from vendor claims.", "The team can make decisions based on access paths and obligations, not guesswork.", "Third-party triage depends on knowing access, ownership, agreements, and evidence sources."],
    ["Allow time-boxed, monitored access from approved accounts only, with system owner approval, logging requirements, and rollback criteria.", "Support can continue under controlled conditions while risky access paths stay restricted.", "Vendor containment can use guarded access instead of blind trust or total lockout."],
    ["Prepare leadership and customer-facing criteria based on confirmed impact, contract terms, affected services, and vendor updates.", "Leadership has a defensible path without over- or under-notifying.", "Vendor messaging needs decision criteria before facts force the moment."],
    ["Require access review, stronger authentication, named owners, monitoring rules, vendor attestation, and a documented restoration decision.", "Vendor access returns with better governance and a defensible decision trail.", "Third-party recovery should improve the access model, not just reopen the door."]
  ], [
    [
      {
        label: "Assume the login was normal vendor maintenance until the vendor confirms an issue.",
        impact: { containment: -14, evidence: -8, continuity: 8, trust: -10, coordination: -10 },
        outcome: "Support work continues, but suspicious third-party access remains active while evidence and escalation windows age.",
        lesson: "Vendor normalcy claims should be checked against your own logs and access expectations."
      },
      {
        label: "Disable every vendor account immediately and stop all vendor-supported work.",
        impact: { containment: 18, evidence: 8, continuity: -18, trust: -4, coordination: -8 },
        outcome: "Risk drops quickly, but customer support, demos, and product work may stall without a transition plan.",
        lesson: "Strong containment still needs business-impact routing and named approvers."
      }
    ],
    [
      {
        label: "Wait for the vendor's formal incident notice before mapping access or reviewing contract terms.",
        impact: { containment: -10, evidence: -10, continuity: 2, trust: -8, coordination: -14 },
        outcome: "The team avoids duplicated work, but loses time understanding exposure, obligations, and internal owners.",
        lesson: "Your response can begin before the vendor finishes its investigation."
      },
      {
        label: "Tell all service owners to independently contact the vendor for details.",
        impact: { containment: 0, evidence: -8, continuity: -4, trust: -6, coordination: -16 },
        outcome: "Teams may collect useful fragments, but the vendor receives scattered questions and the internal fact pattern becomes messy.",
        lesson: "Vendor coordination works best through a controlled contact path and shared fact log."
      }
    ],
    [
      {
        label: "Restore full vendor access so the customer demo and support fix stay on schedule.",
        impact: { containment: -18, evidence: -8, continuity: 16, trust: -10, coordination: -8 },
        outcome: "The business schedule stays intact, but the team reopens risk before monitoring and approval conditions exist.",
        lesson: "Business pressure should shape guarded access, not erase containment requirements."
      },
      {
        label: "Keep access fully disabled until the vendor completes its entire investigation.",
        impact: { containment: 12, evidence: 6, continuity: -16, trust: -4, coordination: -6 },
        outcome: "The access risk stays low, but support dependencies and customer-facing work may pile up without a controlled exception process.",
        lesson: "Total lockout is sometimes necessary, but exceptions and workarounds still need owners."
      }
    ],
    [
      {
        label: "Tell customers a vendor compromise may have affected service before impact is confirmed.",
        impact: { containment: 0, evidence: -6, continuity: -4, trust: -16, coordination: -10 },
        outcome: "The message is proactive, but it may overstate the facts and create avoidable customer concern.",
        lesson: "Vendor communications should separate confirmed impact from active investigation."
      },
      {
        label: "Keep the issue inside IT until the vendor provides definitive wording.",
        impact: { containment: 2, evidence: 4, continuity: 2, trust: -12, coordination: -14 },
        outcome: "The team avoids speculation, but leadership and customer-facing teams lack criteria for questions that may arrive first.",
        lesson: "Internal readiness language can be prepared before external notification is required."
      }
    ],
    [
      {
        label: "Restore normal access after the vendor says the issue is contained.",
        impact: { containment: -10, evidence: -8, continuity: 10, trust: -8, coordination: -8 },
        outcome: "Support returns quickly, but the decision relies on vendor assurance without local validation or new controls.",
        lesson: "Restoration criteria should include your evidence, not only vendor confidence."
      },
      {
        label: "Require a new vendor security review before any future support access is allowed.",
        impact: { containment: 14, evidence: 4, continuity: -14, trust: 2, coordination: -6 },
        outcome: "The bar is high, but normal operations may suffer if temporary monitored access is not defined.",
        lesson: "Recovery should pair stronger governance with practical support continuity."
      }
    ]
  ])};

Object.assign(interactiveScenarios, {
  "phishing-oauth": makeInteractiveScenario("OAuth Consent Phishing Drill", {
    containment: "App consent control",
    evidence: "Consent evidence",
    continuity: "User continuity",
    trust: "User confidence",
    coordination: "Identity coordination"
  }, [
    ["Detect", "Unexpected app consent appears", "A user reports a suspicious Microsoft 365 consent prompt after opening a shared-document link. Audit logs show a newly authorized third-party app with broad mailbox and file permissions."],
    ["Triage", "Scope includes app grants", "Identity logs show several users may have approved the same app. Help desk wants simple guidance, while IT needs to know whether revoking consent will disrupt legitimate work."],
    ["Contain", "Revocation may affect workflows", "The app can be blocked tenant-wide, but no one has confirmed whether any business-approved automation uses a similar consent path."],
    ["Communicate", "Users need clear reporting guidance", "Staff are forwarding screenshots and asking whether they should approve the prompt. Leadership wants a short message that does not create panic."],
    ["Recover", "Consent governance gaps remain", "The app is removed and no data loss is confirmed, but consent settings, user training, and app review ownership are unclear."]
  ], [
    ["Revoke the suspicious app grant, preserve consent logs, and identify all users who approved it.", "The team contains the risky integration while preserving evidence for scoping.", "OAuth phishing requires app-grant review, not just password resets."],
    ["Group affected users by app approval, sign-in activity, and mailbox/file access before deciding notification language.", "The team scopes exposure with evidence instead of assuming every recipient is compromised.", "Consent events need their own triage lane."],
    ["Block the app, document business impact, and create an exception path for known approved automations.", "Risky access closes while legitimate workflows have a controlled route.", "Tenant-wide controls need exception ownership."],
    ["Send staff a concise report/delete/do-not-approve message with a named help desk path.", "Users get action guidance while IT continues scoping.", "User communications should reduce copy-forward behavior."],
    ["Assign owners for consent policy, app review, user reporting, and evidence retention changes.", "The exercise ends with durable control improvements.", "Recovery should close the governance gap that allowed the prompt."]
  ]),
  "ransomware-backup": makeInteractiveScenario("Backup Failure Ransomware Drill", {
    containment: "Spread control",
    evidence: "Ransomware evidence",
    continuity: "Recovery continuity",
    trust: "Leadership confidence",
    coordination: "Recovery coordination"
  }, [
    ["Detect", "File share encryption is reported", "A shared project folder shows encrypted files and ransom notes. The first available backup copy also appears incomplete."],
    ["Triage", "Backup confidence is uncertain", "IT can isolate more systems, but leadership asks when the team can restore enough files for customer work."],
    ["Contain", "Restoration could reintroduce risk", "A clean restore point is not confirmed. Some teams want to rebuild from local copies to keep work moving."],
    ["Communicate", "Leadership wants a recovery answer", "The President asks for an update to brief the CEO: what is down, what is recoverable, and what cannot be promised yet."],
    ["Recover", "Backup process gaps are exposed", "Core data is partially restored, but backup monitoring, restore testing, and ownership gaps are obvious."]
  ], [
    ["Isolate affected shares, preserve ransom artifacts, and validate backup integrity before promising restore times.", "The team slows spread while keeping recovery claims defensible.", "Backup status is evidence, not an assumption."],
    ["Separate containment, backup validation, and business-priority restore lanes with named owners.", "The team can answer leadership without collapsing every task into one queue.", "Ransomware response needs parallel recovery work."],
    ["Restore only from validated clean sources and track any manual reconstruction as an exception.", "Recovery proceeds with fewer reinfection and integrity risks.", "Fast restoration still needs clean-source criteria."],
    ["Brief leadership with affected services, validated restore options, decision needs, and next update time.", "The CEO gets useful risk context without false certainty.", "Recovery communication should distinguish tested facts from hopes."],
    ["Assign follow-ups for restore testing, backup alerting, isolation playbooks, and recovery decision authority.", "The exercise converts backup failure into concrete resilience work.", "Ransomware recovery is only strong if restore confidence is tested beforehand."]
  ]),
  "insider-contractor": makeInteractiveScenario("Contractor Overshare Drill", {
    containment: "Access control",
    evidence: "Sharing evidence",
    continuity: "Project continuity",
    trust: "Fair process",
    coordination: "Sponsor coordination"
  }, [
    ["Detect", "Shared folder link is too broad", "A contractor sponsor reports that a project folder link may have been shared with a larger vendor team than intended."],
    ["Triage", "Business need is mixed with overexposure", "Some vendor users may need access for an active handoff, while others appear outside the approved project roster."],
    ["Contain", "Access cleanup may disrupt work", "Removing the external group could block a near-term customer demo, but leaving it open may expose internal roadmaps."],
    ["Communicate", "Sponsor and data owner disagree", "The sponsor wants continuity; the data owner wants a sensitivity review before any external access continues."],
    ["Recover", "External sharing governance is unclear", "The link is corrected, but owners for external sharing review, expiration, and audit are not defined."]
  ], [
    ["Preserve sharing logs, identify external users, and freeze link expansion while sponsor and data owner review scope.", "The team stops further spread without assuming every vendor user acted improperly.", "Oversharing response starts with scope and evidence."],
    ["Compare access against the approved project roster and classify the shared content with the data owner.", "The team separates valid work from overexposure.", "External access decisions need both roster and data sensitivity."],
    ["Move required users to a least-privilege group and remove broad link access with a documented exception path.", "The project keeps moving under tighter control.", "Containment can preserve continuity when access is rebuilt intentionally."],
    ["Brief sponsor and data owner with facts, impact, interim access, and next review time.", "The disagreement becomes a decision path instead of a tug-of-war.", "Small orgs need explicit owners for external-sharing tradeoffs."],
    ["Assign owners for external sharing review, expiration defaults, audit checks, and sponsor approval rules.", "The team closes the process gap behind the overshare.", "Recovery should improve sharing governance, not only fix one link."]
  ]),
  "ddos-cloud-dependency": makeInteractiveScenario("Cloud Dependency Outage Drill", {
    containment: "Service stability",
    evidence: "Dependency timeline",
    continuity: "Workaround continuity",
    trust: "Public confidence",
    coordination: "Provider coordination"
  }, [
    ["Detect", "Cloud dependency begins failing", "A customer-facing web workflow slows down while the core app remains online. Provider status pages are green, but logs point to a third-party dependency timeout."],
    ["Triage", "Provider status does not match telemetry", "Support sees user complaints, engineering sees dependency errors, and leadership wants to know whether this is your outage or the provider's."],
    ["Contain", "Workaround has user friction", "A manual workaround can keep critical users moving, but it increases support load and leaves non-critical features degraded."],
    ["Communicate", "Status page wording is difficult", "The team needs to acknowledge impact without blaming a provider before evidence is complete."],
    ["Recover", "Provider escalation path is weak", "Service stabilizes, but escalation contacts, synthetic monitoring, and workaround ownership are unclear."]
  ], [
    ["Open an incident, capture dependency telemetry, and start provider escalation while monitoring user impact.", "The team treats the outage seriously without waiting for provider confirmation.", "Your telemetry can justify escalation before a public provider status change."],
    ["Run internal health, dependency, and provider-ticket lanes in parallel with a bounded next update.", "The team avoids a false either-or between your app and the provider.", "Dependency outages need parallel proof gathering."],
    ["Publish the workaround with limitations, support script, and rollback criteria.", "Critical users have a path while the team tracks support burden.", "Workarounds need owners and honest limitations."],
    ["Post impact-focused status language with next update time and no unsupported blame.", "Users get useful information while evidence continues.", "Status updates can be specific without naming a cause."],
    ["Assign owners for provider escalation, dependency monitoring, workaround playbooks, and customer messaging triggers.", "The incident produces operational resilience improvements.", "Dependency recovery should strengthen escalation and detection."]
  ]),
  "supplyChain-breach-notice": makeInteractiveScenario("Vendor Breach Notice Drill", {
    containment: "Third-party access",
    evidence: "Notice evidence",
    continuity: "Service continuity",
    trust: "Customer confidence",
    coordination: "Partner coordination"
  }, [
    ["Detect", "Vendor sends a vague breach notice", "A software vendor sends a brief notice saying it is investigating unauthorized access. The notice does not say whether your tenant, support portal, or customer data is affected."],
    ["Triage", "Contract terms and exposure are unclear", "Leadership asks what must be done today. Procurement has the contract, IT owns the integration, and the product team owns customer impact."],
    ["Contain", "Integration access may be needed", "The vendor integration supports a customer workflow. Disabling it may reduce risk but could interrupt demonstrations and support."],
    ["Communicate", "Customers may ask first", "The vendor says it will provide more details later. Customer-facing teams want holding language now."],
    ["Recover", "Vendor assurance is not enough", "The vendor says the issue is contained, but internal owners must decide what proof and access changes are required before normal operations resume."]
  ], [
    ["Preserve the notice, open an incident record, identify integrations, and route vendor questions through one owner.", "The team gets organized before the vendor provides full facts.", "A vague notice still deserves a structured response."],
    ["Map access, contract terms, data exposure, and service owners into a shared fact log.", "Decisions can be based on obligations and exposure rather than anxiety.", "Vendor breach triage is part technical, part contractual."],
    ["Reduce integration privileges where possible and document any business-approved exception.", "Risk is reduced without pretending the integration has no business value.", "Containment should be proportional and documented."],
    ["Prepare internal and customer-facing criteria that separate known impact from pending vendor details.", "Teams are ready to answer without overstating the incident.", "Holding language is useful when it is tied to decision criteria."],
    ["Require vendor attestation, internal log review, access cleanup, and named restoration approval.", "Normal operations resume with a stronger decision trail.", "Vendor recovery should be validated locally as well as externally."]
  ])
});


Object.assign(interactiveScenarios, {
  "phishing-bec": makeInteractiveScenario("Executive Payment Request Drill", {
    containment: "Mailbox containment",
    evidence: "Message evidence",
    continuity: "Finance continuity",
    trust: "Executive trust",
    coordination: "Finance coordination"
  }, [
    ["Detect", "Urgent payment request arrives", "A finance analyst receives an email that appears to come from the President asking for an urgent vendor payment before a customer demo trip. The display name is familiar, but the reply-to address and tone are unusual."],
    ["Triage", "Executive calendar adds pressure", "The President is in meetings and not immediately reachable. Finance wants to avoid delaying legitimate travel support, while IT needs the message headers and mailbox evidence."],
    ["Contain", "Similar messages may be spreading", "Help desk receives two more forwarded messages from staff who were copied on related payment requests. It is unclear whether the executive mailbox is compromised or only spoofed."],
    ["Communicate", "Finance needs a safe script", "Finance asks what it can tell managers who are waiting on payment approvals. Leadership wants clear language that does not imply the President made a mistake."],
    ["Recover", "Approval controls are informal", "No payment was made, but the team discovers that urgent vendor payment verification relies on personal knowledge rather than a written callback process."]
  ], [
    ["Preserve the message, verify the request out-of-band, and hold payment until finance and IT agree on scope.", "The team prevents a rushed payment while preserving evidence needed to determine spoofing versus compromise.", "BEC response should protect the business process and mailbox evidence at the same time."],
    ["Create parallel lanes for executive verification, message-header review, and finance impact.", "Finance gets a decision path while IT checks whether the mailbox or only the display name was abused.", "Executive pressure should not collapse verification steps."],
    ["Block similar messages, search mailboxes for related lures, and avoid deleting evidence until scoped.", "The team reduces spread without losing proof of targeting.", "Containment should include mailbox search and evidence preservation."],
    ["Send finance a short holding script: payment verification is in progress, no action until approved, next update time named.", "Managers get a calm process update without unverified attribution.", "Internal messaging should protect confidence while facts are incomplete."],
    ["Assign owners for payment callback rules, executive impersonation reporting, and finance approval thresholds.", "The exercise ends with a control improvement rather than only a blocked email.", "BEC recovery should harden the payment workflow."]
  ], [
    [{ label: "Approve the payment because the request appears to come from leadership.", impact: { containment: -12, evidence: -8, continuity: 8, trust: -12, coordination: -10 }, outcome: "The business moves quickly, but the team may authorize fraud before validating the sender.", lesson: "Executive urgency is a reason to verify, not a reason to skip verification." }, { label: "Delete the message and warn finance informally.", impact: { containment: 2, evidence: -14, continuity: -2, trust: -4, coordination: -6 }, outcome: "The immediate message is gone, but evidence and search terms are lost.", lesson: "Suspicious financial messages should be preserved before cleanup." }],
    [{ label: "Wait until the President is available before doing anything else.", impact: { containment: -8, evidence: 2, continuity: -8, trust: -4, coordination: -6 }, outcome: "The team avoids bothering others, but similar messages may continue spreading.", lesson: "Verification can proceed through approved alternates while the executive is unavailable." }, { label: "Treat it as only a finance issue unless IT sees more alerts.", impact: { containment: -10, evidence: -4, continuity: 4, trust: -6, coordination: -8 }, outcome: "Finance is left holding risk that may actually involve mailbox or identity compromise.", lesson: "BEC sits between business process and technical investigation." }],
    [{ label: "Send a broad warning before confirming related messages.", impact: { containment: 4, evidence: -2, continuity: -2, trust: -8, coordination: -4 }, outcome: "Staff are alerted, but unsupported detail may create confusion.", lesson: "Warnings should be specific enough to help and cautious enough to avoid speculation." }, { label: "Focus only on the original recipient.", impact: { containment: -12, evidence: -4, continuity: 4, trust: -6, coordination: -4 }, outcome: "The first report is handled, but related targeting may remain active.", lesson: "Payment fraud attempts often target a process, not just one person." }],
    [{ label: "Tell everyone the President was impersonated before technical scope is known.", impact: { containment: 0, evidence: 0, continuity: -4, trust: -12, coordination: -8 }, outcome: "The message travels faster than the facts.", lesson: "Attribution should wait for evidence." }, { label: "Keep it quiet so the executive team is not embarrassed.", impact: { containment: -8, evidence: 0, continuity: 2, trust: -10, coordination: -10 }, outcome: "The organization misses a chance to prevent additional payment attempts.", lesson: "Low-drama internal guidance is not the same as blame." }],
    [{ label: "Close the event because no money left the company.", impact: { containment: -4, evidence: -2, continuity: 6, trust: -4, coordination: -8 }, outcome: "The organization avoids paperwork but leaves the same process exposed.", lesson: "Near misses are useful control evidence." }, { label: "Require every payment to be approved by the CEO personally.", impact: { containment: 6, evidence: 0, continuity: -12, trust: -2, coordination: -6 }, outcome: "The rule sounds strong but may be impractical and create bottlenecks.", lesson: "Controls need sustainable approval paths." }]
  ]),
  "ransomware-saas-lockout": makeInteractiveScenario("SaaS Admin Lockout Ransomware Drill", {
    containment: "Identity containment",
    evidence: "Admin evidence",
    continuity: "SaaS continuity",
    trust: "Leadership confidence",
    coordination: "Vendor coordination"
  }, [
    ["Detect", "Admin access is failing", "An administrator cannot access a critical SaaS console shortly after endpoint alerts show suspicious archive and encryption behavior on an admin workstation."],
    ["Triage", "Console ownership is unclear", "IT can still reach some user-facing features, but admin recovery options require vendor support. Leadership asks whether customer operations are affected."],
    ["Contain", "Identity changes may break integrations", "Resetting admin sessions and rotating keys may disrupt integrations used by product demos and support workflows."],
    ["Communicate", "Teams need workarounds", "Support, product, and leadership need to know which SaaS functions remain safe to use while admin recovery is underway."],
    ["Recover", "Admin recovery exposes weak break-glass planning", "Vendor support restores access, but break-glass accounts, hardware token custody, and integration key rotation procedures are not clearly owned."]
  ], [
    ["Open an incident, isolate the admin workstation, preserve identity logs, and start vendor recovery for privileged access.", "The team treats admin lockout as a ransomware-adjacent identity incident rather than a simple password issue.", "SaaS ransomware pressure often shows up as identity and admin recovery pressure."],
    ["Separate user service status, admin access recovery, and vendor escalation into named lanes.", "Leadership gets a clearer answer on impact while technical recovery proceeds.", "Admin outage does not always equal user outage, but it can become one."],
    ["Rotate only high-risk credentials first, document integration impact, and pause unsafe automations.", "The team reduces compromise risk without blindly breaking every workflow.", "Key rotation needs business-impact sequencing."],
    ["Publish internal guidance listing safe functions, blocked admin changes, workaround owners, and next update time.", "Teams can keep operating with fewer assumptions.", "Workaround communication is part of containment."],
    ["Assign owners for break-glass account testing, vendor escalation contacts, admin workstation hardening, and key rotation drills.", "The exercise turns a lockout into durable recovery planning.", "SaaS recovery depends on rehearsed privileged-access restoration."]
  ]),
  "supplyChain-update-integrity": makeInteractiveScenario("Vendor Update Integrity Drill", {
    containment: "Update containment",
    evidence: "Package evidence",
    continuity: "Deployment continuity",
    trust: "Customer confidence",
    coordination: "Engineering coordination"
  }, [
    ["Detect", "Unexpected vendor updater behavior", "Endpoint telemetry shows a trusted vendor updater launching unusual child processes on several demo laptops after a routine software update."],
    ["Triage", "Demo systems may be affected", "Product teams need the laptops for customer demonstrations this week. Engineering wants hashes, update versions, and install timelines before deciding whether to roll back."],
    ["Contain", "Rollback could disrupt demos", "Blocking the updater may prevent further execution, but rolling back the package could break demo environments and support tooling."],
    ["Communicate", "Customer-facing teams need criteria", "Sales and product leads ask whether planned demos can continue. Leadership wants a decision standard that does not overstate compromise."],
    ["Recover", "Software update trust needs review", "The vendor says the package is legitimate, but internal telemetry remains unexplained and software update allowlisting is informal."]
  ], [
    ["Freeze the updater, preserve package hashes and endpoint telemetry, and identify every host that received the update.", "The team stops possible spread while preserving evidence for vendor and internal review.", "Trusted updater alerts need package-level evidence, not only endpoint cleanup."],
    ["Group systems by update version, execution behavior, and demo criticality before deciding rollback scope.", "The team can protect higher-risk systems without grounding every demo by default.", "Supply-chain triage needs both technical grouping and business context."],
    ["Block further updater execution, create a clean demo-device exception path, and document residual risk.", "Containment reduces risk while preserving a narrow path for critical business activity.", "Exceptions need owner approval and monitoring."],
    ["Give customer-facing teams go/no-go criteria based on affected devices, clean build availability, and vendor evidence.", "The business gets a usable decision standard instead of vague reassurance.", "Customer messaging should be tied to observable criteria."],
    ["Assign owners for vendor package validation, update allowlisting, demo-device rebuild standards, and future update monitoring.", "Recovery improves software supply-chain hygiene.", "Vendor assurance should be paired with internal validation."]
  ])
});
const interactiveScenarioLibrary = {
  phishing: [
    { key: "phishing", label: "Featured: M365 account compromise", summary: "Full five-step phishing rehearsal covering risky sign-ins, mailbox rules, executive briefings, and post-incident controls." },
    { key: "phishing-oauth", label: "Focused drill: OAuth consent app", summary: "Practice handling malicious app consent, tenant-wide blocking, user guidance, and consent governance." },
    { key: "phishing-bec", label: "Focused drill: Executive payment request", summary: "Practice BEC-style payment pressure, executive verification, finance holds, and callback controls." }
  ],
  ransomware: [
    { key: "ransomware", label: "Featured: Ransomware disruption", summary: "Full five-step ransomware rehearsal covering detection, containment, business pressure, communications, and recovery." },
    { key: "ransomware-backup", label: "Focused drill: Backup failure", summary: "Practice backup integrity decisions when encrypted files and incomplete restore points collide." },
    { key: "ransomware-saas-lockout", label: "Focused drill: SaaS admin lockout", summary: "Practice ransomware-adjacent identity recovery when privileged SaaS access and integrations are at risk." }
  ],
  insider: [
    { key: "insider", label: "Featured: Departing employee data exposure", summary: "Full five-step insider rehearsal focused on HR/legal coordination, evidence, fair process, and access cleanup." },
    { key: "insider-contractor", label: "Focused drill: Contractor overshare", summary: "Practice external sharing cleanup, sponsor coordination, data-owner review, and least-privilege access." }
  ],
  ddos: [
    { key: "ddos", label: "Featured: Public service outage", summary: "Full five-step availability rehearsal covering triage, provider filtering, status messaging, and resilience follow-up." },
    { key: "ddos-cloud-dependency", label: "Focused drill: Cloud dependency outage", summary: "Practice dependency failures, provider escalation, workarounds, and impact-focused status updates." }
  ],
  supplyChain: [
    { key: "supplyChain", label: "Featured: Vendor support portal compromise", summary: "Full five-step third-party access rehearsal covering support portal activity, contract terms, monitored exceptions, and restoration gates." },
    { key: "supplyChain-breach-notice", label: "Focused drill: Vendor breach notice", summary: "Practice vague vendor notices, contract obligations, integration containment, and customer-facing criteria." },
    { key: "supplyChain-update-integrity", label: "Focused drill: Vendor update integrity", summary: "Practice suspicious trusted updater behavior, demo continuity, package evidence, and customer go/no-go criteria." }
  ]
};
let interactiveState = null;
function makeInteractiveScenario(title, meterLabels, phaseRows, primaryChoices, alternateChoices = null) {
  const defaultSecondaryChoices = [
    {
      label: "Pause for a broad discussion before assigning owners or containment steps.",
      impact: { containment: -4, evidence: 0, continuity: -6, trust: 0, coordination: -8 },
      outcome: "The conversation surfaces concerns, but time passes without clear ownership.",
      lesson: "Discussion is useful only when it produces decisions, owners, or evidence needs."
    },
    {
      label: "Choose the least disruptive path and revisit the concern after normal work resumes.",
      impact: { containment: -12, evidence: -6, continuity: 10, trust: -6, coordination: -6 },
      outcome: "The business keeps moving, but the response leaves important risk unresolved.",
      lesson: "Business continuity pressure should shape response decisions, not replace them."
    }
  ];
  const meters = Object.fromEntries(
    Object.entries(interactiveMeters).map(([key, meter]) => [
      key,
      { ...meter, label: meterLabels[key] || meter.label }
    ])
  );
  return {
    title,
    meters,
    phases: phaseRows.map(([phase, phaseTitle, inject], index) => {
      const secondaryChoices = alternateChoices?.[index] || defaultSecondaryChoices;
      return {
        phase,
        title: phaseTitle,
        inject,
        choices: [
          {
            label: primaryChoices[index][0],
            impact: { containment: 12, evidence: 10, continuity: 6, trust: 8, coordination: 12 },
            outcome: primaryChoices[index][1],
            lesson: primaryChoices[index][2]
          },
          ...secondaryChoices
        ]
      };
    })
  };
}

function libraryEntriesForIncident(incidentKey = controls.incidentType.value) {
  return interactiveScenarioLibrary[incidentKey] || interactiveScenarioLibrary.phishing;
}

function selectedInteractiveScenarioEntry() {
  const entries = libraryEntriesForIncident();
  const selectedKey = controls.interactiveScenario?.value;
  return entries.find((entry) => entry.key === selectedKey) || entries[0];
}

function selectedInteractiveScenarioKey() {
  return selectedInteractiveScenarioEntry().key;
}

function syncInteractiveScenarioPicker(preferredKey = controls.interactiveScenario?.value) {
  if (!controls.interactiveScenario) {
    return;
  }
  const entries = libraryEntriesForIncident();
  const nextKey = entries.some((entry) => entry.key === preferredKey) ? preferredKey : entries[0].key;
  controls.interactiveScenario.replaceChildren(
    ...entries.map((entry) => {
      const option = document.createElement("option");
      option.value = entry.key;
      option.textContent = entry.label;
      return option;
    })
  );
  controls.interactiveScenario.value = nextKey;
  if (output.interactiveScenarioSummary) {
    output.interactiveScenarioSummary.textContent = selectedInteractiveScenarioEntry().summary;
  }
}

function currentInteractiveScenario() {
  const selectedKey = selectedInteractiveScenarioKey();
  return interactiveScenarios[selectedKey] || interactiveScenarios.phishing;
}

function cloneInteractiveMeters() {
  return Object.fromEntries(
    Object.entries(currentInteractiveScenario().meters).map(([key, meter]) => [key, { ...meter }])
  );
}

function clampMeter(value) {
  return Math.max(0, Math.min(100, value));
}


const formatAdvice = {
  packet: "Full packet is the safest default when you need participant handouts, facilitator notes, evidence prompts, and after-action material.",
  interactive: "Interactive rehearsal fits live meetings where the group should make choices, see consequences, and leave with action items.",
  slides: "Slide facilitation is best when you are running the exercise over Teams or Zoom and need clear pacing for remote participants.",
  worksheet: "Scribe worksheet is best when you already have a scenario and only need a clean way to capture facts, assumptions, decisions, questions, and actions."
};

function setWorkspaceMode(mode = "packet") {
  const nextMode = formatAdvice[mode] ? mode : "packet";
  document.body.dataset.mode = nextMode;
  ui.modeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.modeTarget === nextMode));
  });
  if (ui.formatAdvice) {
    ui.formatAdvice.textContent = formatAdvice[nextMode];
  }
}

function recommendFormat() {
  const mode = ui.formatNeed?.value || "packet";
  setWorkspaceMode(mode);
}

function demoRunState() {
  return {
    incidentType: "phishing",
    orgProfile: "smallBusiness",
    audience: "mixed",
    exerciseFocus: "balanced",
    duration: "60",
    difficulty: "standard",
    groupMode: "whole",
    groupOne: "Whole team",
    seed: "246810",
    rehearsal: "phishing-bec"
  };
}

function loadDemoRun() {
  const demo = demoRunState();
  controls.incidentType.value = demo.incidentType;
  controls.orgProfile.value = demo.orgProfile;
  controls.audience.value = demo.audience;
  controls.exerciseFocus.value = demo.exerciseFocus;
  controls.duration.value = demo.duration;
  controls.difficulty.value = demo.difficulty;
  controls.groupMode.value = demo.groupMode;
  controls.groupOneInput.value = demo.groupOne;
  controls.groupTwoInput.value = "Group 2";
  controls.groupThreeInput.value = "Group 3";
  controls.seedInput.value = demo.seed;
  updateGroupModeFields();
  syncInteractiveScenarioPicker(demo.rehearsal);
  interactiveState = null;
  output.interactiveDebrief.hidden = true;
  resetInteractiveTimer("Ready");
  setWorkspaceMode("interactive");
  generatePacket();
  document.querySelector("#interactiveExercise").scrollIntoView({ behavior: "smooth", block: "start" });
}

function demoFacilitatorSampleText() {
  const scenario = interactiveScenarios["phishing-bec"];
  const setup = demoRunState();
  return [
    "# Demo Run - Executive Payment Request Drill",
    "",
    "Use this sample to evaluate the interactive BEC/runbook/AAR flow without connecting to any external system or entering real organization data.",
    "",
    "## Demo Settings",
    "- Incident family: Credential phishing",
    "- Organization profile: Small business IT team",
    "- Audience: Mixed technical and leadership",
    "- Focus: Balanced readiness",
    "- Duration: 60 minutes",
    "- Difficulty: Standard",
    `- Seed: ${setup.seed}`,
    "",
    "## Facilitator Opening",
    "Today we are practicing how the team handles a realistic executive payment pressure scenario. Work from current process, separate known facts from assumptions, and assign an owner for every follow-up before closing.",
    "",
    "## Starter Inject Timeline",
    ...scenario.phases.map((phase, index) => `${index + 1}. ${phase.phase} - ${phase.title}: ${phase.inject}`),
    "",
    "## Expected Evaluation Path",
    "- Load the BEC demo from the top of the app.",
    "- Review the facilitator runbook and copy the facilitator pre-brief.",
    "- Start the interactive exercise.",
    "- Choose one response option per inject.",
    "- Confirm the after-action report export unlocks after the final choice.",
    "",
    "## Use Boundary",
    "This sample is for educational tabletop review only. Do not enter real credentials, confidential payment details, personal information, or sensitive system details."
  ].join("\n");
}

function copyDemoFacilitatorSample() {
  copyText(demoFacilitatorSampleText(), ui.copyDemoBtn, "Copy sample brief");
}

function ransomwareSamplePacketText() {
  const scenario = scenarios.ransomware;
  const profile = profiles.smallBusiness;
  const focus = focusAdds.operations;
  const guidance = scenarioFacilitatorGuidance.ransomware;
  const timeline = [
    ["T+00", "Initial report", "Help desk tickets spike after users report ransom notes and renamed shared files."],
    ["T+10", "Scope pressure", "A department lead says a deadline-critical folder is unreadable and asks for a recovery estimate."],
    ["T+20", "Containment choice", "Identity logs show unusual administrative activity, but ownership of the account is unclear."],
    ["T+35", "Communications pressure", "Leadership asks whether to brief external stakeholders before the technical scope is complete."],
    ["T+50", "Recovery decision", "Backup staff can restore one system quickly, but the last known-good point is unclear."]
  ];

  return [
    "# Sample Exercise Packet - Ransomware Disruption",
    "",
    "Use this copy-ready packet to evaluate the generator's non-BEC tabletop content without entering real organizational data.",
    "",
    "## Scenario Brief",
    `${scenario.opening} The exercise is intended for ${profile.summary}. Participants should decide what they would do, who owns each decision, what evidence they need, and when the situation should be escalated.`,
    "",
    "## Exercise Objectives",
    ...scenario.objectives.map((objective) => `- ${objective}`),
    `- ${focus.objective}`,
    "",
    "## Starter Inject Timeline",
    ...timeline.map(([time, title, inject]) => `- ${time} - ${title}: ${inject}`),
    "",
    "## Expected Decisions",
    ...scenario.decisions.slice(0, 5).map((decision) => `- ${decision}`),
    "",
    "## Evidence To Capture",
    ...scenarioEvidenceNeeds.ransomware.slice(0, 6).map((item) => `- ${item}`),
    "",
    "## Watch For Gaps",
    ...guidance.watchForGaps.slice(0, 5).map((item) => `- ${item}`),
    "",
    "## AAR Prompts",
    ...aarPrompts.map((prompt) => `- ${prompt}`),
    "",
    "## Use Boundary",
    "This sample is for educational tabletop review only. Do not enter real credentials, confidential incident details, personal information, regulated data, or sensitive system details."
  ].join("\n");
}

function copyRansomwareSamplePacket() {
  copyText(ransomwareSamplePacketText(), ui.copyRansomwareSampleBtn, "Copy ransomware packet");
}

function selectedOptionText(control) {
  return control?.options?.[control.selectedIndex]?.text || "";
}

function currentExerciseSetup() {
  return {
    scenarioKey: selectedInteractiveScenarioKey(),
    incidentKey: controls.incidentType.value,
    scenario: scenarios[controls.incidentType.value],
    profile: profiles[controls.orgProfile.value],
    focus: focusAdds[controls.exerciseFocus.value],
    audienceLabel: selectedOptionText(controls.audience),
    durationLabel: selectedOptionText(controls.duration),
    difficultyLabel: selectedOptionText(controls.difficulty),
    difficulty: difficultyAdds[controls.difficulty.value]
  };
}

function interactiveScenarioTitle(setup = currentExerciseSetup()) {
  if (setup.scenarioKey === "phishing") {
    return "Credential Phishing Decision Rehearsal";
  }
  return `${setup.scenario.label} Decision Rehearsal Preview`;
}

function interactiveScenarioContext(setup = currentExerciseSetup()) {
  return `${setup.durationLabel} ${setup.difficultyLabel.toLowerCase()} exercise for ${setup.profile.summary}. Audience: ${setup.audienceLabel}. Focus: ${setup.focus.label}. The playable path now follows the selected incident type.`;
}

function interactiveIntroText(setup = currentExerciseSetup()) {
  return `Use this mode to rehearse decisions for ${setup.scenario.label.toLowerCase()} with ${setup.focus.label.toLowerCase()} pressure, then compare the team's choices against containment, evidence, continuity, and stakeholder trust.`;
}

function showFieldHelp(button) {
  if (!ui.fieldHelp || !ui.fieldHelpTitle || !ui.fieldHelpText) {
    return;
  }
  const label = button.closest(".field-label")?.firstChild?.textContent?.trim() || "Field help";
  const field = button.closest(".field");
  ui.helpButtons.forEach((helpButton) => helpButton.setAttribute("aria-expanded", "false"));
  button.setAttribute("aria-expanded", "true");
  ui.fieldHelpTitle.textContent = label;
  ui.fieldHelpText.textContent = button.dataset.help || "This field changes the generated exercise output.";
  if (field) {
    field.insertAdjacentElement("afterend", ui.fieldHelp);
  }
  ui.fieldHelp.hidden = false;
  ui.fieldHelp.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function hideFieldHelp() {
  if (ui.fieldHelp) {
    ui.fieldHelp.hidden = true;
  }
  ui.helpButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
}
function interactiveDurationSeconds() {
  const minutes = Number.parseInt(controls.duration.value, 10) || 60;
  return minutes * 60;
}

function formatTimer(seconds) {
  const safeSeconds = Math.max(0, seconds);
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds % 60;
  return `${minutes}:${String(remainder).padStart(2, "0")}`;
}

function updateInteractiveTimerDisplay(statusText = null) {
  if (!output.interactiveTimer || !output.interactiveTimerStatus) {
    return;
  }
  output.interactiveTimer.textContent = formatTimer(interactiveTimerRemaining || interactiveDurationSeconds());
  const defaultStatus = interactiveTimerRunning
    ? "Running"
    : interactiveTimerRemaining > 0 && interactiveTimerRemaining < interactiveDurationSeconds()
      ? "Paused"
      : "Ready";
  output.interactiveTimerStatus.textContent = statusText || (interactiveTimerRemaining === 0 ? "Time expired" : defaultStatus);
  const toggleTimerBtn = document.querySelector("#toggleTimerBtn");
  if (toggleTimerBtn) {
    toggleTimerBtn.textContent = interactiveTimerRunning ? "Pause timer" : "Start timer";
  }
}

function stopInteractiveTimer(statusText = "Paused") {
  if (interactiveTimerInterval) {
    window.clearInterval(interactiveTimerInterval);
    interactiveTimerInterval = null;
  }
  interactiveTimerRunning = false;
  updateInteractiveTimerDisplay(statusText);
}

function resetInteractiveTimer(statusText = "Ready") {
  if (interactiveTimerInterval) {
    window.clearInterval(interactiveTimerInterval);
    interactiveTimerInterval = null;
  }
  interactiveTimerRunning = false;
  interactiveTimerRemaining = interactiveDurationSeconds();
  updateInteractiveTimerDisplay(statusText);
}

function toggleInteractiveTimer() {
  if (!interactiveTimerRemaining) {
    interactiveTimerRemaining = interactiveDurationSeconds();
  }
  if (interactiveTimerRunning) {
    stopInteractiveTimer();
    return;
  }
  interactiveTimerRunning = true;
  updateInteractiveTimerDisplay("Running");
  interactiveTimerInterval = window.setInterval(() => {
    interactiveTimerRemaining = Math.max(0, interactiveTimerRemaining - 1);
    if (interactiveTimerRemaining === 0) {
      stopInteractiveTimer("Time expired");
      return;
    }
    updateInteractiveTimerDisplay("Running");
  }, 1000);
}

function addInteractiveTimerMinutes(minutes) {
  interactiveTimerRemaining = (interactiveTimerRemaining || interactiveDurationSeconds()) + minutes * 60;
  updateInteractiveTimerDisplay(interactiveTimerRunning ? "Running" : "Time added");
}

function currentInteractivePhase() {
  const scenario = currentInteractiveScenario();
  if (!interactiveState || interactiveState.step >= scenario.phases.length) {
    return null;
  }
  return scenario.phases[interactiveState.step];
}

function facilitatorNotesForCurrentPhase() {
  const setup = currentExerciseSetup();
  const phase = currentInteractivePhase();

  if (!phase) {
    return [
      `Exercise profile: ${setup.durationLabel}, ${setup.difficultyLabel.toLowerCase()}, ${setup.audienceLabel}.`,
      "Use the reveal to assign owners for weak meters before closing the meeting.",
      "Capture open facts, assumptions, decisions, and questions while they are still fresh."
    ];
  }

  const lastDecision = interactiveState?.path?.at(-1);
  const notes = [
    `Phase objective: ${phaseObjectives[phase.phase] || "Drive the team toward one concrete decision."}`,
    `Decision prompt: Which option would the team actually choose, who approves it, and what evidence supports it?`,
    `Watch for: unresolved owner, missing evidence source, unclear executive briefing path, or business continuity assumption.`
  ];

  if (lastDecision) {
    notes.push(`Previous outcome: ${lastDecision.outcome}`);
  }

  return notes;
}

function renderInteractiveFacilitatorNotes() {
  if (!output.interactiveFacilitatorNotes || !output.interactiveFacilitatorNotesList || !output.toggleFacilitatorNotesBtn) {
    return;
  }
  output.interactiveFacilitatorNotes.hidden = !interactiveFacilitatorNotesVisible;
  output.toggleFacilitatorNotesBtn.textContent = interactiveFacilitatorNotesVisible ? "Hide facilitator notes" : "Show facilitator notes";
  output.toggleFacilitatorNotesBtn.setAttribute("aria-expanded", String(interactiveFacilitatorNotesVisible));
  output.interactiveFacilitatorNotesList.replaceChildren(
    ...facilitatorNotesForCurrentPhase().map((note) => {
      const item = document.createElement("li");
      item.textContent = note;
      return item;
    })
  );
}

function toggleInteractiveFacilitatorNotes() {
  interactiveFacilitatorNotesVisible = !interactiveFacilitatorNotesVisible;
  renderInteractiveFacilitatorNotes();
}

function currentInjectCopyText() {
  const scenario = currentInteractiveScenario();
  const phase = currentInteractivePhase();
  const setup = currentExerciseSetup();
  const entry = selectedInteractiveScenarioEntry();

  if (!phase) {
    return interactiveDebriefReady()
      ? interactiveDebriefText()
      : [
        `# ${scenario.title}`,
        "",
        "## Exercise Context",
        ...facilitatorExportContextLines(setup, entry),
        "",
        interactiveIntroText(setup),
        "",
        interactiveScenarioContext(setup)
      ].join("\n");
  }

  return [
    `# ${scenario.title} - ${phase.phase}`,
    "",
    "## Exercise Context",
    ...facilitatorExportContextLines(setup, entry),
    "",
    `Inject: ${phase.title}`,
    phase.inject,
    "",
    "Facilitator notes:",
    ...facilitatorNotesForCurrentPhase().map((note) => `- ${note}`),
    "",
    "Decision options:",
    ...phase.choices.map((choice, index) => `${index + 1}. ${choice.label}`),
    "",
    "Capture before advancing:",
    ...facilitatorCaptureChecklistLines()
  ].join("\n");
}

function copyCurrentInject() {
  copyText(currentInjectCopyText(), document.querySelector("#copyInjectBtn"), "Copy current inject");
}

function facilitatorAgendaItems(scenario, durationMinutes) {
  const setupMinutes = Math.min(10, Math.max(5, Math.round(durationMinutes * 0.15)));
  const closeoutMinutes = Math.min(12, Math.max(8, Math.round(durationMinutes * 0.18)));
  const exerciseMinutes = Math.max(15, durationMinutes - setupMinutes - closeoutMinutes);
  const phaseMinutes = Math.max(5, Math.floor(exerciseMinutes / scenario.phases.length));
  const items = [
    `0-${setupMinutes} min: Welcome, opening script, ground rules, role confirmation, and decision-capture expectations.`
  ];
  let cursor = setupMinutes;

  scenario.phases.forEach((phase, index) => {
    const end = index === scenario.phases.length - 1 ? durationMinutes - closeoutMinutes : cursor + phaseMinutes;
    items.push(`${cursor}-${end} min: ${phase.phase} - ${phase.title}. Drive one decision, one owner, and one evidence source.`);
    cursor = end;
  });

  items.push(`${durationMinutes - closeoutMinutes}-${durationMinutes} min: After-action capture, owner assignments, next meeting date, and executive readout needs.`);
  return items;
}

function facilitatorPreReadItems(setup, scenario, entry) {
  const items = [
    "Bring the current incident response plan, escalation roster, communications approval path, and any relevant system owner contacts.",
    "Stage the FADQ worksheet, action tracker, facilitator timer, selected scenario link, and after-action export template.",
    "Confirm who can approve containment, user communications, executive updates, vendor outreach, and recovery priorities.",
    "Ask participants to answer from current practice, not ideal future process.",
    "Do not distribute facilitator notes or expected outcomes to participants before the exercise."
  ];
  const incidentKey = setup.incidentKey;
  const scenarioKey = entry.key;

  if (incidentKey === "phishing" || scenarioKey.includes("phishing")) {
    items.push("Have Microsoft 365 sign-in, mailbox rule, message trace, session revocation, and suspicious consent evidence sources in mind.");
  }
  if (scenarioKey.includes("bec")) {
    items.push("Confirm the out-of-band verification path for payment, vendor banking, executive, or finance-related requests.");
  }
  if (incidentKey === "ransomware" || scenarioKey.includes("ransomware")) {
    items.push("Know who can approve isolation, backup validation, restore priority, administrator recovery, and business continuity workarounds.");
  }
  if (incidentKey === "insider" || scenarioKey.includes("insider")) {
    items.push("Prepare HR, legal, data owner, access review, and evidence preservation decision paths.");
  }
  if (incidentKey === "ddos" || scenarioKey.includes("outage")) {
    items.push("Confirm service status, provider escalation, public status page, customer workaround, and monitoring contact paths.");
  }
  if (incidentKey === "supplyChain" || scenarioKey.includes("supplyChain")) {
    items.push("Have vendor support, contract owner, integration owner, update/package evidence, and customer notification paths ready.");
  }

  return items;
}

function facilitatorParticipantRoles(setup) {
  const profileRole = setup.profile?.roleAdd ? [setup.profile.roleAdd] : [];
  return [...(roleSets[controls.audience.value] || roleSets.mixed), ...profileRole];
}

function facilitatorGroupLine() {
  if (controls.groupMode.value === "whole") {
    return "Whole-room discussion";
  }
  return [controls.groupOneInput.value, controls.groupTwoInput.value, controls.groupThreeInput.value]
    .map((name) => name.trim())
    .filter(Boolean)
    .join(", ");
}

function facilitatorDurationPhrase(setup) {
  return setup.durationLabel.replace(" minutes", "-minute").replace(" minute", "-minute");
}

function facilitatorExportContextLines(setup = currentExerciseSetup(), entry = selectedInteractiveScenarioEntry()) {
  return [
    `- Incident family: ${setup.scenario.label}`,
    `- Interactive scenario: ${entry.label}`,
    `- Organization profile: ${setup.profile.label}`,
    `- Audience: ${setup.audienceLabel}`,
    `- Focus: ${setup.focus.label}`,
    `- Duration: ${setup.durationLabel}`,
    `- Difficulty: ${setup.difficultyLabel}`,
    `- Group mode: ${facilitatorGroupLine()}`,
    `- Seed: ${controls.seedInput.value || "not set"}`
  ];
}

function facilitatorCaptureChecklistLines() {
  return [
    "- Decision made:",
    "- Decision owner:",
    "- Evidence or record to preserve:",
    "- Open question:",
    "- Follow-up owner and due date:"
  ];
}

function facilitatorPreBriefText() {
  const setup = currentExerciseSetup();
  const scenario = currentInteractiveScenario();
  const entry = selectedInteractiveScenarioEntry();
  const durationMinutes = Number(controls.duration.value);

  return [
    `# ${scenario.title} - Facilitator Pre-Brief`,
    "",
    "## Exercise Setup",
    ...facilitatorExportContextLines(setup, entry),
    "",
    "## Opening Script",
    `Welcome to a ${facilitatorDurationPhrase(setup).toLowerCase()} no-fault tabletop exercise for ${setup.scenario.label.toLowerCase()}. Today we are using ${scenario.title}. The goal is to practice how we make decisions with incomplete information, how we brief leadership, and how we assign owners for follow-up work.`,
    "Please answer from current practice. If a policy, tool, owner, or contact path is unclear, capture that as an action item instead of trying to solve it during the exercise. This is a discussion exercise, not legal, regulatory, or technical advice.",
    "",
    "## Facilitator Agenda",
    listText(facilitatorAgendaItems(scenario, durationMinutes)),
    "",
    "## Participant Roles",
    listText(facilitatorParticipantRoles(setup)),
    "",
    "## Pre-Read Checklist",
    listText(facilitatorPreReadItems(setup, scenario, entry)),
    "",
    "## Materials to Stage",
    listText([
      "Selected interactive scenario and facilitator console.",
      "Current inject copy button for presenter-friendly prompts.",
      "FADQ worksheet for facts, assumptions, decisions, and questions.",
      "Action tracker with owner, due date, and status fields.",
      "After-action report export for decisions, tradeoffs, owners, and next-meeting follow-ups."
    ]),
    "",
    "## Ground Rules",
    listText(groundRules)
  ].join("\n");
}

function copyFacilitatorPreBrief() {
  copyText(facilitatorPreBriefText(), document.querySelector("#copyPreBriefBtn"), "Copy facilitator pre-brief");
}

function renderFacilitatorRunbook() {
  const setup = currentExerciseSetup();
  const scenario = currentInteractiveScenario();
  const entry = selectedInteractiveScenarioEntry();
  const totalSteps = scenario.phases.length;
  const currentStep = interactiveState ? Math.min(interactiveState.step + 1, totalSteps) : 0;
  const isComplete = Boolean(interactiveState && interactiveState.step >= totalSteps);
  const consoleState = isComplete
    ? "complete"
    : interactiveState
      ? `running step ${currentStep} of ${totalSteps}`
      : "ready";

  output.runbookStatus.textContent = isComplete
    ? "Exercise complete. Export the AAR while decisions are fresh."
    : interactiveState
      ? "Live session in progress. Keep decisions, evidence, and owners visible."
      : "Ready to prepare.";
  output.runbookScenario.textContent = `${entry.label}: ${scenario.title} for a ${facilitatorDurationPhrase(setup).toLowerCase()} ${setup.difficultyLabel.toLowerCase()} session.`;
  output.runbookPreBrief.textContent = `Copy the facilitator pre-brief, confirm roles for ${setup.audienceLabel.toLowerCase()}, and stage the FADQ worksheet before starting.`;
  output.runbookConsole.textContent = `Console ${consoleState}: use the timer, copy current inject, and reveal facilitator notes as the group makes choices.`;
  output.runbookAar.textContent = isComplete
    ? "AAR export is unlocked. Copy the after-action report, assign owners, and schedule the next review."
    : "AAR export unlocks after the final choice. Capture decision owners during each inject.";
}

function startInteractiveExercise() {
  setWorkspaceMode("interactive");
  output.copyInteractiveDebriefBtn.disabled = true;
  output.copyAarSummaryBtn.disabled = true;
  resetInteractiveTimer("Ready");
  interactiveState = {
    scenarioKey: selectedInteractiveScenarioKey(),
    incidentKey: controls.incidentType.value,
    step: 0,
    meters: cloneInteractiveMeters(),
    path: []
  };
  output.interactiveDebrief.hidden = true;
  renderInteractiveExercise();
}

function resetInteractiveExercise() {
  interactiveState = null;
  output.interactiveDebrief.hidden = true;
  output.copyAarSummaryBtn.disabled = true;
  renderInteractiveIntro();
}

function renderInteractiveMeters(meters) {
  output.interactiveMeters.replaceChildren(
    ...Object.entries(meters).map(([key, meter]) => {
      const card = document.createElement("article");
      const label = document.createElement("strong");
      const track = document.createElement("div");
      const fill = document.createElement("span");
      const value = document.createElement("em");
      card.className = "meter-card";
      track.className = "meter-track";
      fill.style.width = `${clampMeter(meter.value)}%`;
      value.textContent = `${clampMeter(meter.value)}`;
      label.textContent = meter.label;
      track.append(fill);
      card.append(label, track, value);
      card.dataset.meter = key;
      return card;
    })
  );
}

function renderInteractiveIntro() {
  syncInteractiveScenarioPicker();
  const setup = currentExerciseSetup();
  output.copyInteractiveDebriefBtn.disabled = true;
  output.copyAarSummaryBtn.disabled = true;
  renderInteractiveMeters(currentInteractiveScenario().meters);
  output.interactivePhase.textContent = "Ready";
  output.interactiveTitle.textContent = currentInteractiveScenario().title;
  output.interactiveInjectTitle.textContent = currentInteractiveScenario().title;
  output.interactiveInjectText.textContent = interactiveIntroText(setup);
  output.interactiveContext.textContent = interactiveScenarioContext(setup);
  output.interactiveChoices.replaceChildren();
  if (!interactiveTimerRunning) {
    interactiveTimerRemaining = interactiveDurationSeconds();
  }
  updateInteractiveTimerDisplay();
  renderFacilitatorRunbook();
  renderInteractiveFacilitatorNotes();
}

function renderInteractiveExercise() {
  if (!interactiveState) {
    renderInteractiveIntro();
    return;
  }
  if (interactiveState.scenarioKey !== selectedInteractiveScenarioKey() || interactiveState.incidentKey !== controls.incidentType.value) {
    resetInteractiveExercise();
    return;
  }
  const scenario = currentInteractiveScenario();
  const phase = scenario.phases[interactiveState.step];
  output.interactiveTitle.textContent = currentInteractiveScenario().title;
  renderInteractiveMeters(interactiveState.meters);
  output.interactivePhase.textContent = `${phase.phase} / step ${interactiveState.step + 1} of ${scenario.phases.length}`;
  output.interactiveInjectTitle.textContent = phase.title;
  output.interactiveInjectText.textContent = phase.inject;
  output.interactiveContext.textContent = interactiveScenarioContext();
  output.interactiveChoices.replaceChildren(
    ...phase.choices.map((choice, index) => makeInteractiveChoice(choice, index))
  );
  updateInteractiveTimerDisplay();
  renderFacilitatorRunbook();
  renderInteractiveFacilitatorNotes();
}

function makeInteractiveChoice(choice, index) {
  const button = document.createElement("button");
  const label = document.createElement("strong");
  const hint = document.createElement("span");
  button.className = "choice-card";
  button.type = "button";
  label.textContent = `Option ${index + 1}`;
  hint.textContent = choice.label;
  button.append(label, hint);
  button.addEventListener("click", () => chooseInteractiveOption(choice));
  return button;
}

function chooseInteractiveOption(choice) {
  Object.entries(choice.impact).forEach(([key, delta]) => {
    interactiveState.meters[key].value = clampMeter(interactiveState.meters[key].value + delta);
  });
  interactiveState.path.push({
    phase: currentInteractiveScenario().phases[interactiveState.step].phase,
    title: currentInteractiveScenario().phases[interactiveState.step].title,
    choice: choice.label,
    outcome: choice.outcome,
    lesson: choice.lesson,
    impact: choice.impact
  });
  interactiveState.step += 1;
  if (interactiveState.step >= currentInteractiveScenario().phases.length) {
    renderInteractiveDebrief();
  } else {
    renderInteractiveExercise();
  }
}

function renderInteractiveDebrief() {
  const scenario = currentInteractiveScenario();
  renderInteractiveMeters(interactiveState.meters);
  output.interactivePhase.textContent = "Complete";
  output.interactiveInjectTitle.textContent = "Exercise complete";
  output.interactiveInjectText.textContent = "Review the decision path, tradeoffs, and follow-up owners before closing the meeting.";
  output.interactiveContext.textContent = "Use this reveal as a short after-action review: what worked, what got traded off, and what needs an owner today.";
  output.interactiveChoices.replaceChildren();
  output.interactiveDebrief.hidden = false;
  output.copyInteractiveDebriefBtn.disabled = false;
  output.copyAarSummaryBtn.disabled = false;
  stopInteractiveTimer("Exercise complete");
  renderFacilitatorRunbook();
  renderInteractiveFacilitatorNotes();
  output.interactiveDebriefTitle.textContent = "After-action reveal";

  const summary = document.createElement("p");
  summary.className = "debrief-summary";
  summary.textContent = buildInteractiveDebriefSummary(scenario);

  const scoreGrid = makeInteractiveScoreGrid();
  const pathList = makeInteractivePathList();
  const tradeoffs = makeInteractiveTradeoffList();
  const actions = makeInteractiveActionList();
  const nextMeeting = makeInteractiveNextMeetingList();

  output.interactiveDebriefBody.replaceChildren(
    summary,
    makeDebriefSection("Readiness snapshot", scoreGrid),
    makeDebriefSection("Decision path", pathList),
    makeDebriefSection("Tradeoffs to discuss", tradeoffs),
    makeDebriefSection("Follow-up owners", actions),
    makeDebriefSection("Next meeting follow-ups", nextMeeting)
  );
}

function buildInteractiveDebriefSummary(scenario) {
  const meters = Object.values(interactiveState.meters);
  const strongest = meters.filter((meter) => meter.value >= 70).map((meter) => meter.label);
  const weakest = meters.filter((meter) => meter.value < 50).map((meter) => meter.label);
  const critical = meters.filter((meter) => meter.value <= 40).map((meter) => meter.label);

  if (critical.length) {
    return `${scenario.title} ended with urgent attention needed on ${critical.join(", ")}. Use the remaining time to assign owners before the team leaves the room.`;
  }

  if (strongest.length && weakest.length) {
    return `${scenario.title} produced a mixed result. Strongest areas: ${strongest.join(", ")}. Needs attention: ${weakest.join(", ")}.`;
  }

  if (strongest.length) {
    return `${scenario.title} ended with strong performance in ${strongest.join(", ")}. Confirm the evidence and owners that made those decisions work.`;
  }

  return `${scenario.title} stayed in the middle range. Treat that as a realistic tabletop outcome: useful discussion, but still requiring clearer owners, evidence, and decision thresholds.`;
}

function makeInteractiveScoreGrid() {
  const grid = document.createElement("dl");
  grid.className = "debrief-score-grid";

  Object.entries(interactiveState.meters).forEach(([key, meter]) => {
    const item = document.createElement("div");
    const term = document.createElement("dt");
    const detail = document.createElement("dd");
    item.dataset.meter = key;
    term.textContent = meter.label;
    detail.textContent = `${meter.value} - ${meterInterpretation(meter.value)}`;
    item.append(term, detail);
    grid.append(item);
  });

  return grid;
}

function makeInteractivePathList() {
  const list = document.createElement("ol");
  list.className = "debrief-path";

  interactiveState.path.forEach((entry) => {
    const item = document.createElement("li");
    const decision = document.createElement("strong");
    const outcome = document.createElement("p");
    const lesson = document.createElement("p");
    const impact = document.createElement("p");
    decision.textContent = `${entry.phase}: ${entry.choice}`;
    outcome.textContent = entry.outcome;
    lesson.textContent = `Facilitator note: ${entry.lesson}`;
    impact.textContent = `Meter movement: ${formatMeterImpact(entry.impact)}.`;
    item.append(decision, outcome, lesson, impact);
    list.append(item);
  });

  return list;
}

function makeInteractiveTradeoffList() {
  const list = document.createElement("ul");
  list.className = "debrief-tradeoffs";

  interactiveTradeoffItems().forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
  });

  return list;
}

function makeInteractiveActionList() {
  const list = document.createElement("ul");
  list.className = "debrief-actions";

  interactiveActionItems().forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
  });

  return list;
}

function interactiveTradeoffItems() {
  const tradeoffs = interactiveState.path
    .map((entry) => tradeoffFromEntry(entry))
    .filter(Boolean);

  return tradeoffs.length ? tradeoffs : [
    "No single decision created a sharp tradeoff. Ask whether that reflects real confidence, easy choices, or a scenario that needs more pressure."
  ];
}

function interactiveActionItems() {
  const weakMeters = Object.entries(interactiveState.meters)
    .filter(([, meter]) => meter.value < 58)
    .sort(([, first], [, second]) => first.value - second.value);
  const actionKeys = weakMeters.length ? weakMeters.map(([key]) => key) : ["coordination", "evidence"];

  return uniqueItems(actionKeys.map(actionForMeter)).slice(0, 5);
}
function makeInteractiveNextMeetingList() {
  const list = document.createElement("ul");
  list.className = "debrief-actions";

  interactiveNextMeetingItems().forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
  });

  return list;
}

function interactiveNextMeetingItems() {
  const weakMeters = Object.values(interactiveState.meters)
    .filter((meter) => meter.value < 60)
    .sort((first, second) => first.value - second.value)
    .map((meter) => `${meter.label} (${meter.value})`);
  const selectedScenario = selectedInteractiveScenarioEntry().label;
  const weakestText = weakMeters.length ? weakMeters.slice(0, 3).join(", ") : "no meter below 60";

  return [
    `Schedule a 20-minute closeout within five business days to review ${weakestText}.`,
    `Update the exercise record with the selected scenario (${selectedScenario}), seed ${controls.seedInput.value}, timer status, and decision path.`,
    "Confirm one owner, due date, and evidence artifact for each follow-up action before the next tabletop.",
    "Re-run this drill or an adjacent focused drill after the highest-risk owner actions are complete."
  ];
}

function interactiveDecisionEvidenceItems() {
  return interactiveState.path.map((entry, index) => ({
    heading: `${index + 1}. ${entry.phase} - ${entry.title}`,
    decision: entry.choice,
    outcome: entry.outcome,
    evidence: evidencePromptForPhase(entry.phase),
    meterMovement: formatMeterImpact(entry.impact)
  }));
}

function evidencePromptForPhase(phase) {
  const prompts = {
    Detect: "Preserve the initial report, alert source, timestamps, affected user or system, and original message or log artifact.",
    Triage: "Record facts, assumptions, affected scope, decision authority, and the evidence that changed the team from monitoring to response.",
    Contain: "Record containment approval, systems or accounts touched, rollback criteria, business exception, and evidence preservation decision.",
    Communicate: "Save approved internal or external language, audience, sender, approval path, and next update time.",
    Recover: "Record restoration criteria, monitoring owner, control improvement, due date, and evidence needed for program records."
  };
  return prompts[phase] || "Record the decision owner, supporting evidence, unresolved assumptions, and next review time.";
}

function interactiveCloseoutQuestions() {
  return [
    "What decision would have been hardest to make in a real incident, and who would approve it?",
    "Which evidence source mattered most, and can the team retrieve it quickly today?",
    "Which communication would leadership need first if this happened tomorrow?",
    "What owner action must be finished before the next exercise or audit review?"
  ];
}

function reportLineItems(items) {
  return items.length ? items.map((item) => `- ${item}`) : ["- None captured."];
}

function makeDebriefSection(title, content) {
  const section = document.createElement("section");
  const heading = document.createElement("h5");
  section.className = "debrief-section";
  heading.textContent = title;
  section.append(heading, content);
  return section;
}

function meterInterpretation(value) {
  if (value >= 75) return "strong control point";
  if (value >= 60) return "working, but verify assumptions";
  if (value >= 45) return "fragile and worth discussing";
  return "needs an owner before closeout";
}

function formatMeterImpact(impact) {
  return Object.entries(impact)
    .filter(([, value]) => value !== 0)
    .map(([key, value]) => `${interactiveState.meters[key].label} ${value > 0 ? "+" : ""}${value}`)
    .join(", ") || "no meter change";
}

function tradeoffFromEntry(entry) {
  const gains = Object.entries(entry.impact)
    .filter(([, value]) => value >= 10)
    .map(([key]) => interactiveState.meters[key].label);
  const costs = Object.entries(entry.impact)
    .filter(([, value]) => value <= -8)
    .map(([key]) => interactiveState.meters[key].label);

  if (!gains.length || !costs.length) return null;
  return `${entry.phase}: gained ${gains.join(", ")} but paid for it in ${costs.join(", ")}. Ask whether the team would accept that tradeoff in a real incident.`;
}

function actionForMeter(key) {
  const actions = {
    containment: "Technical lead: define the next containment trigger, approval authority, and rollback condition.",
    evidence: "Scribe or compliance owner: capture the timeline, evidence sources, decision approvals, and unresolved facts.",
    continuity: "Service owner or operations lead: name the minimum viable work process and recovery priority for the next business cycle.",
    trust: "Leadership or communications owner: draft the next internal update with known facts, unknowns, and the next update time.",
    coordination: "Facilitator or incident lead: assign owners for the next decision, next briefing, and next evidence checkpoint."
  };
  return actions[key] || "Facilitator: assign one concrete owner and due date before the exercise ends.";
}

function uniqueItems(items) {
  return [...new Set(items)];
}

function interactiveDebriefReady() {
  return Boolean(
    interactiveState &&
    interactiveState.path.length &&
    interactiveState.step >= currentInteractiveScenario().phases.length
  );
}

function interactiveDebriefText() {
  if (!interactiveDebriefReady()) {
    return "No completed interactive after-action reveal is available yet.";
  }

  const scenario = currentInteractiveScenario();
  const setup = currentExerciseSetup();
  const generatedAt = new Date().toLocaleString();
  const scenarioEntry = selectedInteractiveScenarioEntry();
  const timerStatus = output.interactiveTimerStatus?.textContent || "not started";
  const timerRemaining = formatTimer(interactiveTimerRemaining || 0);
  const scoreLines = Object.values(interactiveState.meters)
    .map((meter) => `- ${meter.label}: ${meter.value} - ${meterInterpretation(meter.value)}`);
  const decisionLines = interactiveDecisionEvidenceItems().flatMap((entry) => [
    entry.heading,
    `   Decision: ${entry.decision}`,
    `   Outcome: ${entry.outcome}`,
    `   Evidence or record to preserve: ${entry.evidence}`,
    `   Meter movement: ${entry.meterMovement}.`
  ]);
  const pathLines = interactiveState.path.flatMap((entry, index) => [
    `${index + 1}. ${entry.phase}: ${entry.choice}`,
    `   Outcome: ${entry.outcome}`,
    `   Facilitator note: ${entry.lesson}`,
    `   Meter movement: ${formatMeterImpact(entry.impact)}.`
  ]);
  const tradeoffLines = reportLineItems(interactiveTradeoffItems());
  const actionLines = reportLineItems(interactiveActionItems());
  const nextMeetingLines = reportLineItems(interactiveNextMeetingItems());
  const closeoutLines = reportLineItems(interactiveCloseoutQuestions());

  return [
    `# ${scenario.title} - Facilitator After-Action Report`,
    "",
    "## Exercise Snapshot",
    `Generated: ${generatedAt}`,
    ...facilitatorExportContextLines(setup, scenarioEntry),
    `Timer remaining: ${timerRemaining} (${timerStatus})`,
    `Use boundary: educational tabletop planning aid; not legal, compliance, or incident-response advice.`,
    "",
    "## Facilitator Summary",
    buildInteractiveDebriefSummary(scenario),
    "",
    "## Readiness Snapshot",
    ...scoreLines,
    "",
    "## Key Decisions and Evidence",
    ...decisionLines,
    "",
    "## Decision Path Detail",
    ...pathLines,
    "",
    "## Tradeoffs to Discuss",
    ...tradeoffLines,
    "",
    "## Owner Action Register",
    ...actionLines,
    "",
    "## Next Meeting Follow-Ups",
    ...nextMeetingLines,
    "",
    "## Closeout Capture Checklist",
    ...facilitatorCaptureChecklistLines(),
    "",
    "## Facilitator Closeout Questions",
    ...closeoutLines
  ].join("\n");
}

function interactiveAarSummaryText() {
  if (!interactiveDebriefReady()) {
    return "No completed interactive after-action summary is available yet.";
  }

  const scenario = currentInteractiveScenario();
  const setup = currentExerciseSetup();
  const scenarioEntry = selectedInteractiveScenarioEntry();
  const generatedAt = new Date().toLocaleString();
  const timerStatus = output.interactiveTimerStatus?.textContent || "not started";
  const timerRemaining = formatTimer(interactiveTimerRemaining || 0);
  const weakMeters = Object.values(interactiveState.meters)
    .filter((meter) => meter.value < 70)
    .map((meter) => `${meter.label}: ${meter.value}`);
  const decisionLines = interactiveState.path.map(
    (entry, index) => `${index + 1}. ${entry.phase}: ${entry.choice} -> ${entry.outcome}`
  );
  const gapLines = interactiveTradeoffItems().slice(0, 4).map((item) => `- ${item}`);
  const actionLines = interactiveActionItems().slice(0, 4).map((item) => `- ${item}`);
  const nextMeetingLines = interactiveNextMeetingItems().slice(0, 3).map((item) => `- ${item}`);

  return [
    `# AAR Summary - ${scenario.title}`,
    "",
    "## Exercise Context",
    `- Generated: ${generatedAt}`,
    ...facilitatorExportContextLines(setup, scenarioEntry),
    `- Timer remaining: ${timerRemaining} (${timerStatus})`,
    "",
    "## What Happened",
    buildInteractiveDebriefSummary(scenario),
    "",
    "## Decisions Made",
    ...decisionLines,
    "",
    "## Gaps Observed",
    ...(gapLines.length ? gapLines : ["- No major tradeoff gaps were generated from this path."]),
    "",
    "## Follow-Up Actions",
    ...actionLines,
    "",
    "## Next Review",
    ...nextMeetingLines,
    "",
    "## Capture Checklist",
    ...facilitatorCaptureChecklistLines(),
    "",
    "## Readiness Watch",
    weakMeters.length ? `Review these lower-scoring areas: ${weakMeters.join(", ")}.` : "No readiness meter finished below 70.",
    "",
    "Use boundary: educational tabletop planning aid; not legal, compliance, or incident-response advice."
  ].join("\n");
}

function copyInteractiveAarSummary() {
  copyText(interactiveAarSummaryText(), output.copyAarSummaryBtn, "Copy AAR summary");
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

function makeBlankRows(rowCount, columnCount) {
  return Array.from({ length: rowCount }, () => {
    const tr = document.createElement("tr");
    Array.from({ length: columnCount }, () => {
      const td = document.createElement("td");
      td.textContent = "";
      tr.append(td);
    });
    return tr;
  });
}

function renderBlankWorksheet() {
  output.blankWorksheetTitle.textContent = `${output.packetTitle.textContent} Worksheet`;
  output.blankWorksheetSummary.textContent =
    "Use this blank form during live facilitation to capture facts, assumptions, decisions, open questions, owners, and follow-up actions.";
  output.blankFadqRows.replaceChildren(...makeBlankRows(6, 4));
  output.blankActionRows.replaceChildren(...makeBlankRows(6, 4));
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
    "Who owns the next update to leadership, service leads, or support teams?"
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

function blankWorksheetText() {
  const fadqRows = Array.from({ length: 6 }, (_, index) =>
    [
      `### FADQ Row ${index + 1}`,
      "- Known fact:",
      "- Assumption:",
      "- Decision:",
      "- Open question:"
    ].join("\n")
  ).join("\n\n");
  const actionRows = Array.from({ length: 6 }, (_, index) =>
    [
      `### Action Row ${index + 1}`,
      "- Item / decision:",
      "- Owner:",
      "- Due:",
      "- Status / notes:"
    ].join("\n")
  ).join("\n\n");

  return [
    `# ${output.packetTitle.textContent} - Blank Facilitator Worksheet`,
    output.packetSummary.textContent,
    "## Exercise Profile",
    output.exerciseProfile.innerText,
    "## Use Note",
    useNoteText(),
    "## Facts, Assumptions, Decisions, Questions",
    fadqRows,
    "## Decision and Action Tracker",
    actionRows
  ].join("\n\n").trim();
}

function makeSlide(eyebrow, title, body = [], items = []) {
  const section = document.createElement("section");
  const label = document.createElement("p");
  const heading = document.createElement("h2");
  section.className = "slide";
  if (items.length >= 6 || body.join(" ").length > 360) {
    section.classList.add("slide-dense");
  }
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

function makeSlideFromData(slide, audience = "facilitator") {
  const body = audience === "participant" && slide.participantBody ? slide.participantBody : slide.body;
  const items = audience === "participant" && slide.participantItems ? slide.participantItems : slide.items;
  return makeSlide(slide.eyebrow, slide.title, body, items);
}

function facilitatorNotes(title, items = []) {
  return { title, items };
}

function buildSlideData(timeline, decisions) {
  const groups = getGroupLabels();
  const profileLines = [...output.exerciseProfile.querySelectorAll("dt")].map((term) => {
    const detail = term.nextElementSibling?.textContent || "";
    return `${term.textContent}: ${detail}`;
  });
  const factItems = getListItems(output.initialConditions);
  const objectiveItems = getListItems(output.objectives);
  const discussionItems = getListItems(output.discussionPrompts).slice(0, 5);
  const evidenceItemsForSlides = getListItems(output.evidencePrompts).slice(0, 3);
  const aarItemsForSlides = getListItems(output.aarPrompts).slice(0, 3);

  return [
    {
      eyebrow: "Exercise deck",
      title: output.packetTitle.textContent,
      body: [output.packetSummary.textContent],
      items: profileLines.slice(0, 8),
      participantSafe: true,
      notes: facilitatorNotes("Opening", [
        "Confirm the audience and exercise scope before starting.",
        "Remind participants this is an exercise, not an incident declaration.",
        "Keep the packet available as a backup if screen share fails."
      ])
    },
    {
      eyebrow: "Remote / hybrid facilitation",
      title: "Remote Facilitation Ground Rules",
      body: ["Use this deck to pace the exercise when participants are not all in the same room."],
      items: buildRemoteFacilitationItems(groups),
      participantSafe: true,
      notes: facilitatorNotes("Remote Facilitation Ground Rules", [
        "Pause after each major slide and invite quiet groups by name.",
        "Use chat only for links, clarifying questions, and scribe handoffs.",
        "If the meeting platform fails, continue from the downloaded packet."
      ])
    },
    {
      eyebrow: "Remote / hybrid facilitation",
      title: groups.length === 1 ? "Participant Check-In" : "Group Check-In",
      body: [groups.length === 1 ? "Confirm the room is ready before revealing the scenario." : "Confirm each group is ready before revealing the scenario."],
      items: [
        ...groups.map((group) => `${group}: spokesperson, backup, and local notes owner confirmed.`),
        "Facilitator: confirm recording, chat use, and shared notes expectations."
      ],
      participantItems: groups.map((group) => `${group}: spokesperson, backup, and local notes owner confirmed.`),
      participantSafe: true,
      notes: facilitatorNotes(groups.length === 1 ? "Participant Check-In" : "Group Check-In", [
        groups.length === 1 ? "Do not begin until the spokesperson and notes owner are clear." : "Do not begin until every group has a spokesperson.",
        "Confirm who is taking shared notes and where action items will land.",
        "Set expectations for who may speak during time-boxed injects."
      ])
    },
    {
      eyebrow: "Participant briefing",
      title: "Scenario Brief",
      body: [output.scenarioBrief.textContent],
      items: [],
      participantSafe: true,
      notes: facilitatorNotes("Scenario Brief", [
        "Read the scenario slowly and avoid adding ungenerated facts.",
        "Ask whether participants need any term clarified before starting.",
        "Do not reveal future injects or expected answers."
      ])
    },
    {
      eyebrow: "Participant briefing",
      title: "Initial Conditions",
      body: [],
      items: factItems,
      participantSafe: true,
      notes: facilitatorNotes("Initial Conditions", [
        "Treat these as the only facts available at the start.",
        "If participants invent facts, capture them as assumptions.",
        "Point the scribe to the Facts / Assumptions / Decisions / Questions worksheet."
      ])
    },
    {
      eyebrow: "Participant briefing",
      title: "Objectives",
      body: [],
      items: objectiveItems,
      participantSafe: true,
      notes: facilitatorNotes("Objectives", [
        "Tie discussion back to these objectives when conversation drifts.",
        "Balance technical, communication, recovery, evidence, and leadership decisions.",
        "Keep the exercise focused on decision quality, not perfect technical detail."
      ])
    },
    {
      eyebrow: "Exercise flow",
      title: "Inject Timeline Overview",
      body: [],
      items: timeline.map((item) => `${item.time} - ${item.phase}: ${item.text}`),
      participantSafe: false,
      notes: facilitatorNotes("Inject Timeline Overview", [
        "Facilitator-only pacing slide; do not screen share in participant mode.",
        "Use this to decide where to pause, skip, or extend discussion.",
        "If time runs short, prioritize the phase with the most unresolved decisions."
      ])
    },
    ...timeline.map((item) => ({
      eyebrow: `${item.time} / ${item.phase}`,
      title: `${item.phase} Inject`,
      body: [item.text],
      items: [
        ...groups.map((group) => `${group}: What do you know, need, or recommend?`),
        "Scribe: capture facts, assumptions, decisions, and open questions."
      ],
      participantItems: groups.map((group) => `${group}: What do you know, need, or recommend?`),
      participantSafe: true,
      notes: facilitatorNotes(`${item.phase} Inject`, [
        `Phase objective: ${phaseObjectives[item.phase]}`,
        groups.length === 1 ? "Ask for facts first, then assumptions, then decisions." : groups.length === 1 ? "Ask for facts first, then assumptions, then decisions." : "Ask each group for facts first, then assumptions, then decisions.",
        "Capture unresolved questions before advancing.",
        "Avoid confirming whether participant theories are correct unless the packet says so."
      ])
    })),
    {
      eyebrow: "Facilitated discussion",
      title: "Discussion Prompts",
      body: ["Use these prompts when the group has answered the immediate inject questions."],
      items: discussionItems,
      participantSafe: false,
      notes: facilitatorNotes("Discussion Prompts", [
        "Use selectively; do not ask every prompt if the group is already productive.",
        "Prioritize prompts that reveal ownership, escalation, communication, and evidence gaps.",
        "Capture strong comments as after-action evidence."
      ])
    },
    {
      eyebrow: "Facilitated discussion",
      title: "Key Decisions",
      body: [],
      items: decisions,
      participantSafe: false,
      notes: facilitatorNotes("Key Decisions", [
        "Ask who owns each decision in real life.",
        "Capture whether authority is documented or assumed.",
        "Mark any decision that requires policy, legal, business, or executive follow-up."
      ])
    },
    {
      eyebrow: "Scribe capture",
      title: "Facts, Assumptions, Decisions, Questions",
      body: ["Pause here to normalize the shared notes before the next decision point."],
      items: buildScribeCaptureItems(),
      participantSafe: false,
      notes: facilitatorNotes("Scribe Capture", [
        "Use the blank worksheet or shared notes to normalize the exercise record.",
        "Separate confirmed facts from assumptions with an owner to validate each assumption.",
        "Every action item should have an owner and due date before closeout."
      ])
    },
    {
      eyebrow: "Evidence and closeout",
      title: "Evidence and After-Action Prompts",
      body: ["Use this slide to turn discussion into reviewable follow-up."],
      items: [...evidenceItemsForSlides, ...aarItemsForSlides],
      participantSafe: false,
      notes: facilitatorNotes("Evidence and After-Action", [
        "Turn observations into auditable follow-up tasks.",
        "Ask what evidence would prove the organization made timely, reasonable decisions.",
        "Keep improvement items practical enough to assign."
      ])
    },
    {
      eyebrow: "Closeout",
      title: groups.length === 1 ? "Lessons Learned" : "Group Lessons Learned",
      body: [groups.length === 1 ? "Capture one practical improvement before ending the exercise." : "Capture one practical improvement from each group before ending the exercise."],
      items: [
        ...groups.map((group) => `${group}: strongest response step, biggest gap, assigned follow-up.`),
        "Facilitator: confirm owners, due dates, and where the after-action notes will live."
      ],
      participantItems: groups.map((group) => `${group}: strongest response step, biggest gap, assigned follow-up.`),
      participantSafe: true,
      notes: facilitatorNotes(groups.length === 1 ? "Lessons Learned" : "Group Lessons Learned", [
        "Keep closeout concrete and time-boxed.",
        groups.length === 1 ? "Ask for one strength, one gap, and one follow-up." : "Ask for one strength, one gap, and one follow-up from each group.",
        "End by confirming where after-action notes and owners will live."
      ])
    }
  ];
}

function renderSlideDeck(timeline, decisions) {
  currentSlideData = buildSlideData(timeline, decisions);
  output.slideDeck.replaceChildren(
    ...currentSlideData.map((slide) => makeSlideFromData(slide, "facilitator"))
  );
}

function getPresentationSlidesData() {
  if (presentationAudience === "participant") {
    return currentSlideData.filter((slide) => slide.participantSafe !== false);
  }
  return currentSlideData;
}

function renderPresentationNotes(slide) {
  const isVisible = presentationAudience === "facilitator" && presentationNotesVisible;
  output.presentationNotes.classList.toggle("hidden", !isVisible);
  document.querySelector(".presentation-layout").classList.toggle("notes-hidden", !isVisible);
  document.querySelector("#presentationNotesBtn").setAttribute("aria-pressed", String(isVisible));

  if (!isVisible) {
    output.presentationNotesTitle.textContent = "Notes";
    output.presentationNotesList.replaceChildren();
    return;
  }

  const notes = slide.notes || facilitatorNotes(slide.title, ["Use the packet and worksheet to capture decisions."]);
  output.presentationNotesTitle.textContent = notes.title;
  output.presentationNotesList.replaceChildren(
    ...notes.items.map((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    })
  );
}

function updatePresentationAudienceControls() {
  const isParticipant = presentationAudience === "participant";
  document.querySelector("#participantDeckBtn").setAttribute("aria-pressed", String(isParticipant));
  document.querySelector("#facilitatorDeckBtn").setAttribute("aria-pressed", String(presentationAudience === "facilitator"));
  document.querySelector("#presentationNotesBtn").disabled = isParticipant;
  output.presentationStage.classList.toggle("participant-deck-active", isParticipant);
}

function showPresentationSlide(index) {
  const slides = getPresentationSlidesData();
  if (slides.length === 0) {
    return;
  }
  presentationIndex = Math.min(Math.max(index, 0), slides.length - 1);
  const slide = slides[presentationIndex];
  output.presentationSlide.replaceChildren(makeSlideFromData(slide, presentationAudience));
  renderPresentationNotes(slide);
  updatePresentationAudienceControls();
  output.presentationCounter.textContent = `${presentationIndex + 1} / ${slides.length}`;
  document.querySelector("#presentationPrevBtn").disabled = presentationIndex === 0;
  document.querySelector("#presentationNextBtn").disabled = presentationIndex === slides.length - 1;
  if (!output.presentationStage.hidden) {
    updatePresentationUrl();
  }
}

function openPresentationMode(startIndex = 0, audience = presentationAudience) {
  clearPrintMode();
  presentationAudience = audience;
  if (presentationAudience === "participant") {
    presentationNotesVisible = false;
  }
  output.presentationStage.hidden = false;
  document.body.classList.add("presentation-active");
  showPresentationSlide(startIndex);
  document.querySelector("#presentationNextBtn").focus();
}

function closePresentationMode() {
  output.presentationStage.hidden = true;
  document.body.classList.remove("presentation-active");
  output.presentationSlide.replaceChildren();
  updateUrlState();
  document.querySelector("#presentSlidesBtn").focus();
}

function movePresentation(delta) {
  showPresentationSlide(presentationIndex + delta);
}

function setPresentationAudience(audience) {
  presentationAudience = audience;
  if (audience === "participant") {
    presentationNotesVisible = false;
  } else if (!presentationNotesVisible) {
    presentationNotesVisible = true;
  }
  showPresentationSlide(Math.min(presentationIndex, getPresentationSlidesData().length - 1));
}

function togglePresentationNotes() {
  if (presentationAudience === "participant") {
    return;
  }
  presentationNotesVisible = !presentationNotesVisible;
  showPresentationSlide(presentationIndex);
}

function handlePresentationKeydown(event) {
  if (output.presentationStage.hidden) {
    return;
  }
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    movePresentation(1);
  } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    movePresentation(-1);
  } else if (event.key === "Escape") {
    event.preventDefault();
    closePresentationMode();
  } else if (event.key.toLowerCase() === "n") {
    event.preventDefault();
    togglePresentationNotes();
  } else if (event.key.toLowerCase() === "p") {
    event.preventDefault();
    setPresentationAudience("participant");
  } else if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    setPresentationAudience("facilitator");
  }
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
    gm: controls.groupMode.value,
    g1: controls.groupOneInput.value.trim() || (controls.groupMode.value === "whole" ? "Whole team" : "Group 1"),
    g2: controls.groupTwoInput.value.trim() || "Group 2",
    g3: controls.groupThreeInput.value.trim() || "Group 3",
    seed: controls.seedInput.value,
    rehearsal: selectedInteractiveScenarioKey()
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
  const groupMode = params.get("gm");
  controls.groupMode.value = ["whole", "two", "three"].includes(groupMode) ? groupMode : "whole";
  controls.groupOneInput.value = params.get("g1") || (controls.groupMode.value === "whole" ? "Whole team" : "Group 1");
  controls.groupTwoInput.value = params.get("g2") || "Group 2";
  controls.groupThreeInput.value = params.get("g3") || "Group 3";
  updateGroupModeFields();
  syncInteractiveScenarioPicker(params.get("rehearsal"));

  clearPrintMode();
  if (params.get("printView") === "participant") {
    document.body.classList.add("print-participant-only");
  } else if (params.get("printView") === "facilitator") {
    document.body.classList.add("print-facilitator-only");
  } else if (params.get("printView") === "slides") {
    document.body.classList.add("print-slide-deck");
  } else if (params.get("printView") === "worksheet") {
    document.body.classList.add("print-blank-worksheet");
  }

  if (params.get("view") === "present") {
    presentationAudience = params.get("deck") === "facilitator" ? "facilitator" : "participant";
    presentationNotesVisible = presentationAudience === "facilitator" && params.get("notes") !== "off";
    pendingPresentationIndex = Math.max((Number(params.get("slide")) || 1) - 1, 0);
  }
}

function updateUrlState() {
  const state = getState();
  const params = new URLSearchParams(state);
  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, "", nextUrl);
}

function updatePresentationUrl() {
  const params = new URLSearchParams(getState());
  params.set("view", "present");
  params.set("deck", presentationAudience);
  params.set("slide", String(presentationIndex + 1));
  if (presentationAudience === "facilitator" && !presentationNotesVisible) {
    params.set("notes", "off");
  }
  window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
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
  renderBlankWorksheet();
  if (interactiveState) {
    renderInteractiveExercise();
  } else {
    renderInteractiveIntro();
  }
  updateUrlState();
  if (!output.presentationStage.hidden) {
    showPresentationSlide(presentationIndex);
  } else if (pendingPresentationIndex !== null) {
    openPresentationMode(pendingPresentationIndex);
    pendingPresentationIndex = null;
  }
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
    `\nGenerated by Response Rehearsal prototype for ${profile.label}.`
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
    `\nGenerated by Response Rehearsal prototype for ${profile.label}.`
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
  if (!button) {
    return;
  }

  const resetCopyState = () => {
    button.textContent = resetText;
    button.removeAttribute("aria-label");
    delete button.dataset.copyState;
    delete button.dataset.copyTimeout;
  };
  const setCopyState = (state, label, timeout = 1800) => {
    if (button.dataset.copyTimeout) {
      window.clearTimeout(Number(button.dataset.copyTimeout));
    }
    button.textContent = label;
    button.dataset.copyState = state;
    button.setAttribute("aria-label", `${resetText}: ${label}`);
    button.setAttribute("aria-live", "polite");
    button.dataset.copyTimeout = String(window.setTimeout(resetCopyState, timeout));
  };

  try {
    await navigator.clipboard.writeText(text);
    setCopyState("success", "Copied");
  } catch {
    setCopyState("error", "Copy failed", 2400);
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

function copyInteractiveDebrief() {
  copyText(interactiveDebriefText(), output.copyInteractiveDebriefBtn, "Copy after-action reveal");
}

function copyParticipantDeckLink() {
  const params = new URLSearchParams(getState());
  params.set("view", "present");
  params.set("deck", "participant");
  params.set("slide", "1");
  params.delete("notes");
  const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
  copyText(url, document.querySelector("#copyParticipantDeckBtn"), "Copy participant deck link");
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

function downloadBlankWorksheet() {
  const scenario = scenarios[controls.incidentType.value];
  const filename = `${safeFilename(scenario.label)}-blank-worksheet-${controls.seedInput.value}.md`;
  downloadMarkdown(filename, blankWorksheetText());
}

function clearPrintMode() {
  document.body.classList.remove(
    "print-participant-only",
    "print-facilitator-only",
    "print-slide-deck",
    "print-blank-worksheet"
  );
}

function printMode(mode) {
  clearPrintMode();
  if (mode === "participant") {
    document.body.classList.add("print-participant-only");
  } else if (mode === "facilitator") {
    document.body.classList.add("print-facilitator-only");
  } else if (mode === "slides") {
    document.body.classList.add("print-slide-deck");
  } else if (mode === "worksheet") {
    document.body.classList.add("print-blank-worksheet");
  }
  window.print();
}


ui.modeButtons.forEach((button) => {
  button.addEventListener("click", () => setWorkspaceMode(button.dataset.modeTarget));
});

ui.recommendFormatBtn?.addEventListener("click", recommendFormat);
ui.formatNeed?.addEventListener("change", recommendFormat);
ui.demoRunBtn?.addEventListener("click", loadDemoRun);
ui.copyDemoBtn?.addEventListener("click", copyDemoFacilitatorSample);
ui.copyRansomwareSampleBtn?.addEventListener("click", copyRansomwareSamplePacket);

ui.helpButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    showFieldHelp(button);
  });
});

ui.fieldHelpClose?.addEventListener("click", hideFieldHelp);

document.querySelector("#generateBtn").addEventListener("click", generatePacket);
document.querySelector("#startInteractiveBtn").addEventListener("click", startInteractiveExercise);
document.querySelector("#resetInteractiveBtn").addEventListener("click", resetInteractiveExercise);
document.querySelector("#copyInteractiveDebriefBtn").addEventListener("click", copyInteractiveDebrief);
document.querySelector("#copyAarSummaryBtn").addEventListener("click", copyInteractiveAarSummary);
document.querySelector("#toggleTimerBtn").addEventListener("click", toggleInteractiveTimer);
document.querySelector("#addFiveBtn").addEventListener("click", () => addInteractiveTimerMinutes(5));
document.querySelector("#resetTimerBtn").addEventListener("click", () => resetInteractiveTimer("Ready"));
document.querySelector("#copyInjectBtn").addEventListener("click", copyCurrentInject);
document.querySelector("#copyPreBriefBtn").addEventListener("click", copyFacilitatorPreBrief);
document.querySelector("#toggleFacilitatorNotesBtn").addEventListener("click", toggleInteractiveFacilitatorNotes);
document.querySelector("#seedBtn").addEventListener("click", () => {
  controls.seedInput.value = makeSeed();
  generatePacket();
  resetInteractiveTimer("Ready");
  renderInteractiveFacilitatorNotes();
});
document.querySelector("#dailyBtn").addEventListener("click", () => {
  controls.seedInput.value = makeDailySeed();
  generatePacket();
  resetInteractiveTimer("Ready");
  renderInteractiveFacilitatorNotes();
  document.querySelector("#packet").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#printBtn").addEventListener("click", () => printMode("full"));
document.querySelector("#printParticipantBtn").addEventListener("click", () => printMode("participant"));
document.querySelector("#printFacilitatorBtn").addEventListener("click", () => printMode("facilitator"));
document.querySelector("#printWorksheetBtn").addEventListener("click", () => printMode("worksheet"));
document.querySelector("#printSlidesBtn").addEventListener("click", () => printMode("slides"));
document.querySelector("#presentSlidesBtn").addEventListener("click", () => openPresentationMode(0, "facilitator"));
document.querySelector("#presentationPrevBtn").addEventListener("click", () => movePresentation(-1));
document.querySelector("#presentationNextBtn").addEventListener("click", () => movePresentation(1));
document.querySelector("#presentationExitBtn").addEventListener("click", closePresentationMode);
document.querySelector("#participantDeckBtn").addEventListener("click", () => setPresentationAudience("participant"));
document.querySelector("#facilitatorDeckBtn").addEventListener("click", () => setPresentationAudience("facilitator"));
document.querySelector("#presentationNotesBtn").addEventListener("click", togglePresentationNotes);
document.querySelector("#copyBtn").addEventListener("click", copyPacket);
document.querySelector("#copySlidesBtn").addEventListener("click", copySlideOutline);
document.querySelector("#copyLinkBtn").addEventListener("click", copyScenarioLink);
document.querySelector("#copyParticipantDeckBtn").addEventListener("click", copyParticipantDeckLink);
document.querySelector("#downloadBtn").addEventListener("click", downloadPacket);
document.querySelector("#downloadParticipantBtn").addEventListener("click", downloadParticipantHandout);
document.querySelector("#downloadFacilitatorBtn").addEventListener("click", downloadFacilitatorGuide);
document.querySelector("#downloadWorksheetBtn").addEventListener("click", downloadBlankWorksheet);
document.querySelector("#viewPacketBtn").addEventListener("click", () => {
  document.querySelector("#packet").scrollIntoView({ behavior: "smooth", block: "start" });
});

Object.values(controls).forEach((control) => {
  control.addEventListener("change", () => {
    updateGroupModeFields();
    generatePacket();
  resetInteractiveTimer("Ready");
  renderInteractiveFacilitatorNotes();
  });
});

window.addEventListener("afterprint", clearPrintMode);
window.addEventListener("keydown", handlePresentationKeydown);

setWorkspaceMode("packet");
renderInteractiveIntro();
applyStateFromUrl();
generatePacket();
resetInteractiveTimer("Ready");
renderInteractiveFacilitatorNotes();










































