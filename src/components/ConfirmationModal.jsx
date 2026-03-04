import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { AppColors } from "../constant/appColors";

const ConfirmationModal = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
  okText = "OK",
  cancelText = "Cancel",
  confirmColor = "primary",
  loading = false,
}) => {

  const handleConfirm = async () => {
    try {
      if (onConfirm) {
        const result = onConfirm();
        if (result != null && typeof result.then === "function") {
          await result;
        }
      }
    } finally {
      if (!loading) {
        onClose();
      }
    }
  };

  const handleCancel = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={loading ? undefined : handleCancel}
      PaperProps={{
        className:
          "border border-emerald-400/10 bg-gradient-to-tr from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-md p-5 rounded-2xl sm:p-6",
        sx: {
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(to top right, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))",
          border: "1px solid rgba(52, 211, 153, 0.1)",
          backdropFilter: "blur(12px)",
          p: 0,
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          pb: 1,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: AppColors.TXT_MAIN,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.75rem" },
          }}
        >
          {title}
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ pt: 3, pb: 2 }}>
        <Typography
          variant="body1"
          sx={{
            color: AppColors.TXT_SUB,
          }}
        >
          {description}
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          px: 3,
          pb: 2,
          gap: 1,
        }}
      >
        <Button
          onClick={handleCancel}
          disabled={loading}
          sx={{
            color: AppColors.TXT_SUB,
            textTransform: "none",
            px: 3,
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.06)",
              color: AppColors.TXT_MAIN,
            },
          }}
        >
          {cancelText}
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={loading}
          sx={{
            bgcolor: "var(--color-selsila-green, #009c8f)",
            color: "#fff",
            textTransform: "none",
            px: 3,
            "&:hover": {
              bgcolor: "var(--color-selsila-green, #009c8f)",
              filter: "brightness(0.9)",
            },
            "&:disabled": {
              bgcolor: "var(--color-selsila-green, #009c8f)",
              color: "rgba(255,255,255,0.7)",
            },
          }}
        >
          {okText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
