/* --- components --- */
import { HeaderNavContacts } from "@components/molecules/HeaderNavContacts";
import { HeaderNavLinks } from "@components/molecules/HeaderNavLinks";

/* --- utils --- */
import { css } from "@utils/css";

const links = [
    { text: 'Principal', pathname: '#main' },
    { text: 'Eu', pathname: '#my' },
    { text: 'Habilidades', pathname: '#skills' },
    { text: 'Conhecimentos', pathname: '#acquirements' },
    { text: 'Contato', pathname: '#contact' },
]


const classHeader = css`
    flex
    lg:justify-around
    justify-between
    items-center
    lg:p-3
    p-4
    border
    border-[#44444485]
    shadow-[0_0_15px_#ffffff30_inset]
    lg:rounded-full
    rounded-md
    bg-[#5554]
    backdrop-blur-sm
    absolute
    top-2
    left-2
    right-2
`

export function HeaderNavbar() {
    return (
        <header className={classHeader}>
            <HeaderNavLinks links={links} />

            <HeaderNavContacts />
        </header>
    );
}