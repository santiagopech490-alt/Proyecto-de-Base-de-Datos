import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DashboardTabsProps {
  children: {
    saved: React.ReactNode;
    visits: React.ReactNode;
    settings: React.ReactNode;
  };
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({ children }) => {
  return (
    <Tabs defaultValue="saved" className="w-full">
      <TabsList className="bg-transparent border-b border-slate-200 w-full justify-start rounded-none h-auto p-0 mb-8 gap-8">
        <TabsTrigger 
          value="saved" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#006655] data-[state=active]:bg-transparent data-[state=active]:text-[#006655] px-0 pb-4 text-slate-500 font-semibold transition-all hover:text-slate-700"
        >
          Saved Properties
        </TabsTrigger>
        <TabsTrigger 
          value="visits" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#006655] data-[state=active]:bg-transparent data-[state=active]:text-[#006655] px-0 pb-4 text-slate-500 font-semibold transition-all hover:text-slate-700"
        >
          Scheduled Visits
        </TabsTrigger>
        <TabsTrigger 
          value="settings" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#006655] data-[state=active]:bg-transparent data-[state=active]:text-[#006655] px-0 pb-4 text-slate-500 font-semibold transition-all hover:text-slate-700"
        >
          Preferences & Settings
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="saved" className="mt-0 focus-visible:ring-0">
        {children.saved}
      </TabsContent>
      
      <TabsContent value="visits" className="mt-0 focus-visible:ring-0">
        {children.visits}
      </TabsContent>
      
      <TabsContent value="settings" className="mt-0 focus-visible:ring-0">
        {children.settings}
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
