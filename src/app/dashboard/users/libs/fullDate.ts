import "moment/locale/pt-br";
import moment from "moment";

export default function fullDate(date: Date | string) {
  moment.locale("pt-BR");
  const momentDate = moment(date);
  return momentDate.format("LLLL");
}
