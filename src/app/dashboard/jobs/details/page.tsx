import { Button } from "@/components/ui/button";
import React from "react";
import ProfileCard from "./profile-card";

export default function Page() {
  return (
    <main className="w-full h-full flex flex-col p-2">
      <h1 className="mb-4 text-3xl font-medium">Video Editor</h1>
      <p>5 candidates</p>
      <div className="flex items-center gap-2 mt-6">
        <Button>ALL</Button>
        <Button variant="outline">SAVED</Button>
        <Button variant="outline">HIDDEN</Button>
        <Button variant="outline">contacted</Button>
      </div>
      <div className="w-full grid grid-cols-3 gap-6 mt-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <ProfileCard key={i} />
        ))}
      </div>
    </main>
  );
}
