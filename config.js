window.FORGE_CONFIG = {
  code: "m20",
  storageKey: "lantern-lever-m20-forge-v4",
  mark: "M20",
  title: "Mage 20th Character Forge",
  game: "Mage: The Ascension 20th Anniversary Edition",
  shortGame: "a chronicle of belief and consequence",
  description: "A free, local-first M20 character creator for mages, sorcerers and Extraordinary Citizens, Custodes and acolytes, and mortal NPCs.",
  theme: { accent: "#856a2b", accent2: "#b99a50", bg: "#12100f", bgDeep: "#080706" },
  advancedTool: { href: "advanced.html", label: "Advanced Mage workspace" },
  identityFields: [
    { key: "name", label: "Name", placeholder: "Character name" },
    { key: "player", label: "Player", placeholder: "Player or Storyteller" },
    { key: "chronicle", label: "Chronicle", placeholder: "Chronicle name" },
    { key: "concept", label: "Concept", placeholder: "A few defining words" },
    { key: "nature", label: "Nature", placeholder: "Archetype" },
    { key: "demeanor", label: "Demeanor", placeholder: "Archetype" }
  ],
  abilities: {
    Talents: ["Alertness", "Art", "Athletics", "Awareness", "Brawl", "Empathy", "Expression", "Intimidation", "Leadership", "Streetwise", "Subterfuge"],
    Skills: ["Crafts", "Drive", "Etiquette", "Firearms", "Martial Arts", "Meditation", "Melee", "Research", "Stealth", "Survival", "Technology"],
    Knowledges: ["Academics", "Computer", "Cosmology", "Enigmas", "Esoterica", "Investigation", "Law", "Medicine", "Occult", "Politics", "Science"]
  },
  profiles: [
    {
      id: "mage",
      label: "Awakened Mage",
      category: "Full supernatural",
      description: "An Awakened willworker shaped by society, affiliation, Essence, paradigm, practice, instruments, Spheres, Arete, and Avatar.",
      rulesNote: "Standard M20 creation uses 7/5/3 Attributes, 13/9/5 Abilities, six Sphere dots, seven Background dots, and 15 freebies. Use the Advanced Mage workspace for the original deep-dive tools for Resonance, Quiet, Enhancements, Technocratic terminology, and detailed rotes.",
      pools: { attributes: [7, 5, 3], abilities: [13, 9, 5], freebies: 15 },
      flawCap: 7,
      identityFields: [
        { key: "essence", label: "Essence", type: "select", options: ["Dynamic", "Pattern", "Primordial", "Questing"] },
        { key: "society", label: "Society", type: "select", options: ["Council of Nine Mystic Traditions", "Disparate Alliance", "Technocratic Union", "Orphan / Independent", "Marauder (Storyteller-approved)", "Nephandus (Storyteller-approved)", "Custom Awakened Society"] },
        { key: "affiliation", label: "Affiliation", placeholder: "Tradition, Craft, Convention, or sect" },
        { key: "faction", label: "Faction", placeholder: "Subgroup or lineage" },
        { key: "cabal", label: "Cabal / Amalgam", placeholder: "Working group" },
        { key: "affinitySphere", label: "Affinity Sphere", type: "select", options: ["Correspondence", "Entropy", "Forces", "Life", "Matter", "Mind", "Prime", "Spirit", "Time"] },
        { key: "paradigm", label: "Paradigm", placeholder: "Why magick works" },
        { key: "practice", label: "Practice", placeholder: "How the mage works" },
        { key: "instruments", label: "Instruments", placeholder: "Key tools and techniques" }
      ],
      requiredIdentity: ["essence", "society", "affiliation", "affinitySphere"],
      groups: [
        { id: "spheres", kind: "sphere", label: "Spheres", pool: 6, freebieCost: 7, xpNew: 10, xpMult: 8, affinityField: "affinitySphere", xpAffinityMult: 7, traits: ["Correspondence", "Entropy", "Forces", "Life", "Matter", "Mind", "Prime", "Spirit", "Time"], note: "Affinity Sphere advancement uses current rating × 7; other Spheres use current rating × 8. The advanced workspace also supports Technocratic terminology." },
        { id: "backgrounds", kind: "background", label: "Backgrounds", pool: 7, freebieCost: 1, xp: false, traits: ["Allies", "Arcane", "Avatar", "Backup", "Contacts", "Cult", "Destiny", "Dream", "Enhancements", "Familiar", "Influence", "Library", "Mentor", "Node", "Patron", "Resources", "Sanctum", "Spies", "Status", "Totem", "Wonder"] }
      ],
      specials: [
        { id: "arete", label: "Arete / Enlightenment", min: 1, max: 10, freebieCost: 4, xpMult: 8, default: 1 },
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 1, xpMult: 1, default: 5 },
        { id: "quintessence", label: "Quintessence", min: 0, max: 20, freebieCost: 0, xp: false, default: 0, help: "Adjust for Avatar and current story state." },
        { id: "paradox", label: "Paradox", min: 0, max: 20, freebieCost: 0, xp: false, default: 0 }
      ],
      customValidation: (state) => {
        const affinity = state.identity.affinitySphere;
        const sphere = state.ratings["spheres"]?.[affinity]?.base || 0;
        return affinity && sphere < 1 ? [{ type: "bad", text: "The selected Affinity Sphere needs at least one starting dot." }] : [];
      },
      noteFields: [
        { key: "history", label: "History and Awakening", placeholder: "Life, Awakening, mentors, faction, and turning points" },
        { key: "focus", label: "Focus", placeholder: "Paradigm, practice, instruments, beliefs, taboos, and evolving understanding" },
        { key: "rotes", label: "Rotes and Effects", placeholder: "Names, Sphere requirements, instruments, and brief table reminders" },
        { key: "resonance", label: "Resonance, Synergy, and Quiet", placeholder: "Signature, active Resonance, Quiet, triggers, and recovery" },
        { key: "resources", label: "Wonders, Sanctum, and Equipment", placeholder: "Devices, talismans, weapons, armor, Nodes, and laboratories" },
        { key: "story", label: "Story Hooks", placeholder: "Goals, enemies, Paradox consequences, duties, and looming choices" }
      ]
    },
    {
      id: "sorcerer",
      label: "Sorcerer / Extraordinary Citizen",
      category: "Linear or enlightened mortal",
      description: "A mortal practitioner of linear magic or an un-Awakened Technocratic asset with extraordinary training, procedures, or devices.",
      rulesNote: "M20 companion sources offer several mortal-plus packages. This practical baseline uses 6/4/3 Attributes, 11/7/4 Abilities, five Path dots, five Background dots, and 21 freebies. Use Storyteller Open to match the exact Sorcerer, Extraordinary Citizen, or chronicle package in play.",
      pools: { attributes: [6, 4, 3], abilities: [11, 7, 4], freebies: 21 },
      flawCap: 7,
      identityFields: [
        { key: "mortalType", label: "Template", type: "select", options: ["Sorcerer", "Psychic", "Extraordinary Citizen", "Technocratic operative", "Other"] },
        { key: "affiliation", label: "Affiliation", placeholder: "Society, fellowship, Convention, agency…" },
        { key: "mentor", label: "Mentor / Handler", placeholder: "Teacher, patron, or supervisor" }
      ],
      requiredIdentity: ["mortalType"],
      groups: [
        { id: "paths", kind: "path", label: "Linear Paths / Procedures", pool: 5, freebieCost: 7, xpNew: 7, xpMult: 4, traits: [], note: "Add only the Paths or equivalent rated procedures approved for this character's source package." },
        { id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false, traits: ["Allies", "Arcane", "Backup", "Contacts", "Influence", "Library", "Mentor", "Patron", "Resources", "Sanctum", "Status", "Wonder"] }
      ],
      itemGroups: [
        { id: "numina", label: "Numina, Rituals, and Devices", itemLabel: "effect", pool: 0, freebieCost: 1, exact: false, max: 10, sources: ["Ritual", "Psychic phenomenon", "Procedure", "Device", "Merit", "Custom"], note: "Record source-approved traits by name and assigned point weight; consult the relevant companion rules for effects." }
      ],
      specials: [
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 1, xpMult: 1, default: 5 },
        { id: "mana", label: "Mana / Primal Energy", min: 0, max: 10, freebieCost: 1, xpMult: 2, default: 0, help: "Use only when the selected mortal-plus package includes an energy pool." }
      ],
      noteFields: [
        { key: "history", label: "History and Training", placeholder: "Ordinary life, initiation, training, employer, and turning points" },
        { key: "practice", label: "Practice or Methodology", placeholder: "Beliefs, methods, rituals, procedures, tools, and limits" },
        { key: "powers", label: "Path and Device Details", placeholder: "Names, ratings, effects, prerequisites, and table reminders" },
        { key: "ties", label: "Mage and Organization Ties", placeholder: "Mentors, handlers, cabals, Constructs, enemies, and obligations" },
        { key: "equipment", label: "Equipment", placeholder: "Devices, wonders, weapons, armor, labs, and resources" },
        { key: "story", label: "Story Hooks", placeholder: "Secrets, ambitions, dangers, and pressure to Awaken or conform" }
      ]
    },
    {
      id: "custos",
      label: "Custos / Acolyte",
      category: "Mage-adjacent mortal",
      description: "A trusted mortal ally, retainer, employee, cultist, family member, bodyguard, research assistant, or community supporter.",
      rulesNote: "There is no single universal Custos or acolyte package. This transparent baseline uses 6/4/3 Attributes, 11/7/4 Abilities, five Background dots, and 21 freebies; Storyteller Open supports chantry- and faction-specific benefits.",
      pools: { attributes: [6, 4, 3], abilities: [11, 7, 4], freebies: 21 },
      flawCap: 7,
      identityFields: [
        { key: "role", label: "Role", placeholder: "Acolyte, custos, retainer, assistant…" },
        { key: "mageTie", label: "Mage / Cabal Tie", placeholder: "Who they serve, love, protect, or oppose" },
        { key: "affiliation", label: "Affiliation", placeholder: "Chantry, Construct, cult, family…" }
      ],
      groups: [
        { id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false, traits: ["Allies", "Contacts", "Influence", "Library", "Mentor", "Patron", "Resources", "Sanctum", "Status"] }
      ],
      itemGroups: [
        { id: "boons", label: "Blessings, Devices, and Exposure", itemLabel: "effect", pool: 0, freebieCost: 1, exact: false, max: 10, sources: ["Mage effect", "Device", "Wonder", "Merit", "Resonance", "Custom"], note: "Record only persistent Storyteller-approved benefits or complications; most temporary magick belongs in notes." }
      ],
      specials: [{ id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 1, xpMult: 1, default: 3 }],
      noteFields: [
        { key: "history", label: "History", placeholder: "Life, work, beliefs, relationships, and first contact with magick" },
        { key: "duties", label: "Duties and Access", placeholder: "Responsibilities, clearances, safe places, occult knowledge, and limits" },
        { key: "mageTies", label: "Mage Ties", placeholder: "Cabal, chantry, Construct, patrons, enemies, and obligations" },
        { key: "equipment", label: "Equipment", placeholder: "Weapons, armor, tools, vehicles, Devices, and keepsakes" },
        { key: "story", label: "Story Hooks", placeholder: "Loyalties, secrets, dangers, and possible Awakening" }
      ]
    },
    {
      id: "mortal",
      label: "Mortal NPC",
      category: "Non-supernatural",
      description: "An ordinary human ally, Sleepwalker, witness, rival, victim, authority, skeptic, or passerby.",
      rulesNote: "The mortal NPC baseline uses 6/4/3 Attributes, 11/7/4 Abilities, five Background dots, and 21 freebies. Storyteller Open is ideal for quick NPCs and intentionally uneven specialists.",
      pools: { attributes: [6, 4, 3], abilities: [11, 7, 4], freebies: 21 },
      flawCap: 7,
      identityFields: [
        { key: "role", label: "Chronicle Role", placeholder: "Witness, rival, family, hunter…" },
        { key: "affiliation", label: "Affiliation", placeholder: "Workplace, family, agency, faith…" },
        { key: "awareness", label: "Awareness of Magick", type: "select", options: ["None", "Suspicious", "Believer", "Sleepwalker", "Indirect evidence", "Storyteller-defined"] }
      ],
      groups: [{ id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false, traits: ["Allies", "Contacts", "Fame", "Influence", "Mentor", "Resources", "Retainers", "Status"] }],
      specials: [{ id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 1, xpMult: 1, default: 3 }],
      noteFields: [
        { key: "motivation", label: "Motivation and Tactics", placeholder: "What they want, how they act, and when they retreat" },
        { key: "connections", label: "Connections", placeholder: "Who they know and which Awakened lives they touch" },
        { key: "equipment", label: "Equipment", placeholder: "Weapons, armor, tools, vehicles, and valuables" },
        { key: "appearance", label: "Appearance and Voice", placeholder: "Fast portrayal notes" },
        { key: "secrets", label: "Secrets and Clues", placeholder: "What they know and what can be discovered" },
        { key: "health", label: "Health and Combat Notes", placeholder: "Damage, armor, pools, and situational modifiers" }
      ]
    }
  ]
};
