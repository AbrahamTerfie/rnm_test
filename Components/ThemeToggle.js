import React from "react";
import Theme from "../Context/themeContext";
export default function ThemeToggle() {
  const theme = useContext(Theme);

  const [themeState, setThemeState] = useState(theme.light);

  return (
    
  );
}
