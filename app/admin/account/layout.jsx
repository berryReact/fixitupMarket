import { requireAdmin } from "@/app/_lib/auth/require-user";

export default async function AccountLayout({ children }) {
  await requireAdmin("/admin/login");

  return children;
}
