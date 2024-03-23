import { toast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { cookieOptions } from "./constants";

export default function handleSignup(credentials: Credentials, router: any) {
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
    .then((data) => {
      if (data.statusCode) {
        toast({
          variant: "destructive",
          title: data.error,
          description: data.message,
        });
      }

      Cookies.set("user_secret", data.secret, cookieOptions);
      Cookies.set("role", data.role, cookieOptions);

      toast({
        title: `Seja Bem-vindo(a), ${data.user.nick}!`,
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
