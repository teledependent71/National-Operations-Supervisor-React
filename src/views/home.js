import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>National Operations Supervisor</title>
        <meta property="og:title" content="National Operations Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
