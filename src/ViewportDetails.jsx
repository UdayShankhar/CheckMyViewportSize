import React, { useLayoutEffect, useState } from 'react'
import { Text } from "@nextui-org/react";

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        console.log(window.devicePixelRatio)
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function ViewportDetails() {
    const [width, height] = useWindowSize();
    return (
        <div className='viewPortContainer'>
            <div id='heading'>
                <Text
                    h1
                    size={30}
                    className="viewportText"
                    color="secondary"
                    css={{
                        // textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        textAlign: 'center'
                    }}
                    weight="bold"
                >
                    Your Viewport size is :
                </Text>
            </div>
            <div id='vpDetails'>
                <Text
                    h1
                    size={60}
                    color="secondary"
                    className='widthHeight'
                    css={{
                        // textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        textAlign: 'center'
                    }}
                    weight="bold"
                >
                    {width}<span style={{ fontSize: 'xxx-large' }} >px</span>  : {height}<span style={{ fontSize: 'xxx-large' }}>px</span>
                </Text>
            </div>
            <hr />
            <div id='dpi'>
                <Text
                    h1
                    size={20}
                    color="secondary"
                    className='dpr'
                    css={{
                        // textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        textAlign: 'center'
                    }}
                    weight="bold"
                >
                    Device Pixel Ratio : {window.devicePixelRatio.toFixed(2)}
                </Text>
            </div>
        </div>
    )
}

export default ViewportDetails