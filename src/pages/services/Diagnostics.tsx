import ServicePageLayout from '../../components/ServicePageLayout';

export default function Diagnostics() {
  return (
    <ServicePageLayout
      title="Computer Diagnostics"
      subtitle="Find the Problem Fast"
      description="Check engine light on? Don't guess — let our state-of-the-art diagnostic equipment pinpoint the exact issue. Accurate diagnosis saves you time and money."
      image="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1920&h=1080&fit=crop"
      features={[
        'OBD-II computer scan and code reading',
        'Advanced manufacturer-level diagnostics',
        'Live data analysis and freeze frame data',
        'Emission system diagnostics',
        'Electrical system testing',
        'Sensor testing and verification',
        'Drivability problem diagnosis',
        'Intermittent issue tracking',
        'Pre-purchase vehicle inspection',
        'Performance analysis',
      ]}
      benefits={[
        'State-of-the-art scan tools for all makes and models',
        'Manufacturer-level diagnostics for European, Asian, and domestic vehicles',
        'Accurate diagnosis prevents unnecessary parts replacement',
        'We explain findings in plain English — no confusing jargon',
        'Written report of all findings and recommended repairs',
        'Quick turnaround — most diagnostics completed same day',
        'Diagnostic fee often waived when you choose us for the repair',
      ]}
      process={[
        { step: 1, title: 'Code Scan', description: 'We connect to your vehicle\'s computer system and retrieve all stored trouble codes and freeze frame data.' },
        { step: 2, title: 'Live Testing', description: 'Beyond just reading codes, we perform live data analysis, component testing, and system verification.' },
        { step: 3, title: 'Root Cause', description: 'We identify the actual root cause — not just the symptom. A code is a starting point, not a final answer.' },
        { step: 4, title: 'Report & Plan', description: 'You receive a clear, written report with our findings and a repair plan with transparent pricing.' },
      ]}
      faq={[
        { question: 'How much does a diagnostic cost?', answer: 'Our diagnostic service starts at $89-129 depending on the complexity. This fee is often credited toward the repair if you choose to have us fix the issue. It\'s a small investment that can save you hundreds by avoiding incorrect parts replacement.' },
        { question: 'Can\'t I just read the code at AutoZone for free?', answer: 'Free code readers only tell you a generic code. For example, P0300 means "random misfire" but doesn\'t tell you WHY. It could be spark plugs, coils, fuel injectors, vacuum leaks, or more. Proper diagnostics goes beyond the code to find the real cause.' },
        { question: 'My check engine light went off by itself — is it fixed?', answer: 'Not necessarily. Some codes clear on their own after a few drive cycles, but the underlying issue may still exist and could come back. If the light was on, it\'s worth getting a diagnostic to make sure there\'s no lurking problem.' },
        { question: 'Do you diagnose European vehicles?', answer: 'Yes! We have factory-level diagnostic software for BMW, Mercedes, Audi, VW, Porsche, Volvo, and other European brands. These vehicles require specialized tools beyond standard OBD-II scanners.' },
      ]}
    />
  );
}