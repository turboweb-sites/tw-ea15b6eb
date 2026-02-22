import ServicePageLayout from '../../components/ServicePageLayout';

export default function Electrical() {
  return (
    <ServicePageLayout
      title="Electrical System"
      subtitle="Power & Reliability"
      description="Modern vehicles rely on complex electrical systems. From dead batteries to wiring issues, Arena Auto Repair has the expertise to diagnose and fix any electrical problem."
      image="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&h=1080&fit=crop"
      features={[
        'Battery testing and replacement',
        'Alternator diagnostics and replacement',
        'Starter motor repair and replacement',
        'Wiring harness repair',
        'Fuse diagnosis and replacement',
        'Lighting system repair (headlights, taillights)',
        'Power window and lock repair',
        'Electrical short detection',
        'Parasitic draw testing',
        'Charging system diagnosis',
        'Horn, wiper, and accessory repair',
      ]}
      benefits={[
        'Advanced electrical diagnostic tools and wiring diagrams',
        'Experience with complex modern vehicle electrical systems',
        'Parasitic draw testing finds mysterious battery drain issues',
        'Quality replacement parts with warranty',
        'Proper wire repair — no hack jobs or temporary fixes',
        'Same-day battery and alternator replacement',
        'We diagnose before we replace — saving you money',
      ]}
      process={[
        { step: 1, title: 'Electrical Testing', description: 'We use multimeters, oscilloscopes, and scan tools to test voltage, amperage, and signal integrity.' },
        { step: 2, title: 'Circuit Tracing', description: 'Using wiring diagrams, we trace circuits to find shorts, opens, and high-resistance connections.' },
        { step: 3, title: 'Precision Repair', description: 'We repair the specific component or circuit — whether it\'s a battery, alternator, starter, or wiring issue.' },
        { step: 4, title: 'System Verification', description: 'Full electrical system test to confirm the repair and ensure no related issues exist.' },
      ]}
      faq={[
        { question: 'My battery keeps dying — is it the battery or alternator?', answer: 'It could be either, or even a parasitic draw (something draining the battery when the car is off). We perform a comprehensive test of the battery, alternator, and electrical system to determine the exact cause.' },
        { question: 'How long does a car battery last?', answer: 'The average car battery lasts 3-5 years in moderate climates. Heat can shorten battery life. If your battery is 3+ years old, it\'s worth having it tested proactively.' },
        { question: 'My car won\'t start — is it the starter?', answer: 'A no-start condition can be caused by the battery, starter, alternator, ignition switch, fuel system, or other issues. We perform a systematic diagnosis to identify the real culprit.' },
        { question: 'Can you fix aftermarket accessory wiring?', answer: 'Yes, we repair and install aftermarket lighting, audio systems, backup cameras, and other accessories. We do professional installations with proper wiring techniques — no shortcuts.' },
      ]}
    />
  );
}