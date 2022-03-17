import { IContainer } from "./texts.interface";

export const researchAreas = {
  title: "Research Areas",
  contents: [
    {
      items: [
        {
          text: "rural development, environment and population",
          children: [
            {
              text:
                "This is a policy-focused and right-oriented approach to rural and human development in Nigeria. The main focus of the study is agricultural and rural development with special attention to the persistent problems of rural poverty and social exclusion, environmental degradation and resource conflicts, and the restructuring of rural production in the context of globalization, population studies as well as education and health.",
              type: "para",
            },
          ],
        },
        {
          text: "human rights",
          children: [
            {
              text:
                "Our research objectives include meeting specific need in human rights advocacy and activism. It goes beyond the theoretical issues of human rights protection to address the issues of how to make human rights work. Hence, it delves into the main tools of human rights activity.",
              type: "para",
            },
            {
              text:
                "Researches are carried out in various aspects of human rights – political, economic, social, environmental, etc. These include the human rights conventions, their domestications and implementations; issues about the vulnerable, rights of women and children and their violation; equity and justice.",
              type: "para",
            },
          ],
        },

        {
          text: "governance, democratisation and public policy",
          children: [
            {
              text:
                "Here our studies assess and apply methods to measure governance as well as design systems and models for effective participatory governance. It involves implementation of practical strategies to promote good governance and governance reforms. Also under study are the impact of democracy on the roles of public, private, non-governmental and international organizations in the development of Nigeria; and the effect of traditional and formal institutions of governance on national and community governance and development. Involved also in the study are the nature and participation in policy processes, implementation and socio-economic impacts of policies, as well as religion and ethnicity in governance in Nigeria.",
              type: "para",
            },
          ],
        },
        {
          text: "public health",
          children: [
            {
              text:
                "Research is one of the major primary tools CPPD uses in health sector: for project identification and designing interventions. Our health programme is to fast track high impact interventions in the following areas: maternal and child health, reproductive health, environmental sanitation, immunization, combating malaria and HIV/AIDS, health education as well as rural health. We encourage research in these areas.",
              type: "para",
            },
          ],
        },
        {
          text: "peace and conflicts",
          children: [
            {
              text:
                "Peace and conflicts studies as an academic discipline is new in Nigeria. Knowing the importance and its crucial need, the National Universities Commission (NUC) has recommended the course to be offered in all universities in Nigeria. CPPD, using its experts in the field and in collaboration with other agencies, is determined to offer assistance to Nigerian universities/institutions in this regard in terms of teaching and training of the trainers’ workshops. The aims of this unit of CPPD include the following:",
              type: "para",
            },
            {
              items: [
                {
                  text:
                    "To facilitate the study of conflict and violence so as to understand their underlying causes and long-term implications of conflicts in Nigeria.",
                  type: "para",
                },
                {
                  text:
                    "To promote the use of effective non-violent ways of resolving and managing conflict.",
                  type: "para",
                },
                {
                  text:
                    "Through seminars, conferences and capacity-building programmes, to motivate people, students, individuals and communities to act more effectively for peace.",
                  type: "para",
                },
                {
                  text:
                    "To embark on practical projects and programmes for conflict prevention, mediation, reconciliation and reconstruction in Nigerian society.",
                  type: "para",
                },
                {
                  text: "To promote researches in peace and security.",
                  type: "para",
                },
                {
                  text:
                    "To promote a culture of peaceful, transparent and accountable democratic governance as a means of conflict prevention.",
                  type: "para",
                },
              ],
              style: {
                seperateIcon: "y",
                color: "p",
                spaceBtw: "1",
              },
              type: "list",
            },
          ],
        },
      ],
      type: "list",
      style: {
        color: "p",
        weight: "s-b",
        spaceBtw: "3",
      },
    },
  ],
} as {
  title: string;
  contents: IContainer;
};
