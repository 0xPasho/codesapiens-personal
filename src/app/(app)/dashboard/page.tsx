import React from "react";
import { Metadata } from "next";
import OrgsSlugPage from "../org/[orgSlug]/page";
import { api } from "~/trpc/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard, Home Auth Page",
};

export default async function DashboardPage() {
  const currentUser = await api.users.getAuthenticatedUser.query();

  return (
    <OrgsSlugPage
      params={{ orgSlug: currentUser?.defaultOrganization!.slug! }}
    />
  );
}
