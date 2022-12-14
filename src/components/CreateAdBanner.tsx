import * as Dialog from '@radix-ui/react-dialog'
import { MagnifyingGlassPlus } from 'phosphor-react'

export function CreateAdBanner() {
    return (
        <div className="pt-1 bg-nlw-gradient rounded-lg self-stretch overflow-hidden mt-8 sm:rounded-none sm:mt-auto">
            <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center sm:flex-col sm:text-center" >
                <div>
                    <strong className='text-2xl xl:text-base 2xl:text-2xl text-white fron-black block'>Não encontrou o seu duo?</strong>
                    <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3 sm:mt-6 '>
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}