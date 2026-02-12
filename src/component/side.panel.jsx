import {GlassCard} from './glass.card.jsx';

export const SidePanel = ({ title, icon, children }) => {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {children}
    </GlassCard>
  );
}