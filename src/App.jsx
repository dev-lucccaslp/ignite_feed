import { Header } from './components/Header'
import { Post } from "./components/Post";
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css';

import './global.css';

const post = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/dev-lucccaslp.png',
      name: 'Lucas Lessa',
      role: 'CEO @DHTI'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      {type: 'link', content: '👉jane.design/doctorcare'},
    ],
    publishedAt:new Date('2023-02-03 12:00:00')
  },


  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rockeatseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      {type: 'link', content: '👉jane.design/doctorcare'},
    ],
    publishedAt:new Date('2023-02-03 9:00:00')
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {post.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content= {post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}


