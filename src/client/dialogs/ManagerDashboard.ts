// const ManagerDashboardCard = require("./manager-dashboard.json");

const ManagerDashboardCard = (profile) => ({
  type: "AdaptiveCard",
  body: [
    {
      type: "Container",
      bleed: true,
      style: "emphasis",
      items: [
        {
          type: "TextBlock",
          text: "Manager Dashboard | 3 employees",
          weight: "Bolder",
          size: "Medium",
        },
      ],
    },
    {
      type: "ColumnSet",
      columns: [
        {
          type: "Column",
          items: [
            {
              type: "Image",
              style: "Person",
              url: "https://randomuser.me/api/portraits/women/32.jpg",
              size: "Small",
            },
          ],
          width: "auto",
        },
        {
          type: "Column",
          items: [
            {
              type: "TextBlock",
              weight: "Bolder",
              text: (profile && profile.displayName) || "",
              wrap: true,
            },
            {
              type: "TextBlock",
              spacing: "None",
              text: "🎉   5 year anniversary this week",
              isSubtle: true,
              wrap: true,
              fontType: "Default",
              weight: "Lighter",
            },
          ],
          width: "stretch",
        },
        {
          type: "Column",
          width: "50px",
          items: [
            {
              type: "ActionSet",
              actions: [
                {
                  type: "Action.Submit",
                  title: "...",
                },
              ],
            },
          ],
        },
      ],
      separator: true,
      spacing: "Small",
    },
    {
      type: "ColumnSet",
      columns: [
        {
          type: "Column",
          items: [
            {
              type: "Image",
              style: "Person",
              url: "https://randomuser.me/api/portraits/women/36.jpg",
              size: "Small",
            },
          ],
          width: "auto",
        },
        {
          type: "Column",
          items: [
            {
              type: "TextBlock",
              weight: "Bolder",
              wrap: true,
              text: "Alexa Edwards",
            },
            {
              type: "TextBlock",
              spacing: "None",
              text: "📅  Upcoming time off: Mar 20-25, Apr 1",
              isSubtle: true,
              weight: "Lighter",
              fontType: "Default",
            },
          ],
          width: "stretch",
        },
        {
          type: "Column",
          width: "50px",
          items: [
            {
              type: "ActionSet",
              actions: [
                {
                  type: "Action.Submit",
                  title: "...",
                },
              ],
            },
          ],
        },
      ],
      separator: true,
      spacing: "Medium",
    },
    {
      type: "ColumnSet",
      columns: [
        {
          type: "Column",
          items: [
            {
              type: "Image",
              style: "Person",
              url: "https://randomuser.me/api/portraits/women/40.jpg",
              size: "Small",
            },
          ],
          width: "auto",
        },
        {
          type: "Column",
          items: [
            {
              type: "TextBlock",
              weight: "Bolder",
              text: "Yingdan Huang",
              wrap: true,
            },
            {
              type: "TextBlock",
              spacing: "None",
              text: "🎂  Birthday this week",
              isSubtle: true,
              wrap: true,
              weight: "Lighter",
            },
          ],
          width: "stretch",
        },
        {
          type: "Column",
          width: "50px",
          items: [
            {
              type: "ActionSet",
              actions: [
                {
                  type: "Action.Submit",
                  title: "...",
                },
              ],
            },
          ],
        },
      ],
      separator: true,
      spacing: "Medium",
    },
  ],
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.2",
});

export default ManagerDashboardCard;
