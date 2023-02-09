import React from 'react';
import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />
      
      <div className={styles.profile}>
        {/* <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/73972488?v=4" alt="" /> */}
        <Avatar src="https://github.com/dev-lucccaslp.png"/>
        <strong>Lucas Lessa</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
            <PencilLine 
              size={20}
            />
            Editar seu Perfil
          </a>
      </footer>

    </aside>
  )
}
