import * as React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

const WorkCard = ({ name, desc, url, img }) => {
  return (
    <div className="break-inside">
        <div className="bg-white shadow-md border border-black border-2 mb-1">
            { url !== false ? (<a rel="noreferrer" target="_blank" href={url}>
                    <span className="sr-only">link to {name}</span><LazyLoadImage placeholderSrc={img} effect="black-and-white" src={img} />
                </a>)
                : (<div>
                    <span className="sr-only">link to {name}</span><LazyLoadImage placeholderSrc={img} effect="black-and-white" src={img} />
                </div>)
            }
            <div className="p-5">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{name}</h5>
                <p className="font-normal text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: desc}}></p>
            </div>
        </div>
    </div>
  )
}

export default WorkCard