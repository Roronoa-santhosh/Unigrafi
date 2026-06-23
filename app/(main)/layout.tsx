import Appbar from "@/components/home/Appbar";
import Navbar from "@/components/home/Navbar";
import { auth } from "@/auth";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const session = await auth();
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <Appbar session={session} />

        <div className="flex-1 w-full overflow-hidden">{children}</div>
      </div>
    </main>
  );
}
