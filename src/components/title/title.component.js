import { Heading, Para, Subheading } from "./title.styles"


const Title = () => {
    return (
        <div>
            <Heading>Firegram</Heading>
            <Subheading>Firebase Gallery</Subheading>
            <Para>
            A Firebase gallery made completely in the frontend. Hence, cropping images can result in loss in quality but it serves its purpose of uploading to and downloading from firebase via a reasonable UI
            </Para>
        </div> 
    )
}

export default Title
