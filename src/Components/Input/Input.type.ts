export type IInput = {
  label?: string;
  type: string;
  name: string;
  placeholder: string;
  errorMsg?: string | null;
  disabled?: boolean;
  className?: string;
  handleInputChange: (e: any) => void;
};
