import ServicePageLayout from '../../components/ServicePageLayout';

export default function PrePurchaseInspection() {
  return (
    <ServicePageLayout
      title="Pre-Purchase Inspection"
      subtitle="Buy with Confidence"
      description="Buying a used car? Don't gamble with your money. Our comprehensive pre-purchase inspection reveals hidden problems before you sign the dotted line."
      image="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1920&h=1080&fit=crop"
      features={[
        'Full engine and transmission evaluation',
        'Brake system inspection and measurement',
        'Suspension and steering assessment',
        'Electrical system testing',
        'A/C and heating system test',
        'Fluid condition analysis',
        'Body and frame inspection for accident damage',
        'Tire tread and condition check',
        'OBD-II scan for stored codes',
        'Test drive evaluation',
        'Detailed written report with photos',
        'Estimated repair cost summary',
      ]}
      benefits={[
        'Could save you thousands by avoiding a bad purchase',
        'Unbiased, third-party assessment — we have no skin in the sale',
        'Detailed written report you can use in price negotiations',
        'Covers mechanical, electrical, and cosmetic condition',
        'Quick turnaround — report ready within hours',
        'Identifies both immediate concerns and future maintenance needs',
        'Peace of mind knowing exactly what you\'re buying',
      ]}
      process={[
        { step: 1, title: 'Bring the Car In', description: 'You or the seller bring the vehicle to our shop. We can also come to you within our service area.' },
        { step: 2, title: 'Full Inspection', description: 'Our technician performs a comprehensive 150+ point inspection covering every major system and component.' },
        { step: 3, title: 'Road Test', description: 'We drive the vehicle under various conditions to evaluate engine performance, transmission shifting, brakes, and handling.' },
        { step: 4, title: 'Detailed Report', description: 'You receive a comprehensive report with findings, photos, condition ratings, and estimated repair costs for any issues found.' },
      ]}
      faq={[
        { question: 'How much does a pre-purchase inspection cost?', answer: 'Our standard pre-purchase inspection is $129-189 depending on the vehicle type. It\'s a small investment that could save you thousands by uncovering hidden problems. Think of it as insurance for your purchase.' },
        { question: 'How long does the inspection take?', answer: 'A thorough pre-purchase inspection typically takes 1-2 hours. We\'ll provide you with the report shortly after completion, usually the same day.' },
        { question: 'Can the seller bring the car to your shop?', answer: 'Absolutely. Either you or the seller can bring the vehicle in. We can also discuss options for inspecting the car at another location within our service area.' },
        { question: 'What if the inspection reveals problems?', answer: 'We provide you with a detailed list of issues and estimated repair costs. You can use this information to negotiate a lower price, ask the seller to fix issues before purchase, or walk away from a bad deal. The choice is yours.' },
      ]}
    />
  );
}