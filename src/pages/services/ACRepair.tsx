import ServicePageLayout from '../../components/ServicePageLayout';

export default function ACRepair() {
  return (
    <ServicePageLayout
      title="A/C Repair"
      subtitle="Stay Cool in San Diego"
      description="San Diego's sunshine is great, but not when your A/C is broken. We provide complete A/C diagnostics, repair, and recharge services to keep you comfortable year-round."
      image="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&h=1080&fit=crop"
      features={[
        'A/C system performance test',
        'Refrigerant recharge (R-134a & R-1234yf)',
        'A/C compressor repair and replacement',
        'Condenser and evaporator service',
        'A/C hose and line repair',
        'Expansion valve and orifice tube replacement',
        'Blower motor repair',
        'Cabin air filter replacement',
        'A/C leak detection (UV dye)',
        'Climate control diagnostics',
      ]}
      benefits={[
        'Complete A/C diagnostics — we find the real problem, not just add refrigerant',
        'We handle both R-134a and newer R-1234yf systems',
        'UV dye leak detection finds even the smallest leaks',
        'Beat the San Diego heat — same-day A/C service when possible',
        'Proper evacuation and recharge to manufacturer specs',
        'Warranty on all A/C repairs',
        'Affordable pricing on compressor replacements',
      ]}
      process={[
        { step: 1, title: 'Performance Test', description: 'We test vent temperature, system pressures, and airflow to determine if your A/C is performing correctly.' },
        { step: 2, title: 'Leak Detection', description: 'Using UV dye and electronic detectors, we locate any refrigerant leaks in the system.' },
        { step: 3, title: 'Repair & Recharge', description: 'Fix the identified issue — whether it\'s a leak, bad compressor, or electrical problem — then recharge the system.' },
        { step: 4, title: 'Final Test', description: 'Verify vent temperature reaches proper cold levels and all controls function correctly before you drive away.' },
      ]}
      faq={[
        { question: 'Why is my A/C blowing warm air?', answer: 'Common causes include low refrigerant (usually due to a leak), a failed compressor, a bad condenser fan, electrical issues, or a clogged expansion valve. A proper diagnosis is needed to determine the exact cause.' },
        { question: 'How much does an A/C recharge cost?', answer: 'A basic recharge starts around $100-150. However, if your system is low on refrigerant, there\'s likely a leak that needs to be repaired first. Simply adding refrigerant without fixing the leak is a temporary fix at best.' },
        { question: 'How often does my A/C need service?', answer: 'Unlike oil changes, A/C systems don\'t need regular service if they\'re working properly. However, if you notice reduced cooling, strange smells, or unusual noises, it\'s time to get it checked.' },
        { question: 'Can you convert my A/C to the newer refrigerant?', answer: 'Yes, we can convert older R-12 systems to R-134a. We can also service newer vehicles that use R-1234yf refrigerant. We\'ll recommend the best option for your vehicle.' },
      ]}
    />
  );
}