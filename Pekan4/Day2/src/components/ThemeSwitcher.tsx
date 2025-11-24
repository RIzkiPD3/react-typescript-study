import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button variant="outline" onClick={toggleTheme}>
      Toggle Theme
    </Button>
  );
}
