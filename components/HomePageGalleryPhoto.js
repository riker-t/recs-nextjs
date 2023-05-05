import image1 from "../public/andre-sebastian-KVDSfJ79_JU-unsplash.jpg";


export default function HomePageGalleryPhoto() {
    return (
        <>
            <div style={{
                borderRadius: '20px',
                border: '1px solid black',
                width: '100px',
                height: '100px'
            }}>
                <img src = {image1}></img>
            </div>

        </>
    );
}

