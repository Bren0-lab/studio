import UserNav from '@/components/user-nav';
import { Power } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b shrink-0 border-border/40">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-primary/20">
            <Power className="w-6 h-6 text-primary" style={{filter: 'drop-shadow(0 0 5px hsl(var(--primary)))'}} />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-orange-300">
          CyberHome
        </h1>
      </div>
      <UserNav />
    </header>
  );
}
