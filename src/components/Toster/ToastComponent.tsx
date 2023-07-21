import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const toastComponent = (message: string, type: "info" | "success" | "warning" | "error" | "default" = "default") =>
  toast(<p className="toastMessage ">{message}</p>, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  },
  
  );
