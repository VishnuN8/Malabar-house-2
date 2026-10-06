export type Dish = {
  name: string;
  malayalam?: string;
  description: string;
  components: string[];
  price: string;
  course: string;
  image: string;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  dishes: Dish[];
};

export const signatureDishes: Dish[] = [
  {
    name: 'Karimeen Pollichathu',
    malayalam: 'കരിമീൻ പൊള്ളത്ത്',
    description:
      'Pearl spot fish marinated in a paste of turmeric, black pepper, and kokum, then wrapped in banana leaf and charred over open flame. The leaf infuses the flesh with an earthy smoke while the marinade forms a lacquered crust, locking in the coconut-milk tenderness beneath.',
    components: [
      'Pearl spot (karimeen) line-caught from the Vembanad backwaters',
      'Banana leaf charred for aromatic smoke',
      'Kokum for a bright, tangy balance against the heat',
      'Coconut milk braise for silken texture',
    ],
    price: '₹1,450',
    course: 'Signature Seafood',
    image: 'https://images.pexels.com/photos/32451679/pexels-photo-32451679.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Chef’s Selection', 'Fire-Roasted'],
  },
  {
    name: 'Malabar Mutton Ishtu',
    malayalam: 'മലബാർ മട്ടൻ ഇഷ്ട്',
    description:
      'A coastal stew from the spice-trade route: slow-cooked mutton in coconut milk with green cardamom, fennel, and a whisper of cinnamon. The meat falls from the bone into a velvet, ivory gravy — gentler than a curry, deeper than a broth.',
    components: [
      'Mutton from grass-fed highland herds, braised six hours',
      'First-press coconut milk for a rich, sweet body',
      'Whole green cardamom and fennel, dry-roasted and ground',
      'Cinnamon bark from the Western Ghats',
    ],
    price: '₹1,180',
    course: 'Signature Meat',
    image: 'https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Slow-Cooked', 'Coconut'],
  },
  {
    name: 'Thalassery Meen Moilee',
    malayalam: 'മീൻ മോളി',
    description:
      'A golden fish curry from the Malabar coast — turmeric-stained coconut milk, fragrant with curry leaves and ginger, with a gentle heat from green chillies. Light enough to begin a feast, complex enough to be remembered.',
    components: [
      'Kingfish steaks cured in turmeric and sea salt',
      'Coconut milk reduced to a silken sauce',
      'Fresh curry leaves tempered in coconut oil',
      'Green chillies for warmth without bitterness',
    ],
    price: '₹1,250',
    course: 'Signature Seafood',
    image: 'https://images.pexels.com/photos/37485643/pexels-photo-37485643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Coastal Classic'],
  },
  {
    name: 'Kerala Sadhya',
    malayalam: 'സദ്യ',
    description:
      'The ceremonial vegetarian feast of Kerala, served on a fresh banana leaf. Twenty-two preparations — from avial to payasam — arranged by tradition, each bite a study in the six rasas of Ayurvedic balance: sweet, sour, salty, pungent, bitter, and astringent.',
    components: [
      'Twenty-two seasonal vegetable preparations',
      'Red matta rice from the Palakkad plains',
      'Avial, thoran, olan, and kootu curries',
      'Three payasams to close the meal',
    ],
    price: '₹980',
    course: 'Vegetarian Feast',
    image: 'https://images.pexels.com/photos/37152225/pexels-photo-37152225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Plant-Based', 'Ceremonial'],
  },
];

export const menu: MenuCategory[] = [
  {
    id: 'starters',
    title: 'From the Backwaters',
    subtitle: 'Small plates & appetisers',
    dishes: [
      {
        name: 'Chemmeen Varattiyathu',
        malayalam: 'ചെമ്മീൻ വറത്തത്',
        description:
          'Tiger prawns dry-roasted with kudampuli (Malabar tamarind), curry leaves, and crushed black pepper until each one wears a glossy, mahogany glaze. The tamarind cuts the richness of the shellfish while the pepper lingers on the palate.',
        components: ['Tiger prawns', 'Kudampuli (Malabar tamarind)', 'Curry leaves', 'Coarsely ground black pepper'],
        price: '₹780',
        course: 'Starters',
        image: 'https://images.pexels.com/photos/16561737/pexels-photo-16561737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: 'Kozhi Porichathu',
        malayalam: 'കോഴി പൊരിച്ചത്',
        description:
          'Free-range chicken marinated overnight in yoghurt, ginger-garlic, and a house garam masala of twelve spices, then fried to a burnished amber. Crisp skin, succulent interior, with a whisper of fennel in every bite.',
        components: ['Free-range chicken', 'Hung curd marinade', 'House garam masala', 'Fennel & star anise'],
        price: '₹620',
        course: 'Starters',
        image: 'https://images.pexels.com/photos/35532821/pexels-photo-35532821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: 'Banana Blossom Thoran',
        malayalam: 'കാട്ടുപൂവ് തോരൻ',
        description:
          'Shredded banana blossom stir-fried with grated coconut, turmeric, and cumin — a study in texture and restraint. Earthy and faintly bitter, balanced by the sweetness of fresh coconut and a mustard-seed tempering.',
        components: ['Banana blossom', 'Fresh grated coconut', 'Turmeric & cumin', 'Mustard seed tempering'],
        price: '₹480',
        course: 'Starters',
        image: 'https://images.pexels.com/photos/20422129/pexels-photo-20422129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  {
    id: 'mains',
    title: 'The Main Course',
    subtitle: 'Curries, stews & rice',
    dishes: [
      {
        name: 'Nadan Kozhi Curry',
        malayalam: 'നാടൻ കോഴി കറി',
        description:
          'A rustic village-style chicken curry simmered in roasted coconut paste, kodampuli, and a medley of whole spices. Deep, smoky, and unapologetically spiced — the kind of curry that demands red matta rice to soak up every spoonful.',
        components: ['Free-range chicken on the bone', 'Roasted coconut paste', 'Kodampuli', 'Whole spices — clove, cinnamon, cardamom'],
        price: '₹890',
        course: 'Mains',
        image: 'https://images.pexels.com/photos/37142278/pexels-photo-37142278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: 'Erachi Ularthiyathu',
        malayalam: 'എറച്ചി ഉളർത്തിയത്',
        description:
          'Beef dry-fried with coconut slivers, curry leaves, and black pepper until the meat is dark, caramelised, and almost candied in its intensity. A Syrian-Christian specialty of Central Travancore, best eaten with parotta.',
        components: ['Slow-braised beef', 'Toasted coconut slivers', 'Cracked black pepper', 'Curry leaves & shallots'],
        price: '₹940',
        course: 'Mains',
        image: 'https://images.pexels.com/photos/20408434/pexels-photo-20408434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: 'Vegetable Stew with Appam',
        malayalam: 'വെജിറ്റബിൾ സ്റ്റൂ',
        description:
          'A delicate stew of potato, carrot, and beans in thin coconut milk perfumed with whole spices and a final pour of thick coconut milk. Served with lacy, bowl-shaped appam — crisp at the edges, pillowy at the centre.',
        components: ['Seasonal vegetables', 'First & second press coconut milk', 'Whole spices', 'Fermented appam'],
        price: '₹680',
        course: 'Mains',
        image: 'https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  {
    id: 'sides',
    title: 'Accompaniments',
    subtitle: 'Rice, breads & chutneys',
    dishes: [
      {
        name: 'Malabar Parotta',
        malayalam: 'പറോട്ട',
        description:
          'A flaky, layered flatbread made by repeatedly stretching and folding a soft wheat dough. Each layer shatters into translucent leaves, the ideal vehicle for any gravy. Cooked on a cast-iron griddle with a whisper of ghee.',
        components: ['Refined wheat dough', 'Ghee', 'Hand-layered'],
        price: '₹120',
        course: 'Sides',
        image: 'https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: 'Red Matta Rice',
        malayalam: 'മട്ട അരി',
        description:
          'Unpolished, reddish-brown parboiled rice from the Palakkad plains — nutty, chewy, and rich in fibre. The grain that anchors every Kerala meal, grown in the laterite soil that gives it its distinctive mineral edge.',
        components: ['Palakkad matta rice', 'Stone-ground', 'Single-origin'],
        price: '₹180',
        course: 'Sides',
        image: 'https://images.pexels.com/photos/38816975/pexels-photo-38816975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: 'Coconut & Green Chilli Chutney',
        malayalam: 'തേങ്ങാ ചട്നി',
        description:
          'Freshly ground coconut tempered with mustard seeds, curry leaves, and whole red chillies in smoking coconut oil. A cooling, creamy counterpoint to the heat of the meal — the soul of a Kerala breakfast table.',
        components: ['Fresh coconut', 'Green chillies', 'Mustard & curry leaf tempering', 'Coconut oil'],
        price: '₹90',
        course: 'Sides',
        image: 'https://images.pexels.com/photos/20422126/pexels-photo-20422126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  {
    id: 'desserts',
    title: 'To Close',
    subtitle: 'Sweets & payasam',
    dishes: [
      {
        name: 'Ada Pradhaman',
        malayalam: 'അട പ്രഥമൻ',
        description:
          'The king of Kerala payasams — rice ada (flat rice flakes) simmered in jaggery and coconut milk until the mixture turns a deep, glossy amber. Garnished with fried coconut slivers, cashews, and raisins tempered in ghee. A festival in a bowl.',
        components: ['Rice ada', 'Dark jaggery from Alappuzha', 'Thick coconut milk', 'Ghee-fried cashews & raisins'],
        price: '₹320',
        course: 'Desserts',
        image: 'https://images.pexels.com/photos/29838572/pexels-photo-29838572.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        name: 'Palada Payasam',
        malayalam: 'പാലട പായസം',
        description:
          'A slow-cooked temple dessert of rice ada simmered in milk and sugar for hours until it turns pale rose and impossibly silky. Each spoonful carries the patience of the cook and the fragrance of cardamom.',
        components: ['Rice ada', 'Full-cream milk', 'Sugar', 'Cardamom'],
        price: '₹280',
        course: 'Desserts',
        image: 'https://images.pexels.com/photos/35482850/pexels-photo-35482850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
];
