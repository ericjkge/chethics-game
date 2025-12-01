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
        description: 'Candidate three is a young official of low birth who worked his way up by allying with the common people. He is popular among the masses, but several prominent aristocrats have said that they will take it as a great offense if you elect him.',
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
        nextScenarioId: 'appointment-of-ministers',
      },
      {
        id: 'benevolent-reform',
        title: 'Benevolent Reform',
        description: 'Extend the olive branch of benevolence. Take personal responsibility for their hardship and announce that a ruler who cannot secure basic livelihood has failed in his duty. Make orders to introduce reforms to stabilize agriculture, and begin restructuring land and tax practices so that ordinary families can sustain themselves.',
        effects: [],
        philosopherTags: {
          mengzi: 2,
        },
        nextScenarioId: 'appointment-of-ministers',
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
        nextScenarioId: 'appointment-of-ministers',
      },
    ],
  },
];

export const getScenarioById = (id: string): Scenario | undefined => {
  return SCENARIOS.find(s => s.id === id);
};
