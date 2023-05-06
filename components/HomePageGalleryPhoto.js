

export default function HomePageGalleryPhoto() {
    return (
        <>
            {/* <div style={{
                borderRadius: "20px",
                border: "1px solid black",
                width: "100px",
                height: "100px",
                display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // overflow: "hidden",
            }}> */}
                <img
                    style={{
                        objectFit: "cover", 
                        borderRadius: "10px",
                        // border: "3px solid #5f43b2",
                        width: "100px",
                        height: "100px",
                        display: "flex",
                        // minHeight: '452px',
                        // minWidth: '373px'
                    }}
                    src='https://images.unsplash.com/photo-1603217039863-aa0c865404f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5mbHVlbmNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'>
                </img>
            {/* </div> */}

        </>
    );
}

