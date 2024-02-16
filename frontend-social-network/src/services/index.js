import axios from "axios";
import { register, logout, signin } from "./auth";
import { info, usersByUsername } from "./user";
import {
  selectPublications,
  selectOnePublication,
  selectAuthorInformation,
  insertLike,
  increaseLike,
  updatePublication,
  deletePublication,
  insertPublication,
  getAllPublicationsByUser,
} from "./publications";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const auth = {
  register: register(client),
  signin: signin(client),
  logout: logout(client),
};

const user = {
  info: info(client),
  userSearch: usersByUsername(client),
};

const publications = {
  getPublications: selectPublications(client),
  getOnePublication: selectOnePublication(client),
  getAuthor: selectAuthorInformation(client),
  getAllPublicationsByUser: getAllPublicationsByUser(client),
  addLike: insertLike(client),
  addOneLike: increaseLike(client),
  updatePublication: updatePublication(client),
  deletePublication: deletePublication(client),
  insertPublication: insertPublication(client),
};

export { auth, user, publications };
