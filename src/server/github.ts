import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/rest";
import { env } from "~/env.mjs";

const privateKey = Buffer.from(
  env.GITHUB_APP_PRIVATE_KEY_BASE64,
  "base64",
).toString("utf-8");

const appId =
  typeof env.GITHUB_APP_ID_NUMBER === "number"
    ? env.GITHUB_APP_ID_NUMBER
    : parseInt(env.GITHUB_APP_ID_NUMBER);

const getApp = async (installationId?: number) => {
  const authParams: {
    appId: number;
    privateKey: string;
    installationId?: number;
  } = {
    appId,
    privateKey,
  };
  if (installationId) {
    // needed as was causing error if assigned directly
    // because of nullish value unexpected
    authParams.installationId = installationId;
  }
  return new Octokit({
    authStrategy: createAppAuth,
    auth: authParams,
  });
};

export { getApp };
