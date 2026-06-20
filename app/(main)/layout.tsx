import Appbar from "@/components/home/Appbar";
import Navbar from "@/components/home/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <Appbar />

        <div className="flex-1 w-full overflow-hidden">{children}</div>
      </div>
    </main>
  );
}
