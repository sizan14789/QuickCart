/* eslint-disable */

import connectDB from "@/config/db";
import User from "@/models/user";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

export async function POST(req) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const eventType = evt.type;

    if (eventType === "user.created" || eventType === "user.updated") {
      const { id, first_name, last_name, email_addresses, image_url } =
        evt.data;
      const userData = {
        _id: id,
        email: email_addresses[0].email_address,
        name: first_name + " " + last_name,
        imageUrl: image_url,
        orders: []
      };
      await connectDB();

      if (eventType == "user.created") {
        await User.create(userData);
      }

      if (eventType === "user.updated")
        await User.findByIdAndUpdate(id, userData);
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;
      await connectDB();
      await User.findByIdAndDelete(id);
    }

    return new Response("User synced", { status: 200 });

  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
