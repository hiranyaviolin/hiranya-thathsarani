export interface Notation {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    content: string; // The notations will be stored here later
}

export const NOTATIONS_DATA: Notation[] = [
    {
        id: "sample-notation",
        title: "Sri Lankan Melody - Sample Notation",
        imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1000&auto=format&fit=crop",
        description: "A beautiful fusion of traditional melodies transcribed for violin.",
        content: `Title: Sri Lankan Melody
Tempo: 85 BPM
Key: D Minor

[Intro]
D4  F4  A4  | G4  F4  E4  | D4  ---  --- |
d   f   a   | g   f   e   | d   ---  --- |

[Section A]
A4  A4  G4  | A4  F4  D4  | E4  F4  G4  | A4  ---  --- |
a   a   g   | a   f   d   | e   f   g   | a   ---  --- |

[Section B]
D5  C5  Bb4 | A4  G4  F4  | E4  F4  G4  | A4  ---  --- |
d'  c'  bb  | a   g   f   | e   f   g   | a   ---  --- |

[Ending]
D4  F4  A4  | D5  ---  --- ||
d   f   a   | d'  ---  --- ||`,
    }
];
