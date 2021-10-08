import toPug from "./toPug";

const testData = [
  {
    _key: "4cc3fde829d8",
    _type: "block",
    children: [
      {
        _key: "5e486f4f7ab7",
        _type: "span",
        marks: [],
        text: "Paragraf",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "ef015d71d949",
    _type: "block",
    children: [
      {
        _key: "1404c5cb0190",
        _type: "span",
        marks: [],
        text: "Heading 1",
      },
    ],
    markDefs: [],
    style: "h1",
  },
  {
    _key: "1a6ece0d3e25",
    _type: "block",
    children: [
      {
        _key: "9a1d904d15d7",
        _type: "span",
        marks: [],
        text: "Heading 2",
      },
    ],
    markDefs: [],
    style: "h2",
  },
  {
    _key: "720d9818251f",
    _type: "block",
    children: [
      {
        _key: "6e9595661e9e",
        _type: "span",
        marks: [],
        text: "Heading 3",
      },
    ],
    markDefs: [],
    style: "h3",
  },
  {
    _key: "b2d6fcf505f2",
    _type: "block",
    children: [
      {
        _key: "399341259917",
        _type: "span",
        marks: [],
        text: "Heading 4",
      },
    ],
    markDefs: [],
    style: "h4",
  },
  {
    _key: "3c8156900a03",
    _type: "block",
    children: [
      {
        _key: "74d130b66e66",
        _type: "span",
        marks: [],
        text: "Heading 5",
      },
    ],
    markDefs: [],
    style: "h5",
  },
  {
    _key: "6a24a5d8558e",
    _type: "block",
    children: [
      {
        _key: "22986da037f6",
        _type: "span",
        marks: [],
        text: "Heading 6",
      },
    ],
    markDefs: [],
    style: "h6",
  },
  {
    _key: "2dd437bb678a",
    _type: "block",
    children: [
      {
        _key: "63b07ad493da",
        _type: "span",
        marks: [],
        text: "Quote",
      },
    ],
    markDefs: [],
    style: "blockquote",
  },
  {
    _key: "158083579f73",
    _type: "block",
    children: [
      {
        _key: "6dc2fce83ce8",
        _type: "span",
        marks: [],
        text: "",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "bfdd194eae00",
    _type: "block",
    children: [
      {
        _key: "a842a6c36215",
        _type: "span",
        marks: [],
        text: "Jeg lager denne for å kunne teste pug",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "3ffb0ea046d5",
    _type: "block",
    children: [
      {
        _key: "6298bced6458",
        _type: "span",
        marks: [],
        text: "Dette er en paragraf og ",
      },
      {
        _key: "e815d99c87da",
        _type: "span",
        marks: ["strong"],
        text: "dette er bold",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "281edc59c4a7",
    _type: "block",
    children: [
      {
        _key: "46745590a14a",
        _type: "span",
        marks: [],
        text: "Dette er også en paragraf og ",
      },
      {
        _key: "2242b5edcf53",
        _type: "span",
        marks: ["em"],
        text: "dette er kursiv",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "3b608f126c8b",
    _type: "block",
    children: [
      {
        _key: "ada8d6d6f4ee",
        _type: "span",
        marks: ["code"],
        text: "Dette er kode",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "37660c850b27",
    _type: "block",
    children: [
      {
        _key: "4d42e2eb50a1",
        _type: "span",
        marks: ["strike-through"],
        text: "Dette har strike-through",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "5c6ca3071730",
    _type: "block",
    children: [
      {
        _key: "cda84dd60a8b",
        _type: "span",
        marks: ["underline"],
        text: "Dette er underlinet",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "bc9112beb9d3",
    _type: "block",
    children: [
      {
        _key: "08eb1b609920",
        _type: "span",
        marks: [],
        text: "Dette er en ul",
      },
    ],
    level: 1,
    listItem: "bullet",
    markDefs: [],
    style: "normal",
  },
  {
    _key: "ff613372b1fe",
    _type: "block",
    children: [
      {
        _key: "e5b288651984",
        _type: "span",
        marks: [],
        text: "Dette også",
      },
    ],
    level: 1,
    listItem: "bullet",
    markDefs: [],
    style: "normal",
  },
  {
    _key: "0ac10b3fbb81",
    _type: "block",
    children: [
      {
        _key: "7433cc2861e5",
        _type: "span",
        marks: [],
        text: "Dette er en ol",
      },
    ],
    markDefs: [],
    style: "normal",
    level: 1,
    listItem: "number",
  },
  {
    _key: "0d8a766c3571",
    _type: "block",
    children: [
      {
        _key: "191e45ed5f84",
        _type: "span",
        marks: [],
        text: "Dette også",
      },
    ],
    markDefs: [],
    style: "normal",
    level: 1,
    listItem: "number",
  },
  {
    _key: "881013c34d9a",
    _type: "block",
    children: [
      {
        _key: "718841cf79d0",
        _type: "span",
        marks: [],
        text: "Dette er en link till ",
      },
      {
        _key: "eeef5ac4c68e",
        _type: "span",
        marks: ["b8cbf42060e5"],
        text: "Stacc",
      },
    ],
    markDefs: [
      {
        _type: "link",
        _key: "b8cbf42060e5",
        href: "https://stacc.com",
      },
    ],
    style: "normal",
  },
  {
    _key: "37d74d9db867",
    _type: "block",
    children: [
      {
        _key: "3001f14aa38e",
        _type: "span",
        marks: [],
        text: "",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "56eb92c461ec",
    _type: "block",
    children: [
      {
        _key: "87b75bb725b1",
        _type: "span",
        marks: ["strong"],
        text: "Dette",
      },
      {
        _key: "b21afeab674e",
        _type: "span",
        marks: [],
        text: " er ",
      },
      {
        _key: "9b418d7d66f5",
        _type: "span",
        marks: ["em"],
        text: "en ",
      },
      {
        text: "setning",
        _key: "0d8dc7db00c5",
        _type: "span",
        marks: ["code"],
      },
      {
        text: " ",
        _key: "71b6e36d8c9e",
        _type: "span",
        marks: [],
      },
      {
        text: "med",
        _key: "de858c4f8c4b",
        _type: "span",
        marks: ["underline"],
      },
      {
        text: " ",
        _key: "8c9886c6635e",
        _type: "span",
        marks: [],
      },
      {
        text: "mange",
        _key: "656e4cafe2b6",
        _type: "span",
        marks: ["strike-through"],
      },
      {
        text: " stiler",
        _key: "448a89b48dcd",
        _type: "span",
        marks: [],
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "7190a1f6e9e9",
    _type: "block",
    children: [
      {
        _key: "106717b080f3",
        _type: "span",
        marks: [],
        text: "",
      },
    ],
    markDefs: [],
    style: "normal",
  },
  {
    _key: "368bdb0fc8b4",
    _type: "image",
    asset: {
      _type: "reference",
      _ref: "image-5282b1f63b43dc4db686a4efd4360cc78b0c1c05-121x138-png",
    },
  },
];

const options = {
  projectId: "3do82whm",
  dataset: "production",
  serializers: {},
};

describe("To Pug", () => {
  it("Should handle all cases", () => {
    const result = toPug(testData, options);
    expect(result).toContain("p Dette er en paragraf");
    expect(result).toContain("h1 Heading 1");
    expect(result).toContain(
      "p #[strong Dette]  er  #[em en ] #[code setning]   #[u med]   #[strike mange]  stiler"
    );
    expect(result).toContain(
      "img(src='https://cdn.sanity.io/images/3do82whm/production/5282b1f63b43dc4db686a4efd4360cc78b0c1c05-121x138.png' alt='undefined' title='')"
    );
    expect(result).toContain("p #[code Dette er kode]");
  });
  it("Should allow invalid input", () => {
    expect(toPug([])).toBe("");
    expect(toPug("")).toBe("");
    expect(toPug(null)).toBe("");
    expect(toPug(undefined)).toBe("");
    expect(toPug(false)).toBe("");
  });
  it("Should complex inline", () => {
    expect(
      toPug([
        {
          _key: "56eb92c461ec",
          _type: "block",
          children: [
            {
              _key: "87b75bb725b1",
              _type: "span",
              marks: ["strong"],
              text: "Dette",
            },
            {
              _key: "b21afeab674e",
              _type: "span",
              marks: [],
              text: " er ",
            },
            {
              _key: "9b418d7d66f5",
              _type: "span",
              marks: ["em"],
              text: "en ",
            },
            {
              text: "setning",
              _key: "0d8dc7db00c5",
              _type: "span",
              marks: ["code"],
            },
            {
              text: " ",
              _key: "71b6e36d8c9e",
              _type: "span",
              marks: [],
            },
            {
              text: "med",
              _key: "de858c4f8c4b",
              _type: "span",
              marks: ["underline"],
            },
            {
              text: " ",
              _key: "8c9886c6635e",
              _type: "span",
              marks: [],
            },
            {
              text: "mange",
              _key: "656e4cafe2b6",
              _type: "span",
              marks: ["strike-through"],
            },
            {
              text: " stiler",
              _key: "448a89b48dcd",
              _type: "span",
              marks: [],
            },
            {
              text: " ",
              _key: "8c9886c66351",
              _type: "span",
              marks: [],
            },
            {
              _key: "718841cf79d0",
              _type: "span",
              marks: [],
              text: "Dette er en link till ",
            },
            {
              _key: "eeef5ac4c68e",
              _type: "span",
              marks: ["b8cbf42060e5"],
              text: "Stacc",
            },
          ],
          markDefs: [
            {
              _type: "link",
              _key: "b8cbf42060e5",
              href: "https://stacc.com",
            },
          ],
          style: "normal",
        },
      ])
    ).toStrictEqual(
      `p #[strong Dette]  er  #[em en ] #[code setning]   #[u med]   #[strike mange]  stiler   Dette er en link till  #[a(href='https://stacc.com') Stacc]`
    );
  });

  it("No styles", () => {
    expect(
      toPug([
        {
          _key: "56eb92c461ec",
          _type: "block",
          children: [
            {
              _key: "87b75bb725b1",
              _type: "span",
              marks: ["strong"],
              text: "Dette",
            },
          ],
          markDefs: [],
          style: "other",
        },
      ])
    ).toBe("#[strong Dette]");
  });

  test("Custom Serializer", () => {
    const result = toPug(
      [
        {
          _key: "56eb92c461ec",
          _type: "myStyle",
          children: [
            {
              _key: "87b75bb725b1",
              _type: "span",
              marks: ["strong"],
              text: "Dette",
            },
          ],
          markDefs: [],
          style: "other",
        },
      ],
      {
        ...options,
        serializers: {
          types: {
            myStyle: (props) => {
              return `#[myStyle ${props.children}]`;
            },
          },
        },
      }
    );
    expect(result).toStrictEqual("#[myStyle #[strong Dette]]");
  });
});
