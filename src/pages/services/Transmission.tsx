import ServicePageLayout from '../../components/ServicePageLayout';

export default function Transmission() {
  return (
    <ServicePageLayout
      title="Transmission Service"
      subtitle="Smooth Shifting"
      description="Whether it's an automatic or manual, your transmission needs expert care. Arena Auto Repair provides comprehensive transmission services to keep you shifting smoothly."
      image="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1920&h=1080&fit=crop"
      features={[
        'Transmission fluid change and flush',
        'Transmission filter replacement',
        'Clutch repair and replacement (manual)',
        'Torque converter service',
        'Transmission seal and gasket repair',
        'Shift solenoid replacement',
        'Transmission rebuild',
        'CVT transmission service',
        'Transfer case service (AWD/4WD)',
        'Transmission cooling line repair',
      ]}
      benefits={[
        'Specialized knowledge of both automatic and manual transmissions',
        'Accurate diagnostics prevent unnecessary and costly repairs',
        'We use the correct transmission fluid specified by your manufacturer',
        'Transmission rebuild option saves thousands over replacement',
        'Experience with CVT, dual-clutch, and conventional transmissions',
        'Warranty coverage on all transmission work',
        'Honest assessment — we\'ll tell you if a repair isn\'t worth it',
      ]}
      process={[
        { step: 1, title: 'Symptom Analysis', description: 'We listen to your concerns and test drive to experience the issue firsthand. Then we perform a thorough diagnostic scan.' },
        { step: 2, title: 'Internal Inspection', description: 'If needed, we inspect transmission fluid condition, perform a pan drop, and check for internal damage indicators.' },
        { step: 3, title: 'Repair or Rebuild', description: 'Based on our findings, we perform the most cost-effective repair — from simple fluid service to complete rebuild.' },
        { step: 4, title: 'Verification', description: 'Extended road test to verify all gears shift properly, no slipping, and smooth operation under various conditions.' },
      ]}
      faq={[
        { question: 'What are signs of transmission problems?', answer: 'Common signs include delayed or rough shifting, slipping between gears, grinding or shaking, burning smell, transmission fluid leaks (red fluid), check engine light, and the car not moving when in gear. Get these checked immediately.' },
        { question: 'How often should I change transmission fluid?', answer: 'Most manufacturers recommend every 30,000-60,000 miles, but this varies by vehicle. Some newer vehicles have "lifetime" fluid, but we still recommend periodic service. Check your owner\'s manual or ask us for a recommendation.' },
        { question: 'Transmission repair vs. replacement — which is better?', answer: 'A transmission rebuild is often the most cost-effective option, typically costing 50-70% less than a new or remanufactured unit. We\'ll evaluate your specific situation and provide honest advice on the best path forward.' },
        { question: 'How long does a transmission rebuild take?', answer: 'A full transmission rebuild typically takes 3-5 business days. This includes disassembly, inspection, parts ordering, reassembly, and testing. We\'ll keep you updated throughout the process.' },
      ]}
    />
  );
}