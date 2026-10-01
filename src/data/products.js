import hydroImg from '../assets/hydro.webp'
import somnusImg from '../assets/somnus.webp'
import cellularImg from '../assets/cellular.webp'
import universeHydroImg from '../assets/universe-hydro.webp'
import universeCortexImg from '../assets/universe-cortex.webp'
import universeTerraImg from '../assets/universe-terra.webp'

export const UNIVERSES = [
  {
    id: 'hydro', name: 'Hydro', glyph: '💧', title: 'Hydration',
    tagline: 'Replace what modern life depletes.',
    description: 'Daily electrolyte and mineral systems built for a high-performance day. Fast-dissolving formats that hydrate without disrupting metabolic balance — the baseline every other ritual stands on.',
    image: universeHydroImg,
  },
  {
    id: 'somnus', name: 'Somnus', glyph: '🌙', title: 'Sleep & Recovery',
    tagline: 'Rebuild what the day wears down.',
    description: 'Evening formulas engineered for nervous-system down-regulation and sleep architecture. Calming without sedation — recovery you can feel by morning, ritual you can keep for years.',
    image: somnusImg,
  },
  {
    id: 'cortex', name: 'Cortex', glyph: '🧠', title: 'Focus & Cognition',
    tagline: 'Clarity without the crash.',
    description: 'Daytime formats for focus, memory and cognitive composure. Standardized botanical nootropics with smooth onset curves — built for deep work, not spikes.',
    image: universeCortexImg,
  },
  {
    id: 'cellular', name: 'Cellular', glyph: '🧬', title: 'Longevity',
    tagline: 'The credibility-anchoring core.',
    description: 'Cellular optimization and mitochondrial support — the results-driven heart of the multiverse. Concentrated formats, clinical doses, measurable outcomes.',
    image: cellularImg,
  },
  {
    id: 'vitality', name: 'Vitality', glyph: '🌿', title: 'Daily Foundation',
    tagline: 'The invisible baseline.',
    description: 'Everyday micronutrient foundations — beauty-from-within, metabolic balance, hormonal harmony and gut integrity. The quiet work that compounds.',
    image: universeCortexImg,
  },
  {
    id: 'terra', name: 'Terra', glyph: '✈', title: 'Travel & Motion',
    tagline: 'The ritual, everywhere.',
    description: 'Portable formats for a life in motion. Training, travel and long days — full-potency nutrition that fits in a carry-on and keeps the ritual unbroken.',
    image: universeTerraImg,
  },
]

export const PRODUCTS = [
  // ——— HYDRO ———
  {
    id: 'hydro-elixir', name: 'Hydro-Regenerative Elixir', universe: 'hydro',
    tagline: 'The daily reset, dissolved.',
    description: 'A fast-dissolving daily hydration and mineral formula anchored by a nano-electrolyte mineral complex, Indian Gooseberry (Amla) extract and Panthenol (Pro-Vitamin B5). Replenishes electrolytes without the sugar crash of a typical sports drink.',
    price: 1850, unit: '30 sachets', image: hydroImg, badge: 'Founding Trio',
  },
  {
    id: 'daily-reset', name: 'Daily Reset Electrolyte', universe: 'hydro',
    tagline: 'Minerals, minus the noise.',
    description: 'A low-glycemic, sugar-free electrolyte matrix — sodium, potassium and magnesium citrate infused with trace minerals and B-vitamins. Dissolves into a light, clean mineral shot built for daily use, not just post-workout.',
    price: 1450, unit: '30 sachets', image: universeHydroImg,
  },
  // ——— SOMNUS ———
  {
    id: 'somnus-complex', name: 'Molecular Recovery Complex', universe: 'somnus',
    tagline: 'Evening, engineered.',
    description: 'A structural recovery formula built on bio-fermented Ashwagandha root extract, engineered for rapid nervous-system down-regulation. Flash-absorbing in effect, calming without sedation — the product that makes the ritual feel liveable, night after night.',
    price: 2400, unit: '30-night tonic', image: somnusImg, badge: 'Founding Trio',
  },
  {
    id: 'magnesium-theanine', name: 'Magnesium Glycinate + L-Theanine', universe: 'somnus',
    tagline: 'Downshift, on demand.',
    description: 'Calms a hyperactive stress baseline, improves sleep quality and prevents muscular stiffness. The most universally useful evening pairing in the catalogue — for high-stress adults who run hot.',
    price: 1650, unit: '60 capsules', image: somnusImg,
  },
  {
    id: 'melatonin', name: 'Melatonin Micro-Dose', universe: 'somnus',
    tagline: 'Sleep, without the dependency.',
    description: 'A naturally occurring sleep inducer in a precise micro-dose, positioned as non-addictive with no dependency risk. For adults with disrupted sleep seeking a clean on-ramp to real rest.',
    price: 950, unit: '30 sublingual tablets', image: somnusImg,
  },
  // ——— CORTEX ———
  {
    id: 'bacopa', name: 'Bacopa Monnieri', universe: 'cortex',
    tagline: 'The scholar\u2019s botanical.',
    description: 'Standardized to 50% bacosides for focus, spatial memory and mental processing under high-stress conditions. The most studied nootropic in the Ayurvedic pharmacopoeia, delivered at clinical strength.',
    price: 1450, unit: '60 capsules', image: universeCortexImg,
  },
  {
    id: 'brahmi', name: 'Brahmi Clarity Blend', universe: 'cortex',
    tagline: 'Memory, clarified.',
    description: 'A traditional nootropic blend for memory and mental clarity from the same Ayurvedic family as Bacopa — formulated for students and professionals who think for a living.',
    price: 1250, unit: '60 capsules', image: universeCortexImg,
  },
  {
    id: 'theanine-focus', name: 'L-Theanine Focus Blend', universe: 'cortex',
    tagline: 'Calm alertness, bottled.',
    description: 'A standalone focus and brain-health formula distinct from the evening magnesium pairing. Smooth, jitter-free cognitive composure for demanding schedules.',
    price: 1350, unit: '30 sachets', image: universeCortexImg,
  },
  {
    id: 'b12-energy', name: 'B12 Daily Energy', universe: 'cortex',
    tagline: 'Clean energy, daily.',
    description: 'Daily energy-level support pairing B12 with complementary B-vitamins. Especially relevant for fatigue and plant-based diets — sublingual for rapid uptake.',
    price: 850, unit: '30 sublingual tablets', image: universeCortexImg,
  },
  // ——— CELLULAR ———
  {
    id: 'cellular-ampoule', name: 'Cellular Ampoule', universe: 'cellular',
    tagline: 'Seven days. One system.',
    description: 'A high-potency Centella Asiatica and adaptogen concentrate delivered as a single-shot ampoule — not a capsule, not a powder. The credibility hero: concentrated cellular support that makes people believe the multiverse has real teeth.',
    price: 3200, unit: '7 ampoules', image: cellularImg, badge: 'Founding Trio',
  },
  {
    id: 'coq10-carnitine', name: 'CoQ10 + L-Carnitine', universe: 'cellular',
    tagline: 'Mitochondria, funded.',
    description: 'Microencapsulated CoQ10 paired with bio-fermented L-Carnitine for mitochondrial fatty-acid transport. Clean, non-jittery energy with no caffeine crash — cellular fuel for professionals and active adults.',
    price: 2100, unit: '60 softgels', image: cellularImg,
  },
  {
    id: 'astaxanthin', name: 'Astaxanthin Defense', universe: 'cellular',
    tagline: 'Invisible daily armor.',
    description: 'Astaxanthin and antioxidant complexes for internal environmental and oxidative-stress defense. Zero routine disruption — a single daily capsule for skin clarity, collagen synthesis and stress reduction.',
    price: 1950, unit: '30 capsules', image: cellularImg,
  },
  // ——— VITALITY ———
  {
    id: 'multi-men', name: 'Methylated Multivitamin · Men', universe: 'vitality',
    tagline: 'The male baseline.',
    description: 'A segmented daily essential formulated for men — methylated B-complex including iron, B12 and D3 for full bioavailability. The foundation everything else builds on.',
    price: 1150, unit: '60 tablets', image: hydroImg,
  },
  {
    id: 'multi-women', name: 'Methylated Multivitamin · Women', universe: 'vitality',
    tagline: 'The female baseline.',
    description: 'A segmented daily essential formulated for women — methylated B-complex including iron, B12 and D3. Tuned to female micronutrient needs across the reproductive years.',
    price: 1150, unit: '60 tablets', image: hydroImg,
  },
  {
    id: 'omega3', name: 'Omega 3 · EPA/DHA', universe: 'vitality',
    tagline: 'Clean oils, full potency.',
    description: 'High-quality, cleanly sourced balanced EPA/DHA for brain, heart and eye health. Non-oxidized, heavy-metal tested — the everyday essential done properly.',
    price: 1350, unit: '60 softgels', image: hydroImg,
  },
  {
    id: 'collagen', name: 'Collagen Peptides · Marine', universe: 'vitality',
    tagline: 'Structure, from within.',
    description: 'Marine-sourced collagen peptides for skin, hair and joint support. Beauty-from-within translated to performance-from-within — structural nourishment at clinical doses.',
    price: 2200, unit: '30 sachets', image: hydroImg,
  },
  {
    id: 'probiotic', name: 'Pre/Pro/Post-biotic Complex', universe: 'vitality',
    tagline: 'The gut, optimized.',
    description: 'An L. plantarum-based micro-complex spanning pre, pro and post-biotics for gut absorption and microbiome balance. Delayed-release capsule for targeted delivery.',
    price: 1750, unit: '30 capsules', image: hydroImg,
  },
  {
    id: 'ashwagandha', name: 'Ashwagandha Blend', universe: 'vitality',
    tagline: 'The broad-spectrum adaptogen.',
    description: 'Broad-spectrum adaptogen for stress, hormonal and vitality support. Crosses over with Energy, Mental and Sleep categories — the single most versatile botanical in the house.',
    price: 1250, unit: '60 capsules', image: somnusImg,
  },
  {
    id: 'shatavari', name: 'Shatavari Blend', universe: 'vitality',
    tagline: 'Ayurveda for female vitality.',
    description: 'Ayurvedic herb targeted at female hormonal and fertility support — cycle comfort, reproductive wellness and graceful transitions, rooted in classical formulation logic.',
    price: 1350, unit: '60 capsules', image: somnusImg,
  },
  {
    id: 'testo', name: 'Testosterone Booster', universe: 'vitality',
    tagline: 'Male vitality, clinical.',
    description: 'Ashwagandha root with Shilajit, magnesium and fertility-supporting compounds for male hormonal health. Formulated for strength, drive and recovery.',
    price: 1950, unit: '60 capsules', image: somnusImg,
  },
  {
    id: 'hormone-balance', name: 'Hormone Balance', universe: 'vitality',
    tagline: 'Female hormonal harmony.',
    description: 'Formulated for female hormonal health across the cycle — PMS comfort, cycle regularity and hormonal equilibrium, built on Shatavari and complementary botanicals.',
    price: 1650, unit: '60 capsules', image: somnusImg,
  },
  {
    id: 'pcos', name: 'PCOS / PCOD Support', universe: 'vitality',
    tagline: 'Metabolic + hormonal balance.',
    description: 'Targeted support for PCOS/PCOD symptoms — insulin sensitivity, cycle regularity and androgen balance via inositol, cinnamon and chromium blends. For one of the most underserved segments in Indian wellness.',
    price: 1750, unit: '60 capsules', image: somnusImg,
  },
  {
    id: 'perimeno', name: 'Perimenopause Support', universe: 'vitality',
    tagline: 'Grace, engineered.',
    description: 'Support through the menopausal transition — hot flashes, mood shifts, bone and cardiovascular health — via Shatavari, black-cohosh-type actives, calcium and vitamin D.',
    price: 1850, unit: '60 capsules', image: somnusImg,
  },
  // ——— TERRA ———
  {
    id: 'soma-p1', name: 'SOMA P1 · Daily Performance', universe: 'terra',
    tagline: 'The flagship. Sachet-only.',
    description: 'A non-stimulant daily performance and recovery formula: Creatine Monohydrate 3g + Taurine 1.5g + Magnesium + Oxystorm® patented nitrate-enriched Amaranthus extract. Positioned as daily-use, not pre-workout. Deliberately sachet-exclusive.',
    price: 2800, unit: '30 sachets', image: universeTerraImg, badge: 'Flagship',
  },
  {
    id: 'whey', name: 'Whey Protein Isolate', universe: 'terra',
    tagline: 'Clean label. Full spectrum.',
    description: 'Clean-label whey concentrate and isolate with no heavy metals and pure sourcing. For young adults and fitness-focused individuals who read labels.',
    price: 3400, unit: '1 kg', image: universeTerraImg,
  },
  {
    id: 'creatine', name: 'Micronised Creatine', universe: 'terra',
    tagline: 'Strength, simplified.',
    description: 'Micronised creatine monohydrate for performance and strength support. The most studied sports-nutrition ingredient in existence, at full clinical dose.',
    price: 1450, unit: '300 g', image: universeTerraImg,
  },
  {
    id: 'travel-kit', name: 'Travel Ritual Kit', universe: 'terra',
    tagline: 'Seven days, anywhere.',
    description: 'A 7-day multiverse in a linen pouch — Hydro, Somnus, Cortex and Cellular sachets sequenced for the travelling professional. The ritual, unbroken by time zones.',
    price: 1950, unit: '7-day kit', image: universeTerraImg,
  },
]

export const RITUAL_STEPS = [
  { id: 'reset', title: 'Reset', note: 'Morning hydration baseline', universes: ['hydro'] },
  { id: 'recover', title: 'Recover', note: 'Evening down-regulation', universes: ['somnus'] },
  { id: 'optimize', title: 'Optimize', note: 'Cellular + cognitive edge', universes: ['cellular', 'cortex'] },
]

export const formatINR = (n) => '₹' + n.toLocaleString('en-IN')
export const getProduct = (id) => PRODUCTS.find((p) => p.id === id)
export const getUniverse = (id) => UNIVERSES.find((u) => u.id === id)
export const productsByUniverse = (uid) => PRODUCTS.filter((p) => p.universe === uid)
export const RITUAL_DISCOUNT = 0.10
