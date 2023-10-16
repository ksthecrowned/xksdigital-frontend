import React from 'react'

interface MapProps {}

const Map:React.FC<MapProps> = () => {
    return (
        <div className="w-full">
            <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Brazzaville+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
    )
}

export default Map