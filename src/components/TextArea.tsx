import React from "react";

type TextAreaProps = {
  text: string;
};

export default function TextArea({ text }: TextAreaProps) {
  return (
    <div>
      <p className="text-muted-foreground text-xl">{text}</p>
    </div>
  );
}
