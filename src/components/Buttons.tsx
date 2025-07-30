import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

type buttonsprops = {
  btn_text: string;
  link?: string;
};

export function Buttons({ btn_text, link }: buttonsprops) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <Button onClick={handleOnClick} variant="secondary">
      {btn_text}
    </Button>
  );
}
