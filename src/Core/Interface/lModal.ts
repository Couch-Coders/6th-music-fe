export interface lModalProps {
  open?: () => void;
  close: () => void;
  children: React.ReactNode;
}
