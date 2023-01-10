import { signIn, signOut, useSession } from 'next-auth/client'

import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Image from 'next/image';


export function SigInButton() { 
  const [session] = useSession()

  return session ? (
    <button 
    type="button" 
    className={styles.signInButton} 
    onClick={() => signOut()}
    >
    {session.user?.image && (
      <Image width={35} height={35} src={session.user.image} alt="Foto do usuário" />
    )}
      Olá, {session?.user?.name}
      <FiX color="#737380" className={styles.CloseIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => signIn('github')}>
      <FaGithub color="#ffb800" />
      Entrar com github
    </button>
  );
}
