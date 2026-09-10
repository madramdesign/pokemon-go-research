# In-game filters by keep job

**Snapshot date:** 1 September 2026  
**Pairs with:** [what-pokemon-to-keep.md](what-pokemon-to-keep.md)

These are **high-level storage searches**, not species lists. Paste them in the Pokémon search bar. Pin the ones you use weekly. Tag keepers first; transfer last.

The search bar cannot know “this is meta this season.” IV and keyword filters **find candidates**. You still check [PvPoke](https://pvpoke.com/) / [Pokebattler](https://www.pokebattler.com/) and then **tag** the ones you will actually keep.

---

## How the bar works

| Symbol | Meaning | Example |
| --- | --- | --- |
| `&` | AND (splits the whole query) | `shiny&4*` |
| `,` | OR (binds tighter than `&`) | `3*,4*` |
| `!` | NOT the next term only | `!shiny` |
| `+name` | Whole evolution family | `+azurill` |

No parentheses. Repeat `!` for each exclusion: `!shiny&!lucky&!favorite`.

Per-stat scale: `0` = IV 0, `1` = 1–5, `2` = 6–10, `3` = 11–14, `4` = 15.

Do **not** name a tag the same as a keyword (`shiny`, `lucky`, `shadow`, `raid`, `dynamax`, …) or that keyword stops working.

---

## Tags to create once

≤12 characters. Do **not** reuse keywords (`shiny`, `lucky`, `shadow`, `raid`, `dynamax`, `mega1`, …).

**On the Pokémon (job tags):** `PVP` `RAID` `MAX` `MEGA` `DEX` `TRADE` `WALL` `TEMP`

**Pinned search nicknames** (Box Coach gold chips — name the *search*, not a job tag):

| Name | Search |
| --- | --- |
| `EVORAID` | `evolve&4attack&3*,4*` |
| `EVOPVP` | `evolve&cp-1500&0-1attack&3-4defense&3-4hp` |
| `EVODEX` | `evolve&evolvenew` |
| `EVOLUCK` | `evolve&lucky` |
| `EVOSHAD` | `evolve&shadow&4attack` |
| `EVOCD` | `+swampert,+mamoswine,+metagross,+garchomp,+machamp,+charizard,+dragonite,+salamence,+rhyperior,+lucario` |
| `EVOITEM` | `evolve&item` |
| `XLKEEP` | `countcandyxl1-&#RAID,#PVP,#MAX` |
| `CANDY50` | `countcandy50-&evolve` |
| `PWRRAID` | `#RAID&4attack&3*,4*&!evolve` |
| `LILCUP` | `cp-500&0-1attack&3-4defense&3-4hp&evolve` |
| `STAR1ST` | `4*,shiny,lucky,legendary,mythical,ultrabeast,costume,background,@special,fusion,buddy4` |
| `NUNDO` | `0attack&0defense&0hp` |
| `INVEST` | `dynamax,gigantamax,mega1,mega2,mega3,shadow&@frustration,adventureeffect` |
| `PVPIV` | `0-1attack&3-4defense&3-4hp` |
| `GL1500` | `cp-1500&0-1attack&3-4defense&3-4hp` |
| `UL2500` | `cp-2500&0-1attack&3-4defense&3-4hp` |
| `MLIV` | `legendary,mythical,ultrabeast&3*,4*` |
| `PVP2MV` | `#PVP&!@3move` |
| `FRUST` | `shadow&@frustration` |
| `RAID15` | `4attack&3*,4*` |
| `SHADATK` | `shadow&4attack` |
| `MAXXTRA` | `dynamax,gigantamax&!#&!favorite` |
| `MEGCOV` | `megaevolve,mega1,mega2,mega3,fusion` |
| `COLLECT` | `shiny,costume,background,4*,lucky,xxl,xxs` |
| `XTRADE` | `legendary,mythical,ultrabeast&!favorite&!#` |
| `OLD20` | `2016,2017,2018,2019,2020&!favorite` |
| `WALLS` | `+chansey,+snorlax,+giratina,+togepi` |
| `NOTAG` | `!#` |
| `DUMP` | `!4*&!shiny&!shadow&!legendary&!mythical&!lucky&!costume&!background&!favorite&!#` |
| `AGE07` | `age0-7&!3*&!4*&!shiny&!shadow&!favorite&!#` |

After a cleanup, keepers should be **Favorite, a job tag, or both**. Untagged = review pile.

---

## Evolve and candy (who to spend on)

`evolve` only lists Pokémon you can evolve **right now**. Queue, not select-all. Use `EVORAID` first, then `EVOPVP` (stay under 1,500). `PWRRAID` = already-evolved RAID tags to power up. Second move (`PVP2MV`) before XL. `LILCUP` = do not evolve if you play the cup.

---

## 0. Always keep (favorite these first)

Irreplaceables from the keep guide. Run this, star them, then ignore them during cleanup.

```
4*,shiny,lucky,legendary,mythical,ultrabeast,costume,background,@special,fusion,buddy4
```

Nundos (rarer than hundos if you collect them):

```
0attack&0defense&0hp
```

Already-invested combat pieces:

```
dynamax,gigantamax,mega1,mega2,mega3,shadow&@frustration,adventureeffect
```

---

## 1. Competitive — GO Battle League

Low Attack + high bulk is the default GL/UL hunt. A 4* is often **worse** here.

**All leagues, PvP-shaped IVs:**

```
0-1attack&3-4defense&3-4hp
```

**Great League candidates** (still under 1,500 — do not power up until you check the cap):

```
cp-1500&0-1attack&3-4defense&3-4hp
```

**Ultra League candidates:**

```
cp-2500&0-1attack&3-4defense&3-4hp
```

**Master League / high-IV legendaries** (here 4* *is* the goal):

```
legendary,mythical,ultrabeast&3*,4*
```

**Little Cup (only if you play it):**

```
cp-500&0-1attack&3-4defense&3-4hp&evolve
```

**PvP unfinished** (tagged for GBL but still missing the second charged move):

```
#PVP&!@3move
```

**Shadows still stuck with Frustration** (keep; TM during Rocket windows):

```
shadow&@frustration
```

Tag keepers `PVP`. One or two per species you play is enough.

---

## 2. Competitive — raids and gym attackers

Raids want **high Attack**, not the PvP spread. Keep 3–6 per type plus one Mega — not every 3-star.

**High-Attack raid tools** (3* or 4*, Attack IV 15):

```
4attack&3*,4*
```

**Shadows with high Attack** (often better than a non-shadow hundo — do not purify by default):

```
shadow&4attack
```

**By damage type (swap the type word):** Fire, Water, Grass, Electric, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, Fairy.

Species of that type:

```
dragon&4attack&3*,4*
```

Pokémon that actually **know a move of that type** (better for a raid party):

```
@dragon&cp2500-&3*,4*
```

**Cheap Community Day style attackers you already own** (family search, then pick the best IVs):

```
+swampert,+mamoswine,+metagross,+garchomp,+machamp,+charizard
```

Tag keepers `RAID`. Transfer the 2-star leftovers of the same family.

---

## 3. Competitive — Max Battles

Investment lives on **that** Pokémon. Keep a usable attacker set and a healer/tank if the meta needs it; dump extra unlevelled commons.

```
dynamax,gigantamax
```

Unlevelled extras to review (not tagged yet):

```
dynamax,gigantamax&!#&!favorite
```

Tag keepers `MAX`.

---

## 4. Competitive — Mega / Primal

```
megaevolve,mega1,mega2,mega3,fusion
```

Tag your coverage Mega `MEGA`. One useful Mega leveled beats five dabbling.

---

## 5. Collector

One search for “this is a collection piece, not candy”:

```
shiny,costume,background,4*,lucky,xxl,xxs
```

Split views:

| What | Search |
| --- | --- |
| Shinies | `shiny` |
| Costumes | `costume` |
| Any event / location card | `background` |
| Location cards only | `locationbackground` |
| Event backgrounds only | `specialbackground` |
| Hundos | `4*` |
| Nundos | `0attack&0defense&0hp` |
| Showcase sizes | `xxl,xxs` |
| Unown letters | `unown` |
| Regionals / forms by region | `alola,galar,hisui,paldea` |
| Trade-evolve leftover | `tradeevolve` |
| New dex evolution waiting | `evolve&evolvenew` |
| Gender completion | `male` / `female` / `genderunknown` |

Tag living-dex copies `DEX`. Keep **one of each costume/background you care about**, not twenty.

---

## 6. Trade / lucky bait

```
legendary,mythical,ultrabeast&!favorite&!#
```

Old catches (higher lucky chance historically — still useful as trade bait):

```
2016,2017,2018,2019,2020&!favorite
```

Far-away trades (more candy + Pilot medal):

```
distance100-&!favorite&!shiny
```

Lucky Pokémon themselves (usually keep — cheap to power up; mediocre GL/UL because of the 12 Attack floor):

```
lucky
```

Tag extras `TRADE`. Do not transfer a 2016–2020 legendary until you have decided trade vs candy.

---

## 7. Gym defenders

```
+chansey,+snorlax,+giratina,+togepi
```

Or by bulk:

```
hp200-
```

Tag 1–2 walls `WALL`. IVs barely matter compared to “is it still in the gym.”

---

## 8. Get rid of (transfer review)

**Never select-all blind.** This view hides the obvious keepers. Eyeball it. If something you care about still appears, Favorite or tag it, then run the search again.

**Safe-ish mass-transfer view:**

```
!4*&!shiny&!shadow&!legendary&!mythical&!lucky&!costume&!background&!favorite&!#
```

**More aggressive** (also hides 3-stars — **this will delete Great League rank-1s**. Only use after you already tagged PvP candidates):

```
!3*&!4*&!shiny&!shadow&!legendary&!mythical&!lucky&!costume&!favorite&!#
```

**This week’s junk** (Community Day / Spotlight leftovers):

```
age0-7&!3*&!4*&!shiny&!shadow&!favorite&!#
```

**Low-CP candy:**

```
cp-100&!shiny&!favorite&!#
```

**Untagged only** — your real cleanup queue:

```
!#
```

When in doubt, Favorite and leave it.

---

## Weekly cleanup order

1. Favorite irreplaceables (`4*,shiny,lucky,legendary,mythical,ultrabeast,costume,background`).
2. Tag PvP candidates (`0-1attack&3-4defense&3-4hp`) after a PvPoke glance → `PVP`.
3. Tag high-Attack raid tools → `RAID`. Tag Max / Mega keepers → `MAX` / `MEGA`.
4. Tag one living-dex / costume copy → `DEX`. Tag extras for friends → `TRADE`.
5. Open `!#`. Everything left needs a job or it is candy.
6. Open the safe transfer view. Eyeball. Transfer.

After a Community Day, add `age0-7` to the family you just farmed, e.g. `+charmander&age0-7`.

---

## Operators that silently break filters

- `fire&3*,water&4*` is **not** “(3* fire) or (4* water)”. `&` splits first. Run two searches instead.
- `char` matches Charmander **and** Charizard **and** any nickname containing “char”. Use `+charmander` for a family.
- Search strings have a character limit (~200). Split long OR lists.

---

## Sources

- [Official search help](https://niantic.helpshift.com/hc/en/6-pokemon-go/faq/1486-searching-filtering-your-pokemon-inventory/)
- [POGO Cleanup — search strings](https://pogocleanup.com/guides/search-strings-cheat-sheet.html)
- [Serebii — Pokémon search](https://serebii.net/pokemongo/pokemonsearch.shtml)
- [Pokémon GO Wiki — Pokémon search](https://pokemongo.fandom.com/wiki/Pok%C3%A9mon_search)
