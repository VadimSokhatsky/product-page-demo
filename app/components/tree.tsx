export default function Tree({ size, color }: { size: number, color: string }) {
    return (
        <div
            style={{
                position: 'relative',
                width: `${40 * size}px`,
                height: `${40 * size}px`,
            }}
        >
            <div style={{
                position: 'absolute',
                top: `${4 * size}px`,
                left: `${18 * size}px`,
                width: `${4 * size}px`,
                height: `${2 * size}px`,
                borderRadius: `${size}px`,
                backgroundColor: color,
            }}></div>
            <div style={{
                position: 'absolute',
                top: `${8 * size}px`,
                left: `${16 * size}px`,
                width: `${8 * size}px`,
                height: `${2 * size}px`,
                borderRadius: `${size}px`,
                backgroundColor: color,
            }}></div>
            <div style={{
                position: 'absolute',
                top: `${12 * size}px`,
                left: `${14 * size}px`,
                width: `${12 * size}px`,
                height: `${2 * size}px`,
                borderRadius: `${size}px`,
                backgroundColor: color,
            }}></div>
            <div style={{
                position: 'absolute',
                top: `${16 * size}px`,
                left: `${12 * size}px`,
                width: `${16 * size}px`,
                height: `${2 * size}px`,
                borderRadius: `${size}px`,
                backgroundColor: color,
            }}></div>
            <div style={{
                position: 'absolute',
                top: `${20 * size}px`,
                left: `${10 * size}px`,
                width: `${20 * size}px`,
                height: `${2 * size}px`,
                borderRadius: `${size}px`,
                backgroundColor: color,
            }}></div>
            <div style={{
                position: 'absolute',
                top: `${24 * size}px`,
                left: `${8 * size}px`,
                width: `${24 * size}px`,
                height: `${2 * size}px`,
                borderRadius: `${size}px`,
                backgroundColor: color,
            }}></div>
            <div style={{
                position: 'absolute',
                top: `${28 * size}px`,
                left: `${19 * size}px`,
                width: `${2 * size}px`,
                height: `${8 * size}px`,
                borderRadius: `${size}px`,
                backgroundColor: color,
            }}></div>

        </div>
    )
}