import { type Metadata } from "next";
import { api } from "~/trpc/server";
import { Repository } from "@prisma/client";
import RepositoryGridItem from "./[repositorySlug]/_components/repository-grid-item";
import SyncFilesButton from "./_components/sync-files-button";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export interface ProjectWikiPageProps {
  params: {
    projectSlug: string;
    orgSlug: string;
  };
}

export const metadata: Metadata = {
  title: "Repositories page",
  description: "Repositories Page",
};

export default async function RepositoriesByProjectPage({
  params: { projectSlug, orgSlug },
}: ProjectWikiPageProps) {
  const repositories =
    await api.repositories.getRepositoriesByProjectSlug.query({
      projectSlug,
    });
  console.log({ repositories });
  console.log({ repositories });
  console.log({ repositories });
  console.log({ repositories });
  console.log({ repositories });

  return (
    <div className="mt-14  flex w-full justify-center">
      <div className="flex w-[1200px] max-w-full flex-col px-4 sm:px-8 md:px-0">
        <h2 className="mr-2 text-4xl font-bold tracking-tight">
          Wiki by repository
        </h2>
        <div className="mt-4">
          <SyncFilesButton projectSlug={projectSlug} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repository: Repository, index: number) => (
            <RepositoryGridItem
              key={`repo-item-${repository.id}-${index}`}
              orgSlug={orgSlug}
              projectSlug={projectSlug}
              repository={repository}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
