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
        id: "latin-kankariya",
        title: "Latin Kankariya",
        imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1000&auto=format&fit=crop",
        description: "Latin Kankariya is a traditional Sri Lankan folk song that tells the story of a young woman's journey to find true love.",
        videoId: "gYN6r4cwV28",
        // https://youtu.be/gYN6r4cwV28?si=xVsN43zsgW2_3U1C
        notationLines: [
            { startTime: 0, endTime: 0.03, text: "Starting...\n" },
            { startTime: 0.03, endTime: 0.07, text: "[Intro]\n++ සරි රිරි රිරි  | සරි මරි -- රිරි  | සරි මරි -- රිරි |ස- රිප මග රි- |\n" },
            { startTime: 0.07, endTime: 0.12, text: "[Section A]\n-- සරි රිරි රිරි  | සරි මරි -- රි-  | ස- රි- ම- රි-  | -- රිප මග රිස |\n" },
            { startTime: 0.12, endTime: 0.16, text: "[Section B]\n++ සරි රිරි රිරි | සරි මරි -- රිරි  | සරි මරි -- රිරි  | ස- රිප මග රි- |\n" },
            { startTime: 0.16, endTime: 0.19, text: "[Ending]\n-- සරි රිරි රිරි  | සරි මරි -- රි- |සරි -- -- -ධ  |\n" },
            { startTime: 0.19, endTime: 0.23, text: "[Ending]\nප- ධ- ම- ප-  | ධ- -- -- -- |-- -- ධ- ස-  | ධ- -- -- ග-  |\n" },
            { startTime: 0.23, endTime: 0.27, text: "[Ending]\nරි- ග- ස- රි-  | ප- -- -- -- |ගප -ධ නිධ -ප  | ම- ග- -- ග-  |\n" },
            { startTime: 0.27, endTime: 0.31, text: "[Ending]\nරි- ග- ස- රි-  | රිප මග රි- -- |-- -- ප- --  | ම- -ග -- -ස  |\n" },
            { startTime: 0.31, endTime: 0.35, text: "[Ending]\nස- රි- පම ගරි  | රි- -- -- -- |-- -- -- --  | -- -- -- -ධ  |\n" },
            { startTime: 0.35, endTime: 0.39, text: "[Ending]\nප- ධ- ම- ප-  | ධ- -- -- -- |-- -- ධ- ස-  | ධ- -- -- ග-  |\n" },
            { startTime: 0.39, endTime: 0.43, text: "[Ending]\nරි- ග- ස- රි-  | ප- -- -- -- |ගප -ධ නිධ -ප  | ම- ග- -- ග-  |\n" },
            { startTime: 0.43, endTime: 0.47, text: "[Ending]\nරි- ග- ස- රි-  | රිප මග රි- -- |-- ධස රිම ධප  | ම- -ග -- -ස  |\n" },
            { startTime: 0.47, endTime: 0.51, text: "[Ending]\nස- රි- ම- ග-  | පම ගරි -- -- |-- -- -- --  | -- -- -- --  |\n" }
        ],
    },

    {
        id: "id2",
        title: "Lathin Kankariya",
        imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1000&auto=format&fit=crop",
        description: "true love.",
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
