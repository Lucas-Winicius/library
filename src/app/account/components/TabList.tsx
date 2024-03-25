import { TabsTrigger, TabsList } from "@/components/ui/tabs";

export default function TabList() {
  return (
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="signup">Criar Conta</TabsTrigger>
      <TabsTrigger value="signin">Fazer Login</TabsTrigger>
    </TabsList>
  );
}
