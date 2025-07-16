import { clerkClient } from "@clerk/nextjs/server";

const authSeller = async (id) => {
  const client = await clerkClient();
  const user = await client.users.getUser(id ? id : "");

  if (user.publicMetadata.role === "seller") return true;
  return false;
};

export default authSeller;
