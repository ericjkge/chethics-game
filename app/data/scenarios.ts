import { Scenario } from '../types/game';

export const SCENARIOS: Scenario[] = [
  {
    id: 'appointment-of-ministers',
    act: 'Act I',
    title: 'Foundations of the Empire',
    subtitle: 'Appointment of Ministers',
    description: `Your first order of business is to staff your court. Applicants from far and wide arrive at your throne to court your favor. Among them are pedigreed nobles, seasoned bureaucrats, and low-born strivers with strong past records. You narrow down your choice of head minister to three candidates. Which do you choose?`,
    choices: [
      {
        id: 'noble-candidate',
        title: 'The Trusted Noble',
        description: 'Candidate one is a trusted noble who you have heard of throughout your conquests and political journey. He is known for being a kind and moral person who treats all with respect and acts with ritual propriety. However, he has little experience in administration.',
        effects: [
          { stat: 'aristocracy', change: 10, label: '+Noble Support' },
          { stat: 'efficiency', change: -10, label: '−Efficiency' },
        ],
        philosopherTags: {
          confucius: 2,
        },
        risks: 'Factionalism from underutilized technocrats.',
        nextScenarioId: 'education-system',
      },
      {
        id: 'cunning-strategist',
        title: 'The Cunning Strategist',
        description: 'Candidate two is an intelligent and cunning individual with experience in the politics of other states. Through standardized evaluations and tests, you’ve found him to be incredibly competent and sharp in his performance. However, you have heard rumors that he betrayed his last king.',
        effects: [
          { stat: 'efficiency', change: 10, label: '+Efficiency' },
        ],
        philosopherTags: {
          hanfeizi: 2,
        },
        risks: 'Ministers game metrics; surveillance state emerges.',
        nextScenarioId: 'education-system',
      },
      {
        id: 'common-official',
        title: 'The Common Champion',
        description: 'Candidate three is a young official of low birth who worked his way up by allying with the common people. He is incredibly popular among the masses and has shown an ability to gather sustained support. However, several prominent aristocrats in your state have told you that if you elect him, they will take it as a great personal offense.',
        effects: [
          { stat: 'populace', change: 10, label: '+Popular Support' },
          { stat: 'aristocracy', change: -10, label: '−Noble Support' },
        ],
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'education-system',
      },
    ],
  },
  {
    id: 'education-system',
    act: 'Act I',
    title: 'Foundations of the Empire',
    subtitle: 'Forming the Education System',
    description: 'Your head officials come to you asking how you want to structure your state’s education system. What type of curriculum do you want to put into place, and how should the schools be structured?',
    choices: [
      {
        id: 'centralized-school',
        title: 'Strict National Curriculum',
        description: 'A centralized school system with ideologically unified teachers that adhere strictly to a carefully crafted national curriculum. Teachers will be strict but effective, teaching children how to resist urges and improve themselves through hard work and effort.',
        effects: [],
        philosopherTags: {
          xunzi: 2,
        },
        nextScenarioId: 'military-reform',
      },
      {
        id: 'freer-curriculum',
        title: 'Cultivate Virtue',
        description: 'A freer curriculum that emphasizes finding what students are good at from a young age and giving them access to specialized teachers to nurture their talent. Students are taught to reach their potential and practice benevolence in order to fulfill their righteous potential.',
        effects: [],
        philosopherTags: {
          mengzi: 2,
          hanfeizi: 1,
        },
        nextScenarioId: 'military-reform',
      },
      {
        id: 'loosened-curriculum',
        title: 'Natural Inclinations',
        description: 'A loosened curriculum that lets students follow their natural inclinations into crafts, apprenticeships, and wandering teachers. Learning emerges from individual curiosity rather than imposed structure.',
        effects: [],
        philosopherTags: {
          zhuangzi: 2,
        },
        nextScenarioId: 'military-reform',
      },
    ],
  },
  {
    id: 'military-reform',
    act: 'Act I',
    title: 'Foundations of the Empire',
    subtitle: 'Military Reforms',
    description: 'You are tasked with helping to structure your army. You notice that while the elite units that helped you create your state are strong, your general infantry is weak and unorganized. How do you go about building a powerful military?',
    choices: [
      {
        id: 'mandatory-conscription',
        title: 'Mandatory Conscription',
        description: 'Decree universal conscription of all men of age, with no exceptions. Incentivize soldiers by offering promotions and rewards for each enemy killed or captured. If any man does not agree to join the army, execute him to prove that no one is above the law.',
        effects: [
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
          { stat: 'military', change: -10, label: '−Military Support' },
        ],
        philosopherTags: {
          lordshang: 2,
        },
        nextScenarioId: 'tribute-neighboring-states',
      },
      {
        id: 'defensive-focus',
        title: 'Defensive Focus',
        description: 'Invest heavily in your defense, pouring resources and manpower into fortifications and defense logistics. Train your soldiers to watch at the gates day and night. Forbid your generals from undertaking any offensive campaigns, even if another state appears weak.',
        effects: [
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
        ],
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'tribute-neighboring-states',
      },
      {
        id: 'reduce-forces',
        title: 'Reduce Forces',
        description: 'Recognize that flaunting military strength to your neighbors will only induce them to grow resentful. Reduce your militarism and fighting forces, emphasizing farmers over fighters. If your enemy does see you as a threat, you are more likely to be in a position of quiet power.',
        effects: [
          { stat: 'deterrence', change: -10, label: '−Deterrence' },
          { stat: 'military', change: -10, label: '−Military Support' },
        ],
        philosopherTags: {
          laozi: 2,
        },
        nextScenarioId: 'tribute-neighboring-states',
      },
    ],
  },
  {
    id: 'tribute-neighboring-states',
    act: 'Act I',
    title: 'Foundations of the Empire',
    subtitle: 'Tribute of Neighboring States',
    description: 'Envoys from neighboring states meet at your throne to discuss your foreign policy stances. They ask if you are willing to enter into trade agreements, treaties, or joint relief pacts with them. This is your chance to determine how you want your state to be regarded by those around you.',
    choices: [
      {
        id: 'pact-of-protection',
        title: 'Pact of Protection',
        description: 'Offer a pact of protection and fair trade among the states, extending benevolence to even the weaker states instead of demanding tribute. Extend an offer to protect and commune with those around you, in hope that it will cultivate loyalty.',
        effects: [
          { stat: 'efficiency', change: -10, label: '−Efficiency' },
          { stat: 'diplomacy', change: 10, label: '+Foreign Support' },
        ],
        philosopherTags: {
          mengzi: 2,
        },
        nextScenarioId: 'scholars-insult',
      },
      {
        id: 'leverage-tribute',
        title: 'Leverage Tribute',
        description: 'Utilize your leverage to tie tribute demands to your military power. Inspect your tributary states and those around you often to determine anyone who is not loyal and paying the proper tribute. Do not offer favoritism to any state - instead, let them come to you and compete for your favor with their fear and tribute.',
        effects: [
          { stat: 'diplomacy', change: -10, label: '−Foreign Support' },
          { stat: 'efficiency', change: 10, label: '+Efficiency' },
        ],
        philosopherTags: {
          hanfeizi: 2,
        },
        nextScenarioId: 'scholars-insult',
      },
      {
        id: 'equitable-treaties',
        title: 'Equitable Treaties',
        description: 'Propose equitable, standardized treaties with all states that offer the same protection and treatment. Enter into joint relief pacts that promise fair sharing of burdens in cases of disaster. By treating all equally, they will treat you equally, right?',
        effects: [
          { stat: 'diplomacy', change: 10, label: '+Foreign Support' },
          { stat: 'deterrence', change: -10, label: '−Deterrence' },
        ],
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'scholars-insult',
      },
    ],
  },
  {
    id: 'scholars-insult',
    act: 'Act I',
    title: 'Foundations of the Empire',
    subtitle: 'Scholar’s Insult',
    description: 'You receive word that a renowned scholar has denounced your rule before a festival crowd, criticizing your decision to pick the minister you chose as your chief minister. Your soldiers bring the scholar before your throne to receive judgment.',
    choices: [
      {
        id: 'public-humility',
        title: 'Public Humility',
        description: 'Show public humility and magnanimity. Invite the scholar to engage in a public debate, where you display patience and a willingness to listen and learn. Your ministers warn you that this is highly unusual for a king’s position.',
        effects: [],
        philosopherTags: {
          confucius: 2,
        },
        nextScenarioId: 'peasants-petition',
      },
      {
        id: 'ignore-slight',
        title: 'Ignore the Slight',
        description: 'Publicly ignore the slight and refuse to dignify it or show that you are dedicating any time to it. Proclaim that all words are imperfect and shifting attempts at capturing meaning, and that the scholar’s words are of no distinction to you.',
        effects: [],
        philosopherTags: {
          zhuangzi: 2,
        },
        nextScenarioId: 'peasants-petition',
      },
      {
        id: 'execute-scholar',
        title: 'Execute for Slander',
        description: 'Publicly execute the scholar for slander and sedition against the state. Tighten down on your prohibitions on public speech to send a message to others who might wish to do the same. If no one dares to publicly criticize your decisions, they will obey your rule.',
        effects: [],
        philosopherTags: {
          lordshang: 2,
        },
        risks: 'Scholar execution noted for future events.',
        nextScenarioId: 'peasants-petition',
      },
    ],
  },
  {
    id: 'peasants-petition',
    act: 'Act I',
    title: 'Foundations of the Empire',
    subtitle: 'Peasants’ Petition',
    description: 'A group of rural peasant delegates arrive at your palace, weary and desperate. They plead for tax relief and limits on their hard labor, claiming that their nobles have overworked them and demanded impossible quantities.',
    choices: [
      {
        id: 'listen-demands',
        title: 'Listen to Demands',
        description: 'Listen to the demands of the peasants and reduce taxes on staple grains. Cut down on palace luxuries and extravagant spending among the nobility to fund these efforts. No one group should get special treatment at the expense of another.',
        effects: [
          { stat: 'populace', change: 10, label: '+Popular Support' },
          { stat: 'aristocracy', change: -10, label: '−Noble Support' },
        ],
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'inventors-proposal',
      },
      {
        id: 'benevolent-reform',
        title: 'Benevolent Reform',
        description: 'Extend the olive branch of benevolence. Take personal responsibility for their hardship and announce that a ruler who cannot secure basic livelihood has failed in his duty. Make orders to introduce reforms to stabilize agriculture, and begin restructuring land and tax practices so that ordinary families can sustain themselves.',
        effects: [],
        philosopherTags: {
          mengzi: 2,
        },
        nextScenarioId: 'inventors-proposal',
      },
      {
        id: 'maintain-order',
        title: 'Maintain Order',
        description: 'Side with the nobles, recognizing that ceding to these demands could upset the power balance. Maintain current extraction policies and publicly state that only firm demands and reliable revenue can keep the state strong and the law enforced.',
        effects: [
          { stat: 'aristocracy', change: 10, label: '+Noble Support' },
          { stat: 'efficiency', change: 10, label: '+Efficiency' },
          { stat: 'populace', change: -20, label: '−Popular Support' },
        ],
        philosopherTags: {
          hanfeizi: 2,
        },
        nextScenarioId: 'inventors-proposal',
      },
    ],
  },
  {
    id: 'inventors-proposal',
    act: 'Act II',
    title: 'Crises of the Reign',
    subtitle: 'The Inventor’s Proposal',
    description: 'A savant is brought before your court, dragging a cart of wooden models and bronze fittings. He claims to have designed a new siege engine capable of shattering city walls in days rather than weeks of siege.\n\nThe scholar you once judged steps forward to warn you: if you use this device to threaten your neighbors, any misstep could allow an enemy to seize it and turn it against you.',
    choices: [
      {
        id: 'defensive-commission',
        title: 'Defensive Commission',
        description: 'Commission the weapon for defensive use only. You order the device constructed and deployed on your own walls and fortresses, but strictly forbid its use in offensive campaigns. You announce that its sole purpose is to guard lives and prevent unjust invasion, not to inflict needless suffering on others.',
        effects: [
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
        ],
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'famine-granaries',
      },
      {
        id: 'mass-produce',
        title: 'Mass Produce',
        description: 'Secretly mass-produce the weapon and use it to intimidate neighboring states. You see the potential to establish hidden workshops and quietly spread rumors of your new power. This device can be used as a tool of calculated fear, forcing surrounding rulers to yield tribute and territory.',
        effects: [
          { stat: 'deterrence', change: -10, label: '−Deterrence' },
          { stat: 'diplomacy', change: -10, label: '−Foreign Support' },
        ],
        philosopherTags: {
          hanfeizi: 2,
        },
        nextScenarioId: 'famine-granaries',
      },
      {
        id: 'refuse-invention',
        title: 'Refuse Invention',
        description: 'Refuse the invention and denounce it as an artificial danger that will disturb the way your kingdom operates. Dismiss the savant and instruct your ministers that relying on such extreme weapons invites disaster, preferring to trust the manpower you know well.',
        effects: [
          { stat: 'deterrence', change: -10, label: '−Deterrence' },
        ],
        philosopherTags: {
          laozi: 2,
        },
        nextScenarioId: 'famine-granaries',
      },
    ],
  },
  {
    id: 'famine-granaries',
    act: 'Act II',
    title: 'Crises of the Reign',
    subtitle: 'Famine and the Granaries',
    description: 'A sudden drought devastates three prefectures, causing crops to fail and grain prices to triple. Crowds gather at city gates, and some arrive at your throne. Your officials warn that if the crisis is mishandled, both order and legitimacy may crumble.',
    choices: [
      {
        id: 'open-granaries',
        title: 'Open Granaries',
        description: 'Open the granaries, cap grain prices, and remit taxes in the hardest-hit regions. You declare that if the people cannot fill their bowls, fault lies not with them but with their ruler, and that your first duty is to secure their basic livelihood before demanding strict obedience.',
        effects: [
          { stat: 'populace', change: 10, label: '+Popular Support' },
        ],
        philosopherTags: {
          mengzi: 2,
        },
        nextScenarioId: 'corrupt-minister',
      },
      {
        id: 'distribute-grain-widely',
        title: 'Distribute Widely',
        description: 'Distribute grain not only to your own subjects but also to refugees and nearby border villages, even those owing allegiance to rival states. You order that, for now, distinctions of territory and clan should not prevent you from aiding those who suffer.',
        effects: [
          { stat: 'diplomacy', change: 10, label: '+Foreign Support' },
          { stat: 'deterrence', change: -10, label: '−Deterrence' },
        ],
        condition: (stats) => stats.efficiency > 20, // Threshold for failure
        alternateDescription: 'You attempt to distribute the grain, but your kingdom’s inexperience handling large-scale projects causes confusion over who gets priority, and storehouses lay paralyzed with indecision. Thousands starve.',
        alternateEffects: [
           // -5 to Legacy Score (not yet implemented, using placeholder stat drop)
           { stat: 'populace', change: -20, label: '−Popular Support (Failed)' },
           { stat: 'efficiency', change: -10, label: '−Efficiency' }
        ],
        successDescription: 'Your decision shocks the court, but the relief convoys move steadily across the border. Eventually, it seems that both your own people and those in border villages manage to make it out of the crisis. Refugees praise your compassion, and rival states, unaccustomed to such generosity, take careful note. While some whisper that your mercy makes you appear naïve or foolish, many admire a kingdom that is willing to aid strangers when they are in need.',
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'corrupt-minister',
      },
      {
        id: 'strict-rationing',
        title: 'Strict Rationing',
        description: 'Lay down the law by imposing strict quotas and rationing grain, posting officials to watch every warehouse and marketplace and count exactly how much grain each person gets. You decree death for black-market traders and harsh penalties for anyone caught hiding grain.',
        effects: [
          { stat: 'efficiency', change: 10, label: '+Efficiency' },
          { stat: 'populace', change: -10, label: '−Popular Support' },
        ],
        condition: (stats) => stats.efficiency > 20, // Threshold for failure
        alternateDescription: 'You attempt to carry out this system, but your kingdom’s inexperience in bureaucracy rears its head. Records are inconsistent, officials lose track of stock, and warehouses are raided as you hear reports of black-market violence throughout the provinces.',
        alternateEffects: [
           // -5 to Legacy Score (not yet implemented, using placeholder stat drop)
           { stat: 'populace', change: -20, label: '−Popular Support (Failed)' },
           { stat: 'efficiency', change: -10, label: '−Efficiency' }
        ],
        successDescription: 'Your orders are implemented with cold precision, showing the ruthless efficiency of your state.  As the markets fall silent, hoarders are identified one by one, and ration queues move carefully under the watchful eyes of your bureaucracy. Eventually, the grain stretches far enough, and the famine is contained, but the people will remember the severity of your methods.',
        philosopherTags: {
          hanfeizi: 2,
        },
        nextScenarioId: 'corrupt-minister',
      },
    ],
  },
  {
    id: 'corrupt-minister',
    act: 'Act II',
    title: 'Crises of the Reign',
    subtitle: 'Corrupt Minister',
    description: 'Your most efficient tax minister, long praised for his craftiness, has been exposed for siphoning tax funds into private accounts. He is dragged before you to decide his fate. Some insist that his talents are too valuable to waste, but others demand a cleansing of corruption from the court.',
    choices: [
      {
        id: 'punish-train',
        title: 'Punish & Train',
        description: 'Punish him, then subject him to a period of moral training and ritual correction under your chief ministers, requiring restitution for what he stole. Publically declare that you will straighten his conduct through a combination of law, public shame, and carefully structured obligations.',
        effects: [],
        philosopherTags: {
          xunzi: 2,
        },
        nextScenarioId: 'border-defense',
      },
      {
        id: 'public-denouncement',
        title: 'Public Denouncement',
        description: 'Publicly denounce his misconduct and demote him to a low, humiliating post without ending his life. You believe that the shame and example of his public condemnation will encourage him and others like him to reform their ways of seeing the world.',
        effects: [],
        philosopherTags: {
          confucius: 2,
        },
        nextScenarioId: 'border-defense',
      },
      {
        id: 'execute-minister',
        title: 'Execute Minister',
        description: 'Order his execution and confiscate his family’s assets, proclaiming that no one, however capable, gets away with stealing from the state. Make his fate a clear warning to all who might consider bending your law for private gain.',
        effects: [],
        philosopherTags: {
          lordshang: 2,
        },
        nextScenarioId: 'border-defense',
      },
    ],
  },
  {
    id: 'border-defense',
    act: 'Act II',
    title: 'Crises of the Reign',
    subtitle: 'Border Defense Crisis',
    description: 'Alarms sound across the city and your generals scramble to rally their troops. Your head minister is nowhere to be found, so you must decide right now how to approach the situation. You aren’t sure if your neighbors are actually planning to attack. Do you prepare your military and escalate?',
    choices: [
      {
        id: 'defensive-doctrine',
        title: 'Defensive Doctrine',
        description: 'Command your generals to reinforce city walls, repair border fortresses, and fill granaries in the frontier towns. No soldier is to fire the first arrow or provoke the enemy. You publicly declare that your state stands ready to protect itself but refuses to give any neighbor any excuse for violence.',
        effects: [
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
          { stat: 'military', change: 10, label: '+Military Support' },
          { stat: 'legacy', change: 10, label: '+Legacy' },
        ],
        condition: (stats) => stats.deterrence >= 30,
        alternateDescription: 'Despite your preparations, the enemy tests your defenses, finds the weak points, and breaks through in a brutal campaign. As your soldiers desperately try to fight back, villages burn, borderlands are captured, and your realm shrinks in size. People mutter that good intentions alone could not hold the frontier.',
        alternateEffects: [
          { stat: 'populace', change: -10, label: '−Popular Support' },
          { stat: 'military', change: -10, label: '−Military Support' },
          { stat: 'legacy', change: -5, label: '−Legacy' },
        ],
        successDescription: 'Your walls bristle with defenders, but not a single arrow crosses the border. Small feints are made by opposing troops, but your generals remain disciplined and steady. After weeks of staring at unshakable ramparts and disciplined troops, your neighbor quietly withdraws.',
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'coup-capital',
      },
      {
        id: 'virtue-diplomacy',
        title: 'Virtue Diplomacy',
        description: 'You take a deep breath and try to resolve the situation without violence. You send envoys to your neighbor bearing generous terms for peace, including offers of fair arbitration and guarantees of non-aggression. You publicly proclaim that you will not take advantage of another and that there is no need for anyone to seek profit over maintaining peaceful relations.',
        effects: [
          { stat: 'diplomacy', change: 10, label: '+Foreign Support' },
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
          { stat: 'legacy', change: 10, label: '+Legacy' },
        ],
        condition: (stats, history) => {
          const betrayed = history.includes('cunning-strategist'); // 1.1 Betrayer check
          if (betrayed) return false;
          return stats.diplomacy > 30;
        },
        alternateDescription: "Your envoys ride out bearing generous terms, but when they reach the enemy lines, they discover a shocking fact: the chief minister who once served you now stands at your enemy's side and has seen everything coming. Under the cover of negotiations, their forces surge forward in a sudden assault. Caught off guard, you have no choice but to cede territory.",
        alternateEffects: [
          { stat: 'legacy', change: -10, label: '−Legacy' },
          { stat: 'deterrence', change: -10, label: '−Deterrence' }
        ],
        successDescription: 'Your neighbor remembers your past good will, and allied courts echo your calls for peace. Faced with a ruler whose peacemaking is known, your neighbor chooses to settle through talks rather than war. As the realm sighs in relief, the standoff dissolves into a public triumph for your moral reputation as a ruler of peace.',
        philosopherTags: {
          mengzi: 2,
        },
        nextScenarioId: 'coup-capital',
      },
      {
        id: 'preemption',
        title: 'Preemption',
        description: 'There is no time to waste: you must strike fast while you still have the element of surprise. You order a lightning offensive, drawing on well-trained, fast-moving soldiers to move through mountain passes, burn supply depots, cut roads, and scatter enemy scouts. If you strike swiftly and decisively now, your enemy will not have time to launch a coordinated attack.',
        effects: [
          { stat: 'military', change: 10, label: '+Military Support' },
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
          { stat: 'legacy', change: 10, label: '+Legacy' },
        ],
        condition: (stats, history) => {
           const massProduced = history.includes('mass-produce'); // 2.1 Tech check
           if (massProduced) return false;
           return stats.military > 30;
        },
        alternateDescription: 'Your generals roll out your new military machines under the cover of night to strike first, but in the chaos of the offensive, one is captured and copied. Within weeks, you watch your own terrifying invention roar back across the fields toward your cities. People begin to whisper of your reckless gamble.',
        alternateEffects: [
           { stat: 'legacy', change: -10, label: '−Legacy' },
           { stat: 'deterrence', change: -10, label: '−Deterrence' }
        ],
        successDescription: "Your forces, well-trained and loyal, move swiftly through mountain passes and along hidden routes, burning supply camps and scattering enemy patrols before a full army can form. Your generals read your opponents' moves, staying one step ahead like a cunning wolf. The neighbor's campaign collapses before it begins, and they retreat into submission.",
        philosopherTags: {
          hanfeizi: 2,
        },
        nextScenarioId: 'coup-capital',
      },
    ],
  },
  {
    id: 'coup-capital',
    act: 'Act II',
    title: 'Crises of the Reign',
    subtitle: 'Coup in the Capital',
    description: 'Your ministers report to you with uneasy news: a beloved general has marched a large force into the outer city, claiming their presence is "routine exercise." You hear rumors that he has been meeting with nobles late at night and that he now commands the loyalty of more soldiers than usual. The city is tense, and it feels like any misstep could ignite civil war.',
    choices: [
      {
        id: 'preemptive-strike',
        title: 'Preemptive Strike',
        description: "Use your latent power and manipulation while you can. You issue rapid, secret orders to arrest the general's closest supporters. You command messengers to rush and rearrange command postings across the realm. You prepare public trials to expose traitors and deter future potential coups from stepping out of line.",
        effects: [
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
          { stat: 'legacy', change: 10, label: '+Legacy' },
        ],
        condition: (stats) => stats.efficiency > 30,
        alternateDescription: 'You try to implement the plan, but delays, miscommunications, and hesitant officials give your game away. When they get tips of your efforts, the generals close ranks, march in formation through the streets, and seize the outer city walls. You have no choice but to offer concessions, leaving your empire smaller, weaker, and less respected.',
        alternateEffects: [
          { stat: 'deterrence', change: -10, label: '−Deterrence' },
          { stat: 'military', change: -10, label: '−Military Support' },
          { stat: 'legacy', change: -5, label: '−Legacy' },
        ],
        successDescription: 'In a well-organized, effective bureaucracy, your orders fly out faster than whispers can travel. Key officers are seized in the night, public confessions are drawn from them, and by dawn, the general finds himself powerless, with his lines of support cut away. The potential coup dissolves into frightened silence, and he quietly retreats.',
        philosopherTags: {
          hanfeizi: 2,
        },
        nextScenarioId: 'execution-rebels',
      },
      {
        id: 'ritual-loyalty',
        title: 'Ritual Loyalty',
        description: 'You will restore loyalty through morality by summoning the aristocracy to a grand ceremony. Before ancestral banners and sacred vessels, you call upon them to reaffirm the order of ranks and the obligations binding lord and minister. You distribute titles and honors, hoping that ritual propriety will anchor their loyalty and eliminate the support behind the rogue general.',
        effects: [
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
          { stat: 'legacy', change: 10, label: '+Legacy' },
        ],
        condition: (stats) => stats.aristocracy > 30,
        alternateDescription: "You convene the ceremony, but the bows are shallow as the nobles remember your past offenses against them. Behind your back, offended nobles ride straight to the general's camp with news of your plans. By the next morning, his troops are surging over the outer city gates. You have no choice but to offer territory and resource concessions, leaving your empire smaller, weaker, and less respected.",
        alternateEffects: [
          { stat: 'deterrence', change: -10, label: '−Deterrence' },
          { stat: 'military', change: -10, label: '−Military Support' },
          { stat: 'legacy', change: -10, label: '−Legacy' },
        ],
        successDescription: 'In a hall filled with incense and ancestral banners, the nobles, trustful of your benevolence, kneel and swear renewed oaths of loyalty, emotionally affected by your ritual. When the general looks for support, he suddenly finds doors closed, supplies withheld, and promised support gone. Quietly, the would-be revolt shrivels, and no one dares to challenge you with your nobles behind you.',
        philosopherTags: {
          confucius: 2,
        },
        nextScenarioId: 'execution-rebels',
      },
      {
        id: 'moral-argument',
        title: 'Moral Argument',
        description: "You will appeal to the soldiers directly to regain their loyalty. You descend to the front lines yourself and face the soldiers. You acknowledge their hardships, pledge reforms to their rations and pay, and promise honor and fair treatment if they stand with the throne against their general's reckless ambition.",
        effects: [
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
          { stat: 'military', change: 10, label: '+Military Support' },
          { stat: 'legacy', change: 10, label: '+Legacy' },
        ],
        condition: (stats) => stats.military > 30,
        alternateDescription: 'You make your speech, but notice that your words fall flat on faces hardened by years of neglect. After listening in stony silence, the soldiers, remembering your treatment in the past, return to their barracks and quietly report your promises to their commander. The next day, they march on the outer city walls. You have no choice but to offer concessions, leaving your empire smaller, weaker, and less respected.',
        alternateEffects: [
          { stat: 'deterrence', change: -10, label: '−Deterrence' },
          { stat: 'military', change: -10, label: '−Military Support' },
          { stat: 'legacy', change: -5, label: '−Legacy' },
        ],
        successDescription: 'You stand before the assembled soldiers and speak plainly of burdens, pay, and the suffering of ordinary families. The soldiers remember your past accommodations, and with the promises of concrete reforms and shared honor, you win murmurs of approval. The next day, when the general calls them to march on the palace, they hesitate, then refuse.',
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'execution-rebels',
      },
    ],
  },
  {
    id: 'execution-rebels',
    act: 'Act II',
    title: 'Crises of the Reign',
    subtitle: 'Execution of Rebels',
    description: 'The captured insurgents are brought before your throne to face judgment. They plead for clemency, promising future support if you let them live. Villages that suffered during the unrest, your ministers who fear future uprisings, and other neighboring states all watch closely. How will you exert your power?',
    choices: [
      {
        id: 'execute-leaders',
        title: 'Execute Leaders',
        description: 'Execute the leaders and their families and impose collective penalties on their followers. You declare that rebellion against the throne must be crushed completely, so that no one doubts the consequences of lifting a hand against the established order.',
        effects: [],
        philosopherTags: {
          hanfeizi: 2,
        },
        nextScenarioId: 'succession-plot',
      },
      {
        id: 'benevolent-pardon',
        title: 'Benevolent Pardon',
        description: 'Extend the hand of benevolence, pardoning many and punishing the most violent or unrepentant among them. Display public humility by admitting the conditions that helped spark the revolt and promise reforms to address those underlying causes.',
        effects: [],
        philosopherTags: {
          mengzi: 2,
        },
        nextScenarioId: 'succession-plot',
      },
      {
        id: 'impartial-justice',
        title: 'Impartial Justice',
        description: 'Judge each case individually and assign penalties strictly according to the harm done, regardless of rank or connections. Commute some sentences if the offender can still contribute to the realm, but severely punish others, all under a single, impartial standard.',
        effects: [],
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'succession-plot',
      },
    ],
  },
  {
    id: 'succession-plot',
    act: 'Act III',
    title: 'Legacy and End of Rule',
    subtitle: 'Succession',
    description: 'Rumors ripple through the court that you have begun to think seriously about succession. You have two sons that become the topic of much discussion. Your eldest son is entitled but mediocre, while your younger son is capable but many fear his ruthlessness.',
    choices: [
      {
        id: 'unannounced-tests',
        title: 'Unannounced Tests',
        description: 'You must find out which is more capable without revealing your intentions. You design a series of unannounced tests meant to expose which son can better command obedience and manage crises. You quietly orchestrate small emergencies and shuffle advisers between them, rewarding the one who responds with disciplined control and punishing the one who fails your designs.',
        effects: [
          { stat: 'legacy', change: 10, label: '+Legacy' },
        ],
        condition: (stats) => stats.efficiency > 30,
        alternateDescription: 'Your tests leak, officials fumble instructions, and both sons realize they are being manipulated. Factions panic and rush to protect themselves, and the royal household fractures under suspicion of traps and favoritism.',
        alternateEffects: [
          { stat: 'legacy', change: -5, label: '−Legacy' },
        ],
        successDescription: "Your bureaucracy carries out your intricate tests cleanly and quietly. Clumsy supporters are exposed, hidden factions are revealed, and one son shows a clear ability to command and manage the state's machinery. The court accepts your choice, even if their hearts remain cold.",
        philosopherTags: {
          hanfeizi: 2,
        },
        nextScenarioId: 'question-immortality',
      },
      {
        id: 'academy-succession',
        title: 'Academy of Succession',
        description: 'You realize that you must not only choose but build up an heir. You announce the creation of a formal academy of succession, placing both sons under the supervision of senior elders and ritual masters. Over the coming years, they will be trained in the classics, made to perform rites together, and evaluated through ceremonial examinations and public displays of propriety.',
        effects: [
          { stat: 'legacy', change: 10, label: '+Legacy' },
        ],
        condition: (stats) => stats.aristocracy > 30,
        alternateDescription: "Your effort starts off with good intentions, but many nobles already harbor discontent toward your policies, jealous of a process that limits their influence. Quietly, they begin to question and undermine the academy's authority. Before you know it, you can no longer trust that your nobles have your succession's best interest at heart.",
        alternateEffects: [
          { stat: 'legacy', change: -5, label: '−Legacy' },
        ],
        successDescription: 'Your loyal aristocracy embraces the academy, seeing their own values reflected in its rites and councils. They lend their prestige to its judgments, and you feel a sense of legitimacy as your sons are educated. Your eventual decision feels like the natural outcome of an orderly process rather than a personal whim.',
        philosopherTags: {
          xunzi: 2,
        },
        nextScenarioId: 'question-immortality',
      },
      {
        id: 'moral-virtue',
        title: 'Moral Virtue',
        description: "You want an heir who will uphold the morality of your kingdom. You observe both sons carefully over time to judge their moral benevolence and then publicly name the one you judge to be more morally upright, even if it means bypassing birth order. You declare that Heaven's Mandate rests on virtue, not seniority.",
        effects: [
          { stat: 'legacy', change: 10, label: '+Legacy' },
        ],
        condition: (stats) => stats.populace > 30,
        alternateDescription: 'You sense right away that the people are uneasy at this prospect. Courtiers and nobles rage that you have upended tradition and threatened the stability of the line of succession over an arbitrary concept. Factions rally around the displaced first-born son. You are seen not as a morally benevolent king but an indecisive and erratic one.',
        alternateEffects: [
          { stat: 'legacy', change: -5, label: '−Legacy' },
        ],
        successDescription: "The people trust in your judgment and praise your courage. Stories spread of the king who cared more about virtue than his own family's pride, portraying you as a morally benevolent ruler.",
        philosopherTags: {
          mengzi: 2,
        },
        nextScenarioId: 'question-immortality',
      },
    ],
  },
  {
    id: 'question-immortality',
    act: 'Act III',
    title: 'Legacy and End of Rule',
    subtitle: 'Question of Immortality',
    description: 'Your physicians warn that your strength is not what it once was. A court alchemist approaches you with an array of strange elixirs and secret methods, promising to stretch your lifespan if you are willing to endure their experiments. Some ministers beg you to cling to life for the sake of stability, but others fear what will happen if you distort the natural order.',
    choices: [
      {
        id: 'secret-elixirs',
        title: 'Secret Elixirs',
        description: 'You want to live long, but cannot let the people know you are taking this risk. You authorize clandestine efforts to prolong your life, approving guarded compounds, experimental tonics, and even the training of decoys to confuse would-be assassins. You keep these measures hidden, sharing them only with a small circle of trusted agents.',
        effects: [],
        philosopherTags: {
          hanfeizi: 2,
        },
        nextScenarioId: 'philosophers-death',
      },
      {
        id: 'accept-impermanence',
        title: 'Accept Impermanence',
        description: 'Dangerous potions will not prevent death. You publicly reject extreme treatments, accepting that life and death are part of a single transformation and that when it is your time to die, you will. In court audiences, you speak calmly of your own impermanence and urge your ministers to strengthen laws, institutions, and councils instead of clinging to your person.',
        effects: [],
        philosopherTags: {
          zhuangzi: 2,
        },
        nextScenarioId: 'philosophers-death',
      },
      {
        id: 'simpler-life',
        title: 'Simpler Life',
        description: 'This is a wake-up call to your mortality, but you can change your life without these potions. You quietly scale back your lifestyle and withdraw from excess, ending long hunts, elaborate banquets, and late-night council sessions. You move to simpler quarters, eat modestly, and allow your body to follow a gentler, more natural rhythm.',
        effects: [],
        philosopherTags: {
          laozi: 2,
        },
        nextScenarioId: 'philosophers-death',
      },
    ],
  },
  {
    id: 'philosophers-death',
    act: 'Act III',
    title: 'Legacy and End of Rule',
    subtitle: 'Philosopher’s Death',
    description: 'Your lifelong mentor, who challenged your decisions, sharpened your thinking, and guided your early reign, has fallen gravely ill. Ministers, courtiers, and your heirs wait to see what lesson you will send with your response to his passing. The way you handle his death will be read as a message about how you understand life, duty, and the end of things.',
    choices: [
      {
        id: 'philosophical-calm',
        title: 'Philosophical Calm',
        description: 'Remain calm and unperturbed. You treat his death with philosophical lightness, addressing the court to say that lives rise and fall like the seasons and that we must not cling to his earthly form. You discourage excessive displays of grief and suggest that true respect lies in following the philosophies he pointed toward.',
        effects: [],
        philosopherTags: {
          zhuangzi: 2,
        },
        nextScenarioId: 'kings-illness',
      },
      {
        id: 'state-funeral',
        title: 'State Funeral',
        description: 'You must respect his life and legacy. You order a kingdom-wide period of mourning and organize a grand state funeral with flawless traditional rituals, including mourning robes, processions, ancestral offerings, and perfectly recited eulogies. You lead the ceremonies yourself.',
        effects: [],
        philosopherTags: {
          confucius: 2,
        },
        nextScenarioId: 'kings-illness',
      },
      {
        id: 'private-mourning',
        title: 'Private Mourning',
        description: 'Honor him in private. You keep the funeral small and restrained, refusing to turn your mentor’s death into political theater or a show of your own dominance. You allow only close disciples and family to attend, and you step away from public display, honoring him by quiet presence rather than spectacle.',
        effects: [],
        philosopherTags: {
          laozi: 2,
        },
        nextScenarioId: 'kings-illness',
      },
    ],
  },
  {
    id: 'kings-illness',
    act: 'Act III',
    title: 'Legacy and End of Rule',
    subtitle: 'King’s Illness',
    description: 'You have fallen gravely ill. As the sickness spreads through your body, even the most loyal physicians cannot disguise their concern. Rumors begin to swirl about which ministers favor which prince, and you hear reports that some officials are already making private promises about the future.',
    choices: [
      {
        id: 'reassure-impermanence',
        title: 'Reassure Impermanence',
        description: 'You must reassure the people about the impermanence of life. You address them directly in a formal proclamation, acknowledging your condition and speaking plainly about the fact that no life lasts forever, but they should not fear your death. You lay out clear contingency plans and urge your subjects not to hide from change.',
        effects: [],
        philosopherTags: {
          zhuangzi: 2,
        },
        nextScenarioId: 'resting-temple',
      },
      {
        id: 'prepare-transition',
        title: 'Prepare Transition',
        description: 'The best way to reassure the people is through preparation. Summon your ministers and ritual specialists to rehearse the procedures for a smooth transition and bureaucratic stability after your death. You train them in the passing of seals, mourning periods, public announcements, and the first acts a new ruler should make.',
        effects: [],
        philosopherTags: {
          xunzi: 2,
        },
        nextScenarioId: 'resting-temple',
      },
      {
        id: 'test-equilibrium',
        title: 'Test Equilibrium',
        description: 'Use the illness as an opportunity to test the ability of your kingdom to exist in equilibrium. Step back from direct decision-making and allow councils to handle more of the state’s daily affairs. Give more autonomy to your ministers and generals instead of giving direct and dominating order, quietly observing how your ministers behave.',
        effects: [],
        philosopherTags: {
          laozi: 2,
        },
        nextScenarioId: 'resting-temple',
      },
    ],
  },
  {
    id: 'resting-temple',
    act: 'Act III',
    title: 'Legacy and End of Rule',
    subtitle: 'Resting Temple Debate',
    description: 'As your age becomes undeniable, your ministers begin arguing about how you should be honored after your death. Some propose a towering ancestral temple with ongoing sacrifices, while others favor a simple shrine that is accessible to commoners. Blueprints are brought before you for your approval.',
    choices: [
      {
        id: 'grand-temple',
        title: 'Grand Temple',
        description: 'Approve the construction of a grand ancestral temple in the capital, complete with carved pillars, ancestral tablets, and a schedule of elaborate offerings. Declare that the temple will be a holy space for rituals and ceremonies for many generations to come.',
        effects: [],
        philosopherTags: {
          confucius: 2,
        },
        nextScenarioId: 'historians-verdict',
      },
      {
        id: 'modest-shrine',
        title: 'Modest Shrine',
        description: 'Refuse a lavish structure and instead authorize only a modest shrine, insisting that extra resources be directed toward public relief and local shrines for the people instead of extravagant designs. Publicly state that the best way to honor a ruler is to keep common households fed and secure.',
        effects: [],
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'historians-verdict',
      },
      {
        id: 'reject-temple',
        title: 'Reject Temple',
        description: 'Reject the idea of a fixed temple altogether. Instead, instruct your ministers that the kingdom should remember your reign through conduct, stories, and the overall health of the realm. You will soon be gone, but the kingdom will remain, and it is more important to honor the kingdom than the individual.',
        effects: [],
        philosopherTags: {
          zhuangzi: 2,
        },
        nextScenarioId: 'historians-verdict',
      },
    ],
  },
  {
    id: 'historians-verdict',
    act: 'Act III',
    title: 'Legacy and End of Rule',
    subtitle: 'Historian’s Verdict',
    description: "As your final months draw near, court historians arrive at your throne and present you with several drafts of your reign's official chronicle. Some historical drafts soften purges, failed campaigns, and discontent, while others openly highlight them as cautionary lessons. You must decide how tightly you will control how the history books will portray you far into the future.",
    choices: [
      {
        id: 'official-chronicle',
        title: 'Official Chronicle',
        description: 'While you still have power, you must use it. Order the historians to merge the accounts into a single official chronicle that emphasizes order, stability, and continuity, trimming or altering passages that might inflame factions. You make it clear that this version alone will be allowed in the archives.',
        effects: [
          { stat: 'legacy', change: 10, label: '+Legacy' },
        ],
        condition: (stats) => stats.deterrence > 30,
        alternateDescription: "Dissent slips through the cracks of your orders. Scholars quietly circulate forbidden copies of the earlier drafts, and over time, more people come to believe that the state's history is a carefully staged performance rather than an honest record. Even your great successes are called into question: were they true or merely exaggerated?",
        alternateEffects: [
          { stat: 'legacy', change: -5, label: '−Legacy' },
        ],
        successDescription: 'Your decree is obeyed, and no one dares publicly question the authorized version. Future officials quote your chronicle as settled truth, and alternative memories survive only as faint whispers at the margins.',
        philosopherTags: {
          lordshang: 2,
        },
        nextScenarioId: 'peoples-memory',
      },
      {
        id: 'balanced-account',
        title: 'Balanced Account',
        description: 'You want to be remembered as a morally honest ruler. Permit a balanced account that records both your achievements and your failures, allowing historians to write faithfully even when the story does not flatter you. You state publicly that a ruler should be judged by the whole of his actions, not by polished fragments.',
        effects: [
          { stat: 'legacy', change: 10, label: '+Legacy' },
        ],
        condition: (stats) => stats.populace > 30,
        alternateDescription: 'You attempt to seem magnanimous, but within discontented corners of the population rival factions seize on the darker chapters to attack your dynasty and point out weaknesses. Excerpts circulate, painting you as weak or cruel without the balance of the full story.',
        alternateEffects: [
          { stat: 'legacy', change: -5, label: '−Legacy' },
        ],
        successDescription: 'The people and many officials praise your openness and honesty. Over time, your willingness to be judged honestly becomes part of the legend of your person. You are remembered as a ruler who was willing to admit his own faults and always prioritized a high moral standing.',
        philosopherTags: {
          mengzi: 2,
        },
        nextScenarioId: 'peoples-memory',
      },
      {
        id: 'multiple-chronicles',
        title: 'Multiple Chronicles',
        description: 'Authorize multiple chronicles instead of just one, allowing different schools and regions to write their own versions of your reign. You argue that no single text can capture the entire truth and that trying to fix memory in one official story will only distort it. It is not up to you to distinguish the true history.',
        effects: [],
        philosopherTags: {
          zhuangzi: 2,
        },
        nextScenarioId: 'peoples-memory',
      },
    ],
  },
  {
    id: 'peoples-memory',
    act: 'Act III',
    title: 'Legacy and End of Rule',
    subtitle: 'People’s Memory',
    description: 'In your final months, you notice how people talk about you in markets, tea houses, and village courtyards. Some remember your harsh laws, others your acts of generosity, others your philosophical proclamations. You realize that while temples and chronicles matter, so too do the everyday stories people tell. You still have time to shape your final impression and legacy.',
    choices: [
      {
        id: 'reflective-teachings',
        title: 'Reflective Teachings',
        description: 'Commission short essays, proclamations, and teachings that speak about impermanence, shared responsibility, and the idea that history is written by many hands. You distribute them widely, hoping to leave behind a calmer, more reflective way of thinking about rulers and change.',
        effects: [],
        philosopherTags: {
          zhuangzi: 2,
        },
        nextScenarioId: 'final-interlude',
      },
      {
        id: 'final-tour',
        title: 'Final Tour',
        description: 'Organize a final tour of granaries and villages, issuing targeted tax remissions and visiting widows, orphans, and the elderly. You make sure that the last public image of your reign is one of direct concern for those who have the least.',
        effects: [],
        philosopherTags: {
          mengzi: 2,
        },
        nextScenarioId: 'final-interlude',
      },
      {
        id: 'reissue-laws',
        title: 'Reissue Laws',
        description: 'Reissue your core laws and regulations in a clear, easily understood form, reminding the people that your lasting gift is the stability they have enjoyed under your rule. You instruct your heir and ministers to preserve this framework above all else.',
        effects: [],
        philosopherTags: {
          hanfeizi: 2,
        },
        nextScenarioId: 'final-interlude',
      },
    ],
  },
];

export const getScenarioById = (id: string): Scenario | undefined => {
  return SCENARIOS.find(s => s.id === id);
};
