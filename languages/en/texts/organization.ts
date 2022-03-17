import { IOrganization } from "./texts.interface";

const organzation: IOrganization = {
  name: {
    full: "Centre for Promotion of Peace and Development",
    short: "(CPPD) Nigeria",
  },
  contacts: {
    secretariat: "B8, No. 33 Ogui Road, Enugu, Nigeria",
    phone: {
      country_code: "+234",
      numbers: ["(0)8038129140", "(0)803321862", "(0)806456445"],
    },
  },
  structure: [
    {
      items: [
        {
          text: "Board of Trustees",
          children: [
            {
              text: "The highest policy-making body, headed by the chairman.",
              type: "para",
            },
          ],
        },
        {
          text: "Council of Advisers",
          children: [
            {
              text:
                "Group of eminent persons in and outside Nigeria, who are renowned in their professions and in CPPD’s fields of operation and who support CPPD with their wealth of knowledge and advice.",
              type: "para",
            },
          ],
        },
        {
          text: "Management",
          children: [
            {
              text:
                "The organisation is run by team of all unit heads, the Executive Secretary, and the Executive Director who heads the management.",
              type: "para",
            },
          ],
        },
        {
          text: "Board of Trustees",
          children: [
            {
              text: "The highest policy-making body, headed by the chairman.",
              type: "para",
            },
          ],
        },
      ],
      style: {
        seperateIcon: "y",
        color: "p",
        weight: "s-b",
      },
      type: "list",
    },
  ],

  vision: [
    {
      text:
        "This Organization envisions a humane society where people can live in security and dignity, free from poverty and uncertainty.",
      type: "para",
    },
  ],
  mission: [
    {
      children: [
        {
          text: "The mission of the ",
          type: "text",
        },
        {
          text: "centre for promotion of peace and development",
          style: {
            color: "p",
            transform: "u",
            weight: "b",
          },
          type: "text",
        },
        {
          text:
            " is to bridge the gap between research and policy in order to achieve peace and development through:",
          type: "text",
        },
      ],
      type: "para",
    },
    {
      items: [
        {
          text: "Embarking on and advancing multi-sectoral researches",
        },
        {
          text: "Carrying out human security and development projects",
        },
        {
          text: "Carrying out conflict resolution and peace actions",
        },
        {
          text: "Training and capacity building",
        },
        {
          text: "Engaging in equity and human rights concerns",
        },
        {
          text: "Embarking on advocacy, policy debates and dialogues",
        },
        {
          text: "Embarking on consultancy services",
        },
      ],
      style: {
        color: "p",
        marginX: "1",
        spaceBtw: "0",
        seperateIcon: "y",
      },
      type: "list",
    },
    {
      text:
        "The above objectives are planned and being carried out through the following means:",
      type: "para",
    },
    {
      items: [
        {
          text: "Research",
          children: [
            {
              text:
                "Research is an important guide to development actions; hence, it is one of the major primary tools CPPD uses in its work to solve social problems as well as for project identification and designing interventions. Apart from embarking on and advancing multi-sectoral researches, the organization supports its individual members in their researches that are of high quality and that can impact positively on policy and development. The following are our research areas for which funds are solicited to support (See the description of research areas)",
              type: "para",
            },
            {
              items: [
                {
                  text: "Gender and Rural Development",
                },
                {
                  text: "Human Rights",
                },
                {
                  text: "Governance, Democratization and Public Policy",
                },
                {
                  text: "Public Health",
                },
                {
                  text: "Peace and Conflicts",
                },
              ],
              style: {
                color: "p",
                size: "n",
                marginX: "1",
                seperateIcon: "y",
              },
              type: "list",
            },
            {
              text:
                "We are also encouraging high quality of research in Nigerian universities and hope to introduce best research award for higher degree thesis and dissertations in social sciences and humanities, especially in the field of development, policy, human rights, environment, conflict and peace, economic growth and governance",
              type: "para",
            },
          ],
        },
        {
          text: "Human security projects",
          children: [
            {
              text:
                "Safety is the hallmark of freedom from fear, violence and ignorance while well being is the target of freedom from want, anxiety, deprivation and disease. We are not only concerned with threats of violence but also physical threats like poverty, disease, illiteracy, economic, political and civil rights.",
              type: "para",
            },
            {
              items: [
                {
                  text: "Poverty Reduction",
                  children: [
                    {
                      text:
                        "Also, as a grassroots social organisation, with attracted funds, CPPD embarks on proactive development projects aimed at reducing poverty, empowering the rural people and the unemployed population through skill training and income generating activities. We support concrete cooperative projects that link communities in mutually beneficial undertaking because these enhance the cooperation and confidence of these communities for durable peace. CPPD embarks on empowering rural women (especially the less privileged and widows) through credit, skill acquisition and provision of safe homes. Depending on funding capacity, we support women, village cooperatives and associations in carrying out poverty reduction projects.",
                      type: "para",
                    },
                  ],
                },
                {
                  text: "Environment and Public Health",
                  children: [
                    {
                      text:
                        "Providing poor people with basic health and nutrition is at the heart of reducing poverty and promoting economic growth. Our health programme is to fast track high impact interventions in the following areas: maternal and child health, reproductive health, environmental sanitation, immunization, combating malaria and HIV/AIDS, health education as well as rural health for the less privileged. We are committed to seeing that female gender and children in Nigerian society are protected and have access to good health and resources.",
                      type: "para",
                    },
                    {
                      text:
                        "Concern for the environment is an important part of poverty reduction strategy since environment is very crucial to poor people in terms of their health, security, earning capacity, physical surroundings, peace of mind, as well as their access to and control of environmental services and resources. Therefore, CPPD’s attention also focuses on environmental assessments and safeguard policies. The greatest costs of biodiversity loss are felt by rural people in developing countries, who are the most dependent on it for food, shelter, medicine, income, employment, and cultural identity. It is CPPD’s effort to contribute in better protection of biodiversity hotspots of the rural communities.",
                      type: "para",
                    },
                  ],
                },
                {
                  text: "Justice and Human rights",
                  children: [
                    {
                      text:
                        "Justice is a human need while access to security, justice, economic growth and development are basic human rights. We have justice/legal unit. Ours is a difficult society where many people, especially the poor, suffer injustice and abuse of their rights because of certain circumstances or their social status. We are committed to addressing inequities and defending the vulnerable (especially women and children). Women face a lot of challenges in Nigeria due to culture, religion patriarchal practice, conflicts and discrimination.",
                      type: "para",
                    },
                    {
                      text:
                        "Hence, we offer FREE legal advice and representation for the disadvantaged and the vulnerable in Nigeria. We also challenge unjust structures and actions that undermine the lives and rights of the citizens.",
                      type: "para",
                    },
                    {
                      text:
                        "Our objectives include meeting specific needs in human rights advocacy and activism.  The issue of human rights and policing in Nigerian context is of much concern to CPPD. We are interested in carrying out researches and interventions to help in strengthening the community policing in Nigeria, service provision to communities by informal policing, as well as improving police-public relations. CPPD supports and promotes human rights and laws for pro-poor justice sector reform, to take care of the weak and vulnerable groups in Nigeria.",
                      type: "para",
                    },
                  ],
                },
                {
                  text: "Education",
                  children: [
                    {
                      text:
                        "As emphasised in its 7th Principle, the Declaration of the Rights of the Child Proclaimed by UN General Assembly resolution 1386(XIV) of 20 November 1959: “The child is entitled to receive education, which shall be free and compulsory, at least in the elementary stages. He shall be given an education which will promote his general culture and enable him, on a basis of equal opportunity, to develop his abilities, his individual judgment, and his sense of moral and social responsibility, and to become a useful member of society.”",
                      type: "para",
                    },
                    {
                      text:
                        "Though much has been said by governments of Nigeria about the importance of education, this has remained a lip service and this results to constant strikes in the nation’s educational institutions, poor quality of education and hopeless future for the society. Depending on the availability of fund, CPPD is committed to affording the child quality education irrespective of gender, to help achieve the Millennium Development Goal on education through scholarships, grants and good nutrition.",
                      type: "para",
                    },
                  ],
                },
              ],
              style: {
                color: "p",
                size: "n",
                spaceBtw: "2",
                weight: "s-b",
              },
              type: "list",
            },
          ],
        },
        {
          text: "Advocacy and policy dialogues",
          children: [
            {
              text:
                "Weak and inappropriate policies as well as inept governance impede reforms and development in Nigeria – making human security and attainment of even the first Millennium Development Goal by this country a mirage. Advocacy and policy dialogues are carried out to address areas of weakness or problems in government policies.",
              type: "para",
            },
            {
              text:
                "Through communication and outreach this organization hopes to increase Nigerians’ awareness of their rights. By using research, policy debates and dialogues, inter-agency and state-civil society cooperation as well as broad sector activities, we can make those in government to be more accountable to the people they serve.",
              type: "para",
            },
            {
              text:
                "Messages are to be tailored to meet the need of the target audience and our communication system will have ability to create focus and interest groups capable of making their voices heard.  A greater awareness of problems and policies will always prompt debate and can encourage and initiate solutions conducive to the creation of a sustained and sustainable peace and development.",
              type: "para",
            },
            {
              text:
                "There is provision for free legal advice and representation for the disadvantaged group, while we support alternative and non-violent dispute resolution.",
              type: "para",
            },
          ],
        },
        {
          text: "Conflict Resolution and Peace Action",
          children: [
            {
              text:
                "The Centre for Promotion of Peace and Development (CPPD) Nigeria is playing important role in Nigeria as there cannot be an enduring peace without a viable democratic system and socio-economic development. Peace and Conflict Resolution Unit conducts peace researches and carries out resolution of conflicts among people and in the communities where conflicts occur. In response to the United Nations mandate for the International Decade for a Culture of Peace and Non-violence, CPPD promotes the principle of non-violence and initiative for reconciliation among Nigerian communities.",
              type: "para",
            },
            {
              text:
                "Through its activities and sponsored programmes, CPPD intends to build the culture of non-violence in Nigerian campuses and also support the creation of strategies to alleviate the plight of children that face violence. Activities are undertaken and support is given for prevention, resolution and management of conflict by formal and informal means, but especially the latter.",
              type: "para",
            },
          ],
        },

        {
          text: "Consultancy and Synergy",
          children: [
            {
              text:
                "Many projects fail due to poor identification, planning, appraisal, design and implementation. Using our expert staff, we offer assistance through consultancy services to identify community needs (projects), guide investment decision and project implementation for success. We help in preparation of good project proposals and feasibility studies, as well as in performance improvement.",
              type: "para",
            },
            {
              text:
                "Many organizations, including the public service sectors, often have problem of achieving desired goals, efficiency and effectiveness in the implementation of available resources. CPPD renders performance audit for performance improvement in organizations and departments, helping to design and implement required intervention and solve performance problems.",
              type: "para",
            },
          ],
        },
      ],
      style: {
        color: "p",
        weight: "b",
        size: "l",
        marginY: "1",
        spaceBtw: "3",
      },
      type: "list",
    },
  ],
};
export default organzation;
