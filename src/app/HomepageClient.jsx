"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/reusedComponents/Loading";

const Homepage = dynamic(() => import("@/components/Homepage/Homepage"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function HomepageClient() {
  return (
    <Suspense fallback={<Loading />}>
      <Homepage />
    </Suspense>
  );
} 