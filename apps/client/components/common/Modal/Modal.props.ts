export type Props = {
  isOpen: boolean;
  closeModal: () => void;
  onClickHandle: () => void;
  content: {
    title: string;
    description: string;
  };
};
