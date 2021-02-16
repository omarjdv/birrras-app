import { createContext } from "react";

export const MeetupContext = createContext();
const list = [
  {
    id: "dc7f57c4-132a-49ec-af7c-4a6a37e318cc",
    theme: "Electronics",
    title: "Marriage Italian Style (Matrimonio all'italiana)",
    members: 1,
  },
  {
    id: "17e247ec-edf2-4709-9853-ed4a91b4f281",
    theme: "Health",
    title: "Devil, The (Diabel)",
    members: 2,
  },
  {
    id: "77685fed-e923-4b7e-8a8c-f19aa380fb83",
    theme: "Clothing",
    title: "Fighting Prince of Donegal, The",
    members: 3,
  },
  {
    id: "d98d9494-1dd9-4ab8-a1e0-4aac112e670c",
    theme: "Baby",
    title: "Life of Oharu, The (Saikaku ichidai onna)",
    members: 4,
  },
  {
    id: "99edab8e-6ef4-4535-930a-5fa25ff7c1cf",
    theme: "Health",
    title: "Leave It to Beaver",
    members: 5,
  },
  {
    id: "ab810d7f-3126-4743-922d-1096e60c02fd",
    theme: "Grocery",
    title: "Some Guy Who Kills People",
    members: 6,
  },
  {
    id: "ee2e77e0-bcf5-4929-bd76-bcb98324e0a3",
    theme: "Clothing",
    title: "Bettie Page Reveals All",
    members: 7,
  },
  {
    id: "55ba917c-6899-4510-9fd3-6d9f4c15b318",
    theme: "Computers",
    title: "Farmer's Daughter, The",
    members: 8,
  },
  {
    id: "bb7f9af5-af5d-4f39-9f28-df9b5d3af94f",
    theme: "Shoes",
    title: "Daddy (Tato)",
    members: 9,
  },
  {
    id: "1f78cf74-efa7-4386-a9e5-2316523259ff",
    theme: "Computers",
    title: "Fright Night",
    members: 10,
  },
  {
    id: "83df765f-2a6c-4b0d-b0ed-10af9cb0e8a3",
    theme: "Music",
    title: "Fly Away (Bis zum Horizont, dann links!)",
    members: 11,
  },
  {
    id: "671e446f-e1b3-4f4b-acc8-18be4fd5c560",
    theme: "Garden",
    title: "Down by Law",
    members: 12,
  },
  {
    id: "b9bb8cc9-03eb-4ae6-953c-dbf4f174b754",
    theme: "Books",
    title:
      "I Always Wanted to Be a Gangster (J'ai toujours rêvé d'être un gangster)",
    members: 13,
  },
  {
    id: "381bc423-2a4d-43a8-8326-2fcc0087e849",
    theme: "Movies",
    title: "Zincirbozan",
    members: 14,
  },
  {
    id: "c4fc44fe-84d8-4d86-92a2-a690340c552f",
    theme: "Toys",
    title: "Rollercoaster",
    members: 15,
  },
  {
    id: "48968d09-5a59-4684-905b-c25937ac1341",
    theme: "Sports",
    title: "Remington and the Curse of the Zombadings",
    members: 16,
  },
  {
    id: "b3800e9e-4a91-4771-8b65-9b9bd4115417",
    theme: "Automotive",
    title: "Address Unknown (Suchwiin bulmyeong)",
    members: 17,
  },
  {
    id: "e486e309-6398-436b-b883-f2b17d609b67",
    theme: "Movies",
    title: "Thorn Birds, The",
    members: 18,
  },
  {
    id: "01f595f4-7535-4341-8952-5714ecf791fc",
    theme: "Automotive",
    title: "Death Wish 2",
    members: 19,
  },
  {
    id: "521ef567-16a3-49a1-a305-784f82aa5ffd",
    theme: "Toys",
    title: "Oasis",
    members: 20,
  },
  {
    id: "72e42b2e-9161-4579-ad2e-243c0bc892f5",
    theme: "Clothing",
    title: "Last Bolshevik, The (Tombeau d'Alexandre, Le)",
    members: 21,
  },
  {
    id: "06a1919a-f728-46cb-bea7-f7466fb46fc6",
    theme: "Home",
    title: "Arizona Raiders",
    members: 22,
  },
  {
    id: "2810eb54-7dc8-43bf-9911-33d6b244800f",
    theme: "Computers",
    title: "Day for Night (La Nuit Américaine)",
    members: 23,
  },
  {
    id: "716874e7-977e-485f-b8a1-c6064f8528c1",
    theme: "Home",
    title: "Tale of Winter, A (a.k.a. A Winter's Tale) (Conte d'hiver)",
    members: 24,
  },
  {
    id: "b1ff9b0d-75d3-4341-8b33-d7d0a2c476fe",
    theme: "Games",
    title: "Moliere",
    members: 25,
  },
  {
    id: "741926b7-04c5-4ff0-9112-57760f62c39a",
    theme: "Tools",
    title: "Open Hearts (Elsker dig for evigt)",
    members: 26,
  },
  {
    id: "197e4c0a-d1bb-4612-badc-9baeeab1a267",
    theme: "Toys",
    title: "Shot in the Heart",
    members: 27,
  },
  {
    id: "0a9fb86f-809e-4d44-8813-38526c20493f",
    theme: "Kids",
    title: "French Fried Vacation (Les Bronzés)",
    members: 28,
  },
  {
    id: "fede356c-0fcb-422a-af6f-02ac0d686ec1",
    theme: "Automotive",
    title: "Death Wish 2",
    members: 29,
  },
  {
    id: "aafb1592-37b5-47ca-b748-036ec63adf53",
    theme: "Outdoors",
    title: "Turtle Diary",
    members: 30,
  },
  {
    id: "43126b39-0b3d-4573-98b4-7403b462580b",
    theme: "Industrial",
    title: "Romasanta: The Werewolf Hunt",
    members: 31,
  },
  {
    id: "e7a9f732-38ff-4472-bad8-9dfdde72ef06",
    theme: "Tools",
    title: "Every Which Way But Loose",
    members: 32,
  },
  {
    id: "4c4e4147-683d-4de9-96ca-2cc6737bb9d6",
    theme: "Tools",
    title: "Torment (Hets)",
    members: 33,
  },
  {
    id: "744615ca-a771-495d-9084-5140faa9fabf",
    theme: "Toys",
    title: "Hail the Conquering Hero",
    members: 34,
  },
  {
    id: "9006695b-a4a7-4e8c-a8b9-b4b5d6c5e6f4",
    theme: "Health",
    title: "Pericles on 31st Street",
    members: 35,
  },
  {
    id: "984dd916-0ea5-4b8d-89f9-892ca3c5a05a",
    theme: "Baby",
    title: "Raise the Red Lantern (Da hong deng long gao gao gua)",
    members: 36,
  },
  {
    id: "b73e52d1-1cf2-4e4a-b872-2a31801ef24e",
    theme: "Games",
    title: "Orpheus (Orphée)",
    members: 37,
  },
  {
    id: "1c394c83-ae05-455a-b99d-793f345ea24b",
    theme: "Garden",
    title: "Silent Souls (Ovsyanki)",
    members: 38,
  },
  {
    id: "83b7e330-bef0-453f-9d12-2f097f2d12fe",
    theme: "Sports",
    title: "Little Girl (La pivellina)",
    members: 39,
  },
  {
    id: "9f107402-8c70-4563-a1de-dee6e1ae4909",
    theme: "Health",
    title: "The Opposite Sex",
    members: 40,
  },
  {
    id: "e19803dc-f0ec-442c-a738-0785e86211f1",
    theme: "Movies",
    title: "Metropolis",
    members: 41,
  },
  {
    id: "13aed1fd-3b41-4ebc-b998-edc686e008b9",
    theme: "Electronics",
    title: "Cold Mountain",
    members: 42,
  },
  {
    id: "3f0f24f3-5571-4f6e-917c-796cb4614530",
    theme: "Clothing",
    title: "Endless Love",
    members: 43,
  },
  {
    id: "95a8577e-d045-43c2-944a-02dc651f29f0",
    theme: "Tools",
    title: "Star Trek: First Contact",
    members: 44,
  },
  {
    id: "9a6f2790-c77e-42e0-9821-36c812154b13",
    theme: "Baby",
    title: "Solid Gold Cadillac, The",
    members: 45,
  },
  {
    id: "0afa7eb9-6acc-4a4a-b697-b30c166653d5",
    theme: "Sports",
    title: "Best Man Holiday, The",
    members: 46,
  },
  {
    id: "f0d9996d-bcb3-4a2e-be1d-aba523a9f210",
    theme: "Beauty",
    title: "Shinobi No Mono 3: Resurrection (Shin shinobi no mono)",
    members: 47,
  },
  {
    id: "8aeccc70-4025-4bc4-96e4-37ae6ba6137a",
    theme: "Computers",
    title: "Always Leave Them Laughing",
    members: 48,
  },
  {
    id: "5ee3032d-7853-4136-99de-7dfe9fbddbca",
    theme: "Health",
    title: "Like Water for Chocolate (Como agua para chocolate)",
    members: 49,
  },
  {
    id: "86f52bde-8423-4dbd-94f2-8253d02c8500",
    theme: "Clothing",
    title: "Breakfast at Tiffany's",
    members: 50,
  },
];

const MeetupContextProvider = ({ children }) => {
  const getMeetById = (id) => {
    return list.find((e) => e.id === id);
  };
  return (
    <MeetupContext.Provider value={{ list, getMeetById }}>
      {children}
    </MeetupContext.Provider>
  );
};
export default MeetupContextProvider;
