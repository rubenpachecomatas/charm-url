import { Form } from "./_components/Form";
import { UrlAlert } from "./_components/UrlAlert";
import { ThemeSwitch } from "./_components/ThemeSwitch/ThemeSwitch";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center gap-6 black w-full">
        <ThemeSwitch />
        <Form />
        <UrlAlert />
      </main>
      <Footer />
    </>
  );
}
