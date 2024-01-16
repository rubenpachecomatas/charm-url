import { Form } from "./_components/Form";
import { UrlAlert } from "./_components/UrlAlert";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 gap-6">
      <h1 className="text-2xl font-bold">Charm Url</h1>
      <Form />
      <UrlAlert />
    </main>
  );
}
