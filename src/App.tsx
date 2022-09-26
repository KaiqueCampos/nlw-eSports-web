import { useEffect, useState } from 'react';
import axios from 'axios';

import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';
import { CreateAdModal } from './components/CreateAdModal';

import * as Dialog from '@radix-ui/react-dialog';

import logoImg from './assets/logo-nlw-esports.svg';
import './styles/main.css';
import { GamesSlider } from './components/GamesSlider';
interface game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

function App() {

  const [games, setGames] = useState<game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data);
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 sm:h-screen sm:my-0">

      <img
        src={logoImg}
        alt="logo NLW eSports"
        className='sm:w-44 sm:mt-10'
      />

      <h1 className="text-6xl text-white font-black mt-20 sm:text-4xl sm:mt-10">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      {
        games.length > 0 ? (
          <GamesSlider>
            {games.map(game => {

              return (
                <GameBanner
                  key={game.id}
                  bannerUrl={game.bannerUrl}
                  title={game.title}
                  adsCount={game._count.ads}
                  sliderIndex={games.indexOf(game) + 1}
                />
              )
            })}

          </GamesSlider>
        ) : ''
      }

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
