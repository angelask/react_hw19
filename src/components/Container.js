import React from 'react';
import React, { Component } from "react";
import table from "./table";
import NavBar from "./NavBar";
import API from "../utils/API";

export default class Container extends Component {
    state = {
      users: [{}],
      order: "asecding",
      filteredUsers: [{}]
    }