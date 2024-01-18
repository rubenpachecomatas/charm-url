import { Form } from "./_components/Form";
import { UrlAlert } from "./_components/UrlAlert";
import { ThemeSwitch } from "./_components/ThemeSwitch/ThemeSwitch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 pt-40 gap-6 black">
      <ThemeSwitch />
      <h1 className="text-2xl font-bold">Charm Url</h1>
      <Form />
      <UrlAlert />
    </main>
  );
}
