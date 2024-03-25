import { toast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";

export default function handleUpdate(data: Book) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = Cookies.get("user_secret");

  fetch(`${apiUrl}/books/${data.id}`, {
    method: "PUT",
    body: JSON.stringify({ ...data, amount: parseInt(`${data.amount}`) || 1 }),
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
        title: `${data.name} Foi atualizado!`,
        description:
          "Pode ser que demore um tempo para ele ser atualizado aqui. Mas não se preocupe ele ja foi atualizado nas pesquisas.",
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
