import { ReactNode } from "react";

import KeenSlider from 'keen-slider'
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'

interface Props {
    children: ReactNode;
}

export function GamesSlider({ children }: Props) {

    const [ref] = useKeenSlider<HTMLDivElement>({
        breakpoints: {
            "(min-width: 480px)": {
                slides: { perView: 2, spacing: 15 },
            },
            "(min-width: 620px)": {
                slides: { perView: 3, spacing: 15 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 4, spacing: 15 },
            },
            "(min-width: 1280px)": {
                slides: { perView: 5, spacing: 15 },
            },
            "(min-width: 1536px)": {
                slides: { perView: 6, spacing: 15 },
            },
        },
        slides: { perView: 1.5, spacing: 15 },
    })

    return (
        <div ref={ref} className="keen-slider  sm:px-5 sm:mt-auto md:mt-12 xl:mt-8 2xl:mt-16 ">
            {children}
        </div>
    )
}