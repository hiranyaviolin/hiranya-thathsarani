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
        imageUrl: "/notations/1.jpeg",
        description: "Latin Kankaariya (ලතින් කංකාරිය) | Charitha Attalage ft. Hashani Wasana | Prathap Eash",
        videoId: "gYN6r4cwV28",
        // https://youtu.be/gYN6r4cwV28?si=xVsN43zsgW2_3U1C
        notationLines: [
            { startTime: 0, endTime: 3, text: "Let's play...\n\n" },
            { startTime: 3, endTime: 7, text: "[Section A]\n<span class='bind'>++</span> <span class='bind'>සරි</span> <span class='bind'>රිරි</span> <span class='bind'>රිරි</span>  | <span class='bind'>සරි</span> <span class='bind'>මරි</span> <span class='bind'>--</span> <span class='bind'>රිරි</span>  | <span class='bind'>සරි</span> <span class='bind'>මරි</span> <span class='bind'>--</span> <span class='bind'>රිරි</span> |<span class='bind'>ස-</span> <span class='bind'>රිප</span> <span class='bind'>මග</span> <span class='bind'>රි-</span> |\n" },
            { startTime: 7, endTime: 12, text: "<span class='bind'>--</span> <span class='bind'>සරි</span> <span class='bind'>රිරි</span> <span class='bind'>රිරි</span>  | <span class='bind'>සරි</span> <span class='bind'>මරි</span> <span class='bind'>--</span> <span class='bind'>රි-</span>  | <span class='bind'>ස-</span> <span class='bind'>රි-</span> <span class='bind'>ම-</span> <span class='bind'>රි-</span>  | <span class='bind'>--</span> <span class='bind'>රිප</span> <span class='bind'>මග</span> <span class='bind'>රිස</span> |\n" },
            { startTime: 12, endTime: 16, text: "<span class='bind'>++</span> <span class='bind'>සරි</span> <span class='bind'>රිරි</span> <span class='bind'>රිරි</span> | <span class='bind'>සරි</span> <span class='bind'>මරි</span> <span class='bind'>--</span> <span class='bind'>රිරි</span>  | <span class='bind'>සරි</span> <span class='bind'>මරි</span> <span class='bind'>--</span> <span class='bind'>රිරි</span>  | <span class='bind'>ස-</span> <span class='bind'>රිප</span> <span class='bind'>මග</span> <span class='bind'>රි-</span> |\n" },
            { startTime: 16, endTime: 19, text: "<span class='bind'>--</span> <span class='bind'>සරි</span> <span class='bind'>රිරි</span> <span class='bind'>රිරි</span>  | <span class='bind'>සරි</span> <span class='bind'>මරි</span> <span class='bind'>--</span> <span class='bind'>රි-</span> |<span class='bind'>සරි</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>-ධ</span>  |\n" },

            { startTime: 19, endTime: 24, text: "[Section B]\n<span class='bind'>ප-</span> <span class='bind'>ධ-</span> <span class='bind'>ම-</span> <span class='bind'>ප-</span>  | <span class='bind'>ධ-</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span> |<span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>ධ-</span> <span class='bind'>ස-</span>  | <span class='bind'>ධ-</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>ග-</span>  |\n" },
            { startTime: 24, endTime: 28, text: "<span class='bind'>රි-</span> <span class='bind'>ග-</span> <span class='bind'>ස-</span> <span class='bind'>රි-</span>  | <span class='bind'>ප-</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span> |<span class='bind'>ගප</span> <span class='bind'>-ධ</span> <span class='bind'>නිධ</span> <span class='bind'>-ප</span>  | <span class='bind'>ම-</span> <span class='bind'>ග-</span> <span class='bind'>--</span> <span class='bind'>ග-</span>  |\n" },
            { startTime: 28, endTime: 32, text: "<span class='bind'>රි-</span> <span class='bind'>ග-</span> <span class='bind'>ස-</span> <span class='bind'>රි-</span>  | <span class='bind'>රිප</span> <span class='bind'>මග</span> <span class='bind'>රි-</span> <span class='bind'>--</span> |<span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>ප-</span> <span class='bind'>--</span>  | <span class='bind'>ම-</span> <span class='bind'>-ග</span> <span class='bind'>--</span> <span class='bind'>-ස</span>  |\n" },
            { startTime: 32, endTime: 36, text: "<span class='bind'>ස-</span> <span class='bind'>රි-</span> <span class='bind'>පම</span> <span class='bind'>ගරි</span>  | <span class='bind'>රි-</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span> |<span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span>  | <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>-ධ</span>  |\n\n" },

            { startTime: 37, endTime: 41, text: "[Section C]\n<span class='bind'>ප-</span> <span class='bind'>ධ-</span> <span class='bind'>ම-</span> <span class='bind'>ප-</span>  | <span class='bind'>ධ-</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span> |<span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>ධ-</span> <span class='bind'>ස-</span>  | <span class='bind'>ධ-</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>ග-</span>  |\n" },
            { startTime: 41, endTime: 45, text: "<span class='bind'>රි-</span> <span class='bind'>ග-</span> <span class='bind'>ස-</span> <span class='bind'>රි-</span>  | <span class='bind'>ප-</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span> |<span class='bind'>ගප</span> <span class='bind'>-ධ</span> <span class='bind'>නිධ</span> <span class='bind'>-ප</span>  | <span class='bind'>ම-</span> <span class='bind'>ග-</span> <span class='bind'>--</span> <span class='bind'>ග-</span>  |\n" },
            { startTime: 45, endTime: 50, text: "<span class='bind'>රි-</span> <span class='bind'>ග-</span> <span class='bind'>ස-</span> <span class='bind'>රි-</span>  | <span class='bind'>රිප</span> <span class='bind'>මග</span> <span class='bind'>රි-</span> <span class='bind'>--</span> |<span class='bind'>--</span> <span class='bind'>ධස</span> <span class='bind'>රිම</span> <span class='bind'>ධප</span>  | <span class='bind'>ම-</span> <span class='bind'>-ග</span> <span class='bind'>--</span> <span class='bind'>-ස</span>  |\n" },
            { startTime: 50, endTime: 54, text: "<span class='bind'>--</span> <span class='bind'>රි-</span> <span class='bind'>පම</span> <span class='bind'>ගරි</span>  | <span class='bind'>රි-</span> <span class='bind'>--</span> <span class='bind'>--</span> |<span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span>  | <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span> <span class='bind'>--</span>  |\n" }
        ],
    },

    {
        id: "bowitiya-mal",
        title: "Bowitiya Mal",
        imageUrl: "/notations/2.jpeg",
        description: "බෝවිටියා මල් (Bowitiya Mal) by Ravi Jay ft. Nipuni Sharada",
        videoId: "cWKNUqpwz5c", // real YouTube video ID
        // https://youtu.be/cWKNUqpwz5c?si=k_wlRY2DcFWdEPv4
        notationLines: [
            { startTime: 0, endTime: 6, text: "Let's play...\n\n" },
            // { startTime: 5, endTime: 15, text: "+ ගම́ ප ම́ | ම́ - ම́ ම́ | - ගම́ ප ම́ | ම́ - ම́ ම́ |\n\n+ ගග ම́ ම́ | නි̲ - - ධ̲ප | ම́ ග ම́ - | - - - - |\n" },
            // { startTime: 15, endTime: 25, text: "+ ගම́ ප ම́ | ම́ - ම́ ම́ | - ගම́ ප ම́ | ම́ - ම́ ම́ |\n\n+ ගග ම́ ම́ | නි̲ - - ධ̲ප | ම́ ප ම́ - | - - - - |\n" },
            // { startTime: 25, endTime: 35, text: "ම ම ම - | ප - ප ම | ප ම - - | - - - - |\n\n+ - - ප | ස̇ - නි̲ ධ̲ප | ම́ - - - | - - - - |\n" },
            // { startTime: 35, endTime: 45, text: "ම́ ම́ ම́ - | ප - ප ම́ | ප ම́ - - | - - - - |\n\n+ - - ප | ස̇ - නි̲ ධ̲ප | ම́ - - | - - - - |\n" }
            // { startTime: 6, endTime: 10, text: "[Section A]\n+ (G̲Ḿ) -P Ḿ | Ḿ - Ḿ Ḿ | - (G̲Ḿ) P Ḿ | Ḿ Ḿ Ḿ Ḿ |\n" },
            // { startTime: 10, endTime: 15, text: "+ (G̲G̲) Ḿ Ḿ | N̲ - - (D̲P) | Ḿ G̲ Ḿ - | - - - - |\n" },
            // { startTime: 15, endTime: 20, text: "+ (G̲Ḿ) P Ḿ | Ḿ - Ḿ Ḿ | - (G̲Ḿ) P Ḿ | Ḿ - Ḿ Ḿ |\n" },
            // { startTime: 20, endTime: 25, text: "+ (G̲G̲) Ḿ Ḿ | N̲ - - (D̲P) | Ḿ P Ḿ - | - - - - |\n\n" },
            // { startTime: 25, endTime: 30, text: "[Section B]\nḾ Ḿ Ḿ - | P - P Ḿ | P Ḿ - - | - - - - |\n" },
            // { startTime: 30, endTime: 34, text: "+ - - P | Ṡ - N̲ (D̲P) | Ḿ - - - | - - - - |\n" },
            // { startTime: 34, endTime: 40, text: "Ḿ Ḿ Ḿ - | P - P Ḿ | P Ḿ - - | - - - - |\n" },
            // { startTime: 40, endTime: 44, text: "+ - - P | Ṡ - N̲ (D̲P) | Ḿ - - | - - - - |\n" }
            { startTime: 6, endTime: 10, text: "[Section A]\n+ <span class='bind'><span class='komal'>ග</span>ම</span> ප ම | ම - ම ම | - <span class='bind'><span class='komal'>ග</span>ම</span> ප ම | ම ම ම ම |\n" },
            { startTime: 10, endTime: 15, text: "+ <span class='bind'><span class='komal'>ග</span><span class='komal'>ග</span></span> ම ම | <span class='komal'>නි</span> - - <span class='bind'><span class='komal'>ධ</span>ප</span> | ම <span class='komal'>ග</span> ම - | - - - - |\n" },
            { startTime: 15, endTime: 20, text: "+ <span class='bind'><span class='komal'>ග</span>ම</span> ප ම | ම - ම ම | - <span class='bind'><span class='komal'>ග</span>ම</span> ප ම | ම - ම ම |\n" },
            { startTime: 20, endTime: 25, text: "+ <span class='bind'><span class='komal'>ග</span><span class='komal'>ග</span></span> ම ම | <span class='komal'>නි</span> - - <span class='bind'><span class='komal'>ධ</span>ප</span> | ම ප ම - | - - - - |\n\n" },
            { startTime: 25, endTime: 30, text: "[Section B]\nම ම ම - | ප - ප ම | ප ම - - | - - - - |\n" },
            { startTime: 30, endTime: 34, text: "+ - - ප | <span class='upper'>ස</span> - <span class='komal'>නි</span> <span class='bind'><span class='komal'>ධ</span>ප</span> | ම - - - | - - - - |\n" },
            { startTime: 34, endTime: 40, text: "ම ම ම - | ප - ප ම | ප ම - - | - - - - |\n" },
            { startTime: 40, endTime: 44, text: "+ - - ප | <span class='upper'>ස</span> - <span class='komal'>නි</span> <span class='bind'><span class='komal'>ධ</span>ප</span> | ම - - | - - - - |\n" }
        ],
    }
];
