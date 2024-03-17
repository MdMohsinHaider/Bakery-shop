import Modetogglebutton from "@/components/Modetogglebutton";
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div>
      <Button className=" bg-blue-700 hover:bg-red-700 m-2">Click </Button>
      <Modetogglebutton />
    </div>
  );
}
