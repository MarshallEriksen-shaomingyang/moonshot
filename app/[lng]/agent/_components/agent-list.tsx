'use client';
import AssistantCard from '@/app/[lng]/chat/_components/assistant-card';
import ScrollContent from '@/components/scroll-content';

export default function AgentList() {
  return (
    <ScrollContent>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-auto">
          <AssistantCard />
        </div>
      </div>
    </ScrollContent>
  );
}
