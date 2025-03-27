import { StaticImageData } from "next/image";

export type Religion = "Hinduism" | "Buddhism" | "Jainism" | "Sikhism" | "Islam" | "Christianity" | "Zoroastrianism";
export type Season = "Spring" | "Summer" | "Monsoon" | "Autumn" | "Winter";
export type ContentType = "Temple" | "Festival" | "Ritual";

export interface State {
  id: string;
  name: string;
  region: "North" | "South" | "East" | "West" | "Central" | "Northeast";
  description: string;
  culturalSites: number;
}

export interface CulturalItem {
  id: string;
  title: string;
  type: ContentType;
  state: string;
  religion: Religion;
  season?: Season;
  month?: number;
  date?: string;
  description: string;
  significance: string;
  longDescription: string;
}

export interface Festival extends CulturalItem {
  type: "Festival";
  celebrationPeriod: string;
  season: Season;
  month: number;
  rituals: string[];
}

export interface Temple extends CulturalItem {
  type: "Temple";
  architecture: string;
  deity: string;
  yearBuilt: string;
}

export interface Ritual extends CulturalItem {
  type: "Ritual";
  occasion: string;
  participants: string;
  season?: Season;
  month?: number;
}

export const states: State[] = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    region: "South",
    description: "Known for Dravidian temples and classical dance forms",
    culturalSites: 14,
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "North",
    description: "Famous for its forts, palaces, and desert festivals",
    culturalSites: 12,
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    region: "East",
    description: "Home to literature, art, and Durga Puja",
    culturalSites: 9,
  },
  {
    id: "gujarat",
    name: "Gujarat",
    region: "West",
    description: "Known for Navratri celebrations and step wells",
    culturalSites: 10,
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    region: "West",
    description: "Famous for Ganesh Chaturthi and cave temples",
    culturalSites: 11,
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "South",
    description: "Known for Kathakali and backwater traditions",
    culturalSites: 8,
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    region: "North",
    description: "Sacred rivers and ancient cities",
    culturalSites: 15,
  },
  {
    id: "punjab",
    name: "Punjab",
    region: "North",
    description: "Land of five rivers and vibrant Bhangra dance",
    culturalSites: 7,
  },
];

export const culturalItems: CulturalItem[] = [
  {
    id: "diwali",
    title: "Diwali",
    type: "Festival",
    state: "pan-india",
    religion: "Hinduism",
    season: "Autumn",
    month: 10,
    description: "Festival of lights celebrating the victory of light over darkness",
    significance: "Celebrates Lord Rama's return to Ayodhya after defeating Ravana",
    longDescription: "Diwali, the festival of lights, is one of India's most significant celebrations. Homes are decorated with oil lamps (diyas), candles, and colorful rangoli patterns. Families exchange gifts, share sweets, and light fireworks. The festival symbolizes the spiritual victory of light over darkness and good over evil. While primarily a Hindu festival celebrating Lord Rama's return from exile, it's observed across India by people of different faiths, each with regional variations in customs and traditions.",
  },
  {
    id: "holi",
    title: "Holi",
    type: "Festival",
    state: "uttar-pradesh",
    religion: "Hinduism",
    season: "Spring",
    month: 3,
    description: "Festival of colors celebrating the arrival of spring",
    significance: "Celebrates the triumph of good over evil and the arrival of spring",
    longDescription: "Holi is a vibrant festival marking the arrival of spring. It begins with Holika Dahan, where bonfires symbolize the victory of good over evil. The following day features the iconic color play, where people drench each other with colored powders and water. In Mathura and Vrindavan, Holi celebrations are particularly elaborate, connected to Lord Krishna's playful antics. Traditional delicacies like gujiya (sweet dumplings) and thandai (a spiced milk drink) are enjoyed during festivities. Beyond its religious significance, Holi represents community harmony as people of all backgrounds participate in the celebrations.",
  },
  {
    id: "meenakshi-temple",
    title: "Meenakshi Temple",
    type: "Temple",
    state: "tamil-nadu",
    religion: "Hinduism",
    description: "Ancient temple dedicated to Goddess Meenakshi with stunning architecture",
    significance: "One of India's most important and ancient Hindu temples",
    longDescription: "The Meenakshi Amman Temple in Madurai is a marvel of Dravidian architecture, renowned for its towering gopurams (gateway towers) covered with thousands of colorful sculptures. Dedicated to Goddess Meenakshi, an avatar of Parvati, and her consort Lord Shiva, the temple complex spans 14 acres. The temple features 14 magnificently decorated gateway towers, the tallest rising to 170 feet. Inside, the complex contains numerous pillared halls, shrines, and the sacred Golden Lotus Tank. The temple hosts the grand Meenakshi Tirukalyanam (celestial wedding) festival annually, attracting thousands of devotees.",
  },
  {
    id: "kathakali",
    title: "Kathakali",
    type: "Ritual",
    state: "kerala",
    religion: "Hinduism",
    description: "Classical dance form with elaborate makeup and costumes",
    significance: "Ancient storytelling tradition through dance and expressions",
    longDescription: "Kathakali is Kerala's classical dance-drama characterized by elaborate costumes, ornate makeup, and codified hand gestures (mudras). Performances typically depict stories from Hindu epics like the Ramayana and Mahabharata. The preparation for a Kathakali performance is ritualistic—makeup application alone can take hours, with performers using natural pigments to create stylized faces. The art form combines elements of dance, drama, music, and literature, requiring years of rigorous training. Traditionally performed in temple courtyards through the night, Kathakali is preserved as a cultural heritage that communicates ancient wisdom through visual storytelling.",
  },
  {
    id: "durga-puja",
    title: "Durga Puja",
    type: "Festival",
    state: "west-bengal",
    religion: "Hinduism",
    season: "Autumn",
    month: 10,
    description: "Ten-day celebration of Goddess Durga's triumph over evil",
    significance: "Celebrates the victory of Goddess Durga over the demon Mahishasura",
    longDescription: "Durga Puja is West Bengal's grandest festival, celebrating the mother goddess Durga's victory over the buffalo demon Mahishasura. The ten-day celebration transforms Kolkata into an open-air art gallery, with thousands of themed pandals (temporary structures) housing elaborate Durga idols. Each community competes to create the most innovative installations, often reflecting social themes or artistic visions. The festival incorporates music, dance, theatrical performances, and community feasts. On the final day (Vijaya Dashami), the idols are immersed in water bodies in an emotional procession. Beyond religious significance, Durga Puja represents Bengali cultural identity and creative expression.",
  },
  {
    id: "golden-temple",
    title: "Golden Temple",
    type: "Temple",
    state: "punjab",
    religion: "Sikhism",
    description: "Holiest gurdwara and important pilgrimage site for Sikhs",
    significance: "Houses the Guru Granth Sahib and embodies Sikh principles",
    longDescription: "The Harmandir Sahib (Golden Temple) in Amritsar is the holiest shrine in Sikhism. The temple's distinctive features include its gleaming gold-plated upper portions, which give it its popular name. Built at a level lower than the surrounding land, the temple symbolizes humility and equality—core Sikh values. It has four entrances, representing openness to all people regardless of caste, creed, or religion. The complex includes the Akal Takht (throne of the timeless one) and the world's largest free community kitchen (langar), which serves up to 100,000 visitors daily. The sacred Amrit Sarovar (pool of nectar) surrounds the main shrine, where devotees bathe in its healing waters.",
  },
  {
    id: "navratri",
    title: "Navratri",
    type: "Festival",
    state: "gujarat",
    religion: "Hinduism",
    season: "Autumn",
    month: 10,
    description: "Nine nights of dance and worship dedicated to the goddess Durga",
    significance: "Honors the divine feminine through nine nights of celebration",
    longDescription: "Navratri (nine nights) is a festival honoring the divine feminine in the form of Goddess Durga and her nine manifestations. While celebrated across India, Gujarat's Navratri is particularly famous for its vibrant Garba and Dandiya Raas dance celebrations. Participants dress in colorful traditional attire and dance in concentric circles around a central lamp or image of the goddess. Each of the nine nights is associated with a different form of the goddess, a specific color, and unique rituals. In other regions, the festival includes creating ceremonial displays of dolls (Golu), fasting, and special prayer ceremonies. Navratri culminates in Dussehra, celebrating the triumph of good over evil.",
  },
  {
    id: "kumbh-mela",
    title: "Kumbh Mela",
    type: "Festival",
    state: "uttar-pradesh",
    religion: "Hinduism",
    season: "Winter",
    month: 1,
    description: "World's largest religious gathering held every 12 years",
    significance: "Sacred pilgrimage where devotees bathe in holy rivers",
    longDescription: "Kumbh Mela is the world's largest religious gathering, occurring in rotation at four riverbank pilgrimage sites: Prayagraj (Allahabad), Haridwar, Ujjain, and Nashik. The most auspicious, Maha Kumbh Mela, happens once every 12 years at Prayagraj, where the Ganges, Yamuna, and mythical Saraswati rivers converge. During this time, tens of millions of pilgrims gather to bathe in the sacred waters, believed to cleanse sins and break the cycle of rebirth. The festival features elaborate processions of akharas (religious ascetic groups), with sadhus (holy men) of various sects—including the ash-covered Naga sadhus—proceeding to the riverbank for ritual bathing. The gathering represents a living continuation of ancient traditions dating back thousands of years.",
  },
  {
    id: "ganga-aarti",
    title: "Ganga Aarti",
    type: "Ritual",
    state: "uttar-pradesh",
    religion: "Hinduism",
    description: "Elaborate fire ceremony performed daily on the banks of the Ganges",
    significance: "Ritual offering to the sacred Ganges river",
    longDescription: "Ganga Aarti is a powerful devotional ritual performed every evening on the banks of the River Ganges in cities like Varanasi, Haridwar, and Rishikesh. Priests perform the ceremony using large, multi-tiered lamps while chanting hymns and mantras in praise of Mother Ganga. The synchronized movements of the lamps create a mesmerizing spectacle as the flames illuminate the darkness. The ritual honors the Ganges as a goddess who purifies and brings spiritual enlightenment. Devotees float small leaf boats carrying flowers and a lamp (diyas) down the river as offerings. The ceremony attracts both pilgrims and travelers, who gather to witness this ancient tradition that has continued unbroken for centuries.",
  },
  {
    id: "ellora-caves",
    title: "Ellora Caves",
    type: "Temple",
    state: "maharashtra",
    religion: "Hinduism",
    description: "Ancient rock-cut temples showcasing religious harmony",
    significance: "UNESCO World Heritage Site featuring Hindu, Buddhist, and Jain temples",
    longDescription: "The Ellora Caves represent an unparalleled artistic achievement, featuring 34 rock-cut temples and monasteries created between the 6th and 10th centuries. What makes this UNESCO World Heritage Site remarkable is the presence of Hindu, Buddhist, and Jain temples side by side, symbolizing religious harmony. The crowning jewel is the Kailasa Temple (Cave 16), dedicated to Lord Shiva, which is the world's largest monolithic structure. Carved from a single rock, it represents Mount Kailash and features intricate sculptures depicting various deities and mythological scenes. The caves demonstrate not only religious devotion but also the technical mastery of ancient Indian architects who carved these structures from top to bottom, removing an estimated 200,000 tons of rock.",
  },
];

export const festivals: Festival[] = [
  {
    id: "diwali",
    title: "Diwali",
    type: "Festival",
    state: "pan-india",
    religion: "Hinduism",
    season: "Autumn",
    month: 10,
    date: "October-November (dates vary by lunar calendar)",
    description: "Festival of lights celebrating the victory of light over darkness",
    significance: "Celebrates Lord Rama's return to Ayodhya after defeating Ravana",
    longDescription: "Diwali, the festival of lights, is one of India's most significant celebrations. Homes are decorated with oil lamps (diyas), candles, and colorful rangoli patterns. Families exchange gifts, share sweets, and light fireworks. The festival symbolizes the spiritual victory of light over darkness and good over evil. While primarily a Hindu festival celebrating Lord Rama's return from exile, it's observed across India by people of different faiths, each with regional variations in customs and traditions.",
    celebrationPeriod: "5 days",
    rituals: ["Lighting diyas (oil lamps)", "Creating rangoli designs", "Lakshmi puja", "Family gatherings", "Fireworks display"]
  },
  {
    id: "holi",
    title: "Holi",
    type: "Festival",
    state: "uttar-pradesh",
    religion: "Hinduism",
    season: "Spring",
    month: 3,
    date: "March (full moon day in Phalguna month)",
    description: "Festival of colors celebrating the arrival of spring",
    significance: "Celebrates the triumph of good over evil and the arrival of spring",
    longDescription: "Holi is a vibrant festival marking the arrival of spring. It begins with Holika Dahan, where bonfires symbolize the victory of good over evil. The following day features the iconic color play, where people drench each other with colored powders and water. In Mathura and Vrindavan, Holi celebrations are particularly elaborate, connected to Lord Krishna's playful antics. Traditional delicacies like gujiya (sweet dumplings) and thandai (a spiced milk drink) are enjoyed during festivities. Beyond its religious significance, Holi represents community harmony as people of all backgrounds participate in the celebrations.",
    celebrationPeriod: "2 days",
    rituals: ["Holika Dahan (bonfire ritual)", "Playing with colors", "Community gatherings", "Traditional food and drinks"]
  },
  {
    id: "durga-puja",
    title: "Durga Puja",
    type: "Festival",
    state: "west-bengal",
    religion: "Hinduism",
    season: "Autumn",
    month: 10,
    date: "September-October (during Navratri)",
    description: "Ten-day celebration of Goddess Durga's triumph over evil",
    significance: "Celebrates the victory of Goddess Durga over the demon Mahishasura",
    longDescription: "Durga Puja is West Bengal's grandest festival, celebrating the mother goddess Durga's victory over the buffalo demon Mahishasura. The ten-day celebration transforms Kolkata into an open-air art gallery, with thousands of themed pandals (temporary structures) housing elaborate Durga idols. Each community competes to create the most innovative installations, often reflecting social themes or artistic visions. The festival incorporates music, dance, theatrical performances, and community feasts. On the final day (Vijaya Dashami), the idols are immersed in water bodies in an emotional procession. Beyond religious significance, Durga Puja represents Bengali cultural identity and creative expression.",
    celebrationPeriod: "10 days",
    rituals: ["Pandal hopping", "Pushpanjali (flower offering)", "Dhunuchi dance", "Sindoor Khela", "Idol immersion"]
  },
  {
    id: "navratri",
    title: "Navratri",
    type: "Festival",
    state: "gujarat",
    religion: "Hinduism",
    season: "Autumn",
    month: 10,
    date: "September-October (dates vary by lunar calendar)",
    description: "Nine nights of dance and worship dedicated to the goddess Durga",
    significance: "Honors the divine feminine through nine nights of celebration",
    longDescription: "Navratri (nine nights) is a festival honoring the divine feminine in the form of Goddess Durga and her nine manifestations. While celebrated across India, Gujarat's Navratri is particularly famous for its vibrant Garba and Dandiya Raas dance celebrations. Participants dress in colorful traditional attire and dance in concentric circles around a central lamp or image of the goddess. Each of the nine nights is associated with a different form of the goddess, a specific color, and unique rituals. In other regions, the festival includes creating ceremonial displays of dolls (Golu), fasting, and special prayer ceremonies. Navratri culminates in Dussehra, celebrating the triumph of good over evil.",
    celebrationPeriod: "9 nights",
    rituals: ["Garba dance", "Dandiya Raas", "Fasting", "Golu (doll display in South India)", "Daily prayers to different forms of goddess"]
  },
  {
    id: "kumbh-mela",
    title: "Kumbh Mela",
    type: "Festival",
    state: "uttar-pradesh",
    religion: "Hinduism",
    season: "Winter",
    month: 1,
    date: "Dates determined by astronomical configurations (every 12 years at each location)",
    description: "World's largest religious gathering held every 12 years",
    significance: "Sacred pilgrimage where devotees bathe in holy rivers",
    longDescription: "Kumbh Mela is the world's largest religious gathering, occurring in rotation at four riverbank pilgrimage sites: Prayagraj (Allahabad), Haridwar, Ujjain, and Nashik. The most auspicious, Maha Kumbh Mela, happens once every 12 years at Prayagraj, where the Ganges, Yamuna, and mythical Saraswati rivers converge. During this time, tens of millions of pilgrims gather to bathe in the sacred waters, believed to cleanse sins and break the cycle of rebirth. The festival features elaborate processions of akharas (religious ascetic groups), with sadhus (holy men) of various sects—including the ash-covered Naga sadhus—proceeding to the riverbank for ritual bathing. The gathering represents a living continuation of ancient traditions dating back thousands of years.",
    celebrationPeriod: "Approximately 2 months",
    rituals: ["Shahi Snan (royal bath)", "Akhara processions", "Spiritual discourses", "Religious ceremonies", "Sacred bathing"]
  },
  {
    id: "onam",
    title: "Onam",
    type: "Festival",
    state: "kerala",
    religion: "Hinduism",
    season: "Monsoon",
    month: 9,
    date: "August-September (according to Malayalam calendar)",
    description: "Harvest festival celebrating King Mahabali's annual return",
    significance: "Kerala's most important festival with cultural performances and feasts",
    longDescription: "Onam is Kerala's grand harvest festival, celebrating the mythical King Mahabali's annual return to his kingdom. According to legend, King Mahabali was a benevolent ruler who was sent to the netherworld by Lord Vishnu (in his Vamana avatar), but was granted permission to visit his kingdom once a year. The 10-day celebration features elaborate flower carpets (pookalam), traditional performances including the tiger dance (Pulikali), boat races (Vallam Kali), and martial arts displays (Kalaripayattu). The grand Onam Sadya (feast) served on banana leaves features over 20 vegetarian dishes. While having Hindu origins, Onam transcends religious boundaries in Kerala, celebrated by people of all faiths as a cultural festival representing abundance and equality.",
    celebrationPeriod: "10 days",
    rituals: ["Creating flower carpets (pookalam)", "Boat races (Vallam Kali)", "Tiger dance (Pulikali)", "Onam Sadya (grand feast)", "Traditional games"]
  },
  {
    id: "ganesh-chaturthi",
    title: "Ganesh Chaturthi",
    type: "Festival",
    state: "maharashtra",
    religion: "Hinduism",
    season: "Monsoon",
    month: 9,
    date: "August-September (fourth day of waxing moon period in Bhadrapada month)",
    description: "Festival honoring the elephant-headed god Ganesha",
    significance: "Celebration of Lord Ganesha as the remover of obstacles",
    longDescription: "Ganesh Chaturthi is a vibrant 10-day festival honoring Lord Ganesha, the elephant-headed deity who removes obstacles and brings prosperity. The celebration begins with the installation of clay Ganesha idols in homes and public pandals (temporary stages). Daily rituals include morning and evening aartis (prayer ceremonies), offerings of modak (sweet dumplings), and chanting of mantras. In Maharashtra, especially Mumbai, the festival has evolved into a grand community celebration since its revival by freedom fighter Lokmanya Tilak in 1893. On the final day (Anant Chaturdashi), the idols are carried in elaborate processions to be immersed in water bodies, symbolizing Ganesha's return to Mount Kailash. The immersion ritual is accompanied by dancing, music, and the chant 'Ganpati Bappa Morya, Purchya Varshi Laukarya' (Lord Ganesha, return again next year).",
    celebrationPeriod: "10 days",
    rituals: ["Installation of Ganesha idols", "Daily aarti and offerings", "Cultural performances", "Procession for immersion"]
  },
  {
    id: "pongal",
    title: "Pongal",
    type: "Festival",
    state: "tamil-nadu",
    religion: "Hinduism",
    season: "Winter",
    month: 1,
    date: "January 14-17 (harvest season)",
    description: "Tamil harvest festival celebrating the sun god and cattle",
    significance: "Thanksgiving celebration for a bountiful harvest",
    longDescription: "Pongal is Tamil Nadu's four-day harvest festival expressing gratitude to the Sun God for agricultural abundance. The festival's name comes from the ritual of boiling freshly harvested rice with milk and jaggery until it 'overflows' (pongal). The first day, Bhogi Pongal, involves discarding old possessions and cleaning homes. The second day, Surya Pongal, is dedicated to the Sun God, with families cooking the special pongal dish in new earthen pots decorated with turmeric, sugarcane, and flowers. The third day, Mattu Pongal, honors cattle by washing, decorating, and feeding them special meals. The final day, Kaanum Pongal, is for family gatherings and outings. Traditional activities include kolam (floor designs), cooking with new harvests, folk dances, and bull-taming events like Jallikattu.",
    celebrationPeriod: "4 days",
    rituals: ["Cooking pongal dish", "Decorating cattle", "Creating kolam designs", "Offering thanks to the sun", "Jallikattu (bull-taming sport)"]
  }
];

export const temples: Temple[] = [
  {
    id: "meenakshi-temple",
    title: "Meenakshi Temple",
    type: "Temple",
    state: "tamil-nadu",
    religion: "Hinduism",
    description: "Ancient temple dedicated to Goddess Meenakshi with stunning architecture",
    significance: "One of India's most important and ancient Hindu temples",
    longDescription: "The Meenakshi Amman Temple in Madurai is a marvel of Dravidian architecture, renowned for its towering gopurams (gateway towers) covered with thousands of colorful sculptures. Dedicated to Goddess Meenakshi, an avatar of Parvati, and her consort Lord Shiva, the temple complex spans 14 acres. The temple features 14 magnificently decorated gateway towers, the tallest rising to 170 feet. Inside, the complex contains numerous pillared halls, shrines, and the sacred Golden Lotus Tank. The temple hosts the grand Meenakshi Tirukalyanam (celestial wedding) festival annually, attracting thousands of devotees.",
    architecture: "Dravidian",
    deity: "Goddess Meenakshi and Lord Shiva",
    yearBuilt: "1600s (current structure, original temple dates back to 6th century BCE)"
  },
  {
    id: "golden-temple",
    title: "Golden Temple",
    type: "Temple",
    state: "punjab",
    religion: "Sikhism",
    description: "Holiest gurdwara and important pilgrimage site for Sikhs",
    significance: "Houses the Guru Granth Sahib and embodies Sikh principles",
    longDescription: "The Harmandir Sahib (Golden Temple) in Amritsar is the holiest shrine in Sikhism. The temple's distinctive features include its gleaming gold-plated upper portions, which give it its popular name. Built at a level lower than the surrounding land, the temple symbolizes humility and equality—core Sikh values. It has four entrances, representing openness to all people regardless of caste, creed, or religion. The complex includes the Akal Takht (throne of the timeless one) and the world's largest free community kitchen (langar), which serves up to 100,000 visitors daily. The sacred Amrit Sarovar (pool of nectar) surrounds the main shrine, where devotees bathe in its healing waters.",
    architecture: "Blend of Hindu and Islamic",
    deity: "Houses the Guru Granth Sahib (holy text)",
    yearBuilt: "1604 (initial construction)"
  },
  {
    id: "ellora-caves",
    title: "Ellora Caves",
    type: "Temple",
    state: "maharashtra",
    religion: "Hinduism",
    description: "Ancient rock-cut temples showcasing religious harmony",
    significance: "UNESCO World Heritage Site featuring Hindu, Buddhist, and Jain temples",
    longDescription: "The Ellora Caves represent an unparalleled artistic achievement, featuring 34 rock-cut temples and monasteries created between the 6th and 10th centuries. What makes this UNESCO World Heritage Site remarkable is the presence of Hindu, Buddhist, and Jain temples side by side, symbolizing religious harmony. The crowning jewel is the Kailasa Temple (Cave 16), dedicated to Lord Shiva, which is the world's largest monolithic structure. Carved from a single rock, it represents Mount Kailash and features intricate sculptures depicting various deities and mythological scenes. The caves demonstrate not only religious devotion but also the technical mastery of ancient Indian architects who carved these structures from top to bottom, removing an estimated 200,000 tons of rock.",
    architecture: "Rock-cut architecture",
    deity: "Multiple deities (Hindu, Buddhist, Jain)",
    yearBuilt: "6th to 10th century CE"
  },
  {
    id: "konark-sun-temple",
    title: "Konark Sun Temple",
    type: "Temple",
    state: "odisha",
    religion: "Hinduism",
    description: "Ancient temple designed as a giant chariot with intricate carvings",
    significance: "UNESCO World Heritage Site dedicated to the Sun God Surya",
    longDescription: "The Konark Sun Temple is a 13th-century marvel conceived as a gigantic chariot of the Sun God Surya, complete with twelve pairs of elaborately carved wheels and seven horses. This UNESCO World Heritage Site represents the pinnacle of Kalinga architecture, featuring stunning stone carvings that cover every available surface. The temple's wheels function as sundials, accurately telling the time through their shadows. The structure is oriented precisely to receive the first rays of the sun striking the principal entrance. While much of the main temple structure has collapsed over time, the remaining portions still display the extraordinary craftsmanship of Odisha's ancient artisans, with thousands of carvings depicting mythology, celestial beings, daily life, and intricate geometric patterns.",
    architecture: "Kalinga",
    deity: "Sun God (Surya)",
    yearBuilt: "13th century (1250 CE)"
  },
  {
    id: "brihadeeswara-temple",
    title: "Brihadeeswara Temple",
    type: "Temple",
    state: "tamil-nadu",
    religion: "Hinduism",
    description: "Magnificent Chola temple with a 216-foot vimana (tower)",
    significance: "UNESCO World Heritage Site dedicated to Lord Shiva",
    longDescription: "The Brihadeeswara Temple in Thanjavur is a masterpiece of Chola architecture and one of the 'Great Living Chola Temples' recognized by UNESCO. Built by Raja Raja Chola I in the 11th century, the temple is dedicated to Lord Shiva. Its most remarkable feature is the 216-foot vimana (tower), crowned by a massive stone carved from a single granite block weighing an estimated 80 tons. The mystery of how this massive capstone was transported to the top remains unsolved. The temple complex is built entirely of granite, with an estimated 130,000 tons of granite used in its construction—remarkable considering the nearest granite sources were over 50 miles away. The sanctum contains one of India's largest Shiva lingams, and the interior walls feature exquisite frescoes from the Chola era. The temple's architecture demonstrates advanced engineering knowledge, with its perfectly balanced proportions and intricate mathematical precision.",
    architecture: "Dravidian (Chola)",
    deity: "Lord Shiva",
    yearBuilt: "11th century (1010 CE)"
  },
  {
    id: "somnath-temple",
    title: "Somnath Temple",
    type: "Temple",
    state: "gujarat",
    religion: "Hinduism",
    description: "Historic temple rebuilt multiple times after repeated destruction",
    significance: "One of the twelve Jyotirlingas (sacred shrines of Lord Shiva)",
    longDescription: "The Somnath Temple stands as a symbol of resilience and faith, having been destroyed and reconstructed multiple times throughout history. Located on the western coast of Gujarat, this temple dedicated to Lord Shiva is believed to have been initially built with gold by the Moon God (Soma), rebuilt with silver by Ravana, then with wood by Krishna, and finally with stone by the Solanki kings. The temple was looted and destroyed repeatedly by invaders, most notably by Mahmud of Ghazni in 1026 CE. The current structure, completed in 1951 after India's independence, represents the nation's cultural renaissance. The temple's architecture follows the Chalukya style with intricate carvings. Its location at the shore of the Arabian Sea adds to its mystical atmosphere, especially during sunrise and sunset. The temple complex includes a museum, an Arati pavilion, and the Prabhas Patan Museum nearby, which houses artifacts from the old temple structures.",
    architecture: "Chalukya",
    deity: "Lord Shiva (as Jyotirlinga)",
    yearBuilt: "1951 (current structure, original dates to ancient times)"
  }
];

export const rituals: Ritual[] = [
  {
    id: "kathakali",
    title: "Kathakali",
    type: "Ritual",
    state: "kerala",
    religion: "Hinduism",
    description: "Classical dance form with elaborate makeup and costumes",
    significance: "Ancient storytelling tradition through dance and expressions",
    longDescription: "Kathakali is Kerala's classical dance-drama characterized by elaborate costumes, ornate makeup, and codified hand gestures (mudras). Performances typically depict stories from Hindu epics like the Ramayana and Mahabharata. The preparation for a Kathakali performance is ritualistic—makeup application alone can take hours, with performers using natural pigments to create stylized faces. The art form combines elements of dance, drama, music, and literature, requiring years of rigorous training. Traditionally performed in temple courtyards through the night, Kathakali is preserved as a cultural heritage that communicates ancient wisdom through visual storytelling.",
    occasion: "Temple festivals and cultural events",
    participants: "Trained performers who undergo years of rigorous training"
  },
  {
    id: "ganga-aarti",
    title: "Ganga Aarti",
    type: "Ritual",
    state: "uttar-pradesh",
    religion: "Hinduism",
    description: "Elaborate fire ceremony performed daily on the banks of the Ganges",
    significance: "Ritual offering to the sacred Ganges river",
    longDescription: "Ganga Aarti is a powerful devotional ritual performed every evening on the banks of the River Ganges in cities like Varanasi, Haridwar, and Rishikesh. Priests perform the ceremony using large, multi-tiered lamps while chanting hymns and mantras in praise of Mother Ganga. The synchronized movements of the lamps create a mesmerizing spectacle as the flames illuminate the darkness. The ritual honors the Ganges as a goddess who purifies and brings spiritual enlightenment. Devotees float small leaf boats carrying flowers and a lamp (diyas) down the river as offerings. The ceremony attracts both pilgrims and travelers, who gather to witness this ancient tradition that has continued unbroken for centuries.",
    occasion: "Daily evening ritual",
    participants: "Priests and devotees"
  },
  {
    id: "theyyam",
    title: "Theyyam",
    type: "Ritual",
    state: "kerala",
    religion: "Hinduism",
    description: "Ritual dance where performers embody deities",
    significance: "Ancient form of worship where performers become divine vessels",
    longDescription: "Theyyam is a ritualistic art form of North Kerala where performers are believed to embody deities during the ceremony, becoming living gods to be revered by devotees. The performers undergo elaborate makeup and costume preparations, with vibrant colors, intricate headgear, and face painting transforming them into divine beings. Unlike other classical arts, Theyyam traditionally involves performers from indigenous communities. The ritual involves intense dancing, often with fire, to rhythmic drumming and singing of ritual songs that narrate the deity's stories. More than 400 forms of Theyyam exist, each with specific rituals, costumes, and stories. The ceremonies typically take place in small shrines called kavu, often dedicated to ancestral spirits, serpent gods, or fierce forms of the divine feminine. During the performance, devotees consult the embodied deity for blessings, healing, and prophecies.",
    occasion: "Temple festivals in North Kerala (October to May)",
    participants: "Trained performers from traditional communities"
  },
  {
    id: "chhath-puja",
    title: "Chhath Puja",
    type: "Ritual",
    state: "bih
