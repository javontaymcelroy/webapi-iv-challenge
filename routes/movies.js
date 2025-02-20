const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.send({
    results: [
      {
        vote_count: 1084,
        id: 166428,
        video: false,
        vote_average: 7.8,
        title: 'How to Train Your Dragon: The Hidden World',
        popularity: 449.528,
        poster_path: '/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg',
        original_language: 'en',
        original_title: 'How to Train Your Dragon: The Hidden World',
        genre_ids: [16, 10751, 12],
        backdrop_path: '/h3KN24PrOheHVYs9ypuOIdFBEpX.jpg',
        adult: false,
        overview:
          'As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.',
        release_date: '2019-01-03'
      },
      {
        vote_count: 2458,
        id: 299537,
        video: false,
        vote_average: 7.3,
        title: 'Captain Marvel',
        popularity: 366.817,
        poster_path: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
        original_language: 'en',
        original_title: 'Captain Marvel',
        genre_ids: [28, 12, 878],
        backdrop_path: '/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg',
        adult: false,
        overview:
          'The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.',
        release_date: '2019-03-06'
      },
      {
        vote_count: 80,
        id: 450001,
        video: false,
        vote_average: 5.4,
        title: 'Master Z: Ip Man Legacy',
        popularity: 261.616,
        poster_path: '/2WfjB6FUDTIBVI2y02UGbnHR82s.jpg',
        original_language: 'cn',
        original_title: '葉問外傳：張天志',
        genre_ids: [28],
        backdrop_path: '/grtVFGJ4ts0nDAPpc1JWbBoVKTu.jpg',
        adult: false,
        overview:
          'After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect.',
        release_date: '2018-12-20'
      },
      {
        vote_count: 425,
        id: 399361,
        video: false,
        vote_average: 6.3,
        title: 'Triple Frontier',
        popularity: 197.817,
        poster_path: '/aBw8zYuAljVM1FeK5bZKITPH8ZD.jpg',
        original_language: 'en',
        original_title: 'Triple Frontier',
        genre_ids: [28, 53, 80],
        backdrop_path: '/s9I2LmQMYCanl6DvC3X1AOHs2r8.jpg',
        adult: false,
        overview:
          'Struggling to make ends meet, former special ops soldiers reunite for a high-stakes heist: stealing $75 million from a South American drug lord.',
        release_date: '2019-03-06'
      },
      {
        vote_count: 4676,
        id: 297802,
        video: false,
        vote_average: 6.8,
        title: 'Aquaman',
        popularity: 165.687,
        poster_path: '/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg',
        original_language: 'en',
        original_title: 'Aquaman',
        genre_ids: [28, 12, 14, 878],
        backdrop_path: '/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg',
        adult: false,
        overview:
          "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
        release_date: '2018-12-07'
      },
      {
        vote_count: 1596,
        id: 399579,
        video: false,
        vote_average: 6.7,
        title: 'Alita: Battle Angel',
        popularity: 154.874,
        poster_path: '/xRWht48C2V8XNfzvPehyClOvDni.jpg',
        original_language: 'en',
        original_title: 'Alita: Battle Angel',
        genre_ids: [28, 878, 53, 12],
        backdrop_path: '/aQXTw3wIWuFMy0beXRiZ1xVKtcf.jpg',
        adult: false,
        overview:
          'When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.',
        release_date: '2019-01-31'
      },
      {
        vote_count: 880,
        id: 504172,
        video: false,
        vote_average: 6.5,
        title: 'The Mule',
        popularity: 128.205,
        poster_path: '/oeZh7yEz3PMnZLgBPhrafFHRbVz.jpg',
        original_language: 'en',
        original_title: 'The Mule',
        genre_ids: [80, 18, 53],
        backdrop_path: '/bTeRgkAavyw1eCtSkaww18wLYNP.jpg',
        adult: false,
        overview:
          'Earl Stone, a man in his 80s who is broke, alone, and facing foreclosure of his business when he is offered a job that simply requires him to drive. Easy enough, but, unbeknownst to Earl, he’s just signed on as a drug courier for a Mexican cartel. He does so well that his cargo increases exponentially, and Earl hit the radar of hard-charging DEA agent Colin Bates.',
        release_date: '2018-12-14'
      },
      {
        vote_count: 12,
        id: 429471,
        video: false,
        vote_average: 5.5,
        title: 'Captive State',
        popularity: 115.067,
        poster_path: '/wB24P3QGGoAkEyBzTEb5s4lFY7N.jpg',
        original_language: 'en',
        original_title: 'Captive State',
        genre_ids: [53, 878],
        backdrop_path: '/6IZ84KFhNpy6htsJmwFVuK30pyp.jpg',
        adult: false,
        overview:
          'Nearly a decade after occupation by an extraterrestrial force, the lives of a Chicago neighborhood on both sides of the conflict are explored.',
        release_date: '2019-03-15'
      },
      {
        vote_count: 114,
        id: 464504,
        video: false,
        vote_average: 6.1,
        title: 'A Madea Family Funeral',
        popularity: 111.515,
        poster_path: '/bOiHlY5JD8GLp7BvWdHkfEftzhQ.jpg',
        original_language: 'en',
        original_title: 'A Madea Family Funeral',
        genre_ids: [35],
        backdrop_path: '/piGjUloiaq6qTpaDLisyDyEsx9i.jpg',
        adult: false,
        overview:
          'A joyous family reunion becomes a hilarious nightmare as Madea and the crew travel to backwoods Georgia, where they find themselves unexpectedly planning a funeral that might unveil unpleasant family secrets.',
        release_date: '2019-03-01'
      },
      {
        vote_count: 414,
        id: 512196,
        video: false,
        vote_average: 6.2,
        title: 'Happy Death Day 2U',
        popularity: 99.748,
        poster_path: '/4tdnePOkOOzwuGPEOAHp8UA4vqx.jpg',
        original_language: 'en',
        original_title: 'Happy Death Day 2U',
        genre_ids: [27, 9648, 53, 878, 35],
        backdrop_path: '/dhNJHBDacrZjSPtwaiwp3idpzxU.jpg',
        adult: false,
        overview:
          "Collegian Tree Gelbman wakes up in horror to learn that she's stuck in a parallel universe. Her boyfriend Carter is now with someone else, and her friends and fellow students seem to be completely different versions of themselves. When Tree discovers that Carter's roommate has been altering time, she finds herself once again the target of a masked killer. When the psychopath starts to go after her inner circle, Tree soon realizes that she must die over and over again to save everyone.",
        release_date: '2019-02-13'
      },
      {
        vote_count: 1047,
        id: 400650,
        video: false,
        vote_average: 6.7,
        title: 'Mary Poppins Returns',
        popularity: 94.535,
        poster_path: '/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg',
        original_language: 'en',
        original_title: 'Mary Poppins Returns',
        genre_ids: [14, 10751, 35],
        backdrop_path: '/cwiJQXezWz876K3jS57Sq56RYCZ.jpg',
        adult: false,
        overview:
          "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder missing in their lives.",
        release_date: '2018-12-13'
      },
      {
        vote_count: 1419,
        id: 424783,
        video: false,
        vote_average: 6.5,
        title: 'Bumblebee',
        popularity: 93.533,
        poster_path: '/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg',
        original_language: 'en',
        original_title: 'Bumblebee',
        genre_ids: [28, 12, 878],
        backdrop_path: '/hMANgfPHR1tRObNp2oPiOi9mMlz.jpg',
        adult: false,
        overview:
          'On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.',
        release_date: '2018-12-15'
      },
      {
        vote_count: 6346,
        id: 424694,
        video: false,
        vote_average: 8.1,
        title: 'Bohemian Rhapsody',
        popularity: 83.447,
        poster_path: '/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg',
        original_language: 'en',
        original_title: 'Bohemian Rhapsody',
        genre_ids: [18, 10402],
        backdrop_path: '/xcaSYLBhmDzJ6P14bcKe0KTh3QV.jpg',
        adult: false,
        overview:
          "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
        release_date: '2018-10-24'
      },
      {
        vote_count: 2445,
        id: 490132,
        video: false,
        vote_average: 8.3,
        title: 'Green Book',
        popularity: 82.547,
        poster_path: '/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg',
        original_language: 'en',
        original_title: 'Green Book',
        genre_ids: [18, 35, 10402],
        backdrop_path: '/78PjwaykLY2QqhMfWRDvmfbC6EV.jpg',
        adult: false,
        overview:
          'Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.',
        release_date: '2018-11-16'
      },
      {
        vote_count: 110,
        id: 487297,
        video: false,
        vote_average: 5.5,
        title: 'What Men Want',
        popularity: 78.014,
        poster_path: '/30IiwvIRqPGjUV0bxJkZfnSiCL.jpg',
        original_language: 'en',
        original_title: 'What Men Want',
        genre_ids: [35, 14, 10749],
        backdrop_path: '/umecegsPpKr2ZXA62Da9CQBVoIO.jpg',
        adult: false,
        overview:
          'Magically able to hear what men are thinking, a sports agent uses her newfound ability to turn the tables on her overbearing male colleagues.',
        release_date: '2019-02-08'
      },
      {
        vote_count: 1777,
        id: 480530,
        video: false,
        vote_average: 6.6,
        title: 'Creed II',
        popularity: 68.642,
        poster_path: '/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg',
        original_language: 'en',
        original_title: 'Creed II',
        genre_ids: [18],
        backdrop_path: '/6JHYYbvoSuQ95ceGx8Oeg8zzAjg.jpg',
        adult: false,
        overview:
          "Between personal obligations and training for his next big fight against an opponent with ties to his family's past, Adonis Creed is up against the challenge of his life.",
        release_date: '2018-11-21'
      },
      {
        vote_count: 1943,
        id: 404368,
        video: false,
        vote_average: 7.3,
        title: 'Ralph Breaks the Internet',
        popularity: 66.475,
        poster_path: '/lvfIaThG5HA8THf76nghKinjjji.jpg',
        original_language: 'en',
        original_title: 'Ralph Breaks the Internet',
        genre_ids: [10751, 16, 35, 14],
        backdrop_path: '/88poTBTafMXaz73vYi3c74g0y2k.jpg',
        adult: false,
        overview:
          'Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope\'s video game, "Sugar Rush." In way over their heads, Ralph and Vanellope rely on the citizens of the internet -- the netizens -- to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.',
        release_date: '2018-11-20'
      },
      {
        vote_count: 12,
        id: 548066,
        video: false,
        vote_average: 4.4,
        title: 'Level 16',
        popularity: 61.664,
        poster_path: '/ibw9NX3EO51SYkJ7NI9oH3rkdZ1.jpg',
        original_language: 'en',
        original_title: 'Level 16',
        genre_ids: [878],
        backdrop_path: '/dSdZ9iAgoDyAh3AcXtdyS9GtBKu.jpg',
        adult: false,
        overview:
          'The teenage girls of Vestalis Academy are meticulously trained in the art of being “clean girls,” practicing the virtues of perfect femininity. But what exactly are they being trained for? Vivien intends to find out.',
        release_date: '2019-03-01'
      },
      {
        vote_count: 10,
        id: 400157,
        video: false,
        vote_average: 6.8,
        title: 'Wonder Park',
        popularity: 59.178,
        poster_path: '/elUcnFlkQnx8ucyCTCWIi6HRa3w.jpg',
        original_language: 'en',
        original_title: 'Wonder Park',
        genre_ids: [35, 16, 12, 10751, 14],
        backdrop_path: '/nJyAdKPnW15IAvC6sLBTE0lp6Dv.jpg',
        adult: false,
        overview:
          'The story of a magnificent amusement park where the imagination of a wildly creative girl named June comes alive.',
        release_date: '2019-03-14'
      },
      {
        vote_count: 487,
        id: 522681,
        video: false,
        vote_average: 6.4,
        title: 'Escape Room',
        popularity: 57.496,
        poster_path: '/8yZAx7tlKRZIg7pJfaPhl00yHIQ.jpg',
        original_language: 'en',
        original_title: 'Escape Room',
        genre_ids: [27, 53, 28],
        backdrop_path: '/mWLljCmpqlcYQh7uh51BBMwCZwN.jpg',
        adult: false,
        overview:
          'Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.',
        release_date: '2019-01-03'
      }
    ],
    page: 1,
    total_results: 984,
    dates: {
      maximum: '2019-03-26',
      minimum: '2019-02-06'
    },
    total_pages: 50
  });
});

module.exports = route;
