import ServicePageLayout from '../../components/ServicePageLayout';

export default function TireService() {
  return (
    <ServicePageLayout
      title="Tire Service"
      subtitle="Safe on the Road"
      description="Your tires are the only part of your car that touches the road. Keep them in top condition with Arena Auto Repair's complete tire services."
      image="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&h=1080&fit=crop"
      features={[
        'Tire rotation and balancing',
        'Four-wheel alignment',
        'Tire replacement (all brands)',
        'Flat tire repair and patching',
        'TPMS sensor service and replacement',
        'Tire pressure check and adjustment',
        'Tire tread depth inspection',
        'Seasonal tire changeover',
        'Run-flat tire service',
        'Performance tire installation',
      ]}
      benefits={[
        'Proper alignment and rotation extends tire life by thousands of miles',
        'We carry major tire brands at competitive prices',
        'State-of-the-art alignment machine for precise adjustments',
        'Road force balancing for the smoothest ride possible',
        'Expert advice on the best tires for your vehicle and driving style',
        'Quick turnaround — most tire services completed same day',
        'TPMS sensor programming for all makes and models',
      ]}
      process={[
        { step: 1, title: 'Tire Inspection', description: 'We check tread depth, wear patterns, tire pressure, sidewall condition, and overall tire health.' },
        { step: 2, title: 'Service Plan', description: 'Based on our findings, we recommend rotation, alignment, repair, or replacement as needed.' },
        { step: 3, title: 'Expert Service', description: 'Our technicians perform the service using professional equipment and proper torque specifications.' },
        { step: 4, title: 'Final Check', description: 'Verify tire pressure, reset TPMS if needed, and ensure everything meets safety standards.' },
      ]}
      faq={[
        { question: 'How often should I rotate my tires?', answer: 'Most manufacturers recommend tire rotation every 5,000-7,500 miles — typically with every other oil change. Regular rotation promotes even wear and extends tire life significantly.' },
        { question: 'How do I know if I need an alignment?', answer: 'Signs include the car pulling to one side, uneven tire wear, a crooked steering wheel, or vibration at highway speeds. If you\'ve hit a pothole or curb, it\'s a good idea to get an alignment check.' },
        { question: 'Can you fix a nail in my tire?', answer: 'In most cases, yes. If the nail is in the tread area and the tire isn\'t severely damaged, we can safely patch and plug it from the inside. However, sidewall damage or very large punctures may require tire replacement.' },
        { question: 'Which tire brands do you carry?', answer: 'We can source tires from all major brands including Michelin, Goodyear, Bridgestone, Continental, Pirelli, Cooper, Hankook, and more. We\'ll help you find the right tire for your budget and driving needs.' },
      ]}
    />
  );
}