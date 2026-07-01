// ═══════════════════════════════════════════
// MIL PALMERAS GUIDE — Base de données des lieux
// 
// Pour AJOUTER un lieu : copiez un bloc { ... } ci-dessous
// et modifiez les valeurs. Placez-le dans le bon "region"
// et respectez l'ordre alphabétique ou logique si possible.
//
// Champs :
//  region   : r1 (Vega Baja) | r2 (Elche & Alicante) | r3 (El Campello)
//             r4 (Costa Nord) | r5 (Murcie) | r6 (Carthagène)
//  catg     : nom de la sous-catégorie affichée (texte libre)
//  name     : nom du lieu
//  desc     : description courte (affichée sur la carte)
//  dist     : distance + durée depuis Mil Palmeras (ex: "45 km · 38 min")
//             laisser vide '' si "walk" est true
//  type     : plage | nature | culture | restaurant | insolite
//  walk     : true si à pied depuis la maison, sinon false
//  tested   : true si testé & approuvé, sinon false
//  avoid    : true si à éviter, sinon false (rare)
//  photos   : liste de liens photos (optionnel, vide pour le moment)
// ═══════════════════════════════════════════

const REGIONS = [
  { id: 'r1', color: '#B85C2A', title: 'Autour de Mil Palmeras & Vega Baja', time: '0 – 30 min' },
  { id: 'r2', color: '#7D8C6A', title: 'Elche & Alicante', time: '45 min – 1h' },
  { id: 'r3', color: '#C4922A', title: 'El Campello & Santa Pola', time: '30 – 45 min' },
  { id: 'r4', color: '#4A8C8C', title: 'Costa Blanca Nord', time: '1h – 2h' },
  { id: 'r5', color: '#8B3A1E', title: 'Murcie & Nature Profonde', time: '45 min – 2h' },
  { id: 'r6', color: '#5A4A8C', title: 'Carthagène (Cartagena)', time: '35 min – 1h20' },
];

const PLACES = [
  {
    region: 'r1', catg: 'À pied de la maison',
    name: 'Restaurante Olympia Piscina',
    desc: 'Piscine (4,5€), bar pas cher, brasserie au bord de l\'eau, billards',
    dist: '', type: 'restaurant',
    walk: true, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'À pied de la maison',
    name: 'Restaurant Madrid',
    desc: 'Plats copieux, recettes originales, légumes chauds — rarissimes dans la région',
    dist: '', type: 'restaurant',
    walk: true, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'À pied de la maison',
    name: 'Restaurant Palmera Beach',
    desc: 'Excellent Menu del Día, très économique, en face du Madrid',
    dist: '', type: 'restaurant',
    walk: true, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'À pied de la maison',
    name: 'Restaurante Chino Asia Garden',
    desc: 'Super rapport qualité-prix, excellent accueil, assiette de fruits offerte',
    dist: '', type: 'restaurant',
    walk: true, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'À pied de la maison',
    name: 'Restaurant The Chef',
    desc: 'Mexicain (burritos) & indien (poulet garam masala)',
    dist: '', type: 'restaurant',
    walk: true, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'À pied de la maison',
    name: 'Restaurant Brotherhood',
    desc: 'Sur la place — burritos, tacos et chili con carne épicé',
    dist: '', type: 'restaurant',
    walk: true, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'À pied de la maison',
    name: 'Chiringuito Sunshine',
    desc: 'Bar de plage incontournable : tapas et sangria maison',
    descLong: 'Bar de plage incontournable : tapas variées (croquetas, bicyclettas — spécialité locale à base de salade russe), pan con tomate, paellas généreuses et sangria maison. Prix raisonnables et concerts réguliers en terrasse — une vraie ambiance de vacances !',
    dist: '', type: 'restaurant',
    walk: true, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'À pied de la maison',
    name: 'Chiringuito Triton',
    desc: 'Bar de plage proposant tapas et poissons frais du jour. Un classique de bord de mer à explorer.',
    dist: '', type: 'restaurant',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'À pied de la maison',
    name: 'Restaurant El Pescadito',
    desc: 'Soirées Flamenco — coup de cœur ! Éviter les pizzas',
    dist: '', type: 'restaurant',
    walk: true, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'À pied de la maison',
    name: 'Restaurant Los Celtas',
    desc: 'Pas cher mais qualité très limitée',
    dist: '', type: 'restaurant',
    walk: true, tested: false, avoid: true,
    photos: []
  },
  {
    region: 'r1', catg: 'Plages & Criques',
    name: 'Plages de Pilar de la Horadada',
    desc: 'Playa del Conde, Higuericas, Jesuitas, Rocamar — baignade quotidienne',
    dist: '3 km · 5 min', type: 'plage',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'Plages & Criques',
    name: 'Criques d\'Orihuela Costa',
    desc: 'Aguamarina & Punta Prima — criques aux eaux transparentes bordées de falaises et sentiers aménagés en bord de mer.',
    dist: '10 km · 15 min', type: 'plage',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'Plages & Criques',
    name: 'Cabo Roig (Orihuela Costa)',
    desc: 'Crique encaissée entre falaises dorées, eaux cristallines et sentiers en bord de mer. La tour de guet du XVI° siècle est un symbole de la Costa Blanca. Idéal pour le snorkeling.',
    dist: '10 km · 15 min', type: 'plage',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'Plages & Criques',
    name: 'Musée de la Huerta (Rojales)',
    desc: 'Domaine agricole traditionnel — vie rurale & irrigation',
    dist: '28 km · 30 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'Plages & Criques',
    name: 'Aqua-park Ciudad Quesada',
    desc: 'Parc aquatique familial, parfait pour les journées toboggans',
    dist: '28 km · 30 min', type: 'insolite',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r2', catg: 'Ville & Culture',
    name: 'Château Santa Barbara (Alicante)',
    desc: 'Forteresse médiévale surplombant la mer, vue panoramique incontournable',
    dist: '60 km · 50 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r2', catg: 'Ville & Culture',
    name: 'Barrio Santa Cruz (Alicante)',
    desc: 'Quartier tout blanc, escaliers fleuris, sous le château',
    dist: '60 km · 55 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r2', catg: 'Ville & Culture',
    name: 'Palmeraie d\'Elche (UNESCO)',
    desc: 'La plus grande palmeraie d\'Europe — un océan de palmiers',
    dist: '48 km · 45 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r2', catg: 'Ville & Culture',
    name: 'Sanctuaire de Novelda',
    desc: 'Église aux formes organiques inspirée de Gaudí',
    dist: '75 km · 55 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r2', catg: 'Nature & Parcs',
    name: 'Parc El Palmeral (Alicante)',
    desc: 'Cascades, lacs et barques au milieu des palmiers',
    dist: '38 km · 40 min', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r2', catg: 'Nature & Parcs',
    name: 'Cabo de la Huerta — Sentier des criques',
    desc: '8 km le long des falaises d\'Alicante (Cala Cantalar, Cala Palmera)',
    dist: '65 km · 1h', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r2', catg: 'Nature & Parcs',
    name: 'Clots de la Sal (Novelda)',
    desc: 'Baignade dans des mares d\'eau salée — décor de terre rouge',
    dist: '75 km · 1h', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r2', catg: 'Adresses Insolites',
    name: 'Beton Brut (Alicante)',
    desc: 'Bar/terrasse ultra-moderne sur le port, coucher de soleil chic',
    dist: '60 km · 50 min', type: 'restaurant',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r2', catg: 'Adresses Insolites',
    name: 'Voltereta Tanzania',
    desc: 'Dîner dans une tente safari au milieu d\'une jungle reconstituée',
    dist: '62 km · 55 min', type: 'restaurant',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r2', catg: 'Adresses Insolites',
    name: 'Circuit de trains (Torrellano)',
    desc: 'Musée du chemin de fer — petits trains à vapeur sur lesquels on monte',
    dist: '55 km · 45 min', type: 'insolite',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r2', catg: 'Adresses Insolites',
    name: 'Autocine El Sur (Mutxamel)',
    desc: 'Cinéma drive-in très vintage — film depuis sa voiture',
    dist: '68 km · 55 min', type: 'insolite',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r3', catg: 'Visites & Panoramas',
    name: 'Faro de Santa Pola',
    desc: 'Phare avec passerelle en verre suspendue — vue sur l\'île de Tabarca',
    dist: '48 km · 45 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r3', catg: 'Visites & Panoramas',
    name: 'Baños de la Reina (El Campello)',
    desc: 'Ancienne ferme piscicole romaine creusée dans la roche',
    dist: '68 km · 55 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r3', catg: 'Détente & Curiosités',
    name: 'Carmen del Campillo (Crevillente)',
    desc: 'Téterie mauresque secrète — labyrinthe de lanternes et de thé',
    dist: '45 km · 40 min', type: 'insolite',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r3', catg: 'Détente & Curiosités',
    name: 'Parc Adolfo Suarez (San Vicente)',
    desc: 'Grand parc urbain avec lac et oies',
    dist: '65 km · 50 min', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Villages Carte Postale',
    name: 'Villajoyosa (La Vila)',
    desc: 'Les maisons les plus colorées d\'Espagne & célèbre chocolaterie',
    dist: '92 km · 1h05', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Villages Carte Postale',
    name: 'Guadalest (El Castel)',
    desc: 'Village médiéval perché — accès par un tunnel dans la roche',
    dist: '135 km · 1h35', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Villages Carte Postale',
    name: 'Altea',
    desc: 'Vieux village tout blanc perché, ruelles pavées fleuries, dôme bleu de l\'église Nuestra Señora del Consuelo. L\'un des plus beaux villages de la Costa Blanca.',
    dist: '115 km · 1h20', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Restaurants de Plage',
    name: 'El Cranc (Playa de l\'Olla, Altea)',
    desc: 'Restaurant les pieds presque dans l\'eau, réputé pour ses paellas et arroces. Cadre superbe, prix plus élevés — réservation conseillée.',
    dist: '115 km · 1h20', type: 'restaurant',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Restaurants de Plage',
    name: 'El Sigarro (Playa de l\'Olla, Altea)',
    desc: 'Chiringuito familial juste à côté d\'El Cranc — paellas cuites au feu de bois, ambiance décontractée, parfait avec des enfants.',
    dist: '115 km · 1h20', type: 'restaurant',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Calp — Peñón de Ifach & Salinas',
    desc: 'Rocher de 332m à escalader & marais salants',
    dist: '125 km · 1h25', type: 'plage',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Cala Granadella (Javea)',
    desc: 'Crique turquoise — souvent élue plus belle plage d\'Espagne',
    dist: '155 km · 2h', type: 'plage',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Benissa — Paseo Ecologico',
    desc: 'Sentier suspendu au-dessus de la mer — criques Fustera & Advocat',
    dist: '145 km · 1h50', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Cala del Moraig (Benitachell)',
    desc: 'Grotte marine aux eaux bleu électrique',
    dist: '145 km · 1h50', type: 'plage',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Cueva de las Calaveras (Benidoleig)',
    desc: 'La \'Grotte des Crânes\' — stalactites et lac souterrain Toll Blau',
    descLong: 'La \'Grotte des Crânes\' doit son nom à la découverte en 1768 de 12 squelettes dans ses profondeurs. Refuge de l\'homme du Paléolithique il y a 100 000 ans, cette cavité aux plafonds atteignant 50m abrite stalactites, stalagmites et le magnifique lac Toll Blau en bout de parcours. 400m visitables, idéal en famille. Entrée ~5€. À combiner avec le Jardin de l\'Albarda tout proche.',
    dist: '130 km · 1h30', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Jardin de l\'Albarda (Pedreguer)',
    desc: 'Jardin méditerranéen de référence, 700 espèces, paons en liberté',
    descLong: 'Niché entre Dénia et Javea au pied du Montgó, ce jardin de référence mondiale regroupe plus de 700 espèces méditerranéennes sur 50 000 m². Créé en 1990, il recrée l\'esprit des jardins renaissants valenciaux à influence arabe : pergolas, fontaines, bassins aux nénuphars, paons en liberté. Concerts en soirée l\'été (Atardeceres Musicales). Entrée 7-9€, ouvert toute l\'année.',
    dist: '145 km · 1h40', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Santuario de Santa María Magdalena (Novelda)',
    desc: 'Sanctuaire moderniste inspiré de Gaudí, vue sur la vallée du Vinalopó',
    descLong: 'Perché sur la colline de La Mola, ce sanctuaire moderniste conçu par José Sala Sala (inspiré de Gaudí) est l\'un des trésors architecturaux les plus surprenants de la province. Deux tours de 25m, façades de pierres et tuiles polychromes, intérieur en forme de jarre. Vue époustouflante sur la vallée du Vinalopó. Un orgue entièrement en marbre est en cours de création. Accès libre.',
    dist: '75 km · 55 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'Musées & Loisirs',
    name: 'Catedral del Salvador (Orihuela)',
    desc: 'Cathédrale gothique du XIII° siècle, musée diocésano avec un Velázquez',
    descLong: 'Bâtie au XIII° siècle sur l\'emplacement d\'une ancienne mosquée, la Catedral del Salvador est un chef-d\'oeuvre gothique catalan rehaussé d\'influences mudéjares. Ses portails Renaissance et ses chapelles ornées en font l\'une des cathédrales les plus remarquables de la région. Le musée diocésano abrite un tableau de Velázquez rarissime. Entrée 2€.',
    dist: '28 km · 28 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'Nature & Curiosités',
    name: 'Cuevas del Rodeo & Rodearte (Rojales)',
    desc: 'Maisons troglodytes occupées par des artistes, galeries d\'art',
    descLong: 'Creusées entre le XVIII° et XX° siècle, ces maisons troglodytes blanchies à la chaux sont aujourd\'hui occupées par des artistes et artisans. Galeries d\'art, ateliers de céramique, marché artisanal le 1er dimanche du mois. La cave n°6 sert d\'office de tourisme, la n°4 accueille des expositions permanentes. Un lieu hors du temps au bord du Segura.',
    dist: '28 km · 30 min', type: 'insolite',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'El Cau — Musée de sculptures (Elche)',
    desc: 'Musée en plein air, 100+ sculptures dans les montagnes, accès libre',
    descLong: 'Caché dans les montagnes près d’Elche, ce musée en plein air totalement insolite regroupe plus de 100 sculptures en pierre peintes et taillées par l’artiste local Mariano Ros entre 2000 et 2008. Les oeuvres représentent les monuments et symboles de la région — la Palmeraíe, la Dama de Elche, la Basílica... Vue panoramique sur les montagnes et Elche. Accès libre toute l’année, prévoir de l’eau. Souvent désert : juste le chant des oiseaux et la brise des montagnes.',
    dist: '55 km · 50 min', type: 'insolite',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Cañón de Almadenes (Cieza)',
    desc: 'L’un des 10 plus beaux canyons de la péninsule ibérique. Parois de 70-120m, passerelles dans la roche, source chaude du Gorgoton, grottes UNESCO. Descente en canoë ou via ferrata possible.',
    dist: '95 km · 1h10', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Cap de Sant Antoni (Javea)',
    desc: 'Cap spectaculaire aux falaises de 175m classé réserve naturelle. Phare historique (1855), sentiers balisés entre mer et Montgó, panorama saisissant sur la baie de Javea jusquà Dénia.',
    dist: '160 km · 1h55', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'La Falzia — Mirador (Javea)',
    desc: 'L’un des belvédères les plus élevés de Javea — panorama à 360° du Cap de Sant Antoni au Cap Negre. La côte entière de Javea et le Montgó à vos pieds.',
    dist: '158 km · 1h55', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Cap de la Nau (Javea)',
    desc: 'Point le plus à l’est d’Alicante — le plus proche d’Ibiza ! Falaises vertigineuses, mer bleu intense et coucher de soleil inoubliable depuis ce promontoire sauvage protégé.',
    dist: '158 km · 2h', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Castell de la Granadella (Javea)',
    desc: 'Fortin du XVIII° siècle contre les pirates, classé Bien d’Intérêt Culturel. Accessible à pied depuis la Cala Granadella. Lieu secret avec vue spectaculaire sur la mer.',
    dist: '158 km · 1h55', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Paysages & Nature',
    name: 'Barrancos de Gebas (Librilla)',
    desc: 'Le &quot;Petit Canyon&quot; — terres blanches et eau turquoise',
    dist: '75 km · 1h', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Paysages & Nature',
    name: 'Mazarrón Bolnuevo — Les Érosions',
    desc: 'Rochers sculptés en champignons géants par le vent',
    dist: '85 km · 1h05', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Paysages & Nature',
    name: 'Sierra Espuña — Puits à neige & Roi Lion',
    desc: 'Anciens dômes en pierre & le rocher Piedra del Rey Leon',
    dist: '90 km · 1h15', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Paysages & Nature',
    name: 'Escalier de la Muela (Alhama de Murcia)',
    desc: 'Escalier de fer et pierre taillé à même la paroi verticale',
    dist: '72 km · 55 min', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Paysages & Nature',
    name: 'Abanilla — Escaliers Peints & Désert',
    desc: 'Fresque murale menant au Sacré-Cœur & désert de Mahoya',
    dist: '65 km · 55 min', type: 'insolite',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Oasis & Cascades',
    name: 'Bullas — Salto del Usero',
    desc: 'Cascade & piscine naturelle aux eaux émeraudes',
    dist: '105 km · 1h10', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Oasis & Cascades',
    name: 'Aledo — Estrecho de la Arboleja',
    desc: 'Canyon calcaire étroit et frais, mousses et fougères',
    dist: '95 km · 1h10', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Oasis & Cascades',
    name: 'Cieza — Source du Gorgotón',
    desc: 'Jacuzzi naturel caché dans le fleuve Segura',
    dist: '95 km · 1h05', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Oasis & Cascades',
    name: 'Moratalla — Estrecho de Bolvonegro',
    desc: 'Faille géologique avec cascades sur des roches &quot;nougat&quot;',
    dist: '135 km · 1h35', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Oasis & Cascades',
    name: 'Moratalla — Cuevas de Zaén',
    desc: 'Grottes en forme d\'yeux géants dans la falaise',
    dist: '145 km · 1h50', type: 'insolite',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Oasis & Cascades',
    name: 'Caravaca de la Cruz — Fuentes del Marqués',
    desc: 'Parc naturel classé — sources d\'eau cristalline',
    dist: '130 km · 1h25', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Restaurants',
    name: 'Restaurante El Borrego (Bullas)',
    desc: 'Après le Salto del Usero — viande grillée & vins AOC',
    dist: '105 km · 1h10', type: 'restaurant',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r5', catg: 'Restaurants',
    name: 'Restaurante El Sordo (Ricote)',
    desc: 'Institution — épaule d\'agneau & cuisine du terroir authentique',
    dist: '85 km · 1h05', type: 'restaurant',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Sites Historiques',
    name: 'Batterie de Castillitos (Cabo Tiñoso)',
    desc: 'Forteresse militaire avec canons géants surplombant la mer',
    dist: '78 km · 1h20', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Sites Historiques',
    name: 'Théâtre Romain de Carthagène',
    desc: 'Découvert par hasard en 1988, ce théâtre du Ier siècle av. J.-C. (7000 places) se visite via le Musée Rafael Moneo, Plaza del Ayuntamiento — un tunnel sous la Cathédrale Vieille y mène. Accès aussi possible en descendant la Calle de Osario depuis le mirador du Parque Torres. Ne pas confondre avec l\'Amphithéâtre (juste à côté, entrée différente).',
    dist: '45 km · 35 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Sites Historiques',
    name: 'Amphithéâtre Romain de Carthagène',
    desc: 'Caché depuis des siècles sous l\'ancienne Plaza de Toros, cet amphithéâtre elliptique (Ier siècle apr. J.-C., ~10 000 places) accueillait les combats de gladiateurs. Visites guidées gratuites le week-end (réservation en ligne, places limitées) — entrée Calle Doctor Fleming, près de l\'Ascenseur Panoramique. Site distinct du Théâtre Romain, situé sur la même colline.',
    dist: '46 km · 38 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Nature & Randonnées',
    name: 'Cala Cerrada (Carthagène)',
    desc: 'Crique en fer à cheval protégée des vents, eaux transparentes',
    dist: '75 km · 1h15', type: 'plage',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Nature & Randonnées',
    name: 'Rambla del Cañar (La Azohía)',
    desc: 'Canyon verdoyant facile et frais',
    dist: '82 km · 1h15', type: 'nature',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Restaurants & Bons Plans',
    name: 'La Tapería de Casa Gregorio',
    desc: 'Salazones (poissons séchés) & Caldero (riz au poisson)',
    dist: '45 km · 35 min', type: 'restaurant',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Restaurants & Bons Plans',
    name: 'Restaurant El Cantón',
    desc: 'Tapas délicieuses, excellent rapport qualité-prix (~50€ pour 4)',
    dist: '45 km · 38 min', type: 'restaurant',
    walk: false, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Restaurants & Bons Plans',
    name: 'Restaurant Albedrío',
    desc: '65€ pour 5 — super croquetas, tostas saumon·fromage·noix·aneth',
    dist: '45 km · 35 min', type: 'restaurant',
    walk: false, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Restaurants & Bons Plans',
    name: 'Bodega La Uva Jumillana',
    desc: 'Institution depuis 1919 — tapas sur mange-debout, mini prix',
    dist: '45 km · 35 min', type: 'restaurant',
    walk: false, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Restaurants & Bons Plans',
    name: 'Parking du Port (Paseo de Alfonso XII, 8)',
    desc: 'Accès direct Musée Marine, quai & centre piéton',
    dist: '', type: 'insolite',
    walk: false, tested: true, avoid: false,
    photos: []
  },
  {
    region: 'r4', catg: 'Criques & Plages',
    name: 'Cala del Portitxolet (Moraira)',
    desc: 'Petite crique rocheuse cachée près du port de Moraira, accessible par un escalier depuis le mirador. Eaux cristallines idéales pour le snorkeling, ambiance locale et tranquille.',
    dist: '130 km · 1h35', type: 'plage',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r1', catg: 'Marchés & Shopping',
    name: 'Grand Marché de Torrevieja (Parque Antonio Soria)',
    desc: 'Tous les vendredis (même fériés), 8h-14h. L\'un des plus grands mercadillos de la Costa Blanca — jusqu\'à 700 étals : fruits et légumes locaux, vêtements, chaussures. Parking gratuit sur place.',
    dist: '20 km · 20 min', type: 'insolite',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r3', catg: 'Visites & Panoramas',
    name: 'Île de Tabarca (en bateau depuis Santa Pola)',
    desc: 'Seule île habitée de la Communauté Valencienne, réserve marine aux eaux transparentes. Village fortifié du XVIIIe, ruelles blanches, plage et snorkeling. Bateaux fréquents depuis le port de Santa Pola (~25 min de traversée, billet flexible aller-retour).',
    dist: '48 km · 45 min (jusqu\'au port de Santa Pola)', type: 'insolite',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Sites Historiques',
    name: 'Castillo de San Julián',
    desc: 'Forteresse du XVIIIe siècle au sommet du Monte San Julián (293 m), intégrant une tour anglaise de 1706. Vue panoramique sur la baie d\'Escombreras et le port. Accès libre et gratuit, mais montée assez sportive (à pied ou en voiture).',
    dist: '48 km · 40 min', type: 'culture',
    walk: false, tested: false, avoid: false,
    photos: []
  },
  {
    region: 'r6', catg: 'Nature & Randonnées',
    name: 'Cala Cortina (Carthagène)',
    desc: 'Petite plage familiale nichée entre falaises, à quelques minutes du centre. Aire de jeux pour enfants, restaurant à pied de plage (Mares Bravas), snorkeling et plongée dans une eau limpide. Régulièrement classée parmi les plus belles plages d\'Espagne.',
    dist: '48 km · 38 min', type: 'plage',
    walk: false, tested: false, avoid: false,
    photos: []
  },
];