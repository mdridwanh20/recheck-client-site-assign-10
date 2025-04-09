import Swal from "sweetalert2";
import 'animate.css';  // Import animate.css for animations

// Function to show the confirmation alert
export const showConfirmationAlert = (message, callback) => {
  Swal.fire({
    title: "Are you sure?",
    text: message || "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Update it!",
    showClass: {
      popup: 'animate__animated animate__fadeIn', // Fade in animation
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOut', // Fade out animation
    },
  }).then((result) => {
    if (result.isConfirmed) {
      callback(); // Execute the callback function (e.g., deletion logic)
    }
  });
};

// Function to show success alert
export const showSuccessAlert = (message) => {
  Swal.fire({
    title: "Update!",
    text: message || "Your file has been Updated.",
    icon: "success",
    showClass: {
      popup: 'animate__animated animate__fadeIn', // Fade in animation
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOut', // Fade out animation
    },
  });
};

// Function to show error alert
export const showErrorAlert = (message) => {
  Swal.fire({
    title: "Error!",
    text: message || "Something went wrong.",
    icon: "error",
    showClass: {
      popup: 'animate__animated animate__fadeIn', // Fade in animation
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOut', // Fade out animation
    },
  });
};
