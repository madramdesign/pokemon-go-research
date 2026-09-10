# Pokémon GO helper and cheat programs

**Snapshot date:** 1 September 2026  
**Scope:** A research catalog of third-party helper apps, hardware, maps, bots, spoofers, and related GitHub projects.  
**Not this doc:** How to install, configure, or use unofficial clients, GPS spoofers, bots, or scanners. This folder does not teach cheating.

Pokémon GO has had a large unofficial-software scene since launch week in 2016. The same ecosystem now spans (a) tools most serious players treat as normal, (b) hardware that sits in a gray area, and (c) software that Scopely / Niantic explicitly ban. The publisher still enforces the old Niantic fairness policy after the 2025–2026 ownership change.

If you only need the “what should I actually use” list, see [pokemon-go-overview.md](pokemon-go-overview.md) §10. This file is the longer map of the rest of the landscape.

---

## 1. Why this scene exists

Pokémon GO is a location game with hidden stats, a weekly event calendar, and raids that need other people. That creates demand for:

| Need | Typical unofficial answer |
| --- | --- |
| “Is this Pokémon worth keeping?” | Screen-reading IV overlays |
| “What raids / eggs / research are live?” | Web calendars (Leek Duck, Hub) |
| “Who can remote into this raid?” | PokéGenie matching, Campfire, Discord |
| “What spawned three blocks away?” | Live scanner maps |
| “Play without walking there” | GPS spoofers and modified clients |
| “Play while I sleep / work” | Bots, autocatch hardware, accessibility-style clickers |

The first three rows are mostly **companion tools**. The last three are **cheats** under the published Terms of Service, even when the marketing site says “safe.”

---

## 2. Official policy (what the publisher actually bans)

Help-center articles still branded Niantic, still in force under Scopely Explore:

- [Violating the Terms of Service](https://niantic.helpshift.com/hc/en/6-pokemon-go/faq/525-violating-the-terms-of-service/)
- [Gameplay Fairness Policy](https://niantic.helpshift.com/hc/en/6-pokemon-go/faq/39-gameplay-fairness-policy-1701994322/)

**Named as cheating** (non-exhaustive):

- Falsifying location (GPS spoofing)
- Using emulators
- Using modified or unofficial software
- Accessing clients or backends in an unauthorized way, including third-party software or add-ons
- Multi-accounting, account sharing, selling accounts (also in the broader ToS)

**Three-strike ladder** (typical; some offenses skip steps):

| Strike | What happens | Duration |
| --- | --- | --- |
| 1 | In-app warning; “shadowban”-style degradation (rare wilds missing, social features limited, Routes/Showcases blocked) | ~7 days |
| 2 | Account suspended | ~30 days |
| 3 | Permanent termination | Permanent |

Appeals go through the Help Center “Ban Appeal” form. The publisher says almost none are overturned.

**Practical reading:** overlays that only look at your screen are widely used and not the main ban target. Modified APKs/IPAs, unofficial RPC clients, GPS injection, and farm bots are. “I used a joystick but followed cooldowns” is still falsifying location.

---

## 3. Taxonomy (how to classify any tool)

Draw the line on **what the software does to the game**, not on whether it is free, open source, or “for education.”

| Class | What it does | Typical ToS status | Ban pattern |
| --- | --- | --- | --- |
| **A. Reference sites** | Event lists, DPS tables, PvP rankings. You type nothing into the game. | Allowed in practice | None |
| **B. Screen readers / overlays** | OCR or screenshot of the official app; compute IVs / PvP rank | Gray on paper (“add-ons”); not the strike pipeline players report | Very rare / unreported as a class |
| **C. Official social** | Campfire, official Plus+ | Allowed | None |
| **D. Community Discord bots** | Raid rooms from **player-submitted** screenshots | Usually fine if they do not ingest scanner feeds | None for screenshot-only use |
| **E. Hardware catchers** | Bluetooth gadget that pretends to be GO Plus | Official Plus+ allowed; clones technically unofficial | Almost no confirmed bans for clones alone |
| **F. Live maps / scanners** | Extra devices or injected clients scrape map objects for a city | Unauthorized backend access | Scanner *accounts* burn constantly; map *users* are a separate, lower-profile risk |
| **G. GPS spoofers** | Fake lat/long to the official or unofficial client | Explicitly banned | Common (strikes, shadowbans) |
| **H. Modified clients** | Sideloaded Pokémon GO with joystick, IV, nearby, bot features baked in | Explicitly banned | Highest detection surface |
| **I. Classic API bots** | Desktop program logs in and speaks the game protocol | Unauthorized client | 2016–2018 mass bans; few public working bots in 2026 |
| **J. On-device clickers** | AccessibilityService / MediaProjection taps the official app | Automation / unofficial software | Unclear; still ToS-risky |

This file lists public names so you can recognize them. It does not rank “safest cheat.”

---

## 4. Class A — reference sites (legitimate helpers)

These do not log into your account. They are the tools this folder already recommends.

| Project | What it is | Open source? |
| --- | --- | --- |
| [Leek Duck](https://leekduck.com/) | Events, bosses, research, eggs | No (website) |
| [PvPoke](https://pvpoke.com/) | PvP rankings and sims | Partial; community-known ranking engine |
| [Pokebattler](https://www.pokebattler.com/) | Raid estimator | No |
| [GO Battle Log](https://www.gobattlelog.com/) | GBL usage stats that feed some rankings | No |
| [The Silph Road](https://thesilphroad.com/) | Science / community (less central than 2017–2020) | Community, not a client |
| [POGO Cleanup](https://pogocleanup.com/), [Hundo Hunter](https://www.hundo-hunter.com/search-syntax) | In-game search strings | Web tools |
| [PokeMiners](https://github.com/PokeMiners) | Datamined Game Master + assets | **Yes** — see §8 |

Campfire is first-party, not third-party: [Campfire help](https://niantic.helpshift.com/hc/en/34-campfire/).

---

## 5. Class B — IV overlays and raid matchmaking

These read **pixels** (screenshot, overlay, or iOS broadcast). They do not send RPCs as Pokémon GO.

| App | Platform | Notes |
| --- | --- | --- |
| [PokéGenie](https://pokegenie.net/) | iOS + Android (App Store / Play) | IV, PvP rank, name paste, raid lobby matching. Remote matching has used a publisher-facing raid API in recent years; that is a different legal/ToS posture than a spoof APK. |
| [Calcy IV](https://play.google.com/store/apps/details?id=tesmath.calcy) | Android (Play); iOS weaker | Fast overlay, pre-catch IV estimate from CP arc / circle, raid sim. Free, ad-supported. |

**Community consensus (not a legal opinion):** these are the “serious player” helpers. Niantic’s letter of the policy still mentions “add-ons,” but mass strikes have historically targeted spoofers and bots, not Calcy/Genie.

**Not the same thing:** any “IV scanner” bundled inside PGSharp, iPoGo, AnyTo, iToolab, MocPOGO, etc. Those products also fake GPS. The IV feature is not what makes them cheats; the location/client modification is.

---

## 6. Class D — Discord / community coordination (usually legitimate)

These help humans meet in the official app.

| Project | Role | Source |
| --- | --- | --- |
| **PokeNav** | Raid rooms from screenshots, research reports, trainer profiles, mobile companion | [docs](https://docs-v1.pokenav.app/#/), [docs repo](https://github.com/PokeNavBot/pokenav-documentation) |
| **Meowth** (historical) | Older Discord raid bot | [FoglyOgly/Meowth](https://github.com/FoglyOgly/Meowth) |
| **IITC POI plugins** | Copy gym/stop data from Ingress intel into PokeNav/Meowth | e.g. [typographynerd/iitc-plugins](https://github.com/typographynerd/iitc-plugins) |

**Line to watch:** a Discord that only posts player screenshots is coordination. A Discord that DMs you “100 IV Dragonite at these GPS coordinates from a scanner” is a **map-feed client**. Same chat app, different class.

---

## 7. Class E — hardware

| Device | Status |
| --- | --- |
| **Pokémon GO Plus** (2016) / **Pokémon GO Plus +** (2023) | Official. Auto-spin; auto-catch species already in the Pokédex; Plus+ also talks to Pokémon Sleep. |
| **Go-tcha / Go-tcha Evolve, Brook Pocket Auto Catch, MEGACOM Dual Catchmon / DuoMon** | Third-party Bluetooth gadgets that emulate Plus. Community reports of bans *for the hardware alone* are scarce; they still sit outside the official accessory list. Dual-account gadgets also brush multi-accounting rules. |

This is the gray band: useful for walking with the phone in a pocket, not a substitute for spoofing, and not something to buy from random “Plus++” ads that also sell joystick APKs.

---

## 8. GitHub and open source — the parts that still matter

### 8.1 Datamine / data (not a cheat client)

These publish **game files**, not a login bot. Sites like PvPoke and Leek Duck depend on this class of data.

| Repo | What it is | Activity (as of this pass) |
| --- | --- | --- |
| [PokeMiners/game_masters](https://github.com/PokeMiners/game_masters) | GAME_MASTER dumps (stats, moves, items) | Active; ~175★ |
| [PokeMiners/pogo_assets](https://github.com/PokeMiners/pogo_assets) | Sprites, 3D, news art, translations | Active; ~510★ |
| [WatWowMap/Masterfile-Generator](https://github.com/WatWowMap/Masterfile-Generator) | Builds a `masterfile.json` from GAME_MASTER | Active |
| [WatWowMap/pogo-translations](https://github.com/WatWowMap/pogo-translations) | Names/strings for map UIs | Active |
| [AeonLucid/POGOProtos](https://github.com/AeonLucid/POGOProtos) | Historic protobuf definitions of the RPC | **Unmaintained**; points to [Furtif/POGOProtos](https://github.com/Furtif/POGOProtos) |

Explorer UI: [pokeminers.com/gmexplore](https://pokeminers.com/gmexplore/).

### 8.2 Scanner stack (live maps — Class F)

This is the modern replacement for 2016 “API maps.” Instead of a Python script pretending to be the phone, operators run **real phones** (often rooted, with extra apps) that play or inject the game and dump map objects into MySQL. Frontends then draw Pokémon, raids, quests, invasions.

**Backends / device controllers**

| Project | Role | GitHub |
| --- | --- | --- |
| **Map’A’Droid (MAD)** | Android-device scanner (rooted devices, GPS control, process inject to relay traffic) | [Map-A-Droid/MAD](https://github.com/Map-A-Droid/MAD) (~215★). Docs: [mad-docs](https://mad-docs.readthedocs.io/). ReactMap now marks MAD as **deprecated / untested**. |
| **RealDeviceMap (RDM)** | Swift scanner + device manager; raids, stops, quests, Pokémon | [RealDeviceMap/RealDeviceMap](https://github.com/RealDeviceMap/RealDeviceMap) (~199★) |
| **Chuck** | Backend replacement for RDM | [WatWowMap/Chuck](https://github.com/WatWowMap/Chuck) |
| **Golbat** | Newer scanner backend used with ReactMap | [UnownHash/Golbat](https://github.com/UnownHash/Golbat) |

**Frontends**

| Project | Role | GitHub |
| --- | --- | --- |
| **ReactMap** | Current React map UI (IVs, PvP, raids, invasions, nests, auth) | [WatWowMap/ReactMap](https://github.com/WatWowMap/ReactMap) (~157★) |
| **RocketMAD** | MAD-compatible map frontend | [cecpk/RocketMAD](https://github.com/cecpk/RocketMAD) |
| **Diadem** | 2026 “next-gen” map frontend (small, AGPL) | [lenisko/diadem](https://github.com/lenisko/diadem) |
| **RocketMap** | 2016 Flask + Google Maps live map; **historic** | [RocketMap/RocketMap](https://github.com/RocketMap/RocketMap) |

**Alert bots (consume scanner webhooks)**

| Project | Role | GitHub |
| --- | --- | --- |
| **PoracleJS** | Discord/Telegram alarms for wilds, raids, quests, invasions | [KartulUdus/PoracleJS](https://github.com/KartulUdus/PoracleJS) |
| **WhMgr** | Discord webhook manager for RDM / Chuck | [versx/WhMgr](https://github.com/versx/WhMgr) |
| **PokeAlarm** | Older Python alarm layer for RocketMap-era maps | historic forks under various orgs |

**Public city maps** (closed source, donation/ad funded; they *consume* the stack above):

Examples still advertised in 2026 scrapers: [nycpokemap.com](http://nycpokemap.com/), [londonpogomap.com](http://londonpogomap.com/), plus Singapore / Sydney / Vancouver / Taipei equivalents. Using a website that plots wild IVs is still using unauthorized map data. Ban risk is lower for a browser user than for the burner accounts doing the scanning, but it is not “official Nearby.”

[ashokvarmamatta/PKMSpawn](https://github.com/ashokvarmamatta/pkmspawn) is a 2025–2026 Android app that **scrapes those city map sites** (and can export GPX). That is a map-aggregator, not a new RPC bot — still Class F from a ToS point of view if you play the coordinates.

### 8.3 2016–2018 API bots (historic, almost all dead)

Launch-year bots talked to Niantic’s servers with reverse-engineered protobufs. Niantic then required request **signing / hashing**. Third-party “hash servers” (Bossland / PokeHash / Pogodev-era shops) sold RPM keys. When hashing was not cracked, public bots died. Almost every repo below is archived or stuck on a dead API.

| Project | Language | Notes |
| --- | --- | --- |
| [tejado/pgoapi](https://github.com/tejado/pgoapi) | Python | The library everyone forked |
| [FeroxRev/Pokemon-Go-Rocket-API](https://github.com/FeroxRev/Pokemon-Go-Rocket-API) | C# | ~360★; NecroBot family |
| [PokemonGoF/PokemonGo-Bot](https://github.com/PokemonGoF/PokemonGo-Bot) | Python | Large community bot; hash-server era |
| [Necrobot-Private/PokemonGo-Bot](https://github.com/Necrobot-Private/PokemonGo-Bot) / [Ar1i/PokemonGo-Bot](https://github.com/Ar1i/PokemonGo-Bot) | C# | NecroBot line; archived |
| [AHAAAAAAA/PokemonGo-Map](https://github.com/AHAAAAAAA/PokemonGo-Map) | Python | Ancestor of RocketMap |
| [pogodevorg/pgoapi-go](https://github.com/pogodevorg/pgoapi-go) | Go | Archived |
| [iam4x/pokemongo-webspoof](https://github.com/iam4x/pokemongo-webspoof) | JS + Xcode | 2016 Mac → iPhone “simulate location” helper; obsolete vs modern iOS flags |

**Do not treat a 2026 GitHub clone of NecroBot as a working bot.** Many are malware droppers. Example to be wary of: [OrionPax811/PokeMobBot](https://github.com/OrionPax811/PokeMobBot) (created 2026) advertises “enter your Pokémon GO credentials” and ships a zip from the repo. That pattern is credential theft, not a revival of 2016 NecroBot.

### 8.4 On-device automation (Class J, 2025–2026)

A newer open-source pattern: **do not speak the API**. Watch the official app’s pixels and inject taps via Android Accessibility.

| Project | What it claims | GitHub | Created |
| --- | --- | --- | --- |
| **Backpacker** | Auto-spin PokéStops via MediaProjection + AccessibilityService; no root, no MITM | [joeyparrish/backpacker](https://github.com/joeyparrish/backpacker) | 2026-03; MIT; tiny |
| **RegiBot** | CV bot: catch + spin, “fast catch,” throw power | [CodeMemo/RegiBot](https://github.com/CodeMemo/RegiBot) (fork; APK from Juancavr6 releases) | 2025 |

These still automate gameplay. The README files themselves say they may violate ToS. They are also a **malware-shaped install** (sideload APK, Accessibility permission can tap anything). Treat unknown APKs as hostile until proven otherwise.

### 8.5 Hybrid: open bot that *requires* a paid modified client

[MerlionRock/RealAndroidBot](https://github.com/MerlionRock/RealAndroidBot) (RAB) is a documented open-source Android automator that is designed to sit **on top of** PGSharp, Pokemod/HAL, or Polygon. The GitHub project is the clicker; the actual game traffic still goes through a closed cheat client. Research-wise it is evidence that 2020s “bots” are client-plugins, not pgoapi scripts.

---

## 9. Closed-source cheat products (Class G / H)

These are **not** on GitHub as usable sources. They are sold via websites and Discord. Names change; clones and malware sites reuse the names. Listing them is so you can recognize ads and phishing, not so you can shop.

**Modified Pokémon GO clients (sideloaded APK / IPA)**

| Name | Typical pitch | Platform notes |
| --- | --- | --- |
| **PGSharp** | Joystick, teleport, nearby, IV, auto-walk; non-root Android APK that *replaces* the Play Store app | Android; often cited as easy to detect because it is a patched client |
| **iPoGo / iPogo Launcher** | Same idea for iOS | Sideloaded IPA / custom installer; iOS signing cat-and-mouse |
| **Pokemod / HAL** | Rooted-Android module ecosystem | Often paired with a GPS joystick app |
| **Polygon / PolygonX / Polygon#** | Advanced rooted Android spoofer + automations | Discord-distributed |
| **PGTools** | Spoof + automation (e.g. Rocket grunt farming) in marketing | Root / complex Android |
| **SpooferPro** | Historic iOS patched IPA brand | Same class as iPoGo |

**Desktop “official app, fake GPS” vendors** (marketed as safer because they do not patch the APK):

Names that show up in 2025–2026 SEO spam: **iToolab AnyGo**, **iAnyGo**, **MocPOGO**, **iWhereGo**, **Fonelora Location Changer**, **iFlowGo**, **AnyTo**, plus generic “Fake GPS” / “GPS JoyStick” Android apps.

Architecture in one sentence: a PC or privileged app writes a simulated location into iOS/Android so the **stock** Pokémon GO process reads fake coordinates. That is still “techniques to alter or falsify a device’s location.” Vendor pages that promise “undetectable in 2026” are ads.

**Emulators:** BlueStacks / Nox / etc. plus a spoof APK. The fairness policy names emulators directly.

---

## 10. Malware, phishing, and fake GitHub

The cheat market is a better credential-harvester than it is a game client.

**Recurring patterns:**

- Sites that rank “best spoofer 2026” and push an APK; many are clones with extra spyware.
- Modified IPAs that add a login proxy. You type Google / Apple / PTC into malware.
- GitHub repos that are 2016 READMEs plus a new zip of “PokeMobBot.exe.”
- Discord “free PGSharp” files.
- Accessibility-service “helpers” that can read every tap and password.

**Rule of thumb:** anything that asks for your Pokémon GO password, wants Accessibility or device-admin, or tells you to uninstall the Play/App Store copy of the game is a security incident even before it is a ToS issue.

Use a login you control with 2FA (Google/Apple/Nintendo). PTC-only accounts are hard to recover if a cheat app steals them.

---

## 11. Timeline (how the ecosystem evolved)

| Era | What people used | Why it broke |
| --- | --- | --- |
| **Jul–Aug 2016** | PokeVision, desktop API bots, first maps | Open, unsigned protocol |
| **Late 2016–2017** | NecroBot, PokemonGo-Bot, RocketMap, hash keys | Signing + account wipes |
| **2018–2020** | Real-device scanners (MAD, RDM); iSpoofer / iPoGo / PGSharp rise | API bots uneconomic; phones become the scanner |
| **2021–2023** | Rooted Android modules (Pokemod, Polygon); Plus+ launches; three-strike policy spelled out | Play Integrity / SafetyNet; client attestation |
| **2024–2026** | Same commercial clients + PC GPS vendors; tiny Accessibility bots on GitHub; ReactMap/Golbat as the map stack; MAD aging out | Scopely owns the game; detection still client-integrity + impossible travel |

There is no public, maintained “NecroBot for 2026.” What remains open source is **maps, datamines, and clickers**. Working spoofers are closed, paid, and adversarial.

---

## 12. What this folder treats as in-bounds vs out-of-bounds

**In-bounds (already used in the other docs):** Leek Duck, PvPoke, Pokebattler, PokéGenie, Calcy IV, Campfire, Silph/Discord communities, search-string sites, PokeMiners as a data citation.

**Documented here, not recommended:** city scanner maps, Discord IV feeds, unofficial Plus clones, any joystick/teleport product, modified APKs, bots, Accessibility automators.

**Out of scope forever:** setup guides, cooldown tables for teleporting, Magisk/root recipes, hash-server keys, “how to not get banned.”

---

## 13. Sources

**Publisher policy**

- [Violating the Terms of Service](https://niantic.helpshift.com/hc/en/6-pokemon-go/faq/525-violating-the-terms-of-service/)
- [Gameplay Fairness Policy](https://niantic.helpshift.com/hc/en/6-pokemon-go/faq/39-gameplay-fairness-policy-1701994322/)
- Three-strike writeup: [pokemonblog.com, 5 Sep 2023](https://pokemonblog.com/2023/09/05/niantic-has-updated-its-official-three-strike-policy-against-cheating-in-pokemon-go/)

**Open source (inspected via public GitHub / docs pages)**

- [PokeMiners](https://github.com/PokeMiners)
- [Map-A-Droid/MAD](https://github.com/Map-A-Droid/MAD), [MAD docs](https://mad-docs.readthedocs.io/en/latest/)
- [RealDeviceMap](https://github.com/RealDeviceMap/RealDeviceMap)
- [WatWowMap/ReactMap](https://github.com/WatWowMap/ReactMap)
- [UnownHash/Golbat](https://github.com/UnownHash/Golbat)
- [KartulUdus/PoracleJS](https://github.com/KartulUdus/PoracleJS)
- [versx/WhMgr](https://github.com/versx/WhMgr)
- [PokemonGoF/PokemonGo-Bot](https://github.com/PokemonGoF/PokemonGo-Bot)
- [RocketMap/RocketMap](https://github.com/RocketMap/RocketMap)
- [tejado/pgoapi](https://github.com/tejado/pgoapi)
- [FeroxRev/Pokemon-Go-Rocket-API](https://github.com/FeroxRev/Pokemon-Go-Rocket-API)
- [AeonLucid/POGOProtos](https://github.com/AeonLucid/POGOProtos)
- [joeyparrish/backpacker](https://github.com/joeyparrish/backpacker)
- [CodeMemo/RegiBot](https://github.com/CodeMemo/RegiBot)
- [MerlionRock/RealAndroidBot](https://github.com/MerlionRock/RealAndroidBot)
- [iam4x/pokemongo-webspoof](https://github.com/iam4x/pokemongo-webspoof)
- [PokeNavBot/pokenav-documentation](https://github.com/PokeNavBot/pokenav-documentation)

**Companion apps**

- [PokéGenie](https://pokegenie.net/), [Play listing](https://play.google.com/store/apps/details?id=com.cjin.pokegenie.standard)
- [Calcy IV on Play](https://play.google.com/store/apps/details?id=tesmath.calcy)

**Commercial cheat names** were taken from public SEO/review pages (PGSharp, iPoGo, PolygonX, PGTools, Pokemod, AnyGo, MocPOGO, etc.). Those pages are marketing. They are not safety advice.

---

## 14. Related docs

- [pokemon-go-overview.md](pokemon-go-overview.md) — game systems; short community-tool table
- [research-gaps.md](research-gaps.md) — this file covers gaps #4 (ToS), #8 (hardware), and part of #25 (bad third-party apps)
- [README.md](README.md) — index
