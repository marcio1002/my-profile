/* --- main --- */
import { MouseEvent, useEffect, useState } from "react";

/* --- components --- */
import { NavbarLink } from "@components/atoms/NavbarLink";

/* --- utils --- */
import { css } from "@utils/css";

/* --- contracts */
import { HeaderNavLinksProps } from "./types";

const classUl = css`
    flex
    lg:flex-row
    flex-col
    gap-5
`;

export function HeaderNavLinks({ links }: HeaderNavLinksProps) {
    const [currentPath, setCurrentPath] = useState(links.at(0)?.pathname as string);

    function handleClick(pathname: string) {
        return (event: MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
            setCurrentPath(pathname);
        };
    }

    useEffect(() => {
        location.href = currentPath
    }, [currentPath]);

    return (
        <nav className="w-auto">
            <ul className={classUl}>
                {links.map(({ text, pathname }) => (
                    <li key={pathname} className="list-none">
                        <NavbarLink
                            text={text}
                            pathname={pathname}
                            active={currentPath === pathname}
                            onClick={handleClick(pathname)}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
