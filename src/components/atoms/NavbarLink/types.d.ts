import { AnchorHTMLAttributes, LinkHTMLAttributes } from "react";

export interface NavbarLinkProps extends LinkHTMLAttributes<AnchorHTMLAttributes> {
    text: string;
    pathname: string;
    active?: boolean;
}
