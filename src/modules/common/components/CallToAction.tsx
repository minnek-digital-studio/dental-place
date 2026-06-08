import React from "react";
import { type CallToAction } from "../types";
import { ComponentByType, ComponentType } from "../utils/CallToActions";

export interface CallToActionProps extends CallToAction {
    type?: ComponentType;
}

const CallToActionComponent = ({ type, ...props }: CallToActionProps) => {
    if (!type) return null;
    const Component = ComponentByType(type);
    if (!Component) return null;
    return <Component {...props} />;
};

export default CallToActionComponent;
