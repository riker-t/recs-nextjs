
import Gallery from "./Gallery";


export default function ListView() {
    const images = [
        "https://images.unsplash.com/photo-1557002666-513ca8eaa3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3lsaXNoJTIwamFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3N8ZW58MHx8MHx8",
        "https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
        "https://images.unsplash.com/photo-1587587448844-c1036562fec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    ]
    return (
        <Gallery images={images} />
    );
};
