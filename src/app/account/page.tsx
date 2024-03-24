"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import handleSignup from "./handlers/signup.handler";
import handleSignin from "./handlers/signin.handler";

export default function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState<Credentials>({
    nick: "",
    name: "",
    pass: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCredentials({ ...credentials, [id]: value });
  };

  return (
    <div>
      <Tabs defaultValue="signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Criar Conta</TabsTrigger>
          <TabsTrigger value="signin">Fazer Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Criar Conta</CardTitle>
              <CardDescription>Crie sua conta e aproveite.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="nick">Username</Label>
                <Input
                  onChange={handleFormChange}
                  id="nick"
                  placeholder="Qual o seu apelido?"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Nome</Label>
                <Input
                  onChange={handleFormChange}
                  id="name"
                  placeholder="Como devemos nos referir a você?"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="pass">Senha</Label>
                <Input
                  onChange={handleFormChange}
                  id="pass"
                  placeholder="Insira sua senha"
                  type="password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleSignup(credentials, router)}>
                Criar Conta
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>Fazer Login</CardTitle>
              <CardDescription>
                Seja Bem-vindo(a) de volta. Faça login e aproveite!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="nick">Username</Label>
                <Input
                  onChange={handleFormChange}
                  id="nick"
                  type="text"
                  placeholder="Qual o seu nome de usuario?"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="pass">Senha</Label>
                <Input
                  onChange={handleFormChange}
                  id="pass"
                  type="password"
                  placeholder="Digite sua senha"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleSignin(credentials, router)}>
                Entrar
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
