import HomePageGalleryStack from "./HomePageGalleryStack";

export default function HomePageGallery() {
    return (
        <>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px'
            }}>
                <HomePageGalleryStack justifyContent='flex-end'/>
                <HomePageGalleryStack justifyContent='flex-start'/>
                <HomePageGalleryStack justifyContent='flex-end'/>
                <HomePageGalleryStack justifyContent='flex-start'/>
                <HomePageGalleryStack justifyContent='flex-end'/>
                <HomePageGalleryStack justifyContent='flex-start'/>                
            </div>

        </>
    );
}

