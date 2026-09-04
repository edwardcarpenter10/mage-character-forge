window.FORGE_CONFIG = {
  code: "w20",
  storageKey: "lantern-lever-w20-forge-v1",
  mark: "W20",
  title: "Werewolf 20th Character Forge",
  game: "Werewolf: The Apocalypse 20th Anniversary Edition",
  shortGame: "a chronicle beneath a dying moon",
  description: "A free, local-first W20 character creator for Garou, Kinfolk, wolf Kinfolk, and mortal NPCs, with advancement, JSON saves, and print-ready records.",
  theme: { accent: "#6f2b1d", accent2: "#c69548", bg: "#111511", bgDeep: "#070907" },
  identityFields: [
    { key: "name", label: "Name", placeholder: "Character name" },
    { key: "player", label: "Player", placeholder: "Player or Storyteller" },
    { key: "chronicle", label: "Chronicle", placeholder: "Chronicle name" },
    { key: "concept", label: "Concept", placeholder: "A few defining words" },
    { key: "nature", label: "Nature", placeholder: "Archetype" },
    { key: "demeanor", label: "Demeanor", placeholder: "Archetype" }
  ],
  abilities: {
    Talents: ["Alertness", "Athletics", "Brawl", "Empathy", "Expression", "Intimidation", "Leadership", "Primal-Urge", "Streetwise", "Subterfuge"],
    Skills: ["Animal Ken", "Crafts", "Drive", "Etiquette", "Firearms", "Larceny", "Melee", "Performance", "Stealth", "Survival"],
    Knowledges: ["Academics", "Computer", "Enigmas", "Investigation", "Law", "Medicine", "Occult", "Rituals", "Science", "Technology"]
  },
  profiles: [
    {
      id: "garou",
      label: "Garou",
      category: "Full supernatural",
      description: "A werewolf defined by Breed, Auspice, Tribe, Renown, Gifts, and the sacred ties of pack and sept.",
      rulesNote: "Standard W20 creation uses 7/5/3 Attributes, 13/9/5 Abilities, five Background dots, three level-one Gifts, and 15 freebies. Breed, Auspice, and Tribe seed the displayed core ratings; all remain editable for chronicle exceptions.",
      pools: { attributes: [7, 5, 3], abilities: [13, 9, 5], freebies: 15 },
      flawCap: 7,
      identityFields: [
        { key: "breed", label: "Breed", type: "select", options: ["Homid", "Metis", "Lupus"] },
        { key: "auspice", label: "Auspice", type: "select", options: ["Ragabash", "Theurge", "Philodox", "Galliard", "Ahroun"] },
        { key: "tribe", label: "Tribe", type: "select", options: ["Black Furies", "Bone Gnawers", "Children of Gaia", "Fianna", "Get of Fenris", "Glass Walkers", "Red Talons", "Shadow Lords", "Silent Striders", "Silver Fangs", "Stargazers", "Uktena", "Wendigo"] },
        { key: "pack", label: "Pack", placeholder: "Pack or role" },
        { key: "sept", label: "Sept", placeholder: "Sept or protectorate" },
        { key: "deedName", label: "Deed Name", placeholder: "Earned name" }
      ],
      requiredIdentity: ["breed", "auspice", "tribe"],
      groups: [
        {
          id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false,
          traits: ["Ancestors", "Contacts", "Fate", "Fetish", "Kinfolk", "Mentor", "Pure Breed", "Resources", "Rites", "Spirit Heritage", "Totem"],
          note: "Tribal restrictions and shared Totem dots are chronicle decisions; use custom traits when a supplement adds a Background."
        }
      ],
      itemGroups: [
        {
          id: "gifts", label: "Gifts", itemLabel: "Gift", pool: 3, freebieCost: 7, exact: true, maxCreationRating: 1, max: 5,
          sources: ["Breed", "Auspice", "Tribe", "Other", "Custom"], xpPurchasable: true,
          xpSources: [
            { value: "own", label: "Breed, Auspice, or Tribe Gift · level × 3", mult: 3 },
            { value: "other", label: "Other Gift · level × 5", mult: 5 }
          ],
          note: "Enter the Gift name and its source. The Forge records names and levels only; consult the book for effects and prerequisites."
        }
      ],
      specials: [
        { id: "rage", label: "Rage", min: 0, max: 10, freebieCost: 1, xpMult: 1, default: 1, fromIdentity: { key: "auspice", map: { Ragabash: 1, Theurge: 2, Philodox: 3, Galliard: 4, Ahroun: 5 } }, help: "Starting Rage is set by Auspice." },
        { id: "gnosis", label: "Gnosis", min: 0, max: 10, freebieCost: 2, xpMult: 2, default: 1, fromIdentity: { key: "breed", map: { Homid: 1, Metis: 3, Lupus: 5 } }, help: "Starting Gnosis is set by Breed." },
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 1, xpMult: 1, default: 3, fromIdentity: { key: "tribe", map: { "Black Furies": 3, "Bone Gnawers": 4, "Children of Gaia": 4, Fianna: 3, "Get of Fenris": 3, "Glass Walkers": 3, "Red Talons": 3, "Shadow Lords": 3, "Silent Striders": 3, "Silver Fangs": 3, Stargazers: 4, Uktena: 3, Wendigo: 4 } }, help: "Starting Willpower is set by Tribe." },
        { id: "glory", label: "Glory", min: 0, max: 10, freebieCost: 0, xp: false, default: 0, fromIdentity: { key: "auspice", map: { Ragabash: 0, Theurge: 0, Philodox: 0, Galliard: 2, Ahroun: 2 } }, help: "Starting temporary Renown; Ragabash distributes three dots freely." },
        { id: "honor", label: "Honor", min: 0, max: 10, freebieCost: 0, xp: false, default: 0, fromIdentity: { key: "auspice", map: { Ragabash: 0, Theurge: 0, Philodox: 3, Galliard: 0, Ahroun: 1 } }, help: "Starting temporary Renown; Ragabash distributes three dots freely." },
        { id: "wisdom", label: "Wisdom", min: 0, max: 10, freebieCost: 0, xp: false, default: 0, fromIdentity: { key: "auspice", map: { Ragabash: 0, Theurge: 3, Philodox: 0, Galliard: 1, Ahroun: 0 } }, help: "Starting temporary Renown; Ragabash distributes three dots freely." }
      ],
      noteFields: [
        { key: "history", label: "History and First Change", placeholder: "Origin, First Change, mentors, and defining conflicts" },
        { key: "packRecord", label: "Pack, Sept, and Totem", placeholder: "Packmates, pack role, caern, sept, and Totem details" },
        { key: "forms", label: "Forms and Combat Notes", placeholder: "Frequently used pools, weapons, armor, scars, and form reminders" },
        { key: "rites", label: "Rites and Fetishes", placeholder: "Names, levels, owners, and brief table reminders" },
        { key: "appearance", label: "Appearance", placeholder: "Homid and lupus appearance, manner, and telltale traits" },
        { key: "story", label: "Story Hooks", placeholder: "Oaths, rivals, duties, Harano, and unresolved threats" }
      ]
    },
    {
      id: "kinfolk",
      label: "Human Kinfolk",
      category: "Mortal-adjacent",
      description: "A human relative of the Garou: fully mortal, spiritually entangled, and sometimes gifted or trained beyond ordinary people.",
      rulesNote: "This companion-template baseline uses mortal-scale 6/4/3 Attributes, 11/7/4 Abilities, five Background dots, and 21 freebies. Kinfolk options vary across W20 supplements; Storyteller Open is available for alternate packages.",
      pools: { attributes: [6, 4, 3], abilities: [11, 7, 4], freebies: 21 },
      flawCap: 7,
      identityFields: [
        { key: "tribalTie", label: "Tribal Tie", type: "select", options: ["Black Furies", "Bone Gnawers", "Children of Gaia", "Fianna", "Get of Fenris", "Glass Walkers", "Red Talons", "Shadow Lords", "Silent Striders", "Silver Fangs", "Stargazers", "Uktena", "Wendigo", "Unclaimed", "Other"] },
        { key: "family", label: "Family / Garou Tie", placeholder: "Relationship or lineage" },
        { key: "sept", label: "Sept / Community", placeholder: "Where they belong" }
      ],
      groups: [
        { id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false, traits: ["Allies", "Contacts", "Fame", "Kinfolk", "Mentor", "Resources", "Retainers", "Status"] }
      ],
      itemGroups: [
        { id: "gifts", label: "Gifts and Numina", itemLabel: "power", pool: 0, freebieCost: 7, exact: false, max: 5, sources: ["Gift", "Numen", "Merit", "Rite", "Custom"], note: "Kinfolk supernatural access is exceptional. Record approved Gifts, Numina, or related traits here and use Storyteller Open when the chronicle uses another package." }
      ],
      specials: [
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 1, xpMult: 1, default: 3 },
        { id: "gnosis", label: "Gnosis", min: 0, max: 10, freebieCost: 2, xpMult: 2, default: 0, help: "Most human Kinfolk begin without Gnosis unless a chronicle option grants it." }
      ],
      noteFields: [
        { key: "history", label: "History", placeholder: "Family, work, upbringing, and contact with the Garou" },
        { key: "ties", label: "Garou and Spirit Ties", placeholder: "Relatives, protectors, obligations, spirits, and sept standing" },
        { key: "equipment", label: "Equipment and Resources", placeholder: "Weapons, tools, vehicles, safe places, and contacts" },
        { key: "story", label: "Story Hooks", placeholder: "Secrets, pressures, loyalties, and dangers" }
      ]
    },
    {
      id: "wolfkin",
      label: "Wolf Kinfolk",
      category: "Animal kin",
      description: "A wolf carrying Garou blood, built as an animal character with a deliberately lighter Ability package.",
      rulesNote: "The displayed animal baseline uses 6/4/3 Attributes, 7/3/1 Abilities, five Background dots, and 21 freebies. Use Storyteller Open whenever breed, age, or a supplement calls for a different animal package.",
      pools: { attributes: [6, 4, 3], abilities: [7, 3, 1], freebies: 21 },
      flawCap: 7,
      identityFields: [
        { key: "tribalTie", label: "Tribal Tie", placeholder: "Tribe or Garou lineage" },
        { key: "pack", label: "Pack / Territory", placeholder: "Wolf pack or territory" },
        { key: "family", label: "Garou Tie", placeholder: "Relationship or protector" }
      ],
      groups: [
        { id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false, traits: ["Allies", "Contacts", "Kinfolk", "Mentor", "Resources", "Retainers", "Status"] }
      ],
      itemGroups: [
        { id: "gifts", label: "Gifts and Spirit Blessings", itemLabel: "power", pool: 0, freebieCost: 7, exact: false, max: 5, sources: ["Gift", "Spirit blessing", "Merit", "Custom"], note: "Exceptional traits require Storyteller approval; this section intentionally remains open-ended." }
      ],
      specials: [
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 1, xpMult: 1, default: 3 },
        { id: "gnosis", label: "Gnosis", min: 0, max: 10, freebieCost: 2, xpMult: 2, default: 0 }
      ],
      noteFields: [
        { key: "history", label: "History and Temperament", placeholder: "Pack life, behavior, bonds, and fears" },
        { key: "ties", label: "Garou and Spirit Ties", placeholder: "Kin, guardians, spirits, and obligations" },
        { key: "combat", label: "Movement and Combat", placeholder: "Natural attacks, senses, chase pools, and wounds" },
        { key: "story", label: "Story Hooks", placeholder: "Threats to pack, territory, or family" }
      ]
    },
    {
      id: "mortal",
      label: "Mortal NPC",
      category: "Non-supernatural",
      description: "An ordinary human ally, victim, rival, hunter, bystander, or recurring supporting character.",
      rulesNote: "The mortal NPC baseline uses 6/4/3 Attributes, 11/7/4 Abilities, five Background dots, and 21 freebies. Select Storyteller Open for quick NPCs that do not need to balance to a player-character budget.",
      pools: { attributes: [6, 4, 3], abilities: [11, 7, 4], freebies: 21 },
      flawCap: 7,
      identityFields: [
        { key: "role", label: "Chronicle Role", placeholder: "Ally, antagonist, witness…" },
        { key: "affiliation", label: "Affiliation", placeholder: "Employer, cult, family, agency…" },
        { key: "threat", label: "Threat Level", type: "select", options: ["Background", "Supporting", "Capable", "Elite", "Storyteller-defined"] }
      ],
      groups: [
        { id: "backgrounds", kind: "background", label: "Backgrounds", pool: 5, freebieCost: 1, xp: false, traits: ["Allies", "Contacts", "Fame", "Influence", "Mentor", "Resources", "Retainers", "Status"] }
      ],
      specials: [
        { id: "willpower", label: "Willpower", min: 1, max: 10, freebieCost: 1, xpMult: 1, default: 3 }
      ],
      noteFields: [
        { key: "motivation", label: "Motivation and Tactics", placeholder: "What they want, how they act, and when they retreat" },
        { key: "connections", label: "Connections", placeholder: "Who they know and which supernatural lives they touch" },
        { key: "equipment", label: "Equipment", placeholder: "Weapons, armor, tools, vehicles, and valuables" },
        { key: "appearance", label: "Appearance and Voice", placeholder: "Fast portrayal notes" },
        { key: "secrets", label: "Secrets and Clues", placeholder: "What they know and what can be discovered" },
        { key: "health", label: "Health and Combat Notes", placeholder: "Damage, armor, pools, and situational modifiers" }
      ]
    }
  ]
};
