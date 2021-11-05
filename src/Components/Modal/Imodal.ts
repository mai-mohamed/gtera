export type IModal = {
  show: boolean;
  handleClose: () => void;
  heading: string;
  content: React.ReactNode;
  size: "lg" | "sm" | "xl" | undefined;
};
