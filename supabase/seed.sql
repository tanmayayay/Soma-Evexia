-- SOMA EVEXIA — product seed (27 formulations, indicative INR pricing)
-- Run AFTER schema.sql.

insert into products (id, name, universe, tagline, description, price_inr, unit, badge, image_path) values
('hydro-elixir','Hydro-Regenerative Elixir','hydro','The daily reset, dissolved.','Nano-electrolyte mineral complex, Amla extract, Pro-Vitamin B5. Fast-dissolving daily hydration without the sugar crash.',1850,'30 sachets','Founding Trio','hydro.webp'),
('daily-reset','Daily Reset Electrolyte','hydro','Minerals, minus the noise.','Low-glycemic sugar-free electrolyte matrix — sodium, potassium, magnesium citrate with trace minerals and B-vitamins.',1450,'30 sachets',null,'universe-hydro.webp'),
('somnus-complex','Molecular Recovery Complex','somnus','Evening, engineered.','Bio-fermented Ashwagandha root for rapid nervous-system down-regulation. Calming without sedation.',2400,'30-night tonic','Founding Trio','somnus.webp'),
('magnesium-theanine','Magnesium Glycinate + L-Theanine','somnus','Downshift, on demand.','Calms a hyperactive stress baseline, improves sleep quality, prevents muscular stiffness.',1650,'60 capsules',null,'somnus.webp'),
('melatonin','Melatonin Micro-Dose','somnus','Sleep, without the dependency.','Precise micro-dose of a naturally occurring sleep inducer. Non-addictive, no dependency risk.',950,'30 sublingual tablets',null,'somnus.webp'),
('bacopa','Bacopa Monnieri','cortex','The scholar\u2019s botanical.','Standardized to 50% bacosides for focus, spatial memory and mental processing under stress.',1450,'60 capsules',null,'universe-cortex.webp'),
('brahmi','Brahmi Clarity Blend','cortex','Memory, clarified.','Traditional nootropic blend for memory and mental clarity — for those who think for a living.',1250,'60 capsules',null,'universe-cortex.webp'),
('theanine-focus','L-Theanine Focus Blend','cortex','Calm alertness, bottled.','Standalone focus formula with a smooth, jitter-free cognitive curve for demanding schedules.',1350,'30 sachets',null,'universe-cortex.webp'),
('b12-energy','B12 Daily Energy','cortex','Clean energy, daily.','B12 with complementary B-vitamins. Sublingual for rapid uptake; ideal for fatigue and plant-based diets.',850,'30 sublingual tablets',null,'universe-cortex.webp'),
('cellular-ampoule','Cellular Ampoule','cellular','Seven days. One system.','High-potency Centella Asiatica and adaptogen concentrate in a single-shot ampoule. The credibility hero.',3200,'7 ampoules','Founding Trio','cellular.webp'),
('coq10-carnitine','CoQ10 + L-Carnitine','cellular','Mitochondria, funded.','Microencapsulated CoQ10 with bio-fermented L-Carnitine for mitochondrial fatty-acid transport.',2100,'60 softgels',null,'cellular.webp'),
('astaxanthin','Astaxanthin Defense','cellular','Invisible daily armor.','Astaxanthin and antioxidant complexes for oxidative-stress defense, skin clarity and stress reduction.',1950,'30 capsules',null,'cellular.webp'),
('multi-men','Methylated Multivitamin · Men','vitality','The male baseline.','Methylated B-complex with iron, B12 and D3, formulated for men.',1150,'60 tablets',null,'hydro.webp'),
('multi-women','Methylated Multivitamin · Women','vitality','The female baseline.','Methylated B-complex with iron, B12 and D3, tuned to female micronutrient needs.',1150,'60 tablets',null,'hydro.webp'),
('omega3','Omega 3 · EPA/DHA','vitality','Clean oils, full potency.','Balanced EPA/DHA, non-oxidized and heavy-metal tested, for brain, heart and eye health.',1350,'60 softgels',null,'hydro.webp'),
('collagen','Collagen Peptides · Marine','vitality','Structure, from within.','Marine-sourced collagen peptides for skin, hair and joint support at clinical doses.',2200,'30 sachets',null,'hydro.webp'),
('probiotic','Pre/Pro/Post-biotic Complex','vitality','The gut, optimized.','L. plantarum-based micro-complex for gut absorption and microbiome balance. Delayed-release.',1750,'30 capsules',null,'hydro.webp'),
('ashwagandha','Ashwagandha Blend','vitality','The broad-spectrum adaptogen.','Broad-spectrum adaptogen for stress, hormonal and vitality support — the most versatile botanical in the house.',1250,'60 capsules',null,'somnus.webp'),
('shatavari','Shatavari Blend','vitality','Ayurveda for female vitality.','Ayurvedic herb for female hormonal and fertility support, rooted in classical formulation logic.',1350,'60 capsules',null,'somnus.webp'),
('testo','Testosterone Booster','vitality','Male vitality, clinical.','Ashwagandha root with Shilajit, magnesium and fertility-supporting compounds for male hormonal health.',1950,'60 capsules',null,'somnus.webp'),
('hormone-balance','Hormone Balance','vitality','Female hormonal harmony.','For PMS comfort, cycle regularity and hormonal equilibrium, built on Shatavari and complementary botanicals.',1650,'60 capsules',null,'somnus.webp'),
('pcos','PCOS / PCOD Support','vitality','Metabolic + hormonal balance.','Inositol, cinnamon and chromium blends for insulin sensitivity, cycle regularity and androgen balance.',1750,'60 capsules',null,'somnus.webp'),
('perimeno','Perimenopause Support','vitality','Grace, engineered.','Support through the menopausal transition — Shatavari, black-cohosh-type actives, calcium and vitamin D.',1850,'60 capsules',null,'somnus.webp'),
('soma-p1','SOMA P1 · Daily Performance','terra','The flagship. Sachet-only.','Creatine Monohydrate 3g + Taurine 1.5g + Magnesium + Oxystorm® Amaranthus extract. Daily-use, not pre-workout.',2800,'30 sachets','Flagship','universe-terra.webp'),
('whey','Whey Protein Isolate','terra','Clean label. Full spectrum.','Clean-label whey concentrate and isolate — no heavy metals, pure sourcing.',3400,'1 kg',null,'universe-terra.webp'),
('creatine','Micronised Creatine','terra','Strength, simplified.','Micronised creatine monohydrate at full clinical dose for performance and strength.',1450,'300 g',null,'universe-terra.webp'),
('travel-kit','Travel Ritual Kit','terra','Seven days, anywhere.','A 7-day multiverse in a linen pouch — Hydro, Somnus, Cortex and Cellular sachets for the travelling professional.',1950,'7-day kit',null,'universe-terra.webp')
on conflict (id) do update set
  name = excluded.name, universe = excluded.universe, tagline = excluded.tagline,
  description = excluded.description, price_inr = excluded.price_inr, unit = excluded.unit,
  badge = excluded.badge, image_path = excluded.image_path, active = true;
