import { Shield, Star, Clock, CheckCircle } from 'lucide-react';

const badges = [
  { icon: <Shield size={28} />, label: 'Licensed & Insured', color: 'text-arena-yellow' },
  { icon: <Star size={28} />, label: '5-Star Reviews', color: 'text-arena-yellow' },
  { icon: <Clock size={28} />, label: 'Same Day Service', color: 'text-arena-red' },
  { icon: <CheckCircle size={28} />, label: 'All Makes & Models', color: 'text-arena-red' },
];

export default function TrustBadges() {
  return (
    <section className="py-8 bg-arena-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3 justify-center py-3">
              <span className={badge.color}>{badge.icon}</span>
              <span className="text-white text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}