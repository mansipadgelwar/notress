import { toast } from "react-toastify";

const useToast = () => {
  const showToast = (toastDescription, toastType) => {
    const notify = () => {
      toast[toastType](toastDescription, {
        theme: "light",
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    notify();
  };
  return { showToast };
};

export { useToast };
