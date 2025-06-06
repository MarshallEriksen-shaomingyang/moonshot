import { create } from 'zustand';

export interface ImageSelectState {
  image: string; // 选择的图片url
  setImage: (image: string) => void;
  modalOpen: boolean; // for modal open
  setModalState: () => void;
}

const useImageSelectStore = create<ImageSelectState>()(set => ({
  image: '',
  setImage: (image: string) => set({ image }),
  modalOpen: false,
  setModalState: () => set(state => ({ modalOpen: !state.modalOpen })),
}));

export default useImageSelectStore;
