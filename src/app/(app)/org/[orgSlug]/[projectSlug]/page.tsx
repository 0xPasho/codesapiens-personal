import { Chat } from "@/components/general/chat/chat";
import { type Metadata } from "next";
import { redirect } from "next/navigation";
import { authOptions, getServerAuthSession } from "~/server/auth";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export interface ChatPageProps {
  params: {
    projectSlug: string;
    orgSlug: string;
  };
}

export const metadata: Metadata = {
  title: "Project Overview Page",
  description: "Project Overview Page",
};

export default async function ChatPage({
  params: { projectSlug, orgSlug },
}: ChatPageProps) {
  const user = await getServerAuthSession();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  return <Chat orgSlug={orgSlug} projectSlug={projectSlug} />;
}
