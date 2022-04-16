let mouseMovement = (event): void => {
    let cursor: HTMLElement | null = document.getElementById("cursor");
    let vw: number = window.innerWidth * 0.01;
    let vh: number = window.innerHeight * 0.01;
    let x: number = event.clientX / vw;
    let y: number = event.clientY / vh;

    if (x < 0) { cursor.style.left = 0 + "vw" }
    else if (x > 100 * vw) { cursor.style.left = 100 + "vw" }
    else { cursor.style.left = x + "vw"; }

    if (y < 0) { cursor.style.top = 0 + "vh" }
    else if (y > 100 * vh) { cursor.style.top = 100 + "vh" }
    else { cursor.style.top = y + "vh"; }
};

export default function Mouse(end: boolean = false): void {
    if (end) { document.removeEventListener("mousemove", mouseMovement); return; };
    
    document.addEventListener('mousemove', mouseMovement);
};
