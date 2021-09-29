import { toast } from "react-toastify";

function Error() {
  return toast.error("Something went wrong!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export default Error;
