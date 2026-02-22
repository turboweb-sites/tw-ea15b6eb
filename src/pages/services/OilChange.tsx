import ServicePageLayout from '../../components/ServicePageLayout';

export default function OilChange() {
  return (
    <ServicePageLayout
      title="Oil Change"
      subtitle="Routine Maintenance"
      description="Keep your engine running smoothly with our professional oil change service. We use top-quality synthetic and conventional oils for all makes and models."
      image="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1920&h=1080&fit=crop"
      features={[
        'Full synthetic, synthetic blend, and conventional oil options',
        'Premium oil filter replacement',
        'Multi-point vehicle inspection included',
        'Fluid level check and top-off',
        'Tire pressure check and adjustment',
        'Battery health check',
        'Air filter inspection',
        'Brake visual inspection',
        'Under-vehicle leak check',
      ]}
      benefits={[
        'Extends engine life by reducing wear and friction',
        'Improves fuel efficiency — clean oil reduces engine drag',
        'Prevents costly engine damage from old, contaminated oil',
        'We use OEM-spec oils recommended by your manufacturer',
        'Quick service — most oil changes completed in 30-45 minutes',
        'No appointment necessary for standard oil changes',
        'Competitive pricing with dealership-quality service',
      ]}
      process={[
        { step: 1, title: 'Drain Old Oil', description: 'We safely drain all contaminated oil from your engine using proper equipment and procedures.' },
        { step: 2, title: 'Replace Filter', description: 'Install a brand-new, premium oil filter to ensure maximum filtration and engine protection.' },
        { step: 3, title: 'Add Fresh Oil', description: 'Fill your engine with the correct type and weight of oil specified by your manufacturer.' },
        { step: 4, title: 'Full Inspection', description: 'Complete multi-point inspection of key systems — tires, brakes, fluids, belts, and more.' },
      ]}
      faq={[
        { question: 'How often should I change my oil?', answer: 'Most modern vehicles need an oil change every 5,000-7,500 miles or every 6 months, whichever comes first. If you use conventional oil, we recommend every 3,000-5,000 miles. Check your owner\'s manual for specific recommendations.' },
        { question: 'Synthetic vs. conventional — which should I use?', answer: 'Synthetic oil provides better protection, especially in extreme temperatures, and lasts longer between changes. Most newer vehicles are designed for synthetic oil. We\'ll recommend the best option for your vehicle and driving habits.' },
        { question: 'How long does an oil change take?', answer: 'A standard oil change takes about 30-45 minutes. If we discover any issues during our multi-point inspection, we\'ll let you know and discuss options before doing any additional work.' },
        { question: 'Do you offer oil changes for European vehicles?', answer: 'Absolutely! We service all makes and models including BMW, Mercedes, Audi, Volkswagen, and more. We use the correct European-spec oils and filters required by these manufacturers.' },
      ]}
    />
  );
}