"use client";
import { Button } from "@minnek/ui/components/button";
import type { TeamMemberCard } from "./member-card";
import { useModalStore } from "../stores/useModalStore";

const MemberCardButton = (member: TeamMemberCard) => {
    const { text, ...props } = member.button;
    const openModal = useModalStore((state) => state.openModal);
    return (
        <Button
            {...props}
            onClick={() => {
                openModal(member);
            }}
        >
            {text}
        </Button>
    );
};

export default MemberCardButton;
