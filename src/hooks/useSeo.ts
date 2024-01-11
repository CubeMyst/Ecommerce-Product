import { useEffect } from "react";

interface Props {
  title: string;
  description?: string;
}

export default function useSeo({ title, description }: Props) {
  useEffect(() => {
    document.title = title;
    document.createElement("meta").setAttribute("description", description || "");
  }, [title, description])
}
