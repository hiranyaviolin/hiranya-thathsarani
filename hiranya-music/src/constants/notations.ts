export interface NotationLine {
    startTime: number;
    endTime: number;
    text: string;
}

export interface Notation {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    videoId?: string; // YouTube Video ID
    notationLines: NotationLine[];
}

export const NOTATIONS_DATA: Notation[] = [
    {
        id: "sample-notation",
        title: "Sri Lankan Melody - Sample Notation",
        imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1000&auto=format&fit=crop",
        description: "A beautiful fusion of traditional melodies transcribed for violin.",
        videoId: "dQw4w9WgXcQ", // Replace with real YouTube video ID
        notationLines: [
            { startTime: 0, endTime: 5, text: "Title: Sri Lankan Melody\nTempo: 85 BPM\nKey: D Minor\n" },
            { startTime: 5, endTime: 12, text: "[Intro]\nD4  F4  A4  | G4  F4  E4  | D4  ---  --- |\nd   f   a   | g   f   e   | d   ---  --- |\n" },
            { startTime: 12, endTime: 24, text: "[Section A]\nA4  A4  G4  | A4  F4  D4  | E4  F4  G4  | A4  ---  --- |\na   a   g   | a   f   d   | e   f   g   | a   ---  --- |\n" },
            { startTime: 24, endTime: 35, text: "[Section B]\nD5  C5  Bb4 | A4  G4  F4  | E4  F4  G4  | A4  ---  --- |\nd'  c'  bb  | a   g   f   | e   f   g   | a   ---  --- |\n" },
            { startTime: 35, endTime: 50, text: "[Ending]\nD4  F4  A4  | D5  ---  --- ||\nd   f   a   | d'  ---  --- ||" }
        ],
    }
];
