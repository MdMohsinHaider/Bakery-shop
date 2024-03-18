import Thembuttontoogle from "@/components/Thembuttontoogle";
import { Button } from "@/components/ui/button"
import Herosection from "@/components/Herosection";
import Bakeryshowpish from "@/components/Bakershowpishcard";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Herosection />
      <Bakeryshowpish />
      <Footer />
    </main>
  );
}
