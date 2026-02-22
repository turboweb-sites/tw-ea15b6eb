import ServicePageLayout from '../../components/ServicePageLayout';

export default function EngineRepair() {
  return (
    <ServicePageLayout
      title="Engine Repair"
      subtitle="The Heart of Your Vehicle"
      description="From minor fixes to major overhauls, our experienced engine technicians can diagnose and repair any engine problem. All makes and models."
      image="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&h=1080&fit=crop"
      features={[
        'Complete engine diagnostics',
        'Timing belt and chain replacement',
        'Head gasket repair',
        'Valve adjustment and repair',
        'Engine overhaul and rebuild',
        'Fuel system repair and cleaning',
        'Cooling system repair',
        'Spark plug replacement',
        'Engine mount replacement',
        'Oil leak repair',
        'Compression testing',
        'Performance tuning',
      ]}
      benefits={[
        'Extensive experience with domestic, import, and European engines',
        'Advanced diagnostic equipment pinpoints problems quickly',
        'Proper repairs done right the first time — saving you money long-term',
        'Quality OEM and aftermarket parts available',
        'Detailed explanation of every repair before we start',
        'Warranty on all engine repair work',
        'Can often save you thousands vs. engine replacement',
      ]}
      process={[
        { step: 1, title: 'Computer Diagnostics', description: 'We use state-of-the-art scan tools and diagnostic equipment to identify the root cause of your engine problem.' },
        { step: 2, title: 'Detailed Estimate', description: 'Once diagnosed, we provide a detailed, written estimate with parts and labor costs. No work begins without your approval.' },
        { step: 3, title: 'Expert Repair', description: 'Our skilled technicians perform the repair following manufacturer specifications with quality parts and materials.' },
        { step: 4, title: 'Quality Assurance', description: 'After repair, we thoroughly test the engine, clear codes, and road test to verify everything is working perfectly.' },
      ]}
      faq={[
        { question: 'My check engine light is on — how serious is it?', answer: 'A check engine light can indicate anything from a loose gas cap to a serious engine problem. While it\'s not always an emergency, you should get it diagnosed promptly to prevent potential damage. We offer quick, affordable diagnostics.' },
        { question: 'Is it worth repairing an engine or should I replace it?', answer: 'This depends on the specific issue, your vehicle\'s age and condition, and the cost comparison. We\'ll give you an honest assessment and help you make the best decision for your situation and budget.' },
        { question: 'How long does an engine repair take?', answer: 'Minor repairs like spark plugs or sensors can be completed in a few hours. Major work like head gasket or timing belt replacement may take 1-3 days. Engine overhauls can take a week. We\'ll provide a timeline with your estimate.' },
        { question: 'Do you work on diesel engines?', answer: 'Yes, we service both gasoline and diesel engines. Our technicians are experienced with diesel-specific systems including fuel injection, turbochargers, and diesel particulate filters.' },
      ]}
    />
  );
}