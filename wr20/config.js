window.FORGE_CONFIG = {
  code: "wr20",
  storageKey: "lantern-lever-wr20-forge-v1",
  mark: "Wr20",
  title: "Wraith 20th Character Forge",
  game: "Wraith: The Oblivion 20th Anniversary Edition",
  shortGame: "a chronicle of unfinished lives",
  description: "A free, local-first Wr20 character creator for wraiths, mediums and haunted mortals, and mortal NPCs, with Shadow records, advancement, JSON saves, and printable sheets.",
  logo: { kind: "wraith" },
  theme: { accent: "#315b66", accent2: "#aea27d", bg: "#101416", bgDeep: "#060809", panel: "#161e22", panel2: "#222a2d", paper: "#e1e2dc", paper2: "#bfc9c9", ink: "#172126", muted: "#9aaab0", line: "#4b626a", paperMuted: "#4e6065", paperLine: "#70868a" },
  terminologySets: [
    { id: "hierarchy", label: "Hierarchy", description: "Wraith, faction, Legion, Circle, Arcanoi, Passions, Fetters, and Shadow.", terms: { fields: { faction: "Allegiance", legion: "Legion / Department", circle: "Circle", death: "Death", regret: "Regret", shadowArchetype: "Shadow Archetype" }, groups: { arcanoi: "Arcanoi", passions: "Passions", fetters: "Fetters", darkPassions: "Dark Passions", thorns: "Thorns" }, ui: { advantagesHeading: "Arcanoi, ties, and the Shadow", advantagesPrintTitle: "Arcanoi and Advantages" } } },
    { id: "outsider", label: "Guild, Renegade & Heretic", description: "Wraith, movement, Guild or faction, Circle or band, Arcanoi, and Shadow.", terms: { fields: { faction: "Movement", legion: "Guild / Faction", circle: "Circle / Band", death: "Death", regret: "Unfinished Business", shadowArchetype: "Shadow Archetype" }, groups: { arcanoi: "Arcanoi", passions: "Passions", fetters: "Fetters", darkPassions: "Dark Passions", thorns: "Thorns" }, ui: { advantagesHeading: "Arcanoi, ties, and the Shadow", advantagesPrintTitle: "Arcanoi and Advantages" } } },
    { id: "neutral", label: "Afterlife-neutral", description: "Restless dead, allegiance, affiliation, group, powers, drives, anchors, and dark self.", terms: { fields: { faction: "Allegiance", legion: "Affiliation", circle: "Group", death: "Death", regret: "Unfinished Business", shadowArchetype: "Dark Self Archetype" }, groups: { arcanoi: "Powers", passions: "Drives", fetters: "Anchors", darkPassions: "Dark Drives", thorns: "Dark Gifts" }, specials: { pathos: "Spiritual Energy", corpus: "Spiritual Integrity", angst: "Dark Self Rating" }, ui: { advantagesHeading: "Powers, ties, and the dark self", advantagesPrintTitle: "Powers and Advantages" } } }
  ],
  identityFields: [
    { key: "name", label: "Name", placeholder: "Name in life or death" },
    { key: "player", label: "Player", placeholder: "Player or Storyteller" },
    { key: "chronicle", label: "Chronicle", placeholder: "Chronicle name" },
    { key: "concept", label: "Concept", placeholder: "A few defining words" },
    { key: "nature", label: "Nature", placeholder: "Archetype" },
    { key: "demeanor", label: "Demeanor", placeholder: "Archetype" }
  ],
  abilities: {
    Talents: ["Alertness", "Athletics", "Awareness", "Brawl", "Empathy", "Expression", "Intimidation", "Leadership", "Streetwise", "Subterfuge"],
    Skills: ["Animal Ken", "Crafts", "Drive", "Etiquette", "Firearms", "Larceny", "Melee", "Meditation", "Performance", "Stealth"],
    Knowledges: ["Academics", "Bureaucracy", "Computer", "Enigmas", "Investigation", "Law", "Medicine", "Occult", "Politics", "Science"]
  },
  profiles: [
    {
      id: "wraith",
      label: "Wraith",
      category: "Full supernatural",
      description: "One of the Restless Dead, held by Passions and Fetters while a personal Shadow whispers toward Oblivion.",
      rulesNote: "Standard Wr20 creation uses 7/5/3 Attributes, 13/9/5 Abilities, five Arcanos dots, seven Background dots, ten Passion points, ten Fetter points, and 15 freebies. The Shadow has its own ten-point freebie budget, tracked separately.",
      pools: { attributes: [7, 5, 3], abilities: [13, 9, 5], freebies: 15 },
      secondaryPools: [{ id: "shadow", label: "Shadow freebies", shortLabel: "Shadow FP", amount: 10 }],
      flawCap: 7,
      identityFields: [
        { key: "faction", label: "Faction", type: "select", options: ["Hierarchy", "Guild", "Renegade", "Heretic", "Doomslayer", "Independent", "Other"] },
        { key: "legion", label: "Legion / Subfaction", placeholder: "Legion, Guild, cult, gang…" },
        { key: "circle", label: "Circle", placeholder: "Circle or working group" },
        { key: "death", label: "Death", placeholder: "How and when they died" },
        { key: "regret", label: "Regret", placeholder: "What remains unfinished" },
        { key: "shadowArchetype", label: "Shadow Archetype", type: "select", options: ["The Abuser", "The Director", "The Freak", "The Leech", "The Martyr", "The Monster", "The Parent", "The Perfectionist", "The Rationalist", "Other"] }
      ],
      requiredIdentity: ["faction", "death", "regret", "shadowArchetype"],
      groups: [
        {
          id: "arcanoi", kind: "arcanos", label: "Arcanoi", pool: 5, freebieCost: 5, xpNew: 7, xpMult: 4,
          traits: ["Argos", "Castigate", "Embody", "Fatalism", "Flux", "Inhabit", "Intimation", "Keening", "Lifeweb", "Mnemosynis", "Moliate", "Outrage", "Pandemonium", "Phantasm", "Puppetry", "Usury"],
          note: "Record dots only; consult Wr20 for arts, Guild associations, and prerequisites. Custom entries support other Dark Kingdoms and supplements."
        },
        {
          id: "backgrounds", kind: "background", label: "Backgrounds", pool: 7, freebieCost: 1, xp: false,
          traits: ["Allies", "Artifact", "Contacts", "Eidolon", "Haunt", "Legacy", "Memoriam", "Notoriety", "Relic", "Status"],
          note: "Memoriam may increase starting Pathos; adjust Pathos manually after allocating the Background."
        }
      ],
      itemGroups: [
        { id: "passions", label: "Passions", itemLabel: "Passion", pool: 10, freebieCost: 2, exact: true, maxCreationRating: 5, max: 5, sources: ["Love", "Hope", "Duty", "Hate", "Fear", "Pride", "Guilt", "Other emotion"], note: "Name each goal and choose its driving emotion as the source." },
        { id: "fetters", label: "Fetters", itemLabel: "Fetter", pool: 10, freebieCost: 1, exact: true, maxCreationRating: 5, max: 5, sources: ["Person", "Place", "Object", "Institution", "Memory", "Other"], note: "Name the living person, place, object, or institution and assign its rating." },
        { id: "darkPassions", label: "Shadow · Dark Passions", itemLabel: "Dark Passion", pool: 10, freebieCost: 2, exact: true, maxCreationRating: 5, max: 5, budget: "shadow", sources: ["Envy", "Greed", "Hate", "Fear", "Shame", "Despair", "Pride", "Other emotion"], note: "The Shadow's Dark Passions mirror or corrupt the Psyche's emotional anchors. Extra dots draw from the separate Shadow budget." },
        { id: "thorns", label: "Shadow · Thorns", itemLabel: "Thorn", pool: 0, freebieCost: 1, exact: false, max: 10, budget: "shadow", sources: ["Thorn", "Shadow ally", "Spectre tie", "Other"], note: "Set each rating to that Thorn's listed Shadow-freebie cost, not its effect level." },
        { id: "shadowOther", label: "Shadow · Other Purchases", itemLabel: "purchase", pool: 0, freebieCost: 1, exact: false, max: 10, budget: "shadow", sources: ["Permanent Angst", "Temporary Angst", "Dark Passion adjustment", "Custom"], note: "Use this cost ledger for approved Shadow purchases not represented above; enter the actual Shadow-freebie cost as the rating." }
      ],
      specials: [
        { id: "pathos", label: "Pathos", min: 0, max: 10, freebieCost: 0.5, xpMult: 2, default: 5, help: "Start at five plus any adjustment from Memoriam; two added Pathos cost one freebie." },
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 1, xpMult: 1, default: 5 },
        { id: "corpus", label: "Corpus", min: 0, max: 10, freebieCost: 0, xp: false, default: 10, help: "Corpus is the wraith's plasmic integrity." },
        { id: "angst", label: "Permanent Angst", min: 0, max: 10, freebieCost: 0, xp: false, default: 0, help: "Roll starting Angst according to Wr20 Shadow creation, then enter the result; it cannot initially exceed Willpower." },
        { id: "temporaryAngst", label: "Temporary Angst", min: 0, max: 10, freebieCost: 0, xp: false, default: 0 },
        { id: "eidolon", label: "Eidolon", min: 0, max: 5, freebieCost: 0, xp: false, default: 0, help: "Mirror the Eidolon Background here when useful at the table." }
      ],
      customValidation: (state) => {
        const warnings = [];
        if (Number(state.specialBase.angst || 0) > Number(state.specialBase.willpower || 0)) warnings.push({ type: "bad", text: "Starting permanent Angst cannot exceed Willpower." });
        return warnings;
      },
      noteFields: [
        { key: "life", label: "Life and Death", placeholder: "Who they were, how they died, what they left behind, and their Regret" },
        { key: "underworld", label: "Underworld Ties", placeholder: "Circle, Legion, Guild, Necropolis, rank, mentors, allies, and enemies" },
        { key: "passions", label: "Passion Details", placeholder: "Triggers, emotional context, progress, and threatened anchors" },
        { key: "fetters", label: "Fetter Details", placeholder: "Locations, guardians, condition, and why each still matters" },
        { key: "shadow", label: "Shadow Voice and Agenda", placeholder: "Voice, tells, goals, Dark Passions, Thorns, and Catharsis notes" },
        { key: "relics", label: "Relics, Artifacts, and Combat", placeholder: "Possessions, armor, weapons, common pools, and Corpus reminders" }
      ]
    },
    {
      id: "haunted",
      label: "Medium / Haunted Mortal",
      category: "Touched living",
      description: "A living person who hears, sees, channels, shelters, studies, or is persistently affected by the Restless Dead.",
      rulesNote: "Wraith has no single universal ghoul-equivalent. This deliberately transparent living baseline uses 6/4/3 Attributes, 11/7/4 Abilities, five Background dots, and 21 freebies; mediumship and haunt effects remain Storyteller-defined.",
      pools: { attributes: [6, 4, 3], abilities: [11, 7, 4], freebies: 21 },
      flawCap: 7,
      identityFields: [
        { key: "connection", label: "Connection to the Dead", placeholder: "Mediumship, haunting, relic, Fetter…" },
        { key: "wraithTie", label: "Wraith Tie", placeholder: "Name, relationship, or unknown presence" },
        { key: "affiliation", label: "Living Affiliation", placeholder: "Family, occult circle, agency, faith…" }
      ],
      groups: [
        { id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false, traits: ["Allies", "Contacts", "Fame", "Influence", "Mentor", "Resources", "Retainers", "Status"] }
      ],
      itemGroups: [
        { id: "phenomena", label: "Mediumship and Haunt Effects", itemLabel: "effect", pool: 0, freebieCost: 1, exact: false, max: 10, sources: ["Numen", "Merit", "Haunting", "Relic", "Wraith-granted", "Custom"], note: "Record approved phenomena, Numina, Merits, or recurring haunting effects. Use the source's own cost and effect rules." }
      ],
      specials: [
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 1, xpMult: 1, default: 3 }
      ],
      noteFields: [
        { key: "history", label: "History", placeholder: "Ordinary life, first contact with the dead, and what changed" },
        { key: "haunting", label: "Haunting or Mediumship", placeholder: "Manifestations, triggers, limits, bargains, and risks" },
        { key: "deadTies", label: "Ties to the Dead", placeholder: "Wraiths, ghosts, Fetters, locations, relics, and unfinished business" },
        { key: "equipment", label: "Equipment", placeholder: "Recording gear, wards, weapons, tools, vehicles, and keepsakes" },
        { key: "story", label: "Story Hooks", placeholder: "Secrets, obligations, disbelief, danger, and pressure from the living" }
      ]
    },
    {
      id: "mortal",
      label: "Mortal NPC",
      category: "Non-supernatural",
      description: "An ordinary living ally, relative, witness, investigator, enemy, victim, Fetter, or person from a wraith's former life.",
      rulesNote: "The mortal NPC baseline uses 6/4/3 Attributes, 11/7/4 Abilities, five Background dots, and 21 freebies. Storyteller Open is ideal for quick NPCs and intentionally uneven specialists.",
      pools: { attributes: [6, 4, 3], abilities: [11, 7, 4], freebies: 21 },
      flawCap: 7,
      identityFields: [
        { key: "role", label: "Chronicle Role", placeholder: "Fetter, witness, rival, family…" },
        { key: "affiliation", label: "Affiliation", placeholder: "Workplace, family, agency, cult…" },
        { key: "awareness", label: "Awareness of the Dead", type: "select", options: ["None", "Suspicious", "Believer", "Indirect evidence", "Storyteller-defined"] }
      ],
      groups: [
        { id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false, traits: ["Allies", "Contacts", "Fame", "Influence", "Mentor", "Resources", "Retainers", "Status"] }
      ],
      specials: [
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 1, xpMult: 1, default: 3 }
      ],
      noteFields: [
        { key: "motivation", label: "Motivation and Tactics", placeholder: "What they want, how they act, and when they retreat" },
        { key: "connections", label: "Connections", placeholder: "Who they know among the living and dead" },
        { key: "fetter", label: "Fetter Significance", placeholder: "If relevant, why a wraith remains attached to this person or place" },
        { key: "equipment", label: "Equipment", placeholder: "Weapons, armor, tools, vehicles, and valuables" },
        { key: "appearance", label: "Appearance and Voice", placeholder: "Fast portrayal notes" },
        { key: "secrets", label: "Secrets and Clues", placeholder: "What they know and what can be discovered" }
      ]
    }
  ]
};
