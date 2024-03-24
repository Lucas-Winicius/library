import { toast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { cookieOptions } from "./constants";

export default function handleSignin(credentials: Credentials, router: any) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!credentials.nick)
    return toast({
      variant: "destructive",
      title: "Insira o seu nome de usuario",
      description: "Para continuarmos preciso de seu nome de usuario.",
    });

  if (!credentials.pass)
    return toast({
      variant: "destructive",
      title: "Insira sua senha",
      description: "Insira sua senha para continuarmos.",
    });

  toast({
    title: "Aguarde...",
    description: "Estamos procurando sua conta.",
  });

  fetch(`${apiUrl}/users/signin`, {
    method: "POST",
    body: JSON.stringify({
      credentials: {
        nick: credentials.nick,
        pass: credentials.pass,
      },
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      if (data.statusCode === 401) {
        return toast({
          variant: "destructive",
          title: "Não te encontramos :[",
          description: "Tente usar outro nome de usuario ou outra senha.",
        });
      }

      if (data.statusCode) {
        return toast({
          variant: "destructive",
          title: data.error,
          description: data.message,
        });
      }

      Cookies.set("user_secret", data.secret, cookieOptions);
      Cookies.set("role", data.role, cookieOptions);

      toast({
        title: `Seja Bem-vindo(a), ${data.user.name}!`,
        description: `Agora você tem acesso a recursos exclusivos.`,
      });

      router.push("/");
    })
    .catch((e) =>
      toast({
        variant: "destructive",
        title: e.error,
        description: e.message,
      })
    );
}
