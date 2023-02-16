import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <div className='container'>
      <h1>This is our Front Page</h1>
    </ div>
  )
}

export default Home