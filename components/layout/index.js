import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './style.module.scss'
import PopupButton from '@/components/popup-button'

// const user = null;
const user = { name: 'pioncz' };
// const userLoading = true;
const userLoading = false;
const cartLoading = false;
const logout = () => {console.log('x')};

export default function Layout({ children }) {
  const [popupOpen, setPopupOpen] = useState(false);

  const onPopupToggle = () => {
    console.log(popupOpen);
    setPopupOpen(!popupOpen);
  };

  return (
    <>
      <nav className={styles.header}>
        <div className={"container " + styles.header__items}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/search"><a>Search</a></Link>
          <Link href="/admin"><a>Admin</a></Link>
          <Link href="/ddd"><a>Not found</a></Link>
          <div className={styles.header__actions}>
            {userLoading && <div>Loading...</div>}
            {!user && !userLoading && (
              <Link href="/login"><button>Login</button></Link>
            )}
            {!user && !userLoading && (
              <Link href="/register"><button>Register</button></Link>
            )}
            {user && <div>{user && user.name}</div>}
            <p>{JSON.stringify(popupOpen)}</p>
            {user && (
              <div className={styles.header__action}>
                <PopupButton
                  disabled={cartLoading}
                  onToggle={() => onPopupToggle()}
                  opened={popupOpen}
                  popup={<div>popup</div>}
                  button={<div>button</div>}
                />
              </div>
            )}
            {user && !userLoading && (
              <button onClick={logout}>Logout</button>
            )}
          </div>
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className="container">
          © 2020 Shop
        </div>
      </footer>
    </>
  )
}