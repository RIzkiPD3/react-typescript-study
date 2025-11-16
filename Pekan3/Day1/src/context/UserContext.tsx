import { createContext, useState } from "react";

export interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface UserContextType {
  user: User;
  login: (name: string, email: string) => void;
  logout: () => void;
  updateProfile: (name: string, email: string) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "Guest",
    email: "-",
    isLoggedIn: false,
  });

  const login = (name: string, email: string) => {
    setUser({
      name,
      email,
      isLoggedIn: true,
    });
  };

  const logout = () => {
    setUser({
      name: "Guest",
      email: "-",
      isLoggedIn: false,
    });
  };

  const updateProfile = (name: string, email: string) => {
    setUser((prev) => ({
      ...prev,
      name,
      email,
    }));
  };

  const value = { user, login, logout, updateProfile };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
