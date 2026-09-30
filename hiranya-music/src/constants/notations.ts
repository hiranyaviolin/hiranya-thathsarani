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
            { startTime: 0, endTime: 3, text: "Let's play...\n\n" },
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
        id: "bowitiya-mal",
        title: "Bowitiya Mal",
        imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1000&auto=format&fit=crop",
        description: "බෝවිටියා මල් (Bowitiya Mal) by Ravi Jay ft. Nipuni Sharada",
        videoId: "cWKNUqpwz5c", // real YouTube video ID
        // https://youtu.be/cWKNUqpwz5c?si=k_wlRY2DcFWdEPv4
        notationLines: [
            { startTime: 0, endTime: 5, text: "Let's play...\n\n" },
            // { startTime: 5, endTime: 15, text: "+ ගම́ ප ම́ | ම́ - ම́ ම́ | - ගම́ ප ම́ | ම́ - ම́ ම́ |\n\n+ ගග ම́ ම́ | නි̲ - - ධ̲ප | ම́ ග ම́ - | - - - - |\n" },
            // { startTime: 15, endTime: 25, text: "+ ගම́ ප ම́ | ම́ - ම́ ම́ | - ගම́ ප ම́ | ම́ - ම́ ම́ |\n\n+ ගග ම́ ම́ | නි̲ - - ධ̲ප | ම́ ප ම́ - | - - - - |\n" },
            // { startTime: 25, endTime: 35, text: "ම ම ම - | ප - ප ම | ප ම - - | - - - - |\n\n+ - - ප | ස̇ - නි̲ ධ̲ප | ම́ - - - | - - - - |\n" },
            // { startTime: 35, endTime: 45, text: "ම́ ම́ ම́ - | ප - ප ම́ | ප ම́ - - | - - - - |\n\n+ - - ප | ස̇ - නි̲ ධ̲ප | ම́ - - | - - - - |\n" }
            { startTime: 5, endTime: 15, text: "[Section A]\n+ G Ḿ P Ḿ | Ḿ - Ḿ Ḿ | - G Ḿ P Ḿ | Ḿ - Ḿ Ḿ |\n" },
            { startTime: 5, endTime: 15, text: "+ G G Ḿ Ḿ | N̲ - - (D̲ P) | Ḿ G Ḿ - | - - - - |\n" },
            { startTime: 15, endTime: 25, text: "+ G Ḿ P Ḿ | Ḿ - Ḿ Ḿ | - G Ḿ P Ḿ | Ḿ - Ḿ Ḿ |\n" },
            { startTime: 5, endTime: 15, text: "+ G G Ḿ Ḿ | N̲ - - D̲ P | Ḿ P Ḿ - | - - - - |\n\n" },
            { startTime: 25, endTime: 35, text: "[Section B]\nM M M - | P - P M | P M - - | - - - - |\n" },
            { startTime: 5, endTime: 15, text: "+ - - P | Ṡ - N̲ D̲ P | Ḿ - - - | - - - - |\n" },
            { startTime: 35, endTime: 45, text: "Ḿ Ḿ Ḿ - | P - P Ḿ | P Ḿ - - | - - - - |\n" },
            { startTime: 5, endTime: 15, text: "+ - - P | Ṡ - N̲ D̲ P | Ḿ - - | - - - - |\n" }
        ],
    }
];
