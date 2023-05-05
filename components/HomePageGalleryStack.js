import HomePageGalleryPhoto from "./HomePageGalleryPhoto"


export default function HomePageGalleryStack({justifyContent}) { 
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px',
                gap: '15px',
                justifyContent: justifyContent,
                height: '275px'
            }}>
                <HomePageGalleryPhoto />
                <HomePageGalleryPhoto />
            </div>

        </>
    );
}

