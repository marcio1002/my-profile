

/* --- libs --- */
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg'

/* --- utils --- */
import { css } from "@utils/css";
import { ActionIcon } from './types';

const classIcon = css`
    text-xl
    cursor-pointer
`

const classUl = css`
    flex
    lg:flex-row
    flex-col
    align-center
    gap-5
`;


function handleClick(action: ActionIcon) {
    return () => {
        const actions = {
            linkedin: () => window.open('https://www.linkedin.com/in/marcio-a-santos/', '_blank'),
            github: () => window.open('https://github.com/marcio1002', '_blank'),
            mail: () => window.open('mailto:marcioalemao190@gmail.com')
        }

        actions[action]();
    }
}

export function HeaderNavContacts() {



    return (
        <nav className="w-auto">
            <ul className={classUl}>
                <li className="list-none">
                    <AiFillLinkedin className={css(classIcon, 'text-blue-400')} onClick={handleClick('linkedin')} />
                </li>

                <li className="list-none">
                    <AiFillGithub className={css(classIcon, 'text-white')} onClick={handleClick('github')} />
                </li>

                <li className="list-none">
                    <CgMail className={css(classIcon, 'text-red-400')} onClick={handleClick('mail')} />
                </li>

            </ul>
        </nav>
    );
}
