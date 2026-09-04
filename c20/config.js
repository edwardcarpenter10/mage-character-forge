window.FORGE_CONFIG = {
  code: "c20",
  storageKey: "lantern-lever-c20-forge-v1",
  mark: "C20",
  title: "Changeling 20th Character Forge",
  game: "Changeling: The Dreaming 20th Anniversary Edition",
  shortGame: "a chronicle between Banality and wonder",
  description: "A free, local-first C20 character creator for changelings, Kinain, enchanted mortals, and mortal NPCs, with advancement, JSON saves, and print-ready records.",
  logo: { kind: "changeling" },
  theme: { accent: "#4f3c79", accent2: "#bd8e49", bg: "#121018", bgDeep: "#07060b", panel: "#1c1727", panel2: "#292137", paper: "#ece4ee", paper2: "#d0c4dc", ink: "#20182a", muted: "#aba0bc", line: "#5d4c70", paperMuted: "#5e5069", paperLine: "#7f6e8e" },
  terminologySets: [
    { id: "seelie", label: "Seelie Court", description: "Kithain, Kith, Seeming, Court, House and fealty, Legacies, Arts, and Realms.", terms: { fields: { kith: "Kith", seeming: "Seeming", court: "Seelie Allegiance", house: "House / Fealty", seelieLegacy: "Seelie Legacy", unseelieLegacy: "Unseelie Legacy" }, groups: { arts: "Arts", realms: "Realms", backgrounds: "Backgrounds" }, ui: { advantagesHeading: "Arts, Realms, and fae Advantages", advantagesPrintTitle: "Arts, Realms, and Advantages" } } },
    { id: "unseelie", label: "Unseelie Court", description: "Kithain, Kith, Seeming, Court, compact, Legacies, Arts, and Realms.", terms: { fields: { kith: "Kith", seeming: "Seeming", court: "Unseelie Allegiance", house: "House / Compact", seelieLegacy: "Seelie Legacy", unseelieLegacy: "Unseelie Legacy" }, groups: { arts: "Arts", realms: "Realms", backgrounds: "Backgrounds" }, ui: { advantagesHeading: "Arts, Realms, and fae Advantages", advantagesPrintTitle: "Arts, Realms, and Advantages" } } },
    { id: "neutral", label: "Shadow Court & neutral", description: "Fae, lineage, life stage, allegiance, faction, bright and dark Legacies, powers, and domains.", terms: { fields: { kith: "Fae Lineage", seeming: "Life Stage", court: "Allegiance", house: "Faction / Freehold", seelieLegacy: "Bright Legacy", unseelieLegacy: "Dark Legacy" }, groups: { arts: "Fae Powers", realms: "Domains", backgrounds: "Ties and Backgrounds" }, specials: { glamour: "Fae Energy", banality: "Mundane Pressure" }, ui: { advantagesHeading: "Powers, domains, and fae ties", advantagesPrintTitle: "Powers, Domains, and Advantages" } } }
  ],
  identityFields: [
    { key: "name", label: "Name", placeholder: "Character name" },
    { key: "player", label: "Player", placeholder: "Player or Storyteller" },
    { key: "chronicle", label: "Chronicle", placeholder: "Chronicle name" },
    { key: "concept", label: "Concept", placeholder: "A few defining words" },
    { key: "nature", label: "Nature", placeholder: "Archetype" },
    { key: "demeanor", label: "Demeanor", placeholder: "Archetype" }
  ],
  abilities: {
    Talents: ["Alertness", "Athletics", "Brawl", "Empathy", "Expression", "Intimidation", "Kenning", "Leadership", "Streetwise", "Subterfuge"],
    Skills: ["Animal Ken", "Crafts", "Drive", "Etiquette", "Firearms", "Larceny", "Melee", "Performance", "Stealth", "Survival"],
    Knowledges: ["Academics", "Computer", "Enigmas", "Gremayre", "Investigation", "Law", "Medicine", "Politics", "Science", "Technology"]
  },
  profiles: [
    {
      id: "changeling",
      label: "Changeling",
      category: "Full supernatural",
      description: "A fae soul living a mortal life, shaped by Kith, Seeming, Court, Legacies, Arts, Realms, Glamour, and Banality.",
      rulesNote: "Standard C20 creation uses 7/5/3 Attributes, 13/9/5 Abilities, three Art dots, five Realm dots, five Background dots, and 15 freebies. Seeming adjustments are surfaced beside the core ratings and remain editable.",
      pools: { attributes: [7, 5, 3], abilities: [13, 9, 5], freebies: 15 },
      flawCap: 7,
      identityFields: [
        { key: "kith", label: "Kith", type: "select", options: ["Boggan", "Clurichaun", "Eshu", "Nocker", "Piskie", "Pooka", "Redcap", "Satyr", "Selkie", "Sidhe", "Sluagh", "Troll", "Inanimae", "Adhene", "Other"] },
        { key: "seeming", label: "Seeming", type: "select", options: ["Childling", "Wilder", "Grump"] },
        { key: "court", label: "Court", type: "select", options: ["Seelie", "Unseelie", "Shadow Court", "Unaligned", "Other"] },
        { key: "house", label: "House / Allegiance", placeholder: "House, kingdom, motley…" },
        { key: "seelieLegacy", label: "Seelie Legacy", placeholder: "Legacy" },
        { key: "unseelieLegacy", label: "Unseelie Legacy", placeholder: "Legacy" },
        { key: "affinityRealm", label: "Affinity Realm", type: "select", options: ["Actor", "Fae", "Nature", "Prop", "Scene", "Time"], help: "Select the character's affinity for advancement-cost guidance." }
      ],
      requiredIdentity: ["kith", "seeming", "court", "affinityRealm"],
      groups: [
        {
          id: "arts", kind: "art", label: "Arts", pool: 3, freebieCost: 5, xpNew: 7, xpMult: 4,
          traits: ["Autumn", "Chicanery", "Chronos", "Contract", "Dragon's Ire", "Legerdemain", "Metamorphosis", "Naming", "Oneiromancy", "Primal", "Pyretics", "Skycraft", "Soothsay", "Sovereign", "Spring", "Summer", "Wayfare", "Winter"],
          note: "The list includes core C20 Arts; custom entries support supplements and chronicle Arts."
        },
        {
          id: "realms", kind: "realm", label: "Realms", pool: 5, freebieCost: 3, xpNew: 3, xpMult: 3, affinityField: "affinityRealm", xpAffinityMult: 2,
          traits: ["Actor", "Fae", "Nature", "Prop", "Scene", "Time"],
          note: "Affinity Realm advancement uses the lower multiplier selected on the Foundation step."
        },
        {
          id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false,
          traits: ["Chimera", "Contacts", "Dreamers", "Holdings", "Mentor", "Remembrance", "Resources", "Retinue", "Title", "Treasures"],
          note: "Use custom entries for regional, House, and supplement Backgrounds."
        }
      ],
      specials: [
        { id: "glamour", label: "Glamour", min: 0, max: 10, freebieCost: 3, xpMult: 3, default: 4, fromIdentity: { key: "seeming", map: { Childling: 5, Wilder: 4, Grump: 4 } }, help: "Childlings add one Glamour. Wilders add one Glamour or Willpower; adjust the chosen rating manually." },
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 2, xpMult: 2, default: 4, fromIdentity: { key: "seeming", map: { Childling: 4, Wilder: 4, Grump: 5 } }, help: "Grumps add one Willpower. Wilders add one Glamour or Willpower; adjust the chosen rating manually." },
        { id: "banality", label: "Banality", min: 0, max: 10, freebieCost: 0, xp: false, default: 3, help: "Standard starting value is three; House Liam characters normally begin at four." }
      ],
      noteFields: [
        { key: "mortalLife", label: "Mortal Life", placeholder: "Family, livelihood, identity, responsibilities, and mortal relationships" },
        { key: "faeMien", label: "Fae Mien and Birthrights", placeholder: "Mien, Birthrights, Frailties, seeming features, and chimerical tells" },
        { key: "dreaming", label: "Dreaming Ties", placeholder: "Freehold, motley, liege, title, oathcircle, Dreamers, and chimera" },
        { key: "cantrips", label: "Cantrips and Bunks", placeholder: "Favorite combinations, bunks, Treasures, and table reminders" },
        { key: "oaths", label: "Oaths, Bans, and Geasa", placeholder: "Promises, obligations, taboos, debts, and consequences" },
        { key: "story", label: "Story Hooks", placeholder: "Dreams, nightmares, rivals, Bedlam, and Banality pressures" }
      ]
    },
    {
      id: "kinain",
      label: "Kinain",
      category: "Fae-blooded mortal",
      description: "A mortal carrying fae heritage, able to perceive more of the Dreaming and express a small inheritance of wonder.",
      rulesNote: "This companion-template baseline uses 6/4/3 Attributes, 11/7/4 Abilities, five Background dots, five Fae Gift points, and 21 freebies. Kinain packages vary by source and chronicle; Storyteller Open keeps every field editable.",
      pools: { attributes: [6, 4, 3], abilities: [11, 7, 4], freebies: 21 },
      flawCap: 7,
      identityFields: [
        { key: "heritage", label: "Fae Heritage", placeholder: "Kith, family, or other origin" },
        { key: "court", label: "Court / Allegiance", placeholder: "Court, freehold, family, or none" },
        { key: "patron", label: "Changeling Tie", placeholder: "Relative, patron, motley, or rival" }
      ],
      groups: [
        { id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false, traits: ["Allies", "Contacts", "Dreamers", "Mentor", "Remembrance", "Resources", "Retainers", "Status"] }
      ],
      itemGroups: [
        { id: "faeGifts", label: "Fae Gifts", itemLabel: "Gift", pool: 5, freebieCost: 1, exact: true, max: 5, sources: ["Heritage", "Fae Gift", "Merit", "Treasure", "Custom"], note: "Enter approved Fae Gifts by name and point value. Consult the relevant Kinain rules for effects and restrictions." }
      ],
      specials: [
        { id: "glamour", label: "Glamour", min: 0, max: 10, freebieCost: 3, xpMult: 3, default: 1, help: "A working baseline for fae-blooded characters; adjust to the source package in use." },
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 2, xpMult: 2, default: 3 },
        { id: "banality", label: "Banality", min: 0, max: 10, freebieCost: 0, xp: false, default: 3 }
      ],
      noteFields: [
        { key: "history", label: "History and Heritage", placeholder: "Family line, awakening to the Dreaming, and mortal life" },
        { key: "faeTies", label: "Fae Ties", placeholder: "Relatives, patrons, freeholds, Dreamers, and obligations" },
        { key: "gifts", label: "Gift Details", placeholder: "Short reminders, conditions, Treasures, and chimerical possessions" },
        { key: "story", label: "Story Hooks", placeholder: "Secrets, debts, dreams, dangers, and Banality pressures" }
      ]
    },
    {
      id: "enchanted",
      label: "Enchanted Mortal",
      category: "Touched mortal",
      description: "An otherwise ordinary person granted sight of the Dreaming through enchantment, oath, Treasure, or changeling patronage.",
      rulesNote: "There is no single universal enchanted-mortal build package. This practical baseline uses 6/4/3 Attributes, 11/7/4 Abilities, five Background dots, and 21 freebies; record the enchantment and use Storyteller Open for its terms.",
      pools: { attributes: [6, 4, 3], abilities: [11, 7, 4], freebies: 21 },
      flawCap: 7,
      identityFields: [
        { key: "enchantment", label: "Enchantment Source", placeholder: "Who or what opened their eyes" },
        { key: "patron", label: "Changeling Patron / Tie", placeholder: "Person, motley, freehold, or oath" },
        { key: "duration", label: "Duration / Terms", placeholder: "Scene, oath, recurring, indefinite…" }
      ],
      groups: [
        { id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false, traits: ["Allies", "Contacts", "Fame", "Influence", "Mentor", "Resources", "Retainers", "Status"] }
      ],
      itemGroups: [
        { id: "enchantments", label: "Enchantments and Fae Boons", itemLabel: "effect", pool: 0, freebieCost: 1, exact: false, max: 10, sources: ["Enchantment", "Oath", "Treasure", "Fae boon", "Custom"], note: "Record names and a Storyteller-assigned weight only; the source rules determine duration and effect." }
      ],
      specials: [
        { id: "glamour", label: "Glamour", min: 0, max: 10, freebieCost: 3, xpMult: 3, default: 0 },
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 2, xpMult: 2, default: 3 },
        { id: "banality", label: "Banality", min: 0, max: 10, freebieCost: 0, xp: false, default: 4 }
      ],
      noteFields: [
        { key: "history", label: "History", placeholder: "Ordinary life before and after enchantment" },
        { key: "terms", label: "Enchantment Terms", placeholder: "Source, duration, obligations, limits, and how it ends" },
        { key: "dreaming", label: "What They See", placeholder: "Fae contacts, chimerical companions, wonders, and dangers" },
        { key: "equipment", label: "Equipment and Treasures", placeholder: "Mundane gear and any entrusted chimerical possessions" },
        { key: "story", label: "Story Hooks", placeholder: "Wonder, disbelief, debts, threats, and hard choices" }
      ]
    },
    {
      id: "mortal",
      label: "Mortal NPC",
      category: "Non-supernatural",
      description: "An ordinary Dreamer, autumn person, ally, rival, family member, authority, victim, or passerby.",
      rulesNote: "The mortal NPC baseline uses 6/4/3 Attributes, 11/7/4 Abilities, five Background dots, and 21 freebies. Storyteller Open is ideal for quick supporting characters and unusual experts.",
      pools: { attributes: [6, 4, 3], abilities: [11, 7, 4], freebies: 21 },
      flawCap: 7,
      identityFields: [
        { key: "role", label: "Chronicle Role", placeholder: "Dreamer, rival, witness, family…" },
        { key: "affiliation", label: "Affiliation", placeholder: "Workplace, family, movement, institution…" },
        { key: "dreamerType", label: "Dreaming Relationship", type: "select", options: ["Dreamer", "Neutral", "Highly banal", "Creative professional", "Unaware contact", "Storyteller-defined"] }
      ],
      groups: [
        { id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false, traits: ["Allies", "Contacts", "Fame", "Influence", "Mentor", "Resources", "Retainers", "Status"] }
      ],
      specials: [
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 2, xpMult: 2, default: 3 },
        { id: "banality", label: "Banality", min: 0, max: 10, freebieCost: 0, xp: false, default: 4, help: "Use when Banality matters in play; otherwise leave the Storyteller-set baseline." }
      ],
      noteFields: [
        { key: "motivation", label: "Motivation and Tactics", placeholder: "What they want, how they act, and when they withdraw" },
        { key: "connections", label: "Connections", placeholder: "Who they know and which changeling lives they touch" },
        { key: "creativeSpark", label: "Creative Spark or Banality", placeholder: "Dreams, craft, cynicism, routine, and emotional pressure points" },
        { key: "equipment", label: "Equipment", placeholder: "Weapons, tools, vehicles, keepsakes, and valuables" },
        { key: "appearance", label: "Appearance and Voice", placeholder: "Fast portrayal notes" },
        { key: "secrets", label: "Secrets and Clues", placeholder: "What they know and what can be discovered" }
      ]
    }
  ]
};
