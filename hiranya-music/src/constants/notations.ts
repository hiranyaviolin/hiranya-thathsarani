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
            { startTime: 0, endTime: 3, text: "Starting...\n" },
            { startTime: 3, endTime: 7, text: "[Section A]\n++ සරි රිරි රිරි  | සරි මරි -- රිරි  | සරි මරි -- රිරි |ස- රිප මග රි- |\n" },
            { startTime: 7, endTime: 12, text: "-- සරි රිරි රිරි  | සරි මරි -- රි-  | ස- රි- ම- රි-  | -- රිප මග රිස |\n" },
            { startTime: 12, endTime: 16, text: "++ සරි රිරි රිරි | සරි මරි -- රිරි  | සරි මරි -- රිරි  | ස- රිප මග රි- |\n" },
            { startTime: 16, endTime: 19, text: "-- සරි රිරි රිරි  | සරි මරි -- රි- |සරි -- -- -ධ  |\n" },

            { startTime: 19, endTime: 24, text: "[Section B]\nප- ධ- ම- ප-  | ධ- -- -- -- |-- -- ධ- ස-  | ධ- -- -- ග-  |\n" },
            { startTime: 24, endTime: 28, text: "රි- ග- ස- රි-  | ප- -- -- -- |ගප -ධ නිධ -ප  | ම- ග- -- ග-  |\n" },
            { startTime: 28, endTime: 32, text: "රි- ග- ස- රි-  | රිප මග රි- -- |-- -- ප- --  | ම- -ග -- -ස  |\n" },
            { startTime: 32, endTime: 36, text: "ස- රි- පම ගරි  | රි- -- -- -- |-- -- -- --  | -- -- -- -ධ  |\n" },

            { startTime: 37, endTime: 41, text: "\nප- ධ- ම- ප-  | ධ- -- -- -- |-- -- ධ- ස-  | ධ- -- -- ග-  |\n" },
            { startTime: 41, endTime: 45, text: "රි- ග- ස- රි-  | ප- -- -- -- |ගප -ධ නිධ -ප  | ම- ග- -- ග-  |\n" },
            { startTime: 45, endTime: 50, text: "රි- ග- ස- රි-  | රිප මග රි- -- |-- ධස රිම ධප  | ම- -ග -- -ස  |\n" },
            { startTime: 50, endTime: 54, text: "-- රි- පම ගරි  | රි- -- -- |-- -- -- --  | -- -- -- --  |\n" }
        ],
    },

    {
        id: "id2",
        title: "Lathin Kankariya",
        imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1000&auto=format&fit=crop",
        description: "true love.",
        videoId: "dQw4w9WgXcQ", // real YouTube video ID
        notationLines: [
            { startTime: 0, endTime: 5, text: "Title: Sri Lankan Melody\nTempo: 85 BPM\nKey: D Minor\n" },
            { startTime: 5, endTime: 12, text: "[Intro]\nD4  F4  A4  | G4  F4  E4  | D4  ---  --- |\nd   f   a   | g   f   e   | d   ---  --- |\n" },
            { startTime: 12, endTime: 24, text: "[Section A]\nA4  A4  G4  | A4  F4  D4  | E4  F4  G4  | A4  ---  --- |\na   a   g   | a   f   d   | e   f   g   | a   ---  --- |\n" },
            { startTime: 24, endTime: 35, text: "[Section B]\nD5  C5  Bb4 | A4  G4  F4  | E4  F4  G4  | A4  ---  --- |\nd'  c'  bb  | a   g   f   | e   f   g   | a   ---  --- |\n" },
            { startTime: 35, endTime: 50, text: "[Ending]\nD4  F4  A4  | D5  ---  --- ||\nd   f   a   | d'  ---  --- ||" }
        ],
    }
];
