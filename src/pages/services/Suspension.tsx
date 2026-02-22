import ServicePageLayout from '../../components/ServicePageLayout';

export default function Suspension() {
  return (
    <ServicePageLayout
      title="Suspension Repair"
      subtitle="Smooth & Safe Rides"
      description="A worn suspension affects ride comfort, tire wear, and vehicle safety. Trust Arena Auto Repair for expert suspension diagnostics and repair."
      image="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&h=1080&fit=crop"
      features={[
        'Shock absorber replacement',
        'Strut replacement and assembly',
        'Ball joint replacement',
        'Tie rod end replacement',
        'Control arm bushings and replacement',
        'Sway bar links and bushings',
        'Coil spring replacement',
        'Wheel bearing replacement',
        'CV joint and axle service',
        'Steering rack repair',
        'Power steering service',
      ]}
      benefits={[
        'Proper suspension repair restores ride comfort and handling',
        'Prevents uneven and premature tire wear — saving money on tires',
        'Improves vehicle safety — especially stopping distance and cornering',
        'Quality parts that meet or exceed OEM specifications',
        'Alignment included with most suspension repairs',
        'Experience with trucks, SUVs, and lowered/lifted vehicles',
        'Warranty on all suspension work',
      ]}
      process={[
        { step: 1, title: 'Road Test', description: 'We drive your vehicle to experience the handling issue firsthand — noises, vibrations, pulling, or bouncing.' },
        { step: 2, title: 'Visual Inspection', description: 'Thorough inspection of all suspension components on the lift — checking for wear, damage, leaks, and play.' },
        { step: 3, title: 'Repair & Replace', description: 'Replace worn components using quality parts. We often recommend replacing parts in pairs for even performance.' },
        { step: 4, title: 'Alignment & Test', description: 'Perform a four-wheel alignment (if needed) and road test to verify smooth, safe handling.' },
      ]}
      faq={[
        { question: 'How do I know if my suspension needs repair?', answer: 'Common signs include a bumpy ride, nose-diving when braking, the car pulling to one side, uneven tire wear, clunking or squeaking noises over bumps, and the car sitting lower on one side.' },
        { question: 'How long do shocks and struts last?', answer: 'Most shocks and struts last 50,000-100,000 miles depending on driving conditions and road quality. If yours have over 75,000 miles, they\'re likely due for inspection.' },
        { question: 'Do I need to replace shocks in pairs?', answer: 'Yes, we strongly recommend replacing shocks and struts in pairs (both fronts or both rears) for even handling and wear. Mixing old and new on the same axle can cause handling imbalance.' },
        { question: 'Will my car need an alignment after suspension work?', answer: 'In most cases, yes. Any suspension repair that changes the geometry of the steering or wheel angles requires a four-wheel alignment. We include this with most suspension repairs.' },
      ]}
    />
  );
}