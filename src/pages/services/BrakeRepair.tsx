import ServicePageLayout from '../../components/ServicePageLayout';

export default function BrakeRepair() {
  return (
    <ServicePageLayout
      title="Brake Repair"
      subtitle="Safety First"
      description="Your brakes are your vehicle's most critical safety system. Trust Arena Auto Repair for expert brake diagnostics, repair, and replacement."
      image="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&h=1080&fit=crop"
      features={[
        'Brake pad replacement (ceramic & semi-metallic)',
        'Rotor resurfacing and replacement',
        'Brake caliper repair and replacement',
        'Brake fluid flush and replacement',
        'Brake line inspection and repair',
        'ABS system diagnostics and repair',
        'Emergency brake adjustment',
        'Brake noise diagnosis and correction',
        'Complete brake system inspection',
      ]}
      benefits={[
        'Your safety is our top priority — we never cut corners on brake work',
        'We use premium brake pads and rotors for maximum stopping power',
        'All brake repairs come with a parts and labor warranty',
        'Honest diagnosis — we\'ll show you the problem before we fix it',
        'Same-day brake service available for most vehicles',
        'Competitive pricing — often 30-50% less than dealerships',
        'We service all makes and models including trucks and SUVs',
      ]}
      process={[
        { step: 1, title: 'Brake Inspection', description: 'Thorough inspection of pads, rotors, calipers, lines, and fluid. We measure pad thickness and rotor condition.' },
        { step: 2, title: 'Honest Diagnosis', description: 'We show you exactly what needs to be repaired with photos and measurements. No surprises, no upsells.' },
        { step: 3, title: 'Expert Repair', description: 'Our ASE-certified technicians perform the repair using quality parts that meet or exceed OEM specifications.' },
        { step: 4, title: 'Road Test', description: 'Every brake job is followed by a road test to ensure proper operation, quiet performance, and your safety.' },
      ]}
      faq={[
        { question: 'How do I know if my brakes need repair?', answer: 'Common signs include squealing or grinding noises, vibration when braking, longer stopping distances, brake pedal feeling soft or spongy, and the brake warning light on your dashboard. If you notice any of these, get your brakes checked immediately.' },
        { question: 'How much does a brake job cost?', answer: 'Brake repair costs vary depending on your vehicle and what needs to be replaced. A basic pad replacement starts around $150-300 per axle, while a full brake job with rotors runs $300-600 per axle. We provide free estimates before any work begins.' },
        { question: 'How long do brake pads last?', answer: 'Brake pad life varies greatly depending on driving habits, vehicle type, and pad material. On average, brake pads last 25,000-65,000 miles. City driving with frequent stops wears pads faster than highway driving.' },
        { question: 'Can I drive with worn brake pads?', answer: 'Driving on worn brake pads is extremely dangerous and can damage your rotors, calipers, and brake lines — leading to much more expensive repairs. If your pads are worn, please get them replaced as soon as possible.' },
      ]}
    />
  );
}