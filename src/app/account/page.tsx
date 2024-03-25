import { Tabs } from "@/components/ui/tabs";
import TabList from "./components/TabList";
import TabContent from "./components/TabContent";

export default async function Login() {
  return (
    <div>
      <Tabs defaultValue="signup" className="w-[400px]">
        <TabList />
        <TabContent />
      </Tabs>
    </div>
  );
}
