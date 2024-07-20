"use client";

import { Skeleton } from "@/components/ui/skeleton";

const MAX_SHOWN_USERS = 2;

export const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">Participants</div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md flex items-center w-[100px]">
      <Skeleton className="h-full w-full bg-neutral-200" />
    </div>
  );
};
