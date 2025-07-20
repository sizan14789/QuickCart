import { auth, clerkClient } from "@clerk/nextjs/server";

const authSeller = async () => {
  const { userId } = await auth();
  if (!userId) return false;

  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  if (user.publicMetadata.role === "seller") return true;
  
  return false;
};

export default authSeller;
