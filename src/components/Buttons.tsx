import { Button } from "@/components/ui/button";

type buttonsprops = {
  btn_text: string;
};

export function Buttons({ btn_text }: buttonsprops) {
  return <Button variant="secondary">{btn_text}</Button>;
}
