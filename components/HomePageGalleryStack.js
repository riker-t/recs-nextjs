import HomePageGalleryPhoto from "./HomePageGalleryPhoto"


export default function HomePageGalleryStack({justifyContent}) { 
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                gap: '15px',
                justifyContent: justifyContent,
            }}>
                <HomePageGalleryPhoto />
                <HomePageGalleryPhoto />
            </div>

        </>
    );
}

