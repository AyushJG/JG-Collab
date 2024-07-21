"use client";

import { memo } from "react";

import { useOthersConnectionIds, useOthersMapped } from "@/liveblocks.config";

import { shallow } from "@liveblocks/client";

import { Cursor } from "./cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

export const CursorsPresence = memo(() => {
  return (
    <>
      {/* Draft */}
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorsPresence";
