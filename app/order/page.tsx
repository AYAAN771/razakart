// app/order/page.tsx (server component)
"use server";
import { connection } from "next/server";

export default async function Page() {
  await connection();
  const OrderPageClient = (await import("@/components/OrderPage")).default;
  return <OrderPageClient />;
}
