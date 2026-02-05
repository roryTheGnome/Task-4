import { useState } from 'react';

function Playlists() {
    const [i, setI] = useState(0);

    const cds = [
        "https://open.spotify.com/embed/playlist/3NKoSrAMjKEgIg9Uv4qdII?utm_source=generator&theme=0",
        "https://open.spotify.com/embed/playlist/2KDHH7BhPVU922XYZUAMac?utm_source=generator&theme=0",
        "https://open.spotify.com/embed/playlist/6uTK3ZLAT43xPRGXbt3mf5?utm_source=generator&theme=0",
        "https://open.spotify.com/embed/playlist/592g0wLvrkJE4Tk6Bti7OD?utm_source=generator&theme=0"
    ];
    let playlist = cds[i];

    function next() {
        (i + 1) <= (cds.length - 1) ? setI(i + 1) : setI(i);
    }

    function back() {
        (i - 1) >= 0 ? setI(i - 1) : setI(i);
    }

    return (
        <div className="music">
            <button className="musicbutton" onClick={back}>Back</button>
            <span className="musicbutton" >{i+1}/{cds.length}</span>
            <button className="musicbutton" onClick={next}>Next</button>

            <iframe
                title="spotify-playlist"
                style={{borderRadius: "12px", marginTop: "12px"}}
                src={playlist}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </div>
    );
}

export default Playlists