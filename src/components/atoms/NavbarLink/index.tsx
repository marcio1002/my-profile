/* --- utils --- */
import { css } from "@utils/css";

/* --- contracts --- */
import { NavbarLinkProps } from "./types";

const classA = css`
    px-4
    py-2
    text-white
    font-medium
    border
    border-[#E8E8E820]
    rounded-full
    transition-all
`;

const classActive = css`
     border-[#E8E8E880]
    bg-[#E8E8E860]
    backdrop-blur-sm
    contrast-125
    
`;

export function NavbarLink({ text, pathname, active = false, ...props }: NavbarLinkProps) {
    return (
        <a className={css(classA, active ? classActive : "")} href={pathname} {...props}>
            {text}
        </a>
    );
}
