export type Alert = {
  alertType: AlertType;
  message: string;
};

export type AlertType =
  | "alert"
  | "alert-info"
  | "alert-success"
  | "alert-warning"
  | "alert-error";
