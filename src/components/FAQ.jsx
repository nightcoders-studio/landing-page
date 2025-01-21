import React from 'react'
import { Accordion } from '@radix-ui/react-accordion'

const FAQ = () => {

    const questions = () =>
        [
            {
                id: 1,
                title: 'What is the typical process like ?',
                content: <li>
                    1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae rem minus aspernatur totam? Placeat, sed voluptatum sit voluptas a consequuntur corporis, architecto facere nostrum exercitationem commodi alias! Voluptatem, nostrum magnam.
                    2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae rem minus aspernatur totam? Placeat, sed voluptatum sit voluptas a consequuntur corporis, architecto facere nostrum exercitationem commodi alias! Voluptatem, nostrum magnam.
                </li>
            },
            {
                id: 2,
                title: 'What is the typical process like ?',
                content: <li>
                    1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae rem minus aspernatur totam? Placeat, sed voluptatum sit voluptas a consequuntur corporis, architecto facere nostrum exercitationem commodi alias! Voluptatem, nostrum magnam.
                    2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae rem minus aspernatur totam? Placeat, sed voluptatum sit voluptas a consequuntur corporis, architecto facere nostrum exercitationem commodi alias! Voluptatem, nostrum magnam.
                </li>
            },
            {
                id: 3,
                title: 'What is the typical process like ?',
                content: <li>
                    1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae rem minus aspernatur totam? Placeat, sed voluptatum sit voluptas a consequuntur corporis, architecto facere nostrum exercitationem commodi alias! Voluptatem, nostrum magnam.
                    2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae rem minus aspernatur totam? Placeat, sed voluptatum sit voluptas a consequuntur corporis, architecto facere nostrum exercitationem commodi alias! Voluptatem, nostrum magnam.
                </li>
            },

        ]

    return (
        <div class='faqWrapper' className="hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8 xl:w-screen lg:w-screen lg:px-4">


        </div>
    )
}

export default FAQ
