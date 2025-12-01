import { PhilosopherSchool } from '../types/game';

export interface Ending {
  title: string;
  description: string;
  subBlurbs: Record<string, string>; // philosopherId -> blurb
}

export interface SchoolEndings {
  highLegacy: Ending;
  lowLegacy: Ending;
}

export const ENDINGS: Record<PhilosopherSchool, SchoolEndings> = {
  confucian: {
    highLegacy: {
      title: "The Harmonious Lord",
      description: "Your reign becomes the standard by which later dynasties measure themselves. Through ritual propriety, moral example, and genuine care for your ministers and subjects, you restored harmony to a fractured world. The great clans speak of your courtesy, the common people speak of your fairness, and scholars revere your rule as proof that virtue, when practiced sincerely, can steady even the most unstable realm. Future generations cite your decrees in their classrooms and quote your judgments in their temples. You are remembered not merely as a ruler, but as a model of cultivated character.",
      subBlurbs: {
        confucius: "Your reign became a living classroom of virtue. Rituals were refined, names were rectified and roles were restored.",
        xunzi: "You proved that order is crafted, not innate, forging a disciplined state through deliberate cultivation.",
        mengzi: "Your benevolence won the hearts of the people, confirming that Heaven’s Mandate rests on the welfare of the common folk."
      }
    },
    lowLegacy: {
      title: "The Fragile Gentleman",
      description: "Though praised for your intentions, your reign is remembered as one where virtue outpaced effectiveness. You upheld decorum even when rivals sharpened knives in the dark, and you trusted the goodwill of others more often than reality justified. Some recall your kindness warmly, yet others fault your hesitations for empowering ambitious ministers and allowing disorder to seep through cracks in the court. You depart as a symbol of sincerity—but also as a warning that morality without firmness can leave a kingdom vulnerable.",
      subBlurbs: {
        confucius: "Your devotion to ritual shone brightly, but in a chaotic age, courtesy alone proved too gentle a tool.",
        xunzi: "Your reforms aimed for order, but insufficient discipline allowed rival factions to grow unchecked.",
        mengzi: "Your benevolence inspired many, yet by sparing too freely, you alienated nobles and emboldened opportunists."
      }
    }
  },
  // Placeholders for other schools
  mohist: {
    highLegacy: {
      title: "The Steward of the People",
      description: "Your government becomes a testament to fairness and impartial care. Wasteful displays vanished, the strong defended the weak, and resources flowed where they alleviated the most suffering. You elevated merit over birth, frugality over indulgence, and defense over conquest. The people bless your memory in proverbs, telling stories of a ruler who measured policies by their benefit, not by ritual or prestige. Other states study your methods, marveling that a kingdom dedicated to universal concern could grow both stable and respected.",
      subBlurbs: {
        mozi: "You upheld impartial benefit and frugality, proving that moral clarity and practical action can reshape a kingdom."
      }
    },
    lowLegacy: {
      title: "The Overwhelmed Reformer",
      description: "History remembers you as earnest but strained, a ruler who wished to help all people but whose austerity wore thin on nobles and soldiers alike. Your frugality kept the treasury full but drained enthusiasm from court life; your impartiality inspired trust among the poor but suspicion among elites. Though your policies prevented ruin, your reluctance to reward status or honor rank left discontent simmering beneath the surface. You depart as a ruler who tried to uplift everyone, but your unwillingness to prioritize sometimes left the realm feeling dry and overburdened.",
      subBlurbs: {
        mozi: "Your impartial intentions were clear, but rigid frugality and strict equality alienated those who lived by rank and reward."
      }
    }
  },
  daoist: {
    highLegacy: {
      title: "The Still Sage",
      description: "Your quiet governance becomes the stuff of legends. By ruling through minimal interference and trusting the natural rhythms of the people, you presided over an age of unexpected peace. Villages thrived without heavy taxes, ministers found clarity without frantic orders, and borders remained calm without saber-rattling. Later generations speak of your reign in gentle tones, recalling how harmony emerged precisely because you did not force the world into rigid shapes. You become an icon of effortless leadership, a king whose soft touch steadied the realm more securely than any iron grip.",
      subBlurbs: {
        laozi: "You proved that the greatest ruler is felt but barely noticed, allowing the world to right itself with minimal strain.",
        zhuangzi: "You taught the people to flow with change, dissolving fear and transforming crises through tranquil acceptance."
      }
    },
    lowLegacy: {
      title: "The Silent Recluse",
      description: "The story of your rule is that you withdrew too far. In your quest to avoid force and cultivate stillness, you allowed ambitious ministers to fill the vacuum, foreign states to test your borders, and disorder to take root where guidance was needed. Some still admire your gentleness, but many remember an era marked by drift rather than harmony. Rather than becoming a sage-king, you are recalled as a ruler who stepped aside before the realm was ready, and watched from a distance as others seized what you relinquished.",
      subBlurbs: {
        laozi: "Your restraint became retreat, and in sparing the people burdens, you also left them without direction.",
        zhuangzi: "Your lightness toward danger and change seemed like wisdom—but some crises required action, not detachment."
      }
    }
  },
  legalist: {
    highLegacy: {
      title: "The Iron Architect",
      description: "Your dynasty stands firm where others crumble. Through clear laws, unwavering discipline, and systems that outlast individuals, you forged an efficient and formidable state. Corruption withered, crime fell, and even your enemies were forced to respect the precision of your governance. Some fear your legacy, but none deny your success: the realm you leave behind is unified, organized, and powerful. History records you as the ruler who dared to enforce what others only preached, and shaped order not just through charm but through unceasing structure.",
      subBlurbs: {
        hanfeizi: "You mastered the machinery of the state, ensuring that no minister could bend the law to personal ends.",
        lordshang: "You reshaped society itself into a disciplined engine where every subject, soldier, and farmer served the strength of the state."
      }
    },
    lowLegacy: {
      title: "The Tyrant",
      description: "Your rule brought order, but at a cost the people did not forget. Your punishments bred fear, your laws grew ever harsher, and loyalty stemmed more from terror than from respect. Though the realm survived during your lifetime, resentment festered beneath the surface. Scholars whispered in secret, nobles plotted cautiously, and commoners spoke your name only behind closed doors. When you pass, it is unclear whether the system you built will endure, or if it even should - without your iron will, perhaps a different system would be better.",
      subBlurbs: {
        hanfeizi: "Your machinery of surveillance and punishment kept rivals silent, but left no one eager to defend your legacy.",
        lordshang: "Your total mobilization created strength in wartime but misery at home, turning the people into tools rather than citizens."
      }
    }
  }
};

