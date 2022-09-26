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
            "(min-width: 768px)": {
                slides: { perView: 4, spacing: 15 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 5, spacing: 15 },
            },
            "(min-width: 1280px)": {
                slides: { perView: 6, spacing: 15 },
            },
            "(min-width: 1920px)": {
                slides: { perView: 7, spacing: 15 },
            },
        },
        slides: { perView: 1.5, spacing: 15 },
    })

    return (
        <div ref={ref} className="keen-slider mt-16 sm:px-5 sm:mt-10">
            {children}
        </div>
    )
}