import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold mb-10">Charm Url</h1>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Your long cat size url" />
        <Button type="submit">Short</Button>
      </div>
    </main>
  );
}
