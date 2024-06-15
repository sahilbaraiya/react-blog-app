import { toast } from 'react-toastify'; // Import toast from React Toastify

class ToastService {
  static success(message) {
    toast.success(message);
  }

  static error(message) {
    toast.error(message);
  }

  static info(message) {
    toast.info(message);
  }

  static warning(message) {
    toast.warning(message);
  }
}

export default ToastService;
