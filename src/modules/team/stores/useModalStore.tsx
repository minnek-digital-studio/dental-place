import { create } from "zustand";
import type { TeamMemberCard } from "@/modules/team/components/member-card";

export type ModalMemberStore = {
    isOpen: boolean;
    member: TeamMemberCard | null;
    openModal: (member: TeamMemberCard) => void;
    closeModal: () => void;
};

export const useModalStore = create<ModalMemberStore>()((set) => ({
    isOpen: false,
    member: null,
    openModal: (member) => set({ isOpen: true, member }),
    closeModal: () => set({ isOpen: false, member: null }),
}));
