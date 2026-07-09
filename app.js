/* ===================== Data ===================== */
const portfolio = {
  name: "Priti Save",
  role: "Lead Product Designer",
  location: "Mumbai, India",
  available: "Available for select engagements — 2026",
  intro: "I’m a Product Designer with over 12 years of experience shaping how people interact with money, specifically across lending, payments, and consumer finance. I specialize in taking messy, complex financial journeys and turning them into intuitive, human-centered products that actually drive business growth.",
  portrait: "assets/Priti_photo_dark.png",
  email: "pritipatil1992@gmail.com",
  phone: "+91 9004809244",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/priti-patil-save-584734111/" },
    { label: "CV", href: "https://drive.google.com/file/d/14alLKdGIbDZ1OHrkw6L9cHhIWWmYfNik/view?usp=sharing" },
  ],
};

const marquee = ["AI workflows","Product Design","Interaction Design","Design Systems","Prototyping","Research","Team Leadership","UX Architecture","Stakeholder Management"];

const milestones = [
  { number: "08", label: "Years of practice", note: "From bootstrapped startups to public companies." },
  { number: "47", label: "Shipped products", note: "Across iOS, Android, web and embedded surfaces." },
  { number: "12", label: "Design awards", note: "Awwwards, FWA, Communication Arts." },
  { number: "03", label: "Patents filed", note: "Interaction & systems design." },
];

const projects = [
  {
    slug: "flexmoney",
    title: "Building a\nUnified Modular Platform",
    subtitle: "to Scale Merchant & Lender Integrations",
    year: "2025", role: "Lead Product Designer", tag: "Flexmoney",
    cover: "assets/Case_study_1_hero.png",
    duration: "8 months", team: "Product & Engineer Head, 8 Engineers, 2 Designers, Business, Merchant Integrations",
    overview: "Flexmoney had grown to 35M+ customers and 60K+ merchants, with new lending partners joining the ecosystem regularly. But every new integration required a custom-built customer journey, resulting in inconsistent user experiences, longer delivery cycles, and increasing engineering effort.",
    problem: "What once worked for a handful of partners no longer worked at scale. Every integration took months, **delaying revenue, losing business opportunities, increasing engineering costs and slowing expansion.**\n\n## Projected Impact\n\n| Metric | Before | After | Change |\n| --- | --- | --- | --- |\n| **Merchant go-live** | ~5 weeks | ~2.5 weeks | ~50% faster |\n| **Lender onboarding** | ~12 weeks | ~8 weeks | ~40% faster |\n| **Integration engineering effort** | ~15 person-days | ~6 person-days | ~60% less |",
    challenges: "How might we create a **scalable platform** that enables faster merchant and lender onboarding while maintaining a consistent customer experience?",
    why: "As a designer, I started by looking for design problems.\n\nI audited:\n* Merchant journeys\n* Lender journeys\n* Support tickets\n* Engineering implementations\n\n[Detailed report](#)",
    interlude: "I found something much bigger.",
    decisions: "The more I investigated, the clearer it became: we weren't facing a design consistency problem, we were facing a **platform architecture problem.**\n\nFixing the UI would treat the symptoms; redesigning the underlying experience architecture would solve the cause.",
    redefining: "This changed the entire direction of the project.\n\nIt was time to have an honest conversation with Product and Engineering about what was really holding us back.\n\nThe conversations weren't easy. We knew this would extend the project's scope and timeline, but we also knew incremental fixes would only postpone the problem. We aligned on a bold but necessary direction:\n**Build a Modular Orchestration Platform.**",
    redefiningImage: "assets/modular approach.png",
    redefiningImpact: "| Metric | Before | After |\n| --- | --- | --- |\n| **Design effort** | 2–3 weeks | < half day |\n| **Engineering effort** | 15 days | 6 days |\n| **Reusable modules** | 10% | 55% |",
    stakeholders: "**The hardest part was changing how the organization thought about the problem.**\n\nBefore we could build a scalable platform, we had to shift the team's mindset.\n\nTogether, we aligned on three key principles:\n* Move beyond incremental fixes.\n* Invest in a scalable platform foundation.\n* Embrace short-term complexity to unlock long-term growth.\n\nThis level of alignment was only possible through a **strong partnership between Product, Engineering, and Design.**",
    nextSteps: "Created a design system that standardized the platform through:\n* Foundation tokens\n* Semantic tokens\n* Reusable components\n* Configurable variables",
    nextStepsImages: [
      { src: "assets/Foundation.png", label: "Foundation" },
      { src: "assets/Semantic.png", label: "Semantic" },
      { src: "assets/Components.png", label: "Component" },
    ],
    nextSteps2: "Instead of designing end-to-end flows, I broke the experience into reusable modules.\n\nEach module contained:\n* Happy paths\n* Error states\n* Edge cases\n* Variants\n* Merchant overrides\n* Lender overrides",
    modulesImage: "assets/KYC Module.png",
    execution: "We transformed journey creation from a design exercise into a configuration exercise.\n\nReusable modules were dynamically assembled using **Merchant Rules** (category, offers, integration type) and **Lender Rules** (partner, ETB/NTB, API/Redirect, fees, rejection logic, support details).\n\n**The outcome: New lender journeys could be configured and handed off to engineering in hours instead of weeks.**",
    newIntegrationImage: "assets/new_integration.png",
    outputImage: "assets/output.png",
    migration: "While I focused on designing the Modular Orchestration Platform, Product and Engineering worked in parallel to define the **migration strategy.**\n\nThe transition was the most challenging phase. For a period, both the legacy and the new platform had to coexist, resulting in:\n* Fragmented customer experiences\n* Mixed UI patterns\n* Inconsistent interactions across journeys\n\nTo minimize disruption, we adopted a phased migration approach:\n* Prioritized high-impact modules first\n* Introduced progressive migration instead of a big-bang release\n* Created comprehensive design documentation and implementation guidelines to ensure consistency across teams",
    impact: "## Business Impact\n\n| Metric | Impact |\n| --- | --- |\n| Merchant go-live | **50% faster** |\n| Lender onboarding | **40% faster** |\n| Time-to-market | **50% faster** |\n| Integration throughput | **2×** |\n\n## Design Impact\n\n| Metric | Impact |\n| --- | --- |\n| Design effort | **2–3 weeks → <½ - 1 day** |\n| Reusable modules | **10% → 55%** |\n| Unified experience | Across channels |\n| Configurable journeys | Built once, reused everywhere |\n\n## Engineering Impact\n\n| Metric | Impact |\n| --- | --- |\n| Engineering effort | **50–60% lower** |\n| Platform-wide changes | **80% less effort** |\n| Maintenance effort | **50% lower** |\n| Engineer ramp-up | **40% faster** |",
    reflection: "I didn't just redesign a customer journey.\n\nI helped redesign the platform behind it.\n\nThis project reinforced a lesson I'll carry into every product I build:\n\n**Great designers craft experiences. Great product designers build systems that make those experiences scalable.**",
    glimpses: [],
  },
  {
    slug: "ai-marketplace",
    title: "Designing a Marketplace",
    subtitle: "That Turned One-Time Buyers into Returning Customers",
    year: "2025", role: "Lead Product Designer", tag: "Flexmoney",
    cover: "assets/case_2_hero.png",
    duration: "5 months", team: "2 Designers, Data, Product Head, Engineers",
    overview: "Instacred enables EMI purchases across hundreds of merchant websites. Customers discover products on a merchant's platform, select EMI at checkout, and complete their financing through Instacred.\n\nBut once the transaction was complete, the relationship ended.\n\nOnly **26%** of customers returned for another EMI purchase.\n\nUnlike traditional marketplaces, we didn't own product discovery or customer acquisition. We entered the journey only at the point of financing, with little understanding of who our customers were or what they wanted next.\n\nThis created a fundamental business challenge:\n\n**How do you create a marketplace and drive repeat purchases when you barely know your customers?**",
    problemTitle: "Business Context",
    challengesTitle: "The Big Problem",
    whyTitle: "Conflicts",
    problem: "Customer acquisition costs were rising, making repeat purchases the most valuable lever for growth.\n\nThe opportunity was clear: transform **one-time EMI users into repeat customers** by giving them a dedicated marketplace where they could instantly discover and finance products using their pre-approved credit limit.\n\nThe strategy made perfect sense.\n\nThe execution came with a unique challenge.",
    challenges: "Before designing a marketplace, I asked a more fundamental question.\n\n**How would we know what products to recommend?**\n\nThe answer was simple: **we didn't.**\n\nWe only knew four things about each customer:\n\n![Available data — mobile number, credit limit, transaction amount, EMI status](assets/Available data.png)\n\nEverything else **demographics, interests, shopping behavior, and purchase intent** was missing.\n\nWithout these signals, every recommendation would be little more than an educated guess.",
    why: "During discovery, one debate shaped the direction of the product.\n\nThe Product Head proposed showing every customer products within their approved credit limit.\n\nSimple. Fast. Scalable.\n\nI saw one problem.\n\n**Credit eligibility isn't purchase intent.**\n\nTwo customers with the same ₹50,000 credit limit can have completely different needs. Without relevance, the marketplace would become just another product catalog.\n\n**The real challenge wasn't designing a marketplace. It was creating personalisation engine with almost no customer data.**",
    decisionsTitle: "Exploring Solutions",
    decisions: "To fetch demographics and insights we thought of\n\n![Option 1: third-party data enrichment vs Option 2: collect customer information during onboarding — pros and cons](assets/profile_creation.png)\n\nFor an early-stage experiment, **Option 2** made more sense.\n\n**\"What's the minimum information required to make a useful recommendation?\"**\n\nThat single question changed the project.\n\nInstead of perfect personas, we needed useful archetypes.",
    leveragingAi: "I used Claude to **accelerate customer segmentation**.\n\nInstead of relying on assumptions or manually analyzing hundreds of combinations, I grounded the recommendations in customer data and market research, including merchant categories, transaction history, approved credit limits, merchant ecosystems, and industry reports on Indian credit behavior and EMI purchasing (Home Credit India, PwC, Bain, Deloitte, KPMG, RBI, Google/Kantar, CMR, NIQ, and TransUnion CIBIL).\n\nI focused on a few high-impact customer signals:\n* **Geography:** Metro, Tier 1, Tier 2, Tier 3\n* **Age:** Gen Z, Millennials, Gen X, Baby Boomers\n* **Gender:** Male, Female & Others\n* **Credit Limit:** ₹3K–15K, ₹15K–30K, ₹30K–45K, ₹45K–60K, ₹60K+\n* **Previous Transaction Amount** (a proxy for spending behavior)\n\nUsing these signals, Claude generated an initial framework of **~240 customer archetypes**. It wasn't the final answer, it was a starting hypothesis.\n\nI then partnered with the Data team to validate assumptions, refine the recommendation logic, and remove weak patterns before handing the framework to Engineering.\n\nWhat would normally take weeks of exploratory analysis was reduced to hours of AI-assisted discovery, followed by rigorous human validation.",
    leveragingAiEmbed: "persona-matrix-subtle_9.html",
    recommendationEngine: "Every returning customer could now be mapped into an archetype using only a handful of available signals. Rather than recommending products randomly, the system recommended products that statistically matched the customer's likely needs.\n\n![That archetype determined — customer archetype maps to relevant product categories, suitable merchant partners and EMI affordability](assets/archetype-diagram-dark.png)",
    cohorts: "We realized retention wasn't just a recommendation problem.\n\nCustomers had different needs at different stages of their financing journey.\n\nTo address this, I introduced lifecycle-based cohorts.\n\n![Customer lifecycle segments — New, Recently Transacted, Active EMI, Closed EMI stages with characteristics, design goals and engagement strategies](assets/Cohorts.png)",
    validating: "A full marketplace required **merchant catalogue integrations, significant engineering effort, third-party costs, and operational complexity**.\n\nInstead of making that investment upfront, I proposed validating the hypothesis first.\n\nWe built a **lightweight MVP** using affiliate integrations instead of full catalogue partnerships, surfacing **~50 curated products** across a few categories.\n\n![Purchase intent flow — browse products, buy intent, complete purchases on merchant website](assets/purchase_intent.png)\n\n**_The goal wasn't revenue. It was learning._**",
    results: "The MVP generated **72% product engagement.**\n\nAlthough purchases continued on merchant websites, the experiment validated something much more valuable.\n\nCustomers were willing to use Instacred as a discovery platform—not just a financing platform.\n\nThat insight significantly reduced product risk before investing in full marketplace integrations.",
    impactTitle: "My Contributions",
    impact: "* Challenged assumptions around generic recommendations and advocated for **personalization**.\n* Led **AI-assisted discovery** to accelerate customer segmentation.\n* Worked with Data Science to validate and refine recommendation logic.\n* Designed lifecycle-based **customer cohorts** for retention.\n* Alongside product proposed a **low-cost MVP** to validate marketplace demand before major engineering investment.\n* Aligned Product, Engineering, Data, and CRM around a scalable personalization strategy.",
    reflection: "The biggest lesson wasn't about AI or recommendations.\n\nIt was learning that when customer data is limited, the role of design isn't to wait for perfect information.\n\nIt's to create the smallest system that helps the business make smarter decisions, validate assumptions quickly, and continuously learn from real customer behaviour.",
    glimpses: [],
  },
  {
    slug: "lumen-os",
    hidden: true,
    title: "Lumen OS — An interface for AI agents",
    subtitle: "Making invisible work visible",
    year: "2026", role: "Design Lead", tag: "AI / Tooling",
    cover: "https://images.unsplash.com/photo-1782460453048-fbb76d258189?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
    duration: "Ongoing — 14 months", team: "Cross-functional pod of 9",
    overview: "Lumen OS is a workbench for teams operating fleets of AI agents. I lead design across the agent canvas, run inspector and human-in-the-loop review surfaces.",
    problem: "Operators were drowning in agent output and had no language to compare runs, intervene, or trust outcomes. Most teams reverted to spreadsheets within a week.",
    challenges: [
      "Inventing a visual grammar for non-deterministic, branching processes.",
      "Designing for two users at once: the operator who must trust, and the agent which must be legible.",
      "Performance — surfaces had to remain responsive at 10k events/sec.",
    ],
    why: "AI is becoming infrastructure. The tools we use to supervise it will quietly shape how organisations decide what is true. That deserves serious design.",
    decisions: [
      "Built a canvas system where every agent run is a first-class spatial object — pannable, comparable, annotatable.",
      "Designed a ‘diff’ view for agent reasoning, lifted from version control conventions.",
      "Established a typographic system that distinguishes machine-generated, human-edited and system text without color.",
    ],
    impact: [
      { stat: "11×", label: "Faster review cycles" },
      { stat: "78%", label: "Operators reporting higher trust" },
      { stat: "$4.2M", label: "ARR within 6 months" },
    ],
    reflection: "Designing for AI feels like designing for weather — you cannot stop it, you can only build instruments good enough to understand it. Lumen taught me to design for legibility before delight.",
    glimpses: [
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=srgb&fm=jpg&w=900&q=80",
      "https://images.unsplash.com/photo-1599420187429-774dbfc6ba5d?crop=entropy&cs=srgb&fm=jpg&w=900&q=80",
    ],
  },
];

const experience = [
  { company: "DreamMoney", role: "Lead Product Designer", period: "2026 — Present", location: "Mumbai", summary: "Scaled platform growth by integrating 4 lending partners, reducing lender configuration to minutes, and building an AI-assisted design system for rapid flow creation." },
  { company: "Flexmoney", role: "Senior Product Designer", period: "2024 — 2026", location: "Mumbai", summary: "Led AI-assisted research, UX optimization, and customer feedback initiatives that shaped product strategy, increased conversions by 14%, and scaled monthly disbursements from ₹1.9M to ₹85.6M." },
  { company: "Slice", role: "Senior Product Designer", period: "2021 — 2023", location: "Bangalore", summary: "Launched a Personal Loan product achieving ₹70M+ in six months, led the first personal finance platform, contributed to Web3 products, and reduced support tickets by 12%." },
  { company: "Bettr (an InCred Group company)", role: "Product Designer", period: "2020 — 2021", location: "Remote", summary: "Designed India's first UPI-enabled credit card experience, improved retention by 12%, and delivered customer-facing assets for physical card products." },
  { company: "Dhani (Indiabulls Consumer Finance)", role: "Associate UX Manager", period: "2019 — 2020", location: "Mumbai", summary: "Led end-to-end design for the Dhani app and card experiences, increasing completed loan applications by 6% while reducing application time by 25%." },
  { company: "Udio (Transerv Pvt. Ltd.)", role: "Senior UI-UX Designer", period: "2015 — 2019", location: "Mumbai", summary: "Crafted user experiences for Udio’s 8 different finance products like Prepaid Wallet, Credit Card, Gold Investment, and more." },
  { company: "Webwerks (NeoSoft Technologies)", role: "Senior UI Designer", period: "2014 — 2015", location: "Mumbai" },
  { company: "Evolutionco", role: "Visual Designer", period: "2013 — 2014", location: "Mumbai" },
];

const hobbies = [
  { type: "Digital 3D", title: "Twilight Cottage", src: "assets/3D.png" },
  { type: "Sketch & Painting", title: "Ganesha, Split Study", src: "assets/Dual.png" },
  { type: "Digital 3D", title: "Shop & Pay", src: "assets/3D_2.png" },
  { type: "Digital", title: "Little Wins", src: "assets/Illustration_2.png" },
  { type: "Painting", title: "Portrait in Green", src: "assets/Painting_2.png" },
  { type: "Painting", title: "Meadow Companion", src: "assets/Painting.png" },
];

const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmt = (s) => esc(s)
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/(?:^|[^\w])_([^_]+)_(?!\w)/g, (m, inner) => m.replace(`_${inner}_`, `<em>${inner}</em>`));
const companyHtml = (company) => {
  const m = company.match(/^(.*?)(\s*\([^)]+\))$/);
  return m ? `${esc(m[1])}<span class="exp-co-sub">${esc(m[2])}</span>` : esc(company);
};

/* Render case-study prose: blank line = new paragraph, "* " lines = bullet list,
   consecutive plain lines join with <br>. First paragraph gets .lead if leadFirst. */
function prose(text, leadFirst) {
  const lines = String(text).split("\n");
  let html = "", para = [], first = true;
  const flush = () => {
    if (para.length) {
      const cls = (leadFirst && first) ? ' class="lead"' : "";
      html += `<p${cls}>${para.map(fmt).join("<br>")}</p>`;
      first = false; para = [];
    }
  };
  for (let i = 0; i < lines.length; ) {
    const t = lines[i].trim();
    if (/^#{2,}\s+/.test(t)) {
      flush();
      html += `<h4 class="case-subhead">${fmt(t.replace(/^#{2,}\s+/, ""))}</h4>`;
      i++;
    } else if (/^-{3,}$/.test(t)) {
      flush();
      html += `<hr class="case-hr">`;
      i++;
    } else if (/^!\[[^\]]*\]\([^)]+\)$/.test(t)) {
      flush();
      const m = t.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      html += `<img class="case-prose-img" data-zoom src="${esc(m[2].replace(/ /g, "%20"))}" alt="${esc(m[1])}" loading="lazy"/>`;
      i++;
    } else if (/^>\s+/.test(t)) {
      flush();
      html += `<blockquote class="pull">${fmt(t.replace(/^>\s+/, ""))}</blockquote>`;
      i++;
    } else if (/^\[[^\]]+\]\([^)]*\)$/.test(t)) {
      flush();
      const m = t.match(/^\[([^\]]+)\]\(([^)]*)\)$/);
      const href = m[2] || "#";
      const ext = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
      html += `<a class="case-btn" href="${esc(href)}"${ext}>${esc(m[1])}<span class="case-btn-arrow">↗</span></a>`;
      i++;
    } else if (/^\*\s+/.test(t)) {
      flush();
      const items = [];
      while (i < lines.length && /^\*\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\*\s+/, "")); i++;
      }
      html += `<ul>${items.map(x => `<li>${fmt(x)}</li>`).join("")}</ul>`;
    } else if (/^\|/.test(t)) {
      flush();
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i].trim())) {
        rows.push(lines[i].trim()); i++;
      }
      const parseRow = (r) => r.replace(/^\|/, "").replace(/\|$/, "").split("|").map(c => c.trim());
      const isSeparator = (r) => /^[\s|:-]+$/.test(r) && r.includes("-");
      const header = parseRow(rows[0]);
      const dataRows = (rows[1] && isSeparator(rows[1]) ? rows.slice(2) : rows.slice(1)).map(parseRow);
      html += `<div class="case-table-wrap"><table class="case-table"><thead><tr>${
        header.map(h => `<th>${fmt(h)}</th>`).join("")
      }</tr></thead><tbody>${
        dataRows.map(r => `<tr>${r.map(c => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")
      }</tbody></table></div>`;
    } else if (/^[↓→]$/.test(t)) {
      flush();
      html += `<div class="case-flow-arrow">${t}</div>`;
      i++;
    } else if (t === "") {
      flush(); i++;
    } else {
      para.push(t); i++;
    }
  }
  flush();
  return html;
}

/* ===================== Render home ===================== */
function renderHome() {
  // Hero
  $("#heroIntro").textContent = portfolio.intro;
  $("#heroPortrait").src = portfolio.portrait;
  $("#heroRole").textContent = portfolio.role;
  const socialLinks = portfolio.socials.map(s => `<a href="${esc(s.href)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
  $("#heroSocials").innerHTML = socialLinks;

  // Contact info
  $("#ciEmail").textContent = portfolio.email;
  $("#ciEmail").href = "mailto:" + portfolio.email;
  $("#ciPhone").textContent = portfolio.phone;
  $("#ciPhone").href = "tel:" + portfolio.phone.replace(/[^+\d]/g, "");
  $("#ciLoc").textContent = portfolio.location;

  // Marquee (doubled for seamless loop)
  const items = marquee.map(m => `<span class="marquee-item">${esc(m)}<span class="star">✦</span></span>`).join("");
  $("#marqueeTrack").innerHTML = items + items;

  // Milestones
  $("#msGrid").innerHTML = milestones.map(m => `
    <div class="ms-item reveal">
      <div class="ms-num">${esc(m.number)}</div>
      <div class="ms-label">${esc(m.label)}</div>
      <div class="ms-note">${esc(m.note)}</div>
    </div>`).join("");

  // Projects
  const visibleProjects = projects.filter(p => !p.hidden);
  const total = visibleProjects.length;
  $("#projList").innerHTML = visibleProjects.map((p, i) => `
    <article class="proj reveal" data-slug="${esc(p.slug)}">
      <div class="proj-index">
        <span class="pi-num">0${i + 1}</span>
        <span class="pi-total">/${total}</span>
        <span class="pi-tag">${esc(p.tag)}</span>
      </div>
      <div class="proj-body">
        <h3 class="proj-title">${esc(p.title)}</h3>
        <p class="proj-sub">${esc(p.subtitle)}</p>
        <p class="proj-meta">${esc(p.role)} &nbsp;·&nbsp; ${esc(p.year)}</p>
      </div>
      <div class="proj-media">
        <img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy"/>
      </div>
    </article>`).join("");

  // Experience
  $("#expList").innerHTML = experience.map(e => `
    <div class="exp reveal">
      <div class="exp-head">
        <span class="exp-role">${esc(e.role)}</span>
        <span class="exp-when"><span class="exp-period">${esc(e.period)}</span><span class="exp-loc">${esc(e.location)}</span></span>
      </div>
      <h3 class="exp-co">${companyHtml(e.company)}</h3>
      ${e.summary ? `<p class="exp-sum">${esc(e.summary)}</p>` : ""}
    </div>`).join("");

  // Hobbies
  $("#hobGrid").innerHTML = hobbies.map(h => `
    <figure class="hob reveal">
      <img src="${esc(h.src)}" alt="${esc(h.title)}" loading="lazy"/>
      <figcaption class="hob-cap"><span>${esc(h.title)}</span><span class="hob-type">${esc(h.type)}</span></figcaption>
    </figure>`).join("");

  bindProjects();
  observeReveals();
}

/* ===== Project click → case study ===== */
function bindProjects() {
  const hint = $("#projHint");
  document.querySelectorAll(".proj").forEach(el => {
    el.addEventListener("mouseenter", () => hint.classList.add("show"));
    el.addEventListener("mouseleave", () => hint.classList.remove("show"));
    el.addEventListener("click", () => { location.hash = "#/work/" + el.dataset.slug; });
  });
  window.addEventListener("mousemove", (e) => {
    if (hint.classList.contains("show")) {
      hint.style.left = e.clientX + "px";
      hint.style.top = e.clientY + "px";
    }
  });
}

/* ===================== Case study ===================== */
function renderCase(slug) {
  const idx = projects.findIndex(p => p.slug === slug);
  if (idx < 0) { location.hash = ""; return; }
  const p = projects[idx];
  const visibleProjects = projects.filter(x => !x.hidden);
  const visIdx = Math.max(0, visibleProjects.findIndex(x => x.slug === slug));
  const next = visibleProjects[(visIdx + 1) % visibleProjects.length];
  const li = a => a.map(x => `<li>${esc(x)}</li>`).join("");

  $("#case").innerHTML = `
    <div class="container">
      <a class="case-back" href="#">← Back to index</a>
      <header class="case-head">
        <span class="case-tag">${esc(p.tag)} · ${esc(p.year)}</span>
        <h1 class="case-title">${esc(p.title).replace(/\n/g, "<br>")}</h1>
        <p class="case-sub">${esc(p.subtitle)}</p>
        <div class="case-facts">
          <div class="case-fact"><div class="cf-label">Role</div><div class="cf-val">${esc(p.role)}</div></div>
          <div class="case-fact"><div class="cf-label">Duration</div><div class="cf-val">${esc(p.duration)}</div></div>
          <div class="case-fact"><div class="cf-label">Team</div><div class="cf-val">${esc(p.team)}</div></div>
          <div class="case-fact"><div class="cf-label">Year</div><div class="cf-val">${esc(p.year)}</div></div>
        </div>
      </header>
      <img class="case-cover" src="${esc(p.cover)}" alt="${esc(p.title)}"/>

      <section class="case-body"><h3>Overview</h3>
        <div class="case-prose">${prose(p.overview, true)}</div></section>

      <section class="case-body"><h3>${esc(p.problemTitle || "Why It Mattered")}</h3>
        <div class="case-prose">${prose(p.problem, false)}</div></section>

      <section class="case-body"><h3>${esc(p.challengesTitle || "Problem Statement")}</h3>
        <div class="case-prose">${Array.isArray(p.challenges) ? `<ul>${li(p.challenges)}</ul>` : prose(p.challenges, false)}</div></section>

      <section class="case-body"><h3>${esc(p.whyTitle || "Getting Started")}</h3>
        <div class="case-prose">${prose(p.why, false)}</div></section>

      ${p.interlude ? `<p class="case-interlude">${fmt(p.interlude)}</p>` : ""}

      <section class="case-body"><h3>${esc(p.decisionsTitle || "The Turning Point")}</h3>
        <div class="case-prose">${Array.isArray(p.decisions) ? `<ul>${li(p.decisions)}</ul>` : prose(p.decisions, false)}</div></section>

      ${p.leveragingAi ? `<section class="case-body"><h3>Personalisation Engine</h3>
        <div class="case-prose">${prose(p.leveragingAi, false)}</div></section>` : ""}

      ${p.leveragingAiEmbed ? `<div class="case-embed"><iframe src="${esc(p.leveragingAiEmbed.replace(/ /g, "%20"))}" title="Personalisation Engine — persona matrix" loading="lazy"></iframe></div>` : ""}

      ${p.recommendationEngine ? `<section class="case-body"><h3>Recommendation Engine</h3>
        <div class="case-prose">${prose(p.recommendationEngine, false)}</div></section>` : ""}

      ${p.cohorts ? `<section class="case-body"><h3>Cohorts</h3>
        <div class="case-prose">${prose(p.cohorts, false)}</div></section>` : ""}

      ${p.validating ? `<section class="case-body"><h3>Validating the Marketplace</h3>
        <div class="case-prose">${prose(p.validating, false)}</div></section>` : ""}

      ${p.results ? `<section class="case-body"><h3>Results</h3>
        <div class="case-prose">${prose(p.results, true)}</div></section>` : ""}

      ${p.redefining ? `<section class="case-body"><h3>Redefining the problem</h3>
        <div class="case-prose">
          ${prose(p.redefining, false)}
          ${p.redefiningImage ? `<img class="case-redefine-img" src="${esc(p.redefiningImage.replace(/ /g, "%20"))}" alt="From rigid, custom-built integrations to a modular, configurable platform" loading="lazy"/>` : ""}
          ${p.redefiningImpact ? `<h4 class="case-subhead">Projected impact</h4>${prose(p.redefiningImpact, false)}` : ""}
        </div></section>` : ""}

      ${p.stakeholders ? `<section class="case-body"><h3>Stakeholders</h3>
        <div class="case-prose">${prose(p.stakeholders, false)}</div></section>` : ""}

      ${p.nextSteps ? `<section class="case-body"><h3>Components &amp; tokens</h3>
        <div class="case-prose">${prose(p.nextSteps, false)}</div></section>` : ""}

      ${p.nextStepsImages ? `<div class="case-trio">${p.nextStepsImages.map(im =>
        `<figure><img data-zoom src="${esc(im.src.replace(/ /g, "%20"))}" alt="${esc(im.label)}" loading="lazy"/><figcaption>${esc(im.label)}</figcaption></figure>`).join("")}</div><div class="case-trio-divider"></div>` : ""}

      ${p.nextSteps2 ? `<section class="case-body"><h3>Modules inventory</h3>
        <div class="case-prose">${prose(p.nextSteps2, false)}</div></section>` : ""}

      ${p.modulesImage ? `<img class="case-wide-img" data-zoom src="${esc(p.modulesImage.replace(/ /g, "%20"))}" alt="KYC module — happy paths, error states, edge cases and overrides" loading="lazy"/>` : ""}

      ${p.execution ? `<section class="case-body"><h3>Execution</h3>
        <div class="case-prose">${prose(p.execution, false)}</div></section>` : ""}

      ${p.newIntegrationImage ? `<img class="case-wide-img" data-zoom src="${esc(p.newIntegrationImage.replace(/ /g, "%20"))}" alt="New integration flow" loading="lazy"/>` : ""}

      ${p.overviewImage ? `<img class="case-wide-img" data-zoom src="${esc(p.overviewImage.replace(/ /g, "%20"))}" alt="Multiple customer touchpoints — embedded checkout, in-store, assisted telecaller and EMI affordability widget" loading="lazy"/>` : ""}

      ${p.migration ? `<section class="case-body"><h3>Migration Challenge</h3>
        <div class="case-prose">${prose(p.migration, false)}</div></section>` : ""}

      <section class="case-body"><h3>${esc(p.impactTitle || "Impact")}</h3>
        ${Array.isArray(p.impact)
          ? `<div class="case-impact">${p.impact.map(s => `<div class="ci-stat"><div class="cis-num">${esc(s.stat)}</div><div class="cis-label">${esc(s.label)}</div></div>`).join("")}</div>`
          : `<div class="case-prose">${prose(p.impact, false)}</div>`}</section>

      <section class="case-body"><h3>Reflection</h3>
        <div class="case-prose">${prose(p.reflection, false)}</div></section>

      ${p.glimpses && p.glimpses.length ? `<div class="case-glimpses">${p.glimpses.map(g => `<img src="${esc(g)}" alt="Glimpse of work" loading="lazy"/>`).join("")}</div>` : ""}

      ${p.outputImage ? `<hr class="case-hr"/><img class="case-wide-img" data-zoom src="${esc(p.outputImage.replace(/ /g, "%20"))}" alt="After — unified EMI plan experience across embedded checkout, in-store, assisted telecaller and EMI affordability widget" loading="lazy"/>` : ""}

      <a class="case-next" href="#/work/${esc(next.slug)}">
        <div><div class="cn-label">Next project</div><div class="cn-title">${esc(next.title)}</div></div>
        <span style="font-size:24px">→</span>
      </a>
    </div>`;
  document.body.classList.add("case-open");
  $("#case").classList.add("active");
  window.scrollTo(0, 0);
}

/* ===================== Router ===================== */
function route() {
  const m = location.hash.match(/^#\/work\/(.+)$/);
  if (m) {
    renderCase(m[1]);
  } else {
    document.body.classList.remove("case-open");
    $("#case").classList.remove("active");
    $("#case").innerHTML = "";
    if (location.hash && $(location.hash)) {
      $(location.hash).scrollIntoView();
    }
  }
}
window.addEventListener("hashchange", route);

/* ===================== Reveal on scroll ===================== */
let io;
function observeReveals() {
  if (io) io.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}

/* ===================== Theme (dark mode pull switch) ===================== */
// Colors cross-fade via the plain CSS transition already on body/nav/etc.
// in styles.css — no extra JS-driven transition effect.
function initThemeToggle() {
  const root = document.documentElement;
  const btn = $("#themeToggle");
  if (!btn) return;

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    btn.setAttribute("aria-pressed", String(theme === "dark"));
  };
  applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    btn.classList.add("pulled");
    setTimeout(() => btn.classList.remove("pulled"), 220);

    applyTheme(next);
    localStorage.setItem("theme", next);
  });
}

/* ===================== Nav ===================== */
function initNav() {
  const nav = $("#nav");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 10));
  $("#navToggle").addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  initScrollSpy();
}

/* ===== Scroll-spy: highlight the nav link for the section in view ===== */
function initScrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav-links a"));
  const sections = links
    .map(a => ({ link: a, el: document.querySelector(a.getAttribute("href")) }))
    .filter(x => x.el);
  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(s => io.observe(s.el));
}


/* ===================== Image lightbox ===================== */
function initLightbox() {
  const lb = $("#lightbox"), img = $("#lightboxImg"), closeBtn = $("#lightboxClose"),
        prev = $("#lightboxPrev"), next = $("#lightboxNext");
  let group = [], idx = 0;
  let scale = 1, tx = 0, ty = 0;            // zoom + pan state
  const MIN = 1, MAX = 6;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  // size the image fits at within the viewport (scale 1)
  const fitSize = () => {
    const maxW = innerWidth * 0.92, maxH = innerHeight * 0.88;
    const nw = img.naturalWidth || maxW, nh = img.naturalHeight || maxH;
    const r = nw / nh;
    let w = maxW, h = maxW / r;
    if (h > maxH) { h = maxH; w = maxH * r; }
    return { w, h };
  };
  // highest zoom that still renders within the source's native pixels (stays crisp)
  const maxZoom = () => {
    const { w } = fitSize();
    return Math.max(1, Math.min(MAX, (img.naturalWidth || w) / w));
  };

  const apply = () => {
    if (scale > 1) {
      const { w } = fitSize();
      // resize the element so the browser re-rasterises from the full-res source
      img.style.maxWidth = "none"; img.style.maxHeight = "none";
      img.style.width = (w * scale) + "px"; img.style.height = "auto";
    } else {
      img.style.maxWidth = ""; img.style.maxHeight = "";
      img.style.width = ""; img.style.height = "";
    }
    img.style.transform = `translate(${tx}px, ${ty}px)`;
    img.classList.toggle("zoomed", scale > 1);
  };
  const resetZoom = () => { scale = 1; tx = 0; ty = 0; apply(); };
  const setScale = (s) => {
    scale = clamp(s, MIN, maxZoom());
    if (scale === 1) { tx = 0; ty = 0; }
    apply();
  };

  const show = () => { const el = group[idx]; img.src = el.src; img.alt = el.alt || ""; resetZoom(); };
  const open = (el) => {
    const trio = el.closest(".case-trio");
    group = trio ? Array.from(trio.querySelectorAll("img")) : [el];
    idx = Math.max(0, group.indexOf(el));
    const multi = group.length > 1;
    prev.style.display = next.style.display = multi ? "flex" : "none";
    show();
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; img.src = ""; resetZoom();
  };
  const go = (d) => { idx = (idx + d + group.length) % group.length; show(); };

  document.addEventListener("click", (e) => {
    const t = e.target.closest("img[data-zoom]");
    if (t) open(t);
  });
  closeBtn.addEventListener("click", close);
  prev.addEventListener("click", (e) => { e.stopPropagation(); go(-1); });
  next.addEventListener("click", (e) => { e.stopPropagation(); go(1); });

  // zoom controls
  $("#zoomIn").addEventListener("click", (e) => { e.stopPropagation(); setScale(scale + 0.5); });
  $("#zoomOut").addEventListener("click", (e) => { e.stopPropagation(); setScale(scale - 0.5); });
  $("#zoomReset").addEventListener("click", (e) => { e.stopPropagation(); resetZoom(); });
  img.addEventListener("wheel", (e) => {
    e.preventDefault();
    setScale(scale * (e.deltaY < 0 ? 1.12 : 0.89));
  }, { passive: false });
  img.addEventListener("dblclick", (e) => { e.stopPropagation(); setScale(scale > 1 ? 1 : 2.5); });

  // drag to pan when zoomed
  let dragging = false, sx = 0, sy = 0;
  img.addEventListener("pointerdown", (e) => {
    if (scale <= 1) return;
    dragging = true; sx = e.clientX - tx; sy = e.clientY - ty;
    img.classList.add("grabbing"); img.setPointerCapture(e.pointerId);
  });
  img.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    tx = e.clientX - sx; ty = e.clientY - sy; apply();
  });
  const endDrag = () => { dragging = false; img.classList.remove("grabbing"); };
  img.addEventListener("pointerup", endDrag);
  img.addEventListener("pointercancel", endDrag);
  img.addEventListener("click", (e) => { if (scale > 1) e.stopPropagation(); });

  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "+" || e.key === "=") setScale(scale + 0.5);
    else if (e.key === "-") setScale(scale - 0.5);
    else if (e.key === "ArrowLeft" && group.length > 1 && scale === 1) go(-1);
    else if (e.key === "ArrowRight" && group.length > 1 && scale === 1) go(1);
  });
}

/* ===================== Boot ===================== */
document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  initThemeToggle();
  initNav();
  initLightbox();
  route();
  document.getElementById("year").textContent = new Date().getFullYear();
});
