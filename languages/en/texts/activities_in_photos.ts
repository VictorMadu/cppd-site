import { IContainer } from "./texts.interface";

const activitiesInPhotos = [
  {
    photo: "/imgs/activities/c_1.png",
    texts: [
      {
        text:
          "Crowning of the resolution of the land dispute between Emeora Neke Community and Umuezeogbu Umualor Community of Enugu State of Nigeria, espoused by CPPD-Nigeria, was the signing of peace agreement between the two communities as a laid down accord bequeathed their future generations to ensure lasting peace and brotherly co-existence.",

        style: {
          color: "n",
          height: "0",
          weight: "s-b",
        },
        type: "text",
      },
      {
        text:
          "Above, on November 13, 2008, His Royal Highness, Igwe Silas Udogu (of Emeora) and Igwe Hyacinth Ugwu (of Umuezeogbu) sign peace agreement, while the Executive Director and Executive Secretary of CPPD (in black suits) observe.",
        style: {
          color: "n",
          height: "0",
          weight: "s-b",
        },
        type: "text",
      },
    ],
  },
  {
    photo: "/imgs/activities/c_2.png",
    texts: [
      {
        text:
          "The Chairman of Isi-uzo Local Government, Dr Sam Ugwu, congratulates Dr. J.C. Madu, the Executive Director of CPPD, for the CPPD’s roles in resolving land conflict and working out peace between Emeora Neke Community and Umuezeogbu Umualor Community of Isi-Uzo Local Government Area.",
        style: {
          color: "n",
          height: "0",
          weight: "s-b",
        },
        type: "text",
      },
    ],
  },
  {
    photo: "/imgs/activities/c_3.png",
    texts: [
      {
        text:
          "A member of CPPD, Dr Madu (5th from right, front row), participated in 2008 peace research training at the United Nations Headquarters in Addis Ababa, courtesy of the UPEACE Africa Programme and IDRC.",
        style: {
          color: "n",
          height: "0",
          weight: "s-b",
        },
        type: "text",
      },
    ],
  },
  {
    photo: "/imgs/activities/c_4.png",
    texts: [
      {
        text:
          "Executive Director of CPPD receives UPEACE-IDRC 2009 Doctoral Research Award.",
        style: {
          color: "n",
          height: "0",
          weight: "s-b",
        },
        type: "text",
      },
    ],
  },
] as {
  photo: string;
  texts: IContainer;
}[];

export default activitiesInPhotos;
