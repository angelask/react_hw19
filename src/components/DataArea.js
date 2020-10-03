
import React, { Component } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";

export default class DataArea extends Component {
    state = {
      users: [{}],
      order: "descending",
      filteredUsers: [{}]
    }

    //styling for API data

    headings = [
      { name: "Image", width: "10%" },
      { name: "Name", width: "10%" },
      { name: "Phone", width: "20%" },
      { name: "Email", width: "20%" },
      { name: "DOB", width: "10%" }
    ]

    handleSort = heading => {
      if (this.state.order === "descend") {
        this.setState({
          order: "ascend"
        })
      } else {
        this.setState({
          order: "descend"
        })
      }
     //functions to allow user to filter data on specified criterion
      const compareFnc = (a, b) => {
        if (this.state.order === "ascend") {
          // this accounts for missing values
          if (a[heading] === undefined) {
            return 1;
          } else if (b[heading] === undefined) {
            return -1;
          }
          // numerically
          else if (heading === "name") {
            return a[heading].first.localeCompare(b[heading].first);
          } else {
            return a[heading] - b[heading];
          }
        } else {
          // this accounts for missing values
          if (a[heading] === undefined) {
            return 1;
          } else if (b[heading] === undefined) {
            return -1;
          }
          // numerically
          else if (heading === "name") {
            return b[heading].first.localeCompare(a[heading].first);
          } else {
            return b[heading] - a[heading];
          }
        }
  
      }
      const sortedUsers = this.state.filteredUsers.sort(compareFnc);
      this.setState({ filteredUsers: sortedUsers });
    }

    handleSearchChange = event => {
      console.log(event.target.value);
      const filter = event.target.value;
      const filteredList = this.state.users.filter(item => {
        // this will join data together, then see if user input is anywhere inside. it will change all inputs to lower case
        let values = Object.values(item)
          .join("")
          .toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
      });
      this.setState({ filteredUsers: filteredList });
    }
  //impliments a semantic ui dropdown list using hooks, this will fetch results for user then enable a new search
    componentDidMount() {
      API.getUsers().then(results => {
        this.setState({
          users: results.data.results,
          filteredUsers: results.data.results
        });
      });
  
      console.log(this.state.users);
    }

    render() {
      return (
        <>
          <Nav handleSearchChange={this.handleSearchChange} />
          <div className="data-area">
            <DataTable
              headings={this.headings}
              users={this.state.filteredUsers}
              handleSort={this.handleSort}
            />
          </div>
        </>
      );
    }
  }