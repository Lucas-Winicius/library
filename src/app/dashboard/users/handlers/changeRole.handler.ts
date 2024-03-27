import Cookies from "js-cookie";
import { toast } from "@/components/ui/use-toast";

export default function changeRole(role: boolean, id: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = Cookies.get("user_secret");
  fetch(`${apiUrl}/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ admin: role }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.statusCode === 401)
        return toast({
          variant: "destructive",
          title: "Algo não parece certo",
          description:
            "Desculpe mas você não tem permissão para realizar esta ação.",
        });

      if (data.statusCode)
        return toast({
          variant: "destructive",
          title: data.error,
          description: data.message,
        });

      return toast({
        title: `${data.name} trocou de cargo!`,
        description: `Agora o ${data.name} se tornou um ${
          data.admin ? "administrador!" : "usuario comum :["
        }`,
      });
    })
    .catch((e) => {
      return toast({
        variant: "destructive",
        title: e.error,
        description: e.message,
      });
    });
}
