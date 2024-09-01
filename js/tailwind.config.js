tailwind.config = {
  theme: {
    extend: {
      // Color Part Start
      colors: {
      'headerColor': "#160C6D",
      'btnColor': "#1BBF00",
      'htColor': "#FAFAFE",
      'ptColor': "#E6E5F3",
      'cptColor': "#141135",
      'wcuColor': "#726E9E",
      'workColor': "#F6F5FF",
      'wopColor': "#6C7D93",
      'wophColor': "#6B62C5",
      'wopphColor': "#F4F4F5",
      'aboutColor': "#F8F8FF",
      'aboutsiColor': "#FF7628",
      'aboutphColor': "#221A2C",
      'opsimColor': "#221A2C",
      'footerColor': "#48409C",
      'footertpColor': "#FEFEFE",
      'plnsColor': "rgba(236, 237, 240, 0.4)",
      'woahColor': "rgba(255, 255, 255, 0.3)",
      'workafternColor': "rgba(25, 191, 0, 0.4)",
      'afterColor': "rgba(79, 88, 95, 0.7)",
      'counterColor': "#F9F9FB",
      'bannerColor': "rgba(106, 98, 197, 0.7)",
      },
      // Color Part End

      // Container Part Start
      maxWidth: {
        'headerContainer': '1170px',
        'bannerContainer': '962px',
        'abouthtContainer': '805px',
        'counterContainer': '1209px',
        'chooseContainer': '1147px',
        'researchContainer': '558px',
      },
      // Container Part End

      // Fontfamily Start
      fontFamily: {
      'ops': ['Open Sans',],
      'pap': ['Paprika',],
      'nun': ['Nunito',],
      'quick': ['Quicksand',],
      },
      // Fontfamily End

      // Background Images Start
      backgroundImage: {
      bannerImage: "url('./images/bg.avif')",
      bannerImagetwo: "url('./images/bg2.png')",
      bannerImagethree: "url('./images/bg3.png')",
      bannerImagefour: "url('./images/bg4.png')",
      bannerImagefive: "url('./images/bg5.png')",
      },
      // Background Images End
    }
  }
}