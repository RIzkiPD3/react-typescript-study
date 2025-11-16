import { createContext, useState } from "react";

export interface NotificationContextType {
  count: number;
  addNotification: () => void;
  resetNotifications: () => void;
}

export const NotificationContext = createContext<NotificationContextType | null>(null);

export default function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const addNotification = () => setCount((prev) => prev + 1);

  const resetNotifications = () => setCount(0);

  const value = { count, addNotification, resetNotifications };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
