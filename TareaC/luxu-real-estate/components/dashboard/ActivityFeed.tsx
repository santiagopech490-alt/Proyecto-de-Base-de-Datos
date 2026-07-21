import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface Activity {
  id: string;
  action: string;
  property_title?: string;
  timestamp: string;
}

interface ActivityFeedProps {
  activities: Activity[];
  isLoading?: boolean;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities, isLoading }) => {
  if (isLoading) {
    return <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map(i => <div key={i} className="h-16 bg-slate-200 rounded-xl" />)}
    </div>;
  }

  if (activities.length === 0) {
    return <div className="text-center py-8 text-slate-500 text-sm">No recent activity.</div>;
  }

  return (
    <Card className="rounded-2xl border-none shadow-sm">
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <React.Fragment key={activity.id}>
              <div className="text-sm">
                <p className="text-slate-800">
                  <span className="font-semibold">{activity.action}</span>
                  {activity.property_title && ` ${activity.property_title}`}
                </p>
                <span className="text-slate-400 text-xs">{new Date(activity.timestamp).toLocaleDateString()}</span>
              </div>
              {index < activities.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
