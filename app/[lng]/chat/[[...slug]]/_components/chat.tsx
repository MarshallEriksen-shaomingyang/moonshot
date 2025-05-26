'use client';
import WelcomeView from './chat/chat_welcome';

export default function Chat() {
  return (
    <main className="bg-background w-full h-full overflow-y-auto overflow-x-hidden">
      <WelcomeView />
    </main>
  );
}
