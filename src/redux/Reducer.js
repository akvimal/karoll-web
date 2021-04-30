const initialState = {
  courses: [
    {
      id: 1,
      title: "Data Sciences",
      decrip:
        "Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions",
      stack: [
        { id: 1, label: "Java" },
        { id: 1, label: "python" },
      ],
      activity: [
        {
          id: 1,
          title: "java Collection",
          decrips: "domain of study that deals with vast volumes",
          type: "Learn",
          stack: [{ id: 1, label: "Java" }],
          hour: 1,
          day: 2,
        },
        {
          id: 2,
          title: "java Collection",
          decrips: "domain of study that deals with vast volumes",
          type: "Exercise",
          stack: [{ id: 1, label: "Java" }],
          hour: 1,
          day: 2,
        },
      ],
    },
    {
      id: 2,
      title: "Mern Stack",
      decrip:
        "Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions",
      stack: [
        { id: 1, label: "Java" },
        { id: 1, label: "python" },
      ],
      activity: [
        {
          id: 1,
          title: "java Collection",
          decrips: "domain of study that deals with vast volumes",
          type: "Learn",
          stack: [{ id: 1, label: "Java" }],
          hour: 1,
          day: 2,
        },
        {
          id: 2,
          title: "java Collection",
          decrips: "domain of study that deals with vast volumes",
          type: "Exercise",
          stack: [{ id: 1, label: "Java" }],
          hour: 1,
          day: 2,
        },
      ],
    },
    {
      id: 3,
      title: "Mean Stack",
      decrip:
        "Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions",
      stack: [
        { id: 1, label: "Java" },
        { id: 1, label: "python" },
      ],
      activity: [
        {
          id: 1,
          title: "java Collection",
          decrips: "domain of study that deals with vast volumes",
          type: "Learn",
          stack: [{ id: 1, label: "Java" }],
          hour: 1,
          day: 2,
        },
        {
          id: 2,
          title: "java Collection",
          decrips: "domain of study that deals with vast volumes",
          type: "Exercise",
          stack: [{ id: 1, label: "Java" }],
          hour: 1,
          day: 2,
        },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  //   if (action.type === "ADD_DATA") {
  //     const arrCopy = [...state.data];

  //     arrCopy.push({
  //       id: Math.round(Math.random() * 1000),
  //       username: action.username,
  //       mobileno: action.mobileno,
  //       address: action.address,
  //     });

  //     return { ...state, data: arrCopy };
  //   }

  return state;
};
export default reducer;
