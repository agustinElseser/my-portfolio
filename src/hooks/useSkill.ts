import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useSkill = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [example, setExample] = useState<String>("");

  useEffect(() => {
    if (pathname == "/skills/home") {
      setExample("");
    } else {
      const example = localStorage.getItem("lastExample") || "";
      const title = localStorage.getItem("title") || "home";
      handleClick(example, title);
    }
  }, [pathname]);

  const handleClick = (example: String, title: String) => {
    setExample("");

    setTimeout(() => {
      localStorage.setItem("lastExample", example.toString());
      localStorage.setItem("title", title.toString());
      setExample(example);
      navigate(`/skills/${title}`);
    }, 100);
  };
  return { example, handleClick };
};
