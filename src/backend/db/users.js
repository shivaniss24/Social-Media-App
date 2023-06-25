import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    name: "john doe",
    username: "john.doe",
    email: "john.doe@gmail.com",
    userImage: "https://marketplace.canva.com/EAFUpIuCKhY/1/0/1600w/canva-gradient-minimalist-instagram-profile-picture--IT8JYmKpm0.jpg",
    isFollowed: true
  },
  {
    _id: uuid(),
    name: "abhi soni",
    username: "abhi.soni",
    userImage: "https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg",
    email: "abhi.soni@gmail.com",
    isFollowed: false
  },
  {
    _id: uuid(),
    name: "narendra modi",
    username: "narendra.modi",
    userImage: "https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg",
    email: "narendra.modi@gmail.com",
    isFollowed: true
  },
  {
    _id: uuid(),
    name: "sundar pichai",
    username: "sundar.pichai",
    userImage: "https://i.guim.co.uk/img/media/fd9b9ed4d416bd1867fe356e49975b9527c26765/0_59_2588_1553/master/2588.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9524bc6ee58b97a7230c38228afaecec",
    email: "sundar.pichai@gmail.com",
    isFollowed: false
  },
  {
    _id: uuid(),
    name: "taylor",
    username: "taylor_123",
    userImage: "https://i.pinimg.com/736x/b6/bc/29/b6bc292132fac47c2231aac12cd52610.jpg",
    email: "taylor@gmail.com",
    isFollowed: false
  }
];
