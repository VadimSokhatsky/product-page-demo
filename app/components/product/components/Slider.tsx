import {Flex} from "@radix-ui/themes";

export default function Slider(
    props: {
        photo?: string;
        setPhoto: (photo?: string) => void;
        photos: string[];
    }
) {

    const { photo, setPhoto, photos } = props;

    const prevPhoto = () => {
        if (photo) {
            const index = photos.indexOf(photo);
            if (index > -1) {
                const p = photos[index - 1];
                if (p) setPhoto(p);
            }
        }
    }

    const nextPhoto = () => {
        if (photo) {
            const index = photos.indexOf(photo);
            if (index > -1) {
                const p = photos[index + 1];
                if (p) setPhoto(p);
            }
        }
    }

    return (
        <Flex justify="between" align="center" className="w-full md:w-min gap-2">
            <svg
                width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`hover:cursor-pointer hover:brightness-50 duration-500 ${photo === photos[0] ? 'opacity-50 pointer-events-none' : ''}`}
                onClick={prevPhoto}
            >
                <path
                    d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                    fill="#8C7A5E" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
            <Flex className="w-fit h-24 gap-1 rounded-xl overflow-hidden">
                {photos.map((p, index) => (
                    <div
                        key={'photo-' + index}
                        className={`h-24 w-24 bg-contain ${p} ${p === photo ? '' : 'contrast-50'} hover:cursor-pointer hover:contrast-100 duration-500`}
                        onClick={() => setPhoto(p)}
                    ></div>
                ))}
            </Flex>
            <svg
                width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`hover:cursor-pointer hover:brightness-50 duration-500 ${photo === photos[photos.length - 1] ? 'opacity-50 pointer-events-none' : ''}`}
                onClick={nextPhoto}
            >
                <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="#8C7A5E" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
        </Flex>
    )
}