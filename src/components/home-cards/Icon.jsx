import React from "react";
import { ReactComponent as People } from "../.././assets/icons/people.svg";
import { ReactComponent as Clock } from "../.././assets/icons/clock.svg";
import { ReactComponent as Handshake } from "../.././assets/icons/handshake.svg";
import { ReactComponent as Share } from "../.././assets/icons/share.svg";
import { ReactComponent as Graduation } from "../.././assets/icons/graduation.svg";

const iconTypes = {
    People: People,
    Clock: Clock,
    Handshake: Handshake,
    Share: Share,
    Graduation: Graduation,
};

const IconComponent = ({ name, ...props }) => {
    let Icon = iconTypes[name];
    return <Icon {...props} />;
};

export default IconComponent;