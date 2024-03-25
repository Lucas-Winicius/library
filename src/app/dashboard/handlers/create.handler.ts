import { toast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";

const emptyField = (field: string) => {
  return toast({
    variant: "destructive",
    title: `Preencha o campo de ${field}`,
    description: `Para criarmos o livro precisamos que você preencha o campo ${field}.`,
  });
};

export default function handleCreate(data: BookCreate) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = Cookies.get("user_secret");

  if (!data.name) return emptyField("nome");
  if (!data.category) return emptyField("categoria");
  if (!data.author) return emptyField("autor");
  if (!data.amount) return emptyField("quantidade");

  fetch(`${apiUrl}/books`, {
    method: "POST",
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
        title: `${data.name} foi criado!`,
        description:
          "Pode ser que demore um tempo para aparecer aqui. Mas não se preocupe ele já aparecerá nas pesquisas.",
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
