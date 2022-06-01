import { toast } from "react-toastify";

const useToast = () => {
  const showToast = (toastDescription, toastType) => {
    const notify = () => {
      toast[toastType](toastDescription, {
        theme: "colored",
        position: "bottom-right",
        autoClose: 5000,
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
