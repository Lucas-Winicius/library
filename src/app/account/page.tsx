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
import { useToast } from "@/components/ui/use-toast";

export default function Login() {
  const { toast } = useToast();
  const [credentials, setCredentials] = useState<Credentials>({
    nick: "",
    name: "",
    pass: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCredentials({ ...credentials, [id]: value });
  };

  const handleSignup = () => {
    const nick = credentials.nick.split("");
    const name = credentials.name?.split("") || [];
    const password = credentials.pass.split("");
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!nick.length)
      return toast({
        variant: "destructive",
        title: "Verifique seu username",
        description: "O nome de usuário não pode estar vazio.",
      });

    if (nick.indexOf(" ") !== -1)
      return toast({
        variant: "destructive",
        title: "Verifique seu username",
        description: "O nome de usuário não pode conter espaços.",
      });

    if (nick.length <= 4)
      return toast({
        variant: "destructive",
        title: "Verifique seu username",
        description: "O nome de usuário precisa ter mais que 4 caracteres.",
      });

    if (name?.length <= 2)
      return toast({
        variant: "destructive",
        title: "Verifique seu nome",
        description: "O seu nome deve conter no minimo 3 letras.",
      });

    if (password.length <= 8)
      return toast({
        variant: "destructive",
        title: "Verifique sua senha",
        description: "Sua senha deve conter mais que 8 caracteres.",
      });

    toast({
      title: "Aguarde...",
      description: "Estamos criando sua conta.",
    });

    fetch(`${apiUrl}/users/signup`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .catch((e) => {
        return toast({
          variant: "destructive",
          title: e.error,
          description: e.message,
        });
      });
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
              <Button onClick={handleSignup}>Criar Conta</Button>
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
              <Button>Entrar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
