import React from "react";
import { Metadata } from "next";
import NewProjectContent from "./_components/new-project-content";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "New Project Page",
  description: "New Project Page",
};
export interface OrgPageProps {
  params: {
    orgSlug: string;
  };
}

export default async function NewProjectPage({
  params: { orgSlug },
}: OrgPageProps) {
  return (
    <div className="flex flex-col">
      <NewProjectContent orgSlug={orgSlug} />
    </div>
  );
}
