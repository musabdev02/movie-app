import { createContext, useState, useContext, ReactNode } from "react";
import {
  CheckCircle,
  XCircle,
  Info,
  AlertTriangle,
} from "lucide-react";

type AlertType = "success" | "error" | "info" | "warning";

interface AlertState {
    message: string;
    type: AlertType;
    visible: boolean;
};

interface AlertContextType {
    showAlert: (message: string, type?: AlertType, duration?: number) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

const AlertProvider = ({ children }: { children: ReactNode }) => {
    const [alert, setAlert] = useState<AlertState>({
      message: "",
      type: "info",
      visible: false,
    });
  
    const showAlert = (message: string, type: AlertType = "success", duration = 3000) => {
      setAlert({ message, type, visible: true });
      setTimeout(() => {
        setAlert((prev) => ({ ...prev, visible: false }));
      }, duration);
    };
  
    const getIcon = (type: AlertType) => {
      switch (type) {
        case "success":
          return CheckCircle;
        case "error":
          return XCircle;
        case "warning":
          return AlertTriangle;
        case "info":
        default:
          return Info;
      }
    };
  
    const IconComponent = getIcon(alert.type);

    return (
      <AlertContext.Provider value={{ showAlert }}>
      {children}
      {/* Alert UI */}
      {alert.visible && (
        <div
          className={`
            animate-alert-show
            fixed top-4 left-1/2 transform -translate-x-1/2 z-50
            flex items-center gap-3 px-4 py-3 rounded-md shadow-lg text-white
            ${alert.type === "success" && "bg-green-600"}
            ${alert.type === "error" && "bg-red-600"}
            ${alert.type === "info" && "bg-blue-600"}
            ${alert.type === "warning" && "bg-yellow-400 text-black"}
            opacity-0 transition-opacity duration-1000 ease-in-out
          `}
        >
          <IconComponent className="w-5 h-5" />
          <span>{alert.message}</span>
        </div>
      )}
    </AlertContext.Provider>
    );
};

const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
      throw new Error("useAlert must be used within an AlertProvider");
    }
    return context;
};

export { AlertProvider, useAlert }