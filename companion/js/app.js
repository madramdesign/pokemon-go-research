const TYPES = [
  "normal","fire","water","electric","grass","ice","fighting","poison",
  "ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"
];

const TYPE_COLOR = {
  normal:"#a8a77a", fire:"#ee8130", water:"#6390f0", electric:"#f7d02c",
  grass:"#7ac74c", ice:"#96d9d6", fighting:"#c22e28", poison:"#a33ea1",
  ground:"#e2bf65", flying:"#a98ff3", psychic:"#f95587", bug:"#a6b91a",
  rock:"#b6a136", ghost:"#735797", dragon:"#6f35fc", dark:"#705746",
  steel:"#b7b7ce", fairy:"#d685ad"
};

const ATK = {
  normal:  { rock:.5, ghost:0, steel:.5 },
  fire:    { fire:.5, water:.5, grass:2, ice:2, bug:2, rock:.5, dragon:.5, steel:2 },
  water:   { fire:2, water:.5, grass:.5, ground:2, rock:2, dragon:.5 },
  electric:{ water:2, electric:.5, grass:.5, ground:0, flying:2, dragon:.5 },
  grass:   { fire:.5, water:2, grass:.5, poison:.5, ground:2, flying:.5, bug:.5, rock:2, dragon:.5, steel:.5 },
  ice:     { fire:.5, water:.5, grass:2, ice:.5, ground:2, flying:2, dragon:2, steel:.5 },
  fighting:{ normal:2, ice:2, poison:.5, flying:.5, psychic:.5, bug:.5, rock:2, ghost:0, dark:2, steel:2, fairy:.5 },
  poison:  { grass:2, poison:.5, ground:.5, rock:.5, ghost:.5, steel:0, fairy:2 },
  ground:  { fire:2, electric:2, grass:.5, poison:2, flying:0, bug:.5, rock:2, steel:2 },
  flying:  { electric:.5, grass:2, fighting:2, bug:2, rock:.5, steel:.5 },
  psychic: { fighting:2, poison:2, psychic:.5, dark:0, steel:.5 },
  bug:     { fire:.5, grass:2, fighting:.5, poison:.5, flying:.5, psychic:2, ghost:.5, dark:2, steel:.5, fairy:.5 },
  rock:    { fire:2, ice:2, fighting:.5, ground:.5, flying:2, bug:2, steel:.5 },
  ghost:   { normal:0, psychic:2, ghost:2, dark:.5 },
  dragon:  { dragon:2, steel:.5, fairy:0 },
  dark:    { fighting:.5, psychic:2, ghost:2, dark:.5, fairy:.5 },
  steel:   { fire:.5, water:.5, electric:.5, ice:2, rock:2, steel:.5, fairy:2 },
  fairy:   { fire:.5, fighting:2, poison:.5, dragon:2, dark:2, steel:.5 }
};

const WEATHER = [
  ["Sunny / Clear", "Grass, Fire, Ground"],
  ["Rainy", "Water, Electric, Bug"],
  ["Partly cloudy", "Normal, Rock"],
  ["Cloudy", "Fairy, Fighting, Poison"],
  ["Windy", "Flying, Dragon, Psychic"],
  ["Snow", "Ice, Steel"],
  ["Fog", "Dark, Ghost"]
];

const JOB_TAGS = [
  { name: "PVP", how: "1–2 per species. Low Atk. Search #PVP." },
  { name: "RAID", how: "Highest Atk / Shadow. One per species. Search #RAID." },
  { name: "MAX", how: "Dynamax / G-Max you will use. Search #MAX." },
  { name: "MEGA", how: "One coverage Mega. Search #MEGA." },
  { name: "DEX", how: "One form/costume. May stack on PVP or RAID. Search #DEX." },
  { name: "TRADE", how: "For friends. Not also PVP/RAID. Search #TRADE." },
  { name: "WALL", how: "1–2 gyms. Search #WALL." },
  { name: "TEMP", how: "Dump later. Search #TEMP." }
];

const FILTERS = [
  { group: "tag", tag: "WEEK", pin: true, go: "Star + tag", how: "After a session. Star shiny / 4* / lucky. Tag jobs on winners. Leave junk.", q: "age0-7&!#" },
  { group: "tag", tag: "INBOX", pin: true, go: "Star + tag", how: "Full untagged pile. Same as WEEK, whole box. Leftovers after hunts.", q: "!#" },
  { group: "tag", tag: "STAR1ST", stock: true, go: "★ Favorite", how: "Don’t pin. One paste, then star. Or tap GO’s chips.", q: "4*,shiny,lucky,legendary,mythical,ultrabeast,costume,background,fusion" },
  { group: "tag", tag: "NUNDO", stock: true, go: "★ Favorite", how: "Don’t pin. Only if you collect nundos.", q: "0attack&0defense&0hp" },
  { group: "tag", tag: "INVEST", stock: true, go: "★ Favorite", how: "Don’t pin. Already-invested combat pieces.", q: "dynamax,gigantamax,mega1,mega2,mega3,fusion" },
  { group: "tag", tag: "PVPIV", pin: true, go: "Tag PVP", how: "Untagged bulk IVs. Skip species you will not play. Already-tagged copies are hidden.", q: "!#&0-1attack&3-4defense&3-4hp" },
  { group: "tag", tag: "GL1500", pin: true, go: "Tag PVP", how: "Untagged Great League core. Do not power past 1,500.", q: "+azumarill,+medicham,+swampert,+whiscash,+altaria,+skarmory,+lanturn,+clodsire,+jellicent,+empoleon,+tinkaton,+lickitung,+forretress,+mimikyu&!#&cp-1500&0-1attack&3-4defense&3-4hp" },
  { group: "tag", tag: "UL2500", stock: true, go: "Tag PVP", how: "Don’t pin. Untagged CP 1,501–2,500 bulk IVs.", q: "!#&cp1501-2500&0-1attack&3-4defense&3-4hp" },
  { group: "tag", tag: "MLIV", stock: true, go: "Tag RAID or PVP", how: "Don’t pin. 15 Atk → RAID. Master League wants high Atk.", q: "legendary,mythical,ultrabeast&3*,4*" },
  { group: "tag", tag: "PVP2MV", stock: true, go: "Already PVP", how: "Don’t pin. Missing the second charged move.", q: "#PVP&!@3move" },
  { group: "tag", tag: "RAID15", pin: true, go: "Tag RAID", how: "Untagged 15-Atk 3★+. One winner per species. Not PVP.", q: "!#&4attack&3*,4*" },
  { group: "tag", tag: "SHADATK", pin: true, go: "Tag RAID", how: "Untagged Shadows. 15 Atk or meta → RAID. Do not purify. Skip junk.", q: "!#&shadow" },
  { group: "tag", tag: "FRUST", pin: true, go: "Tag RAID", how: "Untagged Frustration. Meta only. Wait for a Rocket TM window.", q: "!#&shadow&@frustration" },
  { group: "tag", tag: "MEGCOV", stock: true, go: "Tag MEGA", how: "Don’t pin. One coverage Mega / Primal.", q: "megaevolve,mega1,mega2,mega3,fusion" },
  { group: "tag", tag: "COLLECT", stock: true, go: "Tag DEX", how: "Don’t pin. One of each form you care about.", q: "shiny,costume,background,4*,lucky,xxl" },
  { group: "tag", tag: "XTRADE", stock: true, go: "Tag TRADE", how: "Don’t pin. Legendaries still untagged and unstarred.", q: "legendary,mythical,ultrabeast&!favorite&!#" },
  { group: "tag", tag: "OLD20", stock: true, go: "Tag TRADE", how: "Don’t pin. Lucky-trade bait.", q: "2016,2017,2018,2019,2020&!favorite" },
  { group: "tag", tag: "DIST100", stock: true, go: "Tag TRADE", how: "Don’t pin. Caught 100+ km away — extra XL if you trade.", q: "!#&distance100-&!traded&!shadow&!mythical" },
  { group: "tag", tag: "WALLS", stock: true, go: "Tag WALL", how: "Don’t pin. Keep 1–2 gym defenders.", q: "+chansey,+snorlax,+giratina,+togepi" },
  { group: "tag", tag: "LILCUP", stock: true, go: "Tag PVP", how: "Don’t pin. Little Cup only. Do not evolve.", q: "cp-500&0-1attack&3-4defense&3-4hp&evolve" },
  { group: "tag", tag: "SPECIAL", stock: true, go: "Tag PVP or RAID", how: "Don’t pin. Elite / CD / Frustration / Return moves.", q: "@special" },
  { group: "tag", tag: "RAIDTYP", stock: true, go: "Tag RAID", how: "Don’t pin. Swap dragon for the type you need on the raid team.", q: "@dragon&cp2500-&3*,4*" },
  { group: "tag", tag: "DUPES", stock: true, go: "Tag PVP and/or RAID", how: "Don’t pin. Every species you own two of.", q: "count2-" },
  { group: "tag", tag: "DUPERAID", stock: true, go: "Tag RAID", how: "Don’t pin. Best untagged 15-Atk extra.", q: "count2-&4attack&3*,4*&!#" },
  { group: "tag", tag: "DUPEPVP", stock: true, go: "Tag PVP", how: "Don’t pin. Type count2- then check bulk IVs.", q: "count2-" },
  { group: "tag", tag: "RAID2", stock: true, go: "Untag RAID", how: "Don’t pin. Two of one species → untag the worse.", q: "#RAID" },
  { group: "tag", tag: "PVP2", stock: true, go: "Untag PVP", how: "Don’t pin. Keep 1–2 per species.", q: "#PVP" },

  { group: "transfer", tag: "EXTRAS", pin: true, go: "Transfer", how: "Untagged extras of a species you already kept. Eyeball, then transfer.", q: "count2-&!#&!favorite" },
  { group: "transfer", tag: "NOTAG", stock: true, go: "Tag or Transfer", how: "Same as INBOX. Type !# if you didn’t pin it.", q: "!#" },
  { group: "transfer", tag: "AGE07", pin: true, go: "Transfer", how: "This week’s leftovers after tagging. Still eyeball.", q: "age0-7&!3*&!4*&!shiny&!shadow&!lucky&!legendary&!favorite&!#" },
  { group: "transfer", tag: "DUMP", pin: true, go: "Transfer", how: "Last resort. Hides rares. Never select-all blind.", q: "!4*&!shiny&!shadow&!legendary&!mythical&!lucky&!costume&!background&!dynamax&!gigantamax&!favorite&!#" },
  { group: "transfer", tag: "DUMP3", stock: true, go: "Transfer", how: "Don’t pin. Deletes GL rank-1s if PVP tags are missing.", q: "!3*&!favorite&!#" },
  { group: "transfer", tag: "CP100", stock: true, go: "Transfer", how: "Don’t pin. Low-CP candy.", q: "cp-100&!shiny&!favorite&!#" },
  { group: "transfer", tag: "MAXXTRA", stock: true, go: "Transfer", how: "Don’t pin. Unlevelled Max extras.", q: "dynamax,gigantamax&!#&!favorite" },

  { group: "evolve", tag: "EVOTAG", pin: true, go: "Evolve", how: "Tagged and can evolve right now. Skip Little Cup PVP.", q: "#RAID,#PVP,#DEX,#MEGA,#MAX&evolve" },
  { group: "evolve", tag: "EVORAID", stock: true, go: "Evolve", how: "Don’t pin. #RAID that can evolve now.", q: "#RAID&evolve" },
  { group: "evolve", tag: "EVOPVP", stock: true, go: "Evolve", how: "Don’t pin. #PVP that can evolve now.", q: "#PVP&evolve" },
  { group: "evolve", tag: "EVODEX", stock: true, go: "Evolve", how: "Don’t pin. #DEX that can evolve now.", q: "#DEX&evolve" },
  { group: "evolve", tag: "EVONEW", stock: true, go: "Evolve", how: "Don’t pin. New dex entry waiting. Tag DEX first.", q: "evolve&evolvenew" },
  { group: "evolve", tag: "EVOLUCK", stock: true, go: "Evolve", how: "Don’t pin. Lucky and already tagged.", q: "lucky&evolve&#RAID,#PVP,#DEX" },
  { group: "evolve", tag: "EVOSHAD", stock: true, go: "Evolve", how: "Don’t pin. RAID Shadows that can evolve now.", q: "#RAID&shadow&evolve" },
  { group: "evolve", tag: "EVOCD", pin: true, go: "Evolve tagged only", how: "Community Day lines already tagged RAID or PVP.", q: "+swampert,+mamoswine,+metagross,+garchomp,+machamp,+charizard,+dragonite,+salamence,+rhyperior,+lucario&#RAID,#PVP" },
  { group: "evolve", tag: "EVOITEM", stock: true, go: "Evolve", how: "Don’t pin. Needs an item, already tagged.", q: "item&#RAID,#PVP,#DEX" },
  { group: "evolve", tag: "TRADEVO", stock: true, go: "Tag TRADE", how: "Don’t pin. Hold until traded (Haunter, Graveler…).", q: "tradeevolve&!#" },
  { group: "evolve", tag: "XLKEEP", stock: true, go: "Power up", how: "Don’t pin. Tagged keepers with XL candy.", q: "countcandyxl1-&#RAID,#PVP,#MAX" },
  { group: "evolve", tag: "CANDY50", stock: true, go: "Evolve tagged only", how: "Don’t pin. 50+ candy and already tagged.", q: "countcandy50-&#RAID,#PVP,#DEX" },
  { group: "evolve", tag: "PWRRAID", stock: true, go: "Power up", how: "Don’t pin. RAID that cannot evolve further.", q: "#RAID&!evolve" }
];

const PIN_ORDER = ["WEEK","INBOX","PVPIV","GL1500","RAID15","SHADATK","FRUST","EVOTAG","EVOCD","EXTRAS","AGE07","DUMP"];

function pinFilters() {
  const map = new Map(FILTERS.filter((f) => f.pin).map((f) => [f.tag, f]));
  return PIN_ORDER.map((t) => map.get(t)).filter(Boolean);
}

const FLOW = [
  {
    id: "week",
    phase: "tag",
    title: "This week’s pile",
    apply: "Copy WEEK (or INBOX for a full clean). Star shiny / 4* / lucky. Tag MAX, MEGA, DEX, TRADE, WALL, TEMP as you scroll. Leave junk untagged.",
    why: "One list, thumb-scroll. Hunts next hide whatever you tag. After a walk, WEEK is enough. INBOX is the whole untagged box.",
    keys: ["WEEK", "INBOX"]
  },
  {
    id: "pvp",
    phase: "tag",
    title: "Tag PVP",
    apply: "Copy → paste in GO → tag 1–2 winners per species you will play. Skip Chikorita unless you want Meganium.",
    why: "Both searches start with !# so tagged copies vanish. PVPIV is every bulk IV. GL1500 is the Great League core only.",
    keys: ["PVPIV", "GL1500"]
  },
  {
    id: "raid",
    phase: "tag",
    title: "Tag RAID",
    apply: "One winner per species. Shadow beats non-shadow. Do not purify. Skip junk Shadows — they stay untagged for transfer.",
    why: "RAID15 is 15 Attack. SHADATK is every untagged Shadow. FRUST is Frustration still stuck.",
    keys: ["RAID15", "SHADATK", "FRUST"]
  },
  {
    id: "evo",
    phase: "evolve",
    title: "Evolve tagged only",
    apply: "Copy EVOTAG. Evolve that list. On Community Day, use EVOCD so extras in those families stay unevolved.",
    why: "Candy only hits a job tag. Untagged 3-stars with candy in the bank are ignored.",
    keys: ["EVOTAG", "EVOCD"]
  },
  {
    id: "toss",
    phase: "transfer",
    title: "Transfer leftovers",
    apply: "EXTRAS first. Then AGE07. DUMP only if you still need space. Never select-all without scrolling the list.",
    why: "Winners are tagged or starred, so untagged extras are candy. DUMP hides rares in case you skipped starring.",
    keys: ["EXTRAS", "AGE07", "DUMP"]
  }
];

const WIZARD = [
  {
    q: "Is it shiny, mythical, a costume you like, a hundo, lucky, fused, mega-leveled, or Max-invested?",
    yes: { kind: "keep", title: "Keep", body: "At least one copy. Favorite it in the official app before you touch transfer." },
    no: "next"
  },
  {
    q: "Is it a Shadow of a raid or PvP species (Mewtwo, Rayquaza, Machamp, Metagross, Mamoswine…)?",
    yes: { kind: "keep", title: "Keep the Shadow", body: "Do not purify by default. Frustration only comes off in Rocket TM windows. A mediocre Shadow often beats a non-shadow hundo in raids." },
    no: "next"
  },
  {
    q: "Will you actually play this species in Great or Ultra League this season?",
    yes: { kind: "tag", title: "Check PvP IVs", body: "Copy PVPIV (untagged bulk IVs) or GL1500 (Great League core). Skip first stages you will not play. Confirm rank on PvPoke before XL." },
    no: "next"
  },
  {
    q: "Is it a top raid attacker for a type you still need, with 13+ Attack (or any usable Shadow)?",
    yes: { kind: "keep", title: "Keep until you have 3–6 better", body: "Build type coverage, not a museum of 3-star Rhydons. Lead a Mega of the boss’s weak type." },
    no: "next"
  },
  {
    q: "Do you still need it for the dex, XL candy, a trade, or a Showcase (XXL)?",
    yes: { kind: "tag", title: "Keep temporarily", body: "Tag DEX, TRADE, TEMP, or WALL. Transfer after the job is done." },
    no: { kind: "dump", title: "Transfer for candy", body: "It has no job. If you hesitate, Favorite and leave it until the next cleanup." }
  }
];

const state = {
  dex: [],
  cpm: [],
  mon: null,
  wiz: 0,
  defTypes: [],
  rankCache: new Map(),
  filterTab: "pins",
  flowStep: 0,
  flowView: "diy",
  flowDone: new Set()
};

function $(id) { return document.getElementById(id); }

function starsFromIvs(a, d, s) {
  const total = a + d + s;
  if (total === 45) return { n: 4, label: "4★ hundo" };
  if (total >= 37) return { n: 3, label: "3★" };
  if (total >= 30) return { n: 2, label: "2★" };
  if (total >= 23) return { n: 1, label: "1★" };
  return { n: 0, label: "0★" };
}

function cpOf(mon, a, d, s, cpm) {
  const atk = mon.a + a;
  const def = mon.f + d;
  const sta = mon.h + s;
  return Math.max(10, Math.floor((atk * Math.sqrt(def) * Math.sqrt(sta) * cpm * cpm) / 10));
}

function hpOf(mon, s, cpm) {
  return Math.max(10, Math.floor((mon.h + s) * cpm));
}

function maxLevelForCap(mon, a, d, s, cap) {
  const arr = state.cpm;
  let lo = 0;
  let hi = arr.length - 1;
  let best = null;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const row = arr[mid];
    const cp = cpOf(mon, a, d, s, row.m);
    if (cp <= cap) {
      best = { level: row.l, cp, cpm: row.m };
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return best;
}

function leagueTable(mon, cap) {
  const key = `${mon.n}:${cap}`;
  if (state.rankCache.has(key)) return state.rankCache.get(key);
  const products = new Float64Array(4096);
  const levels = new Float32Array(4096);
  const cps = new Uint16Array(4096);
  let i = 0;
  for (let ia = 0; ia <= 15; ia++) {
    for (let id = 0; id <= 15; id++) {
      for (let is = 0; is <= 15; is++, i++) {
        const hit = maxLevelForCap(mon, ia, id, is, cap);
        if (hit) {
          products[i] = productAt(mon, ia, id, is, hit.cpm);
          levels[i] = hit.level;
          cps[i] = hit.cp;
        }
      }
    }
  }
  const table = { products, levels, cps };
  state.rankCache.set(key, table);
  return table;
}

function productAt(mon, a, d, s, cpm) {
  const atk = (mon.a + a) * cpm;
  const def = (mon.f + d) * cpm;
  const hp = hpOf(mon, s, cpm);
  return atk * def * hp;
}

function rankLeague(mon, a, d, s, cap) {
  const table = leagueTable(mon, cap);
  const idx = a * 256 + d * 16 + s;
  const myProd = table.products[idx];
  if (!myProd) return { rank: 4096, total: 4096, pct: 0, level: "—", cp: "—" };
  let better = 0;
  for (let i = 0; i < 4096; i++) {
    if (table.products[i] > myProd + 1e-6) better++;
  }
  const rank = better + 1;
  const pct = Math.max(0, Math.round((1 - (rank - 1) / 4095) * 1000) / 10);
  return { rank, total: 4096, pct, level: table.levels[idx], cp: table.cps[idx] };
}

function floorHint(a, d, s) {
  const m = Math.min(a, d, s);
  if (a + d + s === 0) return "Possible nundo (wild / some GBL floors).";
  if (m >= 12) return "Could be lucky (12 floor) or a high roll from raids.";
  if (m >= 10) return "Fits raid / egg / research floor (10).";
  if (m >= 6) return "Fits shadow-raid floor (6) or weather/wild.";
  if (m >= 4) return "Fits weather-boosted wild floor (4).";
  return "Must be wild, trade, Rocket, or a 0-floor GBL event — not a raid hatch.";
}

function renderIvs() {
  const box = $("ivOut");
  const mon = state.mon;
  const a = clampIV($("ivA").value);
  const d = clampIV($("ivD").value);
  const s = clampIV($("ivS").value);
  const st = starsFromIvs(a, d, s);
  const pct = Math.round(((a + d + s) / 45) * 1000) / 10;
  if (!mon) {
    box.innerHTML = `<p class="lede">Pick a species to see CP and PvP rank. Stars from IVs alone: <span class="stars">${"★".repeat(st.n)}${"☆".repeat(4-st.n)}</span> ${st.label} (${pct}%).</p>
      <p class="tiny">${floorHint(a,d,s)}</p>`;
    return;
  }
  const cpm50 = state.cpm.find(r => r.l === 50)?.m ?? 0.8403;
  const cpm20 = state.cpm.find(r => r.l === 20)?.m ?? 0.5974;
  const cp50 = cpOf(mon, a, d, s, cpm50);
  const cp20 = cpOf(mon, a, d, s, cpm20);
  const gl = rankLeague(mon, a, d, s, 1500);
  const ul = rankLeague(mon, a, d, s, 2500);
  const raidNote = a >= 13
    ? "Raid / Master: high Attack is what you want."
    : "Raid / Master: Attack is low — better as a GL/UL bulk hunt than a DPS tool.";
  const pvpNote = a <= 1 && d >= 11 && s >= 11
    ? "Classic GL/UL bulk spread. Confirm rank for this species — some mons want more Attack for CMP."
    : a === 15 && d === 15 && s === 15
      ? "Hundo. Best for raids and Master League. Often worse in Great/Ultra because it hits the cap at a lower level."
      : "Not the textbook 0/15/15. Still fine if the species is right and rank is roughly top 100.";

  box.innerHTML = `
    <div class="stat-grid">
      <div class="stat"><span>Appraisal</span><strong class="stars">${"★".repeat(st.n)}${"☆".repeat(4-st.n)}</strong><span>${pct}% · ${a}/${d}/${s}</span></div>
      <div class="stat"><span>${mon.n}</span><strong>${mon.t.map(t => t[0].toUpperCase()+t.slice(1)).join(" / ")}</strong><span>Base ${mon.a} / ${mon.f} / ${mon.h}</span></div>
      <div class="stat"><span>CP @ 20 (raid catch)</span><strong>${cp20}</strong></div>
      <div class="stat"><span>CP @ 50</span><strong>${cp50}</strong></div>
      <div class="stat"><span>Great League (1500)</span><strong>Rank ${gl.rank}</strong><span>Lv ${gl.level} · CP ${gl.cp} · top ${gl.pct}%</span></div>
      <div class="stat"><span>Ultra League (2500)</span><strong>Rank ${ul.rank}</strong><span>Lv ${ul.level} · CP ${ul.cp} · top ${ul.pct}%</span></div>
    </div>
    <p class="advice ${a >= 13 ? "good" : "warn"}">${raidNote}</p>
    <p class="advice ${a <= 2 ? "good" : "warn"}">${pvpNote}</p>
    <p class="tiny">${floorHint(a,d,s)} Rank is local stat-product, not PvPoke’s moveset ranking. Species still beats IVs.</p>
  `;
}

function clampIV(v) {
  const n = Number(v);
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(15, Math.round(n)));
}

function renderWizard() {
  const i = state.wiz;
  $("wizBar").style.width = `${((i) / WIZARD.length) * 100}%`;
  const step = WIZARD[i];
  if (!step) return;
  $("wizStep").innerHTML = `
    <p class="lede" style="font-size:1.05rem;color:var(--ink)">${step.q}</p>
    <div class="row">
      <button class="choice yes" data-ans="yes" type="button">Yes</button>
      <button class="choice no" data-ans="no" type="button">No</button>
    </div>
    <p class="tiny" style="margin-top:10px">Step ${i + 1} of ${WIZARD.length}</p>
  `;
}

function showVerdict(v) {
  $("wizBar").style.width = "100%";
  const cls = v.kind === "keep" ? "keep" : v.kind === "tag" ? "tag" : "dump";
  $("wizStep").innerHTML = `
    <div class="verdict ${cls}">
      <div class="kicker">${v.kind === "dump" ? "No job" : v.kind === "tag" ? "Needs a tag" : "Keeper"}</div>
      <h3>${v.title}</h3>
      <p>${v.body}</p>
    </div>
    <button class="ghost" type="button" id="wizReset">Check another</button>
  `;
}

function fallbackCopy(text) {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("aria-hidden", "true");
  el.contentEditable = "true";
  el.readOnly = false;
  el.style.cssText = "position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:0;opacity:0.01;";
  document.body.appendChild(el);
  el.focus();
  const range = document.createRange();
  range.selectNodeContents(el);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  el.setSelectionRange(0, text.length);
  let ok = false;
  try { ok = document.execCommand("copy"); } catch { ok = false; }
  sel.removeAllRanges();
  document.body.removeChild(el);
  return ok;
}

function markCopied(btn, ok) {
  const prev = btn.dataset.label || "Copy";
  btn.textContent = ok ? "Copied" : "Failed";
  btn.classList.toggle("copied", ok);
  clearTimeout(btn._copyTimer);
  btn._copyTimer = setTimeout(() => {
    btn.textContent = prev;
    btn.classList.remove("copied");
  }, 1400);
}

function copySearch(text, btn) {
  const ok = fallbackCopy(text);
  if (ok) {
    markCopied(btn, true);
    return;
  }
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => markCopied(btn, true)).catch(() => markCopied(btn, false));
    return;
  }
  markCopied(btn, false);
}

function loadFlowDone() {
  try {
    const raw = JSON.parse(localStorage.getItem("box-coach-flow") || "[]");
    state.flowDone = new Set(Array.isArray(raw) ? raw : []);
  } catch {
    state.flowDone = new Set();
  }
}

function saveFlowDone() {
  localStorage.setItem("box-coach-flow", JSON.stringify([...state.flowDone]));
}

function searchBlock(f, tone) {
  const kind = (f.go || "").startsWith("Tag") || (f.go || "").startsWith("★") || (f.go || "").startsWith("Star")
    ? "do-tag"
    : (f.go || "").startsWith("Untag")
      ? "do-untag"
      : (f.go || "").startsWith("Transfer") || (f.go || "").startsWith("Tag or")
        ? "do-dump"
        : "do-act";
  const pins = pinFilters();
  const pinN = f.pin ? pins.findIndex((x) => x.tag === f.tag) + 1 : 0;
  const slot = f.pin ? `Pin ${pinN} of 12` : "Type in GO — don’t pin";
  const nameBtn = f.pin
    ? `<button class="copy-btn copy-name" type="button" data-q="${encodeURIComponent(f.tag)}" data-label="Name">Name</button>`
    : "";
  return `
    <div class="search-block">
      <div class="do-banner ${kind}">
        <span class="do-kicker">${slot}</span>
        <strong>${f.go}</strong>
        <span class="do-how">${f.how}</span>
      </div>
      <div class="search-head">
        <span class="tag-chip ${f.pin ? tone : "stock"}">${f.pin ? pinN + " " : ""}${f.tag}</span>
        ${nameBtn}
      </div>
      <div class="code-row">
        <code>${f.q}</code>
        <button class="copy-btn" type="button" data-q="${encodeURIComponent(f.q)}" data-label="Copy">Copy</button>
      </div>
    </div>`;
}

function renderPinList() {
  const jobs = $("jobTags");
  const pins = $("pinSearches");
  if (jobs) {
    jobs.innerHTML = JOB_TAGS.map((t) => `
      <div class="job-tag-row">
        <span class="tag-chip tag">${t.name}</span>
        <span class="search-note">${t.how}</span>
        <button class="copy-btn copy-name" type="button" data-q="${encodeURIComponent(t.name)}" data-label="Name">Name</button>
      </div>`).join("");
  }
  if (pins) {
    pins.innerHTML = pinFilters()
      .map((f) => searchBlock(f, f.group === "evolve" ? "evolve" : f.group === "transfer" ? "transfer" : "tag"))
      .join("");
  }
}

function showFlowView(view) {
  state.flowView = view;
  document.querySelectorAll("[data-flow-view]").forEach((b) => {
    b.classList.toggle("on", b.dataset.flowView === view);
  });
  const diy = view === "diy";
  $("diyGuide").classList.toggle("hidden", !diy);
  $("flowChrome").classList.toggle("hidden", diy);
  $("flowStep").classList.toggle("hidden", diy);
  $("flowNav").classList.toggle("hidden", diy);
  $("wizCard").classList.toggle("hidden", diy);
}

function renderFlow() {
  const i = state.flowStep;
  const step = FLOW[i];
  const phaseLabel = { tag: "Tag", evolve: "Evolve", transfer: "Transfer" }[step.phase];
  $("flowDots").innerHTML = FLOW.map((s, n) =>
    `<button type="button" class="flow-dot ${s.phase}${n === i ? " on" : ""}${state.flowDone.has(s.id) ? " done" : ""}" data-flow-goto="${n}" aria-label="${s.title}"></button>`
  ).join("");
  $("flowMeta").innerHTML = `<span class="tag-chip ${step.phase}">${phaseLabel}</span> Step ${i + 1} of ${FLOW.length}`;
  const blocks = step.keys.map((k) => FILTERS.find((f) => f.tag === k)).filter(Boolean)
    .map((f) => searchBlock(f, step.phase)).join("");
  $("flowStep").innerHTML = `
    <div class="card">
      <h2 style="text-transform:none;letter-spacing:-0.02em;font-size:1.25rem;color:var(--ink)">${step.title}</h2>
      <p class="lede">${step.why}</p>
      <p class="apply-line"><strong>In GO:</strong> ${step.apply}</p>
      ${blocks}
      <label class="check flow-check"><input type="checkbox" id="flowDoneBox" ${state.flowDone.has(step.id) ? "checked" : ""} /><span>Mark this step done</span></label>
    </div>`;
  $("flowBack").disabled = i === 0;
  $("flowNext").textContent = i === FLOW.length - 1 ? "Start over" : "Next";
}

function renderFilters() {
  const list = state.filterTab === "pins"
    ? pinFilters()
    : FILTERS.filter((f) => f.group === state.filterTab);
  const hint = {
    tag: "Gold = one of 12 pins. The rest: type in GO, don’t pin.",
    transfer: "Pin EXTRAS, AGE07, DUMP. INBOX is pin 2.",
    evolve: "Pin EVOTAG and EVOCD. Candy only goes to tagged copies.",
    pins: "Paste these 12 in order. Name the favorite WEEK, INBOX, PVPIV… Copy pastes the string."
  }[state.filterTab];
  $("filterHint").textContent = hint;
  $("filters").innerHTML = list.map((f) => searchBlock(f, f.group === "evolve" ? "evolve" : f.group === "transfer" ? "transfer" : "tag")).join("");
}

function effectiveness(atk, defTypes) {
  return defTypes.reduce((m, t) => m * (ATK[atk][t] ?? 1), 1);
}

function renderTypes() {
  const picks = $("typePicks");
  picks.innerHTML = TYPES.map(t => {
    const on = state.defTypes.includes(t) ? "on" : "";
    return `<button type="button" class="type-chip ${on}" data-type="${t}" style="background:${TYPE_COLOR[t]}">${t}</button>`;
  }).join("");
  const out = $("typeOut");
  if (!state.defTypes.length) {
    out.innerHTML = `<p class="lede">Tap one or two defending types.</p>`;
    return;
  }
  const rows = TYPES.map(atk => ({ atk, x: effectiveness(atk, state.defTypes) }))
    .filter(r => r.x !== 1)
    .sort((a, b) => b.x - a.x);
  const cls = (x) => x >= 4 ? "x4" : x === 2 ? "x2" : x === 0 ? "x0" : x <= 0.25 ? "x025" : "x05";
  out.innerHTML = `<p class="lede">Defending ${state.defTypes.join(" / ")}</p>` + rows.map(r =>
    `<div class="match"><span>${r.atk}</span><b class="${cls(r.x)}">${r.x}×</b></div>`
  ).join("");
}

function renderWeather() {
  $("weather").innerHTML = WEATHER.map(([w, t]) =>
    `<div class="match"><span>${w}</span><b>${t}</b></div>`
  ).join("");
}

function searchDex(q) {
  const s = q.trim().toLowerCase();
  if (s.length < 1) return [];
  return state.dex.filter(p => p.n.toLowerCase().includes(s)).slice(0, 12);
}

function showSuggest(list) {
  const el = $("suggest");
  if (!list.length) { el.classList.add("hidden"); el.innerHTML = ""; return; }
  el.classList.remove("hidden");
  el.innerHTML = list.map(p =>
    `<button type="button" data-name="${p.n.replaceAll('"','&quot;')}">${p.n} <span class="tiny">#${p.d}</span></button>`
  ).join("");
}

function pickMon(name) {
  state.mon = state.dex.find(p => p.n === name) || null;
  $("species").value = name;
  $("suggest").classList.add("hidden");
  renderIvs();
}

async function loadData() {
  const [dex, cpm] = await Promise.all([
    fetch("data/pokemon.json").then(r => r.json()),
    fetch("data/cpm.json").then(r => r.json())
  ]);
  state.dex = dex;
  state.cpm = cpm;
}

function wire() {
  document.querySelectorAll(".tabs button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("on"));
      btn.classList.add("on");
      document.querySelectorAll(".panel").forEach(p => p.classList.toggle("active", p.dataset.panel === btn.dataset.tab));
    });
  });

  $("wizStep").addEventListener("click", (e) => {
    const reset = e.target.closest("#wizReset");
    if (reset) { state.wiz = 0; renderWizard(); return; }
    const ans = e.target.closest("[data-ans]");
    if (!ans) return;
    const step = WIZARD[state.wiz];
    if (ans.dataset.ans === "yes") {
      showVerdict(step.yes);
      return;
    }
    const nxt = step.no;
    if (typeof nxt === "object") { showVerdict(nxt); return; }
    state.wiz += 1;
    if (state.wiz >= WIZARD.length) {
      showVerdict({ kind: "dump", title: "Transfer for candy", body: "No job left." });
      return;
    }
    renderWizard();
  });

  $("filters").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-q]");
    if (!btn) return;
    e.preventDefault();
    copySearch(decodeURIComponent(btn.dataset.q), btn);
  });

  $("panel-tags").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-q]");
    if (!btn) return;
    e.preventDefault();
    copySearch(decodeURIComponent(btn.dataset.q), btn);
  });

  $("flowStep").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-q]");
    if (btn) {
      e.preventDefault();
      copySearch(decodeURIComponent(btn.dataset.q), btn);
    }
  });
  $("flowStep").addEventListener("change", (e) => {
    if (e.target.id !== "flowDoneBox") return;
    const id = FLOW[state.flowStep].id;
    if (e.target.checked) state.flowDone.add(id);
    else state.flowDone.delete(id);
    saveFlowDone();
    renderFlow();
  });
  $("flowDots").addEventListener("click", (e) => {
    const b = e.target.closest("[data-flow-goto]");
    if (!b) return;
    state.flowStep = Number(b.dataset.flowGoto);
    renderFlow();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("flowBack").addEventListener("click", () => {
    if (state.flowStep > 0) state.flowStep -= 1;
    renderFlow();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("flowNext").addEventListener("click", () => {
    if (state.flowStep >= FLOW.length - 1) state.flowStep = 0;
    else state.flowStep += 1;
    renderFlow();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll("[data-flow-view]").forEach((btn) => {
    btn.addEventListener("click", () => showFlowView(btn.dataset.flowView));
  });
  $("diyGuide").addEventListener("click", (e) => {
    const jump = e.target.closest("[data-diy-goto]");
    if (!jump) return;
    state.flowStep = Number(jump.dataset.diyGoto);
    showFlowView("steps");
    renderFlow();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll("[data-filter-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.filterTab = btn.dataset.filterTab;
      document.querySelectorAll("[data-filter-tab]").forEach((b) => b.classList.toggle("on", b === btn));
      renderFilters();
    });
  });

  $("typePicks").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-type]");
    if (!chip) return;
    const t = chip.dataset.type;
    if (state.defTypes.includes(t)) {
      state.defTypes = state.defTypes.filter(x => x !== t);
    } else if (state.defTypes.length < 2) {
      state.defTypes = [...state.defTypes, t];
    } else {
      state.defTypes = [state.defTypes[1], t];
    }
    renderTypes();
  });

  ["ivA","ivD","ivS"].forEach(id => $(id).addEventListener("input", renderIvs));

  $("species").addEventListener("input", (e) => {
    const q = e.target.value;
    const hits = searchDex(q);
    const exact = state.dex.find(p => p.n.toLowerCase() === q.trim().toLowerCase());
    if (exact) { pickMon(exact.n); return; }
    state.mon = null;
    showSuggest(hits);
    renderIvs();
  });
  $("suggest").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-name]");
    if (b) pickMon(b.dataset.name);
  });

  $("installBtn").addEventListener("click", () => $("installSheet").classList.remove("hidden"));
  $("closeSheet").addEventListener("click", () => $("installSheet").classList.add("hidden"));
  $("installSheet").addEventListener("click", (e) => {
    if (e.target.id === "installSheet") $("installSheet").classList.add("hidden");
  });

  const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  if (!standalone) $("installBtn").hidden = false;
}

function registerSW() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

loadFlowDone();
renderPinList();
renderFlow();
renderFilters();
renderTypes();
renderWeather();
renderWizard();
wire();
registerSW();
loadData().then(renderIvs).catch(() => {
  $("ivOut").innerHTML = `<p class="advice bad">Could not load species data. Serve this folder over http (not file://).</p>`;
});
