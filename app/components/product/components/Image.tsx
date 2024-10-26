'use client';

import {useEffect, useRef, useState} from "react";

export default function Image({ src }: { src?: string }) {

    const [height, setHeight] = useState<number | undefined>();

    const ref = useRef<HTMLDivElement>(null);

    const handleResize = () => {
        setHeight(ref.current?.clientWidth);
    }

    useEffect(() => {
        handleResize();
    }, [ref]);

    useEffect(() => {
        ref.current?.addEventListener('resize', handleResize);
        return () => ref.current?.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            ref={ref}
            className={`
                    w-full md:w-80 lg:w-64 xl:w-96
                    min-w-full md:min-w-80 lg:min-w-64 xl:min-w-96
                    max-w-full md:max-w-80 lg:max-w-64 xl:max-w-96
                    h-full md:h-80 lg:h-64 xl:h-96
                    min-h-80 md:min-h-80 lg:min-h-64 xl:min-h-96
                    max-h-full md:max-h-80 lg:max-h-64 xl:max-h-96
                    bg-center bg-contain rounded-xl
                    ${src || ''} 
                    duration-500
            `}
            style={{ height }}
        >
        </div>
    )
}