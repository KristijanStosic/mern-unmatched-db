const characters = [
  {
    _id: "65c503490ffa9935a5f6cb09",
    characterImage: "/uploads/medusa.jpg",
    name: "Medusa",
    back: "https://i.imgur.com/cfMnfuH.png",
    miniatures: [
      "https://i.imgur.com/tPXKCCD.png"
    ],
    description: "Medusa is a ranged character, supported by 3 harpy melee sidekicks. She can deal massive combat damage, do direct (unavoidable) damage and force her opponent to discard cards. Without mentioning the harpies' resurrection... She's traditionally considered as one of the strongest fighters released.",
    specialAbility: "",
    abilityEffect: "At the start of her turn, she may deal 1 damage to an opposing fighter in her zone.",
    guides: [
      {
        name: "Baked Goods",
        url: "https://www.youtube.com/watch?v=tVO2F9Q7E2w"
      },
      {
        name: "Lord of the Board",
        url: "https://www.youtube.com/watch?v=g_zHhLJMGxE"
      },
      {
        name: "To The Table Top!",
        url: "https://www.youtube.com/watch?v=H0U3-QYjwVM"
      }
    ],
    set: "65cd0d898d2812b51a9a0d05",
    deck: 'https://unmatched.cards/umdb/decks/medusa',
    lore: 'https://en.wikipedia.org/wiki/Medusa',
    health: 16,
    attack: "Ranged",
    movement: 3,
    numberOfHeroes: 1,
    numberOfSidekicks: 3,
    sidekick: "Harpies",
    sidekickHealth: 1,
    sidekickMovement: 3,
    sidekickAttack: "Melee"
  },
  {
    _id: "65ca2b384f002ff5062813ff",
    characterImage: "/uploads/sinbad.jpg",
    name: "Sinbad",
    back: "https://i.imgur.com/ZXplzL9.png",
    miniatures: [
      "https://i.imgur.com/6Mh7GdG.png"
    ],
    description: "Sinbad is a melee fighter, supported by a porter sidekick. Sinbad grows in power as he gains experience on each of his voyages. His <i>Voyage</i> cards (6 in total) get +1 power per other <i>Voyage</i> in his discard pile. He gets also faster: +1 move per <i>Voyage</i> in his discard pile.",
    specialAbility: "7 VOYAGES",
    abilityEffect: "When you maneuver, you may move your fighters +1 space for each VOYAGE card in your discard pile.",
    guides: [
      {
        name: "Baked Goods",
        url: "https://www.youtube.com/watch?v=bhkbYVAJxYk"
      },
      {
        name: "To The Table Top!",
        url: "https://www.youtube.com/watch?v=VD4EVEptj54"
      },
      {
        name: "Lord of the Board",
        url: "https://www.youtube.com/watch?v=Z_z-xlByMRA"
      }],
    set: "65cd0d898d2812b51a9a0d05",
    deck: 'https://unmatched.cards/umdb/decks/sinbad',
    lore: 'https://en.wikipedia.org/wiki/Sinbad_the_Sailor',
    health: 15,
    attack: "Melee",
    movement: 2,
    numberOfHeroes: 1,
    numberOfSidekicks: 1,
    sidekick: "The Porter",
    sidekickHealth: 6,
    sidekickMovement: 2,
    sidekickAttack: "Melee"
  },
  {
    _id: "65ca2dcf4be1d5a6264e45ef",
    characterImage: "/uploads/alice.jpg",
    name: "Alice",
    back: "https://i.imgur.com/IPFwBck.png",
    miniatures: [
      "https://i.imgur.com/NHgsEcs.png"
    ],
    description: "Alice is a melee fighter with a Jabberwock sidekick. She has two stances: <i>Big</i>, which increases the value of her attacks and <i>Small</i>, which increases the value of her defense. She can switch from one to the other with card effects.",
    specialAbility: "",
    abilityEffect: "When you place Alice, choose whether she starts the game BIG or SMALL. When Alice is BIG, add 2 to the value of her attack cards. When Alice is SMALL, add 1 to the value of her defense cards.",
    guides: [
      {
        name: "Baked Goods",
        url: "https://www.youtube.com/watch?v=hWJtQbat4r4"
      },
      {
        name: "To The Table Top!",
        url: "https://www.youtube.com/watch?v=H9zbBlbrL6k"
      },
      {
        name: "Lord of the Board",
        url: "https://www.youtube.com/watch?v=GOVtdPRfBEg"
      }],
    set: "65cd0d898d2812b51a9a0d05",
    deck: 'https://unmatched.cards/umdb/decks/alice',
    lore: 'https://en.wikipedia.org/wiki/Alice_(Alice%27s_Adventures_in_Wonderland)',
    health: 13,
    attack: "Melee",
    movement: 2,
    numberOfHeroes: 1,
    numberOfSidekicks: 1,
    sidekick: "The Jabberwock",
    sidekickHealth: 8,
    sidekickMovement: 2,
    sidekickAttack: "Melee"
  },
  {
    _id: "65ca2fcf4460bfee108b9d8f",
    characterImage: "/uploads/arthur.jpg",
    name: "King Arthur",
    back: "https://i.imgur.com/V4L5MpH.png",
    miniatures: [
      "https://i.imgur.com/4w59eL1.png"
    ],
    description: "King Arthur is a melee fighter, supported by Merlin, a ranged sidekick. King Arthur can <i>Boost</i> his attacks.",
    specialAbility: "",
    abilityEffect: "When King Arthur attacks, you may BOOST that attack. Play the BOOST card, face down, along with your attack card. If your opponent cancels the effects on your attack card, the BOOST is discarded without effect.",
    guides: [
      {
        name: "Baked Goods",
        url: "https://www.youtube.com/watch?v=iTjdJQVqke4"
      },
      {
        name: "To The Table Top!",
        url: "https://www.youtube.com/watch?v=5h2oGrXxW_I"
      },
      {
        name: "Lord of the Board",
        url: "https://www.youtube.com/watch?v=8Wd_OIFdYXk"
      }],
    set: "65cd0d898d2812b51a9a0d05",
    deck: 'https://unmatched.cards/umdb/decks/king-arthur',
    lore: 'https://en.wikipedia.org/wiki/King_Arthur',
    health: 18,
    attack: "Melee",
    movement: 2,
    numberOfHeroes: 1,
    numberOfSidekicks: 1,
    sidekick: "Merlin",
    sidekickHealth: 7,
    sidekickMovement: 2,
    sidekickAttack: "Ranged"
  },
  {
    _id: "65ca39b31c0490e65845fb24",
    characterImage: "/uploads/raptors.jpg",
    name: "Raptors",
    back: "https://i.imgur.com/WN0Y2jx.png",
    miniatures: [
      "https://i.imgur.com/nI600tL.png",
      "https://i.imgur.com/5Fmlq35.png",
      "https://i.imgur.com/BB9O5Lh.png"

    ],
    description: "Raptors are three fast melee fighters that are trying to surround their opponent to make their attacks stronger.",
    specialAbility: "",
    abilityEffect: "<i>Raptors</i> add 1 to the value of their attack cards for each of other <i>Raptors</i> adjacent to the defender.",
    guides: [
      {
        name: "Baked Goods",
        url: "https://www.youtube.com/watch?v=1r42rsXhHkg"
      },
      {
        name: "To The Table Top!",
        url: "https://www.youtube.com/watch?v=ZnmSTcz1v9A"
      },
    ],
    set: "65ccfc79a7820a01f4f57e5a",
    deck: 'https://unmatched.cards/umdb/decks/raptors',
    lore: 'https://en.wikipedia.org/wiki/Dinosaurs_in_Jurassic_Park#Velociraptor',
    health: 7,
    attack: "Melee",
    movement: 3,
    numberOfHeroes: 3,
  },
  {
    _id: "65cd0e494667ded752fe9aaf",
    characterImage: "/uploads/ingen.jpg",
    name: "InGen",
    back: "https://i.imgur.com/qWqgGXW.png",
    miniatures: [
      "https://i.imgur.com/5IzpjrJ.png",
    ],
    description: "Robert Muldoon is a ranged fighter, supported by 3 ranged ingen workers. They can slow their opponent down and damage them by placing traps on the board.",
    specialAbility: "",
    abilityEffect: "At the start of your turn, you may place a trap. Whenever one of your traps is returned to the box, draw a card. Muldoon starts with 8 traps.",
    guides: [
      {
        name: "Baked Goods",
        url: "https://www.youtube.com/watch?v=hjcUhfmne8c"
      },
      {
        name: "To The Table Top!",
        url: "https://www.youtube.com/watch?v=ZGxNQn7P-to"
      },
    ],
    set: "65ccfc79a7820a01f4f57e5a",
    deck: 'https://unmatched.cards/umdb/decks/ingen',
    lore: 'https://en.wikipedia.org/wiki/List_of_Jurassic_Park_characters#Robert_Muldoon',
    health: 14,
    attack: "Ranged",
    movement: 3,
    numberOfHeroes: 1,
    numberOfSidekicks: 3,
    sidekick: "InGen Workers",
    sidekickHealth: 1,
    sidekickMovement: 3,
    sidekickAttack: "Ranged"
  },
  {
    _id: "65cd10505ace60f53c049660",
    characterImage: "/uploads/houdini.jpg",
    name: "Harry Houdini",
    back: "https://i.imgur.com/pQmwZa1.png",
    miniatures: [
      "https://i.imgur.com/KjK1FZE.png",
    ],
    description: "Houdini and his sidekick Bess are melee characters. When Houdini boosts his maneuver, he can move to any space on the board. Some of his cards have an ability attached to their boost value, which triggers when used as a boost.",
    specialAbility: "ESCAPE ARTIST",
    abilityEffect: "When you take the maneuver action and BOOST, you may place Houdini in any space instead of moving. (Bess moves as normal)",
    guides: [
      {
        name: "Baked Goods",
        url: "https://www.youtube.com/watch?v=UAM84ZlFD4A"
      },
      {
        name: "To The Table Top!",
        url: "https://www.youtube.com/watch?v=nexf5onWJeI"
      },
      {
        name: "Lord of the Board",
        url: "https://www.youtube.com/watch?v=i47pLhncBlc&t=546s"
      },
    ],
    set: "65cd100db4e7707b8466732b",
    deck: 'https://unmatched.cards/umdb/decks/harry-houdini',
    lore: 'https://en.wikipedia.org/wiki/Harry_Houdini',
    health: 14,
    attack: "Melee",
    movement: 2,
    numberOfHeroes: 1,
    numberOfSidekicks: 1,
    sidekick: "Bess",
    sidekickHealth: 5,
    sidekickMovement: 2,
    sidekickAttack: "Melee"
  },
  {
    _id: "65cd1156b922624e4560dfc4",
    characterImage: "/uploads/genie.jpg",
    name: "The Genie",
    back: "https://i.imgur.com/2HvORti.png",
    miniatures: [
      "https://i.imgur.com/pVJ8vc7.png",
    ],
    description: "The Genie is a ranged fighter who deals more damage when adjacent to the opponent. He can draw a lot of cards and discard them to play more actions.",
    specialAbility: "INFINITE POWER",
    abilityEffect: "At the start of your turn, you may discard 1 card to gain 1 action.",
    guides: [
      {
        name: "Baked Goods",
        url: "https://www.youtube.com/watch?v=eA2MfPV0wp0"
      },
      {
        name: "To The Table Top!",
        url: "https://www.youtube.com/watch?v=enaUsIlGbjU"
      },
      {
        name: "Lord of the Board",
        url: "https://www.youtube.com/watch?v=i47pLhncBlc&t=96s"
      },
    ],
    set: "65cd100db4e7707b8466732b",
    deck: 'https://unmatched.cards/umdb/decks/the-genie',
    lore: 'https://en.wikipedia.org/wiki/Genies_in_popular_culture',
    health: 16,
    attack: "Ranged",
    movement: 3,
    numberOfHeroes: 1,
  },
];

export default characters;