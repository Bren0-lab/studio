import { DataProvider } from '@/contexts/data-context';
import Header from '@/components/header';
import MainTabs from '@/components/dashboard/main-tabs';

export default function DashboardPage() {
  return (
    <DataProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 md:p-8">
          <MainTabs />
        </main>
      </div>
    </DataProvider>
  );
}
