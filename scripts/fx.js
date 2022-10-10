let i = 0;

let txt = [
    'Authenticating...',
    '<br> Establishing secure connection...',
    '<br> Scanning for unapproved surveillance software...',
    '<br> Scan complete. No intrusions detected.',
    '<br> Authentication complete. Connection established at ' + getDate(),
    '<br> Only CLEARANCE LEVEL 6 OR HIGHER gain full access to all data.',
    '<br> Checking clearance level...',
    '<br>CLEARANCE DETERMINED. You may proceed.',
    '<br>',
    '<br> KEY: VGhhbmsgeW91IGZvciB2aXNpdGluZyB0aGlzIGZhbiBzaXRlLiBUaGlzIHNpdGUgaXMgZGV2b3Rl' +
    'ZCB0byBkb2N1bWVudGluZyBjYW5vbiBhbmQgZmFuLWRldGVybWluZWQgZmFjdHMgYWJvdXQgdGhlIEJsYWNrIE9' +
    'yZ2FuaXphdGlvbiBhbmQgb3RoZXIgRGV0ZWN0aXZlIENvbmFuIC8gTWFnaWMgS2FpdG8gY29udGVudC4gVGhpcy' +
    'BzaXRlIGlzIGRlc2lnbmVkIHByaW1hcmlseSB3aXRoIGJsYWNrIG9yZyBwZXJzcGVjdGl2ZSBpbiBtaW5kLiBQb' +
    'GVhc2UgZW5qb3ku',
    '<br> <h2>Access Granted.</h2>',
    '<li><a href="org/org.html">ORGANIZATION</li></a>',
    '<li><a href="org/project/dir.html">PROJECTS</a></li>',
    '<li><a href="watch/poe.html">OBSERVATION</a></li>',
    '<li><a href="alliance/dir.html">ALLIANCE</a></li>',
    '<br>select one to proceed.'
]

function getDate() {
    let currentDate = new Date();
    let date = currentDate.toLocaleString();
    return date;
}

function typeWriter() {
    for (let i = 0; i < txt.length; i++) {
        task(i);
    }
}

function task(i) {
    setTimeout(function() {
        document.getElementById("write").innerHTML += txt[i];
    }, 150 * i);
}