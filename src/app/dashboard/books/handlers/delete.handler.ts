import { toast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";

export default function handleDelete(data: Book) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = Cookies.get("user_secret");

  fetch(`${apiUrl}/books/${data.id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
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
        title: `${data.name} foi deletado!`,
        description:
          "Pode ser que ele ainda apareça aqui por algum tempo. Mas ele não aparacerá nas pesquisas.",
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
