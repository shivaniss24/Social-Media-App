import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    caption: "Art 🤩",
    image: "https://c4.wallpaperflare.com/wallpaper/990/382/349/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg",
    likes: {
      likeCount: 0,
      likedBy: []
    },
    name: "john doe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userImage: "https://marketplace.canva.com/EAFUpIuCKhY/1/0/1600w/canva-gradient-minimalist-instagram-profile-picture--IT8JYmKpm0.jpg",
    email: "john.doe@gmail.com",
    isBookmarked: false,
    isFollowed: true,
    isTrending: false,
    isLiked: false,
    latestCount: 0
  },
  {
    _id: uuid(),
    caption: "Evening 😄",
    image: "https://i.pinimg.com/originals/b6/ea/d3/b6ead3e26f1528c416a10576b63e1030.jpg",
    likes: {
      likeCount: 2,
      likedBy: []
    },
    name: "abhi soni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userImage: "https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg",
    email: "abhi.soni@gmail.com",
    isBookmarked: false,
    isFollowed: false,
    isTrending: true,
    isLiked: true,
    latestCount: 0
  },
  {
    _id: uuid(),
    caption: "Morning",
    image: "https://e0.pxfuel.com/wallpapers/971/282/desktop-wallpaper-sunrise-sunset-morning-nature-spring-amazing-for-16-9.jpg",
    likes: {
      likeCount: 0,
      likedBy: []
    },
    name: "taylor",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userImage: "https://i.pinimg.com/736x/b6/bc/29/b6bc292132fac47c2231aac12cd52610.jpg",
    email: "taylor@gmail.com",
    isBookmarked: false,
    isFollowed: false,
    isTrending: true,
    isLiked: false,
    latestCount: 0
  },
  {
    _id: uuid(),
    caption: "Chai 🤩",
    image: "https://assets.cntraveller.in/photos/60ba136f1fa22668f0259d5d/16:9/pass/yewalechai.jpg",
    likes: {
      likeCount: 9800,
      likedBy: []
    },
    name: "Narendra Modi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userImage: "https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg",
    email: "narendra.modi@gmail.com",
    isBookmarked: false,
    isFollowed: true,
    isTrending: true,
    isLiked: true,
    latestCount: 0
  },
  {
    _id: uuid(),
    caption: "Office 🤩",
    image: "https://c4.wallpaperflare.com/wallpaper/965/334/486/google-office-building-wallpaper-preview.jpg",
    likes: {
      likeCount: 1,
      likedBy: []
    },
    name: "Sundar Pichai",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userImage: "https://i.guim.co.uk/img/media/fd9b9ed4d416bd1867fe356e49975b9527c26765/0_59_2588_1553/master/2588.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9524bc6ee58b97a7230c38228afaecec",
    email: "sundar.pichai@gmail.com",
    isBookmarked: false,
    isFollowed: false,
    isTrending: false,
    isLiked: true,
    latestCount: 0
  },
  {
    _id: uuid(),
    caption: "coding 🤩",
    image: "https://i.rtings.com/assets/pages/ujDprOVq/best-monitors-for-programming-and-coding-medium.jpg",
    likes: {
      likeCount: 1100,
      likedBy: []
    },
    name: "Shivani Soni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userImage: "https://lh3.googleusercontent.com/a/AAcHTtfZQSPsFxNpSA9JYrTLafx9QdY4XehwHftUav-2u9lrlQ=s96-c",
    email: "eng.shivanisoni2405@gmail.com",
    isBookmarked: false,
    isFollowed: true,
    isTrending: false,
    isLiked: true,
    latestCount: 0
  },
  {
    _id: uuid(),
    caption: "music",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS93pZW5gLQD1tzAa8-3p4GWKyPvNX-6j8w&usqp=CAU",
    likes: {
      likeCount: 988,
      likedBy: []
    },
    name: "Shivani Soni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userImage: "https://lh3.googleusercontent.com/a/AAcHTtfZQSPsFxNpSA9JYrTLafx9QdY4XehwHftUav-2u9lrlQ=s96-c",
    email: "eng.shivanisoni2405@gmail.com",
    isBookmarked: false,
    isFollowed: true,
    isTrending: false,
    isLiked: true,
    latestCount: 0
  }
];
